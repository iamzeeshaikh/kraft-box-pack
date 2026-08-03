import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

/**
 * Quote request endpoint.
 *
 * Runs as a function rather than at build time, which is what `prerender =
 * false` selects on an otherwise static site.
 *
 * Nothing the browser sends is trusted. Every field is length-capped, the
 * uploaded file is checked by its actual leading bytes rather than its name or
 * declared type, and the message is delivered as plain text so no markup a
 * submitter writes can render anywhere. SMTP credentials are read from the
 * environment and never reach the client bundle.
 */
export const prerender = false;

const MAX_BYTES = 8 * 1024 * 1024;
const MAX_FIELD = 4000;

/**
 * Rate limit per instance. Not a substitute for a WAF, but it blunts floods.
 *
 * The threshold is read from the environment so it can be tuned per
 * deployment, and so the end-to-end tests can exercise the real code path
 * without a bypass: they raise it, run the functional cases, then deliberately
 * cross it. It defaults to five a minute, which no genuine visitor reaches.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = Number(import.meta.env.QUOTE_RATE_LIMIT ?? 5);
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // bound memory on a long-lived instance
  return recent.length > MAX_PER_WINDOW;
}

/** Leading bytes for each accepted upload type. */
const SIGNATURES: { ext: string[]; magic: number[][] }[] = [
  { ext: ['jpg', 'jpeg'], magic: [[0xff, 0xd8, 0xff]] },
  { ext: ['png'], magic: [[0x89, 0x50, 0x4e, 0x47]] },
  { ext: ['pdf'], magic: [[0x25, 0x50, 0x44, 0x46]] },
  // .ai files are PDFs; .eps is either PostScript or a DOS-preview container.
  { ext: ['ai'], magic: [[0x25, 0x50, 0x44, 0x46]] },
  { ext: ['eps'], magic: [[0x25, 0x21], [0xc5, 0xd0, 0xd3, 0xc6]] },
  { ext: ['zip'], magic: [[0x50, 0x4b, 0x03, 0x04], [0x50, 0x4b, 0x05, 0x06]] },
];

function signatureOk(name: string, bytes: Uint8Array): boolean {
  const ext = name.split('.').pop()?.toLowerCase() ?? '';
  const entry = SIGNATURES.find((s) => s.ext.includes(ext));
  if (!entry) return false;
  return entry.magic.some((sig) => sig.every((b, i) => bytes[i] === b));
}

const clean = (value: FormDataEntryValue | null, limit = 200): string =>
  typeof value === 'string'
    ? value.replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, limit)
    : '';

/** Header injection guard for anything echoed into an address or subject. */
const singleLine = (value: string): string => value.replace(/[\r\n]+/g, ' ').trim();

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  const fail = (error: string, status: number) =>
    wantsJson
      ? json({ ok: false, error }, status)
      : new Response(error, { status, headers: { 'content-type': 'text/plain' } });

  if (rateLimited(clientAddress ?? 'unknown')) {
    return fail('Too many requests. Please try again in a minute.', 429);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail('That submission could not be read.', 400);
  }

  // Honeypot: a real visitor never sees this field, so anything in it is a bot.
  // Answered with a success shape so the sender learns nothing from the reply.
  if (clean(form.get('website'))) return wantsJson ? json({ ok: true }, 200) : new Response('OK');

  const name = singleLine(clean(form.get('name'), 120));
  const email = singleLine(clean(form.get('email'), 180));
  const phone = singleLine(clean(form.get('phone'), 40));
  const company = singleLine(clean(form.get('company'), 120));
  const product = singleLine(clean(form.get('product'), 160));
  const message = clean(form.get('message'), MAX_FIELD);

  if (!name || !email || !message) return fail('Name, email and message are required.', 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return fail('Enter a valid email address.', 400);

  // ------------------------------------------------------------- attachment
  const attachments: { filename: string; content: Buffer }[] = [];
  const upload = form.get('attachment');
  if (upload instanceof File && upload.size > 0) {
    if (upload.size > MAX_BYTES) return fail('That file is larger than 8 MB.', 413);
    const bytes = new Uint8Array(await upload.arrayBuffer());
    if (!signatureOk(upload.name, bytes)) {
      return fail('That file type is not accepted.', 415);
    }
    attachments.push({
      // Rebuild the name rather than pass it through: it reaches a mailbox and
      // a filesystem, and the original is attacker-controlled.
      filename: upload.name.replace(/[^A-Za-z0-9._-]+/g, '_').slice(-80),
      content: Buffer.from(bytes),
    });
  }

  // ------------------------------------------------------------------- send
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_TO,
    SMTP_FROM_EMAIL,
    SMTP_FROM_NAME,
  } = import.meta.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_TO) {
    console.error('quote: SMTP environment variables are not configured');
    return fail('The form is not configured to send yet. Please email info@kraftboxpack.com.', 500);
  }

  const port = Number(SMTP_PORT ?? 587);
  const transport = nodemailer.createTransport({
    host: String(SMTP_HOST),
    port,
    secure: port === 465,
    auth: { user: String(SMTP_USER), pass: String(SMTP_PASS) },
  });

  const lines = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    phone && `Phone:   ${phone}`,
    company && `Company: ${company}`,
    product && `Product: ${product}`,
    '',
    'Requirements:',
    message,
    '',
    attachments.length ? `Attachment: ${attachments[0].filename}` : 'Attachment: none',
  ].filter(Boolean);

  try {
    await transport.sendMail({
      from: {
        name: String(SMTP_FROM_NAME ?? 'Kraft Box Pack'),
        address: String(SMTP_FROM_EMAIL ?? SMTP_USER),
      },
      to: String(SMTP_TO),
      replyTo: { name, address: email },
      subject: `Quote request${product ? `: ${product}` : ''} — ${name}`,
      text: lines.join('\n'),
      attachments,
    });
  } catch (error) {
    console.error('quote: send failed', error);
    return fail('Sorry, that could not be sent. Please email info@kraftboxpack.com.', 502);
  }

  if (wantsJson) return json({ ok: true }, 200);
  return new Response(null, { status: 303, headers: { location: '/thank-you/' } });
};

/** Anything other than POST on this path is a mistake or a probe. */
export const GET: APIRoute = () =>
  new Response('Method Not Allowed', { status: 405, headers: { allow: 'POST' } });
