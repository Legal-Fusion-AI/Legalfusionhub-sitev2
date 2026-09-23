import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Legal Fusion Hub home">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span>
        Legal Fusion <strong>Hub</strong>
      </span>
    </Link>
  );
}

const links = [
  { href: "/#system", label: "The system" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="portal-link"
            href="https://file.legalfusionhub.com"
            target="_blank"
            rel="noreferrer"
          >
            Portal login <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <Link className="button button-small" href="/demo">
            Book a demo
          </Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <Menu size={22} aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <a href="https://file.legalfusionhub.com">Portal login</a>
            <Link className="button" href="/demo">
              Book a demo
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
