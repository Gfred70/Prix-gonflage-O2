// sw.js - Service Worker pour Prix Gonflage Oxygène
const CACHE_NAME = 'gonflage-o2-v1';
const urlsToCache = [
  '/Prix-gonflage-oxygen/',
  '/Prix-gonflage-oxygen/index.html',
  '/Prix-gonflage-oxygen/manifest.json',
  '/Prix-gonflage-oxygen/icon-192.png',
  '/Prix-gonflage-oxygen/icon-512.png',
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
