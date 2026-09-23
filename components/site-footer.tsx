import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <Brand />
          <p>
            Done-for-you client acquisition for bankruptcy law firms. Built by
            legal professionals who understand the work after the lead arrives.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/#system">The system</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/about">About</Link>
          <Link href="/demo">Book a demo</Link>
        </div>
        <div>
          <h2>Product family</h2>
          <a href="https://file.legalfusionhub.com">
            Legal Fusion Portal <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <span>Bankruptcy filing application</span>
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
