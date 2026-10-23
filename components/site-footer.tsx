import Link from "next/link";
import { Brand } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <Brand />
          <p>
            Retainer Pro is a product of Legal Fusion Hub.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/#meet-ais">Meet the AIs</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/about">About</Link>
          <Link href="/demo">Book a demo</Link>
        </div>
        <div>
          <h2>Product</h2>
          <Link href="/">Retainer Pro</Link>
          <span>by Legal Fusion Hub</span>
        </div>
        <div>
          <h2>Legal</h2>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:jeff@legalfusionhub.com">jeff@legalfusionhub.com</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>Retainer Pro is a product of Legal Fusion Hub.</span>
        <span>
          <a href="mailto:jeff@legalfusionhub.com">jeff@legalfusionhub.com</a>
          {" · "}
          <Link href="/privacy">Privacy</Link>
          {" · "}
          <Link href="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}
