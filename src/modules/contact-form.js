const messages = {
  required: 'Toto pole je povinné.',
  email: 'Zadejte prosím platnou e-mailovou adresu.'
};

export function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  const status = document.querySelector('[data-form-status]');
  const submit = form?.querySelector('button[type="submit"]');
  if (!form || !status || !submit) return;

  const showError = (field, message) => {
    const error = form.querySelector(`[data-error-for="${field.name}"]`);
    field.setAttribute('aria-invalid', 'true');
    if (error) error.textContent = message;
  };
  const clearError = (field) => {
    field.removeAttribute('aria-invalid');
    const error = form.querySelector(`[data-error-for="${field.name}"]`);
    if (error) error.textContent = '';
  };
  const validate = (field) => {
    clearError(field);
    if (!field.value.trim()) { showError(field, messages.required); return false; }
    if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      showError(field, messages.email); return false;
    }
    return true;
  };

  form.querySelectorAll('input[required], textarea[required]').forEach((field) => {
    field.addEventListener('blur', () => validate(field));
    field.addEventListener('input', () => field.hasAttribute('aria-invalid') && validate(field));
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const fields = [...form.querySelectorAll('input[required], textarea[required]')];
    const valid = fields.map(validate).every(Boolean);
    if (!valid) { fields.find((field) => field.hasAttribute('aria-invalid'))?.focus(); return; }

    submit.disabled = true;
    submit.textContent = 'Odesílám…';
    status.className = 'form-status is-loading';
    status.textContent = 'Zprávu právě odesílám.';
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (!response.ok) throw new Error('Odeslání se nezdařilo.');
      form.reset();
      status.className = 'form-status is-success';
      status.textContent = 'Děkuji! Zpráva byla úspěšně odeslána. Ozvu se co nejdříve.';
    } catch {
      status.className = 'form-status is-error';
      status.textContent = 'Zprávu se nepodařilo odeslat. Zkuste to prosím znovu nebo mi napište e-mailem.';
    } finally {
      submit.disabled = false;
      submit.textContent = 'Odeslat zprávu';
    }
  });
}
