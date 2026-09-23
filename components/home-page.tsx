import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  MessagesSquare,
  PhoneCall,
  RefreshCw,
  ShieldCheck,
  Signature,
} from "lucide-react";
import { JourneyBoard } from "@/components/journey-board";

const operations = [
  {
    name: "Answer",
    title: "No lead waits for business hours.",
    text: "Calls and inquiries receive an immediate, professional response 24/7.",
    icon: PhoneCall,
  },
  {
    name: "Qualify",
    title: "Your criteria guide the conversation.",
    text: "Hub captures the facts your team needs before a consultation reaches the calendar.",
    icon: MessagesSquare,
  },
  {
    name: "Book",
    title: "Qualified prospects choose a real time.",
    text: "Scheduling, confirmations, and reminders happen inside one managed flow.",
    icon: CalendarDays,
  },
  {
    name: "Nurture",
    title: "Not-ready does not mean lost.",
    text: "Thoughtful follow-up keeps your firm present across the 30, 60, or 90-day decision.",
    icon: RefreshCw,
  },
  {
    name: "Sign",
    title: "The next step is already waiting.",
    text: "Digital intake and signing reduce the gaps between a good consultation and an active client.",
    icon: Signature,
  },
];

const faqs = [
  {
    question: "How is this different from intake software?",
    answer:
      "Software gives your team another login and another system to configure. Legal Fusion Hub is done for you: we design the journey, build the workflows, connect the tools, and manage the system after launch.",
  },
  {
    question: "Is Legal Fusion Hub only for bankruptcy firms?",
    answer:
      "This version is purpose-built for bankruptcy practices. The questions, timing, handoffs, and operating context come from experience inside a high-volume bankruptcy firm.",
  },
  {
    question: "Will we need to replace our current tools?",
    answer:
      "Usually, no. Hub is designed to work around the systems your firm already relies on. We map the right integration plan during the demo and discovery process.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "The exact timing depends on your phone, calendar, CRM, intake requirements, and the approvals your firm needs. We map the implementation sequence and timing after reviewing your current process.",
  },
  {
    question: "What happens when automation should not answer?",
    answer:
      "Your rules define the handoff. Sensitive, urgent, unusual, or explicitly requested human conversations can route to your team with the context already collected.",
  },
];

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-signal" aria-hidden="true">
          <span />
        </div>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>
              Every lead answered.
              <br />
              Every next step handled.
            </h1>
            <p>
              Legal Fusion Hub is the done-for-you client acquisition system
              for bankruptcy law firms—from first ring to booked consultation
              and beyond.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/demo">
                Book a demo <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a className="text-link" href="#journey">
                See the journey <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-note">
              <ShieldCheck size={17} aria-hidden="true" />
              Designed, built, and managed for your firm.
            </div>
          </div>
          <div className="hero-board">
            <JourneyBoard />
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Practice experience">
        <div className="shell proof-grid">
          <p>
            <strong>Built inside</strong>
            <span>a real bankruptcy practice</span>
          </p>
          <p>
            <strong>8,000+</strong>
            <span>cases filed</span>
          </p>
          <p>
            <strong>24+ years</strong>
            <span>of legal practice</span>
          </p>
          <p>
            <strong>24/7</strong>
            <span>lead response</span>
          </p>
        </div>
      </section>

      <section className="section problem-section">
        <div className="shell problem-grid">
          <div className="section-heading">
            <h2>You do not have a lead problem. You have a handoff problem.</h2>
          </div>
          <div className="problem-copy">
            <p>
              A prospect calls after hours. A follow-up sits until tomorrow.
              Intake notes live in one place while the calendar lives in
              another. Each small gap gives a ready-to-hire client time to call
              the next firm.
            </p>
            <p>
              Hub connects those moments into one managed journey—without
              asking your staff to become automation architects.
            </p>
            <div className="problem-equation" aria-label="Acquisition equation">
              <span>Fast response</span>
              <b>+</b>
              <span>consistent follow-up</span>
              <b>=</b>
              <strong>more real consultations</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section system-section" id="system">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>One operated system, not a pile of tools.</h2>
            <p>
              Each capability has one job. Together, they keep momentum from
              the first response through the firm’s next human conversation.
            </p>
          </div>
          <div className="operations-list">
            {operations.map((item) => {
              const Icon = item.icon;
              return (
                <article className="operation-row" key={item.name}>
                  <div className="operation-name">
                    <span>
                      <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    {item.name}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Check className="operation-check" size={18} aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section journey-section" id="journey">
        <div className="shell journey-layout">
          <div className="journey-copy">
            <h2>Watch one inquiry become a prepared consultation.</h2>
            <p>
              Click each stage. The information keeps moving, the next action
              stays owned, and your team receives the context—not another loose
              notification.
            </p>
            <Link className="inline-link" href="/how-it-works">
              Explore how implementation works{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <JourneyBoard compact />
        </div>
      </section>

      <section className="section managed-section">
        <div className="shell managed-grid">
          <div className="managed-intro">
            <h2>We do the systems work. Your team practices law.</h2>
            <p>
              Hub is a managed engagement, not a software handoff. We start
              with how your firm actually operates, then stay accountable for
              what happens after launch.
            </p>
          </div>
          <ol className="managed-steps">
            <li>
              <span>Discover</span>
              <div>
                <h3>Map where good leads lose momentum.</h3>
                <p>
                  We review channels, call handling, intake criteria, calendars,
                  tools, and handoffs.
                </p>
              </div>
            </li>
            <li>
              <span>Build</span>
              <div>
                <h3>Connect one firm-specific journey.</h3>
                <p>
                  We configure the conversations, automations, integrations,
                  and escalation rules.
                </p>
              </div>
            </li>
            <li>
              <span>Manage</span>
              <div>
                <h3>Improve what happens in the real world.</h3>
                <p>
                  We monitor performance and adjust the system as your firm,
                  market, and lead flow change.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <h2>Questions before the conversation.</h2>
            <p>
              Your demo is a working session about your lead flow—not a generic
              software tour.
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
            <h2>See where your next client journey breaks—and how to fix it.</h2>
            <p>Thirty minutes. Your lead flow. A system designed around your firm.</p>
          </div>
          <Link className="button" href="/demo">
            Book a demo <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
