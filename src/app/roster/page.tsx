import type { Metadata } from "next";
import { RosterContent } from "@/components/pages/RosterContent";

export const metadata: Metadata = {
  title: "Roster",
  description: "Meet the Kyoto Region competitive roster.",
};

export default function RosterPage() {
  return <RosterContent />;
}
