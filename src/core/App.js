import { learningContent } from '../data/learningContent.js';
import { ContentRepository } from './ContentRepository.js';
import { EventBus } from './EventBus.js';
import { Router } from './Router.js';
import { StorageService } from '../services/StorageService.js';
import { ProgressService } from '../services/ProgressService.js';
import { SpacedRepetitionService } from '../services/SpacedRepetitionService.js';
import { BackupService } from '../services/BackupService.js';
import { HomeView } from '../views/HomeView.js';
import { TopicsView } from '../views/TopicsView.js';
import { TopicDetailView } from '../views/TopicDetailView.js';
import { FlashcardsView } from '../views/FlashcardsView.js';
import { QuizView } from '../views/QuizView.js';
import { ReportTrainerView } from '../views/ReportTrainerView.js';
import { ProgressView } from '../views/ProgressView.js';
import { BaseView } from '../views/BaseView.js';

export class App {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.eventBus = new EventBus();
    this.repository = new ContentRepository(learningContent);
    this.storage = new StorageService();
    this.spacedRepetition = new SpacedRepetitionService();
    this.progress = null;
    this.backup = null;
    this.router = null;
  }

  async init() {
    await this.storage.init();

    this.progress = new ProgressService({
      storage: this.storage,
      repository: this.repository,
      spacedRepetition: this.spacedRepetition,
      eventBus: this.eventBus
    });
    await this.progress.load();

    this.backup = new BackupService(this.progress);

    const context = {
      repository: this.repository,
      progress: this.progress,
      backup: this.backup,
      eventBus: this.eventBus,
      router: null
    };

    this.router = new Router(this.rootElement, {
      onRouteChange: (path) => this.updateNavigation(path),
      notFoundFactory: () => new BaseView(context)
    });
    context.router = this.router;

    this.router
      .add('/', () => new HomeView(context))
      .add('/topics', () => new TopicsView(context))
      .add('/topic/:id', () => new TopicDetailView(context))
      .add('/flashcards', () => new FlashcardsView(context))
      .add('/flashcards/:id', () => new FlashcardsView(context))
      .add('/quiz/:id', () => new QuizView(context))
      .add('/report', () => new ReportTrainerView(context))
      .add('/progress', () => new ProgressView(context));

    this.updateStorageStatus();
    this.router.start();
    this.registerServiceWorker();
  }

  updateStorageStatus() {
    const status = document.querySelector('#storageStatus');
    if (!status) return;
    status.textContent = this.storage.usesFallback ? 'lokal gespeichert' : 'offlinefähig';
  }

  updateNavigation(path) {
    document.querySelectorAll('[data-route]').forEach((link) => {
      const route = link.dataset.route;
      const isActive = route === '/' ? path === '/' : path.startsWith(route);
      link.classList.toggle('active', isActive);
    });
  }

  registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;

    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch((error) => {
        console.warn('Service Worker konnte nicht registriert werden.', error);
      });
    });
  }
}
