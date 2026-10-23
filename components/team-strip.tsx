import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import jeff from "@/public/team/jeff.jpg";
import mara from "@/public/team/mara.jpg";
import theron from "@/public/team/theron-portrait.jpg";

const people = [
  {
    name: "Theron Morrison",
    role: "Co-founder, attorney",
    note: "Founding partner of Morrison Law Group. Coaches soccer. Fishes off the grid in Canada.",
    image: theron,
    position: "center",
  },
  {
    name: "Mara Ream",
    role: "Co-founder, tech and automation",
    note: "13 years in legal tech. Turns messy legal workflows into systems that scale.",
    image: mara,
    position: "center",
  },
  {
    name: "Jeffrey Willis",
    role: "VP of Sales",
    note: "More than 10 years in enterprise technology, from Dell EMC to Elastic. Connects new technology to what firms actually need.",
    image: jeff,
    position: "center 20%",
  },
] as const;

export function TeamStrip() {
  return (
    <section className="section team-strip" aria-labelledby="team-strip-heading">
      <div className="shell">
        <div className="team-strip-head">
          <h2 id="team-strip-heading">The people behind Donna.</h2>
          <p>
            A bankruptcy attorney, a legal-ops technologist, and an enterprise
            technology lead. We&apos;ve worked inside firms like yours, which is
            why Donna knows what not to say.
          </p>
        </div>
        <div className="team-strip-grid">
          {people.map((person) => (
            <article className="team-strip-person" key={person.name}>
              <Image
                src={person.image}
                alt={person.name}
                sizes="(max-width: 720px) 100vw, 360px"
                placeholder="blur"
                style={{ objectPosition: person.position }}
              />
              <b>{person.name}</b>
              <span>{person.role}</span>
              <p>{person.note}</p>
            </article>
          ))}
        </div>
        <Link className="team-strip-link" href="/about">
          Meet the whole team <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
