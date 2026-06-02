import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inmobiliaria | Pérez Hernández",
  description:
    "Propiedades en venta y alquiler en Rosario. Pérez Hernández Negocios Inmobiliarios.",
};

export default function InmobiliariaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
