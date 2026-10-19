import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Retainer Pro. From first call to retained client.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const mark = await readFile(join(process.cwd(), "public/logo-mark.png"));
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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img src={markSrc} alt="" width={42} height={48} />
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: -0.8,
            }}
          >
            Retainer Pro
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
            <strong style={{ fontSize: 64, lineHeight: 0.98, letterSpacing: -3 }}>
              From first call to retained client.
            </strong>
            <span style={{ color: "#4a5a6e", fontSize: 25 }}>
              Bankruptcy intake, answered 24/7.
            </span>
          </div>
          <img src={markSrc} alt="" width={138} height={160} />
        </div>
      </div>
    ),
    size,
  );
}
