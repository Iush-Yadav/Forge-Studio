"use client";
import { useState } from "react";
import { CREAM, BLACK, LIME, GREY, MARQUEE, SVCS, CAPS, CAP_CATS, STEPS } from "@/lib/constants";
import { Icon } from "@/lib/icons";
import { Reveal, scrollTo } from "./shared";

/* ─── Marquee band ─── */
export function MarqueeBand() {
  const doubled = [...MARQUEE, ...MARQUEE];
  return (
    <div aria-hidden style={{ borderTop: "1px solid rgba(240,236,228,0.07)", borderBottom: "1px solid rgba(240,236,228,0.07)", background: GREY, overflow: "hidden", padding: "18px 0" }}>
      <div style={{ display: "inline-flex", animation: "ml 40s linear infinite", width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 20, padding: "0 28px", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "0.16em", textTransform: "uppercase", color: i % 5 === 2 ? LIME : CREAM, opacity: i % 5 === 2 ? 1 : 0.28 }}>
            {item}
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: LIME, opacity: 0.5, flexShrink: 0, display: "inline-block" }} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Why (reality check) ─── */
export function Why() {
  const without = [
    "Invisible on Google — competitors take your customers",
    "No credibility — people don't trust what they can't find",
    "Zero leads after hours — business stops when you do",
    "Word-of-mouth only — slow, fragile, unpredictable",
  ];
  const withSite = [
    "Rank on Google — new customers find you every day",
    "Instant credibility — visitors trust you before calling",
    "24/7 lead generation — your site earns while you sleep",
    "Measurable growth — data you can actually act on",
  ];
  return (
    <section id="why" style={{ padding: "clamp(80px,12vh,160px) clamp(1.5rem,4vw,3.5rem)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "clamp(44px,8vh,110px)", flexWrap: "wrap", gap: 20 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 38, height: 2, background: "rgba(240,236,228,0.18)" }} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(240,236,228,0.4)" }}>The Reality Check</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, letterSpacing: "0.2em", color: "rgba(240,236,228,0.18)", textTransform: "uppercase" }}>§ 001</span>
          </Reveal>
        </div>

        <div className="two-col" style={{ alignItems: "start" }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(32px,7vw,92px)", lineHeight: 1.0, letterSpacing: "-0.025em", color: CREAM }}>
              Most customers <em>search online</em> before choosing a local business.
            </h2>
            <div style={{ width: 52, height: 2, background: LIME, margin: "32px 0" }} />
            <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(16px,1.4vw,20px)", lineHeight: 1.8, color: "rgba(240,236,228,0.55)", maxWidth: 420 }}>
              If your business isn't visible online, you're handing customers directly to your competitors. Every day without a website is revenue you'll never recover.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Reveal delay={80}>
              <div style={{ border: "1px solid rgba(255,80,80,0.14)", background: "rgba(255,50,50,0.03)", padding: "clamp(26px,3.5vw,48px)", borderRadius: 2 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(255,120,120,0.7)", marginBottom: 28 }}>Without a website</div>
                {without.map((t, i, a) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", paddingBottom: i < a.length - 1 ? 18 : 0, borderBottom: i < a.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", marginBottom: i < a.length - 1 ? 18 : 0 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", border: "1px solid rgba(255,100,100,0.28)", flexShrink: 0, marginTop: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span aria-hidden style={{ color: "rgba(255,110,110,0.7)", fontSize: 10 }}>✕</span>
                    </div>
                    <span style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(15px,1.2vw,18px)", lineHeight: 1.6, color: "rgba(240,236,228,0.52)" }}>{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div style={{ border: "1px solid rgba(200,255,0,0.15)", background: "rgba(200,255,0,0.025)", padding: "clamp(26px,3.5vw,48px)", borderRadius: 2 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.26em", textTransform: "uppercase", color: LIME, marginBottom: 28 }}>With a website</div>
                {withSite.map((t, i, a) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", paddingBottom: i < a.length - 1 ? 18 : 0, borderBottom: i < a.length - 1 ? "1px solid rgba(200,255,0,0.06)" : "none", marginBottom: i < a.length - 1 ? 18 : 0 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", border: "1px solid rgba(200,255,0,0.28)", flexShrink: 0, marginTop: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span aria-hidden style={{ color: LIME, fontSize: 10 }}>✓</span>
                    </div>
                    <span style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(15px,1.2vw,18px)", lineHeight: 1.6, color: "rgba(240,236,228,0.7)" }}>{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
export function Services() {
  const [hov, setHov] = useState(null);
  return (
    <section id="work" style={{ padding: "clamp(80px,10vh,150px) clamp(1.5rem,4vw,3.5rem)", borderTop: "1px solid rgba(240,236,228,0.07)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(44px,7vh,90px)", flexWrap: "wrap", gap: 28 }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(44px,11vw,136px)", textTransform: "uppercase", letterSpacing: "-0.035em", lineHeight: 0.9, color: CREAM }}>
              What<br />We Do
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.8, color: "rgba(240,236,228,0.45)", maxWidth: 300 }}>
              Six focused services. One mission: make your business impossible to ignore online.
            </p>
          </Reveal>
        </div>

        {SVCS.map((s, i) => (
          <div key={s.n} className="svc-row" onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
            style={{ padding: "clamp(20px,3.2vh,38px) clamp(10px,2vw,24px)", borderBottom: "1px solid rgba(240,236,228,0.07)", background: hov === i ? "rgba(200,255,0,0.028)" : "transparent", transition: "background 0.3s", borderRadius: 2 }}>
            <span style={{ display: "flex", alignItems: "center" }}>
              <Icon name={s.icon} size={22} style={{ color: hov === i ? LIME : "rgba(240,236,228,0.35)", transition: "color 0.3s", flexShrink: 0 }} />
            </span>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "clamp(20px,2.8vw,36px)", textTransform: "uppercase", letterSpacing: "-0.015em", color: hov === i ? LIME : CREAM, transition: "color 0.3s" }}>{s.title}</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(15px,1.3vw,19px)", color: "rgba(240,236,228,0.4)", marginTop: 4 }}>{s.sub}</div>
            </div>
            <p className="svc-desc" style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(14px,1.1vw,17px)", lineHeight: 1.75, color: "rgba(240,236,228,0.4)", maxWidth: 340 }}>{s.desc}</p>
            <div className="svc-arrow" aria-hidden style={{ width: 42, height: 42, borderRadius: "50%", flexShrink: 0, border: `1px solid ${hov === i ? LIME : "rgba(240,236,228,0.1)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: hov === i ? LIME : "rgba(240,236,228,0.2)", fontSize: 20, transition: "border-color 0.3s, color 0.3s, transform 0.35s", transform: hov === i ? "rotate(45deg)" : "rotate(0deg)" }}>→</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Capabilities (What we can build for you) — monochrome theme + subtle motion ─── */
export function Capabilities() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");
  const [hov, setHov] = useState(null);
  const shown = filter === "All" ? CAPS : CAPS.filter((p) => p.cat === filter);

  return (
    <section id="portfolio" style={{ padding: "clamp(80px,10vh,150px) clamp(1.5rem,4vw,3.5rem)", borderTop: "1px solid rgba(240,236,228,0.07)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "clamp(36px,6vh,80px)", flexWrap: "wrap", gap: 28 }}>
          <Reveal>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(240,236,228,0.4)", marginBottom: 18 }}>What We Build</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(34px,7.2vw,102px)", lineHeight: 0.98, letterSpacing: "-0.025em", color: CREAM }}>
              Built for your<br /><em>kind of business.</em>
            </h2>
            <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.8, color: "rgba(240,236,228,0.45)", maxWidth: 460, marginTop: 22 }}>
              Whatever you run, we know how to make it convert. Here&apos;s what a forge.studio site does for each kind of business.
            </p>
          </Reveal>
          <Reveal delay={80} style={{ alignSelf: "flex-end" }}>
            <div role="tablist" aria-label="Filter by business type" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {CAP_CATS.map((c) => (
                <button key={c} role="tab" aria-selected={filter === c} onClick={() => setFilter(c)}
                  style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", padding: "9px 18px", borderRadius: 2, cursor: "pointer", transition: "all 0.2s", background: filter === c ? LIME : "transparent", color: filter === c ? BLACK : "rgba(240,236,228,0.5)", border: filter === c ? `1px solid ${LIME}` : "1px solid rgba(240,236,228,0.1)" }}
                  onMouseEnter={(e) => { if (filter !== c) { e.currentTarget.style.borderColor = LIME; e.currentTarget.style.color = LIME; } }}
                  onMouseLeave={(e) => { if (filter !== c) { e.currentTarget.style.borderColor = "rgba(240,236,228,0.1)"; e.currentTarget.style.color = "rgba(240,236,228,0.5)"; } }}>
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="port-grid">
          {shown.map((p, i) => {
            const on = hov === i;
            return (
              <Reveal key={p.id} delay={i * 55}>
                <button onClick={() => setActive(p)} onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)} aria-label={`${p.name} — what we build`}
                  style={{ textAlign: "left", width: "100%", height: "100%", display: "block", position: "relative", overflow: "hidden", background: on ? "rgba(200,255,0,0.03)" : "rgba(240,236,228,0.02)", border: `1px solid ${on ? "rgba(200,255,0,0.28)" : "rgba(240,236,228,0.08)"}`, padding: "clamp(26px,3.5vw,44px)", cursor: "pointer", borderRadius: 2, transition: "border-color 0.4s, background 0.4s, transform 0.4s cubic-bezier(.16,1,.3,1)", transform: on ? "translateY(-6px)" : "translateY(0)" }}>
                  <span aria-hidden style={{ position: "absolute", top: 0, left: 0, height: 2, background: LIME, width: on ? "100%" : "0%", transition: "width 0.5s cubic-bezier(.16,1,.3,1)" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
                    <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: on ? LIME : "rgba(240,236,228,0.35)", transition: "color 0.3s" }}>{p.cat}</span>
                    <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 400, fontSize: 13, letterSpacing: "0.14em", color: "rgba(240,236,228,0.2)" }}>0{i + 1}</span>
                  </div>
                  <div style={{ width: 58, height: 58, borderRadius: "50%", border: `1px solid ${on ? LIME : "rgba(240,236,228,0.14)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: on ? LIME : CREAM, marginBottom: 22, transition: "border-color 0.35s, color 0.35s, transform 0.4s", transform: on ? "scale(1.06)" : "scale(1)" }}>
                    <Icon name={p.icon} size={27} strokeWidth={1.4} />
                  </div>
                  <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "clamp(22px,2.7vw,32px)", textTransform: "uppercase", letterSpacing: "-0.015em", color: CREAM, marginBottom: 6 }}>{p.name}</h3>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(17px,1.6vw,22px)", color: "rgba(240,236,228,0.55)", marginBottom: 18 }}>{p.tagline}</div>
                  <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(14px,1.15vw,17px)", lineHeight: 1.75, color: "rgba(240,236,228,0.48)", marginBottom: 22 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                    {p.tags.map((t) => (
                      <span key={t} style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", padding: "5px 12px", border: "1px solid rgba(240,236,228,0.14)", color: "rgba(240,236,228,0.5)", borderRadius: 2 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(18px,1.9vw,24px)", color: LIME }}>{p.promise}</span>
                    <span aria-hidden style={{ color: on ? LIME : "rgba(240,236,228,0.25)", fontSize: 20, transition: "transform 0.35s, color 0.35s", transform: on ? "translateX(4px)" : "translateX(0)", flexShrink: 0 }}>→</span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {active && (
        <div role="dialog" aria-modal="true" aria-label={active.name} onClick={() => setActive(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(10,10,10,0.95)", backdropFilter: "blur(20px)", zIndex: 900, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={(e) => e.stopPropagation()}
            style={{ background: "#111", border: "1px solid rgba(200,255,0,0.16)", maxWidth: 580, width: "100%", padding: "clamp(32px,5vw,60px)", borderRadius: 4, position: "relative", maxHeight: "90vh", overflowY: "auto" }}>
            <button onClick={() => setActive(null)} aria-label="Close"
              style={{ position: "absolute", top: 20, right: 20, background: "none", border: "1px solid rgba(240,236,228,0.1)", color: CREAM, width: 38, height: 38, borderRadius: "50%", cursor: "pointer", fontSize: 17, transition: "border-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = LIME)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(240,236,228,0.1)")}>✕</button>
            <div style={{ width: 70, height: 70, borderRadius: "50%", border: "1px solid rgba(200,255,0,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: LIME, marginBottom: 24 }}>
              <Icon name={active.icon} size={33} strokeWidth={1.4} />
            </div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,236,228,0.4)", marginBottom: 14 }}>{active.cat}</div>
            <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "clamp(28px,4.5vw,50px)", textTransform: "uppercase", color: CREAM, marginBottom: 10, letterSpacing: "-0.025em", lineHeight: 0.95 }}>{active.name}</h3>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(20px,2.4vw,30px)", color: "rgba(240,236,228,0.6)", marginBottom: 24 }}>{active.tagline}</div>
            <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(15px,1.2vw,18px)", lineHeight: 1.8, color: "rgba(240,236,228,0.6)", marginBottom: 26 }}>{active.desc}</p>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(22px,2.8vw,32px)", color: LIME, marginBottom: 34 }}>{active.promise}</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 34 }}>
              {active.tags.map((t) => (
                <span key={t} style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", padding: "6px 14px", border: "1px solid rgba(240,236,228,0.16)", color: "rgba(240,236,228,0.55)", borderRadius: 2 }}>{t}</span>
              ))}
            </div>
            <button onClick={() => { setActive(null); scrollTo("contact"); }}
              style={{ background: LIME, color: BLACK, border: "none", cursor: "pointer", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", padding: "16px 36px", borderRadius: 2, transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = CREAM)}
              onMouseLeave={(e) => (e.currentTarget.style.background = LIME)}>
              Build Mine →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── Process ─── */
export function Process() {
  const [open, setOpen] = useState(0);
  return (
    <section id="process" style={{ padding: "clamp(80px,10vh,150px) clamp(1.5rem,4vw,3.5rem)", borderTop: "1px solid rgba(240,236,228,0.07)", background: GREY }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="two-col" style={{ alignItems: "start" }}>
          <Reveal>
            <div style={{ position: "sticky", top: 110 }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(240,236,228,0.4)", marginBottom: 18 }}>How we work</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(34px,7vw,92px)", lineHeight: 1.0, letterSpacing: "-0.025em", color: CREAM }}>
                Idea to launch<br />in <em>3 weeks.</em>
              </h2>
              <div style={{ width: 52, height: 2, background: LIME, margin: "32px 0" }} />
              <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.8, color: "rgba(240,236,228,0.5)", maxWidth: 340, marginBottom: 44 }}>
                A clear process means no surprises, no scope creep, no wasted time. You always know exactly where your project stands.
              </p>
              <button onClick={() => scrollTo("contact")}
                style={{ background: "transparent", border: "1px solid rgba(240,236,228,0.16)", color: CREAM, cursor: "pointer", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", padding: "16px 36px", borderRadius: 2, transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = LIME; e.currentTarget.style.color = LIME; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240,236,228,0.16)"; e.currentTarget.style.color = CREAM; }}>
                Start the Process →
              </button>
            </div>
          </Reveal>
          <div>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 50}>
                <div style={{ borderBottom: "1px solid rgba(240,236,228,0.07)", borderRadius: 2 }}>
                  <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}
                    style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "clamp(20px,3vh,34px) clamp(6px,1.5vw,20px)", gap: 16 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "clamp(16px,3vw,28px)" }}>
                      <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 400, fontSize: 14, letterSpacing: "0.14em", color: "rgba(240,236,228,0.25)", width: 24, flexShrink: 0 }}>{s.n}</span>
                      <span>
                        <span style={{ display: "block", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "clamp(19px,2.3vw,30px)", textTransform: "uppercase", letterSpacing: "-0.01em", color: open === i ? LIME : CREAM, transition: "color 0.25s" }}>{s.title}</span>
                        <span style={{ display: "block", fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(14px,1.2vw,17px)", color: "rgba(240,236,228,0.35)", marginTop: 3 }}>{s.time}</span>
                      </span>
                    </span>
                    <span aria-hidden style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0, border: `1px solid ${open === i ? LIME : "rgba(240,236,228,0.12)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: open === i ? LIME : "rgba(240,236,228,0.28)", fontSize: 20, transition: "all 0.3s", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                  </button>
                  {open === i && (
                    <div style={{ padding: "0 clamp(6px,1.5vw,20px) clamp(18px,3vh,30px) clamp(46px,5vw,72px)" }}>
                      <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(15px,1.25vw,18px)", lineHeight: 1.8, color: "rgba(240,236,228,0.55)" }}>{s.desc}</p>
                    </div>
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
