/**
 * Main Application Bootstrapper
 */
const App = {
  init() {
    this.registerServiceWorker();
    this.checkPerformanceMode();
  },

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then(reg => console.log('[PWA] Service Worker registered scope:', reg.scope))
          .catch(err => console.error('[PWA] Service Worker registration failed:', err));
      });
    }
  },

  checkPerformanceMode() {
    if (window.PerformanceMonitor) {
      // Logic handled automatically by PerformanceMonitor, but we can hook in here if needed
      if (PerformanceMonitor.isLowPowerDevice()) {
        console.log('[RAAJ Studios App] Running in low-power mode.');
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
  console.log('[RAAJ Studios App] Bootstrapped successfully');
});

window.App = App;
