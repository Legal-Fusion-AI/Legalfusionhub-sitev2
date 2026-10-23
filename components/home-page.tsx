import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { CallSample } from "@/components/call-sample";
import { DemoCta } from "@/components/demo-cta";
import { JourneyProcess } from "@/components/journey-process";
import { MeetAis } from "@/components/meet-ais";
import { NeverAnswers } from "@/components/never-answers";
import { ProblemScenes } from "@/components/problem-scenes";
import { faqs } from "@/lib/homepage";
import { siteConfig } from "@/lib/site-config";
import coloredLogo from "@/coloredlogo.png";

const roles = [
  { name: "Donna", role: "Intake" },
  { name: "Nikki", role: "Follow-up" },
  { name: "Sofia", role: "Spanish intake" },
] as const;

const proof = [
  { strong: "Built inside a bankruptcy practice", span: "Where the company started" },
  { strong: "10,000+", span: "bankruptcy cases filed" },
  { strong: "24+ years", span: "of legal practice" },
  { strong: "Morrison Law Group", span: "client" },
] as const;

export function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main>
      <section className="hero">
        <div className="shell hero-stack">
          <p className="hero-pill">
            <Image className="hero-pill-mark" src={coloredLogo} alt="" />
            Retainer Pro · by Legal Fusion Hub
          </p>
          <h1>The AI receptionist for consumer bankruptcy firms.</h1>
          <p>
            Donna answers every call, text, and web form. Nikki follows up
            until the consultation is booked. Sofia handles Spanish intake.
            Your attorneys handle the law.
          </p>
          <ul className="hero-roles">
            {roles.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </li>
            ))}
          </ul>
          <div className="hero-actions">
            <Link className="button button-accent" href={siteConfig.demoPath}>
              Book a demo
            </Link>
          </div>
          <p className="hero-helper">Bring one recent inquiry.</p>
          <p className="hero-disclosure">
            Callers are told they are speaking with an AI assistant. Your firm
            approves the greeting.
          </p>
        </div>
      </section>

      <section className="proof-band">
        <div className="shell proof-grid">
          {proof.map((item) => (
            <p key={item.strong}>
              <strong>{item.strong}</strong>
              <span>{item.span}</span>
            </p>
          ))}
        </div>
      </section>

      <CallSample />

      <section className="section problem-section" id="slip-aways">
        <div className="shell">
          <div className="problem-heading">
            <h2>Where bankruptcy inquiries slip away.</h2>
          </div>
          <ProblemScenes />
        </div>
      </section>

      <section className="section products-section" id="journey">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>From the first bankruptcy call to a retained client.</h2>
            <p>
              Retainer Pro answers, qualifies by your criteria, books the
              consult, and follows up when someone misses — so more inquiries
              become clients your team chooses to retain.
            </p>
          </div>
          <JourneyProcess />
        </div>
      </section>

      <section className="section product-cards-section" id="meet-ais">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>Meet Donna, Nikki, and Sofia.</h2>
            <p>
              They work around your team, not in place of it. Callers hear
              that they are speaking with an AI assistant.
            </p>
          </div>
          <MeetAis />
        </div>
      </section>

      <NeverAnswers />

      <section className="section faq-section" id="faq">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <h2>Questions before the conversation.</h2>
            <p>
              Your demo shows how your firm turns inquiries into retained
              clients. Bring one recent inquiry.
            </p>
            <DemoCta />
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
              See how Retainer Pro takes a bankruptcy inquiry from the first
              call to a consultation your team can close.
            </p>
          </div>
          <div className="closing-actions">
            <Link className="button" href={siteConfig.demoPath}>
              Book a demo <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <p className="hero-helper">Bring one recent inquiry.</p>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
