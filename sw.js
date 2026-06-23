const CACHE_NAME = 'pflege-lernapp-v3-nice-darkmode';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './src/app.js',
  './src/styles/main.css',
  './src/data/learningContent.js',
  './src/core/App.js',
  './src/core/Router.js',
  './src/core/EventBus.js',
  './src/core/ContentRepository.js',
  './src/services/StorageService.js',
  './src/services/ProgressService.js',
  './src/services/SpacedRepetitionService.js',
  './src/services/BackupService.js',
  './src/views/BaseView.js',
  './src/views/HomeView.js',
  './src/views/TopicsView.js',
  './src/views/TopicDetailView.js',
  './src/views/FlashcardsView.js',
  './src/views/QuizView.js',
  './src/views/ReportTrainerView.js',
  './src/views/ProgressView.js',
  './src/utils/date.js',
  './src/utils/dom.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          return networkResponse;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
