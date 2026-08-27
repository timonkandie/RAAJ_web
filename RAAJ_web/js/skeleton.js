/**
 * Skeleton Loader Manager
 * Handles skeleton screen transitions for dynamically loaded components
 */
const SkeletonManager = {
  show(container) {
    if (!container) return;
    container.classList.add('is-loading');
  },

  hide(container) {
    if (!container) return;
    container.classList.remove('is-loading');
    const placeholders = container.querySelectorAll('.skeleton-placeholder');
    placeholders.forEach(el => el.remove());
  },

  createCardSkeleton() {
    const card = document.createElement('div');
    card.className = 'skeleton-placeholder skeleton-card skeleton';
    return card;
  }
};

window.SkeletonManager = SkeletonManager;
