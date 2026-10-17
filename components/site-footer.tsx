import Link from "next/link";
import { Brand } from "@/components/site-header";
import { productLineName, productLineUrl, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <Brand />
          <p>
            {siteConfig.tagline}. From the first call to a retained client.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/#products">Products</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/about">About</Link>
          <Link href="/demo">Book a demo</Link>
        </div>
        <div>
          <h2>Products</h2>
          <Link href="/#products">Legal Fusion Hub</Link>
          <a href={productLineUrl}>
            {productLineName()}, our intake and retention product line
          </a>
        </div>
        <div>
          <h2>Legal</h2>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Legal Fusion Hub</span>
        <span>For law firms. We do not provide legal advice.</span>
      </div>
    </footer>
  );
}
