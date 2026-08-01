/**
 * Hero Section Controller
 */
const heroState = {
  currentService: 'logoDesign',
  currentProject: 0,
  autoplay: true,
  interval: null
};

function getHeroElements() {
  return {
    tabsContainer: document.querySelector(".service-tabs"),
    image: document.querySelector(".project-image img"),
    title: document.querySelector(".project-meta h2"),
    category: document.querySelector(".project-meta p"),
    notes: document.querySelector(".designer-notes"),
    software: document.querySelector(".software-used"),
    action: document.querySelector(".project-action a")
  };
}

function loadService(serviceKey) {
  heroState.currentService = serviceKey;
  heroState.currentProject = 0;

  if (typeof getFeaturedProject === 'function') {
    const featured = getFeaturedProject(serviceKey);
    renderProject(featured);
  }
}

function renderProject(project) {
  if (!project) return;
  if (window.RenderPipeline) {
    RenderPipeline.render(project);
  }
}

function startAutoplay() {
  if (heroState.interval) clearInterval(heroState.interval);
  heroState.interval = setInterval(() => {
    nextProject();
  }, 5000);
}

function stopAutoplay() {
  if (heroState.interval) {
    clearInterval(heroState.interval);
    heroState.interval = null;
  }
}

function nextProject() {
  if (typeof getProjects !== 'function') return;
  const projects = getProjects(heroState.currentService) || [];
  if (projects.length === 0) return;

  heroState.currentProject++;
  if (heroState.currentProject >= projects.length) {
    heroState.currentProject = 0;
  }
  renderProject(projects[heroState.currentProject]);
}

function prevProject() {
  if (typeof getProjects !== 'function') return;
  const projects = getProjects(heroState.currentService) || [];
  if (projects.length === 0) return;

  heroState.currentProject--;
  if (heroState.currentProject < 0) {
    heroState.currentProject = projects.length - 1;
  }
  renderProject(projects[heroState.currentProject]);
}

function initializeHero() {
  const tabs = document.querySelectorAll(".service-tab");
  if (tabs.length === 0) return; // Exit if hero component is not on current page

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const serviceKey = tab.dataset.service || 'logoDesign';
      loadService(serviceKey);
    });
  });

  const prevBtn = document.querySelector(".workspace-footer button:first-child");
  const nextBtn = document.querySelector(".workspace-footer button:last-child");

  if (prevBtn) prevBtn.addEventListener("click", () => prevProject());
  if (nextBtn) nextBtn.addEventListener("click", () => nextProject());

  loadService(heroState.currentService);
  startAutoplay();
}

window.initializeHero = initializeHero;
window.heroState = heroState;