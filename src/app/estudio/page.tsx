import Link from "next/link";

const areas = [
  {
    icon: "⚖️",
    titulo: "Derecho Laboral",
    descripcion:
      "Asesoramiento a empleadores y empleados en relaciones laborales, despidos, indemnizaciones y conflictos colectivos.",
  },
  {
    icon: "🏛️",
    titulo: "Derecho Inmobiliario",
    descripcion:
      "Contratos de compraventa, alquileres, escrituraciones, subdivisiones y regularización dominial.",
  },
  {
    icon: "📋",
    titulo: "Contratos",
    descripcion:
      "Redacción y revisión de contratos civiles y comerciales, acuerdos societarios y documentos legales.",
  },
  {
    icon: "🏢",
    titulo: "Derecho Societario",
    descripcion:
      "Constitución de sociedades, modificaciones estatutarias y asesoramiento corporativo integral.",
  },
];

const miembros = [
  {
    nombre: "Dr. Pérez",
    cargo: "Socio fundador",
    especialidad: "Derecho Laboral · Derecho Inmobiliario",
  },
  {
    nombre: "Dr. Hernández",
    cargo: "Socio",
    especialidad: "Derecho Civil · Contratos",
  },
];

export default function EstudioPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f5f0" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50"
        style={{ backgroundColor: "#1a2744" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="text-sm tracking-widest uppercase" style={{ color: "#c9a84c" }}>
              Pérez Hernández
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {["Áreas", "Equipo", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-light tracking-wide transition-colors text-[#a0aec0] hover:text-[#c9a84c]"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/5493417980000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#c9a84c", color: "#1a2744" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consulta gratis
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative flex items-center justify-center py-32 px-6 overflow-hidden"
        style={{ backgroundColor: "#1a2744", minHeight: "60vh" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 60px)`,
          }}
        />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-6 font-medium"
            style={{ color: "#c9a84c" }}
          >
            Estudio Jurídico
          </p>
          <h1
            className="text-5xl md:text-6xl font-light mb-8 leading-tight"
            style={{ color: "#ffffff", fontFamily: "Georgia, serif" }}
          >
            Pérez Hernández
          </h1>
          <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: "#c9a84c" }} />
          <p className="text-lg font-light leading-relaxed" style={{ color: "#a0aec0" }}>
            Asesoramiento jurídico integral con más de 20 años de experiencia
            <br className="hidden md:block" />
            en derecho laboral e inmobiliario en Rosario.
          </p>
        </div>
      </section>

      {/* Áreas de práctica */}
      <section id="áreas" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4 font-medium"
              style={{ color: "#c9a84c" }}
            >
              Especialidades
            </p>
            <h2
              className="text-3xl font-light"
              style={{ color: "#1a2744", fontFamily: "Georgia, serif" }}
            >
              Áreas de práctica
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area) => (
              <div
                key={area.titulo}
                className="p-8 rounded-lg border transition-shadow hover:shadow-md"
                style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              >
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3
                  className="text-xl font-medium mb-3"
                  style={{ color: "#1a2744" }}
                >
                  {area.titulo}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {area.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section
        id="equipo"
        className="py-24 px-6"
        style={{ backgroundColor: "#1a2744" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4 font-medium"
              style={{ color: "#c9a84c" }}
            >
              Quiénes somos
            </p>
            <h2
              className="text-3xl font-light"
              style={{ color: "#ffffff", fontFamily: "Georgia, serif" }}
            >
              El equipo
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {miembros.map((m) => (
              <div
                key={m.nombre}
                className="text-center p-8 rounded-lg w-72"
                style={{ backgroundColor: "#243358" }}
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl font-light"
                  style={{ backgroundColor: "#c9a84c", color: "#1a2744" }}
                >
                  {m.nombre.split(" ")[1]?.[0] ?? m.nombre[0]}
                </div>
                <h3 className="text-lg font-medium mb-1" style={{ color: "#ffffff" }}>
                  {m.nombre}
                </h3>
                <p className="text-xs tracking-wide mb-3" style={{ color: "#c9a84c" }}>
                  {m.cargo}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#a0aec0" }}>
                  {m.especialidad}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ color: "#c9a84c" }}
          >
            Contacto
          </p>
          <h2
            className="text-3xl font-light mb-4"
            style={{ color: "#1a2744", fontFamily: "Georgia, serif" }}
          >
            Consultanos
          </h2>
          <p className="text-sm mb-10" style={{ color: "#6b7280" }}>
            Primera consulta sin cargo. Catamarca 3041, Rosario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5493417980000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#1a2744", color: "#ffffff" }}
            >
              WhatsApp
            </a>
            <a
              href="mailto:inmobiliaria@perezhernandez.com.ar"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-medium border transition-colors"
              style={{
                borderColor: "#1a2744",
                color: "#1a2744",
                backgroundColor: "transparent",
              }}
            >
              Enviar email
            </a>
            <a
              href="tel:+543412406596"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-medium border transition-colors"
              style={{
                borderColor: "#c9a84c",
                color: "#c9a84c",
                backgroundColor: "transparent",
              }}
            >
              (341) 240-6596
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-6 text-center text-xs"
        style={{ backgroundColor: "#1a2744", color: "#4a5568" }}
      >
        © {new Date().getFullYear()} Pérez Hernández. Catamarca 3041, Rosario.
      </footer>
    </div>
  );
}
