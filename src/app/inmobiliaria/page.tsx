"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { AnimateIn } from "@/components/AnimateIn";
import Link from "next/link";
import {
  MessageCircle, Phone, Search, Building2, Home, MapPin, Mail,
  Clock, Star, ArrowRight, Shield, CheckCircle, Menu, X,
  Landmark, TreePine, ShoppingBag,
} from "lucide-react";

const WA = "https://wa.me/5493417980000?text=Hola%2C%20quiero%20consultar%20sobre%20una%20propiedad.";
const TEL = "tel:+543412406596";
const TOKKO_KEY = process.env.NEXT_PUBLIC_TOKKO_API_KEY ?? "";

const testimonials = [
  {
    name: "Valentina G.",
    text: "Encontramos el departamento que buscábamos en menos de dos semanas. El proceso fue transparente y sin sorpresas de principio a fin.",
    rating: 5,
    case: "Compra de departamento",
  },
  {
    name: "Roberto A.",
    text: "Vendimos nuestra propiedad por encima del valor que esperábamos. El equipo maneja el mercado de Rosario como nadie.",
    rating: 5,
    case: "Venta de casa",
  },
  {
    name: "Claudia M.",
    text: "Buscábamos una oficina comercial y nos consiguieron exactamente lo que necesitábamos. Atención impecable en todo momento.",
    rating: 5,
    case: "Alquiler comercial",
  },
];

interface TokkoProperty {
  id: number;
  title: string;
  address: string;
  location: { name: string };
  operations: Array<{ operation_type: string; prices: Array<{ currency: string; price: number }> }>;
  photos: Array<{ image: string; is_front_photo: boolean }>;
  surface_total: number;
  surface_covered: number;
  rooms: number;
  type: { name: string };
  web_url: string;
}

function formatPrice(prop: TokkoProperty) {
  const op = prop.operations?.[0];
  if (!op?.prices?.length) return "Consultar";
  const p = op.prices[0];
  return `${p.currency} ${p.price.toLocaleString("es-AR")}`;
}

function getFront(prop: TokkoProperty) {
  if (!prop.photos?.length) return null;
  return (prop.photos.find((p) => p.is_front_photo) ?? prop.photos[0]).image;
}

function PropertyCard({ prop }: { prop: TokkoProperty }) {
  const photo = getFront(prop);
  return (
    <a href={prop.web_url} target="_blank" rel="noopener noreferrer"
      className="group bg-[#0a1628] border border-white/10 hover:border-[#c9a227]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.25)" }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,168,39,0.08)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.25)")}>
      <div className="relative h-48 overflow-hidden bg-[#0d1e35]">
        {photo ? (
          <img src={photo} alt={prop.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="flex h-full items-center justify-center text-white/10">
            <Home className="w-10 h-10" />
          </div>
        )}
        {prop.operations?.[0] && (
          <span className="absolute top-3 left-3 bg-[#0a1628]/90 text-[#c9a227] text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm border border-[#c9a227]/20">
            {prop.operations[0].operation_type}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-wide">
          {prop.type?.name} · {prop.location?.name}
        </p>
        <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2">{prop.title}</h3>
        <p className="text-white/40 text-xs">{prop.address}</p>
        <div className="flex gap-3 text-xs text-white/40 mt-1">
          {prop.rooms > 0 && <span>{prop.rooms} amb.</span>}
          {prop.surface_covered > 0 && <span>{prop.surface_covered} m² cub.</span>}
          {prop.surface_total > 0 && <span>{prop.surface_total} m² tot.</span>}
        </div>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
          <span className="text-white font-bold text-base">{formatPrice(prop)}</span>
          <ArrowRight className="w-4 h-4 text-[#c9a227] group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );
}

function PropertyGrid({ filter }: { filter: string }) {
  const [props, setProps] = useState<TokkoProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!TOKKO_KEY) { setLoading(false); return; }
    const url = new URL("https://api.tokkoBroker.com/api/v1/property/");
    url.searchParams.set("key", TOKKO_KEY);
    url.searchParams.set("lang", "es");
    url.searchParams.set("format", "json");
    url.searchParams.set("limit", "12");
    if (filter !== "Todos") url.searchParams.set("operation_type", filter);

    fetch(url.toString())
      .then((r) => r.json())
      .then((d) => { setProps(d.objects ?? []); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, [filter]);

  if (!TOKKO_KEY) return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 gap-4 rounded-2xl"
      style={{ background: "rgba(13,30,53,0.6)", border: "1px solid rgba(201,168,39,0.15)" }}>
      <div className="w-11 h-11 rounded-xl bg-[#c9a227]/10 flex items-center justify-center"
        style={{ border: "1px solid rgba(201,168,39,0.2)" }}>
        <Building2 className="w-5 h-5 text-[#c9a227]" />
      </div>
      <p className="font-semibold text-white">Integración Tokko pendiente</p>
      <p className="text-white/40 text-sm text-center max-w-sm">
        Configurá <code className="text-white/60 font-mono">NEXT_PUBLIC_TOKKO_API_KEY</code> para mostrar las propiedades automáticamente desde Tokko Broker.
      </p>
    </div>
  );

  if (loading) return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-[#0d1e35] border border-white/10 rounded-2xl h-72 animate-pulse" />
      ))}
    </>
  );

  if (error) return (
    <div className="col-span-full text-center py-12 text-white/40 text-sm">
      No se pudieron cargar las propiedades. Intentá más tarde.
    </div>
  );

  if (!props.length) return (
    <div className="col-span-full text-center py-12 text-white/40 text-sm">
      No hay propiedades disponibles en este momento.
    </div>
  );

  return <>{props.map((p) => <PropertyCard key={p.id} prop={p} />)}</>;
}

