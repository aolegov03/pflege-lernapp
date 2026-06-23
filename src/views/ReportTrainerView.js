import { BaseView } from './BaseView.js';
import { createElement } from '../utils/dom.js';

export class ReportTrainerView extends BaseView {
  async render(root) {
    const { repository } = this.context;
    this.tasks = repository.getReportTasks();
this.selectedTask = this.tasks[0];
this.currentText = this.context.progress.getReportDraft(this.selectedTask.id);
this.root = root;
this.draftTimer = null;
    const stack = this.stack();
    stack.append(this.card([
      createElement('p', { className: 'eyebrow', text: 'Pflegebericht' }),
      createElement('h2', { text: 'Schreibtrainer' }),
      createElement('p', { className: 'lead', text: 'Lies das Fallbeispiel, schreibe einen sachlichen Pflegebericht und prüfe danach, welche Bausteine enthalten sind.' })
    ]));

    const select = createElement('select', {
      ariaLabel: 'Fallbeispiel auswählen',
      onChange: (event) => {
  this.selectedTask = this.tasks.find((task) => task.id === event.target.value) ?? this.tasks[0];
  this.currentText = this.context.progress.getReportDraft(this.selectedTask.id);
  this.renderTrainer();
}
    }, this.tasks.map((task) => createElement('option', { value: task.id, text: task.title })));

    stack.append(this.card([
      createElement('h3', { text: 'Fall auswählen' }),
      select
    ]));

    this.trainerArea = createElement('div');
    stack.append(this.trainerArea);
    root.append(stack);
    this.renderTrainer();
  }

  renderTrainer(result = null) {
    const task = this.selectedTask;
    const wrapper = this.stack();
    this.textarea = createElement('textarea', {
      placeholder: 'Schreibe hier deinen Pflegebericht ...',
     onInput: (event) => {
  this.currentText = event.target.value;
  this.queueDraftSave();
}
    });
    this.textarea.value = this.currentText;

    wrapper.append(this.card([
      createElement('h3', { text: task.title }),
      createElement('p', { text: task.caseText }),
      this.textarea,
      this.actions([
        this.button('Prüfen und speichern', () => this.checkReport()),
        this.button('Musterlösung anzeigen', () => this.showSample(), 'button-secondary')
      ])
    ]));

    if (result) {
      wrapper.append(this.renderResult(result));
    }

    this.trainerArea.replaceChildren(wrapper);
  }

  queueDraftSave() {
  if (this.draftTimer) {
    clearTimeout(this.draftTimer);
  }

  this.draftTimer = window.setTimeout(() => {
    this.context.progress
      .saveReportDraft(this.selectedTask.id, this.currentText)
      .catch((error) => console.warn('Bericht-Entwurf konnte nicht gespeichert werden.', error));
  }, 500);
}
  
  async checkReport() {
   const text = this.textarea.value.trim();
this.currentText = this.textarea.value;

await this.context.progress.saveReportDraft(this.selectedTask.id, this.currentText);

const result = this.evaluateText(text, this.selectedTask);
await this.context.progress.recordReportAttempt(this.selectedTask.id, result.scorePercent, text.length);

this.renderTrainer(result);
  }

  showSample() {
    const result = {
      scorePercent: null,
      checklist: [],
      sampleOnly: true
    };
    this.renderTrainer(result);
  }

  evaluateText(text, task) {
    const normalized = text.toLowerCase();
    const checklist = task.checklist.map((item) => {
      const found = item.keywords.some((keyword) => normalized.includes(keyword.toLowerCase()));
      return { ...item, found };
    });
    const foundCount = checklist.filter((item) => item.found).length;
    const scorePercent = checklist.length === 0 ? 0 : Math.round((foundCount / checklist.length) * 100);

    return {
      scorePercent,
      checklist,
      sampleOnly: false
    };
  }

  renderResult(result) {
    const task = this.selectedTask;
    const children = [];

    if (!result.sampleOnly) {
      children.push(createElement('h3', { text: `Checkliste: ${result.scorePercent}%` }));
      children.push(createElement('p', { text: 'Diese automatische Prüfung sucht nach wichtigen Bausteinen. Sie ersetzt keine Korrektur durch Lehrkraft oder Praxisanleitung.' }));
      children.push(createElement('ul', { className: 'checklist' }, result.checklist.map((item) =>
        createElement('li', {}, [
          createElement('span', { className: item.found ? 'ok' : 'missing', text: item.found ? '✓' : '!' }),
          createElement('span', { text: item.label })
        ])
      )));
    }

    children.push(createElement('h3', { text: 'Musterlösung' }));
    children.push(createElement('p', { text: task.sample }));

    return this.card(children, result.sampleOnly ? 'card success' : 'card');
  }
}
