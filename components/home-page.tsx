import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AiEmployees } from "@/components/ai-employees";
import { BuiltForBankruptcy } from "@/components/built-for-bankruptcy";
import { CallLine } from "@/components/call-line";
import { CallAudio } from "@/components/call-audio";
import { CallTranscript } from "@/components/call-transcript";
import { DemoCta } from "@/components/demo-cta";
import { FounderBand } from "@/components/founder-band";
import { HeroActions } from "@/components/hero-actions";
import { JourneyBoard } from "@/components/journey-board";
import { JourneyProcess } from "@/components/journey-process";
import { JsonLd } from "@/components/json-ld";
import { ProblemScenes } from "@/components/problem-scenes";
import { StickyDemoBar } from "@/components/sticky-demo-bar";
import { TeamStrip } from "@/components/team-strip";
import theronPortrait from "@/public/team/theron-portrait.jpg";
import { demoCall, demoCallTurns } from "@/lib/demo-call";
import { faqs } from "@/lib/faqs";
import { morrisonProof } from "@/lib/proof";
import { audioObjectJsonLd, faqPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-top">
            <div className="hero-copy">
              <p className="hero-eyebrow"><i aria-hidden="true" />{siteConfig.tagline}</p>
              <h1>
                From the first call to a <em>retained client.</em>
              </h1>
              <p className="hero-subhead">
                <strong>Never miss another potential client.</strong> Donna
                answers every call, Nikki responds instantly to texts and web
                inquiries, and together they keep your intake running 24/7,
                from the first conversation to a booked consultation and
                through retention.
              </p>
              <HeroActions />
            </div>
            <div
              className="hero-proof-card"
              aria-label={`${morrisonProof.firm} pilot results, ${morrisonProof.range}`}
            >
              <div className="hero-proof-head">
                <Image src={theronPortrait} alt="" width={44} height={44} sizes="44px" />
                <div>
                  <b>{morrisonProof.firm}</b>
                  <span>Donna&apos;s first 90 days, {morrisonProof.range}</span>
                </div>
              </div>
              <ul>
                {morrisonProof.stats.map((item) => (
                  <li key={item.label}>
                    <strong>{item.stat}</strong>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
              <p>Not one call went to voicemail.</p>
            </div>
          </div>
          <CallLine />
        </div>
      </section>
      <StickyDemoBar />

      <div className="shell hero-stage">
        <JourneyBoard />
      </div>

      <section className="section call-section" id="hear-a-real-call">
        <div className="shell call-grid">
          <div className="call-intro">
            <h2>Hear what your callers will hear.</h2>
            <p>
              Two minutes and fifty-five seconds, start to finish. The caller
              is told they&apos;re speaking with the firm&apos;s virtual
              intake assistant, answers the firm&apos;s qualifying questions,
              and leaves with a consultation on the calendar.
            </p>
            <p className="call-intro-note">
              This recording has been redacted to protect the caller&apos;s
              privacy.
            </p>
            <blockquote className="call-pullquote">
              <b>&ldquo;He thought he was talking to a real person.&rdquo;</b>
              <small>
                From a published Morrison Law Group case study, where the
                intake assistant hands a new lead to the team.
              </small>
            </blockquote>
          </div>
          <div className="call-media">
            <CallAudio
              src={demoCall.src}
              captions={demoCall.captions}
              turns={demoCallTurns}
              durationSeconds={demoCall.durationSeconds}
              tag={`Real call · ${demoCall.durationLabel}`}
            />
            <CallTranscript turns={demoCallTurns} />
          </div>
        </div>
      </section>

      <FounderBand />
      <TeamStrip />

      <section className="section problem-section" id="why-use-ai">
        <div className="shell">
          <div className="problem-heading">
            <h2>Where clients slip away.</h2>
          </div>
          <ProblemScenes />
        </div>
      </section>

      <section className="section how-section" id="how-it-works-overview">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>Follow the inquiry from call to retained client.</h2>
            <p>
              Retainer Pro answers, qualifies, and books the consultation.
            </p>
          </div>
          <JourneyProcess />
          <DemoCta lead="Tap the first step to watch a real lead become a retained client." />
        </div>
      </section>

      <section className="section employees-section">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>Meet Donna and Nikki.</h2>
            <p>
              {siteConfig.positioning} They work around your team, not in place
              of it. Callers are told they are speaking with an AI assistant.
              Your firm approves the greeting. Sofia answers Spanish-language
              intake the same way.
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
                  <Link className="button button-accent faq-cta" href={siteConfig.bookPath}>
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
          <Link className="button" href={siteConfig.bookPath}>
            Book a demo <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <JsonLd data={faqPageJsonLd()} />
      <JsonLd data={audioObjectJsonLd(demoCallTurns)} />
    </main>
  );
}
