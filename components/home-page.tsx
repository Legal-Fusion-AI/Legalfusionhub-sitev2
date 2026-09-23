import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { JourneyBoard } from "@/components/journey-board";
import { JourneyProcess } from "@/components/journey-process";
import coloredLogo from "@/coloredlogo.png";

const faqs = [
  {
    question: "How do the call and the consultation stay together?",
    answer:
      "Legal Fusion Hub answers calls 24/7, handles inquiries, and captures the lead. It then qualifies by your criteria, follows up, schedules consultations, and helps convert bankruptcy leads into retained clients.",
  },
  {
    question: "Is this only for bankruptcy firms?",
    answer:
      "Hub is built to convert bankruptcy leads into retained clients. Legal Fusion Portal continues that work with questionnaires, documents, case data, and bankruptcy forms.",
  },
  {
    question: "What happens after a client is retained?",
    answer:
      "Legal Fusion Portal is where the firm and the client continue: questionnaires, documents, case data, and bankruptcy forms.",
  },
  {
    question: "What will the demo cover?",
    answer:
      "Your demo is a look at the complete client journey for your firm: how Hub answers calls, how leads become consultations, and how Portal carries the matter after the client is retained.",
  },
];

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="shell hero-stack">
          <Link className="hero-pill" href="/how-it-works">
            <Image className="hero-pill-mark" src={coloredLogo} alt="" />
            <span className="hero-pill-ai">AI</span> systems for a stronger practice
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <h1>
            One company.
            <span className="hero-title-line">A complete client journey.</span>
          </h1>
          <p>
            Legal Fusion Hub connects how your firm answers every call, turns
            bankruptcy leads into retained clients, and keeps serving them.
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

      <section className="section products-section" id="products">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>Follow the inquiry from call to matter.</h2>
            <p>
              Hub answers, qualifies, and books. Portal is where the firm and
              the client continue.
            </p>
          </div>
          <JourneyProcess />
        </div>
      </section>

      <section className="section problem-section">
        <div className="shell problem-grid">
          <div className="section-heading">
            <h2>The journey breaks when each step lives somewhere else.</h2>
          </div>
          <div className="problem-copy">
            <p>
              A call goes unanswered. A lead never becomes a consultation. After
              someone hires the firm, the tools for serving that client sit in
              another place entirely.
            </p>
            <p>
              One company covers the path. Legal Fusion Hub answers the call
              and turns bankruptcy leads into retained clients. Legal Fusion
              Portal is where the firm and the client continue.
            </p>
            <div className="problem-equation" aria-label="Client journey">
              <span>Engage</span>
              <b>+</b>
              <span>Acquire</span>
              <b>+</b>
              <span>Serve</span>
              <b>=</b>
              <strong>a complete client journey</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section journey-section" id="journey">
        <div className="shell journey-layout">
          <div className="journey-copy">
            <h2>Watch one inquiry move across the company.</h2>
            <p>
              Hub answers the call and books the consultation. Legal Fusion
              Portal covers what comes after a client is retained.
            </p>
            <Link className="inline-link" href="/how-it-works">
              Explore the journey <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <JourneyBoard compact />
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <h2>Questions before the conversation.</h2>
            <p>
              Your demo is a look at the complete client journey for your
              firm—not a tour of a single tool.
            </p>
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
            <h2>More than software. A stronger tomorrow for law firms.</h2>
            <p>
              See how one company covers the journey from the first call to a
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
