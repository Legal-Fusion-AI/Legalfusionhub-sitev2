import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Legal Fusion Hub",
    short_name: "Legal Fusion",
    description: "Done-for-you client acquisition for bankruptcy law firms.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
  };
}
