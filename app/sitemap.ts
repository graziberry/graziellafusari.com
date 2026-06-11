import type { MetadataRoute } from "next";
import { absoluteUrl, canonicalRoutes } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { path: canonicalRoutes.home, priority: 1 },
    { path: canonicalRoutes.architecture, priority: 0.9 },
    { path: canonicalRoutes.services, priority: 0.85 },
    { path: canonicalRoutes.perfumery, priority: 0.8 },
    { path: canonicalRoutes.therapy, priority: 0.8 },
    { path: canonicalRoutes.process, priority: 0.75 },
    { path: canonicalRoutes.about, priority: 0.7 },
    { path: canonicalRoutes.contact, priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
