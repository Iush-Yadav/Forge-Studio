import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "forge.studio — websites that get local businesses more customers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 44, color: "#f0ece4" }}>
          <span style={{ fontStyle: "italic" }}>forge</span>
          <span style={{ color: "#c8ff00" }}>.</span>
          <span>studio</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, color: "#f0ece4", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Websites that get you
          </div>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            <span style={{ background: "#c8ff00", color: "#0a0a0a", padding: "0 16px", fontStyle: "italic" }}>
              more customers.
            </span>
          </div>
          <div style={{ fontSize: 30, color: "#8a8a84", marginTop: 32, fontFamily: "Arial, sans-serif" }}>
            Restaurants · Salons · Gyms · Clinics · Local business specialists
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
