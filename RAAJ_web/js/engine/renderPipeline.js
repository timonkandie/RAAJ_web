/**
 * Render Pipeline for workspace & project rendering
 */
const RenderPipeline = {
  async render(project) {
    await this.close();
    this.update(project);
    await this.open();
  },

  async close() {
    const workspace = document.querySelector(".creative-workspace");
    if (workspace && window.Animation) {
      await Animation.fadeOut(workspace);
    }
  },

  update(project) {
    if (!project) return;
    console.log("Updating workspace with project:", project.title);

    const imageEl = document.querySelector(".project-image img");
    const titleEl = document.querySelector(".project-meta h2");
    const categoryEl = document.querySelector(".project-meta p");
    const notesEl = document.querySelector(".designer-notes");
    const softwareEl = document.querySelector(".software-used");
    const actionEl = document.querySelector(".project-action a");

    if (imageEl && project.images && project.images.hero) {
      imageEl.src = project.images.hero;
      imageEl.alt = project.title;
    }
    if (titleEl) titleEl.textContent = project.title || "Project Title";
    if (categoryEl) categoryEl.textContent = project.category || "Category";
    if (notesEl) {
      notesEl.innerHTML = `
        <h4>Challenge</h4>
        <p>${project.challenge || "N/A"}</p>
        <h4>Solution</h4>
        <p>${project.solution || "N/A"}</p>
      `;
    }
    if (softwareEl && Array.isArray(project.software)) {
      softwareEl.innerHTML = project.software
        .map(tool => `<span>${tool}</span>`)
        .join(" • ");
    }
    if (actionEl) {
      actionEl.href = project.slug ? `portfolio.html?project=${project.slug}` : "#";
    }
  },

  async open() {
    const workspace = document.querySelector(".creative-workspace");
    if (workspace && window.Animation) {
      await Animation.fadeIn(workspace);
    }
  }
};

window.RenderPipeline = RenderPipeline;