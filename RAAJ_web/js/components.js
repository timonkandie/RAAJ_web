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
 * Service Card Component Generator
 * @param {Object} options
 * @param {string} options.icon - Emoji or icon character
 * @param {string} options.title - Service title name
 * @param {string} options.description - Service short description
 * @param {string[]} [options.software] - Array of design tools (e.g. ['Illustrator', 'Figma'])
 * @param {string} [options.linkUrl='services.html'] - Target CTA page URL
 * @param {string} [options.ctaText='Learn More'] - Button text label
 * @returns {string} Generated HTML string for Service Card
 */
function createServiceCard({ icon = '🎨', title = '', description = '', software = [], linkUrl = 'services.html', ctaText = 'Learn More' }) {
  const tagsHTML = software.length > 0
    ? `<div class="tag-group">${software.map(tool => `<span class="tag">${tool}</span>`).join('')}</div>`
    : '';

  return `
    <div class="card service-card">
      <div class="service-card-icon">${icon}</div>
      <h3 class="service-card-title">${title}</h3>
      <p class="service-card-desc">${description}</p>
      ${tagsHTML}
      <div class="service-card-footer">
        <a href="${linkUrl}" class="service-card-link">${ctaText} →</a>
      </div>
    </div>
  `.trim();
}

/**
 * Service Grid Component Generator
 * @param {Array<Object>} servicesList - Array of service data objects
 * @returns {string} Generated HTML grid string
 */
function createServiceGrid(servicesList = []) {
  if (!Array.isArray(servicesList) || servicesList.length === 0) return '';
  const cardsHTML = servicesList.map(service => createServiceCard(service)).join('');
  return `<div class="grid grid-3-col">${cardsHTML}</div>`;
}

/**
 * Auto-initialize Service Card components present in DOM
 */
function initServiceCardComponents() {
  const cardContainers = document.querySelectorAll('[data-component="service-card"]');
  cardContainers.forEach(container => {
    const icon = container.dataset.icon || '🎨';
    const title = container.dataset.title || '';
    const description = container.dataset.description || '';
    const software = container.dataset.software ? container.dataset.software.split(',').map(s => s.trim()) : [];
    const linkUrl = container.dataset.url || 'services.html';
    const ctaText = container.dataset.cta || 'Learn More';

    if (title) {
      container.innerHTML = createServiceCard({ icon, title, description, software, linkUrl, ctaText });
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
  initServiceCardComponents();

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
window.createServiceCard = createServiceCard;
window.createServiceGrid = createServiceGrid;
window.initServiceCardComponents = initServiceCardComponents;