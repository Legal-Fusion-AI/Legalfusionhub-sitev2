import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { faqs } from "@/lib/faqs";
import type { CallTurn } from "@/lib/call-transcript";
import { demoCall } from "@/lib/demo-call";

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
    jobTitle: founder.jobTitle,
    image: absoluteUrl(founder.image),
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
        logo: absoluteUrl("/logo-mark.png"),
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

export function audioObjectJsonLd(transcript: CallTurn[]) {
  const text = transcript
    .map((turn) => `${turn.label}: ${turn.text}`)
    .join("\n");

  return {
    "@context": "https://schema.org",
    "@type": "AudioObject",
    name: demoCall.title,
    description: demoCall.description,
    contentUrl: absoluteUrl(demoCall.src),
    encodingFormat: "audio/mpeg",
    embedUrl: absoluteUrl("/#hear-a-real-call"),
    uploadDate: demoCall.recordedOn,
    duration: demoCall.durationIso,
    transcript: text,
    publisher: { "@id": absoluteUrl("/#org") },
    isFamilyFriendly: true,
  };
}

export const routeMeta = {
  home: {
    title: "AI Receptionist for Bankruptcy Law Firms, 24/7 | Retainer Pro",
    description:
      "Donna answers every call for consumer bankruptcy firms. Nikki answers every text and web inquiry. Together they qualify by your criteria and book the consultation. 4,681 calls answered in a 90-day pilot.",
    path: "/",
  },
  howItWorks: {
    title: "How AI Intake Works for Bankruptcy Firms | Retainer Pro",
    description:
      "From first ring to retained client: how Donna handles intake, Nikki handles follow-up and no-shows, and your team meets the client.",
    path: "/how-it-works",
  },
  about: {
    title: "Team + Vision | Retainer Pro",
    description:
      "Meet Mara Ream, Theron Morrison, and Jeffrey Willis, the team behind Retainer Pro. Retainer Pro by Legal Fusion Hub, LLC is a Utah company built inside a high-volume bankruptcy practice.",
    path: "/about",
  },
  caseStudies: {
    title: "Case Studies | Real Conversations, Real Results | Retainer Pro",
    description:
      "Recorded bankruptcy intake calls answered by Retainer Pro. After-hours intake, returning clients, warm handoffs, and messages taken, shown with permission.",
    path: "/case-studies",
  },
  demo: {
    title: "Book a Demo | Retainer Pro",
    description:
      "See a real bankruptcy call answered and booked. Bring one recent inquiry and we will show it handled.",
    path: "/demo",
  },
  demoConfirmed: {
    title: "You're booked | Retainer Pro",
    description:
      "Your Retainer Pro demo is booked. A confirmation and calendar invite are on the way.",
    path: "/demo/confirmed",
  },
  privacy: {
    title: "Privacy policy | Retainer Pro",
    description:
      "How Retainer Pro collects and uses information submitted through this website.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of service | Retainer Pro",
    description:
      "Terms that govern use of the Retainer Pro public website.",
    path: "/terms",
  },
} as const;
