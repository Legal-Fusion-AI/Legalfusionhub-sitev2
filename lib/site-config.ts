export const siteConfig = {
  name: "Legal Fusion Hub",
  shortName: "Legal Fusion Hub",
  tagline: "Bankruptcy intake, answered 24/7",
  positioning:
    "We automate the moments that matter so your firm stays human where it counts.",
  description:
    "Legal Fusion Hub answers every call, qualifies bankruptcy leads by your criteria, and books the consultation that turns them into retained clients.",
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

/**
 * Product-line naming.
 *
 * Legal Fusion Hub is the company and the umbrella brand. "Retainer Pro" is a
 * product-line name that sits under it. The team is split testing that name.
 *
 * There is no A/B / feature-flag framework in this repo yet (no middleware, no
 * cookie or query-param variant logic, no flags SDK). Rather than scatter the
 * literal "Retainer Pro" through the UI, the name resolves from this single
 * place. A future experiment can set `NEXT_PUBLIC_PRODUCT_LINE_VARIANT` per
 * cohort (or swap `getProductLineVariant` for a flags SDK read) without
 * touching copy anywhere else. retainerpro.com is taken, so the name is never
 * rendered as a link.
 */
export type ProductLineVariant = "retainer-pro" | "control";

const productLineNames: Record<ProductLineVariant, string> = {
  "retainer-pro": "Retainer Pro",
  control: "Legal Fusion Hub",
};

export function getProductLineVariant(): ProductLineVariant {
  return process.env.NEXT_PUBLIC_PRODUCT_LINE_VARIANT === "control"
    ? "control"
    : "retainer-pro";
}

export function productLineName(
  variant: ProductLineVariant = getProductLineVariant(),
): string {
  return productLineNames[variant];
}

/**
 * AI employees are named as a brand. Use the name only. "Donna" is a nod to the
 * legal TV show; the show title is never used.
 */
export const aiEmployees = [
  {
    id: "owen",
    name: "Owen",
    role: "Intake",
    blurb:
      "Owen answers every call and text, day or night, handles the inquiry, and captures the lead.",
  },
  {
    id: "donna",
    name: "Donna",
    role: "Follow-up",
    blurb:
      "Donna follows up, books the consultation, and keeps missed appointments and no-shows from going cold.",
  },
] as const;

export type AiEmployee = (typeof aiEmployees)[number];

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.url).toString();
}
