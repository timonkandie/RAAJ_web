/**
 * Form Handling & Validation Module
 */
function initForms() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('[Forms] Submitted:', form.id || 'Form');
    });
  });
}

document.addEventListener('DOMContentLoaded', initForms);
window.initForms = initForms;
