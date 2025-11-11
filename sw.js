// sw.js - Service Worker pour Prix Gonflage O2
const CACHE_NAME = 'gonflage-o2-v5';
const urlsToCache = [
  '/Prix-gonflage-O2/',
  '/Prix-gonflage-O2/index.html',
  '/Prix-gonflage-O2/manifest.json',
  '/Prix-gonflage-O2/icon-192.png',
  '/Prix-gonflage-O2/icon-512.png',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js'
];

// Installation
self.addEventListener('install', (event) => {
  console.log('Service Worker installé');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Interception des requêtes
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
