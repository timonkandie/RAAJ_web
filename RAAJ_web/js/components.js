/**
 * Dynamic Component Loader & Component Library Generators
 */

/**
 * Section Title Component Generator
 * @param {Object} options
 * @param {string} [options.badge] - Optional badge text
 * @param {string} options.title - Main heading title text
 * @param {string} [options.highlightText] - Specific word/phrase within title to highlight with gradient
 * @param {string} [options.subtitle] - Subtitle descriptive paragraph
 * @param {string} [options.align='center'] - Alignment ('center', 'left', 'right')
 * @returns {string} Generated HTML string for section header
 */
function createSectionTitle({ badge, title = '', highlightText = '', subtitle = '', align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
  
  let formattedTitle = title;
  if (highlightText && title.includes(highlightText)) {
    formattedTitle = title.replace(
      highlightText,
      `<span class="text-gradient">${highlightText}</span>`
    );
  }

  const badgeHTML = badge
    ? `<div class="section-badge"><span class="section-badge-dot"></span>${badge}</div>`
    : '';

  const subtitleHTML = subtitle
    ? `<p class="section-subtitle">${subtitle}</p>`
    : '';

  return `
    <div class="section-header ${alignClass}">
      ${badgeHTML}
      <h2 class="section-title">${formattedTitle}</h2>
      ${subtitleHTML}
    </div>
  `.trim();
}

/**
 * Auto-initialize Section Header components present in DOM
 */
function initSectionHeaderComponents() {
  const containers = document.querySelectorAll('[data-component="section-title"]');
  containers.forEach(container => {
    const badge = container.dataset.badge;
    const title = container.dataset.title;
    const highlightText = container.dataset.highlight;
    const subtitle = container.dataset.subtitle;
    const align = container.dataset.align || 'center';

    if (title) {
      container.innerHTML = createSectionTitle({ badge, title, highlightText, subtitle, align });
    }
  });
}

/**
 * Dynamic Component Fetch Loader
 */
async function loadComponent(id, file) {
  const container = document.getElementById(id);
  if (!container) return false;

  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    container.innerHTML = html;
    return true;
  } catch (err) {
    console.warn(`[Components] Could not load component ${file} into #${id}:`, err);
    return false;
  }
}

async function initializePageComponents() {
  await loadComponent("navbar", "components/navbar.html");
  await loadComponent("footer", "components/footer.html");
  const heroLoaded = await loadComponent("hero-component", "components/hero.html");

  initSectionHeaderComponents();

  if (typeof initializeNavigation === 'function') {
    initializeNavigation();
  }

  if (heroLoaded && typeof initializeHero === 'function') {
    initializeHero();
  }
}

document.addEventListener('DOMContentLoaded', initializePageComponents);

window.createSectionTitle = createSectionTitle;
window.initSectionHeaderComponents = initSectionHeaderComponents;