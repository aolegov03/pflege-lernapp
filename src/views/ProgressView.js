import { BaseView } from './BaseView.js';
import { createElement } from '../utils/dom.js';
import { formatDateTime } from '../utils/date.js';

export class ProgressView extends BaseView {
  async render(root) {
    const { repository, progress, backup } = this.context;
    const stack = this.stack();
    const overall = progress.getOverallProgress();
    const state = progress.getState();
    const difficultyStats = progress.getDifficultyStats();

    stack.append(this.card([
      createElement('p', { className: 'eyebrow', text: 'Fortschritt' }),
      createElement('h2', { text: `${overall}% Gesamtfortschritt` }),
      createElement('p', { className: 'lead', text: 'Dein Lernstand wird automatisch auf diesem Gerät gespeichert. Export/Import brauchst du nur, wenn du den Stand auf ein anderes Gerät übertragen oder zusätzlich sichern möchtest.' }),
      this.progressBar(overall),
      createElement('p', { className: 'notice', text: `Letzte Speicherung: ${formatDateTime(state.updatedAt)}` })
    ]));

    const rows = createElement('div', { className: 'table-like' });
    repository.getTopics().forEach((topic) => {
      const topicProgress = progress.getTopicProgress(topic.id);
      rows.append(createElement('div', { className: 'table-row' }, [
        createElement('div', {}, [
          createElement('strong', { text: topic.title }),
          createElement('div', { className: 'notice', text: `${topicProgress.learnedCards}/${topicProgress.totalCards} Karten · Quiz ${topicProgress.bestQuizPercent}% · fällig ${topicProgress.dueCards}` })
        ]),
        createElement('strong', { text: `${topicProgress.percent}%` })
      ]));
    });

    stack.append(this.card([
      createElement('h3', { text: 'Themenstand' }),
      rows
    ]));

    stack.append(this.card([
      createElement('h3', { text: 'Quiz nach Schwierigkeit' }),
      createElement('p', { text: 'Hier siehst du, ob du nur Grundlagen kannst oder auch schwere/prüfungsnahe Fragen sicher beantwortest.' }),
      this.renderDifficultyStats(difficultyStats)
    ]));

    const fileInput = createElement('input', {
      className: 'file-input',
      type: 'file',
      accept: 'application/json',
      onChange: async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        try {
          await backup.importProgressFromFile(file);
          alert('Backup wurde importiert.');
          this.context.router.resolve();
        } catch (error) {
          alert(error.message || 'Backup konnte nicht importiert werden.');
        }
      }
    });

    stack.append(this.card([
      createElement('h3', { text: 'Backup' }),
      createElement('p', { text: 'Der Fortschritt speichert sich automatisch. Mit Export/Import kannst du ihn zusätzlich sichern oder zwischen iPhone und iPad übertragen.' }),
      this.actions([
        this.button('Fortschritt exportieren', () => backup.exportProgress()),
        this.button('Alle Daten zurücksetzen', async () => {
          const confirmed = confirm('Wirklich alle Lernfortschritte auf diesem Gerät löschen?');
          if (!confirmed) return;
          await progress.reset();
          this.context.router.resolve();
        }, 'button-danger')
      ]),
      createElement('p', { className: 'notice', text: 'Backup importieren:' }),
      fileInput
    ]));

    stack.append(this.card([
      createElement('h3', { text: 'Wichtiger Hinweis' }),
      createElement('p', { text: 'Speichere hier keine echten Patientennamen oder vertraulichen Falldaten. Nutze Übungsfälle mit erfundenen Namen.' })
    ], 'card warning'));

    root.append(stack);
  }

  renderDifficultyStats(stats) {
    const labels = {
      leicht: 'Leicht',
      mittel: 'Mittel',
      schwer: 'Schwer',
      pruefung: 'Prüfung'
    };

    return createElement('div', { className: 'difficulty-stats' }, Object.entries(labels).map(([key, label]) => {
      const value = stats[key] ?? { correct: 0, total: 0, percent: 0 };
      const text = value.total === 0
        ? 'Noch keine Antworten'
        : `${value.correct}/${value.total} richtig · ${value.percent}%`;

      return createElement('div', { className: 'difficulty-stat-row' }, [
        createElement('span', { className: `difficulty-badge difficulty-${key}`, text: label }),
        createElement('strong', { text })
      ]);
    }));
  }
}
