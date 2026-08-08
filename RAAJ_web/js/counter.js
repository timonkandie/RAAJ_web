/**
 * RAAJ Studios — Animated Number Counter Engine
 * Task 24: Cubic Ease-Out Numerical Counter Interpolator
 */

const CounterEngine = {
  observer: null,

  init() {
    this.initObserver();
  },

  initObserver() {
    const counterElements = document.querySelectorAll('[data-counter], [data-count-to]');
    if (counterElements.length === 0) return;

    const options = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.2
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          this.animateCounter(el);
          this.observer.unobserve(el);
        }
      });
    }, options);

    counterElements.forEach(el => this.observer.observe(el));
  },

  animateCounter(el) {
    const target = parseFloat(el.dataset.countTo || el.dataset.counter || el.innerText.replace(/[^0-9.]/g, ''));
    if (isNaN(target)) return;

    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || (el.innerText.includes('+') ? '+' : el.innerText.includes('%') ? '%' : '');
    const duration = parseInt(el.dataset.duration, 10) || 1800;

    // Check Motion Safety
    const prefersReducedMotion = 
      (window.PerformanceMonitor && PerformanceMonitor.metrics.prefersReducedMotion) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      el.innerText = `${prefix}${target}${suffix}`;
      return;
    }

    const startTime = performance.now();

    const updateFrame = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Ease Out Cubic Formula: 1 - Math.pow(1 - progress, 3)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeProgress * target);

      el.innerText = `${prefix}${currentValue}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateFrame);
      } else {
        el.innerText = `${prefix}${target}${suffix}`;
      }
    };

    requestAnimationFrame(updateFrame);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  CounterEngine.init();
});

window.CounterEngine = CounterEngine;
