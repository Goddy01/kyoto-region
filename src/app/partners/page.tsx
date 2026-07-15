import type { Metadata } from "next";
import { PartnersContent } from "@/components/pages/PartnersContent";

export const metadata: Metadata = {
  title: "Partners",
  description: "Sponsors, partners, and affiliates of Kyoto Region.",
};

export default function PartnersPage() {
  return <PartnersContent />;
}
