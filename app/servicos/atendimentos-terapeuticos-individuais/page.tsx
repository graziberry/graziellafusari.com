import type { Metadata } from "next";
import { canonicalRoutes, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Atendimentos Terapêuticos Individuais",
  description:
    "Atendimentos terapêuticos individuais para cuidado pessoal, reorganização interna, equilíbrio e processos de transformação.",
  path: canonicalRoutes.therapy,
  robots: {
    index: false,
    follow: true,
  },
});

export { default } from "@/app/terapias-individuais/page";
