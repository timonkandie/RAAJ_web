/* ============================================
   RAAJ Studios — Component Loader v1.0
   Fetches navbar, hero, and footer HTML
   and injects them into their slots.
   Fires 'components:loaded' when done
   so app.js knows it's safe to initialise.
   ============================================ */

async function loadComponent(id, file) {
  const slot = document.getElementById(id);
  if (!slot) return;

  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    const html = await response.text();
    slot.innerHTML = html;
  } catch (err) {
    console.warn(`[Components] Could not load ${file}:`, err.message);
    slot.innerHTML = '';
  }
}

async function initializePage() {

  /* Load shared components */
  await loadComponent('navbar', 'components/navbar.html');
  await loadComponent('footer', 'components/footer.html');

  /* Load hero on homepage only */
  const heroSlot = document.getElementById('hero');
  if (heroSlot) {
    await loadComponent('hero', 'components/hero.html');
  }

  /* Notify app.js that components are ready */
  document.dispatchEvent(new CustomEvent('components:loaded'));
}

initializePage();