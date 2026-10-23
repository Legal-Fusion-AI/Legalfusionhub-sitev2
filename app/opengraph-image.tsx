import { ImageResponse } from "next/og";

export const alt = "Monday, 8:05 AM. The voicemail box is full from the weekend.";
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
          background: "#0B0F14",
          color: "#F4EFE6",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#8B95A5",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Mon 8:05
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 920,
              fontFamily: "Georgia, serif",
              fontSize: 64,
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            Monday, 8:05 AM. The voicemail box is full from the weekend.
          </div>
          <div
            style={{
              width: 72,
              height: 2,
              background: "#C4A574",
            }}
          />
          <div style={{ color: "#8B95A5", fontSize: 24 }}>
            What if Monday started with a list, not a pile?
          </div>
        </div>
      </div>
    ),
    size,
  );
}
