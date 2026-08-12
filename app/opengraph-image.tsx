import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a3d5c",
          color: "#e6ebf0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#efa906", letterSpacing: 4 }}>
          CHELMARKTAX
        </div>
        <div style={{ fontSize: 60, marginTop: 24, lineHeight: 1.15, maxWidth: 950, fontWeight: 600 }}>
          Got a letter from HMRC? Let&apos;s work out what it means.
        </div>
        <div
          style={{
            fontSize: 26,
            marginTop: 32,
            color: "#b7c9d8",
          }}
        >
          Confidential, UK-wide specialist support
        </div>
      </div>
    ),
    { ...size }
  );
}
