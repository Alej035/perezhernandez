"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState<"estudio" | "inmobiliaria" | null>(
    null
  );

  const estudioWidth =
    hovered === "estudio"
      ? "65%"
      : hovered === "inmobiliaria"
        ? "35%"
        : "50%";
  const inmobiliariaWidth =
    hovered === "inmobiliaria"
      ? "65%"
      : hovered === "estudio"
        ? "35%"
        : "50%";

  return (
    <main className="flex h-full w-full overflow-hidden">
      {/* Estudio Jurídico — izquierda */}
      <Link
        href="/estudio"
        className="relative flex flex-col items-center justify-center overflow-hidden cursor-pointer"
        style={{
          width: estudioWidth,
          backgroundColor: "#1a2744",
          transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseEnter={() => setHovered("estudio")}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Patrón sutil de fondo */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #c9a84c 0px,
              #c9a84c 1px,
              transparent 1px,
              transparent 60px
            )`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6 px-12 text-center">
          {/* Separador dorado */}
          <div
            className="w-12 h-px"
            style={{ backgroundColor: "#c9a84c" }}
          />

          <div>
            <p
              className="text-xs font-medium tracking-[0.3em] uppercase mb-3"
              style={{ color: "#c9a84c" }}
            >
              Pérez Hernández
            </p>
            <h1
              className="text-4xl font-light leading-tight"
              style={{
                color: "#ffffff",
                fontFamily: "Georgia, serif",
                letterSpacing: "0.02em",
              }}
            >
              Estudio
              <br />
              Jurídico
            </h1>
          </div>

          <div className="w-12 h-px" style={{ backgroundColor: "#c9a84c" }} />

          <p
            className="text-sm font-light leading-relaxed max-w-xs opacity-0 translate-y-2"
            style={{
              color: "#a0aec0",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              ...(hovered === "estudio"
                ? { opacity: 1, transform: "translateY(0)" }
                : {}),
            }}
          >
            Derecho laboral · Derecho inmobiliario
            <br />
            Asesoramiento integral
          </p>

          <div
            className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase"
            style={{ color: "#c9a84c" }}
          >
            <span>Ingresar</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>

      {/* Divisor vertical */}
      <div className="relative z-20 w-px flex-shrink-0" style={{ backgroundColor: "#c9a84c" }}>
        {/* Círculo central con logo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-xs font-bold tracking-widest"
          style={{
            backgroundColor: "#c9a84c",
            color: "#1a2744",
            fontSize: "9px",
            letterSpacing: "0.15em",
          }}
        >
          PH
        </div>
      </div>

      {/* Inmobiliaria — derecha */}
      <Link
        href="/inmobiliaria"
        className="relative flex flex-col items-center justify-center overflow-hidden cursor-pointer"
        style={{
          width: inmobiliariaWidth,
          backgroundColor: "#f8f5f0",
          transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseEnter={() => setHovered("inmobiliaria")}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Patrón sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, #1a2744 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6 px-12 text-center">
          <div
            className="w-12 h-px"
            style={{ backgroundColor: "#1a2744" }}
          />

          <div>
            <p
              className="text-xs font-medium tracking-[0.3em] uppercase mb-3"
              style={{ color: "#1a2744" }}
            >
              Pérez Hernández
            </p>
            <h1
              className="text-4xl font-light leading-tight"
              style={{
                color: "#1a2744",
                fontFamily: "Georgia, serif",
                letterSpacing: "0.02em",
              }}
            >
              Negocios
              <br />
              Inmobiliarios
            </h1>
          </div>

          <div className="w-12 h-px" style={{ backgroundColor: "#1a2744" }} />

          <p
            className="text-sm font-light leading-relaxed max-w-xs"
            style={{
              color: "#6b7280",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              opacity: hovered === "inmobiliaria" ? 1 : 0,
              transform:
                hovered === "inmobiliaria" ? "translateY(0)" : "translateY(8px)",
            }}
          >
            Ventas · Alquileres · Tasaciones
            <br />
            Rosario y zona
          </p>

          <div
            className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase"
            style={{ color: "#1a2744" }}
          >
            <span>Ingresar</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </main>
  );
}
