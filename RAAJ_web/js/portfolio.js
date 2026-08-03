/* ============================================
   RAAJ Studios — Portfolio Page v1.0
   Controls the portfolio page grid:
   - Renders project cards from Portfolio.js
   - Filters by service category
   - Opens project modal on card click
   - Search functionality
   ============================================ */

const PortfolioPage = {

  activeFilter: 'all',
  searchTerm:   '',

  /* ============================================
     RENDER ALL CARDS
  ============================================ */
  renderCards(projects) {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    if (!projects.length) {
      grid.innerHTML = `
        <div class="portfolio-empty">
          <p>No projects found. Try a different filter.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = projects.map(project => this.buildCard(project)).join('');

    /* Attach click listeners to each card */
    grid.querySelectorAll('.portfolio-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.dataset.slug;
        const project = getProjectBySlug(slug);
        if (project && window.Modal) Modal.openProject(project);
      });
    });

    /* Trigger reveal animations on new cards */
    if (window.Animations) {
      Animations.stagger('.portfolio-card', 80);
    }
  },

  /* ============================================
     BUILD A SINGLE CARD
  ============================================ */
  buildCard(project) {
    const service = services[
      Object.keys(portfolio).find(key =>
        portfolio[key].some(p => p.slug === project.slug)
      )
    ];

    return `
      <div class="portfolio-card card zoom reveal"
           data-slug="${project.slug}"
           data-category="${project.category}"
           role="button"
           tabindex="0"
           aria-label="View ${project.title} project">

        <div class="portfolio-card-image">
          <img
            src="${project.images.hero}"
            alt="${project.title}"
            loading="lazy"
            width="400"
            height="280"
            onerror="this.src='assets/projects/placeholder.webp'"
          >
          <div class="portfolio-card-overlay">
            <span>View Project →</span>
          </div>
        </div>

        <div class="portfolio-card-body">
          <span class="portfolio-card-tag"
                style="background:${service?.color || 'var(--primary-color)'}20;
                       color:${service?.color || 'var(--primary-color)'}">
            ${service?.icon || ''} ${project.category}
          </span>
          <h3>${project.title}</h3>
          <p>${project.client}</p>
          <div class="portfolio-card-software">
            ${project.software.map(s => `<span>${s}</span>`).join('')}
          </div>
        </div>

      </div>
    `;
  },

  /* ============================================
     FILTER
  ============================================ */
  filter(category) {
    this.activeFilter = category;

    /* Update active filter button */
    document.querySelectorAll('.portfolio-filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === category);
    });

    const projects = category === 'all'
      ? getAllProjects()
      : getProjects(category);

    const filtered = this.searchTerm
      ? projects.filter(p =>
          p.title.toLowerCase().includes(this.searchTerm) ||
          p.client.toLowerCase().includes(this.searchTerm)
        )
      : projects;

    this.renderCards(filtered);
  },

  /* ============================================
     SEARCH
  ============================================ */
  search(term) {
    this.searchTerm = term.toLowerCase().trim();

    const base = this.activeFilter === 'all'
      ? getAllProjects()
      : getProjects(this.activeFilter);

    const results = this.searchTerm
      ? searchProjects(this.searchTerm)
      : base;

    this.renderCards(results);
  },

  /* ============================================
     INIT
  ============================================ */
  init() {
    /* Only run on the portfolio page */
    if (!document.getElementById('portfolio-grid')) return;

    /* Render all projects initially */
    this.renderCards(getAllProjects());

    /* Filter buttons */
    document.querySelectorAll('.portfolio-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.filter(btn.dataset.filter);
      });
    });

    /* Search input */
    const searchInput = document.getElementById('portfolio-search');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        this.search(e.target.value);
      });
    }
  },

};