document.addEventListener('DOMContentLoaded', () => {
  const p = document.getElementById('raaj-preloader') || document.getElementById('raaj-loader');
  if (p) {
    p.classList.add('fade-out');
    p.addEventListener('transitionend', () => p.remove());
    // Fallback: force remove after 600ms if transitionend doesn't fire
    setTimeout(() => { if (p.parentNode) p.remove(); }, 700);
  }
});
