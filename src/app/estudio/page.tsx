"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone, Menu, X, ArrowRight, ChevronDown, MapPin, Mail, Clock, Check } from "lucide-react";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

const WA = "https://wa.me/5493417980000?text=Hola%2C%20quiero%20una%20consulta%20sin%20cargo.";
const TEL = "tel:+543412406596";

function Navbar() {
  const [open, setOpen] = useState(false);
  const links: [string, string][] = [["Servicios", "#servicios"], ["Por qué elegirnos", "#por-que"], ["Contacto", "#contacto"]];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Pérez Hernández" className="w-9 h-9 rounded-lg object-cover" fetchPriority="high" />
          <div>
            <p className="text-white font-bold text-sm leading-none">Pérez Hernández</p>
            <p className="text-[#c9a227] text-[10px] tracking-widest uppercase">Estudio Jurídico</p>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {links.map(([l, h]) => <a key={l} href={h} className="text-white/60 hover:text-white text-sm transition-colors">{l}</a>)}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/inmobiliaria"
            className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs font-medium border border-white/15 hover:border-white/30 px-3 py-1.5 rounded-lg transition-colors">
            Ir a Inmobiliaria →
          </Link>
          <a href={TEL} className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors">
            <Phone className="w-3.5 h-3.5" /> (341) 240-6596
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] text-sm font-bold px-4 py-2 rounded-lg transition-colors">
            <MessageCircle className="w-3.5 h-3.5" /> Consulta gratis
          </a>
        </div>
        <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a1628] border-t border-white/10 px-5 py-4 flex flex-col gap-4">
          {links.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)} className="text-white/80 text-sm">{l}</a>)}
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#c9a227] text-[#0a1628] text-sm font-bold px-4 py-3 rounded-xl mt-1">
            <MessageCircle className="w-4 h-4" /> Consulta sin cargo
          </a>
        </div>
      )}
    </nav>
  );
}

