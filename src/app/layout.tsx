import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pérez Hernández | Inmobiliaria & Estudio Jurídico",
  description:
    "Pérez Hernández — Negocios inmobiliarios y asesoramiento jurídico de primer nivel en Rosario, Argentina.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="h-full">{children}</body>
    </html>
  );
}
