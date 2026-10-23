import Image from "next/image";
import theron from "@/public/team/theron-portrait.jpg";
import { morrisonProof } from "@/lib/proof";

/**
 * Built inside a real firm. Facts only: Theron's experience and the Morrison
 * pilot are already published on this site. His own words can be added as a
 * quote once he writes them.
 */
export function FounderBand() {
  return (
    <section className="founder" aria-labelledby="founder-heading">
      <div className="shell founder-inner">
        <figure className="founder-photo">
          <Image
            src={theron}
            alt="Theron Morrison, founding partner of Morrison Law Group"
            sizes="(max-width: 1020px) 100vw, 460px"
            placeholder="blur"
          />
          <figcaption>
            <b>Theron Morrison</b>
            Founder, Morrison Law Group
          </figcaption>
        </figure>
        <div className="founder-copy">
          <p className="founder-kicker">Built inside a real firm</p>
          <h2 id="founder-heading">
            Donna answered Theron&apos;s phones before she answered anyone
            else&apos;s.
          </h2>
          <p>
            Retainer Pro was built inside {morrisonProof.firm}, one of the
            largest bankruptcy firms in Utah. Theron has practiced bankruptcy
            law for 24 years. For 90 days, Donna handled the firm&apos;s own
            intake before we offered her to anyone else.
          </p>
          <dl className="founder-stats">
            <div>
              <dt>in bankruptcy law</dt>
              <dd>24 years</dd>
            </div>
            <div>
              <dt>bankruptcy cases filed</dt>
              <dd>10,000+</dd>
            </div>
            <div>
              <dt>on his own phones first</dt>
              <dd>90 days</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
