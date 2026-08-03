/* ============================================
   RAAJ Studios — Render Pipeline v1.0
   Controls what project appears in the hero
   workspace card. Every tab switch and slider
   navigation goes through this pipeline:
   close → update DOM → open
   ============================================ */

const RenderPipeline = {

  /* ── Close the workspace with a fade out ── */
  async close() {
    const workspace = document.querySelector('.creative-workspace');
    if (!workspace) return;
    await Animation.fadeOut(workspace);
  },

  /* ── Update the DOM with new project data ── */
  update(project) {
    if (!project) return;

    /* Project image */
    const img = document.querySelector('.project-image img');
    if (img) {
      img.src = project.image || 'assets/projects/placeholder.webp';
      img.alt = project.title  || 'Project Image';
    }

    /* Project title and category */
    const title    = document.querySelector('.project-meta h2');
    const category = document.querySelector('.project-meta p');
    if (title)    title.textContent    = project.title    || '';
    if (category) category.textContent = project.category || '';

    /* Challenge and solution notes */
    const notes = document.querySelectorAll('.designer-notes p');
    if (notes[0]) notes[0].textContent = project.challenge || '';
    if (notes[1]) notes[1].textContent = project.solution  || '';

    /* Software used */
    const software = document.querySelector('.software-used');
    if (software) {
      software.textContent = project.software
        ? project.software.join('  •  ')
        : '';
    }

    /* View project link */
    const link = document.querySelector('.project-action a');
    if (link) {
      link.href = project.link || '#';
    }

    console.log('[RenderPipeline] Updated workspace:', project.title);
  },

  /* ── Open the workspace with a fade in ── */
  async open() {
    const workspace = document.querySelector('.creative-workspace');
    if (!workspace) return;
    await Animation.fadeIn(workspace);
  },

  /* ── Full render: close → update → open ── */
  async render(project) {
    if (!project) return;
    await this.close();
    this.update(project);
    await this.open();
  },

};