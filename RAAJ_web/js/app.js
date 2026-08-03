/* ============================================
   RAAJ Studios — App Initialiser v1.0
   The last script to load on every page.
   Calls init() on every module in the correct
   order after the DOM and all components
   are ready.
   ============================================ */

/* ============================================
   WAIT FOR COMPONENTS
   components.js loads navbar and footer
   asynchronously. We need to wait for both
   before initialising modules that depend
   on those elements being in the DOM.
============================================ */
async function waitForComponents() {
  return new Promise(resolve => {
    /* If components are already loaded */
    if (document.querySelector('.navbar')) {
      resolve();
      return;
    }
    /* Otherwise wait for the custom event fired by components.js */
    document.addEventListener('components:loaded', resolve, { once: true });
  });
}

/* ============================================
   MAIN INIT
============================================ */
async function initApp() {

  /* 1. Wait for navbar and footer to be in the DOM */
  await waitForComponents();

  /* 2. Navigation (hamburger, scroll shadow) */
  if (window.initializeNavigation) {
    initializeNavigation();
  }

  /* 3. Scroll reveal animations */
  if (window.Animations) {
    Animations.init();
  }

  /* 4. Scroll-triggered counter for hero stats */
  if (window.Counter) {
    Counter.init();
  }

  /* 5. Custom cursor — desktop only */
  if (window.Cursor && window.Performance?.mode !== 'low') {
    Cursor.init();
  }

  /* 6. Page transition overlay */
  if (window.Transitions) {
    Transitions.init();
  }

  /* 7. Toast notifications */
  if (window.Toast) {
    Toast.init();
  }

  /* 8. Modal window */
  if (window.Modal) {
    Modal.init();
  }

  /* 9. Forms — contact, hire, recruitment */
  if (window.Forms) {
    Forms.init();
  }

  /* 10. Hero workspace — homepage only */
  if (window.initializeHero) {
    initializeHero();
  }

  /* 11. Portfolio page grid — portfolio page only */
  if (window.PortfolioPage) {
    PortfolioPage.init();
  }

  /* 12. Mark active nav link for current page */
  markActiveNavLink();

  console.log('[RAAJ Studios] App initialised.');
}

/* ============================================
   MARK ACTIVE NAV LINK
   Highlights the nav link that matches
   the current page URL.
============================================ */
function markActiveNavLink() {
  const currentPage = window.location.pathname
    .split('/')
    .pop()
    .toLowerCase() || 'index.html';

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href')?.toLowerCase();
    const isActive =
      href === currentPage ||
      (currentPage === '' && href === 'index.html');

    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
  });
}

/* ============================================
   START
============================================ */
document.addEventListener('DOMContentLoaded', initApp);