function SectionSeparator() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full"
      style={{ background: "linear-gradient(90deg, transparent 0%, rgba(201,168,39,0.22) 50%, transparent 100%)" }}
    />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Propiedades", "Servicios", "Testimonios", "Contacto"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10"
      style={{ boxShadow: "0 1px 0 rgba(201,168,39,0.08), 0 4px 24px rgba(0,0,0,0.25)" }}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Pérez Hernández" className="w-9 h-9 rounded-lg object-cover" fetchPriority="high" />
          <div>
            <p className="text-white font-bold text-sm leading-none">Pérez Hernández</p>
            <p className="text-[#c9a227] text-[10px] tracking-widest uppercase">Inmobiliaria</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-white/55 hover:text-white text-sm transition-colors duration-200">{l}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/estudio"
            className="flex items-center gap-1.5 text-white/45 hover:text-white text-xs font-medium border border-white/12 hover:border-white/25 px-3 py-1.5 rounded-lg transition-all duration-200">
            Ir al Estudio Jurídico →
          </Link>
          <a href={TEL} className="flex items-center gap-1.5 text-white/65 hover:text-white text-sm transition-colors">
            <Phone className="w-3.5 h-3.5" /> (341) 240-6596
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] text-sm font-bold px-4 py-2 rounded-lg transition-colors"
            style={{ boxShadow: "0 2px 12px rgba(201,168,39,0.3)" }}>
            <MessageCircle className="w-3.5 h-3.5" /> Consultar
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
            <MessageCircle className="w-4 h-4" /> Consultar por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}

