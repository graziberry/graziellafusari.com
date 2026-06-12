import type { Metadata } from "next";

export const SITE_URL = "https://graziellafusari.com";
export const SITE_NAME = "Graziella Fusari";
export const SITE_LOCALE = "pt_BR";
export const SITE_LANGUAGE = "pt-BR";
export const DEFAULT_DESCRIPTION =
  "Arquitetura Terapêutica e Ambientes Sensoriais por Graziella Fusari: consultorias que integram arquitetura, energia, natureza, antroposofia e perfumaria natural para transformar casas.";
export const DEFAULT_OG_IMAGE = "/og-graziella-fusari.png";

export const canonicalRoutes = {
  home: "/",
  process: "/processo/",
  services: "/servicos/",
  about: "/sobre/",
  contact: "/contato/",
  architecture: "/arquitetura-terapeutica/",
  perfumery: "/perfumaria-terapeutica/",
  therapy: "/terapias-individuais/",
} as const;

export const serviceRoutes = {
  architecture: canonicalRoutes.architecture,
  perfumery: canonicalRoutes.perfumery,
  therapy: canonicalRoutes.therapy,
} as const;

export const duplicateServiceRoutes = {
  architecture: "/servicos/arquitetura-terapeutica/",
  perfumery: "/servicos/perfumaria-terapeutica/",
  therapy: "/servicos/atendimentos-terapeuticos-individuais/",
} as const;

export const businessData = {
  name: SITE_NAME,
  url: SITE_URL,
  email: "contato@graziellafusari.com",
  telephone: "+55 11 97621-7579",
  language: SITE_LANGUAGE,
  serviceArea: "Atendimento online e presencial sob consulta",
} as const;

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({ title, description, path, robots }: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(DEFAULT_OG_IMAGE);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Arquitetura terapêutica`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots,
  };
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: SITE_LANGUAGE,
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: businessData.name,
  url: businessData.url,
  email: businessData.email,
  telephone: businessData.telephone,
  areaServed: businessData.serviceArea,
  inLanguage: businessData.language,
  description: DEFAULT_DESCRIPTION,
};

export function createServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "ProfessionalService",
      name: businessData.name,
      url: businessData.url,
      email: businessData.email,
      telephone: businessData.telephone,
      areaServed: businessData.serviceArea,
    },
    areaServed: businessData.serviceArea,
    inLanguage: businessData.language,
  };
}

export function createBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createFaqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
