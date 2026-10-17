import type { Metadata } from "next";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/montserrat";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
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
    logo: new URL("/logo-wordmark.png", siteConfig.url).toString(),
  };

  return (
    <html lang="en">
      <body>
        {/* THESIS: We automate the moments that matter so the firm stays human where it counts. OWN-WORLD: white field, deep navy type, teal routing, orange action. STORY: answer the call, qualify by the firm's criteria, book the consultation, nurture the misses. FIRST VIEWPORT: plain headline, the positioning line, one proof number, and the demo CTA above the live journey board. */}
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
