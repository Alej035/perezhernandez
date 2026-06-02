"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MessageCircle, Phone, Scale, Briefcase, FileText, ShieldCheck,
  ChevronDown, ChevronRight, Menu, X, Star, ArrowRight, CheckCircle,
  MapPin, Mail, Clock, Home, Trophy, TrendingUp, Zap, Check, Minus,
} from "lucide-react";
import { ImageAccordion } from "@/components/ImageAccordion";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

const WA = "https://wa.me/5493417980000?text=Hola%2C%20quiero%20una%20consulta%20sin%20cargo.";
const TEL = "tel:+543412406596";

// ─── Animated Counter ───────────────────────────────────────────────────────
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Services data ───────────────────────────────────────────────────────────
const services = [
  {
    id: 1,
    title: "Derecho Laboral",
    icon: Scale,
    subItems: ["Despidos con o sin causa", "Indemnizaciones", "Trabajo en negro", "Suspensiones y licencias"],
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1974&auto=format&fit=crop",
    detail: "Defendemos tus derechos laborales frente a cualquier empleador. Trabajamos con honorarios a éxito: solo cobramos si ganamos. Tiempo promedio de resolución: 8 a 18 meses.",
    casos: ["Despido sin causa después de 10 años de servicio", "Trabajo en negro por 3 años sin registrar", "Accidente laboral con ART que rechazó cobertura"],
  },
  {
    id: 2,
    title: "Derecho Inmobiliario",
    icon: Home,
    subItems: ["Compraventa de propiedades", "Contratos de alquiler", "Escrituraciones", "Regularización dominial"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    detail: "Acompañamiento legal integral en cada operación inmobiliaria, desde el boleto hasta la escritura. Coordinamos directamente con nuestra inmobiliaria para mayor eficiencia.",
    casos: ["Compraventa de departamento con deuda de expensas oculta", "Contrato de alquiler con cláusulas abusivas", "Regularización de propiedad sin documentación completa"],
  },
  {
    id: 3,
    title: "Contratos",
    icon: FileText,
    subItems: ["Contratos civiles y comerciales", "Acuerdos societarios", "Revisión y redacción", "Asesoramiento preventivo"],
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    detail: "Redactamos y revisamos todo tipo de contratos con enfoque preventivo. Identificamos riesgos antes de que se conviertan en problemas.",
    casos: ["Contrato comercial con cláusula de exclusividad abusiva", "Acuerdo societario entre socios en conflicto", "Revisión de contrato de franquicia antes de la firma"],
  },
  {
    id: 4,
    title: "Derecho Societario",
    icon: Briefcase,
    subItems: ["Constitución de sociedades", "Modificaciones estatutarias", "Asesoramiento corporativo", "Fusiones y adquisiciones"],
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    detail: "Asesoramiento completo para empresas en todas sus etapas: desde la constitución hasta la expansión o venta del negocio.",
    casos: ["Constitución de S.R.L. con múltiples socios", "Modificación estatutaria urgente ante conflicto", "Fusión de dos empresas del sector inmobiliario"],
  },
];

// ─── Success Cases ───────────────────────────────────────────────────────────
const casos = [
  {
    icon: Trophy,
    area: "Derecho Laboral",
    titulo: "Despido sin causa",
    resultado: "$1.400.000",
    desc: "Empleado despedido tras 12 años de antigüedad sin liquidación correcta. Recuperamos la indemnización completa más diferencias salariales.",
    tiempo: "11 meses",
  },
  {
    icon: TrendingUp,
    area: "A.R.T.",
    titulo: "Cobertura rechazada",
    resultado: "$980.000",
    desc: "Trabajador con incapacidad laboral permanente cuya ART rechazó la cobertura. Obtuvimos compensación total por vía judicial.",
    tiempo: "14 meses",
  },
  {
    icon: ShieldCheck,
    area: "Derecho Inmobiliario",
    titulo: "Operación con vicios ocultos",
    resultado: "Rescisión + daños",
    desc: "Compradores que descubrieron deudas ocultas post-escritura. Logramos la rescisión del contrato y la devolución del precio más daños.",
    tiempo: "8 meses",
  },
  {
    icon: Zap,
    area: "Conflicto societario",
    titulo: "Acuerdo extrajudicial",
    resultado: "60 días",
    desc: "Dos socios en conflicto total por distribución de utilidades. Mediamos y logramos un acuerdo sin llegar a juicio, ahorrando tiempo y costos.",
    tiempo: "60 días",
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Martín R.",
    cargo: "Empresario",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    text: "El estudio resolvió mi situación laboral con rapidez y un profesionalismo que no esperaba. Consiguieron mucho más de lo que pensé posible.",
    case: "Despido · Derecho Laboral",
    rating: 5,
  },
  {
    name: "Lucía M.",
    cargo: "Profesional independiente",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "Compramos y escrituramos nuestro departamento sin ningún inconveniente. El asesoramiento fue claro, preciso y nos tranquilizó en todo momento.",
    case: "Compraventa · Derecho Inmobiliario",
    rating: 5,
  },
  {
    name: "Diego F.",
    cargo: "Director de empresa",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    text: "Llevan años asesorando a mi empresa. Su conocimiento del derecho laboral nos evitó problemas que habrían sido muy costosos.",
    case: "Asesoramiento empresarial",
    rating: 5,
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "¿Cuánto cuesta la consulta inicial?", a: "La primera consulta es completamente sin cargo. Evaluamos tu caso y te explicamos las opciones antes de tomar cualquier decisión." },
  { q: "¿Cómo funciona el cobro en casos laborales?", a: "Trabajamos con honorarios a éxito: solo cobramos si ganamos tu caso. El porcentaje se acuerda antes de iniciar, sin sorpresas." },
  { q: "¿Cuánto tarda un juicio laboral?", a: "Depende de la complejidad del caso, pero la mayoría de los juicios laborales en Rosario se resuelven entre 8 meses y 2 años." },
  { q: "¿También hacen trámites inmobiliarios?", a: "Sí. Acompañamos compraventas, escrituraciones, alquileres y toda la parte legal de operaciones inmobiliarias en coordinación con nuestra inmobiliaria." },
  { q: "¿Atienden en Rosario y alrededores?", a: "Principalmente en Rosario y zona metropolitana. Para casos de la región, consultanos y evaluamos según la complejidad." },
];

const team = [
  { name: "Dr. Pérez", role: "Socio fundador · Derecho Laboral", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop", bio: "Más de 20 años de trayectoria. Especialista en derecho laboral e indemnizaciones." },
  { name: "Dr. Hernández", role: "Socio · Derecho Inmobiliario", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop", bio: "Especialista en contratos, escrituraciones y regularización de propiedades." },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Servicios", "#servicios"], ["Casos", "#casos"], ["Equipo", "#equipo"], ["FAQ", "#faq"], ["Contacto", "#contacto"]];
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

// ─── Expandable Service Card ─────────────────────────────────────────────────
function ServiceCard({ s, isOpen, onToggle }: { s: typeof services[0]; isOpen: boolean; onToggle: () => void }) {
  const Icon = s.icon;
  return (
    <div
      className={`bg-[#0a1628] border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${isOpen ? "border-[#c9a227]/50" : "border-white/10 hover:border-[#c9a227]/30"}`}
      onClick={onToggle}
    >
      <div className="p-6 flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? "bg-[#c9a227]" : "bg-[#c9a227]/10"}`}>
            <Icon className={`w-5 h-5 ${isOpen ? "text-[#0a1628]" : "text-[#c9a227]"}`} />
          </div>
          <div>
            <h3 className="font-bold text-white text-base mb-1">{s.title}</h3>
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
              <p className="text-white/60 text-sm leading-relaxed mb-4">{s.detail}</p>
              <div className="space-y-2">
                <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-wide mb-2">Casos frecuentes</p>
                {s.casos.map(c => (
                  <div key={c} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c9a227] flex-shrink-0 mt-0.5" />
                    <span className="text-white/60 text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-40 md:h-auto rounded-xl overflow-hidden">
              <img src={s.imageUrl} alt={s.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
            </div>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
            className="mt-5 inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
            <MessageCircle className="w-4 h-4" /> Consultar sobre este tema
          </a>
        </div>
      )}
    </div>
  );
}

// ─── Consulta Wizard ─────────────────────────────────────────────────────────
const wizardAreas = ["Derecho Laboral", "Derecho Inmobiliario", "Contratos", "Derecho Societario", "Otro"];

function ConsultaWizard() {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState("");
  const [desc, setDesc] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [sent, setSent] = useState(false);

  const waMsg = encodeURIComponent(`Hola, quiero una consulta sin cargo.\nÁrea: ${area}\nConsulta: ${desc}\nNombre: ${nombre}`);

  return (
    <div className="bg-[#0a1628] border border-white/10 rounded-2xl p-6 md:p-8">
      {/* Steps indicator */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s ? "bg-[#c9a227] text-[#0a1628]" : "bg-white/10 text-white/40"}`}>
              {step > s ? <Check className="w-4 h-4" /> : s}
            </div>
            {s < 3 && <div className={`h-px flex-1 w-12 transition-all ${step > s ? "bg-[#c9a227]" : "bg-white/10"}`} />}
          </div>
        ))}
        <span className="ml-2 text-white/40 text-xs">Paso {step} de 3</span>
      </div>

      {!sent ? (
        <>
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h3 className="font-bold text-white text-lg mb-1">¿Sobre qué tema querés consultar?</h3>
              <p className="text-white/40 text-sm mb-6">Seleccioná el área que mejor describe tu situación.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {wizardAreas.map(a => (
                  <button key={a} onClick={() => setArea(a)}
                    className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${area === a ? "border-[#c9a227] bg-[#c9a227]/10 text-white" : "border-white/10 text-white/60 hover:border-white/30"}`}>
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${area === a ? "bg-[#c9a227]" : "bg-white/20"}`} />
                    <span className="text-sm font-medium">{a}</span>
                  </button>
                ))}
              </div>
              <button onClick={() => area && setStep(2)} disabled={!area}
                className="mt-6 flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] disabled:opacity-40 disabled:cursor-not-allowed text-[#0a1628] font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                Siguiente <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h3 className="font-bold text-white text-lg mb-1">Contanos tu situación</h3>
              <p className="text-white/40 text-sm mb-6">Cuanto más detalle, mejor podemos evaluarte.</p>
              <div className="mb-1 flex items-center gap-2">
                <span className="text-xs text-[#c9a227] font-semibold uppercase tracking-wide">{area}</span>
              </div>
              <textarea
                value={desc}
                onChange={e => setDesc(e.target.value)}
                placeholder="Ej: Me despidieron sin causa el mes pasado, llevo 5 años en la empresa y no me liquidaron bien..."
                rows={5}
                className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227]/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors resize-none"
              />
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(1)} className="px-5 py-3 border border-white/20 text-white/60 hover:text-white rounded-xl text-sm transition-colors">
                  Atrás
                </button>
                <button onClick={() => desc.length > 10 && setStep(3)} disabled={desc.length <= 10}
                  className="flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] disabled:opacity-40 disabled:cursor-not-allowed text-[#0a1628] font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                  Siguiente <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h3 className="font-bold text-white text-lg mb-1">Tus datos de contacto</h3>
              <p className="text-white/40 text-sm mb-6">Te contactamos en menos de 24 horas hábiles.</p>
              <div className="space-y-3">
                <input type="text" placeholder="Tu nombre completo" value={nombre} onChange={e => setNombre(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227]/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors" />
                <input type="email" placeholder="Tu email" value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227]/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors" />
                <input type="tel" placeholder="Tu teléfono" value={tel} onChange={e => setTel(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227]/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors" />
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(2)} className="px-5 py-3 border border-white/20 text-white/60 hover:text-white rounded-xl text-sm transition-colors">
                  Atrás
                </button>
                <a href={`https://wa.me/5493417980000?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                  onClick={() => setSent(true)}
                  className="flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#0a1628] font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                  <MessageCircle className="w-4 h-4" /> Enviar por WhatsApp
                </a>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-8">
          <div className="w-14 h-14 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/30 flex items-center justify-center mx-auto mb-4">
            <Check className="w-7 h-7 text-[#c9a227]" />
          </div>
          <h3 className="font-bold text-white text-lg mb-2">¡Consulta enviada!</h3>
          <p className="text-white/50 text-sm">Te respondemos en menos de 24 horas hábiles.</p>
        </div>
      )}
    </div>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
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
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left">
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

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function EstudioPage() {
  const [openService, setOpenService] = useState<number | null>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);

  // Parallax
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

      {/* ── HERO ── */}
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
              {/* Guarantee badge */}
              <div className="inline-flex items-center gap-2 border border-[#c9a227]/40 bg-[#c9a227]/10 text-[#c9a227] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5" /> Sin ganancia, sin honorarios
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
                  <MessageCircle className="w-4 h-4" /> Consulta sin cargo — WhatsApp
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
              <ImageAccordion items={services.map(s => ({ id: s.id, title: s.title, imageUrl: s.imageUrl, subItems: s.subItems }))} />
            </div>
          </div>
        </div>

        <a href="#servicios" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors">
          <span className="text-xs">Ver más</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </section>

      {/* ── STATS BAR (animated) ── */}
      <div className="bg-[#c9a227] py-5">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { target: 500, suffix: "+", label: "Casos resueltos" },
              { target: 20, suffix: "+", label: "Años de experiencia" },
              { target: 98, suffix: "%", label: "Clientes satisfechos" },
              { target: 2, suffix: "", label: "Especialistas dedicados" },
            ].map(({ target, suffix, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-[#0a1628]">
                  <CountUp target={target} suffix={suffix} />
                </p>
                <p className="text-xs text-[#0a1628]/70 font-medium mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GARANTÍA ── */}
      <section className="py-10 bg-[#0d1e35]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-center md:text-left">
            {[
              { icon: ShieldCheck, title: "Sin ganancia, sin honorarios", desc: "Solo cobramos si ganamos tu caso. Sin anticipo, sin riesgo." },
              { icon: Clock, title: "Respuesta en 24 horas", desc: "Te contactamos el próximo día hábil con una evaluación de tu caso." },
              { icon: MessageCircle, title: "Primera consulta gratuita", desc: "Evaluamos tu situación sin compromiso y sin costo alguno." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col md:flex-row items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded-xl bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#c9a227]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{title}</p>
                  <p className="text-white/50 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS EXPANDIBLES ── */}
      <section id="servicios" className="py-20 bg-[#0d1e35]">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Áreas de práctica</p>
          <h2 className="text-3xl font-bold text-white text-center mb-4">¿En qué te podemos ayudar?</h2>
          <p className="text-white/50 text-center max-w-lg mx-auto mb-10 text-sm">
            Hacé click en cada área para ver más detalles, casos frecuentes y cómo trabajamos.
          </p>
          <div className="space-y-3">
            {services.map(s => (
              <ServiceCard key={s.id} s={s}
                isOpen={openService === s.id}
                onToggle={() => setOpenService(openService === s.id ? null : s.id)} />
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
              { n: "02", title: "Evaluación", desc: "Analizamos tu situación y te explicamos las opciones reales." },
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

      {/* ── CASOS DE ÉXITO ── */}
      <section id="casos" className="py-20 bg-[#0d1e35]">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Resultados reales</p>
          <h2 className="text-3xl font-bold text-white text-center mb-4">Casos de éxito</h2>
          <p className="text-white/50 text-center max-w-lg mx-auto mb-12 text-sm">
            Resultados concretos obtenidos para nuestros clientes. Sin datos personales identificables.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {casos.map(({ icon: Icon, area, titulo, resultado, desc, tiempo }) => (
              <div key={titulo} className="bg-[#0a1628] border border-white/10 hover:border-[#c9a227]/30 rounded-2xl p-6 transition-all hover:-translate-y-1 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a227]/10 flex items-center justify-center group-hover:bg-[#c9a227]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <div>
                      <p className="text-[#c9a227] text-xs font-semibold">{area}</p>
                      <h3 className="text-white font-bold text-sm">{titulo}</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#c9a227] font-bold text-lg leading-none">{resultado}</p>
                    <p className="text-white/30 text-xs mt-0.5">{tiempo}</p>
                  </div>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIRNOS (tabla comparativa) ── */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Diferenciadores</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Por qué elegirnos</h2>

          <div className="rounded-2xl overflow-hidden border border-white/10">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[#0d1e35] text-xs font-semibold uppercase tracking-wide">
              <div className="p-4 text-white/40">Característica</div>
              <div className="p-4 text-center text-[#c9a227] border-l border-white/10">
                <img src="/logo.png" alt="PH" className="w-6 h-6 rounded mx-auto mb-1 object-cover" />
                Pérez Hernández
              </div>
              <div className="p-4 text-center text-white/30 border-l border-white/10">Otros estudios</div>
            </div>

            {[
              ["Consulta inicial", "Gratuita y sin compromiso", "Generalmente arancelada"],
              ["Honorarios", "Solo si ganamos el caso", "Adelanto requerido"],
              ["Especialidad", "Laboral + Inmobiliario integrado", "Generalistas"],
              ["Tiempo de respuesta", "Menos de 24 horas", "Variable, varios días"],
              ["Inmobiliaria propia", "Sí, coordinación directa", "No disponible"],
              ["Seguimiento del caso", "Actualizaciones constantes", "Por demanda del cliente"],
            ].map(([feat, us, them], i) => (
              <div key={feat} className={`grid grid-cols-3 border-t border-white/10 ${i % 2 === 0 ? "bg-[#0a1628]" : "bg-[#0d1e35]/50"}`}>
                <div className="p-4 text-white/60 text-sm">{feat}</div>
                <div className="p-4 border-l border-white/10 text-center">
                  <span className="text-white text-xs font-medium flex items-center justify-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#c9a227] flex-shrink-0" />{us}
                  </span>
                </div>
                <div className="p-4 border-l border-white/10 text-center">
                  <span className="text-white/35 text-xs flex items-center justify-center gap-1.5">
                    <Minus className="w-3.5 h-3.5 flex-shrink-0" />{them}
                  </span>
                </div>
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

      {/* ── TESTIMONIOS CON FOTO ── */}
      <section id="testimonios" className="py-20 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Testimonios</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, cargo, img, text, case: c, rating }) => (
              <div key={name} className="bg-[#0d1e35] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c9a227] text-[#c9a227]" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
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

      <FAQ />

      {/* ── CTA ── */}
      <section className="py-20 bg-[#c9a227]">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <ShieldCheck className="w-10 h-10 text-[#0a1628]/60 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-3">¿Tenés una consulta legal?</h2>
          <p className="text-[#0a1628]/70 mb-2 text-lg">Hablá con un especialista hoy mismo.</p>
          <p className="text-[#0a1628]/60 text-sm mb-8 font-semibold">Sin costo · Sin compromiso · Solo cobramos si ganamos</p>
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

      {/* ── CONTACTO CON WIZARD ── */}
      <section id="contacto" className="py-20 bg-[#0d1e35]">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest text-center mb-2">Contacto</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Iniciá tu consulta</h2>
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
              {/* Guarantee box */}
              <div className="bg-[#c9a227]/10 border border-[#c9a227]/20 rounded-2xl p-5 mt-4">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#c9a227]" />
                  <p className="text-[#c9a227] font-bold text-sm">Nuestra garantía</p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Si no ganamos tu caso, <strong className="text-white">no te cobramos honorarios</strong>. Así de simple. Trabajamos comprometidos con tu resultado.
                </p>
              </div>
            </div>
            <ConsultaWizard />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
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
