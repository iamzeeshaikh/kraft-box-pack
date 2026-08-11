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


/**
 * Attribution, filled in at load rather than rendered into the HTML.
 *
 * The pages are static and cached, so anything rendered server-side would be
 * the same for every visitor — one person's referrer served to the next. Read
 * on the client it is correct per visit.
 *
 * None of this is personal data. It is the landing page, the campaign
 * parameters, the referring site and a coarse device class, which is what
 * tells the business which pages actually produce enquiries.
 */
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

function deviceClass(): string {
  const w = window.innerWidth;
  const touch = matchMedia('(pointer: coarse)').matches;
  if (w < 768) return touch ? 'mobile' : 'small';
  if (w < 1100) return 'tablet';
  return 'desktop';
}

function storedUtm(): string {
  // A visitor often lands from a campaign and enquires several pages later, so
  // the parameters are kept for the session rather than read from the current
  // URL, which by then has none.
  try {
    const url = new URLSearchParams(location.search);
    const found = UTM_KEYS.filter((k) => url.get(k))
      .map((k) => `${k}=${url.get(k)}`)
      .join('&');
    if (found) sessionStorage.setItem('kbp_utm', found);
    return found || sessionStorage.getItem('kbp_utm') || '';
  } catch {
    return '';
  }
}

function fillAttribution(form: HTMLFormElement): void {
  const set = (name: string, value: string) => {
    const input = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
    if (input) input.value = value.slice(0, 500);
  };
  set('landing_page', location.pathname + location.search);
  set('referrer', document.referrer && !document.referrer.includes(location.host)
    ? document.referrer
    : '');
  set('utm', storedUtm());
  set('device', `${deviceClass()} ${window.innerWidth}x${window.innerHeight}`);
  // A per-render token so the endpoint can recognise the same submission
  // arriving twice — a double click that beats the disabled flag, or a
  // browser retrying after a dropped connection.
  set('submit_token', `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`);
}

/** Analytics, only if a consumer is present. Never sends field values. */
function track(event: string, detail: Record<string, string | number> = {}): void {
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };
  w.dataLayer?.push({ event, ...detail });
  w.gtag?.('event', event, detail);
}

export function wireQuoteForms(root: ParentNode = document): void {
  for (const form of root.querySelectorAll<HTMLFormElement>('[data-quote-form]')) {
    if (form.dataset.wired === 'true') continue;
    form.dataset.wired = 'true';

    const status = form.querySelector<HTMLElement>('[data-quote-status]');
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');

    fillAttribution(form);

    /* Guards a second submission while the first is still in flight. The
       disabled button covers a double click, but not a retry triggered after
       the button is re-enabled, so the flag is the thing that actually holds. */
    let inFlight = false;

    let started = false;
    form.addEventListener(
      'input',
      () => {
        if (started) return;
        started = true;
        track('quote_form_start', { form_id: form.id || 'quote' });
      },
      { once: false },
    );

    form.querySelector('details.qf__more')?.addEventListener('toggle', (e) => {
      if ((e.currentTarget as HTMLDetailsElement).open) {
        track('quote_form_step', { form_id: form.id || 'quote', step: 'specification' });
      }
    });

    for (const field of form.querySelectorAll<HTMLInputElement>('input, textarea')) {
      field.addEventListener('input', () => clearError(field));
    }

    // The hero form hides the native file control, so the chosen file name is
    // echoed into the caption next to the "Attach artwork" button.
    const fileInput = form.querySelector<HTMLInputElement>('input[type="file"]');
    const fileName = form.querySelector<HTMLElement>('[data-file-name]');
    if (fileInput && fileName) {
      const idle = fileName.textContent;
      const show = () => {
        const file = fileInput.files?.[0];
        if (file) {
          const mb = file.size / (1024 * 1024);
          fileName.textContent = `${file.name} (${mb < 0.1 ? '<0.1' : mb.toFixed(1)} MB)`;
          fileName.dataset.set = 'true';
        } else {
          fileName.textContent = idle;
          delete fileName.dataset.set;
        }
      };
      fileInput.addEventListener('change', () => {
        show();
        if (fileInput.files?.length) {
          track('quote_artwork_upload', { form_id: form.id || 'quote' });
        }
      });
      form.addEventListener('reset', () => setTimeout(show));
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!status || !submit) return;

      if (inFlight) return;

      status.textContent = '';
      status.removeAttribute('data-state');
      if (!validate(form)) {
        track('quote_form_error', { form_id: form.id || 'quote', reason: 'validation' });
        return;
      }

      inFlight = true;

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
          // Tracked only after the server confirms, so the count reflects
          // enquiries received rather than buttons pressed.
          track('quote_form_submit_success', {
            form_id: form.id || 'quote',
            has_attachment: form.querySelector<HTMLInputElement>('input[type="file"]')?.files
              ?.length
              ? 'yes'
              : 'no',
          });
          form.reset();
          window.location.assign('/thank-you/');
          return;
        } else {
          status.dataset.state = 'error';
          status.textContent =
            data.error ??
            'Sorry, that could not be sent. Please email info@kraftboxpack.com instead.';
          track('quote_form_error', { form_id: form.id || 'quote', reason: `http_${res.status}` });
        }
      } catch {
        status.dataset.state = 'error';
        status.textContent =
          'Sorry, that could not be sent. Please email info@kraftboxpack.com instead.';
        track('quote_form_error', { form_id: form.id || 'quote', reason: 'network' });
      } finally {
        inFlight = false;
        submit.disabled = false;
        submit.textContent = label;
        // A retry is a new submission, so it gets its own token.
        fillAttribution(form);
      }
    });
  }
}
