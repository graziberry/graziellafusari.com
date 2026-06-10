import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://graziellafusari.com"),
  title: {
    default: "Graziella Fusari | Arquitetura Terapêutica e Ambientes Sensoriais",
    template: "%s | Graziella Fusari",
  },
  description:
    "Arquitetura terapêutica, harmonização de ambientes, terapias integrativas e perfumaria terapêutica para transformar sua casa em um espaço de equilíbrio e bem-estar.",
  openGraph: {
    title: "Graziella Fusari | Arquitetura Terapêutica e Ambientes Sensoriais",
    description:
      "Arquitetura terapêutica, terapias integrativas e perfumaria terapêutica para casas com beleza, presença e bem-estar.",
    url: "https://graziellafusari.com",
    siteName: "Graziella Fusari",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
