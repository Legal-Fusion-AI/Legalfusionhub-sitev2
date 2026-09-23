import Link from "next/link";
import { Brand } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <Brand />
          <p>
            Technology for a stronger practice. One company. A complete client
            journey.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/#products">Products</Link>
          <Link href="/portal">Portal</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/about">About</Link>
          <Link href="/demo">Book a demo</Link>
        </div>
        <div>
          <h2>Products</h2>
          <Link href="/#products">Legal Fusion Hub</Link>
          <span>Engage and acquire</span>
          <Link href="/portal">Legal Fusion Portal</Link>
          <span>Serve, manage, and grow</span>
        </div>
        <div>
          <h2>Legal</h2>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:info@legalfusion.ai">info@legalfusion.ai</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Legal Fusion Hub</span>
        <span>For law firms. We do not provide legal advice.</span>
      </div>
    </footer>
  );
}
