export const siteConfig = {
  name: "Legal Fusion Hub",
  shortName: "Legal Fusion",
  tagline: "Technology for a stronger practice",
  description:
    "One company. A complete client journey. Legal Fusion Hub answers the call and books the client. Legal Fusion Portal carries the matter after they are retained.",
  url: "https://legalfusionhub.com",
  portalPath: "/portal",
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
