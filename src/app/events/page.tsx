import type { Metadata } from "next";
import { EventsContent } from "@/components/pages/EventsContent";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description: "Tournaments, matchups, and schedule for Kyoto Region.",
};

export default function EventsPage() {
  return <EventsContent />;
}
