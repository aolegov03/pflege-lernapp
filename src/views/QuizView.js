import { BaseView } from './BaseView.js';
import { createElement } from '../utils/dom.js';

export class QuizView extends BaseView {
  async render(root, params) {
    const { repository } = this.context;
    this.topic = repository.getTopicById(params.id);

    if (!this.topic) {
      root.append(this.emptyState('Quiz nicht gefunden', 'Dieses Thema existiert nicht.', this.linkButton('Zur Themenliste', '/topics')));
      return;
    }

    this.index = 0;
    this.correct = 0;
    this.selectedIndex = null;
    this.finished = false;

    const stack = this.stack();
    stack.append(this.card([
      createElement('p', { className: 'eyebrow', text: 'Quiz' }),
      createElement('h2', { text: this.topic.title }),
      createElement('p', { className: 'lead', text: 'Wähle die beste Antwort. Am Ende wird dein bestes Ergebnis gespeichert.' })
    ]));

    this.quizArea = createElement('div');
    stack.append(this.quizArea);
    root.append(stack);
    this.renderQuestion();
  }

  renderQuestion() {
    const question = this.topic.quiz[this.index];
    const wrapper = this.stack();

    wrapper.append(this.card([
      createElement('p', { className: 'eyebrow', text: `Frage ${this.index + 1}/${this.topic.quiz.length}` }),
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

  answer(index) {
    this.selectedIndex = index;
    if (index === this.topic.quiz[this.index].correctIndex) {
      this.correct += 1;
    }
    this.renderQuestion();
  }

  async next() {
    if (this.index < this.topic.quiz.length - 1) {
      this.index += 1;
      this.selectedIndex = null;
      this.renderQuestion();
      return;
    }

    const scorePercent = await this.context.progress.recordQuizResult(this.topic.id, this.correct, this.topic.quiz.length);
    this.quizArea.replaceChildren(this.emptyState(
      `Quiz beendet: ${scorePercent}%`,
      `Du hast ${this.correct} von ${this.topic.quiz.length} Fragen richtig beantwortet. Dein Ergebnis wurde gespeichert.`,
      this.linkButton('Zurück zum Thema', `/topic/${this.topic.id}`)
    ));
  }
}
