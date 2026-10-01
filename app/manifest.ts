import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Legal Fusion Hub",
    short_name: "Legal Fusion",
    description: "Technology for a stronger practice. From first call to retained client.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
  };
}
