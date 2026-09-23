export const siteConfig = {
  name: "Legal Fusion Hub",
  shortName: "Legal Fusion",
  tagline: "Done-for-you client acquisition for bankruptcy firms",
  description:
    "Legal Fusion Hub answers, qualifies, books, nurtures, and follows up with every lead for bankruptcy law firms.",
  url: "https://legalfusionhub.com",
  portalUrl: "https://file.legalfusionhub.com",
  email: "info@legalfusion.ai",
  demoPath: "/demo",
  forms: {
    demo: {
      formId: process.env.NEXT_PUBLIC_GHL_DEMO_FORM_ID ?? "",
      endpoint: process.env.NEXT_PUBLIC_GHL_DEMO_ENDPOINT ?? "",
    },
  },
} as const;

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.url).toString();
}
