import { BaseView } from './BaseView.js';
import { createElement } from '../utils/dom.js';
import { formatDateTime } from '../utils/date.js';

export class TopicsView extends BaseView {
  async render(root) {
    const { repository, progress } = this.context;
    const stack = this.stack();

    stack.append(this.card([
      this.heading('Themen', 'Wähle ein Thema aus. Jede Einheit enthält Lerntext, Karteikarten und Quiz.'),
      createElement('p', { className: 'notice', text: 'Tipp: Erst Lerntext lesen, dann Quiz machen, danach Karteikarten wiederholen.' })
    ]));

    const topicList = createElement('div', { className: 'grid' });
    repository.getTopics().forEach((topic) => {
      const topicProgress = progress.getTopicProgress(topic.id);
      topicList.append(createElement('article', { className: 'topic-card' }, [
        createElement('header', {}, [
          createElement('div', {}, [
            createElement('h3', { text: topic.title }),
            createElement('p', { text: topic.subtitle }),
            this.tags(topic.tags)
          ]),
          createElement('strong', { text: `${topicProgress.percent}%` })
        ]),
        createElement('div', { className: 'progress-label' }, [
          createElement('span', { text: `${topicProgress.learnedCards}/${topicProgress.totalCards} Karten gelernt` }),
          createElement('span', { text: `Quiz: ${topicProgress.bestQuizPercent}%` })
        ]),
        this.progressBar(topicProgress.percent),
        createElement('p', { className: 'notice', text: `Zuletzt geändert: ${formatDateTime(topicProgress.updatedAt)} · Fällige Karten: ${topicProgress.dueCards}` }),
        this.actions([
          this.linkButton('Lernen', `/topic/${topic.id}`),
          this.linkButton('Quiz', `/quiz/${topic.id}`, 'button-secondary')
        ])
      ]));
    });

    stack.append(topicList);
    root.append(stack);
  }
}
