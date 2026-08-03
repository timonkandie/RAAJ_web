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
 * Portfolio Card Component Generator (Task 9)
 * @param {Object} project - Project object from Portfolio.js
 * @returns {string} Generated HTML string for Portfolio Card
 */
function createPortfolioCard(project = {}) {
  const {
    title = 'Untitled Project',
    client = 'RAAJ Studios',
    category = 'Design',
    slug = '',
    images = {},
    tags = []
  } = project;

  const heroImage = images.hero || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop';

  const tagsHTML = tags.length > 0
    ? `<div class="tag-group">${tags.slice(0, 3).map(tag => `<span class="tag tag-light">${tag}</span>`).join('')}</div>`
    : '';

  return `
    <div class="card portfolio-card" data-slug="${slug}">
      <div class="portfolio-card-media">
        <img src="${heroImage}" alt="${title}" loading="lazy">
        <div class="portfolio-card-overlay">
          <span class="portfolio-card-badge">${category}</span>
          <div class="portfolio-card-body">
            <h3 class="portfolio-card-title">${title}</h3>
            <p class="portfolio-card-client">${client}</p>
            ${tagsHTML}
          </div>
        </div>
      </div>
    </div>
  `.trim();
}

/**
 * Portfolio Grid Component Generator (Task 9)
 * @param {Array<Object>} projectsList - Array of project objects
 * @returns {string} Generated HTML grid string
 */
function createPortfolioGrid(projectsList = []) {
  if (!Array.isArray(projectsList) || projectsList.length === 0) return '';
  const cardsHTML = projectsList.map(project => createPortfolioCard(project)).join('');
  return `<div class="grid grid-3-col portfolio-grid">${cardsHTML}</div>`;
}

/**
 * Auto-initialize Portfolio Card components present in DOM
 */
function initPortfolioCardComponents() {
  const cardContainers = document.querySelectorAll('[data-component="portfolio-card"]');
  cardContainers.forEach(container => {
    const title = container.dataset.title || '';
    const client = container.dataset.client || '';
    const category = container.dataset.category || 'Design';
    const slug = container.dataset.slug || '';
    const image = container.dataset.image || '';
    const tags = container.dataset.tags ? container.dataset.tags.split(',').map(t => t.trim()) : [];

    if (title) {
      container.innerHTML = createPortfolioCard({
        title,
        client,
        category,
        slug,
        images: { hero: image },
        tags
      });
    }
  });
}

/**
 * Testimonial Card Component Generator (Task 10)
 * @param {Object} options
 * @param {string} options.quote - Client testimonial quote text
 * @param {string} options.name - Client name
 * @param {string} [options.role='Client'] - Client role/title
 * @param {string} [options.company=''] - Company/Organization name
 * @param {string} [options.avatarUrl] - Avatar photo URL
 * @param {number} [options.rating=5] - Rating out of 5 stars
 * @returns {string} Generated HTML string for Testimonial Card
 */
function createTestimonialCard({ quote = '', name = '', role = 'Client', company = '', avatarUrl = '', rating = 5 }) {
  const starsHTML = '★'.repeat(Math.min(5, Math.max(1, rating))) + '☆'.repeat(5 - Math.min(5, Math.max(1, rating)));
  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'Client')}&background=EAF8FF&color=33B8FF`;
  const avatar = avatarUrl || defaultAvatar;

  const roleCompany = company ? `${role}, ${company}` : role;

  return `
    <div class="card testimonial-card">
      <div class="testimonial-stars">${starsHTML}</div>
      <p class="testimonial-quote">"${quote}"</p>
      <div class="testimonial-author">
        <img src="${avatar}" alt="${name}" class="testimonial-avatar" loading="lazy">
        <div class="testimonial-info">
          <h4>${name}</h4>
          <p>${roleCompany}</p>
        </div>
      </div>
    </div>
  `.trim();
}

/**
 * Testimonial Grid Component Generator (Task 10)
 * @param {Array<Object>} testimonialsList - Array of testimonial data objects
 * @returns {string} Generated HTML grid string
 */
function createTestimonialGrid(testimonialsList = []) {
  if (!Array.isArray(testimonialsList) || testimonialsList.length === 0) return '';
  const cardsHTML = testimonialsList.map(item => createTestimonialCard(item)).join('');
  return `<div class="grid grid-3-col testimonial-grid">${cardsHTML}</div>`;
}

/**
 * Auto-initialize Testimonial Card components present in DOM
 */
function initTestimonialCardComponents() {
  const containers = document.querySelectorAll('[data-component="testimonial-card"]');
  containers.forEach(container => {
    const quote = container.dataset.quote || '';
    const name = container.dataset.name || '';
    const role = container.dataset.role || 'Client';
    const company = container.dataset.company || '';
    const avatarUrl = container.dataset.avatar || '';
    const rating = parseInt(container.dataset.rating || '5', 10);

    if (quote && name) {
      container.innerHTML = createTestimonialCard({ quote, name, role, company, avatarUrl, rating });
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
  initPortfolioCardComponents();
  initTestimonialCardComponents();

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
window.createPortfolioCard = createPortfolioCard;
window.createPortfolioGrid = createPortfolioGrid;
window.initPortfolioCardComponents = initPortfolioCardComponents;
window.createTestimonialCard = createTestimonialCard;
window.createTestimonialGrid = createTestimonialGrid;
window.initTestimonialCardComponents = initTestimonialCardComponents;