/**
 * Modal Window Engine (Task 16)
 * Reusable modal dialog controller with backdrop blur, animations, and keyboard accessibility.
 */
const ModalEngine = {
  activeModal: null,

  /**
   * Open Modal Dialog
   * @param {Object} options
   * @param {string} [options.title] - Modal title header
   * @param {string} options.content - Modal body HTML content
   * @param {string} [options.size='md'] - Size variant ('sm', 'md', 'lg')
   * @param {Function} [options.onClose] - Callback when modal is closed
   */
  open({ title = '', content = '', size = 'md', onClose = null } = {}) {
    this.close(); // Close any existing modal

    let backdrop = document.getElementById('global-modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'global-modal-backdrop';
      backdrop.className = 'modal-backdrop';
      backdrop.innerHTML = `
        <div class="modal-dialog modal-${size}" role="dialog" aria-modal="true">
          <div class="modal-header">
            <h3 class="modal-title"></h3>
            <button class="modal-close" aria-label="Close modal">✕</button>
          </div>
          <div class="modal-body"></div>
        </div>
      `;
      document.body.appendChild(backdrop);

      // Close button listener
      const closeBtn = backdrop.querySelector('.modal-close');
      if (closeBtn) closeBtn.addEventListener('click', () => this.close());

      // Backdrop click listener
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) this.close();
      });
    }

    const dialog = backdrop.querySelector('.modal-dialog');
    const titleEl = backdrop.querySelector('.modal-title');
    const bodyEl = backdrop.querySelector('.modal-body');

    // Update size class
    if (dialog) {
      dialog.className = `modal-dialog modal-${size}`;
    }

    if (titleEl) {
      titleEl.textContent = title;
      titleEl.parentElement.style.display = title ? 'flex' : 'none';
    }

    if (bodyEl) {
      bodyEl.innerHTML = content;
    }

    // Save callback
    this.onCloseCallback = onClose;

    // Lock body scroll & trigger active class
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      backdrop.classList.add('active');
    });

    this.activeModal = backdrop;
  },

  /**
   * Close Active Modal
   */
  close() {
    if (!this.activeModal) return;

    const backdrop = this.activeModal;
    backdrop.classList.remove('active');

    setTimeout(() => {
      document.body.style.overflow = '';
      if (typeof this.onCloseCallback === 'function') {
        this.onCloseCallback();
        this.onCloseCallback = null;
      }
      this.activeModal = null;
    }, 250);
  },

  /**
   * Global Keyboard Accessibility Initialization
   */
  init() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeModal) {
        this.close();
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => ModalEngine.init());

window.ModalEngine = ModalEngine;
