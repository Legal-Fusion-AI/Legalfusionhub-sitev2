import { pageMetadata, routeMeta } from "@/lib/seo";

export const metadata = pageMetadata(routeMeta.privacy);

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <article className="shell legal-article">
        <h1>Privacy policy</h1>
        <p className="legal-updated">Last updated September 22, 2026</p>
        <p>
          This policy explains how Legal Fusion Hub collects and uses
          information submitted through this website.
        </p>
        <h2>Information we collect</h2>
        <p>
          When you request a demo or contact us, we may collect your name, work
          email, firm, role, and the information you include in your message.
          We may also collect ordinary technical information such as device,
          browser, and page interaction data.
        </p>
        <h2>How we use information</h2>
        <p>
          We use submitted information to respond to your request, evaluate
          whether Legal Fusion Hub fits your firm, operate this website, and
          improve our services. We do not sell personal information.
        </p>
        <h2>Service providers</h2>
        <p>
          We may use hosting, analytics, communication, scheduling, and
          customer-management providers to operate the site and respond to
          requests. They receive only the information needed to provide those
          services.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href="mailto:jeff@legalfusionhub.com">jeff@legalfusionhub.com</a>.
        </p>
      </article>
    </main>
  );
}
