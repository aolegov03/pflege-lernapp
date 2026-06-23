export class ContentRepository {
  constructor(content) {
    this.content = content;
  }

  getTopics() {
    return [...this.content.topics];
  }

  getTopicById(topicId) {
    return this.content.topics.find((topic) => topic.id === topicId) ?? null;
  }

  getAllFlashcards() {
    return this.content.topics.flatMap((topic) =>
      topic.flashcards.map((card) => ({ ...card, topicId: topic.id, topicTitle: topic.title }))
    );
  }

  getFlashcardsByTopic(topicId) {
    const topic = this.getTopicById(topicId);
    if (!topic) return [];
    return topic.flashcards.map((card) => ({ ...card, topicId: topic.id, topicTitle: topic.title }));
  }

  getReportTasks() {
    return [...this.content.reportTasks];
  }

  getReportTaskById(taskId) {
    return this.content.reportTasks.find((task) => task.id === taskId) ?? null;
  }
}
