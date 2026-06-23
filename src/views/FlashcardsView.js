import { BaseView } from './BaseView.js';
import { createElement } from '../utils/dom.js';

export class FlashcardsView extends BaseView {
  async render(root, params = {}) {
    this.root = root;
    this.topicId = params.id ?? null;
    this.showAnswer = false;
    this.index = 0;

    const { repository, progress } = this.context;
    const topic = this.topicId ? repository.getTopicById(this.topicId) : null;
    this.cards = this.topicId ? progress.getAllCardsForTopic(this.topicId) : progress.getDueCards();

    if (!this.cards.length) {
      root.append(this.emptyState(
        'Keine fälligen Karteikarten',
        'Aktuell ist keine Karte fällig. Du kannst ein Thema öffnen und dort trotzdem Karten üben.',
        this.linkButton('Themen öffnen', '/topics')
      ));
      return;
    }

    const stack = this.stack();
    stack.append(this.card([
      createElement('p', { className: 'eyebrow', text: 'Karteikarten' }),
      createElement('h2', { text: topic ? topic.title : 'Fällige Wiederholungen' }),
      createElement('p', { className: 'lead', text: topic ? 'Alle Karten dieses Themas werden geübt.' : 'Hier erscheinen die Karten, die nach deinem Lernstand wiederholt werden sollen.' })
    ]));

    this.practiceArea = createElement('div');
    stack.append(this.practiceArea);
    root.append(stack);
    this.renderCard();
  }

  renderCard() {
    const card = this.cards[this.index];
    const wrapper = this.stack();

    wrapper.append(createElement('article', { className: 'flashcard' }, [
      createElement('p', { className: 'label', text: `${card.topicTitle} · Karte ${this.index + 1}/${this.cards.length}` }),
      createElement('p', { className: 'question', text: card.question }),
      this.showAnswer ? createElement('p', { className: 'answer', text: card.answer }) : createElement('p', { className: 'notice', text: 'Tippe auf „Antwort zeigen“, wenn du innerlich geantwortet hast.' })
    ]));

    if (!this.showAnswer) {
      wrapper.append(this.actions([
        this.button('Antwort zeigen', () => {
          this.showAnswer = true;
          this.renderCard();
        })
      ]));
    } else {
      wrapper.append(this.card([
        createElement('h3', { text: 'Wie gut wusstest du es?' }),
        createElement('p', { text: 'Deine Auswahl bestimmt, wann die Karte wieder fällig wird.' }),
        this.actions([
          this.button('Schwer', () => this.rateCard(0), 'button-danger'),
          this.button('Okay', () => this.rateCard(1), 'button-secondary'),
          this.button('Leicht', () => this.rateCard(2), 'button')
        ])
      ]));
    }

    this.practiceArea.replaceChildren(wrapper);
  }

  async rateCard(quality) {
    const card = this.cards[this.index];
    await this.context.progress.reviewCard(card.topicId, card.id, quality);

    if (this.index >= this.cards.length - 1) {
      this.practiceArea.replaceChildren(this.emptyState(
        'Fertig wiederholt',
        'Sehr gut. Deine Antworten wurden gespeichert und die nächsten Wiederholungen geplant.',
        this.linkButton('Zur Startseite', '/')
      ));
      return;
    }

    this.index += 1;
    this.showAnswer = false;
    this.renderCard();
  }
}
