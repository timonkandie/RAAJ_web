/**
 * Application Initialization
 * Handles global configuration, service workers, and app-wide state.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Service Worker Registration
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('[PWA] Service Worker registered scope:', reg.scope))
                .catch(err => console.error('[PWA] Service Worker registration failed:', err));
        });
    }

    console.log('[App] Initialization complete.');
});
