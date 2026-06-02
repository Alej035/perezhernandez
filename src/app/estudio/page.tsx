"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageCircle, Phone, Scale, Briefcase, FileText, ShieldCheck,
  ChevronDown, Menu, X, Star, ArrowRight, CheckCircle,
  MapPin, Mail, Clock, Home,
} from "lucide-react";
import { ImageAccordion } from "@/components/ImageAccordion";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

const WA = "https://wa.me/5493417980000?text=Hola%2C%20quiero%20una%20consulta%20sin%20cargo.";
const TEL = "tel:+543412406596";

const services = [
  {
    id: 1,
    title: "Derecho Laboral",
    subItems: ["Despidos con o sin causa", "Indemnizaciones", "Trabajo en negro", "Suspensiones y licencias"],
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Derecho Inmobiliario",
    subItems: ["Compraventa de propiedades", "Contratos de alquiler", "Escrituraciones", "Regularización dominial"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Contratos",
    subItems: ["Contratos civiles y comerciales", "Acuerdos societarios", "Revisión y redacción", "Asesoramiento preventivo"],
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Derecho Societario",
    subItems: ["Constitución de sociedades", "Modificaciones estatutarias", "Asesoramiento corporativo", "Fusiones y adquisiciones"],
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
];

const team = [
  {
    name: "Dr. Pérez",
    role: "Socio fundador · Derecho Laboral",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop",
    bio: "Más de 20 años de trayectoria. Especialista en derecho laboral e indemnizaciones.",
  },
  {
    name: "Dr. Hernández",
    role: "Socio · Derecho Inmobiliario",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    bio: "Especialista en contratos, escrituraciones y regularización de propiedades.",
  },
];

const testimonials = [
  {
    name: "Martín R.",
    text: "El estudio resolvió mi situación laboral con rapidez y un profesionalismo que no esperaba. Consiguieron mucho más de lo que pensé posible.",
    rating: 5,
    case: "Despido · Derecho Laboral",
  },
  {
    name: "Lucía M.",
    text: "Compramos y escrituramos nuestro departamento sin ningún inconveniente. El asesoramiento fue claro, preciso y nos tranquilizó en todo momento.",
    rating: 5,
    case: "Compraventa · Derecho Inmobiliario",
  },
  {
    name: "Diego F.",
    text: "Llevan años asesorando a mi empresa. Su conocimiento del derecho laboral nos evitó problemas que habrían sido muy costosos.",
    rating: 5,
    case: "Asesoramiento empresarial",
  },
];

const faqs = [
  {
    q: "¿Cuánto cuesta la consulta inicial?",
    a: "La primera consulta es completamente sin cargo. Evaluamos tu caso y te explicamos las opciones antes de tomar cualquier decisión.",
  },
  {
    q: "¿Cómo funciona el cobro en casos laborales?",
    a: "En muchos casos trabajamos con honorarios a éxito: solo cobramos si ganamos tu caso. El porcentaje se acuerda antes de iniciar, sin sorpresas.",
  },
  {
    q: "¿Cuánto tarda un juicio laboral?",
    a: "Depende de la complejidad del caso, pero la mayoría de los juicios laborales en Rosario se resuelven entre 1 y 2 años.",
  },
  {
    q: "¿También hacen trámites inmobiliarios?",
    a: "Sí. Acompañamos compraventas, escrituraciones, alquileres y toda la parte legal de operaciones inmobiliarias en coordinación con nuestra inmobiliaria.",
  },
  {
    q: "¿Atienden en Rosario y alrededores?",
    a: "Principalmente en Rosario y zona metropolitana. Para casos de la región, consultanos y evaluamos según la complejidad.",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Servicios", "Equipo", "Testimonios", "FAQ", "Contacto"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#c9a227] flex items-center justify-center">
            <Scale className="w-4 h-4 text-[#0a1628]" />
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">Pérez Hernández</p>
            <p className="text-[#c9a227] text-[10px] tracking-widest uppercase">Estudio Jurídico</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-white/60 hover:text-white text-sm transition-colors">
              {l}
            </a>
          ))}
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
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-white/80 text-sm">{l}</a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#c9a227] text-[#0a1628] text-sm font-bold px-4 py-3 rounded-xl mt-1">
            <MessageCircle className="w-4 h-4" /> Consulta sin cargo
          </a>
        </div>
      )}
    </nav>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 bg-[#0a1628]">
      <div className="max-w-3xl mx-auto px-5">
        <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Preguntas frecuentes</p>
        <h2 className="text-3xl font-bold text-white text-center mb-12">Todo lo que necesitás saber</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-white font-medium text-sm">{f.q}</span>
                <ChevronDown className={`w-4 h-4 text-[#c9a227] flex-shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-white/60 text-sm leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EstudioPage() {
  return (
    <div className="slide-from-right bg-[#0a1628] font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]/60" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
            <div className="w-full lg:w-[45%] text-center lg:text-left">
              <div className="inline-flex items-center gap-2 border border-[#c9a227]/40 bg-[#c9a227]/10 text-[#c9a227] text-xs font-semibold px-4 py-1.5 rounded-full mb-7 tracking-wide uppercase">
                +20 años defendiendo tus derechos
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Tu caso merece<br />
                <span className="text-[#c9a227]">un especialista.</span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-white/60 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Especialistas en derecho laboral e inmobiliario en Rosario. Sin gastos iniciales. Resultados reales.
              </p>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
                {[
                  { icon: ShieldCheck, label: "+500 casos resueltos" },
                  { icon: Clock, label: "Consulta sin cargo" },
                  { icon: Home, label: "Catamarca 3041, Rosario" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-white/70">
                    <Icon className="w-4 h-4 text-[#c9a227]" />{label}
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-[#c9a227]/20 text-sm">
                  <MessageCircle className="w-4 h-4" />
                  Consulta sin cargo — WhatsApp
                </a>
                <a href={TEL}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 border border-white/20 hover:border-white/40 text-white/80 hover:text-white px-7 py-4 rounded-xl transition-colors text-sm">
                  <Phone className="w-4 h-4" /> (341) 240-6596
                </a>
              </div>
              <p className="mt-4 text-xs text-white/30 text-center lg:text-left">
                Sin anticipo · Honorarios a éxito · Lunes a viernes 9–18 hs
              </p>
            </div>

            <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
              <ImageAccordion items={services} />
            </div>
          </div>
        </div>

        <a href="#servicios" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors">
          <span className="text-xs">Ver más</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-[#c9a227] py-5">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "+500", label: "Casos resueltos" },
              { value: "+20", label: "Años de experiencia" },
              { value: "98%", label: "Clientes satisfechos" },
              { value: "2", label: "Especialistas dedicados" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-[#0a1628]">{value}</p>
                <p className="text-xs text-[#0a1628]/70 font-medium mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="py-20 bg-[#0d1e35]">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Áreas de práctica</p>
          <h2 className="text-3xl font-bold text-white text-center mb-4">¿En qué te podemos ayudar?</h2>
          <p className="text-white/50 text-center max-w-lg mx-auto mb-12 text-sm">
            Más de dos décadas resolviendo los casos más complejos. Cada área tiene un especialista dedicado.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Scale,
                title: "Derecho Laboral",
                desc: "Despidos, indemnizaciones y trabajo en negro. Defendemos tus derechos frente a cualquier empleador.",
                items: ["Despidos injustificados", "Indemnizaciones", "Trabajo en negro", "Suspensiones"],
              },
              {
                icon: Home,
                title: "Derecho Inmobiliario",
                desc: "Acompañamiento legal en compraventas, alquileres y escrituraciones.",
                items: ["Compraventa", "Contratos de alquiler", "Escrituraciones", "Regularización dominial"],
              },
              {
                icon: FileText,
                title: "Contratos",
                desc: "Redacción y revisión de contratos civiles y comerciales con enfoque preventivo.",
                items: ["Contratos civiles", "Contratos comerciales", "Acuerdos societarios", "Revisión legal"],
              },
              {
                icon: Briefcase,
                title: "Derecho Societario",
                desc: "Constitución y modificación de sociedades y asesoramiento corporativo integral.",
                items: ["Constitución de S.R.L.", "Modificaciones", "Asesoramiento S.A.", "Fusiones"],
              },
            ].map(({ icon: Icon, title, desc, items }) => (
              <div key={title} className="group bg-[#0a1628] border border-white/10 hover:border-[#c9a227]/40 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#c9a227]/5">
                <div className="w-11 h-11 rounded-xl bg-[#c9a227]/10 flex items-center justify-center mb-4 group-hover:bg-[#c9a227]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#c9a227]" />
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle className="w-3 h-3 text-[#c9a227] flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO TRABAJAMOS ── */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Proceso</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/10" />
            {[
              { n: "01", title: "Consulta gratuita", desc: "Contanos tu caso. La primera reunión es sin cargo y sin compromiso." },
              { n: "02", title: "Evaluación", desc: "Analizamos tu situación y te explicamos las opciones y posibilidades reales." },
              { n: "03", title: "Estrategia", desc: "Diseñamos la mejor estrategia legal para maximizar tu resultado." },
              { n: "04", title: "Resultado", desc: "Te acompañamos hasta el final. Solo cobramos si ganamos." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full bg-[#c9a227]/10 border-2 border-[#c9a227]/30 flex items-center justify-center mb-4 relative z-10">
                  <span className="text-[#c9a227] font-bold text-lg">{n}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPO ── */}
      <section id="equipo" className="py-20 bg-[#0d1e35]">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Nuestros especialistas</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">El equipo detrás de tus resultados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-2xl mx-auto">
            {team.map(({ name, role, img, bio }) => (
              <div key={name} className="group bg-[#0a1628] border border-white/10 hover:border-[#c9a227]/30 rounded-2xl overflow-hidden transition-all hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img src={img} alt={name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white">{name}</h3>
                  <p className="text-[#c9a227] text-xs font-medium mt-0.5 mb-3">{role}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section id="testimonios" className="py-20 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Testimonios</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, text, rating, case: c }) => (
              <div key={name} className="bg-[#0d1e35] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c9a227] text-[#c9a227]" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-5">&ldquo;{text}&rdquo;</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white text-sm">{name}</p>
                  <p className="text-[#c9a227] text-xs mt-0.5">{c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* ── CTA ── */}
      <section className="py-20 bg-[#c9a227]">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">¿Tenés una consulta legal?</h2>
          <p className="text-[#0a1628]/70 mb-8 text-lg">Hablá con un especialista hoy mismo. Sin costo, sin compromiso.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0a1628] hover:bg-[#0d1e35] text-white font-bold px-8 py-4 rounded-xl transition-colors text-sm">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href={TEL} className="flex items-center justify-center gap-2 border-2 border-[#0a1628]/30 hover:border-[#0a1628] text-[#0a1628] font-bold px-8 py-4 rounded-xl transition-colors text-sm">
              <Phone className="w-4 h-4" /> Llamar ahora
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-20 bg-[#0d1e35]">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Contacto</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Encontranos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Dirección", value: "Catamarca 3041, Rosario" },
                { icon: Phone, label: "Teléfono", value: "(341) 240-6596" },
                { icon: Mail, label: "Email", value: "inmobiliaria@perezhernandez.com.ar" },
                { icon: Clock, label: "Horarios", value: "Lunes a Viernes — 9:00 a 18:00 hs" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-3 mt-6">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-5 py-3 rounded-xl text-sm transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-[#0a1628] border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white mb-1">Envianos tu consulta</h3>
              <p className="text-white/40 text-xs mb-4">Te respondemos en menos de 24 horas</p>
              {[
                { placeholder: "Tu nombre completo", type: "text" },
                { placeholder: "Tu email", type: "email" },
                { placeholder: "Tu teléfono", type: "tel" },
              ].map(({ placeholder, type }) => (
                <input key={placeholder} type={type} placeholder={placeholder}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227]/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors" />
              ))}
              <textarea placeholder="Contanos tu caso brevemente..." rows={3}
                className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227]/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors resize-none" />
              <button className="w-full bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4" /> Enviar consulta
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#060f1e] py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#c9a227] flex items-center justify-center">
              <Scale className="w-3 h-3 text-[#0a1628]" />
            </div>
            <span className="text-white/60 text-sm">Pérez Hernández · Estudio Jurídico © {new Date().getFullYear()}</span>
          </div>
          <p className="text-white/30 text-xs">Catamarca 3041, Rosario · (341) 240-6596</p>
          <Link href="/" className="text-white/20 hover:text-white/50 text-xs transition-colors">← Volver al inicio</Link>
        </div>
      </footer>

      <WhatsAppFAB />
    </div>
  );
}
