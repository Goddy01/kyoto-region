import type { Metadata } from "next";
import { CommunityContent } from "@/components/pages/CommunityContent";

export const metadata: Metadata = {
  title: "Community",
  description: "Discord, events, giveaways, and fan engagement at Kyoto Region.",
};

export default function CommunityPage() {
  return <CommunityContent />;
}
