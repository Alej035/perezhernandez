"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MessageCircle, Phone, Scale, Briefcase, FileText, ShieldCheck,
  ChevronDown, Menu, X, Star, ArrowRight, CheckCircle, Home,
  MapPin, Mail, Clock,
} from "lucide-react";
import { ImageAccordion } from "@/components/ImageAccordion";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

const WA = "https://wa.me/5493417980000?text=Hola%2C%20quiero%20una%20consulta%20sin%20cargo.";
const TEL = "tel:+543412406596";

const services = [
  {
    id: 1, title: "Derecho Laboral", icon: Scale,
    subItems: ["Despidos con o sin causa", "Indemnizaciones", "Trabajo en negro", "Suspensiones y licencias"],
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1974&auto=format&fit=crop",
    detail: "Defendemos tus derechos laborales frente a cualquier empleador. Trabajamos con honorarios a éxito: solo cobramos si ganamos.",
    casos: ["Despido sin causa o con causa falsa", "Trabajo en negro sin registrar", "Accidentes laborales y ART"],
  },
  {
    id: 2, title: "Derecho Inmobiliario", icon: Home,
    subItems: ["Compraventa de propiedades", "Contratos de alquiler", "Escrituraciones", "Regularización dominial"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    detail: "Acompañamiento legal en cada operación inmobiliaria, desde el boleto hasta la escritura. Coordinamos directamente con nuestra inmobiliaria.",
    casos: ["Compraventa con documentación compleja", "Contratos de alquiler", "Regularización de propiedades"],
  },
  {
    id: 3, title: "Contratos", icon: FileText,
    subItems: ["Contratos civiles y comerciales", "Acuerdos societarios", "Revisión y redacción", "Asesoramiento preventivo"],
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    detail: "Redactamos y revisamos contratos con enfoque preventivo. Identificamos riesgos antes de que se conviertan en problemas.",
    casos: ["Contratos civiles y comerciales", "Acuerdos entre socios", "Revisión antes de firmar"],
  },
  {
    id: 4, title: "Derecho Societario", icon: Briefcase,
    subItems: ["Constitución de sociedades", "Modificaciones estatutarias", "Asesoramiento corporativo", "Fusiones y adquisiciones"],
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    detail: "Asesoramiento completo para empresas en todas sus etapas: desde la constitución hasta la expansión o venta del negocio.",
    casos: ["Constitución de S.R.L. y S.A.", "Conflictos entre socios", "Fusiones y reestructuraciones"],
  },
];

const team = [
  { name: "Dr. Pérez", role: "Socio fundador · Derecho Laboral", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop", bio: "Especialista en derecho laboral e indemnizaciones." },
  { name: "Dr. Hernández", role: "Socio · Derecho Inmobiliario", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop", bio: "Especialista en contratos, escrituraciones y regularización de propiedades." },
];

const testimonials = [
  { name: "Martín R.", cargo: "Empresario", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", text: "El estudio resolvió mi situación laboral con rapidez y profesionalismo. Consiguieron mucho más de lo que esperaba.", case: "Derecho Laboral", rating: 5 },
  { name: "Lucía M.", cargo: "Profesional independiente", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", text: "Compramos y escrituramos nuestro departamento sin ningún inconveniente. Atención clara y tranquilizadora en todo momento.", case: "Derecho Inmobiliario", rating: 5 },
  { name: "Diego F.", cargo: "Director de empresa", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop", text: "Llevan años asesorando a mi empresa. Su conocimiento del derecho laboral nos evitó problemas muy costosos.", case: "Asesoramiento empresarial", rating: 5 },
];

// ─── Expandable Service Card ─────────────────────────────────────────────────
function ServiceCard({ s, isOpen, onToggle }: { s: typeof services[0]; isOpen: boolean; onToggle: () => void }) {
  const Icon = s.icon;
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${isOpen ? "border-[#c9a227]/50 bg-[#0d1e35]" : "border-white/10 bg-[#0a1628] hover:border-[#c9a227]/30"}`}
      onClick={onToggle}
    >
      <div className="p-6 flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? "bg-[#c9a227]" : "bg-[#c9a227]/10"}`}>
            <Icon className={`w-5 h-5 ${isOpen ? "text-[#0a1628]" : "text-[#c9a227]"}`} />
          </div>
          <div>
            <h3 className="font-bold text-white text-base mb-2">{s.title}</h3>
            <div className="flex flex-wrap gap-2">
              {s.subItems.map(item => (
                <span key={item} className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded-full">{item}</span>
              ))}
            </div>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-[#c9a227] flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div className="px-6 pb-6 border-t border-white/10 pt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{s.detail}</p>
              <div className="space-y-2">
                <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-wide mb-3">Casos frecuentes</p>
                {s.casos.map(c => (
                  <div key={c} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c9a227] flex-shrink-0 mt-0.5" />
                    <span className="text-white/60 text-sm">{c}</span>
                  </div>
                ))}
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                className="mt-6 inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                <MessageCircle className="w-4 h-4" /> Consultar
              </a>
            </div>
            <div className="relative h-44 md:h-auto rounded-xl overflow-hidden">
              <img src={s.imageUrl} alt={s.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const links: [string, string][] = [["Servicios", "#servicios"], ["Equipo", "#equipo"], ["Testimonios", "#testimonios"], ["Contacto", "#contacto"]];
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

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function EstudioPage() {
  const [openService, setOpenService] = useState<number | null>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="slide-from-right bg-[#0a1628] font-sans">
      <Navbar />

      {/* 1 ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img ref={heroImgRef}
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
            alt="" className="w-full h-[120%] object-cover object-center opacity-20 will-change-transform" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]/60" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
            <div className="w-full lg:w-[45%] text-center lg:text-left">
              <div className="inline-flex items-center gap-2 border border-[#c9a227]/40 bg-[#c9a227]/10 text-[#c9a227] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5" /> Si no ganamos, no cobramos
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Tu caso merece<br />
                <span className="text-[#c9a227]">un especialista.</span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-white/60 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Asesoramiento jurídico en derecho laboral e inmobiliario. Primera consulta sin cargo.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-8 py-4 rounded-xl transition-colors text-sm shadow-lg shadow-[#c9a227]/20">
                  <MessageCircle className="w-4 h-4" /> Consulta sin cargo
                </a>
                <a href={TEL}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 border border-white/20 hover:border-white/40 text-white/80 hover:text-white px-7 py-4 rounded-xl transition-colors text-sm">
                  <Phone className="w-4 h-4" /> (341) 240-6596
                </a>
              </div>
              <p className="mt-4 text-xs text-white/30 text-center lg:text-left">
                Lunes a viernes · 9 a 18 hs · Catamarca 3041, Rosario
              </p>
            </div>

            <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
              <ImageAccordion items={services.map(s => ({ id: s.id, title: s.title, imageUrl: s.imageUrl, subItems: s.subItems }))} />
            </div>
          </div>
        </div>

        <a href="#servicios" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors">
          <span className="text-xs">Ver más</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </section>

      {/* 2 ── SERVICIOS ────────────────────────────────────────────────────── */}
      <section id="servicios" className="py-24 bg-[#0d1e35]">
        <div className="max-w-4xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Áreas de práctica</p>
          <h2 className="text-3xl font-bold text-white text-center mb-3">¿En qué te podemos ayudar?</h2>
          <p className="text-white/50 text-center mb-10 text-sm">Hacé click para ver más detalles de cada área.</p>
          <div className="space-y-3">
            {services.map(s => (
              <ServiceCard key={s.id} s={s}
                isOpen={openService === s.id}
                onToggle={() => setOpenService(openService === s.id ? null : s.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* 3 ── POR QUÉ ELEGIRNOS ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Por qué elegirnos</p>
          <h2 className="text-3xl font-bold text-white text-center mb-16">Lo que nos diferencia</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Solo cobramos si ganamos",
                desc: "En casos laborales trabajamos con honorarios a éxito. Si no obtenemos resultado, no cobramos honorarios. Sin anticipo, sin riesgo para vos.",
              },
              {
                icon: Home,
                title: "Derecho legal e inmobiliario en un mismo lugar",
                desc: "Somos la única firma en Rosario que combina un estudio jurídico especializado con una inmobiliaria propia. Coordinamos ambas partes sin intermediarios.",
              },
              {
                icon: ArrowRight,
                title: "Respuesta en menos de 24 horas",
                desc: "Cada consulta es respondida el siguiente día hábil. Te explicamos las opciones con claridad, sin tecnicismos, para que puedas decidir con información.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-4 p-8 bg-[#0d1e35] border border-white/10 rounded-2xl hover:border-[#c9a227]/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#c9a227]/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#c9a227]" />
                </div>
                <h3 className="font-bold text-white text-base leading-snug">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 ── EQUIPO ───────────────────────────────────────────────────────── */}
      <section id="equipo" className="py-24 bg-[#0d1e35]">
        <div className="max-w-3xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">El equipo</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quiénes somos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map(({ name, role, img, bio }) => (
              <div key={name} className="group bg-[#0a1628] border border-white/10 hover:border-[#c9a227]/30 rounded-2xl overflow-hidden transition-all hover:-translate-y-1">
                <div className="relative h-52 overflow-hidden">
                  <img src={img} alt={name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white">{name}</h3>
                  <p className="text-[#c9a227] text-xs font-medium mt-0.5 mb-2">{role}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── TESTIMONIOS ──────────────────────────────────────────────────── */}
      <section id="testimonios" className="py-24 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Testimonios</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, cargo, img, text, case: c, rating }) => (
              <div key={name} className="bg-[#0d1e35] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c9a227] text-[#c9a227]" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm leading-none">{name}</p>
                    <p className="text-white/40 text-xs mt-0.5">{cargo}</p>
                    <p className="text-[#c9a227] text-xs mt-0.5">{c}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── CONTACTO ─────────────────────────────────────────────────────── */}
      <section id="contacto" className="py-24 bg-[#0d1e35]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left: info + CTA */}
            <div>
              <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-3">Contacto</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                ¿Tenés una consulta?<br />
                <span className="text-[#c9a227]">Hablemos.</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                La primera consulta es sin cargo. Evaluamos tu caso y te explicamos las opciones antes de tomar cualquier decisión.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: MapPin, value: "Catamarca 3041, Rosario" },
                  { icon: Phone, value: "(341) 240-6596" },
                  { icon: Mail, value: "inmobiliaria@perezhernandez.com.ar" },
                  { icon: Clock, value: "Lunes a Viernes · 9:00 a 18:00 hs" },
                ].map(({ icon: Icon, value }) => (
                  <div key={value} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                    <span className="text-white/70 text-sm">{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-6 py-3.5 rounded-xl text-sm transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href={TEL}
                  className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3.5 rounded-xl text-sm transition-colors">
                  <Phone className="w-4 h-4" /> Llamar ahora
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-[#0a1628] border border-white/10 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-white mb-1">Envianos tu consulta</h3>
              <p className="text-white/40 text-xs mb-4">Te respondemos en menos de 24 horas hábiles.</p>
              {[
                { placeholder: "Tu nombre completo", type: "text" },
                { placeholder: "Tu email", type: "email" },
                { placeholder: "Tu teléfono", type: "tel" },
              ].map(({ placeholder, type }) => (
                <input key={placeholder} type={type} placeholder={placeholder}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227]/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors" />
              ))}
              <textarea placeholder="Contanos brevemente tu situación..." rows={4}
                className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227]/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors resize-none" />
              <button className="w-full bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4" /> Enviar consulta
              </button>
              <p className="text-white/25 text-xs text-center pt-1">Primera consulta sin cargo · Sin compromiso</p>
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