export default function InmobiliariaPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todos");

  return (
    <>
    <div className="slide-from-left bg-[#0a1628] font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 geo-pattern">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80"
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.28 }}
          />
          {/* Rich layered gradient */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, rgba(10,22,40,0.75) 0%, rgba(10,22,40,0.55) 40%, rgba(10,22,40,0.95) 85%, #0a1628 100%)"
          }} />
          {/* Radial gold glow */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at 60% 40%, rgba(201,168,39,0.07) 0%, transparent 55%)"
          }} />
        </div>

        {/* Corner brackets */}
        <div className="absolute top-24 left-6 opacity-20 hidden lg:block" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M28 0 H0 V28" stroke="#c9a227" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="absolute top-24 right-6 opacity-20 hidden lg:block" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M0 0 H28 V28" stroke="#c9a227" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-7 animate-entry-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white/90 text-xs font-medium backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <span className="w-2 h-2 rounded-full bg-[#c9a227] animate-pulse" />
              Propiedades en Rosario, Santa Fe y Córdoba
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[#c9a227] text-xs font-semibold backdrop-blur-sm"
              style={{ background: "rgba(201,168,39,0.1)", border: "1px solid rgba(201,168,39,0.28)" }}>
              Asociados CCIN
            </div>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5 animate-entry-1">
            Encontrá la propiedad<br />
            <span className="text-[#c9a227]">ideal para vos</span>
          </h1>

          <p className="text-lg text-white/55 mb-10 max-w-xl mx-auto animate-entry-2">
            Casas, departamentos, oficinas y más — en las mejores ubicaciones de Rosario.
          </p>

          {/* Search bar */}
          <div className="rounded-2xl p-3 flex flex-col sm:flex-row gap-2 max-w-3xl mx-auto animate-entry-3"
            style={{
              background: "rgba(255,255,255,0.97)",
              boxShadow: "0 20px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,168,39,0.15)",
            }}>
            <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0">
              {["Todos", "Venta", "Alquiler"].map((t) => (
                <button key={t} type="button" onClick={() => setFilter(t)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex-shrink-0 ${
                    filter === t ? "bg-[#0a1628] text-white shadow-sm" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}>
                  {t}
                </button>
              ))}
            </div>
            <div className="flex-1 flex items-center gap-2 bg-slate-50 rounded-xl px-3">
              <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <input type="text" placeholder="Barrio, ciudad o zona..."
                value={query} onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none" />
            </div>
            <button className="sm:w-auto w-full px-6 py-2.5 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold rounded-xl text-sm transition-colors"
              style={{ boxShadow: "0 2px 8px rgba(201,168,39,0.3)" }}>
              Buscar
            </button>
          </div>

          <div className="flex justify-center gap-12 mt-12 animate-entry-4">
            {[{ value: "200+", label: "Propiedades" }, { value: "98%", label: "Clientes satisfechos" }, { value: "+20 años", label: "De experiencia" }].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-white/45 mt-1 tracking-wide uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(201,168,39,0.18) 50%, transparent 100%)"
        }} />
      </section>

      {/* ── PROPIEDADES ── */}
      <SectionSeparator />
      <section id="propiedades" className="py-24 bg-[#0d1e35]">
        <div className="max-w-6xl mx-auto px-5">
          <AnimateIn className="text-center mb-12">
            <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-[0.3em] mb-3">Disponibles ahora</p>
            <h2 className="font-display text-3xl font-bold text-white">Propiedades en {filter === "Todos" ? "venta y alquiler" : filter.toLowerCase()}</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <PropertyGrid filter={filter} />
          </div>
        </div>
      </section>

      {/* ── CATEGORÍAS ── */}
      <SectionSeparator />
      <section className="bg-[#0a1628] py-20">
        <div className="max-w-6xl mx-auto px-5">
          <AnimateIn className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-white">Buscá por tipo</h2>
          </AnimateIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { label: "Departamentos", Icon: Building2 },
              { label: "Casas",         Icon: Home },
              { label: "PHs",           Icon: Landmark },
              { label: "Terrenos",      Icon: TreePine },
              { label: "Locales",       Icon: ShoppingBag },
            ].map(({ label, Icon }, idx) => (
              <AnimateIn key={label} delay={idx * 60}>
                <button
                  className="w-full flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
                  style={{
                    background: "rgba(13,30,53,0.8)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget.style.border = "1px solid rgba(201,168,39,0.35)");
                    (e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.35), 0 0 0 1px rgba(201,168,39,0.08)");
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.09)");
                    (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)");
                  }}>
                  <div className="w-10 h-10 rounded-xl bg-[#c9a227]/10 flex items-center justify-center group-hover:bg-[#c9a227]/20 transition-colors duration-200"
                    style={{ border: "1px solid rgba(201,168,39,0.2)" }}>
                    <Icon className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <span className="text-sm font-semibold text-white/65 group-hover:text-[#c9a227] transition-colors duration-200">{label}</span>
                </button>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <SectionSeparator />
      <section id="servicios" className="py-24 bg-[#0d1e35]">
        <div className="max-w-6xl mx-auto px-5">
          <AnimateIn className="text-center mb-12">
            <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-[0.3em] mb-3">Servicios</p>
            <h2 className="font-display text-3xl font-bold text-white">Todo en un solo lugar</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Home, title: "Compra y venta", desc: "Acompañamiento integral en cada paso de la operación, desde la búsqueda hasta la escrituración.", items: ["Asesoramiento personalizado", "Gestión de documentación", "Coordinación de escritura", "Respaldo jurídico incluido"] },
              { icon: Building2, title: "Alquileres", desc: "Gestión completa de contratos con selección de inquilinos y respaldo legal en cada operación.", items: ["Búsqueda de inquilinos", "Contratos de alquiler", "Gestión de pagos", "Asesoramiento legal"] },
              { icon: Shield, title: "Tasaciones", desc: "Valuación precisa y actualizada basada en datos reales del mercado inmobiliario rosarino.", items: ["Tasación sin cargo", "Análisis de mercado", "Informe detallado", "Estrategia de precio"] },
            ].map(({ icon: Icon, title, desc, items }, idx) => (
              <AnimateIn key={title} delay={idx * 100}>
                <div className="group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(10,22,40,0.8)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget.style.border = "1px solid rgba(201,168,39,0.35)");
                    (e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,168,39,0.08)");
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.09)");
                    (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.25)");
                  }}>
                  <div className="w-11 h-11 rounded-xl bg-[#c9a227]/10 flex items-center justify-center mb-5 group-hover:bg-[#c9a227]/20 transition-colors duration-200"
                    style={{ border: "1px solid rgba(201,168,39,0.2)" }}>
                    <Icon className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-4">{desc}</p>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-white/60">
                        <CheckCircle className="w-3 h-3 text-[#c9a227] flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <SectionSeparator />
      <section id="testimonios" className="py-24 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto px-5">
          <AnimateIn className="text-center mb-12">
            <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-[0.3em] mb-3">Testimonios</p>
            <h2 className="font-display text-3xl font-bold text-white">Clientes que confiaron en nosotros</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, text, rating, case: c }, idx) => (
              <AnimateIn key={name} delay={idx * 100}>
                <div className="h-full rounded-2xl p-6"
                  style={{
                    background: "linear-gradient(145deg, rgba(13,30,53,0.85) 0%, rgba(10,22,40,0.9) 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                  }}>
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#c9a227] text-[#c9a227]" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">&ldquo;{text}&rdquo;</p>
                  <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="font-semibold text-white text-sm">{name}</p>
                    <p className="text-[#c9a227] text-xs mt-0.5">{c}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA TASACIÓN ── */}
      <SectionSeparator />
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #c9a227 0%, #b8911f 100%)" }}>
        {/* Geometric overlay */}
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true" style={{
          backgroundImage: "linear-gradient(rgba(10,22,40,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">¿Querés tasar tu propiedad?</h2>
          <p className="text-[#0a1628]/65 mb-8 text-lg">Tasación sin cargo. Te contactamos en menos de 24 horas.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0a1628] hover:bg-[#0d1e35] text-white font-bold px-8 py-4 rounded-xl transition-colors text-sm"
              style={{ boxShadow: "0 4px 20px rgba(10,22,40,0.3)" }}>
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href={TEL} className="flex items-center justify-center gap-2 border-2 border-[#0a1628]/25 hover:border-[#0a1628]/70 text-[#0a1628] font-bold px-8 py-4 rounded-xl transition-all text-sm">
              <Phone className="w-4 h-4" /> Llamar ahora
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <SectionSeparator />
      <section id="contacto" className="py-28 bg-[#0d1e35]">
        <div className="max-w-6xl mx-auto px-5">
          <AnimateIn className="text-center mb-14">
            <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-[0.3em] mb-3">Contacto</p>
            <h2 className="font-display text-3xl font-bold text-white">Encontranos</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <AnimateIn>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Dirección", value: "Catamarca 3041, Rosario" },
                  { icon: Phone, label: "Teléfono", value: "(341) 240-6596" },
                  { icon: Mail, label: "Email", value: "inmobiliaria@perezhernandez.com.ar" },
                  { icon: Clock, label: "Horarios", value: "Lunes a Viernes — 9:00 a 18:00 hs" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(201,168,39,0.1)",
                        border: "1px solid rgba(201,168,39,0.2)",
                      }}>
                      <Icon className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-0.5">{label}</p>
                      <p className="text-white text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
                <div className="flex gap-3 mt-6 flex-wrap">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-5 py-3 rounded-xl text-sm transition-colors"
                    style={{ boxShadow: "0 4px 16px rgba(201,168,39,0.25)" }}>
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <a href="https://instagram.com/perezhernandezinmobiliaria" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/60 hover:text-white px-5 py-3 rounded-xl text-sm transition-all duration-200">
                    Instagram
                  </a>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={150}>
              <div className="rounded-2xl p-6 space-y-4"
                style={{
                  background: "linear-gradient(145deg, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.95) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}>
                <h3 className="font-bold text-white mb-1">Coordiná una visita</h3>
                <p className="text-white/40 text-xs mb-4">Te respondemos en menos de 24 horas</p>
                {[
                  { placeholder: "Tu nombre completo", type: "text" },
                  { placeholder: "Tu email", type: "email" },
                  { placeholder: "Tu teléfono", type: "tel" },
                ].map(({ placeholder, type }) => (
                  <input key={placeholder} type={type} placeholder={placeholder}
                    className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227]/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors" />
                ))}
                <textarea placeholder="¿Qué propiedad te interesa o qué estás buscando?" rows={3}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227]/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors resize-none" />
                <button className="w-full bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                  style={{ boxShadow: "0 4px 20px rgba(201,168,39,0.25)" }}>
                  <ArrowRight className="w-4 h-4" /> Enviar consulta
                </button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <SectionSeparator />
      <footer className="bg-[#060f1e] py-10">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#c9a227] flex items-center justify-center">
              <Building2 className="w-3.5 h-3.5 text-[#0a1628]" />
            </div>
            <span className="text-white/55 text-sm">Pérez Hernández Inmobiliaria © {new Date().getFullYear()}</span>
          </div>
          <p className="text-white/25 text-xs">Catamarca 3041, Rosario · (341) 240-6596</p>
          <Link href="/" className="text-white/20 hover:text-white/50 text-xs transition-colors">← Volver al inicio</Link>
        </div>
      </footer>

    </div>
    <WhatsAppFAB />
    </>
  );
}
