"use client";
import { useState, useEffect, useRef } from "react";
import { CREAM, BLACK, LIME, WA_LINK } from "@/lib/constants";

/* ─── Reduced-motion preference ─── */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = () => setReduced(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return reduced;
}

/* ─── In-view observer ─── */
export function useInView(t = 0.08) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold: t }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [t]);
  return [ref, v];
}

/* ─── Reveal-on-scroll ─── */
export function Reveal({ children, delay = 0, style = {} }) {
  const [ref, v] = useInView();
  const reduced = usePrefersReducedMotion();
  const shown = reduced || v;
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : "translateY(34px)",
      transition: reduced ? "none" : `opacity 0.85s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.85s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─── Smooth scroll to section ─── */
export function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ─── Custom cursor (desktop / fine-pointer only) ─── */
export function Cursor() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    document.body.classList.add("custom-cursor");
    const dot = document.getElementById("cur-dot");
    const ring = document.getElementById("cur-ring");
    if (!dot || !ring) return;

    let rx = 0, ry = 0, mx = 0, my = 0, raf = 0;
    const move = (e) => { mx = e.clientX; my = e.clientY; };
    const tick = () => {
      rx += (mx - rx) * 0.14; ry += (my - ry) * 0.14;
      dot.style.transform = `translate(${mx - 5}px,${my - 5}px)`;
      ring.style.transform = `translate(${rx - 19}px,${ry - 19}px)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.body.classList.remove("custom-cursor");
    };
  }, []);
  return null;
}

/* ─── Intro loader ─── */
export function Loader({ onDone }) {
  const [pct, setPct] = useState(0);
  const fired = useRef(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) { if (!fired.current) { fired.current = true; onDone(); } return; }
    let v = 0;
    const id = setInterval(() => {
      v += Math.random() * 4.2 + 1.2;
      if (v >= 100) {
        v = 100; clearInterval(id);
        if (!fired.current) { fired.current = true; setTimeout(onDone, 350); }
      }
      setPct(Math.floor(v));
    }, 26);
    return () => clearInterval(id);
  }, [onDone, reduced]);

  return (
    <div style={{
      position: "fixed", inset: 0, background: "#0a0a0a", zIndex: 99999,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity: pct === 100 ? 0 : 1, transition: "opacity 0.5s ease", pointerEvents: pct === 100 ? "none" : "all",
    }}>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px,5vw,70px)", fontWeight: 300, color: CREAM, letterSpacing: "-0.02em", marginBottom: 60 }}>
        <em>forge</em><span style={{ color: LIME }}>.</span>studio
      </div>
      <div style={{ width: 220, height: 1, background: "#222", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${pct}%`, background: LIME, transition: "width 0.06s linear" }} />
      </div>
      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, letterSpacing: "0.32em", color: "#333", marginTop: 18, textTransform: "uppercase" }}>
        Loading — {pct}%
      </div>
    </div>
  );
}

/* ─── Star rating (interactive, keyboard-accessible) ─── */
export function StarRating({ value, onChange, size = 34 }) {
  const [hover, setHover] = useState(0);
  const shown = hover || value;
  return (
    <div role="radiogroup" aria-label="Star rating" style={{ display: "flex", gap: 6 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          onClick={() => onChange(n)}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          style={{
            background: "none", border: "none", cursor: "pointer", padding: 2,
            fontSize: size, lineHeight: 1, transition: "color 0.15s, transform 0.15s",
            color: n <= shown ? LIME : "rgba(240,236,228,0.2)",
            transform: n <= hover ? "scale(1.12)" : "scale(1)",
          }}
        >
          ★
        </button>
      ))}
    </div>
  );
}

/* ─── Floating WhatsApp pill ─── */
export function WABtn() {
  const [hov, setHov] = useState(false);
  return (
    <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"
      style={{
        position: "fixed", bottom: 28, right: 28, zIndex: 400,
        display: "flex", alignItems: "center", gap: 10,
        background: hov ? "#25d366" : BLACK, border: "1px solid #25d366",
        color: hov ? BLACK : "#25d366", padding: hov ? "13px 22px" : "13px",
        borderRadius: hov ? 3 : 48, textDecoration: "none",
        fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14,
        letterSpacing: "0.16em", textTransform: "uppercase",
        transition: "all 0.32s cubic-bezier(.16,1,.3,1)", whiteSpace: "nowrap", overflow: "hidden",
        minWidth: 48, height: 48, boxShadow: "0 4px 24px rgba(37,211,102,0.15)",
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.25.7-1.44 1.33-1.99 1.37-.53.05-1.02.24-3.42-.72-2.9-1.14-4.75-4.1-4.9-4.29-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.11 1-2.4.26-.29.57-.36.76-.36l.55.01c.18.01.42-.07.65.5.25.6.85 2.07.92 2.22.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.28.72 1.18 1.54 1.91 1.06.95 1.95 1.24 2.23 1.38.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.18-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.33.07.11.07.66-.18 1.36Z"/>
      </svg>
      {hov && <span>WhatsApp us</span>}
    </a>
  );
}
