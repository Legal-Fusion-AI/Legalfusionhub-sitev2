import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, FolderOpen, ListChecks, PhoneIncoming } from "lucide-react";
import { JourneyBoard } from "@/components/journey-board";
import { JourneyProcess } from "@/components/journey-process";
import { ProblemScenes } from "@/components/problem-scenes";
import { ProductScreen } from "@/components/product-screen";
import { ShowcaseVisibility } from "@/components/showcase-visibility";
import coloredLogo from "@/coloredlogo.png";
import engageWallpaper from "@/public/wallpapers/engage.webp";
import acquireWallpaper from "@/public/wallpapers/acquire.webp";
import serveWallpaper from "@/public/wallpapers/serve.webp";

// TODO(copy): FAQ answers are placeholders until real objection copy is written.
const faqs = [
  {
    question: "Does Hub replace my intake staff?",
    answer: "[PLACEHOLDER: answer — Hub supports intake; it does not replace the firm’s staff.]",
  },
  {
    question: "How does Hub know my firm’s qualification criteria?",
    answer: "[PLACEHOLDER: answer — the firm sets the criteria Hub uses to qualify a lead.]",
  },
  {
    question: "What happens when someone calls outside office hours?",
    answer: "[PLACEHOLDER: answer — Hub answers 24/7 and captures the inquiry.]",
  },
  {
    question: "How long does setup take?",
    answer: "[PLACEHOLDER: answer — setup timeline, covered in the demo.]",
  },
  {
    question: "Do I have to use Portal to use Hub?",
    answer: "[PLACEHOLDER: answer — Hub and Portal are separate parts of the journey.]",
  },
  {
    question: "What does it cost?",
    answer:
      "[PLACEHOLDER: answer — pricing is covered in the demo. No public pricing.]",
  },
];

const showcases = [
  {
    id: "engage",
    verb: "Engage.",
    caption: "Hub answers the call 24/7, handles the inquiry, and captures the lead.",
    icon: PhoneIncoming,
    wallpaper: engageWallpaper,
    bleed: "none",
    href: "/how-it-works",
  },
  {
    id: "acquire",
    verb: "Acquire.",
    caption: "Hub qualifies by your criteria, follows up, and books the consultation.",
    icon: ListChecks,
    wallpaper: acquireWallpaper,
    bleed: "none",
    href: "/how-it-works",
  },
  {
    id: "serve",
    verb: "Serve.",
    caption:
      "After a client is retained, Portal carries the questionnaire, documents, case data, and forms.",
    icon: FolderOpen,
    wallpaper: serveWallpaper,
    bleed: "right",
    href: "/portal",
  },
] as const;

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="shell hero-stack">
          <Link className="hero-pill" href="/how-it-works">
            <Image className="hero-pill-mark" src={coloredLogo} alt="" />
            Technology for a stronger practice
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

      <section className="proof-band">
        <div className="shell proof-grid">
          <p>
            <strong>Built inside a bankruptcy practice</strong>
            <span>Where the company started</span>
          </p>
          <p>
            <strong>8,000+</strong>
            <span>bankruptcy cases filed</span>
          </p>
          <p>
            <strong>24+ years</strong>
            <span>of legal practice</span>
          </p>
          <p>
            <strong>One company</strong>
            <span>a complete client journey</span>
          </p>
        </div>
      </section>

      <section className="section problem-section">
        <div className="shell">
          <div className="problem-heading">
            <h2>Where clients slip away.</h2>
          </div>
          <ProblemScenes />
        </div>
      </section>

      <section className="section product-cards-section" id="products">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>One company. Three parts of the journey.</h2>
            <p>
              Hub engages the call and acquires the client. Portal is where the
              firm and the client continue.
            </p>
          </div>
          <ShowcaseVisibility>
            {showcases.map((item) => {
              const Icon = item.icon;
              return (
                <article className="showcase" key={item.id}>
                  <Link
                    className="showcase-card"
                    data-bleed={item.bleed}
                    href={item.href}
                    aria-label={`${item.verb} ${item.caption}`}
                  >
                    <Image
                      src={item.wallpaper}
                      alt=""
                      fill
                      sizes="(max-width: 1020px) 100vw, 33vw"
                    />
                    <ProductScreen kind={item.id} />
                  </Link>
                  <p className="showcase-caption">
                    <Icon size={16} aria-hidden="true" />
                    <span>
                      <strong>{item.verb}</strong> {item.caption}
                    </span>
                  </p>
                </article>
              );
            })}
          </ShowcaseVisibility>
        </div>
      </section>

      <section className="section products-section">
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
