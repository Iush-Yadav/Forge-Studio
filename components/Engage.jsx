"use client";
import { useState } from "react";
import Link from "next/link";
import {
  CREAM, BLACK, LIME, GREY,
  PLANS, FAQS, EMAIL, PHONE_DISP, PHONE_LINK, WA_LINK,
} from "@/lib/constants";
import { Reveal, scrollTo, StarRating } from "./shared";

const WEB3FORMS_KEY = "da55699b-51a6-4b04-9411-6bd7c13d5a0d";

async function postForm(payload) {
  const { type, name, biz, email, phone, service, budget, msg, rating } = payload;

  const subject =
    type === "review"
      ? `★ New ${rating}-star review from ${name}`
      : `New lead: ${name}${biz ? ` — ${biz}` : ""}`;

  const message = [
    `Type: ${type}`,
    `Name: ${name}`,
    biz && `Business: ${biz}`,
    email && `Email: ${email}`,
    phone && `Phone: ${phone}`,
    service && `Service: ${service}`,
    budget && `Budget: ${budget}`,
    type === "review" && rating && `Rating: ${"★".repeat(Number(rating))} (${rating}/5)`,
    `\nMessage:\n${msg}`,
  ].filter(Boolean).join("\n");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject,
        from_name: "forge.studio",
        name,
        email: email || "no-reply@forge.studio",
        message,
      }),
    });
    const result = await res.json();
    if (!result.success) throw new Error(result.message || "Something went wrong.");
    return { ok: true };
  } catch (error) {
    console.error("Web3Forms Error:", error);
    throw new Error(error.message || "Failed to send message. Please try again.");
  }
}

