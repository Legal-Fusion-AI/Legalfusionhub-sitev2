import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Legal Fusion Hub — from first call to retained client";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [wordmark, mark] = await Promise.all([
    readFile(join(process.cwd(), "public/logo-wordmark.png")),
    readFile(join(process.cwd(), "public/logo-mark.png")),
  ]);
  const wordmarkSrc = `data:image/png;base64,${wordmark.toString("base64")}`;
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

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
          color: "#0b213f",
          padding: "68px 76px",
          fontFamily: "sans-serif",
        }}
      >
        <img src={wordmarkSrc} alt="" width={394} height={48} />
        <div style={{ display: "flex", alignItems: "flex-end", gap: 80 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 820,
              flexDirection: "column",
              gap: 22,
            }}
          >
            <strong style={{ fontSize: 64, lineHeight: 0.98, letterSpacing: -3 }}>
              From first call to retained client.
            </strong>
            <span style={{ color: "#4a5a6e", fontSize: 25 }}>
              Technology for a stronger practice.
            </span>
          </div>
          <img src={markSrc} alt="" width={138} height={160} />
        </div>
      </div>
    ),
    size,
  );
}
