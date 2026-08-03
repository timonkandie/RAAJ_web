/* ============================================
   RAAJ Studios — Animation Engine v1.0
   Central animation controller used across
   the entire site. All transitions, fades,
   slides, and workspace animations go through
   this object.

   Usage:
   await Animation.fadeIn(element)
   await Animation.slideUp(element)
   Animation.countUp(element, 100)
   await Animation.workspaceTransition(fn)
   ============================================ */

const Animation = {

  /* ── Timing config ── */
  config: {
    fast:   150,
    normal: 300,
    slow:   600,
    page:   800,
    easing: {
      standard: 'ease',
      enter:    'ease-out',
      exit:     'ease-in',
      smooth:   'ease-in-out',
    },
  },

  /* ============================================
     CORE ANIMATOR
     Base method all others call.
     Returns a Promise that resolves when
     the transition finishes.
  ============================================ */
  animate(element, properties) {
    return new Promise(resolve => {
      if (!element) {
        resolve();
        return;
      }

      /* Destructure properties with sensible defaults */
      const {
        duration  = this.config.normal,
        easing    = this.config.easing.smooth,
        opacity,
        transform,
      } = properties;

      /* Apply transition */
      element.style.transition =
        `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;

      if (opacity !== undefined) {
        element.style.opacity = opacity;
      }

      if (transform !== undefined) {
        element.style.transform = transform;
      }

      /* Resolve after transition completes */
      setTimeout(resolve, duration);
    });
  },

  /* ============================================
     FADE ANIMATIONS
  ============================================ */
  fadeIn(element, duration = this.config.normal) {
    if (!element) return Promise.resolve();
    element.style.visibility = 'visible';
    return this.animate(element, { opacity: 1, duration });
  },

  fadeOut(element, duration = this.config.normal) {
    if (!element) return Promise.resolve();
    return this.animate(element, { opacity: 0, duration }).then(() => {
      element.style.visibility = 'hidden';
    });
  },

  /* ============================================
     SLIDE ANIMATIONS
  ============================================ */
  slideUp(element, duration = this.config.normal) {
    if (!element) return Promise.resolve();
    return this.animate(element, {
      opacity:   1,
      transform: 'translateY(0px)',
      duration,
    });
  },

  slideDown(element, duration = this.config.normal) {
    if (!element) return Promise.resolve();
    return this.animate(element, {
      opacity:   0,
      transform: 'translateY(40px)',
      duration,
    });
  },

  slideLeft(element, duration = this.config.normal) {
    if (!element) return Promise.resolve();
    return this.animate(element, {
      opacity:   1,
      transform: 'translateX(0px)',
      duration,
    });
  },

  slideRight(element, duration = this.config.normal) {
    if (!element) return Promise.resolve();
    return this.animate(element, {
      opacity:   0,
      transform: 'translateX(40px)',
      duration,
    });
  },

  /* ============================================
     SCALE ANIMATIONS
  ============================================ */
  scaleIn(element, duration = this.config.normal) {
    if (!element) return Promise.resolve();
    return this.animate(element, {
      transform: 'scale(1)',
      opacity:   1,
      duration,
    });
  },

  scaleOut(element, duration = this.config.normal) {
    if (!element) return Promise.resolve();
    return this.animate(element, {
      transform: 'scale(0.9)',
      opacity:   0,
      duration,
    });
  },

  /* ============================================
     UTILITY ANIMATIONS
  ============================================ */
  rotate(element, degrees) {
    if (!element) return;
    element.style.transform = `rotate(${degrees}deg)`;
  },

  float(element) {
    if (!element) return;
    element.classList.add('floating');
  },

  /* ============================================
     COUNT UP ANIMATION
     Animates a number from 0 to target.
     Used for the hero stats (100+, 50+, 5).

     Usage:
     Animation.countUp(element, 100, 2000)
  ============================================ */
  countUp(element, target, duration = 2000) {
    if (!element) return;

    const start     = 0;
    const startTime = performance.now();
    const suffix    = element.dataset.suffix || '';

    const step = (currentTime) => {
      const elapsed  = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      /* Ease out — starts fast, slows near the end */
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * (target - start) + start);

      element.textContent = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = target + suffix;
      }
    };

    requestAnimationFrame(step);
  },

  /* ============================================
     WORKSPACE ANIMATIONS
     Used by renderPipeline.js when switching
     between projects in the hero workspace card.
  ============================================ */
  workspaceClose(workspace) {
    if (!workspace) return Promise.resolve();
    return this.animate(workspace, {
      opacity:   0,
      transform: 'translateY(12px) scale(0.98)',
      duration:  this.config.fast,
      easing:    this.config.easing.exit,
    });
  },

  workspaceOpen(workspace) {
    if (!workspace) return Promise.resolve();
    return this.animate(workspace, {
      opacity:   1,
      transform: 'translateY(0px) scale(1)',
      duration:  this.config.normal,
      easing:    this.config.easing.enter,
    });
  },

  /* ============================================
     TIMELINE
     Runs a sequence of animation steps
     one after another, waiting for each
     to finish before starting the next.

     Usage:
     await Animation.timeline([
       () => Animation.fadeOut(el),
       () => Animation.slideUp(el2),
     ]);
  ============================================ */
  async timeline(steps) {
    for (const step of steps) {
      await step();
    }
  },

  /* ============================================
     WORKSPACE TRANSITION
     Full close → update → open sequence.
     Called by renderPipeline.js render().

     Usage:
     await Animation.workspaceTransition(
       workspace,
       () => RenderPipeline.update(project)
     );
  ============================================ */
  async workspaceTransition(workspace, update) {
    await this.timeline([
      () => this.workspaceClose(workspace),
      async () => update(),
      () => this.workspaceOpen(workspace),
    ]);
  },

};