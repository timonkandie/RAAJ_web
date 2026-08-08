/**
 * Portfolio Page Controller
 * Handles filtering of portfolio cards based on selected category.
 */
function initPortfolioPage() {
  const filterButtons = document.querySelectorAll('.reveal .btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  if (!filterButtons.length || !portfolioCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Manage active states on buttons
      filterButtons.forEach(b => {
        b.classList.remove('btn-primary');
        b.classList.add('btn-secondary');
      });
      e.target.classList.remove('btn-secondary');
      e.target.classList.add('btn-primary');

      const filter = e.target.textContent.trim().toLowerCase();

      // Filter cards
      portfolioCards.forEach(card => {
        const categoryElem = card.querySelector('p');
        const categoryText = categoryElem ? categoryElem.textContent.toLowerCase() : '';
        const tagsElem = card.querySelector('.tag');
        const tagText = tagsElem ? tagsElem.textContent.toLowerCase() : '';

        const matches = filter === 'all works' || categoryText.includes(filter) || tagText.includes(filter);

        if (matches) {
          card.style.display = 'flex';
          // Trigger a small animation reflow
          card.style.animation = 'none';
          card.offsetHeight; // trigger reflow
          card.style.animation = null;
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  console.log('[Portfolio] Page initialized with filtering');
}

document.addEventListener('DOMContentLoaded', initPortfolioPage);
window.initPortfolioPage = initPortfolioPage;
