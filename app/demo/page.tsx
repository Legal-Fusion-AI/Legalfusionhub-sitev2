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
            Try Nikki with the form below, call us, or book a live demo with
            Jeff.
          </p>
        </div>
      </section>
      <ContactWays />
    </main>
  );
}
