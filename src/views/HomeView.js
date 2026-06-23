import { BaseView } from './BaseView.js';
import { createElement } from '../utils/dom.js';

export class HomeView extends BaseView {
  async render(root) {
    const { repository, progress } = this.context;
    const topics = repository.getTopics();
    const dueCards = progress.getDueCards();
    const overallProgress = progress.getOverallProgress();
    const completedTopics = topics.filter((topic) => progress.getTopicProgress(topic.id).percent >= 80).length;

    const stack = this.stack();

    stack.append(this.card([
      createElement('p', { className: 'eyebrow', text: 'Heute lernen' }),
      createElement('h2', { text: 'Dein Pflege-Lernplan' }),
      createElement('p', {
        className: 'lead',
        text: 'Wiederhole fällige Karteikarten, übe ein Quiz und schreibe einen Pflegebericht. Dein Fortschritt wird lokal auf diesem Gerät gespeichert.'
      }),
      createElement('div', { className: 'stats-row' }, [
        createElement('div', { className: 'stat' }, [createElement('strong', { text: `${overallProgress}%` }), createElement('span', { text: 'gesamt' })]),
        createElement('div', { className: 'stat' }, [createElement('strong', { text: String(dueCards.length) }), createElement('span', { text: 'fällig' })]),
        createElement('div', { className: 'stat' }, [createElement('strong', { text: `${completedTopics}/${topics.length}` }), createElement('span', { text: 'stark' })])
      ]),
      this.actions([
        this.linkButton(dueCards.length ? 'Karteikarten starten' : 'Themen ansehen', dueCards.length ? '/flashcards' : '/topics'),
        this.linkButton('Pflegebericht üben', '/report', 'button-secondary')
      ])
    ], 'card hero'));

    stack.append(this.card([
      createElement('h2', { text: 'Empfehlung' }),
      createElement('p', { text: this.recommendationText(dueCards.length, overallProgress) }),
      this.actions([
        this.linkButton('Alle Themen', '/topics', 'button-secondary'),
        this.linkButton('Fortschritt sichern', '/progress', 'button-ghost')
      ])
    ]));

    const topicGrid = createElement('div', { className: 'grid two' });
    topics.slice(0, 4).forEach((topic) => {
      const topicProgress = progress.getTopicProgress(topic.id);
      topicGrid.append(createElement('article', { className: 'topic-card' }, [
        createElement('header', {}, [
          createElement('div', {}, [
            createElement('h3', { text: topic.title }),
            createElement('p', { text: topic.subtitle })
          ]),
          createElement('strong', { text: `${topicProgress.percent}%` })
        ]),
        this.progressBar(topicProgress.percent),
        this.linkButton('Öffnen', `/topic/${topic.id}`, 'button-secondary')
      ]));
    });

    stack.append(this.card([
      createElement('h2', { text: 'Schnellzugriff' }),
      topicGrid
    ]));

    root.append(stack);
  }

  recommendationText(dueCount, overallProgress) {
    if (dueCount > 0) {
      return `Du hast ${dueCount} fällige Karteikarten. Wiederhole sie zuerst, weil diese Karten gerade wieder dran sind.`;
    }
    if (overallProgress < 40) {
      return 'Starte mit Wadenwickel, Fieber und Vitalwerten. Danach kannst du Pflegebericht-Übungen ergänzen.';
    }
    return 'Sehr gut. Heute kannst du ein Quiz oder einen Pflegebericht schreiben, damit du das Wissen aktiv anwendest.';
  }
}
