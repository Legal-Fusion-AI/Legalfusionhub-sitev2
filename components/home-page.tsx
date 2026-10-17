import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AiEmployees } from "@/components/ai-employees";
import { AndrewJourney } from "@/components/andrew-journey";
import { DemoCta } from "@/components/demo-cta";
import { JourneyBoard } from "@/components/journey-board";
import { JourneyProcess } from "@/components/journey-process";
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

type Faq = {
  question: string;
  answer: string;
  cta?: boolean;
};

const faqs: Faq[] = [
  {
    question: "Do you replace my intake staff or attorneys?",
    answer:
      "No. We answer the call, qualify the lead, and book the consultation. Your team meets the client and decides who the firm retains. We do not replace your attorneys or your staff.",
  },
  {
    question: "How does setup work?",
    answer:
      "Setup is light. We start with a short questionnaire: your firm name, a greeting, and your slogan. We tune the rest with you. Most firms are live in about 5 business days.",
  },
  {
    question: "Does this work with my existing phone system?",
    answer:
      "Yes. You keep your current numbers and provider. We use conditional call forwarding, so calls route to us when you want them to. There is no system to replace.",
  },
  {
    question: "What counts as a lead?",
    answer:
      "A lead is a new prospective client who reaches out about bankruptcy and gives us enough to follow up: a name and a way to reach them. We capture it, qualify it by your criteria, and work to book the consultation.",
  },
  {
    question: "Do you offer Spanish support?",
    answer:
      "Yes. Sofia answers in Spanish, handles the inquiry, and books the consultation the same way, so Spanish-speaking callers get a real answer.",
  },
  {
    question: "Do callers know they are talking to an AI?",
    answer:
      "Yes. The greeting states that they are speaking with an AI assistant. We built this to respect bar rules on disclosure, and your firm reviews the greeting during setup.",
  },
  {
    question: "How do you know my firm's criteria?",
    answer:
      "Your firm sets them. We qualify bankruptcy leads by your criteria, follow up, and book the consultation.",
  },
  {
    question: "Do you gather case details before the consultation?",
    answer:
      "Yes. We gather a few details so the attorney can weigh Chapter 7 against other options before the meeting. That is to help the attorney, not to qualify the lead.",
  },
  {
    question: "What does it cost?",
    answer:
      "We walk through pricing on the demo, matched to how your firm works. Nothing to read into here.",
    cta: true,
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
              One real lead, start to finish. A Morrison Law Group client we
              will call Andrew found us at 4 a.m. and retained the firm the next
              day. Names and details are anonymized.
            </p>
          </div>
          <AndrewJourney />
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

      <section className="section products-section">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>Follow the inquiry from call to retained client.</h2>
            <p>Hub answers, qualifies, and books the consultation.</p>
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
    </main>
  );
}
