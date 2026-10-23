import type { Metadata } from "next";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/montserrat";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { organizationGraph } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AI Receptionist for Bankruptcy Law Firms, 24/7 | Retainer Pro",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Analytics pixel (lspxl). Vendor asks for it in <head> on every page, before other scripts. Added 2026-10-23. */}
        <script async src="https://px.lspxl.com/c/6977f114-62dd-4fe9-9bb6-dbd0c338520a" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <JsonLd data={organizationGraph()} />
      </body>
    </html>
  );
}
