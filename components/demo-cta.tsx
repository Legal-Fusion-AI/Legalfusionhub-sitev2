import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function DemoCta({ lead }: { lead?: string }) {
  return (
    <div className="demo-cta">
      {lead ? <p>{lead}</p> : null}
      <Link className="button" href={siteConfig.demoPath}>
        Book a demo <ArrowRight size={17} aria-hidden="true" />
      </Link>
    </div>
  );
}
