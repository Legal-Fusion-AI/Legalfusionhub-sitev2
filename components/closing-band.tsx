import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { phoneTelHref, siteConfig } from "@/lib/site-config";

type ClosingBandProps = {
  /** Supporting sentence under the headline. */
  lead?: string;
};

/**
 * The page-ending promise with both calls to action and the demo line.
 * Shared by the homepage and the inner pages so every page closes the same way.
 */
export function ClosingBand({
  lead = "See how we take a bankruptcy inquiry from the first call to a retained client. Or skip the demo and call Donna yourself.",
}: ClosingBandProps) {
  return (
    <section className="closing-band" aria-labelledby="closing-heading">
      <div className="shell closing-band-inner">
        <Reveal>
          <p className="closing-kicker">The whole promise</p>
          <h2 id="closing-heading">Every call answered. More clients retained.</h2>
          <p className="closing-sub">{lead}</p>
          <div className="closing-actions">
            <Link className="button" href={siteConfig.bookPath}>
              Book a demo <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a className="button button-outline" href={phoneTelHref(siteConfig.DEMO_LINE)}>
              <Phone size={17} aria-hidden="true" />
              Try Donna now
            </a>
          </div>
          <p className="closing-line">
            Or call {siteConfig.DEMO_LINE.replace(/^\+1 /, "")} from your phone.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
