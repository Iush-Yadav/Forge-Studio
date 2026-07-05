import Link from "next/link";
import { CREAM, LIME, SITE_NAME } from "@/lib/constants";

export function LegalShell({ title, updated, children }) {
  return (
    <main style={{ minHeight: "100vh", padding: "clamp(2rem,6vw,4rem) clamp(1.5rem,4vw,3.5rem) 6rem" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "clamp(48px,8vh,88px)" }}>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 300, color: CREAM, letterSpacing: "-0.01em" }}>
            <em>forge</em><span style={{ color: LIME }}>.</span>studio
          </span>
        </Link>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(40px,6vw,72px)", lineHeight: 1, letterSpacing: "-0.025em", color: CREAM, marginBottom: 14 }}>
          {title}
        </h1>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,236,228,0.4)", marginBottom: "clamp(40px,6vh,64px)" }}>
          {SITE_NAME} · {updated}
        </div>
        {children}
      </div>
    </main>
  );
}

export function H({ children }) {
  return (
    <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "clamp(20px,2.4vw,28px)", textTransform: "uppercase", letterSpacing: "-0.01em", color: CREAM, margin: "40px 0 14px" }}>
      {children}
    </h2>
  );
}

export function P({ children, style = {} }) {
  return (
    <p style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 300, fontSize: "clamp(15px,1.25vw,18px)", lineHeight: 1.8, color: "rgba(240,236,228,0.6)", marginBottom: 18, ...style }}>
      {children}
    </p>
  );
}
