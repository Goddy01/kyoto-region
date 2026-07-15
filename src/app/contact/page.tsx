import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Kyoto Region via Discord, X, email, or the contact form.",
};

export default function ContactPage() {
  return <ContactContent />;
}
