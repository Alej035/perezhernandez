import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estudio Jurídico | Pérez Hernández",
  description:
    "Asesoramiento jurídico en derecho laboral e inmobiliario. Pérez Hernández — Rosario, Argentina.",
};

export default function EstudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
