/**
 * RAAJ Studios — Adaptive Theme Engine (System Default)
 * Automatically detects the system's preferred color scheme.
 * Swaps the favicon for contrast in dark mode.
 */
(function () {
  const ThemeManager = {
    getSystemTheme() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },

    updateFavicon(theme) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/jpeg';
        document.head.appendChild(link);
      }
      
      if (theme === 'dark') {
        link.href = 'images/my-image-inverted.jpeg';
      } else {
        link.href = 'logos/my-image.jpeg';
      }
    },

    applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      this.updateFavicon(theme);
    },

    init() {
      // Apply system theme immediately
      const initialTheme = this.getSystemTheme();
      this.applyTheme(initialTheme);

      // Listen for OS system theme changes
      try {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (mediaQuery.addEventListener) {
          mediaQuery.addEventListener('change', (e) => {
            const newTheme = e.matches ? 'dark' : 'light';
            this.applyTheme(newTheme);
          });
        } else if (mediaQuery.addListener) {
          mediaQuery.addListener((e) => {
            const newTheme = e.matches ? 'dark' : 'light';
            this.applyTheme(newTheme);
          });
        }
      } catch (e) {
        console.error("Theme listener error:", e);
      }
    }
  };

  // Run immediate application to avoid Flash of Unstyled Content (FOUC)
  const effective = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', effective);
  ThemeManager.updateFavicon(effective);

  // Initialize listener
  ThemeManager.init();
  window.ThemeManager = ThemeManager;
})();
