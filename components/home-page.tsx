import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AiEmployees } from "@/components/ai-employees";
import { AndrewJourney } from "@/components/andrew-journey";
import { BuiltForBankruptcy } from "@/components/built-for-bankruptcy";
import { CallTranscript } from "@/components/call-transcript";
import { CallVideo } from "@/components/call-video";
import { DemoCta } from "@/components/demo-cta";
import { HeroActions } from "@/components/hero-actions";
import { JourneyBoard } from "@/components/journey-board";
import { JourneyProcess } from "@/components/journey-process";
import { JsonLd } from "@/components/json-ld";
import { Pipeline } from "@/components/pipeline";
import { ProblemScenes } from "@/components/problem-scenes";
import { StickyDemoBar } from "@/components/sticky-demo-bar";
import coloredLogo from "@/coloredlogo.png";
import { getCallTranscript } from "@/lib/call-transcript";
import { faqs } from "@/lib/faqs";
import { morrisonProof } from "@/lib/proof";
import { faqPageJsonLd, videoObjectJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const chips = [
  "24/7 calls, texts, forms",
  "2.4 s average pickup",
  "Books into your calendar",
];

export function HomePage() {
  const transcript = getCallTranscript();

  return (
    <main>
      <section className="hero">
        <div className="shell hero-layout">
          <div className="hero-copy">
            <Link className="hero-pill" href="/how-it-works">
              <Image className="hero-pill-mark" src={coloredLogo} alt="" />
              For consumer bankruptcy firms
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <h1>The AI receptionist for bankruptcy law firms.</h1>
            <p className="hero-subhead">
              Donna answers every call, text, and web form, day or night,
              qualifies by your criteria, and books the consultation. Nikki
              follows up until the client retains.
            </p>
            <HeroActions />
            <p className="hero-proof">{morrisonProof.heroLine}</p>
            <p className="hero-trust">
              Callers are told they are speaking with an AI assistant.
            </p>
          </div>
          <div className="hero-visual" id="hear-a-real-call">
            <div className="problem-video hero-video">
              <span className="problem-video-tag">
                Real call. No human touched it. 3:28.
              </span>
              <CallVideo />
            </div>
            <CallTranscript />
          </div>
          <ul className="hero-chips">
            {chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </div>
      </section>
      <StickyDemoBar />

      <section className="proof-band">
        <div className="shell">
          <div className="proof-grid">
            {morrisonProof.stats.map((item) => (
              <p key={item.label}>
                <strong>{item.stat}</strong>
                <span>{item.label}</span>
              </p>
            ))}
          </div>
          <p className="proof-source">{morrisonProof.sentence}</p>
        </div>
      </section>

      <section className="section problem-section">
        <div className="shell">
          <div className="problem-heading">
            <h2>Where clients slip away.</h2>
          </div>
          <ProblemScenes />
          <DemoCta lead="See how we answer the calls and texts that never reach your staff." />
        </div>
      </section>

      <section className="section how-section" id="how-it-works-overview">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>How it works.</h2>
            <p>
              Donna answers. We book the consultation. Nikki follows up until
              the client retains.
            </p>
          </div>
          <JourneyBoard compact />
          <div className="how-pipeline">
            <h3 className="how-subhead">Follow every lead through the pipeline.</h3>
            <p>
              A lead moves from New to Retained. Missed appointments and no-shows
              move into Nurture, so nobody is forgotten.
            </p>
            <Pipeline />
            <p className="pipeline-aside">
              Before the consultation we gather a few details so the attorney can
              weigh Chapter 7 against other options. That is to help the attorney,
              not to qualify the lead.
            </p>
          </div>
          <div className="how-journey">
            <h3 className="how-subhead">Follow the inquiry from call to retained client.</h3>
            <p>Hub answers, qualifies, and books the consultation.</p>
            <JourneyProcess />
          </div>
          <DemoCta lead="Tap the first step to watch a real lead become a retained client." />
        </div>
      </section>

      <section className="section examples-section" id="see-it-in-action">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>See it in action.</h2>
            <p>
              One real lead, start to finish. A Morrison Law Group client we
              will call Andrew found us at 4 a.m. and retained the firm the next
              day. Names and details are anonymized.
            </p>
          </div>
          <AndrewJourney />
          <DemoCta lead="Bring one recent call or text to the demo. We will show it answered." />
        </div>
      </section>

      <section className="section employees-section">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>Meet Donna and Nikki.</h2>
            <p>
              {siteConfig.positioning} They work around your team, not in place
              of it. Callers are told they are speaking with an AI assistant.
              Your firm approves the greeting.
            </p>
          </div>
          <AiEmployees />
        </div>
      </section>

      <section className="section bankruptcy-section">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>Built for bankruptcy firms.</h2>
            <p>
              Donna handles consumer bankruptcy intake. She collects what your
              attorney needs and leaves the legal judgment to your team.
            </p>
          </div>
          <BuiltForBankruptcy />
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <h2>Questions before the conversation.</h2>
            <p>Your demo shows how your firm turns calls into retained clients.</p>
            <DemoCta lead="Bring one recent inquiry to the demo." />
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown size={20} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
                {faq.cta ? (
                  <Link className="button button-accent faq-cta" href="/demo">
                    Book a demo
                  </Link>
                ) : null}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-route" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="shell closing-inner">
          <div>
            <h2>Every call answered. More clients retained.</h2>
            <p>
              See how we take a bankruptcy inquiry from the first call to a
              retained client.
            </p>
          </div>
          <Link className="button" href="/demo">
            Book a demo <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <JsonLd data={faqPageJsonLd()} />
      <JsonLd data={videoObjectJsonLd(transcript)} />
    </main>
  );
}
