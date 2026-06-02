import Link from "next/link";
import Image from "next/image";

const areas = [
  {
    num: "01",
    titulo: "Derecho Laboral",
    descripcion:
      "Asesoramiento a empleadores y empleados. Despidos, indemnizaciones, acuerdos y conflictos colectivos de trabajo.",
  },
  {
    num: "02",
    titulo: "Derecho Inmobiliario",
    descripcion:
      "Contratos de compraventa, alquileres, escrituraciones, subdivisiones y regularización dominial de propiedades.",
  },
  {
    num: "03",
    titulo: "Contratos Civiles",
    descripcion:
      "Redacción y revisión de contratos civiles y comerciales. Acuerdos societarios y documentación legal integral.",
  },
  {
    num: "04",
    titulo: "Derecho Societario",
    descripcion:
      "Constitución y modificación de sociedades. Asesoramiento corporativo estratégico para empresas y emprendedores.",
  },
];

const razones = [
  { titulo: "+20 años", sub: "de experiencia consolidada" },
  { titulo: "Respuesta", sub: "ágil y personalizada" },
  { titulo: "Equipo", sub: "multidisciplinario" },
  { titulo: "Resultados", sub: "comprobables" },
];

const testimonios = [
  {
    texto:
      "El estudio resolvió una situación laboral muy compleja con una rapidez y profesionalismo que no esperaba. Totalmente recomendable.",
    nombre: "Martín R.",
    cargo: "Empresario, Rosario",
  },
  {
    texto:
      "Compramos y escrituramos nuestro departamento sin ningún inconveniente. El asesoramiento fue claro, preciso y tranquilizador.",
    nombre: "Lucía M.",
    cargo: "Profesional independiente",
  },
  {
    texto:
      "Llevan años asesorando a mi empresa. Su conocimiento del derecho laboral nos evitó problemas que podrían haber sido muy costosos.",
    nombre: "Diego F.",
    cargo: "Director de empresa",
  },
];

export default function EstudioPage() {
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
              style={{ color: "var(--gold)", transition: "transform 0.3s ease" }}
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span
              className="text-sm tracking-[0.2em] uppercase font-medium"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Pérez Hernández
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              ["Áreas", "#areas"],
              ["Por qué elegirnos", "#razones"],
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
            className="btn-gold text-xs"
            style={{ padding: "10px 24px" }}
          >
            <span>Consulta gratis</span>
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=85"
          alt="Estudio jurídico"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,17,23,1) 0%, rgba(13,17,23,0.6) 50%, rgba(13,17,23,0.2) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-24 w-full">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-6 animate-fade-up"
            style={{ color: "var(--gold)" }}
          >
            Estudio Jurídico
          </p>
          <h1
            className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-8 animate-fade-up delay-100"
            style={{ fontFamily: "var(--font-playfair)", maxWidth: 700 }}
          >
            Asesoramiento
            <br />
            jurídico <em>de primer nivel</em>
          </h1>
          <p
            className="text-base font-light mb-10 animate-fade-up delay-200"
            style={{ color: "rgba(255,255,255,0.55)", maxWidth: 480 }}
          >
            Más de 20 años acompañando a personas y empresas con soluciones legales precisas en Rosario y la región.
          </p>
          <div className="flex gap-4 flex-wrap animate-fade-up delay-300">
            <a href="#contacto" className="btn-gold">
              <span>Solicitar asesoramiento</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#areas" className="btn-gold" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}>
              <span>Ver áreas de práctica</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── ÁREAS DE PRÁCTICA ── */}
      <section id="areas" className="py-32 px-6 md:px-10" style={{ background: "#0d1117" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <p className="text-xs tracking-[0.35em] uppercase mb-5 font-medium" style={{ color: "var(--gold)" }}>
                Especialidades
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-light"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Áreas de práctica
              </h2>
            </div>
            <p className="text-sm font-light max-w-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Soluciones jurídicas integrales con enfoque estratégico y atención personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {areas.map((area) => (
              <div
                key={area.num}
                className="p-10 group transition-colors hover:bg-[#111827]"
                style={{ background: "#0d1117" }}
              >
                <span
                  className="text-xs tracking-[0.3em] font-medium mb-6 block"
                  style={{ color: "var(--gold-dim)" }}
                >
                  {area.num}
                </span>
                <h3
                  className="font-display text-2xl font-light mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {area.titulo}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {area.descripcion}
                </p>
                <div className="mt-8 gold-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIRNOS ── */}
      <section
        id="razones"
        className="py-32 px-6 md:px-10"
        style={{ background: "#080b10" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs tracking-[0.35em] uppercase mb-5 font-medium" style={{ color: "var(--gold)" }}>
                Por qué elegirnos
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-light leading-[1.1] mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Una firma con
                <br />
                <em>trayectoria probada</em>
              </h2>
              <p className="text-sm font-light leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.45)", maxWidth: 420 }}>
                Más de dos décadas acompañando a personas y empresas. Nuestro compromiso es resolver cada situación con precisión, eficiencia y total confidencialidad.
              </p>
              <a href="#contacto" className="btn-gold">
                <span>Agendar consulta</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
              {razones.map((r) => (
                <div key={r.titulo} className="p-8 flex flex-col gap-2" style={{ background: "#080b10" }}>
                  <span
                    className="font-display text-3xl font-light"
                    style={{ fontFamily: "var(--font-playfair)", color: "var(--gold)" }}
                  >
                    {r.titulo}
                  </span>
                  <span className="text-xs font-light" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {r.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section id="testimonios" className="py-32 px-6 md:px-10" style={{ background: "#0d1117" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase mb-5 font-medium text-center" style={{ color: "var(--gold)" }}>
            Testimonios
          </p>
          <h2
            className="font-display text-4xl font-light text-center mb-20"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Lo que dicen nuestros clientes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {testimonios.map((t) => (
              <div key={t.nombre} className="p-10 flex flex-col justify-between gap-8" style={{ background: "#0d1117" }}>
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

      {/* ── CONTACTO / CTA ── */}
      <section
        id="contacto"
        className="relative py-40 px-6 md:px-10 overflow-hidden"
        style={{ background: "#080b10" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.15), transparent)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-6 font-medium" style={{ color: "var(--gold)" }}>
            Contacto
          </p>
          <h2
            className="font-display text-4xl md:text-6xl font-light leading-[1.1] mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ¿Necesitás
            <br />
            <em>asesoramiento legal?</em>
          </h2>
          <p className="text-sm font-light mb-12" style={{ color: "rgba(255,255,255,0.4)" }}>
            Primera consulta sin cargo. Catamarca 3041, Rosario.
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
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:inmobiliaria@perezhernandez.com.ar"
              className="btn-gold"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
            >
              <span>Enviar email</span>
            </a>
            <a
              href="tel:+543412406596"
              className="btn-gold"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
            >
              <span>(341) 240-6596</span>
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
          © {new Date().getFullYear()} Pérez Hernández · Catamarca 3041, Rosario
        </span>
        <Link href="/" className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
          Volver al inicio
        </Link>
      </footer>
    </div>
  );
}
