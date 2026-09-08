import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

const LEAD_RECIPIENTS = ['shanimazhar82@gmail.com', 'dev@zeecustomboxes.com'] as const;

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

/**
 * Submission tokens already handled, so a retry does not send twice. Same
 * lifetime characteristics as the rate limiter — per instance, bounded, and
 * not a substitute for a real store if this ever needs to be exact.
 */
const seenTokens = new Map<string, number>();
const TOKEN_TTL_MS = 10 * 60 * 1000;

function recentlySent(token: string): boolean {
  const at = seenTokens.get(token);
  return at !== undefined && Date.now() - at < TOKEN_TTL_MS;
}

function remember(token: string): void {
  seenTokens.set(token, Date.now());
  if (seenTokens.size > 5000) seenTokens.clear();
}

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

  /* Optional specification step. All of it is optional by design — making any
     of it required would cost more enquiries than the detail is worth. */
  const spec = {
    dimensions: singleLine(clean(form.get('dimensions'), 80)),
    unit: singleLine(clean(form.get('unit'), 20)),
    quantity: singleLine(clean(form.get('quantity'), 20)),
    material: singleLine(clean(form.get('material'), 60)),
    printing: singleLine(clean(form.get('printing'), 60)),
    finish: singleLine(clean(form.get('finish'), 60)),
    neededBy: singleLine(clean(form.get('needed_by'), 20)),
    zip: singleLine(clean(form.get('zip'), 12)),
  };

  /* Attribution. Not personal data — the landing page, campaign parameters,
     referrer and a coarse device class, which is what tells the business
     which pages actually produce enquiries. */
  const attribution = {
    landingPage: singleLine(clean(form.get('landing_page'), 300)),
    referrer: singleLine(clean(form.get('referrer'), 300)),
    utm: singleLine(clean(form.get('utm'), 300)),
    device: singleLine(clean(form.get('device'), 60)),
  };

  /*
   * Duplicate guard.
   *
   * The client disables the button and holds an in-flight flag, but neither
   * survives a browser retrying a request whose response was lost. The token
   * is minted per form render, so the same submission arriving twice carries
   * the same one and the second is acknowledged without sending a second
   * email — answering ok rather than an error, because from the sender's
   * point of view it did go through.
   */
  const token = singleLine(clean(form.get('submit_token'), 40));
  if (token) {
    if (recentlySent(token)) {
      return wantsJson
        ? json({ ok: true, duplicate: true }, 200)
        : new Response(null, { status: 303, headers: { location: '/thank-you/' } });
    }
    remember(token);
  }

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
    SMTP_FROM_EMAIL,
    SMTP_FROM_NAME,
  } = import.meta.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
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

  const specLines = [
    spec.dimensions && `Dimensions:  ${spec.dimensions}${spec.unit ? ` ${spec.unit}` : ''}`,
    spec.quantity && `Quantity:    ${spec.quantity}`,
    spec.material && `Material:    ${spec.material}`,
    spec.printing && `Printing:    ${spec.printing}`,
    spec.finish && `Finish:      ${spec.finish}`,
    spec.neededBy && `Needed by:   ${spec.neededBy}`,
    spec.zip && `Delivery ZIP: ${spec.zip}`,
  ].filter(Boolean);

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
    ...(specLines.length ? ['', 'Specification:', ...specLines] : []),
    '',
    '--- where this came from ---',
    // "Page URL: https://…" is the exact marker the ZeeOps Gmail intake
    // matches on. A visitor on a cached copy of the old script still sends a
    // bare path, so it is made absolute here as well — the site knows its own
    // address and the browser should never have been the only source of it.
    attribution.landingPage && `Page URL: ${
      attribution.landingPage.startsWith('http')
        ? attribution.landingPage
        : `https://kraftboxpack.com${attribution.landingPage.startsWith('/') ? '' : '/'}${attribution.landingPage}`
    }`,
    attribution.referrer && `Referrer: ${attribution.referrer}`,
    attribution.utm && `Campaign: ${attribution.utm}`,
    attribution.device && `Device:   ${attribution.device}`,
  ].filter(Boolean);

  try {
    await transport.sendMail({
      from: {
        name: String(SMTP_FROM_NAME ?? 'Kraft Box Pack'),
        address: String(SMTP_FROM_EMAIL ?? SMTP_USER),
      },
      to: [...LEAD_RECIPIENTS],
      replyTo: { name, address: email },
      subject: `Quote request${product ? `: ${product}` : ''} — ${name}`,
      text: lines.join('\n'),
      attachments,
    });
  } catch (error) {
    console.error('quote: send failed', error);
    return fail('Sorry, that could not be sent. Please email info@kraftboxpack.com.', 502);
  }

  /*
   * Acknowledgement to the sender.
   *
   * Sent after the internal email has succeeded, and deliberately not allowed
   * to fail the request: the enquiry has already reached the business, so a
   * bounced acknowledgement is a logging matter rather than something the
   * visitor should be shown an error for.
   *
   * It restates what was sent so the sender has a record, and it sets
   * expectations with the published turnaround rather than inventing one.
   */
  try {
    await transport.sendMail({
      from: {
        name: String(SMTP_FROM_NAME ?? 'Kraft Box Pack'),
        address: String(SMTP_FROM_EMAIL ?? SMTP_USER),
      },
      to: { name, address: email },
      subject: 'We have your quote request — Kraft Box Pack',
      text: [
        `Hi ${name.split(' ')[0] || name},`,
        '',
        'Thank you for your enquiry. We have it, and you can expect a written',
        'reply with a specification and a price within one business day.',
        '',
        product ? `Product: ${product}` : null,
        '',
        'What you sent us:',
        message,
        ...(specLines.length ? ['', 'Specification:', ...specLines] : []),
        attachments.length ? `\nAttachment: ${attachments[0].filename}` : null,
        '',
        'If anything above is wrong, just reply to this email and we will',
        'correct it before quoting.',
        '',
        'Kraft Box Pack',
        'info@kraftboxpack.com · (503) 461-4788',
      ]
        .filter((l) => l !== null)
        .join('\n'),
    });
  } catch (error) {
    // The enquiry is already delivered; the sender should not see an error.
    console.error('quote: acknowledgement to sender failed', error);
  }

  if (wantsJson) return json({ ok: true }, 200);
  return new Response(null, { status: 303, headers: { location: '/thank-you/' } });
};

/** Anything other than POST on this path is a mistake or a probe. */
export const GET: APIRoute = () =>
  new Response('Method Not Allowed', { status: 405, headers: { allow: 'POST' } });
