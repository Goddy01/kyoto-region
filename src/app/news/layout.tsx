import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements, match reports, and community updates from Kyoto Region.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
