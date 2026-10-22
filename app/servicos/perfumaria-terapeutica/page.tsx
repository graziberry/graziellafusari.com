import type { Metadata } from "next";
import { canonicalRoutes, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Perfumaria Natural",
  description:
    "Perfumaria Natural: criações olfativas independentes para a pessoa e para os ambientes, com matérias-primas naturais e escuta sensível.",
  path: canonicalRoutes.perfumery,
  robots: {
    index: false,
    follow: true,
  },
});

export { default } from "@/app/perfumaria-terapeutica/page";
