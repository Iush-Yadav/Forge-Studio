import { EMAIL } from "@/lib/constants";

function isEmail(v) {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const {
    type = "lead",
    name = "", biz = "", email = "", phone = "",
    service = "", budget = "", msg = "", rating = 0,
    company_website = "",
  } = body;

  // Silently accept & drop bot submissions so they think it worked.
  if (company_website) return Response.json({ ok: true });

  // ── Validation ──
  if (!name.trim()) {
    return Response.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }
  if (type === "lead") {
    if (!isEmail(email)) return Response.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
    if (!msg.trim())     return Response.json({ ok: false, error: "Please tell us a little about your project." }, { status: 400 });
  }
  if (type === "review") {
    const r = Number(rating);
    if (!r || r < 1 || r > 5) return Response.json({ ok: false, error: "Please select a star rating." }, { status: 400 });
    if (!msg.trim())          return Response.json({ ok: false, error: "Please share your experience." }, { status: 400 });
  }

  // ── Build email content ──
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL || EMAIL;
  const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "";

  const subject =
    type === "review"
      ? `★ New ${rating}-star review from ${name}`
      : `New lead: ${name}${biz ? ` — ${biz}` : ""}`;

  // ── Try Web3Forms first (if key configured) ──
  if (WEB3FORMS_KEY) {
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject,
        from_name: "forge.studio",
        name,
        email: isEmail(email) ? email : CONTACT_EMAIL,
        ...(biz && { business: biz }),
        ...(type === "lead" && phone && { phone }),
        ...(type === "lead" && service && { service }),
        ...(type === "lead" && budget && { budget }),
        ...(type === "review" && { rating: `${"★".repeat(Number(rating))} (${rating}/5)` }),
        message: msg,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (data.success) return Response.json({ ok: true });
      console.error("Web3Forms error:", res.status, data);
    } catch (err) {
      console.error("Web3Forms network error:", err.message);
    }
  }

  // ── Fallback: FormSubmit.co ──
  const FS_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`;
  try {
    const payload = {
      _subject: subject,
      _template: "table",
      _captcha: "false",
      Name: name,
      email: isEmail(email) ? email : CONTACT_EMAIL,
      ...(biz && { Business: biz }),
      ...(type === "lead" && phone && { Phone: phone }),
      ...(type === "lead" && service && { Service: service }),
      ...(type === "lead" && budget && { Budget: budget }),
      ...(type === "review" && { Rating: `${"★".repeat(Number(rating))} (${rating}/5)` }),
      Message: msg,
    };

    const res = await fetch(FS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    const ok = res.ok && (data.success === true || data.success === "true");
    if (ok) return Response.json({ ok: true });
    console.error("FormSubmit error:", res.status, data);
  } catch (err) {
    console.error("FormSubmit network error:", err.message);
  }

  // ── Both services failed ──
  return Response.json(
    { ok: false, error: "Could not reach the mail service. Please contact us directly via WhatsApp or email." },
    { status: 502 }
  );
}
