import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Client acquisition for bankruptcy firms`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
  };

  return (
    <html lang="en">
      <body>
        {/* THESIS: A managed dispatch board makes every lead and handoff visible; it refuses the generic centered SaaS manifesto. OWN-WORLD: white operational field, ink type, blue routing, coral action, green completion. STORY: see the leak, watch Hub route the journey, book a demo. FIRST VIEWPORT: split promise and live dispatch board with the CTA left. FORM: grounded direction 5, seed b21d2ad1. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance. */}
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
