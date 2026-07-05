"use client";
import { useState, useEffect } from "react";
import { CREAM, BLACK, LIME } from "@/lib/constants";
import { Reveal, scrollTo, usePrefersReducedMotion } from "./shared";

const STATS = [
  ["3 wk", "Idea to launch"],
  ["24/7", "Lead capture"],
  ["100%", "Custom-built"],
];

export default function Hero() {
  const [sy, setSy] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const h = () => setSy(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, [reduced]);

  return (
    <section id="top" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "calc(76px + clamp(28px,7vh,72px)) clamp(1.5rem,4vw,3.5rem) clamp(56px,9vh,120px)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden className="hero-01" style={{ position: "absolute", right: "-4vw", top: "7vh", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(200px,30vw,440px)", lineHeight: 1, color: "transparent", WebkitTextStroke: "1px rgba(240,236,228,0.03)", userSelect: "none", pointerEvents: "none", transform: `translateY(${sy * 0.1}px)`, willChange: "transform" }}>01</div>

      <div className="hero-badge" style={{ position: "absolute", top: "20vh", right: "clamp(1.5rem,6vw,7rem)", animation: "fl1 5s ease-in-out infinite" }}>
        <div style={{ width: 136, height: 136, borderRadius: "50%", border: "1px solid rgba(200,255,0,0.2)", background: "rgba(200,255,0,0.03)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: LIME, textAlign: "center", lineHeight: 1.7 }}>
            Available<br />for Work
          </span>
          <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: LIME, animation: "blink 1.2s infinite" }} />
        </div>
      </div>

      <Reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "clamp(24px,4vh,52px)" }}>
          <div style={{ width: 34, height: 2, background: LIME, flexShrink: 0 }} />
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: "clamp(11px,1.1vw,14px)", letterSpacing: "0.22em", textTransform: "uppercase", color: LIME }}>
            Web Studio · Local Business Specialist
          </span>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <h1 style={{ position: "relative", zIndex: 1 }}>
          <span style={{ display: "block", fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(42px,10.5vw,158px)", lineHeight: 0.95, letterSpacing: "-0.02em", color: CREAM, marginBottom: "0.06em" }}>We build websites</span>
          <span style={{ display: "flex", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(38px,10vw,154px)", lineHeight: 0.9, letterSpacing: "-0.03em", textTransform: "uppercase", color: CREAM, alignItems: "baseline", gap: "0.12em", flexWrap: "wrap" }}>
            that get you
            <span style={{ color: BLACK, background: LIME, padding: "0 0.11em", display: "inline-block", fontStyle: "italic", fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "0.87em", lineHeight: 1.06 }}>more</span>
            customers.
          </span>
        </h1>
      </Reveal>

      <Reveal delay={150}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: "clamp(32px,5vh,72px)", flexWrap: "wrap", gap: 40 }}>
          <div style={{ maxWidth: 440 }}>
            <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(16px,1.6vw,22px)", lineHeight: 1.7, color: "rgba(240,236,228,0.62)", marginBottom: 34 }}>
              Restaurants, salons, gyms, clinics — we turn invisible local businesses into trusted online brands that convert visitors into paying customers.
            </p>
            <div className="hero-actions" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("contact")}
                style={{ background: LIME, color: BLACK, border: "none", cursor: "pointer", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.18em", textTransform: "uppercase", padding: "16px 34px", borderRadius: 2, transition: "transform 0.2s, background 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = CREAM; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = LIME; }}>
                Book Free Call
              </button>
              <button onClick={() => scrollTo("portfolio")}
                style={{ background: "transparent", border: "1px solid rgba(240,236,228,0.18)", color: CREAM, cursor: "pointer", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 15, letterSpacing: "0.18em", textTransform: "uppercase", padding: "16px 34px", borderRadius: 2, transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = LIME; e.currentTarget.style.color = LIME; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240,236,228,0.18)"; e.currentTarget.style.color = CREAM; }}>
                See What We Build
              </button>
            </div>
          </div>
          <div className="hero-stats" style={{ display: "flex", gap: "clamp(28px,4vw,52px)" }}>
            {STATS.map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "clamp(32px,4.2vw,58px)", color: CREAM, lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "clamp(11px,1.1vw,13px)", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(240,236,228,0.4)", marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div aria-hidden className="hero-scroll" style={{ position: "absolute", bottom: "4vh", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, opacity: 0.22 }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>Scroll</div>
        <div style={{ width: 1, height: 44, background: CREAM, animation: "fl2 2.2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}
