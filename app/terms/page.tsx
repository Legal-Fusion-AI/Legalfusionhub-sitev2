import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of service" };

export default function TermsPage() {
  return (
    <main className="legal-page">
      <article className="shell legal-article">
        <h1>Terms of service</h1>
        <p className="legal-updated">Last updated September 22, 2026</p>
        <p>
          These terms govern your use of the Legal Fusion Hub public website.
          Product services are governed by the agreement entered into with each
          client firm.
        </p>
        <h2>Website use</h2>
        <p>
          You may use this website to learn about Legal Fusion Hub and contact
          us about services. You may not interfere with the website, attempt
          unauthorized access, or use its content in a misleading manner.
        </p>
        <h2>No legal advice</h2>
        <p>
          Legal Fusion Hub provides technology and managed operational
          services to law firms. This website does not provide legal advice,
          create an attorney-client relationship, or accept debtor cases.
        </p>
        <h2>Information and availability</h2>
        <p>
          We aim to keep website information accurate and the website
          available, but content may change and uninterrupted availability is
          not guaranteed.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:info@legalfusion.ai">info@legalfusion.ai</a>.
        </p>
      </article>
    </main>
  );
}
