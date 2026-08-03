/* ============================================
   RAAJ Studios — Animations v1.0
   Triggers CSS animation classes on elements
   as they enter the viewport while scrolling.
   Works with the .reveal class in animations.css
   ============================================ */

const Animations = {

  /* Elements currently being observed */
  observer: null,

  /* ── Initialise scroll reveal observer ── */
  init() {

    /* Respect reduced motion preference */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      /* Show all elements immediately without animation */
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('active');
      });
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            /* Stop observing once revealed — no need to re-trigger */
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold:  0.15,  /* Trigger when 15% of element is visible */
        rootMargin: '0px 0px -60px 0px', /* Trigger slightly before edge */
      }
    );

    /* Observe all reveal elements currently in the DOM */
    this.observeAll();
  },

  /* ── Observe all .reveal elements ── */
  observeAll() {
    if (!this.observer) return;
    document.querySelectorAll('.reveal').forEach(el => {
      this.observer.observe(el);
    });
  },

  /* ── Observe a specific element ── */
  observe(element) {
    if (!this.observer || !element) return;
    this.observer.observe(element);
  },

  /* ── Add stagger delay to a group of elements ── */
  stagger(selector, delayStep = 100) {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = `${i * delayStep}ms`;
      el.classList.add('reveal');
      if (this.observer) this.observer.observe(el);
    });
  },

};