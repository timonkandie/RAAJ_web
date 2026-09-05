/* ============================================
   RAAJ Studios — Forms v2.0
   Google Sheets Backend + WhatsApp Integration
   
   Every submission is:
   1. Stored in Google Sheets (primary)
   2. Emailed to the team (via Apps Script)
   3. Opened in WhatsApp (secondary, for live chat)
   ============================================ */

const Forms = {

  /* ── Configuration ── */
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbyR_UDEZ-3TMWFZ1LALvcbfMjj_jSRFYB3HHSVWaqy20bkGE8rrnMvBHZlV8VbHEUPQ/exec',
  WHATSAPP_NUMBER: '254754748388',

  /* ── Collect data from a form based on its type ── */
  collectData(form, formType) {
    const val = (name) => {
      const el = form.querySelector('[name="' + name + '"]');
      return el ? el.value.trim() : '';
    };
    const selectText = (name) => {
      const el = form.querySelector('[name="' + name + '"]');
      return (el && el.selectedIndex > 0) ? el.options[el.selectedIndex].text : '';
    };

    switch (formType) {
      case 'contact':
        return {
          formType: 'contact',
          name:    val('name'),
          email:   val('email'),
          subject: val('subject'),
          message: val('message')
        };

      case 'hire': {
        const deliverables = Array.from(
          form.querySelectorAll('[name="deliverables"]:checked')
        ).map(cb => cb.value).join(', ');

        return {
          formType:     'hire',
          firstName:    val('firstName'),
          lastName:     val('lastName'),
          company:      val('company'),
          email:        val('email'),
          phone:        val('phone'),
          service:      selectText('service'),
          timeline:     selectText('timeline'),
          budget:       selectText('budget'),
          deliverables: deliverables,
          details:      val('details'),
          newsletter:   form.querySelector('[name="newsletter"]')?.checked ? 'Yes' : 'No'
        };
      }

      case 'recruitment':
        return {
          formType:   'recruitment',
          name:       val('name'),
          email:      val('email'),
          phone:      val('phone'),
          experience: selectText('experience'),
          role:       selectText('role'),
          portfolio:  val('portfolio'),
          cv:         val('cv'),
          message:    val('message')
        };

      default:
        return { formType: formType };
    }
  },

  /* ── Build a WhatsApp pre-filled message ── */
  buildWhatsAppMessage(data, formType) {
    const titles = {
      contact:     'New Contact Message',
      hire:        'New Project Inquiry',
      recruitment: 'New Recruitment Application'
    };

    const lines = ['*RAAJ Studios — ' + (titles[formType] || 'Form Submission') + '*', ''];

    for (const [key, value] of Object.entries(data)) {
      if (key === 'formType' || !value) continue;
      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
      lines.push('*' + label + ':* ' + value);
    }

    lines.push('', '_Sent from raajstudios.com_');
    return lines.join('\n');
  },

  /* ── Open WhatsApp with a pre-filled message ── */
  openWhatsApp(message) {
    const url = 'https://wa.me/' + this.WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank');
  },

  /* ── Submit data to Google Sheets via Apps Script ── */
  async submitToSheet(data) {
    await fetch(this.SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data)
    });
  },

  /* ── Handle form submission ── */
  async handleSubmit(form) {
    const formType = form.dataset.formType;
    if (!formType) return;

    // Use native HTML5 validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Submitting...';
    btn.disabled = true;

    const data = this.collectData(form, formType);
    const whatsappMsg = this.buildWhatsAppMessage(data, formType);

    try {
      // 1. Store in Google Sheets + trigger email notifications
      await this.submitToSheet(data);

      // 2. Show success toast
      const messages = {
        contact:     'Message sent! We\'ll reply within 24 hours.',
        hire:        'Project inquiry submitted! We\'ll get back to you shortly.',
        recruitment: 'Application submitted! We\'ll review your portfolio.'
      };
      if (window.Toast) Toast.show(messages[formType] || 'Submitted successfully!', 'success');

      // 3. Open WhatsApp for live conversation
      this.openWhatsApp(whatsappMsg);

      // 4. Reset the form
      form.reset();

    } catch (error) {
      console.error('Form submission error:', error);
      if (window.Toast) {
        Toast.show('Something went wrong. Redirecting to WhatsApp...', 'error');
      }
      // Fallback: still open WhatsApp so the message isn't lost
      this.openWhatsApp(whatsappMsg);
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  },

  /* ── Initialize: bind submit handlers to all forms with data-form-type ── */
  init() {
    document.querySelectorAll('[data-form-type]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit(form);
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => Forms.init());
window.Forms = Forms;
