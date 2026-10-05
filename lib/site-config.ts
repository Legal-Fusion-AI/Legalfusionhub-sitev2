export const siteConfig = {
  name: "Legal Fusion Hub",
  shortName: "Legal Fusion",
  tagline: "Bankruptcy intake, answered 24/7",
  description:
    "Legal Fusion Hub answers every call, qualifies bankruptcy leads, and books the consultation that turns them into retained clients.",
  url: "https://legalfusionhub.com",
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
