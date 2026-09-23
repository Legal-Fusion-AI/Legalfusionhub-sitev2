import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/demo", "/how-it-works", "/about", "/privacy", "/terms"].map(
    (path) => ({
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path === "/demo" ? 0.9 : 0.6,
    }),
  );
}
