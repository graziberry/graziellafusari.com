import type { Metadata } from "next";
import { canonicalRoutes, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Arquitetura Terapêutica",
  description:
    "Consultoria de arquitetura terapêutica para transformar ambientes com função, beleza, energia e bem-estar.",
  path: canonicalRoutes.architecture,
  robots: {
    index: false,
    follow: true,
  },
});

export { default } from "@/app/arquitetura-terapeutica/page";
