import { ImageResponse } from "next/og";

export const alt = "Legal Fusion Hub — client acquisition for bankruptcy firms";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#0c1e3b",
          padding: "68px 76px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 46,
              height: 46,
              alignItems: "flex-end",
              gap: 5,
              borderRadius: 10,
              background: "#0c1e3b",
              padding: 9,
            }}
          >
            <span style={{ width: 7, height: 14, background: "#fff" }} />
            <span style={{ width: 7, height: 28, background: "#78a2ff" }} />
            <span style={{ width: 7, height: 20, background: "#ff8f80" }} />
          </div>
          <span style={{ fontSize: 28, fontWeight: 700 }}>
            Legal Fusion <b style={{ color: "#175cff" }}>Hub</b>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 80 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 820,
              flexDirection: "column",
              gap: 22,
            }}
          >
            <strong style={{ fontSize: 72, lineHeight: 0.98, letterSpacing: -4 }}>
              Every lead answered. Every next step handled.
            </strong>
            <span style={{ color: "#53627a", fontSize: 25 }}>
              Done-for-you client acquisition for bankruptcy law firms.
            </span>
          </div>
          <div
            style={{
              width: 82,
              height: 82,
              border: "18px solid #eaf1ff",
              borderRadius: 100,
              background: "#175cff",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
