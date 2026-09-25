import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VoiceDemoWidget } from "@/components/voice-demo-widget";
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
        {/* THESIS: One company covers a complete client journey. OWN-WORLD: white operational field, ink type, blue routing, coral action, green completion. STORY: engage the call, acquire the client, serve for the long term, book a demo. FIRST VIEWPORT: centered serif headline, subheadline, and demo CTA on a pale abstract field, with the live journey board beneath. */}
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <VoiceDemoWidget />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
