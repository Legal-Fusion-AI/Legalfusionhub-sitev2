import { ContactWays } from "@/components/contact-ways";
import { pageMetadata, routeMeta } from "@/lib/seo";

export const metadata = pageMetadata(routeMeta.demo);

export default function DemoPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="shell">
          <h1>
            See how your firm turns <span>calls</span> into retained
            clients.
          </h1>
          <p>
            Call us, try the intake form, or book a demo.
          </p>
        </div>
      </section>
      <ContactWays />
    </main>
  );
}
