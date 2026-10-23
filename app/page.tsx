import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { homepageMeta } from "@/lib/homepage";

export const metadata: Metadata = {
  title: { absolute: homepageMeta.title },
  description: homepageMeta.description,
  openGraph: {
    title: homepageMeta.ogTitle,
    description: homepageMeta.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: homepageMeta.ogTitle,
    description: homepageMeta.ogDescription,
  },
};

export default HomePage;
