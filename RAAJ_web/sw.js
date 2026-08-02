/* ============================================
   RAAJ Studios — Service Worker v1.0
   Caches all core assets on first visit.
   Every visit after is served from cache,
   falling back to network if not found.
   ============================================ */

const CACHE_NAME = 'raaj-studios-v1';

/* ── Assets to cache immediately on install ── */
const CORE_ASSETS = [

  /* Pages */
  '/',
  '/Index.html',
  '/about.html',
  '/services.html',
  '/portfolio.html',
  '/pricing.html',
  '/blog.html',
  '/recruitment.html',
  '/contact.html',
  '/hire.html',
  '/testimonials.html',

  /* Components */
  '/components/navbar.html',
  '/components/footer.html',
  '/components/hero.html',

  /* CSS */
  '/css/variables.css',
  '/css/style.css',
  '/css/hero.css',
  '/css/animations.css',
  '/css/responsive.css',
  '/css/fluid-typography.css',
  '/css/components.css',
  '/css/skeleton.css',
  '/css/loader.css',
  '/css/transitions.css',
  '/css/reduced-motion.css',

  /* JS — core */
  '/js/app.js',
  '/js/components.js',
  '/js/navigation.js',
  '/js/hero.js',
  '/js/animations.js',
  '/js/forms.js',
  '/js/portfolio.js',

  /* JS — engine */
  '/js/engine/renderPipeline.js',
  '/js/engine/animationengine.js',

  /* JS — data */
  '/js/data/Portfolio.js',

  /* JS — enhancements */
  '/js/performance.js',
  '/js/scroll.js',
  '/js/counter.js',
  '/js/loader.js',
  '/js/toast.js',
  '/js/transitions.js',
  '/js/modal.js',
  '/js/gallery.js',
  '/js/cursor.js',
  '/js/skeleton.js',

  /* Manifest */
  '/manifest.json',

];

/* ── Pages to show when offline ── */
const OFFLINE_PAGE = '/Index.html';

/* ============================================
   INSTALL — cache all core assets
   ============================================ */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        /* Cache what exists — skip missing files silently
           so the SW doesn't fail during early development
           when not all files are created yet            */
        return Promise.allSettled(
          CORE_ASSETS.map(asset =>
            cache.add(asset).catch(() => {
              /* File not found yet — skip, will be cached
                 once it exists on a future visit          */
            })
          )
        );
      })
      .then(() => self.skipWaiting()) /* Activate immediately */
  );
});

/* ============================================
   ACTIVATE — delete old caches on update
   ============================================ */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim()) /* Take control immediately */
  );
});

/* ============================================
   FETCH — serve from cache, fall back to network
   Strategy: Cache First → Network → Offline page
   ============================================ */
self.addEventListener('fetch', event => {

  /* Only handle GET requests */
  if (event.request.method !== 'GET') return;

  /* Skip cross-origin requests (Google Fonts etc)
     — those are handled by the browser normally   */
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {

        /* ── Cache hit: return instantly ── */
        if (cachedResponse) {

          /* Background refresh: fetch updated version
             silently and update the cache for next time */
          fetch(event.request)
            .then(networkResponse => {
              if (networkResponse && networkResponse.ok) {
                caches.open(CACHE_NAME)
                  .then(cache => cache.put(event.request, networkResponse));
              }
            })
            .catch(() => { /* Network unavailable — fine, cache is serving */ });

          return cachedResponse;
        }

        /* ── Cache miss: fetch from network ── */
        return fetch(event.request)
          .then(networkResponse => {

            /* Cache the new response for future visits */
            if (networkResponse && networkResponse.ok) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseToCache));
            }

            return networkResponse;
          })
          .catch(() => {
            /* ── Network unavailable: show offline page ── */
            if (event.request.destination === 'document') {
              return caches.match(OFFLINE_PAGE);
            }
          });
      })
  );
});

/* ============================================
   MESSAGE — allow pages to trigger cache updates
   Usage: navigator.serviceWorker.controller
            .postMessage({ type: 'SKIP_WAITING' })
   ============================================ */
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});