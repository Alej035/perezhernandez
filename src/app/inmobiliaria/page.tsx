import Link from "next/link";
import Image from "next/image";
import {
  getProperties,
  getFrontPhoto,
  formatPrice,
  type TokkoProperty,
} from "@/lib/tokko";

async function Properties() {
  let properties: TokkoProperty[] = [];
  let error = false;

  if (!process.env.TOKKO_API_KEY) {
    return (
      <div
        className="col-span-full text-center py-16 px-6 rounded-lg border-2 border-dashed"
        style={{ borderColor: "#c9a84c", backgroundColor: "#fff" }}
      >
        <p className="text-lg font-medium mb-2" style={{ color: "#1a2744" }}>
          Integración Tokko pendiente
        </p>
        <p className="text-sm" style={{ color: "#6b7280" }}>
          Configurá la variable <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">TOKKO_API_KEY</code> en el entorno para mostrar las propiedades automáticamente.
        </p>
      </div>
    );
  }

  try {
    const data = await getProperties({ limit: 12 });
    properties = data.objects ?? [];
  } catch {
    error = true;
  }

  if (error) {
    return (
      <div className="col-span-full text-center py-16 text-red-500">
        No se pudieron cargar las propiedades. Intentá de nuevo más tarde.
      </div>
    );
  }

  if (!properties.length) {
    return (
      <div className="col-span-full text-center py-16" style={{ color: "#6b7280" }}>
        No hay propiedades disponibles en este momento.
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
            className="group rounded-lg overflow-hidden border transition-shadow hover:shadow-lg"
            style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
          >
            <div className="relative h-52 bg-gray-100 overflow-hidden">
              {photo ? (
                <Image
                  src={photo}
                  alt={prop.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-300 text-4xl">
                  🏠
                </div>
              )}
              {prop.operations?.[0] && (
                <span
                  className="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded"
                  style={{ backgroundColor: "#1a2744", color: "#c9a84c" }}
                >
                  {prop.operations[0].operation_type}
                </span>
              )}
            </div>
            <div className="p-5">
              <p className="text-xs mb-1 font-medium" style={{ color: "#c9a84c" }}>
                {prop.type?.name} · {prop.location?.name}
              </p>
              <h3
                className="font-medium mb-2 leading-snug line-clamp-2"
                style={{ color: "#1a2744" }}
              >
                {prop.title}
              </h3>
              <p className="text-xs mb-3" style={{ color: "#6b7280" }}>
                {prop.address}
              </p>
              <div className="flex items-center gap-4 text-xs mb-4" style={{ color: "#9ca3af" }}>
                {prop.rooms > 0 && <span>{prop.rooms} amb.</span>}
                {prop.surface_covered > 0 && (
                  <span>{prop.surface_covered} m² cub.</span>
                )}
                {prop.surface_total > 0 && (
                  <span>{prop.surface_total} m² tot.</span>
                )}
              </div>
              <p className="text-base font-semibold" style={{ color: "#1a2744" }}>
                {formatPrice(prop)}
              </p>
            </div>
          </a>
        );
      })}
    </>
  );
}

export default function InmobiliariaPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f5f0" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: "#e5e7eb" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-70 transition-opacity"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{ color: "#1a2744" }}
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span
              className="text-sm tracking-widest uppercase font-medium"
              style={{ color: "#1a2744" }}
            >
              Pérez Hernández
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {["Venta", "Alquiler", "Tasaciones", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-light tracking-wide transition-colors text-[#6b7280] hover:text-[#1a2744]"
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
            style={{ backgroundColor: "#1a2744", color: "#ffffff" }}
          >
            Consultar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: "#1a2744" }}
      >
        <p
          className="text-xs tracking-[0.4em] uppercase mb-5 font-medium"
          style={{ color: "#c9a84c" }}
        >
          Pérez Hernández
        </p>
        <h1
          className="text-4xl md:text-5xl font-light mb-6"
          style={{ color: "#ffffff", fontFamily: "Georgia, serif" }}
        >
          Negocios Inmobiliarios
        </h1>
        <p className="text-base font-light max-w-xl mx-auto" style={{ color: "#a0aec0" }}>
          Ventas · Alquileres · Tasaciones · Rosario y zona
        </p>
      </section>

      {/* Filtros rápidos */}
      <section id="propiedades" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-xl font-light" style={{ color: "#1a2744", fontFamily: "Georgia, serif" }}>
              Propiedades disponibles
            </h2>
            <div className="flex gap-2">
              {["Todas", "Venta", "Alquiler"].map((f) => (
                <button
                  key={f}
                  className="px-4 py-2 rounded text-sm font-medium border transition-colors"
                  style={{
                    borderColor: "#1a2744",
                    color: f === "Todas" ? "#ffffff" : "#1a2744",
                    backgroundColor: f === "Todas" ? "#1a2744" : "transparent",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* @ts-expect-error Server Component */}
            <Properties />
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: "#c9a84c" }} />
          <h2
            className="text-3xl font-light mb-4"
            style={{ color: "#1a2744", fontFamily: "Georgia, serif" }}
          >
            ¿Querés tasar tu propiedad?
          </h2>
          <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
            Tasaciones sin cargo. Catamarca 3041, Rosario.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5493417980000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#1a2744", color: "#ffffff" }}
            >
              WhatsApp
            </a>
            <a
              href="mailto:inmobiliaria@perezhernandez.com.ar"
              className="px-8 py-4 rounded text-sm font-medium border"
              style={{ borderColor: "#1a2744", color: "#1a2744" }}
            >
              Email
            </a>
          </div>
        </div>
      </section>

      <footer
        className="py-8 px-6 text-center text-xs"
        style={{ backgroundColor: "#1a2744", color: "#4a5568" }}
      >
        © {new Date().getFullYear()} Pérez Hernández Negocios Inmobiliarios · Catamarca 3041, Rosario
      </footer>
    </div>
  );
}
