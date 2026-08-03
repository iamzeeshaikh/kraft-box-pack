/**
 * Client-side handling for the quote forms.
 *
 * Submits over fetch so the visitor stays on the page, with validation shown
 * inline. The form still has a real `action` and `method`, so with JavaScript
 * unavailable it posts normally and the endpoint answers with a plain page —
 * this only upgrades the experience, it is not what makes the form work.
 *
 * Nothing here trusts the client: every rule below is enforced again in
 * `src/pages/api/quote.ts`, which is the only side that counts.
 */

const MAX_BYTES = 8 * 1024 * 1024;
const ALLOWED_EXT = ['jpg', 'jpeg', 'png', 'pdf', 'ai', 'eps', 'zip'];

function setError(input: HTMLInputElement | HTMLTextAreaElement, message: string): void {
  input.setAttribute('aria-invalid', 'true');
  const id = `${input.id}-error`;
  let note = document.getElementById(id);
  if (!note) {
    note = document.createElement('p');
    note.id = id;
    note.className = 'qf__error';
    input.insertAdjacentElement('afterend', note);
  }
  note.textContent = message;
  input.setAttribute('aria-describedby', id);
}

function clearError(input: HTMLInputElement | HTMLTextAreaElement): void {
  input.removeAttribute('aria-invalid');
  input.removeAttribute('aria-describedby');
  document.getElementById(`${input.id}-error`)?.remove();
}

function validate(form: HTMLFormElement): boolean {
  const fields = Array.from(
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'),
  );
  let firstBad: HTMLElement | null = null;

  for (const field of fields) {
    clearError(field);
    const value = field.value.trim();

    if (field.required && !value) {
      setError(field, 'This field is required.');
      firstBad ??= field;
      continue;
    }
    if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setError(field, 'Enter a valid email address.');
      firstBad ??= field;
      continue;
    }
    if (field.type === 'file' && field instanceof HTMLInputElement) {
      const file = field.files?.[0];
      if (!file) continue;
      const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
      if (!ALLOWED_EXT.includes(ext)) {
        setError(field, `That file type is not accepted. Use ${ALLOWED_EXT.join(', ')}.`);
        firstBad ??= field;
      } else if (file.size > MAX_BYTES) {
        setError(field, 'That file is larger than 8 MB.');
        firstBad ??= field;
      }
    }
  }

  if (firstBad) {
    firstBad.focus();
    firstBad.scrollIntoView({ block: 'center', behavior: 'smooth' });
    return false;
  }
  return true;
}

export function wireQuoteForms(root: ParentNode = document): void {
  for (const form of root.querySelectorAll<HTMLFormElement>('[data-quote-form]')) {
    if (form.dataset.wired === 'true') continue;
    form.dataset.wired = 'true';

    const status = form.querySelector<HTMLElement>('[data-quote-status]');
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');

    for (const field of form.querySelectorAll<HTMLInputElement>('input, textarea')) {
      field.addEventListener('input', () => clearError(field));
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!status || !submit) return;

      status.textContent = '';
      status.removeAttribute('data-state');
      if (!validate(form)) return;

      const label = submit.textContent ?? 'Submit';
      submit.disabled = true;
      submit.textContent = 'Sending…';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        const data = (await res.json().catch(() => ({}))) as {
          ok?: boolean;
          error?: string;
        };

        if (res.ok && data.ok) {
          // Every successful submission lands on the thank-you page, so the
          // outcome is a real page a visitor can be sent back to, and so
          // conversions are countable in analytics. The inline message is
          // still set first, in case navigation is blocked or slow.
          status.dataset.state = 'ok';
          status.textContent = 'Thank you — your request has been sent.';
          form.reset();
          window.location.assign('/thank-you/');
          return;
        } else {
          status.dataset.state = 'error';
          status.textContent =
            data.error ??
            'Sorry, that could not be sent. Please email info@kraftboxpack.com instead.';
        }
      } catch {
        status.dataset.state = 'error';
        status.textContent =
          'Sorry, that could not be sent. Please email info@kraftboxpack.com instead.';
      } finally {
        submit.disabled = false;
        submit.textContent = label;
      }
    });
  }
}
