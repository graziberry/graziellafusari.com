import type { Metadata } from "next";
import { canonicalRoutes, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Perfumaria Terapêutica",
  description:
    "Perfumaria terapêutica com aromas com intenção, recursos sensoriais e presença para apoiar a relação entre ambiente, emoção e cuidado.",
  path: canonicalRoutes.perfumery,
  robots: {
    index: false,
    follow: true,
  },
});

export { default } from "@/app/perfumaria-terapeutica/page";
