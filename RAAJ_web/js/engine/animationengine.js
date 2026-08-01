/**
 * Animation Engine for RAAJ Studios Web App
 */
const Animation = {
  config: {
    fast: 150,
    normal: 300,
    slow: 600,
    page: 800,
    easing: {
      standard: "ease",
      enter: "ease-out",
      exit: "ease-in",
      smooth: "ease-in-out"
    }
  },

  animate(element, properties = {}) {
    if (!element) return Promise.resolve();

    const {
      duration = this.config.normal,
      easing = this.config.easing.smooth,
      opacity,
      transform
    } = properties;

    return new Promise((resolve) => {
      element.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;

      if (opacity !== undefined) {
        element.style.opacity = opacity;
      }
      if (transform !== undefined) {
        element.style.transform = transform;
      }

      setTimeout(() => {
        resolve();
      }, duration);
    });
  },

  fadeIn(element) {
    return this.animate(element, {
      opacity: 1
    });
  },

  fadeOut(element) {
    return this.animate(element, {
      opacity: 0
    });
  },

  slideUp(element) {
    return this.animate(element, {
      opacity: 1,
      transform: "translateY(0px)"
    });
  },

  slideDown(element) {
    return this.animate(element, {
      opacity: 0,
      transform: "translateY(40px)"
    });
  },

  scaleIn(element) {
    return this.animate(element, {
      transform: "scale(1)",
      opacity: 1
    });
  },

  scaleOut(element) {
    return this.animate(element, {
      transform: "scale(.95)",
      opacity: 0
    });
  },

  rotate(element, degrees) {
    if (element) {
      element.style.transform = `rotate(${degrees}deg)`;
    }
  },

  float(element) {
    if (element) {
      element.classList.add("floating");
    }
  },

  countUp(element, target, duration = 2000) {
    if (!element) return;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + (element.dataset.suffix || "");
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + (element.dataset.suffix || "");
      }
    }, 16);
  },

  workspaceOpen(element) {
    return this.animate(element, {
      opacity: 1,
      transform: "scale(1)"
    });
  },

  workspaceClose(element) {
    return this.animate(element, {
      opacity: 0,
      transform: "scale(0.96)"
    });
  },

  async timeline(steps) {
    for (const step of steps) {
      await step();
    }
  },

  async workspaceTransition(workspace, updateFn) {
    await this.timeline([
      () => this.workspaceClose(workspace),
      async () => {
        if (typeof updateFn === 'function') await updateFn();
      },
      () => this.workspaceOpen(workspace)
    ]);
  }
};

window.Animation = Animation;
