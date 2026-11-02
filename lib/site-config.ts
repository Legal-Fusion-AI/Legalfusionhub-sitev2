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
  /** Live demo line: Donna answers calls, Nikki answers texts. Hero shows "Try Donna now" and "Text Nikki now". */
  DEMO_LINE: "+1 (435) 363-3201",
  embedScriptSrc: "https://link.legalfusionhub.com/js/form_embed.js",
  /**
   * CloseBot chat widget "Nikki - Website" on the Retainer Pro Demo source.
   * The script mounts the chat inside #cb-widget-container. Created 2026-11-01.
   */
  closebot: {
    scriptSrc: "https://api.closebot.com/scripts/cb.js?source=cuvU2FtwUP1dWlak",
    containerId: "cb-widget-container",
  },
  booking: {
    calendarId: "VIkP0t3qGITBDSeHxeGs",
    embedSrc: "https://link.legalfusionhub.com/widget/booking/VIkP0t3qGITBDSeHxeGs",
    iframeId: "VIkP0t3qGITBDSeHxeGs_booking",
  },
  /**
   * Demo bankruptcy intake form in the Retainer Pro Demo sub-account. A new
   * contact from it gets the new-lead tag, and Nikki texts them.
   * Swapped in 2026-10-29; the old law-firm inquiry form was bPMjXE5PcK5rRHyn0Oh4.
   */
  inquiry: {
    formId: "E3YVSLZYxDCZAiL8cpou",
    embedSrc: "https://link.legalfusionhub.com/widget/form/E3YVSLZYxDCZAiL8cpou",
    iframeId: "inline-E3YVSLZYxDCZAiL8cpou",
    name: "A. Bankruptcy Demo Form",
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
