import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero, Section } from "@/components/ui/Section";
import { ContactChannels, ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Kyoto Region via Discord, X, email, or the contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Speak with
            <br />
            <span className="gradient-text">Kyoto Region.</span>
          </>
        }
        description="Partnerships, applications, press—reach out cleanly."
      />
      <Section className="!pt-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <ContactChannels />
          <Suspense
            fallback={
              <div className="glass min-h-[360px] animate-pulse p-8" />
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </Section>
    </>
  );
}
