import type { Metadata } from "next";
import { ResultsContent } from "@/components/pages/ResultsContent";

export const metadata: Metadata = {
  title: "Competitive Results",
  description: "Tournament placements, championships, and win metrics.",
};

export default function ResultsPage() {
  return <ResultsContent />;
}
