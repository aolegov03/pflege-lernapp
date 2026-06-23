import { BaseView } from './BaseView.js';
import { createElement } from '../utils/dom.js';

export class TopicDetailView extends BaseView {
  async render(root, params) {
    const { repository, progress } = this.context;
    const topic = repository.getTopicById(params.id);

    if (!topic) {
      root.append(this.emptyState('Thema nicht gefunden', 'Dieses Thema existiert nicht.', this.linkButton('Zur Themenliste', '/topics')));
      return;
    }

    const topicProgress = progress.getTopicProgress(topic.id);
    const stack = this.stack();

    stack.append(this.card([
      createElement('p', { className: 'eyebrow', text: 'Thema' }),
      createElement('h2', { text: topic.title }),
      createElement('p', { className: 'lead', text: topic.subtitle }),
      this.tags(topic.tags),
      createElement('div', { className: 'progress-label' }, [
        createElement('span', { text: 'Fortschritt' }),
        createElement('span', { text: `${topicProgress.percent}%` })
      ]),
      this.progressBar(topicProgress.percent),
      this.actions([
        this.button(topicProgress.lessonRead ? 'Lerntext gelesen' : 'Als gelesen markieren', async () => {
          await progress.markLessonRead(topic.id);
          this.context.router.resolve();
        }, topicProgress.lessonRead ? 'button-secondary' : 'button'),
        this.linkButton('Quiz starten', `/quiz/${topic.id}`, 'button-secondary'),
        this.linkButton('Karteikarten', `/flashcards/${topic.id}`, 'button-secondary')
      ])
    ]));

    if (topic.safetyNote) {
      stack.append(this.card([
        createElement('h3', { text: 'Wichtiger Hinweis' }),
        createElement('p', { text: topic.safetyNote })
      ], 'card warning'));
    }

    topic.sections.forEach((section) => {
      stack.append(this.card([
        createElement('h3', { text: section.heading }),
        createElement('ul', { className: 'section-list' }, section.bullets.map((bullet) => createElement('li', { text: bullet })))
      ]));
    });

    const reportTask = repository.getReportTasks().find((task) => task.topicId === topic.id);
    if (reportTask) {
      stack.append(this.card([
        createElement('h3', { text: 'Passende Pflegebericht-Übung' }),
        createElement('p', { text: reportTask.title }),
        this.linkButton('Pflegebericht üben', '/report', 'button-secondary')
      ], 'card success'));
    }

    root.append(stack);
  }
}
