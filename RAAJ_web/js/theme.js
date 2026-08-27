/**
 * RAAJ Studios — Adaptive Theme Engine (Light / Dark / Auto)
 * Handles auto-detection, persistence, opposite color modes, and FOUC prevention.
 */
(function () {
  const STORAGE_KEY = 'raaj-theme';

  const ThemeManager = {
    getStoredTheme() {
      return localStorage.getItem(STORAGE_KEY) || 'auto';
    },

    setStoredTheme(theme) {
      localStorage.setItem(STORAGE_KEY, theme);
    },

    getSystemTheme() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },

    getEffectiveTheme() {
      const stored = this.getStoredTheme();
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
      return this.getSystemTheme();
    },

    applyTheme(theme) {
      const effectiveTheme = theme === 'auto' ? this.getSystemTheme() : theme;
      document.documentElement.setAttribute('data-theme', effectiveTheme);
      document.documentElement.setAttribute('data-user-theme', theme);
      
      this.updateToggleUI(effectiveTheme, theme);
    },

    updateToggleUI(effectiveTheme, storedTheme) {
      const toggleButtons = document.querySelectorAll('.theme-toggle, .mobile-theme-toggle');
      toggleButtons.forEach(btn => {
        const iconEl = btn.querySelector('.theme-toggle-icon');
        const textEl = btn.querySelector('.theme-toggle-text');
        
        if (effectiveTheme === 'dark') {
          if (iconEl) iconEl.textContent = '☀️'; // Click to switch to light
          if (textEl) textEl.textContent = 'Light Mode';
          btn.setAttribute('aria-label', 'Switch to Light Mode');
          btn.setAttribute('title', 'Switch to Light Mode');
        } else {
          if (iconEl) iconEl.textContent = '🌙'; // Click to switch to dark
          if (textEl) textEl.textContent = 'Dark Mode';
          btn.setAttribute('aria-label', 'Switch to Dark Mode');
          btn.setAttribute('title', 'Switch to Dark Mode');
        }
      });
    },

    toggleTheme() {
      const currentEffective = this.getEffectiveTheme();
      const nextTheme = currentEffective === 'dark' ? 'light' : 'dark';
      this.setStoredTheme(nextTheme);
      this.applyTheme(nextTheme);
    },

    init() {
      // Apply stored/effective theme immediately
      const initialTheme = this.getStoredTheme();
      this.applyTheme(initialTheme);

      // Listen for OS system theme changes
      try {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
          if (this.getStoredTheme() === 'auto') {
            this.applyTheme('auto');
          }
        });
      } catch (e) {
        // Fallback for older browsers
      }

      // Bind click listeners when DOM is ready
      const bindEvents = () => {
        document.body.addEventListener('click', (e) => {
          const toggleBtn = e.target.closest('.theme-toggle, .mobile-theme-toggle');
          if (toggleBtn) {
            e.preventDefault();
            this.toggleTheme();
          }
        });

        // Ensure icon state matches current theme after dynamic component loads (e.g. navbar fetch)
        this.updateToggleUI(this.getEffectiveTheme(), this.getStoredTheme());
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindEvents);
      } else {
        bindEvents();
      }
    }
  };

  // Run immediate application to avoid Flash of Unstyled Content (FOUC)
  const initialTheme = localStorage.getItem(STORAGE_KEY) || 'auto';
  const effective = initialTheme === 'auto' 
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : initialTheme;
  document.documentElement.setAttribute('data-theme', effective);
  document.documentElement.setAttribute('data-user-theme', initialTheme);

  ThemeManager.init();
  window.ThemeManager = ThemeManager;
})();
