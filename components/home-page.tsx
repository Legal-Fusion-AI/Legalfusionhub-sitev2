import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AiTeam } from "@/components/ai-team";
import { BuiltForBankruptcy } from "@/components/built-for-bankruptcy";
import { CallLine } from "@/components/call-line";
import { CallAudio } from "@/components/call-audio";
import { CallTranscript } from "@/components/call-transcript";
import { ClosingBand } from "@/components/closing-band";
import { DemoCta } from "@/components/demo-cta";
import { FounderBand } from "@/components/founder-band";
import { HeroActions } from "@/components/hero-actions";
import { JourneyBoard } from "@/components/journey-board";
import { JourneyProcess } from "@/components/journey-process";
import { NikkiChats } from "@/components/nikki-chats";
import { JsonLd } from "@/components/json-ld";
import BlurText from "@/components/react-bits/BlurText";
import { Reveal } from "@/components/reveal";
import { StatCount } from "@/components/stat-count";
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
                <BlurText
                  as="span"
                  text="From the first call to a"
                  trigger="load"
                  animateBy="words"
                  delay={90}
                  stepDuration={0.32}
                  blur={8}
                  distance={18}
                />{" "}
                <BlurText
                  as="span"
                  className="hero-h1-accent"
                  text="retained client."
                  trigger="load"
                  animateBy="words"
                  delay={90}
                  startDelay={420}
                  stepDuration={0.32}
                  blur={8}
                  distance={18}
                />
              </h1>
              <p className="hero-subhead">
                <strong>Never miss another potential client.</strong> Donna
                answers every call. Nikki responds instantly to texts and web
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
                  <span>First 90 days, {morrisonProof.range}</span>
                </div>
              </div>
              <ul>
                {morrisonProof.stats.map((item, index) => (
                  <li key={item.label}>
                    <strong>
                      <StatCount value={item.stat} delay={0.1 * index} />
                    </strong>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <CallLine />
        </div>
      </section>
      <StickyDemoBar />

      <div className="shell hero-stage">
        <JourneyBoard />
        <NikkiChats />
      </div>

      <section className="section call-section" id="hear-a-real-call">
        <div className="shell call-grid">
          <Reveal className="call-intro">
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
          </Reveal>
          <Reveal className="call-media" delay={0.12}>
            <CallAudio
              src={demoCall.src}
              captions={demoCall.captions}
              turns={demoCallTurns}
              durationSeconds={demoCall.durationSeconds}
              tag={`Real call · ${demoCall.durationLabel}`}
            />
            <CallTranscript turns={demoCallTurns} />
          </Reveal>
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

      <section className="section meet-section" aria-labelledby="meet-heading">
        <div className="shell">
          <Reveal className="meet-head">
            <h2 id="meet-heading">Meet Donna and Nikki.</h2>
            <p>
              Two AI employees with one job: make sure nobody who reaches out
              to your firm gets lost. Donna takes the calls. Nikki takes the
              texts and web inquiries and follows up. Both speak English and
              Spanish, and they work around your team, not in place of it.
            </p>
          </Reveal>
          <AiTeam />
          <p className="meet-note">
            Callers are told they are speaking with an AI assistant, and your
            firm approves the greeting before anyone hears it.
          </p>
        </div>
      </section>

      <section className="section bankruptcy-section" aria-labelledby="bankruptcy-heading">
        <div className="shell">
          <Reveal className="lower-head">
            <h2 id="bankruptcy-heading">Built for bankruptcy firms, and only bankruptcy firms.</h2>
            <p>
              Donna handles consumer bankruptcy intake. She collects what your
              attorney needs and leaves the legal judgment to your team.
            </p>
          </Reveal>
          <BuiltForBankruptcy />
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-heading">
        <div className="shell">
          <Reveal className="faq-head">
            <h2 id="faq-heading">Questions before the conversation.</h2>
            <div>
              <p>
                The ones firms ask us first. Bring one recent inquiry to the
                demo and we&apos;ll walk through exactly how it would have gone.
              </p>
            </div>
          </Reveal>
          <Reveal className="faq-list faq-columns" delay={0.1}>
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
          </Reveal>
        </div>
      </section>

      <ClosingBand />
      <JsonLd data={faqPageJsonLd()} />
      <JsonLd data={audioObjectJsonLd(demoCallTurns)} />
    </main>
  );
}
