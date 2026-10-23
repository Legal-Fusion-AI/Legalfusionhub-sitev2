import Image from "next/image";
import { ClosingBand } from "@/components/closing-band";
import { pageMetadata, routeMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata(routeMeta.about);

const team = [
  {
    name: "Mara Ream",
    role: "Co-Founder & Legal Ops Tech Expert",
    image: "/team/mara.jpg",
    width: 1892,
    height: 1892,
    position: "center",
    bio: [
      "With 13 years in the legal space and deep expertise in automation, software, and operations, Mara Ream is the driving force behind Retainer Pro. She's helped law firms across the country simplify complex systems, eliminate bottlenecks, and turn their tech into a true growth engine. From billing to client engagement to database reactivation, Mara builds AI-powered tools that actually work for lawyers. Her superpower? Translating messy legal workflows into clean, efficient systems that scale with ease.",
    ],
  },
  {
    name: "Theron Morrison",
    role: "Founder & Legal Strategist",
    image: "/team/theron.jpg",
    width: 940,
    height: 788,
    position: "center 18%",
    bio: [
      "Theron Morrison is a nationally recognized leader in bankruptcy and consumer protection law. As the founding partner of Morrison Law Group, he's filed more than 10,000 bankruptcy cases, making his firm one of the largest in Utah. With 24 years of legal experience, he understands firsthand the challenges law firms face when juggling growth, compliance, and client demands. Theron brings real-world legal strategy to Retainer Pro, making sure the solutions we build actually work in the trenches. When he's not leading firms to success, you'll find him mentoring new attorneys, coaching soccer, or fishing off the grid in Canada.",
    ],
  },
  {
    name: "Jeffrey Willis",
    role: "Enterprise Technology & Strategic Growth",
    image: "/team/jeff.jpg",
    width: 1286,
    height: 1221,
    position: "center 20%",
    bio: [
      "Jeffrey Willis is an accomplished enterprise technology professional with more than 10 years of experience driving strategic growth, developing partnerships, and delivering innovative technology solutions. With a career spanning industry leaders such as Dell EMC, NetApp, Elastic, and CrateDB, Jeff brings extensive expertise in cloud infrastructure, enterprise software, and data-driven technologies.",
      "At Retainer Pro, Jeff focuses on connecting emerging technologies with real-world business needs, helping advance innovative solutions that improve efficiency, simplify operations, and create lasting value for the legal industry.",
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <main className="team-page">
      <section className="team-hero">
        <div className="shell">
          <h1 className="team-hero-title">This Is Our Journey</h1>
          <p>
            From practicing attorneys who felt the pain of inefficient workflows
            to building AI solutions that actually work in the trenches. We&apos;re
            not just another tech company. We&apos;re legal professionals who
            understand your challenges because we&apos;ve lived them.
          </p>
        </div>
      </section>

      <section className="team-section" aria-labelledby="team-heading">
        <div className="shell">
          <h2 id="team-heading">Meet the Team Behind Retainer Pro</h2>
          <p className="team-subhead">
            A unique combination of legal expertise and technical innovation,
            working together to transform how law firms operate.
          </p>
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-photo">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={member.width}
                    height={member.height}
                    sizes="160px"
                    className="team-photo-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: member.position,
                    }}
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                {member.bio.map((paragraph) => (
                  <p className="team-bio" key={paragraph.slice(0, 40)}>
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-entity">
        <div className="shell about-entity-card">
          <h2>{siteConfig.ownerLine}</h2>
          <p>
            {siteConfig.legalName} is a {siteConfig.jurisdiction} limited
            liability company, founded by {siteConfig.founders[0].name} and{" "}
            {siteConfig.founders[1].name}.
          </p>
        </div>
      </section>

      <ClosingBand lead="Built by people who have run a bankruptcy firm. See it work on one of your own inquiries, or call Donna yourself." />
    </main>
  );
}
