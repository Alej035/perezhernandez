import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pérez Hernández | Inmobiliaria & Estudio Jurídico",
  description:
    "Pérez Hernández — Negocios inmobiliarios y asesoramiento jurídico en Rosario, Argentina.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className="h-full bg-[#0a1628]">{children}</body>
    </html>
  );
}
