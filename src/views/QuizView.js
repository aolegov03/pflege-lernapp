import { BaseView } from './BaseView.js';
import { createElement } from '../utils/dom.js';

export class QuizView extends BaseView {
  async render(root, params) {
    const { repository, progress } = this.context;
    this.topic = repository.getTopicById(params.id);

    if (!this.topic) {
      root.append(this.emptyState('Quiz nicht gefunden', 'Dieses Thema existiert nicht.', this.linkButton('Zur Themenliste', '/topics')));
      return;
    }

    const savedAttempt = progress.getCurrentQuizAttempt(this.topic.id);
    const canResume = savedAttempt && savedAttempt.questionIndex >= 0 && savedAttempt.questionIndex < this.topic.quiz.length;

    this.index = canResume ? savedAttempt.questionIndex : 0;
    this.answers = canResume ? [...(savedAttempt.answers ?? [])] : [];
    this.correct = canResume ? savedAttempt.correctAnswers : 0;
    this.selectedIndex = this.answers[this.index]?.selectedIndex ?? (canResume ? savedAttempt.selectedIndex : null);
    this.finished = false;

    const stack = this.stack();
    stack.append(this.card([
      createElement('p', { className: 'eyebrow', text: 'Quiz' }),
      createElement('h2', { text: this.topic.title }),
      createElement('p', { className: 'lead', text: 'Wähle die beste Antwort. Deine Antworten werden automatisch auf diesem Gerät gespeichert.' })
    ]));

    this.quizArea = createElement('div');
    stack.append(this.quizArea);
    root.append(stack);
    this.renderQuestion();
  }

  renderQuestion() {
    const question = this.topic.quiz[this.index];
    const difficulty = question.difficulty ?? 'leicht';
    const typeText = question.type ? ` · ${question.type}` : '';
    const wrapper = this.stack();

    this.selectedIndex = this.answers[this.index]?.selectedIndex ?? this.selectedIndex;

    wrapper.append(this.card([
      createElement('p', { className: 'eyebrow', text: `Frage ${this.index + 1}/${this.topic.quiz.length}` }),
      createElement('div', {
        className: `difficulty-badge difficulty-${difficulty}`,
        text: `${this.getDifficultyLabel(difficulty)}${typeText}`
      }),
      createElement('h2', { text: question.question }),
      createElement('div', { className: 'option-list' }, question.options.map((option, index) => {
        let className = 'option-button';
        if (this.selectedIndex !== null && index === question.correctIndex) className += ' correct';
        if (this.selectedIndex === index && index !== question.correctIndex) className += ' wrong';
        return createElement('button', {
          className,
          type: 'button',
          text: option,
          disabled: this.selectedIndex !== null ? 'disabled' : null,
          onClick: () => this.answer(index)
        });
      }))
    ]));

    if (this.selectedIndex !== null) {
      wrapper.append(createElement('section', { className: 'feedback-panel' }, [
        createElement('h3', { text: this.selectedIndex === question.correctIndex ? 'Richtig' : 'Noch nicht richtig' }),
        createElement('p', { text: question.explanation }),
        this.button(this.index === this.topic.quiz.length - 1 ? 'Ergebnis speichern' : 'Nächste Frage', () => this.next())
      ]));
    }

    this.quizArea.replaceChildren(wrapper);
  }

  async answer(index) {
    if (this.selectedIndex !== null) return;

    const question = this.topic.quiz[this.index];
    const isCorrect = index === question.correctIndex;

    this.selectedIndex = index;

    if (isCorrect) {
      this.correct += 1;
    }

    this.answers[this.index] = {
      questionId: question.id,
      selectedIndex: index,
      correct: isCorrect,
      difficulty: question.difficulty ?? 'leicht'
    };

    await this.context.progress.recordQuizAnswer(
      this.topic.id,
      this.index,
      index,
      this.correct,
      this.topic.quiz.length,
      this.answers
    );

    this.renderQuestion();
  }

  async next() {
    if (this.index < this.topic.quiz.length - 1) {
      this.index += 1;
      this.selectedIndex = this.answers[this.index]?.selectedIndex ?? null;

      await this.context.progress.recordQuizAnswer(
        this.topic.id,
        this.index,
        this.selectedIndex,
        this.correct,
        this.topic.quiz.length,
        this.answers
      );

      this.renderQuestion();
      return;
    }

    const difficultyStats = this.buildDifficultyStats();
    const scorePercent = await this.context.progress.recordQuizResult(
      this.topic.id,
      this.correct,
      this.topic.quiz.length,
      difficultyStats
    );

    this.quizArea.replaceChildren(this.emptyState(
      `Quiz beendet: ${scorePercent}%`,
      `Du hast ${this.correct} von ${this.topic.quiz.length} Fragen richtig beantwortet. Dein Ergebnis wurde automatisch gespeichert.`,
      this.linkButton('Zurück zum Thema', `/topic/${this.topic.id}`)
    ));
  }

  buildDifficultyStats() {
    const stats = {};

    for (const answer of this.answers) {
      if (!answer) continue;

      const difficulty = answer.difficulty ?? 'leicht';
      stats[difficulty] ??= { correct: 0, total: 0, percent: 0 };
      stats[difficulty].total += 1;

      if (answer.correct) {
        stats[difficulty].correct += 1;
      }
    }

    for (const value of Object.values(stats)) {
      value.percent = value.total === 0 ? 0 : Math.round((value.correct / value.total) * 100);
    }

    return stats;
  }

  getDifficultyLabel(difficulty) {
    const labels = {
      leicht: 'Leicht',
      mittel: 'Mittel',
      schwer: 'Schwer',
      pruefung: 'Prüfungsfrage'
    };

    return labels[difficulty] ?? 'Leicht';
  }
}
