const CACHE_NAME = 'raaj-studios-v9';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './Index.html',
  './about.html',
  './services.html',
  './portfolio.html',
  './pricing.html',
  './blog.html',
  './contact.html',
  './hire.html',
  './recruitment.html',
  './testimonials.html',
  './css/variables.css',
  './css/style.css',
  './css/hero.css',
  './css/animations.css',
  './css/responsive.css',
  './css/fluid-typography.css',
  './css/reduced-motion.css',
  './css/transitions.css',
  './css/skeleton.css',
  './css/components.css',
  './js/components.js',
  './js/forms.js',
  './js/modal.js',
  './js/gallery.js',
  './js/toast.js',
  './js/performance.js',
  './js/transitions.js',
  './js/scroll.js',
  './js/counter.js',
  './js/cursor.js',
  './js/navigation.js',
  './js/hero.js',
  './js/skeleton.js',
  './components/navbar.html',
  './components/hero.html',
  './components/footer.html',
  './manifest.json'
];

// Install Event - Pre-cache Core Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker v2] Pre-caching offline core assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event - Purge Old Caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Purging stale cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Network-First Strategy for HTML / Components, Stale-While-Revalidate for Assets
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) return;

  const url = new URL(event.request.url);
  const isHTML = event.request.headers.get('accept')?.includes('text/html') || url.pathname.endsWith('.html');

  if (isHTML) {
    // Network-First for HTML pages to ensure latest content
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // Stale-While-Revalidate for static assets
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {});
        return cachedResponse || fetchPromise;
      })
    );
  }
});
