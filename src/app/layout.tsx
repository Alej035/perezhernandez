import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://perezhernandez.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Pérez & Hernández | Estudio Jurídico & Inmobiliaria",
  description:
    "Soluciones legales e inmobiliarias con respaldo real. Derecho laboral, derecho inmobiliario y negocios inmobiliarios en Rosario, Argentina.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Pérez & Hernández",
    title: "Pérez & Hernández | Estudio Jurídico & Inmobiliaria",
    description:
      "Soluciones legales e inmobiliarias con respaldo real. Derecho laboral, derecho inmobiliario y negocios inmobiliarios en Rosario, Argentina.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Pérez & Hernández — Estudio Jurídico & Inmobiliaria",
      },
    ],
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pérez & Hernández | Estudio Jurídico & Inmobiliaria",
    description:
      "Soluciones legales e inmobiliarias con respaldo real. Rosario, Argentina.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className="h-full bg-[#0a1628]">{children}</body>
    </html>
  );
}
