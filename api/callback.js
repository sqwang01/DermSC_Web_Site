/**
 * Callback-request handler. Deployed by Vercel as a serverless function at /api/callback.
 *
 * Accepts application/x-www-form-urlencoded (the enhanced fetch and the no-JS form both send this).
 * No PHI is expected or stored — see docs/decisions.md D4.
 *
 * Env vars (set in the Vercel project):
 *   RESEND_API_KEY   - required in production to actually send mail
 *   CALLBACK_TO      - recipient (default: derm@dermsc.com)
 *   CALLBACK_FROM    - verified sender (default: website@dermsc.com)
 */

const TO = process.env.CALLBACK_TO || 'derm@dermsc.com';
const FROM = process.env.CALLBACK_FROM || 'Advanced Dermatology website <website@dermsc.com>';
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';

// Best-effort in-memory rate limit. Resets when the function instance recycles.
const HITS = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 4;

function rateLimited(ip) {
  const now = Date.now();
  const rec = HITS.get(ip) || { count: 0, start: now };
  if (now - rec.start > WINDOW_MS) {
    rec.count = 0;
    rec.start = now;
  }
  rec.count += 1;
  HITS.set(ip, rec);
  return rec.count > MAX_PER_WINDOW;
}

function parseBody(req) {
  // Vercel's Node runtime parses urlencoded/JSON bodies into req.body by default.
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    return Object.fromEntries(new URLSearchParams(req.body));
  }
  return {};
}

const clean = (v) => (typeof v === 'string' ? v.trim().slice(0, 500) : '');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, message: 'Method not allowed.' });
  }

  const wantsJson = (req.headers.accept || '').includes('application/json');
  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown';

  const done = (status, payload, ok) => {
    if (wantsJson) return res.status(status).json(payload);
    if (ok) {
      res.setHeader('Location', '/thank-you/');
      return res.status(303).end();
    }
    res.setHeader('Location', '/contact/?error=1');
    return res.status(303).end();
  };

  const data = parseBody(req);

  // Honeypot — silently accept, send nothing.
  if (clean(data.company)) {
    return done(200, { ok: true }, true);
  }

  if (rateLimited(ip)) {
    return done(
      429,
      { ok: false, message: 'Too many requests. Please call us at 949.248.4547.' },
      false
    );
  }

  const name = clean(data.name);
  const phone = clean(data.phone);
  const email = clean(data.email);
  const service = clean(data.service);
  const preferredTime = clean(data.preferred_time);
  const referralSource = clean(data.referral_source);

  if (!name || !phone || !service) {
    return done(
      422,
      { ok: false, message: 'Please add your name, phone, and which area of care you need.' },
      false
    );
  }

  const lines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : 'Email: (not provided)',
    `Area of care: ${service}`,
    preferredTime ? `Best time to call: ${preferredTime}` : 'Best time to call: (not provided)',
    referralSource ? `Heard about us: ${referralSource}` : 'Heard about us: (not provided)',
    '',
    `Submitted: ${new Date().toISOString()}`,
    `IP: ${ip}`,
  ];
  const text = lines.join('\n');

  if (!RESEND_API_KEY) {
    // Not configured yet (local/dev). Don't fail the user; log for visibility.
    console.warn('[callback] RESEND_API_KEY not set — request received but not emailed:\n' + text);
    return done(200, { ok: true }, true);
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        ...(email ? { reply_to: email } : {}),
        subject: `Callback request — ${name} (${service})`,
        text,
      }),
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      console.error('[callback] Resend error', r.status, detail);
      return done(
        502,
        { ok: false, message: 'We could not send that just now. Please call us at 949.248.4547.' },
        false
      );
    }
  } catch (err) {
    console.error('[callback] send failed', err);
    return done(
      502,
      { ok: false, message: 'We could not send that just now. Please call us at 949.248.4547.' },
      false
    );
  }

  return done(200, { ok: true }, true);
}
