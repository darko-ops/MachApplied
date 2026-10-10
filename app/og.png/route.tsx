import { ImageResponse } from "next/og";

export const dynamic = "force-static";
const size = { width: 1200, height: 630 };

// Served as /og.png in the static export
export function GET() {
  const line = "rgba(232,234,237,0.05)";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0E1013",
          backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          color: "#E8EAED",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 18, height: 18, background: "#E8A33D" }} />
          <div style={{ fontSize: 30, letterSpacing: 8, fontWeight: 600 }}>MACH APPLIED</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: -2, lineHeight: 1.05 }}>
            Keep your ERP. Stop fighting it.
          </div>
          <div style={{ fontSize: 30, color: "#8B929C" }}>
            Modern systems for industry. Read-only. No migration.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            color: "#8B929C",
            borderTop: "1px solid #2A2F36",
            paddingTop: 28,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 10, background: "#4CAF7A" }} />
          machapplied.com
        </div>
      </div>
    ),
    size,
  );
}
