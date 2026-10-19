export const siteConfig = {
  name: "Retainer Pro",
  shortName: "Retainer Pro",
  tagline: "Bankruptcy intake, answered 24/7",
  positioning:
    "We automate the moments that matter so your firm stays human where it counts.",
  description:
    "Donna answers every call, text, and web form for consumer bankruptcy firms, qualifies by your criteria, and books the consultation. Nikki follows up until the client retains.",
  url: "https://www.legalfusionhub.com",
  email: "jeff@legalfusionhub.com",
  legalName: "Legal Fusion Hub LLC",
  ownerLine: "Retainer Pro by Legal Fusion Hub, LLC",
  jurisdiction: "Utah",
  founders: [
    { id: "mara-ream", name: "Mara Ream" },
    { id: "theron-morrison", name: "Theron D. Morrison" },
  ],
  demoPath: "/demo",
  forms: {
    demo: {
      formId: process.env.NEXT_PUBLIC_GHL_DEMO_FORM_ID ?? "",
      endpoint: process.env.NEXT_PUBLIC_GHL_DEMO_ENDPOINT ?? "",
    },
  },
} as const;

/**
 * AI employees are named as a brand. Use the name only. "Donna" is a nod to the
 * legal TV show; the show title is never used.
 */
export const aiEmployees = [
  {
    id: "donna",
    name: "Donna",
    role: "Intake",
    blurb:
      "Donna answers every call and text, day or night, handles the inquiry, captures the lead, and books the consultation.",
  },
  {
    id: "nikki",
    name: "Nikki",
    role: "Follow-up",
    blurb:
      "Nikki confirms the appointment, follows up, and keeps missed appointments and no-shows from going cold.",
  },
] as const;

export type AiEmployee = (typeof aiEmployees)[number];

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.url).toString();
}
