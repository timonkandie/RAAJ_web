/**
 * Dynamic Component Loader
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

  if (typeof initializeNavigation === 'function') {
    initializeNavigation();
  }

  if (heroLoaded && typeof initializeHero === 'function') {
    initializeHero();
  }
}

document.addEventListener('DOMContentLoaded', initializePageComponents);