export default function EstudioPage() {
  const [hoveredService, setHoveredService] = useState<"laboral" | "inmobiliario" | null>(null);

  return (
    <>
    <div className="slide-from-right bg-[#0a1628] font-sans">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background sólido */}
        <div className="absolute inset-0 bg-[#0a1628]" />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

            {/* ── FOTO SOCIO ── */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4 w-full lg:w-auto">
              <div
                className="relative overflow-hidden rounded-2xl w-[200px] h-[270px] lg:w-[260px] lg:h-[350px]"
                style={{ boxShadow: "0 24px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,168,39,0.25)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=600&auto=format&fit=crop"
                  alt="S. Pérez Hernández"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "blur(6px)", transform: "scale(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/75 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c9a227]" />
                {/* Nombre sobre la foto */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-base leading-none">S. Pérez Hernández</p>
                  <p className="text-[#c9a227] text-[10px] tracking-widest uppercase mt-1.5">Abogado · Fundador</p>
                </div>
              </div>
            </div>

            {/* ── TEXTO PRINCIPAL ── */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-[0.4em] mb-6">
                Estudio Jurídico · Rosario
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] mb-6">
                Derecho laboral<br />
                e inmobiliario<br />
                <span className="text-[#c9a227]">con respaldo real.</span>
              </h1>

              <p className="text-white/55 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
                Somos un estudio jurídico de confianza especializado en derecho laboral e inmobiliario. Primera consulta sin cargo.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-8 py-4 rounded-xl transition-colors text-sm shadow-lg shadow-[#c9a227]/20">
                  <MessageCircle className="w-4 h-4" /> Consulta sin cargo
                </a>
                <a href="#servicios"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-7 py-4 rounded-xl transition-colors text-sm">
                  Ver servicios <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        <a href="#servicios" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/25 hover:text-white/50 transition-colors">
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </section>

      {/* ── 2. SERVICIOS — dos paneles grandes ──────────────────────────────── */}
      <section id="servicios" className="flex flex-col md:flex-row" style={{ minHeight: "80vh" }}>

        {/* LABORAL */}
        <div
          className="relative flex flex-col justify-end overflow-hidden cursor-pointer flex-1"
          style={{
            minHeight: 500,
            transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1)",
            flex: hoveredService === "laboral" ? "1.35 1 0%" : hoveredService === "inmobiliario" ? "0.65 1 0%" : "1 1 0%",
          }}
          onMouseEnter={() => setHoveredService("laboral")}
          onMouseLeave={() => setHoveredService(null)}
        >
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1400&auto=format&fit=crop"
            alt="Derecho Laboral"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: hoveredService === "laboral" ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: hoveredService === "laboral"
                ? "linear-gradient(to top, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.6) 50%, rgba(10,22,40,0.2) 100%)"
                : "linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.5) 55%, rgba(10,22,40,0.15) 100%)",
              transition: "background 0.5s ease",
            }}
          />
          {/* Gold top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a227]" style={{ opacity: hoveredService === "laboral" ? 1 : 0, transition: "opacity 0.3s ease" }} />

          <div className="relative z-10 p-8 md:p-12 pb-12 md:pb-16">
            <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-[0.3em] mb-4">01</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Derecho<br />Laboral
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm"
              style={{ opacity: hoveredService === "laboral" ? 1 : 0.7, transition: "opacity 0.3s ease" }}>
              Defendemos tus derechos frente a cualquier empleador. Si no ganamos tu caso, no cobramos honorarios.
            </p>

            <div
              className="space-y-2 mb-6"
              style={{
                opacity: hoveredService === "laboral" ? 1 : 0,
                transform: hoveredService === "laboral" ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              {["Despidos con o sin causa", "Indemnizaciones", "Trabajo en negro", "Accidentes laborales"].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#c9a227] flex-shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
              style={{ opacity: hoveredService === "laboral" ? 1 : 0.8, transition: "opacity 0.3s ease" }}>
              <MessageCircle className="w-4 h-4" /> Consultar
            </a>
          </div>
        </div>

        {/* Divisor */}
        <div className="w-px bg-[#c9a227]/20 hidden md:block flex-shrink-0" />
        <div className="h-px bg-[#c9a227]/20 md:hidden flex-shrink-0" />

        {/* INMOBILIARIO */}
        <div
          className="relative flex flex-col justify-end overflow-hidden cursor-pointer flex-1"
          style={{
            minHeight: 500,
            transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1)",
            flex: hoveredService === "inmobiliario" ? "1.35 1 0%" : hoveredService === "laboral" ? "0.65 1 0%" : "1 1 0%",
          }}
          onMouseEnter={() => setHoveredService("inmobiliario")}
          onMouseLeave={() => setHoveredService(null)}
        >
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop"
            alt="Derecho Inmobiliario"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: hoveredService === "inmobiliario" ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: hoveredService === "inmobiliario"
                ? "linear-gradient(to top, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.6) 50%, rgba(10,22,40,0.2) 100%)"
                : "linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.5) 55%, rgba(10,22,40,0.15) 100%)",
              transition: "background 0.5s ease",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a227]" style={{ opacity: hoveredService === "inmobiliario" ? 1 : 0, transition: "opacity 0.3s ease" }} />

          <div className="relative z-10 p-8 md:p-12 pb-12 md:pb-16">
            <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-[0.3em] mb-4">02</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Derecho<br />Inmobiliario
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm"
              style={{ opacity: hoveredService === "inmobiliario" ? 1 : 0.7, transition: "opacity 0.3s ease" }}>
              Asesoramiento legal en todas las operaciones inmobiliarias. Coordinado directamente con nuestra inmobiliaria.
            </p>

            <div
              className="space-y-2 mb-6"
              style={{
                opacity: hoveredService === "inmobiliario" ? 1 : 0,
                transform: hoveredService === "inmobiliario" ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              {["Compraventa de propiedades", "Contratos de alquiler", "Escrituraciones", "Regularización dominial"].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#c9a227] flex-shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
              style={{ opacity: hoveredService === "inmobiliario" ? 1 : 0.8, transition: "opacity 0.3s ease" }}>
              <MessageCircle className="w-4 h-4" /> Consultar
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. POR QUÉ ELEGIRNOS ─────────────────────────────────────────────── */}
      <section id="por-que" className="py-24 bg-[#0d1e35]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-4">Por qué elegirnos</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Un estudio que trabaja<br />
                <span className="text-[#c9a227]">a tu lado.</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                Somos un estudio jurídico e inmobiliaria de confianza. Combinamos experiencia legal con conocimiento profundo del mercado inmobiliario de Rosario.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { n: "01", title: "Sin ganancia, sin honorarios", desc: "En casos laborales, solo cobramos si ganamos. Sin anticipo, sin riesgo para vos." },
                { n: "02", title: "Legal e inmobiliario en un lugar", desc: "La única firma en Rosario que combina estudio jurídico y operaciones inmobiliarias propias." },
                { n: "03", title: "Atención personalizada", desc: "Cada caso es atendido directamente por los socios. Sin intermediarios, sin delegaciones." },
                { n: "04", title: "Primera consulta gratuita", desc: "Evaluamos tu situación sin cargo. Te explicamos las opciones con claridad antes de decidir." },
              ].map(({ n, title, desc }) => (
                <div key={n} className="flex gap-5 p-5 bg-[#0a1628] border border-white/10 rounded-2xl hover:border-[#c9a227]/30 transition-all group">
                  <span className="text-[#c9a227]/40 font-bold text-sm flex-shrink-0 mt-0.5 group-hover:text-[#c9a227] transition-colors">{n}</span>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{title}</p>
                    <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CONTACTO ──────────────────────────────────────────────────────── */}
      <section id="contacto" className="py-24 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-4">Contacto</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Hablemos<br />
                <span className="text-[#c9a227]">sin compromiso.</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-10">
                La primera consulta es sin cargo. Evaluamos tu situación y te explicamos las opciones con claridad antes de tomar cualquier decisión.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: MapPin, value: "Catamarca 3041, Rosario" },
                  { icon: Phone, value: "(341) 240-6596" },
                  { icon: Mail, value: "inmobiliaria@perezhernandez.com.ar" },
                  { icon: Clock, value: "Lunes a Viernes · 9:00 a 18:00 hs" },
                ].map(({ icon: Icon, value }) => (
                  <div key={value} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#c9a227]" />
                    </div>
                    <span className="text-white/70 text-sm">{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-6 py-3.5 rounded-xl text-sm transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href={TEL}
                  className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3.5 rounded-xl text-sm transition-colors">
                  <Phone className="w-4 h-4" /> Llamar
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-[#0d1e35] border border-white/10 rounded-2xl p-7 space-y-4">
              <div className="mb-2">
                <h3 className="font-bold text-white text-lg">Envianos tu consulta</h3>
                <p className="text-white/40 text-xs mt-1">Te respondemos el siguiente día hábil.</p>
              </div>
              {[
                { placeholder: "Nombre completo", type: "text" },
                { placeholder: "Email", type: "email" },
                { placeholder: "Teléfono", type: "tel" },
              ].map(({ placeholder, type }) => (
                <input key={placeholder} type={type} placeholder={placeholder}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227]/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors" />
              ))}
              <select className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227]/50 rounded-xl px-4 py-3 text-sm text-white/60 outline-none transition-colors appearance-none">
                <option value="" disabled selected>Área de consulta</option>
                <option value="laboral">Derecho Laboral</option>
                <option value="inmobiliario">Derecho Inmobiliario</option>
                <option value="otro">Otra consulta</option>
              </select>
              <textarea placeholder="Contanos brevemente tu situación..." rows={4}
                className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227]/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors resize-none" />
              <button className="w-full bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4" /> Enviar consulta
              </button>
              <p className="text-white/20 text-xs text-center">Primera consulta sin cargo · Sin compromiso</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#060f1e] py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="PH" className="w-6 h-6 rounded object-cover" />
            <span className="text-white/60 text-sm">Pérez Hernández · Estudio Jurídico © {new Date().getFullYear()}</span>
          </div>
          <p className="text-white/30 text-xs">Catamarca 3041, Rosario · (341) 240-6596</p>
          <Link href="/" className="text-white/20 hover:text-white/50 text-xs transition-colors">← Volver al inicio</Link>
        </div>
      </footer>
    </div>
    <WhatsAppFAB />
    </>
  );
}
