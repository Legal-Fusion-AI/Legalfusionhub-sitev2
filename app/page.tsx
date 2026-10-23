import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { homepageMeta } from "@/lib/homepage";

export const metadata: Metadata = {
  title: { absolute: homepageMeta.title },
  description: homepageMeta.description,
};

export default HomePage;
