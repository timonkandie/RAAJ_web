/**
 * Form Handling & Validation Engine (Task 13)
 */

/**
 * Contact Form HTML Component Generator
 * @param {Object} options
 * @param {string} [options.formId='contact-form'] - Unique form element ID
 * @param {string} [options.title='Get In Touch'] - Form card heading
 * @param {string} [options.subtitle] - Form subtext
 * @param {string} [options.submitText='Send Message'] - Submit button label
 * @returns {string} Generated HTML string for Contact Form
 */
function createContactForm({ formId = 'contact-form', title = 'Get In Touch', subtitle = 'Fill out the form below and our team will get back to you within 24 hours.', submitText = 'Send Message' } = {}) {
  return `
    <div class="card form-card">
      ${title ? `<h3 class="form-card-title">${title}</h3>` : ''}
      ${subtitle ? `<p class="form-card-subtitle">${subtitle}</p>` : ''}
      
      <form id="${formId}" class="contact-form" novalidate>
        <div class="form-group">
          <label for="${formId}-name" class="form-label">Full Name <span class="required">*</span></label>
          <input type="text" id="${formId}-name" name="name" class="form-control" placeholder="e.g. Jane Doe" required>
          <span class="form-error" id="${formId}-name-error"></span>
        </div>

        <div class="form-group">
          <label for="${formId}-email" class="form-label">Email Address <span class="required">*</span></label>
          <input type="email" id="${formId}-email" name="email" class="form-control" placeholder="e.g. jane@example.com" required>
          <span class="form-error" id="${formId}-email-error"></span>
        </div>

        <div class="form-group">
          <label for="${formId}-service" class="form-label">Service Required <span class="required">*</span></label>
          <select id="${formId}-service" name="service" class="form-control" required>
            <option value="" disabled selected>Select a Service</option>
            <option value="logoDesign">Logo Design & Branding</option>
            <option value="posters">Poster Design</option>
            <option value="flyers">Flyer Design</option>
            <option value="packaging">Packaging Design</option>
            <option value="businessCards">Business Cards</option>
            <option value="other">Other / Custom Query</option>
          </select>
          <span class="form-error" id="${formId}-service-error"></span>
        </div>

        <div class="form-group">
          <label for="${formId}-message" class="form-label">Project Details <span class="required">*</span></label>
          <textarea id="${formId}-message" name="message" class="form-control" placeholder="Describe your project, vision, timeline, and requirements..." required></textarea>
          <span class="form-error" id="${formId}-message-error"></span>
        </div>

        <div class="form-status-message hidden" id="${formId}-status"></div>

        <button type="submit" class="btn btn-primary btn-block">${submitText}</button>
      </form>
    </div>
  `.trim();
}

/**
 * Validate Contact Form Inputs
 * @param {HTMLFormElement} form
 * @returns {boolean} True if all fields valid
 */
function validateContactForm(form) {
  if (!form) return false;
  let isValid = true;

  const nameInput = form.querySelector('[name="name"]');
  const emailInput = form.querySelector('[name="email"]');
  const serviceInput = form.querySelector('[name="service"]');
  const messageInput = form.querySelector('[name="message"]');

  // Helper to set error
  const setError = (input, message) => {
    if (!input) return;
    input.classList.add('is-invalid');
    const errorSpan = form.querySelector(`#${input.id}-error`);
    if (errorSpan) errorSpan.textContent = message;
    isValid = false;
  };

  // Helper to clear error
  const clearError = (input) => {
    if (!input) return;
    input.classList.remove('is-invalid');
    const errorSpan = form.querySelector(`#${input.id}-error`);
    if (errorSpan) errorSpan.textContent = '';
  };

  // Name check
  if (nameInput) {
    if (!nameInput.value.trim()) {
      setError(nameInput, 'Please enter your name');
    } else {
      clearError(nameInput);
    }
  }

  // Email check
  if (emailInput) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      setError(emailInput, 'Please enter your email address');
    } else if (!emailRegex.test(emailInput.value.trim())) {
      setError(emailInput, 'Please enter a valid email address');
    } else {
      clearError(emailInput);
    }
  }

  // Service check
  if (serviceInput) {
    if (!serviceInput.value) {
      setError(serviceInput, 'Please select a service option');
    } else {
      clearError(serviceInput);
    }
  }

  // Message check
  if (messageInput) {
    if (!messageInput.value.trim()) {
      setError(messageInput, 'Please describe your project details');
    } else if (messageInput.value.trim().length < 10) {
      setError(messageInput, 'Message must be at least 10 characters long');
    } else {
      clearError(messageInput);
    }
  }

  return isValid;
}

/**
 * Initialize all form validation and submission handlers
 */
function initForms() {
  const contactForms = document.querySelectorAll('.contact-form, form[id*="contact"]');

  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateContactForm(form)) return;

      const submitBtn = form.querySelector('button[type="submit"]');
      const statusDiv = form.querySelector('.form-status-message');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      // Simulate submission handling
      setTimeout(() => {
        if (statusDiv) {
          statusDiv.className = 'form-status-message success';
          statusDiv.textContent = 'Thank you! Your message has been sent successfully. We will get back to you shortly.';
          statusDiv.classList.remove('hidden');
        }

        form.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      }, 1200);
    });
  });
}

document.addEventListener('DOMContentLoaded', initForms);

window.createContactForm = createContactForm;
window.validateContactForm = validateContactForm;
window.initForms = initForms;
