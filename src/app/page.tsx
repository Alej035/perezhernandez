"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Scale, ArrowRight, MessageCircle } from "lucide-react";

const WA = "https://wa.me/5493417980000";

export default function Home() {
  const [hovered, setHovered] = useState<"inmo" | "estudio" | null>(null);

  const leftW =
    hovered === "inmo" ? "62%" : hovered === "estudio" ? "38%" : "50%";
  const rightW =
    hovered === "estudio" ? "62%" : hovered === "inmo" ? "38%" : "50%";

  return (
    <main className="relative flex h-full w-full overflow-hidden bg-[#0a1628]">

      {/* ─── PANEL INMOBILIARIA ─── */}
      <div
        className="relative flex flex-col justify-end overflow-hidden cursor-pointer group"
        style={{ width: leftW, transition: "width 0.55s cubic-bezier(0.4,0,0.2,1)", flexShrink: 0 }}
        onMouseEnter={() => setHovered("inmo")}
        onMouseLeave={() => setHovered(null)}
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80"
          alt="Inmobiliaria"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered === "inmo" ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-[#0a1628]/20" />

        {/* Gold top bar on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-1 bg-[#c9a227] transition-opacity duration-300"
          style={{ opacity: hovered === "inmo" ? 1 : 0 }}
        />

        <div className="relative z-10 p-8 md:p-14 pb-12 md:pb-16 flex flex-col gap-5">
          {/* Icon */}
          <div className="w-11 h-11 rounded-xl bg-[#c9a227]/10 border border-[#c9a227]/30 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-[#c9a227]" />
          </div>

          <div>
            <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-2">
              Pérez Hernández
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Negocios<br />Inmobiliarios
            </h1>
          </div>

          <p
            className="text-white/60 text-sm leading-relaxed max-w-xs transition-all duration-300"
            style={{
              opacity: hovered === "inmo" ? 1 : 0,
              transform: hovered === "inmo" ? "translateY(0)" : "translateY(8px)",
            }}
          >
            Ventas, alquileres y tasaciones en Rosario y la región. Integrado con Tokko para mostrar propiedades en tiempo real.
          </p>

          <Link
            href="/inmobiliaria"
            className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 w-fit"
            style={{
              opacity: hovered === "inmo" ? 1 : 0.7,
              transform: hovered === "inmo" ? "translateY(0)" : "translateY(4px)",
            }}
          >
            Explorar propiedades <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ─── DIVISOR ─── */}
      <div className="relative z-20 flex-shrink-0 flex items-center justify-center" style={{ width: 2, background: "rgba(201,168,39,0.2)" }}>
        <div className="w-10 h-10 rounded-full bg-[#0a1628] border border-[#c9a227]/40 flex items-center justify-center shadow-lg">
          <span className="text-[#c9a227] text-[9px] font-bold tracking-widest">PH</span>
        </div>
      </div>

      {/* ─── PANEL ESTUDIO ─── */}
      <div
        className="relative flex flex-col justify-end overflow-hidden cursor-pointer group"
        style={{ width: rightW, transition: "width 0.55s cubic-bezier(0.4,0,0.2,1)", flexShrink: 0 }}
        onMouseEnter={() => setHovered("estudio")}
        onMouseLeave={() => setHovered(null)}
      >
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&q=80"
          alt="Estudio Jurídico"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered === "estudio" ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-[#0a1628]/20" />

        <div
          className="absolute top-0 left-0 right-0 h-1 bg-[#c9a227] transition-opacity duration-300"
          style={{ opacity: hovered === "estudio" ? 1 : 0 }}
        />

        <div className="relative z-10 p-8 md:p-14 pb-12 md:pb-16 flex flex-col gap-5">
          <div className="w-11 h-11 rounded-xl bg-[#c9a227]/10 border border-[#c9a227]/30 flex items-center justify-center">
            <Scale className="w-5 h-5 text-[#c9a227]" />
          </div>

          <div>
            <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-2">
              Pérez Hernández
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Estudio<br />Jurídico
            </h1>
          </div>

          <p
            className="text-white/60 text-sm leading-relaxed max-w-xs transition-all duration-300"
            style={{
              opacity: hovered === "estudio" ? 1 : 0,
              transform: hovered === "estudio" ? "translateY(0)" : "translateY(8px)",
            }}
          >
            Asesoramiento en derecho laboral e inmobiliario. Más de 20 años acompañando a personas y empresas en Rosario.
          </p>

          <Link
            href="/estudio"
            className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 w-fit"
            style={{
              opacity: hovered === "estudio" ? 1 : 0.7,
              transform: hovered === "estudio" ? "translateY(0)" : "translateY(4px)",
            }}
          >
            Consultar servicios <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ─── LOGO TOP CENTER ─── */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-center pointer-events-none">
        <p className="text-white/80 text-xs font-semibold tracking-[0.3em] uppercase">Pérez Hernández</p>
        <div className="h-px w-12 bg-[#c9a227]/60 mx-auto mt-1" />
      </div>

      {/* ─── MOBILE: stack vertical ─── */}
      <style>{`
        @media (max-width: 640px) {
          main { flex-direction: column !important; }
          main > div:first-child  { width: 100% !important; height: 50vh !important; }
          main > div:nth-child(2) { width: 100% !important; height: 2px !important; flex-direction: row !important; }
          main > div:last-child   { width: 100% !important; height: 50vh !important; }
        }
      `}</style>

      {/* ─── WhatsApp FAB mobile ─── */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-5 py-3 rounded-full shadow-xl transition-colors sm:hidden"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
    </main>
  );
}
