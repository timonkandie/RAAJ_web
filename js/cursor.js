/**
 * RAAJ Studios — Custom Cursor & Hover Effects Engine
 * Task 25: Lerp Trailing Cursor & Contextual Badges
 */

const CustomCursor = {
  dot: null,
  follower: null,
  badge: null,
  
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
  
  isTouch: false,
  isReducedMotion: false,
  ticking: false,

  init() {
    this.checkEnvironment();
    if (this.isTouch || this.isReducedMotion) return;

    this.createElements();
    this.bindEvents();
    this.render();
  },

  checkEnvironment() {
    this.isTouch = 
      window.matchMedia('(pointer: coarse)').matches || 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 ||
      document.documentElement.classList.contains('is-touch-device');
      
    this.isReducedMotion = 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  createElements() {
    // Create elements
    this.dot = document.createElement('div');
    this.dot.className = 'cursor-dot';
    
    this.follower = document.createElement('div');
    this.follower.className = 'cursor-follower';
    
    this.badge = document.createElement('div');
    this.badge.className = 'cursor-badge';
    
    this.follower.appendChild(this.badge);
    document.body.appendChild(this.dot);
    document.body.appendChild(this.follower);
    
    // Set initial position out of bounds to hide until first move
    this.x = -100;
    this.y = -100;
    this.targetX = -100;
    this.targetY = -100;
  },

  bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
      
      // Update dot instantly for crisp response
      this.dot.style.transform = `translate3d(${this.targetX}px, ${this.targetY}px, 0)`;
      this.dot.style.opacity = 1;
      this.follower.style.opacity = 1;
    });

    window.addEventListener('mouseleave', () => {
      this.dot.style.opacity = 0;
      this.follower.style.opacity = 0;
    });

    window.addEventListener('mouseenter', () => {
      this.dot.style.opacity = 1;
      this.follower.style.opacity = 1;
    });

    // Hover States
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, .btn, input, textarea, .card, .portfolio-card, [data-cursor-text]');
      if (!target) {
        this.resetHover();
        return;
      }

      this.follower.classList.add('cursor-hover');

      // Portfolio view badge
      if (target.classList.contains('portfolio-card')) {
        this.showBadge('VIEW');
      } 
      // Lightbox/Gallery zoom badge
      else if (target.classList.contains('lightbox-trigger') || target.tagName === 'IMG') {
        this.showBadge('ZOOM');
      }
      // Custom text badge
      else if (target.dataset.cursorText) {
        this.showBadge(target.dataset.cursorText);
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('a, button, .btn, input, textarea, .card, .portfolio-card, [data-cursor-text]');
      if (target) {
        this.resetHover();
      }
    });
  },

  showBadge(text) {
    this.follower.classList.add('cursor-has-badge');
    this.badge.innerText = text;
  },

  resetHover() {
    this.follower.classList.remove('cursor-hover', 'cursor-has-badge');
    this.badge.innerText = '';
  },

  render() {
    // Lerp Trailing Math
    // x = x + (targetX - x) * easing
    const easing = 0.18;
    this.x += (this.targetX - this.x) * easing;
    this.y += (this.targetY - this.y) * easing;

    this.follower.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`;

    requestAnimationFrame(this.render.bind(this));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  CustomCursor.init();
});

window.CustomCursor = CustomCursor;
