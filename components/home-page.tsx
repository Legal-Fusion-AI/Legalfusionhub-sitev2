import Link from "next/link";
import { CinematicCall } from "@/components/cinematic-call";
import { NightDeskFrame } from "@/components/night-desk-frame";
import { cast, faqs, neverTiles, practiceStrip } from "@/lib/homepage";
import { siteConfig } from "@/lib/site-config";

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
    <NightDeskFrame>
      <main>
        <section className="nd-chapter nd-open is-lit" id="cold-open">
          <div className="nd-lamp" aria-hidden="true" />
          <div className="nd-shell nd-open-grid">
            <div className="nd-open-copy">
              <p className="nd-label">Mon 8:05</p>
              <h1>
                <span>Monday, 8:05 AM.</span>
                The voicemail box is full from the weekend.
              </h1>
              <p className="nd-sub">
                The morning spent trading voicemails and typing notes — not a
                people problem. A Monday problem.
              </p>
              <a className="nd-ghost" href="#watch-call">
                Skip to the call
              </a>
            </div>
            <aside className="nd-voicemail" aria-hidden="true">
              <p className="nd-label">Voicemail</p>
              <p className="nd-unread">
                <strong>14</strong>
                unheard
              </p>
              <ul>
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
            </aside>
          </div>
        </section>

        <section className="nd-chapter nd-turn" id="the-turn">
          <div className="nd-shell nd-shell-narrow">
            <p className="nd-wordmark-once">Retainer Pro</p>
            <h2 className="nd-scene">What if Monday started with a list, not a pile?</h2>
            <p className="nd-body">
              Retainer Pro is Legal Fusion Hub’s AI front desk for consumer
              bankruptcy firms. It answers after hours, qualifies by your
              criteria, and books the consult.
            </p>
            <p className="nd-pivot">
              AI handles intake and follow-up. Your attorneys handle the law.
            </p>
            <div className="nd-actions">
              <Link className="nd-button" href={siteConfig.demoPath} scroll>
                Book a demo
              </Link>
              <p>Bring one recent inquiry.</p>
            </div>
          </div>
        </section>

        <CinematicCall />

        <section className="nd-chapter nd-cast" id="who-did-that">
          <div className="nd-shell">
            <p className="nd-label">The desk</p>
            <h2>Who did that.</h2>
            <p className="nd-lead">They work around your team, not in place of it.</p>
            <div className="nd-cast-grid">
              {cast.map((person) => (
                <article key={person.name}>
                  <span className="nd-seat" aria-hidden="true">
                    {person.initial}
                  </span>
                  <p className="nd-label">{person.role}</p>
                  <h3>{person.name}</h3>
                  <p>{person.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="nd-chapter nd-never" id="never-do">
          <div className="nd-shell">
            <h2>What we never do.</h2>
            <div className="nd-never-grid">
              {neverTiles.map((tile) => (
                <article key={tile.title}>
                  <h3>{tile.title}</h3>
                  <p>{tile.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="nd-chapter nd-practice" id="practice">
          <div className="nd-shell">
            <h2>Built inside a bankruptcy practice.</h2>
            <p className="nd-lead">
              Started inside a bankruptcy practice — not adapted from generic
              intake.
            </p>
            <div className="nd-plate">
              <p className="nd-label">Practice strip</p>
              <ul>
                {practiceStrip.map((item) => (
                  <li key={item.value}>
                    <strong>{item.value}</strong>
                    {item.label ? <span>{item.label}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="nd-chapter nd-faq" id="faq">
          <div className="nd-shell nd-shell-narrow">
            <h2>Three firm questions.</h2>
            <div className="nd-faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="nd-chapter nd-close" id="close">
          <div className="nd-wash" aria-hidden="true" />
          <div className="nd-shell nd-shell-narrow">
            <h2>Every call answered. More clients retained.</h2>
            <p className="nd-lead">Bring one recent inquiry to the demo.</p>
            <Link className="nd-button" href={siteConfig.demoPath} scroll>
              Book a demo
            </Link>
          </div>
        </section>
      </main>

      <footer className="nd-footer">
        <div className="nd-shell">
          <p>
            <Link href="/privacy">Privacy</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/terms">Terms</Link>
            <span aria-hidden="true"> · </span>
            <a href="mailto:jeff@legalfusionhub.com">jeff@legalfusionhub.com</a>
          </p>
          <p>Retainer Pro is a product of Legal Fusion Hub</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </NightDeskFrame>
  );
}
