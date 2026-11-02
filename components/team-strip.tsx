import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import { Reveal } from "@/components/reveal";
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
        <Reveal className="team-strip-head">
          <h2 id="team-strip-heading">The people behind Donna.</h2>
          <p>
            A bankruptcy attorney, a legal-ops technologist, and an enterprise
            technology lead. We&apos;ve worked inside firms like yours, which is
            why Donna knows what not to say.
          </p>
        </Reveal>
        <div className="team-strip-grid">
          {people.map((person, index) => (
            <Reveal key={person.name} delay={0.08 * index}>
            <SpotlightCard
              className="team-strip-person"
              theme="light"
              spotlightColor="#0c6a5c"
              intensity={0.12}
              borderGlow={0.45}
              spotlightSize={260}
              flare={false}
              proximity={48}
            >
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
            </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <Link className="team-strip-link" href="/about">
          Meet the whole team <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
