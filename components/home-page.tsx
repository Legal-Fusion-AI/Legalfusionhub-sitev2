import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, ListChecks, MessageSquareText, PhoneIncoming } from "lucide-react";
import { CallSample } from "@/components/call-sample";
import { DemoCta } from "@/components/demo-cta";
import { JourneyBoard } from "@/components/journey-board";
import { JourneyProcess } from "@/components/journey-process";
import { ProblemScenes } from "@/components/problem-scenes";
import { ProductScreen } from "@/components/product-screen";
import { ShowcaseVisibility } from "@/components/showcase-visibility";
import coloredLogo from "@/coloredlogo.png";
import engageWallpaper from "@/public/wallpapers/engage.webp";
import serveWallpaper from "@/public/wallpapers/serve.webp";
import acquireWallpaper from "@/public/wallpapers/acquire.webp";

const faqs = [
  {
    question: "Does Hub replace my intake staff?",
    answer:
      "No. Hub answers the call, qualifies the lead, and books the consultation. Your staff still meets the client and decides who the firm retains.",
  },
  {
    question: "How does Hub know my firm’s qualification criteria?",
    answer:
      "Your firm sets them. Hub uses those criteria to qualify a bankruptcy lead, follow up, and book the consultation.",
  },
  {
    question: "What happens when someone calls outside office hours?",
    answer:
      "Hub still answers. The inquiry is captured the same way it is during the day, and the consultation gets booked.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Setup is part of the demo. We configure Hub around your firm’s criteria before it takes a live call.",
  },
  {
    // TODO(copy): Jeff to confirm pricing wording.
    question: "What does it cost?",
    answer:
      "Pricing fits how your firm works: a monthly subscription, or pay per retained client instead of paying for leads that never sign. We will walk through both on your demo.",
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
    id: "text",
    verb: "Text.",
    caption: "Hub texts back in seconds, answers questions, and keeps the lead warm.",
    icon: MessageSquareText,
    wallpaper: serveWallpaper,
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
] as const;

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
            Bankruptcy intake that never misses a call.
            <span className="hero-title-line">From first call to retained client.</span>
          </h1>
          <p>
            Hub answers every call, qualifies bankruptcy leads by your
            criteria, and books the consultation that turns them into retained
            clients.
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
            <strong>10,000+</strong>
            <span>bankruptcy cases filed</span>
          </p>
          <p>
            <strong>24+ years</strong>
            <span>of legal practice</span>
          </p>
          <p>
            <strong>24/7</strong>
            <span>calls and texts answered</span>
          </p>
        </div>
      </section>

      <section className="section problem-section">
        <div className="shell">
          <div className="problem-heading">
            <h2>Where clients slip away.</h2>
          </div>
          <ProblemScenes />
          <DemoCta lead="See how Hub answers the calls and texts that never reach your staff." />
        </div>
      </section>

      <section className="section product-cards-section" id="products">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>Engage the call. Answer the text. Acquire the client.</h2>
            <p>
              Hub answers, texts back, qualifies, follows up, and books, so more
              inquiries become retained clients.
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
                      sizes="(max-width: 1020px) 100vw, 50vw"
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
          <DemoCta lead="See bankruptcy intake answer, qualify, and book the consultation." />
        </div>
      </section>

      <section className="section products-section">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>Follow the inquiry from call to retained client.</h2>
            <p>Hub answers, qualifies, and books the consultation.</p>
          </div>
          <JourneyProcess />
          <DemoCta lead="From the first inquiry to a client who signs." />
        </div>
      </section>

      <CallSample />

      <section className="section faq-section">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <h2>Questions before the conversation.</h2>
            <p>
              Your demo shows how your firm turns calls into retained clients.
            </p>
            <DemoCta lead="Bring one recent inquiry to the demo." />
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === faqs.length - 1}>
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
              See how one company takes a bankruptcy inquiry from the first
              call to a retained client.
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
