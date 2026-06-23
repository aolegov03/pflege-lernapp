import { isDue, todayISO } from '../utils/date.js';

const STATE_KEY = 'progress-v1';

export class ProgressService {
  constructor({ storage, repository, spacedRepetition, eventBus }) {
    this.storage = storage;
    this.repository = repository;
    this.spacedRepetition = spacedRepetition;
    this.eventBus = eventBus;
    this.state = null;
  }

  async load() {
    const storedState = await this.storage.get(STATE_KEY);
    this.state = this.normalizeState(storedState ?? this.createInitialState());
    await this.save();
    return this.state;
  }

  createInitialState() {
    return {
      app: 'PflegeLernen',
      schemaVersion: 1,
      createdAt: todayISO(),
      updatedAt: todayISO(),
      topics: {},
      reportAttempts: []
    };
  }

  normalizeState(state) {
    const nextState = {
      ...this.createInitialState(),
      ...state,
      topics: state?.topics ?? {},
      reportAttempts: state?.reportAttempts ?? []
    };

    this.repository.getTopics().forEach((topic) => {
      if (!nextState.topics[topic.id]) {
        nextState.topics[topic.id] = this.createTopicState(topic);
      }

      nextState.topics[topic.id].flashcards ??= {};
      nextState.topics[topic.id].quiz ??= { bestScorePercent: 0, attempts: [] };
      nextState.topics[topic.id].lessonRead ??= false;
      nextState.topics[topic.id].updatedAt ??= todayISO();

      topic.flashcards.forEach((card) => {
        if (!nextState.topics[topic.id].flashcards[card.id]) {
          nextState.topics[topic.id].flashcards[card.id] = this.createCardState();
        }
      });
    });

    return nextState;
  }

  createTopicState(topic) {
    const flashcards = {};
    topic.flashcards.forEach((card) => {
      flashcards[card.id] = this.createCardState();
    });

    return {
      lessonRead: false,
      quiz: { bestScorePercent: 0, attempts: [] },
      flashcards,
      updatedAt: todayISO()
    };
  }

  createCardState() {
    return {
      dueAt: todayISO(),
      intervalDays: 0,
      ease: 2.3,
      repetitions: 0,
      lastQuality: null,
      lastReviewedAt: null
    };
  }

  async save() {
    this.state.updatedAt = todayISO();
    await this.storage.set(STATE_KEY, this.state);
    this.eventBus?.emit('progress:changed', this.state);
  }

  getState() {
    return this.state;
  }

  async markLessonRead(topicId) {
    const topicState = this.getTopicState(topicId);
    topicState.lessonRead = true;
    topicState.updatedAt = todayISO();
    await this.save();
  }

  async recordQuizResult(topicId, correctAnswers, totalQuestions) {
    const topicState = this.getTopicState(topicId);
    const scorePercent = totalQuestions === 0 ? 0 : Math.round((correctAnswers / totalQuestions) * 100);

    topicState.quiz.bestScorePercent = Math.max(topicState.quiz.bestScorePercent ?? 0, scorePercent);
    topicState.quiz.attempts.push({
      correctAnswers,
      totalQuestions,
      scorePercent,
      createdAt: todayISO()
    });
    topicState.updatedAt = todayISO();

    await this.save();
    return scorePercent;
  }

  async reviewCard(topicId, cardId, quality) {
    const topicState = this.getTopicState(topicId);
    const previous = topicState.flashcards[cardId] ?? this.createCardState();
    topicState.flashcards[cardId] = {
      ...previous,
      ...this.spacedRepetition.schedule(previous, quality)
    };
    topicState.updatedAt = todayISO();
    await this.save();
  }

  async recordReportAttempt(taskId, scorePercent, textLength) {
    this.state.reportAttempts.push({
      taskId,
      scorePercent,
      textLength,
      createdAt: todayISO()
    });
    await this.save();
  }

  getTopicState(topicId) {
    if (!this.state) throw new Error('ProgressService wurde noch nicht geladen.');
    const topic = this.repository.getTopicById(topicId);
    if (!topic) throw new Error(`Thema nicht gefunden: ${topicId}`);
    this.state.topics[topicId] ??= this.createTopicState(topic);
    return this.state.topics[topicId];
  }

  getDueCards(topicId = null) {
    const cards = topicId
      ? this.repository.getFlashcardsByTopic(topicId)
      : this.repository.getAllFlashcards();

    return cards.filter((card) => isDue(this.getTopicState(card.topicId).flashcards[card.id]?.dueAt));
  }

  getAllCardsForTopic(topicId) {
    return this.repository.getFlashcardsByTopic(topicId);
  }

  getTopicProgress(topicId) {
    const topic = this.repository.getTopicById(topicId);
    const topicState = this.getTopicState(topicId);
    const cardStates = Object.values(topicState.flashcards);
    const learnedCards = cardStates.filter((card) => card.repetitions > 0).length;
    const cardPercent = topic.flashcards.length === 0 ? 0 : (learnedCards / topic.flashcards.length) * 100;
    const lessonPercent = topicState.lessonRead ? 100 : 0;
    const quizPercent = topicState.quiz.bestScorePercent ?? 0;

    const topicReportAttempts = this.state.reportAttempts.filter((attempt) => {
      const task = this.repository.getReportTaskById(attempt.taskId);
      return task?.topicId === topicId;
    });
    const reportPercent = topicReportAttempts.length ? Math.max(...topicReportAttempts.map((attempt) => attempt.scorePercent)) : 0;

    const weightedPercent = Math.round(
      lessonPercent * 0.2 +
      cardPercent * 0.35 +
      quizPercent * 0.35 +
      reportPercent * 0.1
    );

    return {
      lessonRead: topicState.lessonRead,
      learnedCards,
      totalCards: topic.flashcards.length,
      cardPercent: Math.round(cardPercent),
      bestQuizPercent: quizPercent,
      reportPercent,
      percent: weightedPercent,
      dueCards: this.getDueCards(topicId).length,
      updatedAt: topicState.updatedAt
    };
  }

  getOverallProgress() {
    const topics = this.repository.getTopics();
    if (!topics.length) return 0;
    const total = topics.reduce((sum, topic) => sum + this.getTopicProgress(topic.id).percent, 0);
    return Math.round(total / topics.length);
  }

  async importState(importedState) {
    if (!importedState || importedState.app !== 'PflegeLernen') {
      throw new Error('Diese Datei ist kein gueltiges PflegeLernen-Backup.');
    }

    this.state = this.normalizeState(importedState);
    await this.save();
  }

  async reset() {
    this.state = this.createInitialState();
    this.state = this.normalizeState(this.state);
    await this.save();
  }
}
