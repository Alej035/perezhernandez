"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const panels = [
  {
    id: "inmo",
    href: "/inmobiliaria",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85",
    label: "Inmobiliaria",
    title: "Encontrá la propiedad ideal para vos.",
    sub: "Compra, venta y alquiler con asesoramiento profesional.",
    cta: "Ver propiedades",
  },
  {
    id: "estudio",
    href: "/estudio",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=85",
    label: "Estudio Jurídico",
    title: "Asesoramiento legal claro y confiable.",
    sub: "Acompañamiento profesional para cada decisión.",
    cta: "Solicitar asesoramiento",
  },
];

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <main className="flex h-screen w-full flex-col sm:flex-row overflow-hidden bg-[#0a1628]">
      {panels.map((p, i) => {
        const isHovered = hovered === p.id;
        const isOtherHovered = hovered !== null && hovered !== p.id;

        return (
          <Link
            key={p.id}
            href={p.href}
            className="relative flex flex-col justify-end overflow-hidden"
            style={{
              flex: isHovered ? "1.25 1 0%" : isOtherHovered ? "0.75 1 0%" : "1 1 0%",
              height: "50%",
              transition: "flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Background */}
            <img
              src={p.img}
              alt={p.label}
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                transform: isHovered ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />

            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: isHovered
                  ? "linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.45) 55%, rgba(10,22,40,0.15) 100%)"
                  : "linear-gradient(to top, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.4) 55%, rgba(10,22,40,0.1) 100%)",
                transition: "background 0.5s ease",
              }}
            />

            {/* Divisor vertical (solo desktop) */}
            {i === 0 && (
              <div
                className="absolute top-0 right-0 bottom-0 w-px hidden sm:block"
                style={{ background: "rgba(201,168,39,0.25)" }}
              />
            )}

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-12 md:p-16 pb-10 sm:pb-14">
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em] mb-4"
                style={{ color: "#c9a227" }}
              >
                {p.label}
              </p>

              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug mb-3"
                style={{ maxWidth: 420 }}
              >
                {p.title}
              </h2>

              <p
                className="text-sm sm:text-base text-white/60 mb-7 font-light"
                style={{ maxWidth: 360 }}
              >
                {p.sub}
              </p>

              <span
                className="inline-flex items-center gap-2 bg-[#c9a227] text-[#0a1628] text-sm font-bold px-6 py-3 rounded-xl"
                style={{
                  transition: "gap 0.25s ease, padding-right 0.25s ease",
                  ...(isHovered ? { gap: "10px" } : {}),
                }}
              >
                {p.cta}
                <ArrowRight
                  className="w-4 h-4"
                  style={{
                    transform: isHovered ? "translateX(2px)" : "translateX(0)",
                    transition: "transform 0.25s ease",
                  }}
                />
              </span>
            </div>
          </Link>
        );
      })}

      {/* Logo + nombre centrado arriba */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex items-center gap-3">
        <img src="/logo.png" alt="logo" className="w-10 h-10 rounded-xl object-cover shadow-lg flex-shrink-0" />
        <div>
          <p className="text-white font-bold text-sm leading-none tracking-wide">Pérez Hernández</p>
          <p className="text-[#c9a227] text-[10px] tracking-[0.25em] uppercase mt-0.5">Inmobiliaria & Estudio Jurídico</p>
        </div>
      </div>

      {/* Mobile: divisor horizontal */}
      <div
        className="sm:hidden w-full flex-shrink-0"
        style={{ height: 1, background: "rgba(201,168,39,0.3)", order: 1 }}
      />

      <style>{`
        @media (min-width: 640px) {
          main > a { height: 100% !important; }
        }
      `}</style>
    </main>
  );
}
