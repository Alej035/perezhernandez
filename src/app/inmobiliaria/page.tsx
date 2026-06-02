import Link from "next/link";
import Image from "next/image";
import { getProperties, getFrontPhoto, formatPrice, type TokkoProperty } from "@/lib/tokko";

const testimonios = [
  {
    texto:
      "Encontramos el departamento que buscábamos en menos de dos semanas. El proceso fue transparente y sin sorpresas.",
    nombre: "Valentina G.",
    cargo: "Compradora, Rosario",
  },
  {
    texto:
      "Vendimos nuestra propiedad por encima del valor que esperábamos. El equipo de Pérez Hernández maneja el mercado como nadie.",
    nombre: "Roberto A.",
    cargo: "Vendedor, Funes",
  },
  {
    texto:
      "Buscábamos una oficina comercial y nos consiguieron exactamente lo que necesitábamos. Atención impecable.",
    nombre: "Claudia M.",
    cargo: "Empresaria, Rosario",
  },
];

async function PropertyGrid() {
  if (!process.env.TOKKO_API_KEY) {
    return (
      <div
        className="col-span-full flex flex-col items-center justify-center py-20 gap-4"
        style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.03)" }}
      >
        <div className="w-10 h-px" style={{ background: "var(--gold)" }} />
        <p className="text-sm font-medium" style={{ color: "var(--gold)" }}>
          Integración Tokko pendiente
        </p>
        <p className="text-xs text-center max-w-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          Configurá la variable{" "}
          <code className="font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>
            TOKKO_API_KEY
          </code>{" "}
          en Vercel para mostrar las propiedades automáticamente.
        </p>
      </div>
    );
  }

  let properties: TokkoProperty[] = [];
  try {
    const data = await getProperties({ limit: 9 });
    properties = data.objects ?? [];
  } catch {
    return (
      <div className="col-span-full text-center py-12 text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
        No se pudieron cargar las propiedades. Intentá más tarde.
      </div>
    );
  }

  return (
    <>
      {properties.map((prop) => {
        const photo = getFrontPhoto(prop);
        return (
          <a
            key={prop.id}
            href={prop.web_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden flex flex-col"
            style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="relative h-52 overflow-hidden" style={{ background: "#1a2234" }}>
              {photo ? (
                <Image
                  src={photo}
                  alt={prop.title}
                  fill
                  className="object-cover"
                  style={{
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center" style={{ color: "rgba(255,255,255,0.1)" }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                </div>
              )}
              {prop.operations?.[0] && (
                <span
                  className="absolute top-4 left-4 text-xs font-medium px-3 py-1 tracking-widest uppercase"
                  style={{ background: "rgba(13,17,23,0.8)", color: "var(--gold)", backdropFilter: "blur(8px)" }}
                >
                  {prop.operations[0].operation_type}
                </span>
              )}
            </div>

            <div className="p-6 flex flex-col gap-3 flex-1">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "var(--gold-dim)" }}>
                  {prop.type?.name} · {prop.location?.name}
                </p>
                <h3 className="text-sm font-medium leading-snug line-clamp-2" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {prop.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                {prop.rooms > 0 && <span>{prop.rooms} amb.</span>}
                {prop.surface_covered > 0 && <span>{prop.surface_covered} m² cub.</span>}
                {prop.surface_total > 0 && <span>{prop.surface_total} m² tot.</span>}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-base font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {formatPrice(prop)}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: "var(--gold)", transform: "translateX(0)", transition: "transform 0.3s ease" }}
                  className="group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}

export default function InmobiliariaPage() {
  return (
    <div style={{ background: "#0d1117", color: "#fff", fontFamily: "var(--font-inter)" }}>

      {/* ── HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(13,17,23,0.8)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{ color: "var(--gold)" }}
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="text-sm tracking-[0.2em] uppercase font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
              Pérez Hernández
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              ["Propiedades", "#propiedades"],
              ["Servicios", "#servicios"],
              ["Testimonios", "#testimonios"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="nav-link text-xs tracking-[0.15em] uppercase"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/5493417980000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ padding: "10px 24px" }}
          >
            <span>Consultar</span>
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85"
          alt="Propiedad premium"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,17,23,1) 0%, rgba(13,17,23,0.55) 50%, rgba(13,17,23,0.15) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-24 w-full">
          <p className="text-xs tracking-[0.4em] uppercase mb-6 animate-fade-up" style={{ color: "var(--gold)" }}>
            Negocios Inmobiliarios
          </p>
          <h1
            className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-8 animate-fade-up delay-100"
            style={{ fontFamily: "var(--font-playfair)", maxWidth: 700 }}
          >
            Propiedades
            <br />
            <em>de primer nivel</em>
          </h1>
          <p
            className="text-base font-light mb-10 animate-fade-up delay-200"
            style={{ color: "rgba(255,255,255,0.55)", maxWidth: 440 }}
          >
            Ventas, alquileres y tasaciones en Rosario y la región. Asesoramiento integral para cada operación.
          </p>
          <div className="flex gap-4 flex-wrap animate-fade-up delay-300">
            <a href="#propiedades" className="btn-gold">
              <span>Ver propiedades</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contacto" className="btn-gold" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}>
              <span>Tasar mi propiedad</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── BUSCADOR / FILTROS ── */}
      <section id="propiedades" style={{ background: "#080b10", paddingTop: 80, paddingBottom: 40 }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div
            className="p-6 md:p-8 flex flex-col md:flex-row gap-4 items-center"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex-1 w-full flex items-center gap-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 12 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Buscar por barrio, tipo o precio..."
                className="bg-transparent text-sm outline-none flex-1"
                style={{ color: "rgba(255,255,255,0.7)", caretColor: "var(--gold)" }}
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              {["Todos", "Venta", "Alquiler"].map((f, i) => (
                <button
                  key={f}
                  className="text-xs tracking-[0.15em] uppercase px-5 py-2 transition-all"
                  style={{
                    border: "1px solid",
                    borderColor: i === 0 ? "var(--gold)" : "rgba(255,255,255,0.12)",
                    color: i === 0 ? "var(--gold)" : "rgba(255,255,255,0.4)",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GRID PROPIEDADES ── */}
      <section style={{ background: "#080b10", paddingBottom: 120, paddingTop: 40 }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <PropertyGrid />
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="py-32 px-6 md:px-10" style={{ background: "#0d1117" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase mb-5 font-medium" style={{ color: "var(--gold)" }}>
            Servicios
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-light mb-20"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Todo en un solo lugar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                ),
                titulo: "Compra & Venta",
                desc: "Acompañamiento integral en cada paso de la operación, desde la búsqueda hasta la escrituración.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                ),
                titulo: "Alquileres",
                desc: "Gestión completa de contratos de alquiler con respaldo jurídico en cada operación.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                ),
                titulo: "Tasaciones",
                desc: "Valuación precisa y actualizada de tu propiedad basada en datos reales del mercado.",
              },
            ].map((s) => (
              <div key={s.titulo} className="p-10 flex flex-col gap-6" style={{ background: "#0d1117" }}>
                <div style={{ color: "var(--gold)" }}>{s.icon}</div>
                <div>
                  <h3 className="font-display text-xl font-light mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                    {s.titulo}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {s.desc}
                  </p>
                </div>
                <div className="gold-line mt-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section id="testimonios" className="py-32 px-6 md:px-10" style={{ background: "#080b10" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase mb-5 font-medium text-center" style={{ color: "var(--gold)" }}>
            Testimonios
          </p>
          <h2
            className="font-display text-4xl font-light text-center mb-20"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Clientes que confiaron en nosotros
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {testimonios.map((t) => (
              <div key={t.nombre} className="p-10 flex flex-col justify-between gap-8" style={{ background: "#080b10" }}>
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--gold)">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    &ldquo;{t.texto}&rdquo;
                  </p>
                </div>
                <div>
                  <div className="gold-line mb-4" />
                  <p className="text-sm font-medium">{t.nombre}</p>
                  <p className="text-xs font-light" style={{ color: "rgba(255,255,255,0.35)" }}>{t.cargo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA VISITA ── */}
      <section
        id="contacto"
        className="relative py-40 px-6 md:px-10 overflow-hidden"
        style={{ background: "#0d1117" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.12), transparent)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-6 font-medium" style={{ color: "var(--gold)" }}>
            Coordinar visita
          </p>
          <h2
            className="font-display text-4xl md:text-6xl font-light leading-[1.1] mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ¿Encontraste
            <br />
            <em>la propiedad ideal?</em>
          </h2>
          <p className="text-sm font-light mb-12" style={{ color: "rgba(255,255,255,0.4)" }}>
            Coordinamos una visita sin compromiso. Catamarca 3041, Rosario.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5493417980000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Coordinar por WhatsApp</span>
            </a>
            <a
              href="mailto:inmobiliaria@perezhernandez.com.ar"
              className="btn-gold"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
            >
              <span>Enviar email</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-8 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#080b10" }}
      >
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
          © {new Date().getFullYear()} Pérez Hernández Negocios Inmobiliarios · Catamarca 3041, Rosario
        </span>
        <Link href="/" className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
          Volver al inicio
        </Link>
      </footer>
    </div>
  );
}
