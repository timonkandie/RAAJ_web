/* ============================================
   RAAJ Studios — Forms v1.0
   Handles validation and submission for:
   - Contact form
   - Hire Us form
   - Recruitment form
   All forms use WhatsApp as the delivery
   method — no backend server required.
   ============================================ */

const Forms = {

  WHATSAPP_NUMBER: '254754748388',

  /* ============================================
     VALIDATION RULES
  ============================================ */
  rules: {
    name: {
      required: true,
      minLength: 2,
      message: 'Please enter your full name.',
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address.',
    },
    phone: {
      required: false,
      pattern: /^[\d\s\+\-]{7,15}$/,
      message: 'Please enter a valid phone number.',
    },
    message: {
      required: true,
      minLength: 10,
      message: 'Please enter a message (at least 10 characters).',
    },
    service: {
      required: true,
      message: 'Please select a service.',
    },
  },

  /* ============================================
     VALIDATE A SINGLE FIELD
  ============================================ */
  validateField(name, value) {
    const rule = this.rules[name];
    if (!rule) return { valid: true };

    const trimmed = value.trim();

    if (rule.required && !trimmed) {
      return { valid: false, message: rule.message };
    }

    if (trimmed && rule.minLength && trimmed.length < rule.minLength) {
      return { valid: false, message: rule.message };
    }

    if (trimmed && rule.pattern && !rule.pattern.test(trimmed)) {
      return { valid: false, message: rule.message };
    }

    return { valid: true };
  },

  /* ============================================
     SHOW / CLEAR FIELD ERROR
  ============================================ */
  showError(field, message) {
    field.classList.add('field-error');
    field.classList.remove('field-success');

    let errorEl = field.parentElement.querySelector('.field-error-msg');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'field-error-msg';
      field.parentElement.appendChild(errorEl);
    }
    errorEl.textContent = message;
  },

  clearError(field) {
    field.classList.remove('field-error');
    field.classList.add('field-success');

    const errorEl = field.parentElement.querySelector('.field-error-msg');
    if (errorEl) errorEl.remove();
  },

  /* ============================================
     VALIDATE ENTIRE FORM
  ============================================ */
  validateForm(form) {
    let isValid = true;

    form.querySelectorAll('[data-validate]').forEach(field => {
      const name   = field.dataset.validate;
      const result = this.validateField(name, field.value);

      if (!result.valid) {
        this.showError(field, result.message);
        isValid = false;
      } else {
        this.clearError(field);
      }
    });

    return isValid;
  },

  /* ============================================
     BUILD WHATSAPP MESSAGE
     Converts form data into a formatted
     WhatsApp message string.
  ============================================ */
  buildWhatsAppMessage(formData, formType) {
    const lines = [`*RAAJ Studios — ${formType}*`, ''];

    for (const [key, value] of Object.entries(formData)) {
      if (value) {
        const label = key.charAt(0).toUpperCase() + key.slice(1);
        lines.push(`*${label}:* ${value}`);
      }
    }

    lines.push('', '_Sent from raajstudios.com_');
    return lines.join('\n');
  },

  /* ============================================
     OPEN WHATSAPP
  ============================================ */
  openWhatsApp(message) {
    const encoded = encodeURIComponent(message);
    const url     = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank');
  },

  /* ============================================
     SET BUTTON LOADING STATE
  ============================================ */
  setLoading(btn, loading) {
    if (loading) {
      btn.dataset.originalText = btn.textContent;
      btn.textContent          = 'Opening WhatsApp...';
      btn.disabled             = true;
    } else {
      btn.textContent = btn.dataset.originalText || 'Send';
      btn.disabled    = false;
    }
  },

  /* ============================================
     HANDLE CONTACT FORM
  ============================================ */
  handleContact(form) {
    if (!this.validateForm(form)) return;

    const data = {
      name:    form.querySelector('[data-validate="name"]')?.value.trim(),
      email:   form.querySelector('[data-validate="email"]')?.value.trim(),
      phone:   form.querySelector('[data-validate="phone"]')?.value.trim(),
      message: form.querySelector('[data-validate="message"]')?.value.trim(),
    };

    const message = this.buildWhatsAppMessage(data, 'New Contact Message');
    const btn     = form.querySelector('[type="submit"]');

    this.setLoading(btn, true);

    setTimeout(() => {
      this.openWhatsApp(message);
      this.setLoading(btn, false);
      form.reset();
      form.querySelectorAll('.field-success').forEach(f => f.classList.remove('field-success'));

      if (window.Toast) Toast.show('Message sent! We\'ll be in touch soon.', 'success');
    }, 600);
  },

  /* ============================================
     HANDLE HIRE US FORM
  ============================================ */
  handleHire(form) {
    if (!this.validateForm(form)) return;

    const data = {
      name:    form.querySelector('[data-validate="name"]')?.value.trim(),
      email:   form.querySelector('[data-validate="email"]')?.value.trim(),
      phone:   form.querySelector('[data-validate="phone"]')?.value.trim(),
      service: form.querySelector('[data-validate="service"]')?.value,
      budget:  form.querySelector('[name="budget"]')?.value,
      message: form.querySelector('[data-validate="message"]')?.value.trim(),
    };

    const message = this.buildWhatsAppMessage(data, 'Hire Us Request');
    const btn     = form.querySelector('[type="submit"]');

    this.setLoading(btn, true);

    setTimeout(() => {
      this.openWhatsApp(message);
      this.setLoading(btn, false);
      form.reset();

      if (window.Toast) Toast.show('Request sent! We\'ll get back to you shortly.', 'success');
    }, 600);
  },

  /* ============================================
     HANDLE RECRUITMENT FORM
  ============================================ */
  handleRecruitment(form) {
    if (!this.validateForm(form)) return;

    const data = {
      name:     form.querySelector('[data-validate="name"]')?.value.trim(),
      email:    form.querySelector('[data-validate="email"]')?.value.trim(),
      phone:    form.querySelector('[data-validate="phone"]')?.value.trim(),
      role:     form.querySelector('[name="role"]')?.value,
      message:  form.querySelector('[data-validate="message"]')?.value.trim(),
    };

    const message = this.buildWhatsAppMessage(data, 'Recruitment Application');
    const btn     = form.querySelector('[type="submit"]');

    this.setLoading(btn, true);

    setTimeout(() => {
      this.openWhatsApp(message);
      this.setLoading(btn, false);
      form.reset();

      if (window.Toast) Toast.show('Application sent! We\'ll review it and be in touch.', 'success');
    }, 600);
  },

  /* ============================================
     INIT — attach listeners to all forms
  ============================================ */
  init() {
    /* Contact form */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', e => {
        e.preventDefault();
        this.handleContact(contactForm);
      });
    }

    /* Hire Us form */
    const hireForm = document.getElementById('hire-form');
    if (hireForm) {
      hireForm.addEventListener('submit', e => {
        e.preventDefault();
        this.handleHire(hireForm);
      });
    }

    /* Recruitment form */
    const recruitForm = document.getElementById('recruitment-form');
    if (recruitForm) {
      recruitForm.addEventListener('submit', e => {
        e.preventDefault();
        this.handleRecruitment(recruitForm);
      });
    }

    /* Live validation — clear errors as user types */
    document.querySelectorAll('[data-validate]').forEach(field => {
      field.addEventListener('input', () => {
        const result = this.validateField(field.dataset.validate, field.value);
        if (result.valid) this.clearError(field);
      });

      field.addEventListener('blur', () => {
        const result = this.validateField(field.dataset.validate, field.value);
        if (!result.valid && field.value.trim()) {
          this.showError(field, result.message);
        }
      });
    });
  },

};