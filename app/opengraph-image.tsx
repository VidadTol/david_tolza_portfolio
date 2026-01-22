import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "David Tolza - Développeur Web & Mobile";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #0f172a 0%, #1a1f3a 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            top: "-100px",
            right: "-100px",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            bottom: "-50px",
            left: "-50px",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          {/* Main title */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "24px",
              lineHeight: 1.2,
              fontFamily: '"Geist", sans-serif',
              letterSpacing: "-2px",
            }}
          >
            David Tolza
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "48px",
              color: "#3b82f6",
              marginBottom: "32px",
              fontWeight: "600",
              fontFamily: '"Geist", sans-serif',
              letterSpacing: "-1px",
            }}
          >
            Développeur Web & Mobile
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: "32px",
              color: "#cbd5e1",
              marginBottom: "40px",
              fontFamily: '"Geist", sans-serif',
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Freelance à Castelmaurou
          </div>

          {/* Bottom accent line */}
          <div
            style={{
              width: "120px",
              height: "4px",
              background: "linear-gradient(90deg, #3b82f6 0%, #9333ea 100%)",
              borderRadius: "2px",
              marginTop: "20px",
            }}
          />
        </div>

        {/* Footer text */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            fontSize: "20px",
            color: "#64748b",
            fontFamily: '"Geist", sans-serif',
            zIndex: 2,
          }}
        >
          david-tolza.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
