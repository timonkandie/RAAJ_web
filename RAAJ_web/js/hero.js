/* ============================================
   RAAJ Studios — Hero Controller v1.0
   Manages the interactive workspace card
   on the homepage hero section.

   Responsibilities:
   - Tab switching between service categories
   - Previous / Next project navigation
   - Autoplay cycling every 5 seconds
   - Slider progress dots
   - Delegates rendering to RenderPipeline
   - Delegates animation to Animation engine
   ============================================ */


/* ============================================
   STATE
   Tracks which service and project are active
   and whether autoplay is running.
============================================ */
const heroState = {
  currentService: 'logoDesign', /* default service key */
  currentProject: 0,            /* index into the projects array */
  autoplay:       true,
  interval:       null,
};


/* ============================================
   SERVICE KEY MAP
   Maps tab labels to portfolio data keys.
   Matches the buttons in hero.html.
============================================ */
const serviceKeyMap = {
  '🎨 Logo Design':    'logoDesign',
  '🖼 Posters':        'posters',
  '📄 Flyers':         'flyers',
  '📦 Packaging':      'packaging',
  '📇 Business Cards': 'businessCards',
};


/* ============================================
   ELEMENT CACHE
   Queried after the hero component loads —
   NOT at the top level, because the hero HTML
   doesn't exist in the DOM yet at script load.
============================================ */
let heroElements = null;

function cacheHeroElements() {
  heroElements = {
    tabs:       document.querySelectorAll('.service-tab'),
    prevBtn:    document.querySelector('.workspace-footer button:first-child'),
    nextBtn:    document.querySelector('.workspace-footer button:last-child'),
    progress:   document.querySelector('.slider-progress'),
    workspace:  document.querySelector('.creative-workspace'),
  };
}


/* ============================================
   PROGRESS DOTS
   Updates the ● ○ ○ ○ ○ indicator
   to reflect the current project index.
============================================ */
function updateProgress(total, current) {
  if (!heroElements?.progress) return;

  const dots = Array.from({ length: total }, (_, i) =>
    i === current ? '●' : '○'
  ).join(' ');

  heroElements.progress.textContent = dots;
}


/* ============================================
   LOAD SERVICE
   Switches to a new service category tab,
   resets to the first project, and renders.
============================================ */
function loadService(serviceKey) {
  if (!portfolio[serviceKey]) return;

  heroState.currentService = serviceKey;
  heroState.currentProject = 0;

  /* Update active tab styling */
  heroElements?.tabs.forEach(tab => {
    const key = serviceKeyMap[tab.textContent.trim()];
    tab.classList.toggle('active', key === serviceKey);
  });

  /* Get featured project or first project */
  const project = getFeaturedProject(serviceKey)
    || getProjects(serviceKey)?.[0];

  if (project) {
    RenderPipeline.render(project);
  }

  const projects = getProjects(serviceKey) || [];
  updateProgress(projects.length, 0);
}


/* ============================================
   NEXT PROJECT
   Advances to the next project in the current
   service. Wraps back to 0 at the end.
============================================ */
function nextProject() {
  const projects = getProjects(heroState.currentService) || [];
  if (!projects.length) return;

  heroState.currentProject =
    (heroState.currentProject + 1) % projects.length;

  RenderPipeline.render(projects[heroState.currentProject]);
  updateProgress(projects.length, heroState.currentProject);
}


/* ============================================
   PREV PROJECT
   Goes back to the previous project.
   Wraps to the last project from index 0.
============================================ */
function prevProject() {
  const projects = getProjects(heroState.currentService) || [];
  if (!projects.length) return;

  heroState.currentProject =
    (heroState.currentProject - 1 + projects.length) % projects.length;

  RenderPipeline.render(projects[heroState.currentProject]);
  updateProgress(projects.length, heroState.currentProject);
}


/* ============================================
   AUTOPLAY
   Cycles through projects every 5 seconds.
   Pauses when user interacts, resumes after
   3 seconds of inactivity.
============================================ */
function startAutoplay() {
  if (heroState.interval) return;
  heroState.interval = setInterval(() => {
    if (heroState.autoplay) nextProject();
  }, 5000);
}

function stopAutoplay() {
  clearInterval(heroState.interval);
  heroState.interval  = null;
  heroState.autoplay  = false;
}

function resumeAutoplay() {
  heroState.autoplay = true;
  if (!heroState.interval) startAutoplay();
}

/* Pause on user interaction, resume after 3s */
function handleUserInteraction() {
  stopAutoplay();
  setTimeout(resumeAutoplay, 3000);
}


/* ============================================
   EVENT LISTENERS
   Attached after hero HTML is in the DOM.
============================================ */
function attachHeroListeners() {

  /* Service tab clicks */
  heroElements.tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = serviceKeyMap[tab.textContent.trim()];
      if (key) {
        loadService(key);
        handleUserInteraction();
      }
    });
  });

  /* Next button */
  if (heroElements.nextBtn) {
    heroElements.nextBtn.addEventListener('click', () => {
      nextProject();
      handleUserInteraction();
    });
  }

  /* Prev button */
  if (heroElements.prevBtn) {
    heroElements.prevBtn.addEventListener('click', () => {
      prevProject();
      handleUserInteraction();
    });
  }

  /* Pause autoplay on workspace hover */
  if (heroElements.workspace) {
    heroElements.workspace.addEventListener('mouseenter', stopAutoplay);
    heroElements.workspace.addEventListener('mouseleave', resumeAutoplay);
  }
}


/* ============================================
   INIT
   Called by app.js after components.js has
   finished loading the hero HTML into the DOM.
============================================ */
function initializeHero() {

  /* Only run on the homepage */
  if (!document.getElementById('hero')) return;

  cacheHeroElements();

  /* Bail out if hero elements aren't in the DOM */
  if (!heroElements.workspace) {
    console.warn('[Hero] Workspace element not found — hero init skipped.');
    return;
  }

  attachHeroListeners();
  loadService(heroState.currentService);
  startAutoplay();

  console.log('[Hero] Initialized on service:', heroState.currentService);
}