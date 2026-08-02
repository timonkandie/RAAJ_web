/* ============================================
   RAAJ Studios — Skeleton Screens v1.0
   Injects placeholder shimmer layouts before
   components finish loading, then swaps them
   out cleanly once real content is ready.
   ============================================ */


const Skeleton = {

  /* ── Skeleton HTML templates ── */

  templates: {

    navbar: `
      <div class="skeleton-navbar">
        <div class="skeleton sk-logo"></div>
        <div class="sk-links">
          <div class="skeleton sk-link"></div>
          <div class="skeleton sk-link"></div>
          <div class="skeleton sk-link"></div>
          <div class="skeleton sk-link"></div>
          <div class="skeleton sk-link"></div>
        </div>
        <div class="skeleton sk-btn"></div>
      </div>
    `,

    hero: `
      <div class="skeleton-hero">

        <!-- Left side -->
        <div class="sk-left">
          <div class="skeleton sk-badge"></div>
          <div class="skeleton sk-h1-line"></div>
          <div class="skeleton sk-h1-line"></div>
          <div class="skeleton sk-h1-line"></div>
          <div class="skeleton sk-desc"></div>
          <div class="skeleton sk-desc"></div>
          <div class="skeleton sk-desc"></div>
          <div class="sk-buttons">
            <div class="skeleton sk-btn-primary"></div>
            <div class="skeleton sk-btn-secondary"></div>
          </div>
          <div class="sk-stats">
            <div class="sk-stat">
              <div class="skeleton sk-stat-num"></div>
              <div class="skeleton sk-stat-label"></div>
            </div>
            <div class="sk-stat">
              <div class="skeleton sk-stat-num"></div>
              <div class="skeleton sk-stat-label"></div>
            </div>
            <div class="sk-stat">
              <div class="skeleton sk-stat-num"></div>
              <div class="skeleton sk-stat-label"></div>
            </div>
          </div>
        </div>

        <!-- Right side — workspace card placeholder -->
        <div class="skeleton sk-workspace"></div>

      </div>
    `,

    /* Generic card skeletons — used on inner pages */

    serviceCards: (count = 5) => Array(count).fill(`
      <div class="skeleton-service-card">
        <div class="skeleton sk-icon"></div>
        <div class="skeleton sk-title"></div>
        <div class="skeleton sk-line"></div>
        <div class="skeleton sk-line"></div>
        <div class="skeleton sk-line"></div>
        <div class="skeleton sk-tag"></div>
      </div>
    `).join(''),

    portfolioCards: (count = 6) => Array(count).fill(`
      <div class="skeleton-portfolio-card">
        <div class="skeleton sk-image"></div>
        <div class="sk-body">
          <div class="skeleton sk-category"></div>
          <div class="skeleton sk-title"></div>
          <div class="skeleton sk-subtitle"></div>
        </div>
      </div>
    `).join(''),

    blogCards: (count = 3) => Array(count).fill(`
      <div class="skeleton-blog-card">
        <div class="skeleton sk-image"></div>
        <div class="sk-body">
          <div class="skeleton sk-tag"></div>
          <div class="skeleton sk-title"></div>
          <div class="skeleton sk-title-2"></div>
          <div class="skeleton sk-line"></div>
          <div class="skeleton sk-line"></div>
          <div class="sk-meta">
            <div class="skeleton sk-avatar"></div>
            <div class="skeleton sk-date"></div>
          </div>
        </div>
      </div>
    `).join(''),

    testimonialCards: (count = 3) => Array(count).fill(`
      <div class="skeleton-testimonial-card">
        <div class="skeleton sk-stars"></div>
        <div class="skeleton sk-line"></div>
        <div class="skeleton sk-line"></div>
        <div class="skeleton sk-line"></div>
        <div class="sk-author">
          <div class="skeleton sk-avatar"></div>
          <div>
            <div class="skeleton sk-name"></div>
            <div class="skeleton sk-role"></div>
          </div>
        </div>
      </div>
    `).join(''),

    sectionTitle: `
      <div class="skeleton-section-title">
        <div class="skeleton sk-tag"></div>
        <div class="skeleton sk-heading"></div>
        <div class="skeleton sk-sub"></div>
      </div>
    `,

    footer: `
      <div class="skeleton-footer">
        <div class="sk-col">
          <div class="skeleton sk-logo"></div>
          <div class="skeleton sk-line" style="width:100%"></div>
          <div class="skeleton sk-line" style="width:85%"></div>
          <div class="skeleton sk-line" style="width:70%"></div>
        </div>
        <div class="sk-col">
          <div class="skeleton sk-col-title"></div>
          <div class="skeleton sk-line" style="width:80%"></div>
          <div class="skeleton sk-line" style="width:60%"></div>
          <div class="skeleton sk-line" style="width:70%"></div>
        </div>
        <div class="sk-col">
          <div class="skeleton sk-col-title"></div>
          <div class="skeleton sk-line" style="width:75%"></div>
          <div class="skeleton sk-line" style="width:65%"></div>
          <div class="skeleton sk-line" style="width:55%"></div>
        </div>
        <div class="sk-col">
          <div class="skeleton sk-col-title"></div>
          <div class="skeleton sk-line" style="width:80%"></div>
          <div class="skeleton sk-line" style="width:60%"></div>
        </div>
      </div>
    `,

  },


  /* ── Show skeleton in a container ── */

  show(containerId, type, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';

    switch (type) {
      case 'navbar':
        html = this.templates.navbar;
        break;
      case 'hero':
        html = this.templates.hero;
        break;
      case 'serviceCards':
        html = this.templates.serviceCards(options.count);
        break;
      case 'portfolioCards':
        html = this.templates.portfolioCards(options.count);
        break;
      case 'blogCards':
        html = this.templates.blogCards(options.count);
        break;
      case 'testimonialCards':
        html = this.templates.testimonialCards(options.count);
        break;
      case 'sectionTitle':
        html = this.templates.sectionTitle;
        break;
      case 'footer':
        html = this.templates.footer;
        break;
      default:
        console.warn(`Skeleton: unknown type "${type}"`);
        return;
    }

    container.innerHTML = html;
    container.setAttribute('data-skeleton', type);
  },


  /* ── Remove skeleton and reveal real content ── */

  hide(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    /* Fade out skeleton */
    container.style.transition = 'opacity 0.3s ease';
    container.style.opacity = '0';

    setTimeout(() => {
      /* Remove skeleton markup */
      const skeletonEls = container.querySelectorAll(
        '[class*="skeleton"]'
      );
      skeletonEls.forEach(el => el.remove());

      /* Reveal real content */
      container.style.opacity = '1';
      container.removeAttribute('data-skeleton');
    }, 300);
  },


  /* ── Auto-init: show skeletons before components load ── */

  init() {
    /* Show navbar skeleton immediately */
    const navbarSlot = document.getElementById('navbar');
    if (navbarSlot) {
      this.show('navbar', 'navbar');
    }

    /* Show footer skeleton immediately */
    const footerSlot = document.getElementById('footer');
    if (footerSlot) {
      this.show('footer', 'footer');
    }

    /* Show hero skeleton on homepage only */
    const heroSlot = document.getElementById('hero');
    if (heroSlot) {
      this.show('hero', 'hero');
    }
  },

};


/* ── Run on page load ── */
document.addEventListener('DOMContentLoaded', () => {
  Skeleton.init();
});