/* ─── Review submission (replaces static testimonials) ─── */
export function ReviewForm() {
  const [form, setForm] = useState({ name: "", biz: "", msg: "", company_website: "" });
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!rating) { setError("Please pick a star rating."); return; }
    setStatus("sending");
    try {
      await postForm({ type: "review", rating, ...form });
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <section id="reviews" style={{ padding: "clamp(90px,10vh,150px) clamp(1.5rem,4vw,3.5rem)", borderTop: "1px solid rgba(240,236,228,0.07)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="two-col" style={{ alignItems: "start" }}>
          <Reveal>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(240,236,228,0.4)", marginBottom: 18 }}>Your Experience</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(38px,9vw,116px)", textTransform: "uppercase", letterSpacing: "-0.035em", lineHeight: 0.9, color: CREAM }}>
              Worked<br />with us?<br /><span style={{ color: LIME }}>Tell us.</span>
            </h2>
            <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.8, color: "rgba(240,236,228,0.5)", maxWidth: 380, marginTop: 32 }}>
              Your words help other local business owners take the leap. Share your experience and rate how we did — it means the world to us.
            </p>
          </Reveal>

          <Reveal delay={120}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "60px 24px" }}>
                <div aria-hidden style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 40, color: LIME, letterSpacing: "0.1em", marginBottom: 20 }}>{"★".repeat(rating)}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 36, textTransform: "uppercase", color: LIME, marginBottom: 16 }}>Thank you!</h3>
                <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: 18, color: "rgba(240,236,228,0.55)", lineHeight: 1.75 }}>
                  We truly appreciate you taking the time.<br />Your feedback helps us get better every day.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div style={{ marginBottom: 36 }}>
                  <label htmlFor="rv-name" className="sr-only">Your name</label>
                  <input id="rv-name" className="forge-input" required placeholder="Your name" value={form.name} onChange={set("name")} style={{ marginBottom: 0 }} />
                </div>
                <div style={{ marginBottom: 36 }}>
                  <label htmlFor="rv-biz" className="sr-only">Business name (optional)</label>
                  <input id="rv-biz" className="forge-input" placeholder="Business name (optional)" value={form.biz} onChange={set("biz")} style={{ marginBottom: 0 }} />
                </div>

                <div style={{ marginBottom: 36 }}>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,236,228,0.4)", marginBottom: 14 }}>Your rating</div>
                  <StarRating value={rating} onChange={setRating} />
                </div>

                <label htmlFor="rv-msg" className="sr-only">Your experience</label>
                <textarea id="rv-msg" className="forge-input" required rows={5} placeholder="Write your experience — what did we build, how was it, what changed for your business?" value={form.msg} onChange={set("msg")} style={{ resize: "none" }} />

                {/* honeypot */}
                <input type="text" name="company_website" tabIndex={-1} autoComplete="off" value={form.company_website} onChange={set("company_website")} style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} aria-hidden />

                {error && <p role="alert" style={{ fontFamily: "'Barlow',sans-serif", fontSize: 15, color: "#ff7a7a", marginBottom: 20 }}>{error}</p>}

                <button type="submit" disabled={status === "sending"}
                  style={{ background: LIME, color: BLACK, border: "none", cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.7 : 1, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.18em", textTransform: "uppercase", padding: "20px 56px", borderRadius: 2, transition: "transform 0.2s, background 0.2s", marginTop: 8 }}
                  onMouseEnter={(e) => { if (status !== "sending") { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = CREAM; } }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = LIME; }}>
                  {status === "sending" ? "Sending…" : "Submit Review →"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
export function Pricing() {
  return (
    <section id="pricing" style={{ padding: "clamp(90px,10vh,150px) clamp(1.5rem,4vw,3.5rem)", borderTop: "1px solid rgba(240,236,228,0.07)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(48px,7vh,90px)", flexWrap: "wrap", gap: 28 }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(34px,7.2vw,102px)", lineHeight: 0.96, letterSpacing: "-0.025em", color: CREAM }}>
              Clear pricing,<br /><em>zero surprises.</em>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.8, color: "rgba(240,236,228,0.45)", maxWidth: 280 }}>
              Every plan includes a free strategy call and a 30-day satisfaction guarantee.
            </p>
          </Reveal>
        </div>
        <div className="three-col">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <div style={{ background: p.highlight ? "rgba(200,255,0,0.04)" : "rgba(240,236,228,0.02)", border: `1px solid ${p.highlight ? "rgba(200,255,0,0.22)" : "rgba(240,236,228,0.07)"}`, padding: "clamp(36px,4.5vw,56px)", borderRadius: 2, display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
                {p.highlight && (
                  <div style={{ position: "absolute", top: 22, right: 22, background: LIME, color: BLACK, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 2 }}>Popular</div>
                )}
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.26em", textTransform: "uppercase", color: p.highlight ? LIME : "rgba(240,236,228,0.4)", marginBottom: 28 }}>{p.name}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "clamp(46px,5.8vw,70px)", color: CREAM, lineHeight: 1, marginBottom: 10 }}>{p.price}</div>
                <div style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(14px,1.15vw,16px)", color: "rgba(240,236,228,0.4)", marginBottom: 36 }}>{p.sub}</div>
                <div style={{ width: "100%", height: 1, background: "rgba(240,236,228,0.07)", marginBottom: 36 }} />
                <ul style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, marginBottom: 44, listStyle: "none" }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <span aria-hidden style={{ color: LIME, fontSize: 13, marginTop: 3, flexShrink: 0 }}>✓</span>
                      <span style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(14px,1.15vw,17px)", lineHeight: 1.6, color: "rgba(240,236,228,0.6)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollTo("contact")}
                  style={{ background: p.highlight ? LIME : "transparent", color: p.highlight ? BLACK : CREAM, border: `1px solid ${p.highlight ? "transparent" : "rgba(240,236,228,0.16)"}`, cursor: "pointer", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", padding: "17px 0", borderRadius: 2, width: "100%", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { if (p.highlight) { e.currentTarget.style.background = CREAM; } else { e.currentTarget.style.borderColor = LIME; e.currentTarget.style.color = LIME; } }}
                  onMouseLeave={(e) => { if (p.highlight) { e.currentTarget.style.background = LIME; } else { e.currentTarget.style.borderColor = "rgba(240,236,228,0.16)"; e.currentTarget.style.color = CREAM; } }}>
                  {p.cta} →
                </button>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p style={{ textAlign: "center", fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(14px,1.15vw,16px)", color: "rgba(240,236,228,0.4)", marginTop: 32 }}>
            Not sure which plan?{" "}
            <button onClick={() => scrollTo("contact")} style={{ background: "none", border: "none", cursor: "pointer", color: LIME, fontFamily: "'Barlow',sans-serif", fontWeight: 400, fontSize: "inherit", textDecoration: "underline", padding: 0 }}>Book a free call</button>
            {" "}— we&apos;ll recommend what&apos;s right for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
export function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ padding: "clamp(90px,10vh,150px) clamp(1.5rem,4vw,3.5rem)", borderTop: "1px solid rgba(240,236,228,0.07)", background: GREY }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="two-col" style={{ alignItems: "start" }}>
          <Reveal>
            <div style={{ position: "sticky", top: 110 }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(240,236,228,0.4)", marginBottom: 18 }}>Questions</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(34px,7vw,92px)", lineHeight: 1.0, letterSpacing: "-0.025em", color: CREAM, marginBottom: 38 }}>
                Everything<br />you need<br />to <em>know.</em>
              </h2>
              <button onClick={() => scrollTo("contact")}
                style={{ background: "transparent", border: "1px solid rgba(240,236,228,0.16)", color: CREAM, cursor: "pointer", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", padding: "16px 36px", borderRadius: 2, transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = LIME; e.currentTarget.style.color = LIME; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240,236,228,0.16)"; e.currentTarget.style.color = CREAM; }}>
                Ask a Question →
              </button>
            </div>
          </Reveal>
          <div>
            {FAQS.map((f, i) => (
              <Reveal key={i} delay={i * 45}>
                <div style={{ borderBottom: "1px solid rgba(240,236,228,0.07)" }}>
                  <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}
                    style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(20px,3vh,32px) 0", gap: 24 }}>
                    <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: "clamp(18px,2.1vw,26px)", textTransform: "uppercase", letterSpacing: "-0.01em", color: open === i ? LIME : CREAM, transition: "color 0.25s", lineHeight: 1.2 }}>{f.q}</span>
                    <span aria-hidden style={{ color: open === i ? LIME : "rgba(240,236,228,0.28)", fontSize: 26, flexShrink: 0, transition: "all 0.3s", transform: open === i ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}>+</span>
                  </button>
                  {open === i && (
                    <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(15px,1.25vw,18px)", lineHeight: 1.8, color: "rgba(240,236,228,0.55)", paddingBottom: "clamp(18px,2.5vh,28px)" }}>{f.a}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
export function Contact() {
  const [form, setForm] = useState({ name: "", biz: "", email: "", phone: "", service: "", budget: "", msg: "", company_website: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("sending");
    try {
      await postForm({ type: "lead", ...form });
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  const channels = [
    { label: "WhatsApp", val: PHONE_DISP, href: WA_LINK, note: "Chat now", ext: true },
    { label: "Email", val: EMAIL, href: `mailto:${EMAIL}`, note: "Write to us" },
    { label: "Call", val: PHONE_DISP, href: PHONE_LINK, note: "Call now" },
  ];

  return (
    <section id="contact" style={{ padding: "clamp(90px,10vh,150px) clamp(1.5rem,4vw,3.5rem)", borderTop: "1px solid rgba(240,236,228,0.07)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Reveal>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(240,236,228,0.4)", marginBottom: 18 }}>Get in touch</div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(44px,12vw,158px)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.88, color: CREAM, marginBottom: "clamp(48px,9vh,110px)" }}>
            Let&apos;s build<br />something<br /><span style={{ color: LIME }}>great.</span>
          </h2>
        </Reveal>

        <div className="two-col" style={{ alignItems: "start" }}>
          <Reveal>
            <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(16px,1.5vw,21px)", lineHeight: 1.8, color: "rgba(240,236,228,0.55)", marginBottom: 54, maxWidth: 400 }}>
              Book a free 30-minute strategy call. No pitch, no pressure — an honest conversation about your business and what&apos;s possible.
            </p>
            {channels.map((c) => (
              <a key={c.label} href={c.href} target={c.ext ? "_blank" : undefined} rel={c.ext ? "noreferrer" : undefined}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 0", borderBottom: "1px solid rgba(240,236,228,0.07)", textDecoration: "none", color: CREAM, transition: "color 0.2s", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = LIME)}
                onMouseLeave={(e) => (e.currentTarget.style.color = CREAM)}>
                <span>
                  <span style={{ display: "block", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,236,228,0.4)", marginBottom: 6 }}>{c.label}</span>
                  <span style={{ display: "block", fontFamily: "'Barlow',sans-serif", fontWeight: 400, fontSize: "clamp(16px,1.5vw,20px)" }}>{c.val}</span>
                </span>
                <span style={{ textAlign: "right" }}>
                  <span style={{ display: "block", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,236,228,0.28)", marginBottom: 4 }}>{c.note}</span>
                  <span aria-hidden style={{ fontSize: 22, opacity: 0.3 }}>→</span>
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={120}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "60px 40px" }}>
                <div aria-hidden style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 88, color: LIME, marginBottom: 28, lineHeight: 1 }}>✓</div>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 40, textTransform: "uppercase", color: LIME, marginBottom: 18 }}>Sent.</h3>
                <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: 18, color: "rgba(240,236,228,0.55)", lineHeight: 1.75 }}>
                  We&apos;ll reply within 24 hours.<br />Looking forward to building something remarkable together.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="form-grid">
                  <div><label htmlFor="c-name" className="sr-only">Your name</label><input id="c-name" className="forge-input" required placeholder="Your name" value={form.name} onChange={set("name")} /></div>
                  <div><label htmlFor="c-biz" className="sr-only">Business name</label><input id="c-biz" className="forge-input" required placeholder="Business name" value={form.biz} onChange={set("biz")} /></div>
                  <div><label htmlFor="c-email" className="sr-only">Email address</label><input id="c-email" className="forge-input" required type="email" placeholder="Email address" value={form.email} onChange={set("email")} /></div>
                  <div><label htmlFor="c-phone" className="sr-only">Phone / WhatsApp</label><input id="c-phone" className="forge-input" placeholder="Phone / WhatsApp" value={form.phone} onChange={set("phone")} /></div>
                </div>
                <label htmlFor="c-service" className="sr-only">Service needed</label>
                <input id="c-service" className="forge-input" placeholder="Service needed (e.g. Restaurant website, SEO...)" value={form.service} onChange={set("service")} />
                <label htmlFor="c-budget" className="sr-only">Budget range</label>
                <select id="c-budget" className="forge-input" value={form.budget} onChange={set("budget")}>
                  <option value="">Budget range</option>
                  <option>₹13,999 – ₹33,500 (Starter)</option>
                  <option>₹33,500 – ₹59,000 (Professional)</option>
                  <option>₹59,000+ (Growth)</option>
                  <option>Not decided yet</option>
                </select>
                <label htmlFor="c-msg" className="sr-only">Your message</label>
                <textarea id="c-msg" className="forge-input" required rows={5} placeholder="Tell us about your business and what you need..." value={form.msg} onChange={set("msg")} style={{ resize: "none" }} />

                {/* honeypot */}
                <input type="text" name="company_website" tabIndex={-1} autoComplete="off" value={form.company_website} onChange={set("company_website")} style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} aria-hidden />

                {error && <p role="alert" style={{ fontFamily: "'Barlow',sans-serif", fontSize: 15, color: "#ff7a7a", marginBottom: 20 }}>{error}</p>}

                <button type="submit" disabled={status === "sending"}
                  style={{ background: LIME, color: BLACK, border: "none", cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.7 : 1, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.18em", textTransform: "uppercase", padding: "20px 56px", borderRadius: 2, transition: "transform 0.2s, background 0.2s", marginTop: 8 }}
                  onMouseEnter={(e) => { if (status !== "sending") { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = CREAM; } }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = LIME; }}>
                  {status === "sending" ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
export function Footer() {
  const year = new Date().getFullYear();
  const cols = [
    { title: "Services", links: [["Business Websites", "work"], ["E-Commerce", "work"], ["Restaurant Sites", "work"], ["SEO Optimization", "work"], ["What We Build", "portfolio"]] },
    { title: "Company", links: [["Capabilities", "portfolio"], ["Process", "process"], ["Pricing", "pricing"], ["FAQ", "faq"], ["Contact", "contact"]] },
  ];
  return (
    <footer style={{ borderTop: "1px solid rgba(240,236,228,0.07)", padding: "clamp(56px,9vh,110px) clamp(1.5rem,4vw,3.5rem) clamp(28px,4vh,52px)", background: BLACK }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="footer-cols" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 48, marginBottom: "clamp(56px,9vh,100px)" }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 42, fontWeight: 300, color: CREAM, letterSpacing: "-0.01em", marginBottom: 18 }}>
              <em>forge</em><span style={{ color: LIME }}>.</span>studio
            </div>
            <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.8, color: "rgba(240,236,228,0.4)", maxWidth: 240 }}>
              Turning invisible local businesses into trusted online brands.
            </p>
          </div>
          <div style={{ display: "flex", gap: "clamp(36px,6vw,88px)", flexWrap: "wrap" }}>
            {cols.map((col) => (
              <div key={col.title}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,236,228,0.35)", marginBottom: 22 }}>{col.title}</div>
                {col.links.map(([label, id]) => (
                  <button key={label} onClick={() => scrollTo(id)}
                    style={{ display: "block", background: "none", border: "none", textAlign: "left", cursor: "pointer", fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: 15, color: "rgba(240,236,228,0.5)", marginBottom: 14, padding: 0, transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = CREAM)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,236,228,0.5)")}>
                    {label}
                  </button>
                ))}
              </div>
            ))}
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,236,228,0.35)", marginBottom: 22 }}>Contact</div>
              {[[EMAIL, `mailto:${EMAIL}`, false], [PHONE_DISP, PHONE_LINK, false], ["WhatsApp Chat", WA_LINK, true]].map(([label, href, ext]) => (
                <a key={label} href={href} target={ext ? "_blank" : undefined} rel={ext ? "noreferrer" : undefined}
                  style={{ display: "block", fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: 15, color: "rgba(240,236,228,0.5)", marginBottom: 14, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = CREAM)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,236,228,0.5)")}>
                  {label}
                </a>
              ))}
              <div style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: 15, color: "rgba(240,236,228,0.4)", marginTop: 4 }}>Mon–Sat · 9am–7pm IST</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, paddingTop: 28, borderTop: "1px solid rgba(240,236,228,0.07)" }}>
          <span style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: 14, color: "rgba(240,236,228,0.35)" }}>
            © {year} forge.studio · All rights reserved ·{" "}
            <Link href="/privacy" style={{ color: "inherit", textDecoration: "underline" }}>Privacy</Link>
            {" "}·{" "}
            <Link href="/terms" style={{ color: "inherit", textDecoration: "underline" }}>Terms</Link>
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 15, color: "rgba(240,236,228,0.3)" }}>Crafted with obsession.</span>
        </div>
      </div>
    </footer>
  );
}
