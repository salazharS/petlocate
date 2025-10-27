const CACHE_NAME = 'pet-locate-cache-v1';
const urlsToCache = [
  './index.html',
  '/pets/pet_locate.html',
  '/pets/dashboard.html',
  '/pets/add_edit_pet.html',
  '/pets/images/icon-192x192.png',
  '/pets/images/icon-512x512.png',
  // Adicione outros assets que você deseja cachear
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

