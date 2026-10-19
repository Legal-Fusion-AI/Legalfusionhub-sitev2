import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { faqs } from "@/lib/faqs";
import type { CallTurn } from "@/lib/call-transcript";

export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

export function organizationGraph() {
  const orgId = absoluteUrl("/#org");
  const siteId = absoluteUrl("/#site");
  const founders = siteConfig.founders.map((founder) => ({
    "@type": "Person" as const,
    "@id": absoluteUrl(`/#${founder.id}`),
    name: founder.name,
    jobTitle: "Founder",
    worksFor: { "@id": orgId },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        email: siteConfig.email,
        description: siteConfig.description,
        logo: absoluteUrl("/logo-wordmark.png"),
        address: {
          "@type": "PostalAddress",
          addressRegion: "UT",
          addressCountry: "US",
        },
        areaServed: "US",
        founder: founders.map((founder) => ({ "@id": founder["@id"] })),
        knowsAbout: [
          "bankruptcy law firm intake",
          "AI receptionist",
          "legal lead follow-up",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.email,
          contactType: "sales",
          url: absoluteUrl("/demo"),
        },
      },
      ...founders,
      {
        "@type": "WebSite",
        "@id": siteId,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": orgId },
      },
      {
        "@type": "Service",
        "@id": absoluteUrl("/#service"),
        name: "AI front desk for consumer bankruptcy law firms",
        serviceType: "AI receptionist and legal intake",
        provider: { "@id": orgId },
        areaServed: "US",
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Consumer bankruptcy law firms",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          name: "Phone, SMS, web form, 24/7",
        },
      },
    ],
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function videoObjectJsonLd(transcript: CallTurn[]) {
  const text = transcript
    .map((turn) => `${turn.label}: ${turn.text}`)
    .join("\n");

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "After-hours bankruptcy call answered and booked",
    description:
      "A first-time caller after hours. The AI receptionist screens the inquiry and books a free consultation, with no staff involved.",
    thumbnailUrl: absoluteUrl("/media/unanswered-combined-poster.jpg"),
    contentUrl: absoluteUrl("/media/unanswered-combined.mp4"),
    embedUrl: absoluteUrl("/#hear-a-real-call"),
    uploadDate: "2026-10-17",
    duration: "PT3M28S",
    transcript: text,
    publisher: { "@id": absoluteUrl("/#org") },
    isFamilyFriendly: true,
  };
}

export const routeMeta = {
  home: {
    title: "AI Receptionist for Bankruptcy Law Firms, 24/7 | Legal Fusion Hub",
    description:
      "Donna answers every call, text, and web form for consumer bankruptcy firms, qualifies by your criteria, and books the consultation. 4,681 calls answered in a 90-day pilot.",
    path: "/",
  },
  howItWorks: {
    title: "How AI Intake Works for Bankruptcy Firms | Legal Fusion Hub",
    description:
      "From first ring to retained client: how Donna handles intake, Nikki handles follow-up and no-shows, and your team meets the client.",
    path: "/how-it-works",
  },
  about: {
    title: "About Legal Fusion Hub, Utah | Bankruptcy Intake Built Inside a Practice",
    description:
      "Legal Fusion Hub LLC is a Utah company founded by Mara Ream and Theron D. Morrison. Built inside a high-volume bankruptcy practice.",
    path: "/about",
  },
  caseStudies: {
    title: "Case Studies | Real Conversations, Real Results | Legal Fusion Hub",
    description:
      "Recorded bankruptcy intake calls answered by Legal Fusion Hub. Listen to a real after-hours inquiry, with a role-labeled transcript and no staff involved.",
    path: "/case-studies",
  },
  demo: {
    title: "Book a Demo | Legal Fusion Hub",
    description:
      "See a real bankruptcy call answered and booked. Bring one recent inquiry and we will show it handled.",
    path: "/demo",
  },
  demoConfirmed: {
    title: "You're booked | Legal Fusion Hub",
    description:
      "Your Legal Fusion Hub demo is booked. A confirmation and calendar invite are on the way.",
    path: "/demo/confirmed",
  },
  privacy: {
    title: "Privacy policy | Legal Fusion Hub",
    description:
      "How Legal Fusion Hub collects and uses information submitted through this website.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of service | Legal Fusion Hub",
    description:
      "Terms that govern use of the Legal Fusion Hub public website.",
    path: "/terms",
  },
} as const;
