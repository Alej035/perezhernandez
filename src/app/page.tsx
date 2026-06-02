"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [hovered, setHovered] = useState<"inmobiliaria" | "estudio" | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const leftW = hovered === "inmobiliaria" ? "62%" : hovered === "estudio" ? "38%" : "50%";
  const rightW = hovered === "estudio" ? "62%" : hovered === "inmobiliaria" ? "38%" : "50%";

  return (
    <main className="relative flex h-full w-full overflow-hidden" style={{ background: "#0d1117" }}>

      {/* ── LOGO centrado ── */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1"
        style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease 0.2s" }}
      >
        <span
          className="font-display text-lg tracking-[0.25em] text-white uppercase"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Pérez Hernández
        </span>
        <div style={{ width: 32, height: 1, background: "var(--gold)", opacity: 0.7 }} />
      </div>

      {/* ═══════════════════ PANEL IZQUIERDO — INMOBILIARIA ═══════════════════ */}
      <Link
        href="/inmobiliaria"
        className="relative flex flex-col justify-end overflow-hidden cursor-pointer group"
        style={{
          width: leftW,
          transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          flexShrink: 0,
        }}
        onMouseEnter={() => setHovered("inmobiliaria")}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85"
          alt="Propiedad premium"
          fill
          priority
          className="object-cover"
          style={{
            transform: hovered === "inmobiliaria" ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          sizes="50vw"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              hovered === "inmobiliaria"
                ? "linear-gradient(to top, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.4) 50%, rgba(13,17,23,0.15) 100%)"
                : "linear-gradient(to top, rgba(13,17,23,0.88) 0%, rgba(13,17,23,0.5) 60%, rgba(13,17,23,0.25) 100%)",
            transition: "background 0.6s ease",
          }}
        />

        {/* Right border glow */}
        <div
          className="absolute right-0 inset-y-0 z-20 w-px"
          style={{
            background:
              hovered === "inmobiliaria"
                ? "linear-gradient(to bottom, transparent, var(--gold), transparent)"
                : "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)",
            transition: "background 0.5s ease",
          }}
        />

        {/* Content */}
        <div className="relative z-20 p-10 md:p-16 pb-14 md:pb-20 flex flex-col gap-6">
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase mb-4 font-medium"
              style={{ color: "var(--gold)", opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease 0.3s" }}
            >
              Pérez Hernández
            </p>
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-white"
              style={{
                fontFamily: "var(--font-playfair)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "none" : "translateY(16px)",
                transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
              }}
            >
              Negocios
              <br />
              <em>Inmobiliarios</em>
            </h1>
          </div>

          {/* Description — visible on hover */}
          <p
            className="text-sm font-light leading-relaxed max-w-xs"
            style={{
              color: "rgba(255,255,255,0.65)",
              opacity: hovered === "inmobiliaria" ? 1 : 0,
              transform: hovered === "inmobiliaria" ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            Propiedades premium en Rosario y la región. Ventas, alquileres y tasaciones con asesoramiento integral.
          </p>

          {/* CTA Button */}
          <div
            style={{
              opacity: hovered === "inmobiliaria" ? 1 : 0.7,
              transform: hovered === "inmobiliaria" ? "translateY(0)" : "translateY(4px)",
              transition: "opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s",
            }}
          >
            <span className="btn-gold">
              <span>Explorar propiedades</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>

      {/* ── DIVISOR CENTRAL ── */}
      <div className="relative z-30 flex-shrink-0" style={{ width: 1 }}>
        {/* Monograma central */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease 0.6s",
          }}
        >
          <div
            className="glass w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              border: "1px solid rgba(201,168,76,0.4)",
              boxShadow: "0 0 24px rgba(201,168,76,0.15)",
            }}
          >
            <span
              className="text-xs font-medium tracking-[0.15em]"
              style={{ color: "var(--gold)" }}
            >
              PH
            </span>
          </div>
        </div>
      </div>

      {/* ═══════════════════ PANEL DERECHO — ESTUDIO JURÍDICO ═══════════════════ */}
      <Link
        href="/estudio"
        className="relative flex flex-col justify-end overflow-hidden cursor-pointer"
        style={{
          width: rightW,
          transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          flexShrink: 0,
        }}
        onMouseEnter={() => setHovered("estudio")}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=85"
          alt="Estudio jurídico"
          fill
          priority
          className="object-cover"
          style={{
            transform: hovered === "estudio" ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            objectPosition: "center top",
          }}
          sizes="50vw"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              hovered === "estudio"
                ? "linear-gradient(to top, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.4) 50%, rgba(13,17,23,0.15) 100%)"
                : "linear-gradient(to top, rgba(13,17,23,0.88) 0%, rgba(13,17,23,0.5) 60%, rgba(13,17,23,0.25) 100%)",
            transition: "background 0.6s ease",
          }}
        />

        {/* Left border glow */}
        <div
          className="absolute left-0 inset-y-0 z-20 w-px"
          style={{
            background:
              hovered === "estudio"
                ? "linear-gradient(to bottom, transparent, var(--gold), transparent)"
                : "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)",
            transition: "background 0.5s ease",
          }}
        />

        {/* Content */}
        <div className="relative z-20 p-10 md:p-16 pb-14 md:pb-20 flex flex-col gap-6">
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase mb-4 font-medium"
              style={{ color: "var(--gold)", opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease 0.3s" }}
            >
              Pérez Hernández
            </p>
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-white"
              style={{
                fontFamily: "var(--font-playfair)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "none" : "translateY(16px)",
                transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
              }}
            >
              Estudio
              <br />
              <em>Jurídico</em>
            </h1>
          </div>

          <p
            className="text-sm font-light leading-relaxed max-w-xs"
            style={{
              color: "rgba(255,255,255,0.65)",
              opacity: hovered === "estudio" ? 1 : 0,
              transform: hovered === "estudio" ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            Asesoramiento jurídico en derecho laboral e inmobiliario. Experiencia, precisión y resultados.
          </p>

          <div
            style={{
              opacity: hovered === "estudio" ? 1 : 0.7,
              transform: hovered === "estudio" ? "translateY(0)" : "translateY(4px)",
              transition: "opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s",
            }}
          >
            <span className="btn-gold">
              <span>Consultar servicios</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>

      {/* ── HINT inferior ── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        style={{
          opacity: hovered ? 0 : mounted ? 0.5 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
          Seleccioná una sección
        </span>
        <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)" }} />
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <style>{`
        @media (max-width: 768px) {
          main { flex-direction: column !important; }
          main > a:first-of-type { width: 100% !important; height: 50% !important; }
          main > a:last-of-type  { width: 100% !important; height: 50% !important; }
          main > div[style*="width: 1"] { width: 100% !important; height: 1px !important; }
        }
      `}</style>
    </main>
  );
}
