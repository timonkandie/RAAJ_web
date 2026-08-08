/**
 * Preloader Logic
 */
(function() {
  window.addEventListener('load', () => {
    const preloader = document.getElementById('raaj-preloader');
    if (preloader) {
      if (document.documentElement.classList.contains('low-power-device')) {
        preloader.style.display = 'none';
        return;
      }
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.remove();
      }, 600);
    }
  });
})();