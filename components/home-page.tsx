import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AiEmployees } from "@/components/ai-employees";
import { DemoCta } from "@/components/demo-cta";
import { Examples } from "@/components/examples";
import { JourneyBoard } from "@/components/journey-board";
import { Pipeline } from "@/components/pipeline";
import { ProblemScenes } from "@/components/problem-scenes";
import { SuccessStories } from "@/components/success-stories";
import coloredLogo from "@/coloredlogo.png";
import { siteConfig } from "@/lib/site-config";

const proof = [
  { stat: "4,681", label: "calls answered, none sent to voicemail" },
  { stat: "2.4 sec", label: "average pickup, versus 25 to 35 seconds for a person" },
  { stat: "56", label: "consultations booked by our AI" },
  { stat: "390", label: "staff hours reclaimed" },
];

const faqs = [
  {
    question: "Do you replace my intake staff or attorneys?",
    answer:
      "No. We answer the call, qualify the lead, and book the consultation. Your team meets the client and decides who the firm retains. We do not replace your attorneys or your staff.",
  },
  {
    question: "How do you know my firm's criteria?",
    answer:
      "Your firm sets them. We qualify bankruptcy leads by your criteria, follow up, and book the consultation.",
  },
  {
    question: "What happens when someone calls after hours?",
    answer:
      "We still answer. A call at 4 a.m. is handled the same way as one at 2 p.m. The lead is captured and the consultation gets booked.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Setup is light. We start with your firm name, a greeting, and your slogan. We tune the rest with you on the demo.",
  },
  {
    question: "Do you gather case details before the consultation?",
    answer:
      "Yes. We gather a few details so the attorney can weigh Chapter 7 against other options before the meeting. That is to help the attorney, not to qualify the lead.",
  },
  {
    // TODO(copy): Jeff to confirm pricing wording.
    question: "What does it cost?",
    answer:
      "Pricing fits how your firm works: a monthly subscription, or pay per retained client instead of paying for leads that never sign. We walk through both on your demo.",
  },
];

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="shell hero-stack">
          <Link className="hero-pill" href="/how-it-works">
            <Image className="hero-pill-mark" src={coloredLogo} alt="" />
            Bankruptcy intake, answered 24/7
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <h1>
            Answer every call.
            <span className="hero-title-line">Book more consultations.</span>
          </h1>
          <p className="hero-lede">{siteConfig.positioning}</p>
          <p>
            In a 90-day pilot we answered 4,681 calls. None went to voicemail.
            Average pickup was 2.4 seconds.
          </p>
          <div className="hero-actions">
            <Link className="button button-accent" href="/demo">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
      <div className="shell hero-stage">
        <JourneyBoard />
      </div>

      <section className="proof-band">
        <div className="shell">
          <div className="proof-grid">
            {proof.map((item) => (
              <p key={item.label}>
                <strong>{item.stat}</strong>
                <span>{item.label}</span>
              </p>
            ))}
          </div>
          <p className="proof-source">
            Morrison Law Group. 90-day pilot, June 12 to September 9, 2026.
          </p>
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

      <section className="section examples-section" id="products">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>See it in action.</h2>
            <p>
              Click any feature to open a short real-life example. Each clip
              stays under 15 seconds, split by what is happening: the greeting,
              gathering information, and booking the time.
            </p>
          </div>
          <Examples />
          <DemoCta lead="Bring one recent call or text to the demo. We will show it answered." />
        </div>
      </section>

      <section className="section pipeline-section">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>Follow every lead through the pipeline.</h2>
            <p>
              A lead moves from New to Retained. Missed appointments and no-shows
              move into Nurture, so nobody is forgotten.
            </p>
          </div>
          <Pipeline />
          <p className="pipeline-aside">
            Before the consultation we gather a few details so the attorney can
            weigh Chapter 7 against other options. That is to help the attorney,
            not to qualify the lead.
          </p>
          <DemoCta lead="From the first call to a retained client." />
        </div>
      </section>

      <section className="section employees-section">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>Meet Owen and Donna.</h2>
            <p>
              Our AI employees carry the moments that used to slip. They work
              around your team, not in place of it.
            </p>
          </div>
          <AiEmployees />
        </div>
      </section>

      <section className="section stories-section">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>What founding firms say.</h2>
            <p>
              We are gathering stories from our 10 founding firms. Their words
              will live here.
            </p>
          </div>
          <SuccessStories />
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
    </main>
  );
}
