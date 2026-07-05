"use client";
import { useState, useEffect } from "react";
import { CREAM, BLACK, LIME, NAV_LINKS } from "@/lib/constants";
import { scrollTo } from "./shared";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleNav = (id) => { setOpen(false); setTimeout(() => scrollTo(id), 60); };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
      background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(24px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(240,236,228,0.06)" : "1px solid transparent",
      transition: "background 0.4s, border-color 0.4s",
    }}>
      <div className="nav-inner">
        <button onClick={() => scrollTo("top")} aria-label="forge.studio — back to top"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 300, color: CREAM, letterSpacing: "-0.01em" }}>
            <em>forge</em><span style={{ color: LIME }}>.</span>studio
          </span>
        </button>

        <div className="nav-desktop">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => handleNav(l.id)}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 15, letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(240,236,228,0.55)", transition: "color 0.2s", padding: "4px 0" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = CREAM)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,236,228,0.55)")}>
              {l.label}
            </button>
          ))}
          <button onClick={() => handleNav("contact")}
            style={{ background: LIME, color: BLACK, border: "none", cursor: "pointer", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", padding: "12px 28px", borderRadius: 2, transition: "background 0.2s, transform 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = CREAM; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = LIME; e.currentTarget.style.transform = "translateY(0)"; }}>
            Start Project
          </button>
        </div>

        <button className="nav-hamburger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          <span style={{ display: "block", width: 26, height: 2, background: CREAM, borderRadius: 1, transition: "transform 0.3s", transform: open ? "rotate(45deg) translate(5px,6px)" : "none" }} />
          <span style={{ display: "block", width: 26, height: 2, background: CREAM, borderRadius: 1, transition: "opacity 0.3s", opacity: open ? 0 : 1 }} />
          <span style={{ display: "block", width: 26, height: 2, background: CREAM, borderRadius: 1, transition: "transform 0.3s", transform: open ? "rotate(-45deg) translate(5px,-6px)" : "none" }} />
        </button>
      </div>

      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <button key={l.id} onClick={() => handleNav(l.id)}
            style={{ background: "none", border: "none", borderBottom: "1px solid rgba(240,236,228,0.06)", cursor: "pointer", textAlign: "left", width: "100%", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 24, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(240,236,228,0.7)", padding: "16px 0", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = LIME)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,236,228,0.7)")}>
            {l.label}
          </button>
        ))}
        <button onClick={() => handleNav("contact")}
          style={{ background: LIME, color: BLACK, border: "none", cursor: "pointer", marginTop: 24, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "0.16em", textTransform: "uppercase", padding: "18px", borderRadius: 2 }}>
          Start Project
        </button>
      </div>
    </nav>
  );
}
