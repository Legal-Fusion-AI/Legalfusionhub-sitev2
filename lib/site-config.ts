export const siteConfig = {
  name: "Retainer Pro",
  shortName: "Retainer Pro",
  tagline: "Bankruptcy intake, answered 24/7",
  positioning:
    "We automate the moments that matter so your firm stays human where it counts.",
  description:
    "Donna answers every call for consumer bankruptcy firms. Nikki answers every text and web inquiry and follows up until the client retains. Both qualify by your criteria and book the consultation.",
  url: "https://www.legalfusionhub.com",
  email: "jeff@legalfusionhub.com",
  legalName: "Legal Fusion Hub LLC",
  ownerLine: "Retainer Pro by Legal Fusion Hub, LLC",
  jurisdiction: "Utah",
  founders: [
    {
      id: "mara-ream",
      name: "Mara Ream",
      jobTitle: "Co-Founder & Legal Ops Tech Expert",
      image: "/team/mara.jpg",
    },
    {
      id: "theron-morrison",
      name: "Theron Morrison",
      jobTitle: "Founder & Legal Strategist",
      image: "/team/theron.jpg",
    },
  ],
  demoPath: "/demo",
  bookPath: "/demo#contact-options",
  // TODO: Confirm the published contact number.
  PHONE_NUMBER: "+1 (435) 999-2539",
  /** Live demo line answered by Donna. Shown in the hero as "Try Donna now". */
  DEMO_LINE: "+1 (435) 363-3201",
  embedScriptSrc: "https://link.legalfusionhub.com/js/form_embed.js",
  booking: {
    calendarId: "VIkP0t3qGITBDSeHxeGs",
    embedSrc: "https://link.legalfusionhub.com/widget/booking/VIkP0t3qGITBDSeHxeGs",
    iframeId: "VIkP0t3qGITBDSeHxeGs_booking",
  },
  inquiry: {
    formId: "bPMjXE5PcK5rRHyn0Oh4",
    embedSrc: "https://link.legalfusionhub.com/widget/form/bPMjXE5PcK5rRHyn0Oh4",
    iframeId: "inline-bPMjXE5PcK5rRHyn0Oh4",
    name: "Retainer Pro Inquiry",
  },
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
      "Donna answers every call, day or night, in English or Spanish, handles the inquiry, captures the lead, and books the consultation.",
  },
  {
    id: "nikki",
    name: "Nikki",
    role: "Follow-up",
    blurb:
      "Nikki answers every text and web inquiry instantly, in English or Spanish, confirms the appointment, follows up, and keeps missed appointments and no-shows from going cold.",
  },
] as const;

export type AiEmployee = (typeof aiEmployees)[number];

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.url).toString();
}

export function phoneTelHref(number: string = siteConfig.PHONE_NUMBER): string {
  return `tel:${number.replace(/[^\d+]/g, "")}`;
}
