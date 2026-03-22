import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mtd-ready.co.uk";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/check`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides/what-is-mtd`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guides/mtd-april-2026-deadline`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
