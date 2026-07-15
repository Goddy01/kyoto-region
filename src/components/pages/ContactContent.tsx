"use client";

import { Suspense } from "react";
import { PageHero, Section } from "@/components/ui/Section";
import { ContactChannels, ContactForm } from "@/components/contact/ContactForm";
import { useI18n } from "@/i18n/LanguageProvider";

export function ContactContent() {
  const { t } = useI18n();
  const p = t.pages.contact;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={
          <>
            {p.titleLead}
            <br />
            <span className="gradient-text">{p.titleAccent}</span>
          </>
        }
        description={p.description}
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
