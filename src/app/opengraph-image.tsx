import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pérez & Hernández — Estudio Jurídico & Inmobiliaria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a1628",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Subtle radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201,168,39,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Gold top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#c9a227",
          }}
        />
        {/* Gold bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#c9a227",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          {/* Logo image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://perezhernandez.vercel.app/logo.png"
            width={100}
            height={100}
            style={{ borderRadius: 16, marginBottom: 32 }}
            alt="logo"
          />

          {/* Gold divider */}
          <div
            style={{
              width: 60,
              height: 2,
              background: "#c9a227",
              marginBottom: 28,
            }}
          />

          {/* Main title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: 16,
            }}
          >
            Pérez & Hernández
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "#c9a227",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Estudio Jurídico & Inmobiliaria
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: 60,
              height: 2,
              background: "#c9a227",
              marginBottom: 24,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 20,
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.03em",
            }}
          >
            Soluciones legales e inmobiliarias con respaldo real.
          </div>

          {/* Location */}
          <div
            style={{
              marginTop: 28,
              fontSize: 14,
              fontWeight: 500,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Rosario · Argentina
          </div>
        </div>
      </div>
    ),
    size
  );
}
