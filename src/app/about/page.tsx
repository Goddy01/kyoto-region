import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, vision, and competitive philosophy of Kyoto Region.",
};

export default function AboutPage() {
  return <AboutContent />;
}
