import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/Section";
import { Stagger, StaggerItem, FadeUp } from "@/components/motion/FadeUp";
import { partners } from "@/data/index";

export const metadata: Metadata = {
  title: "Partners",
  description: "Sponsors, partners, and affiliates of Kyoto Region.",
};

const tiers = [
  { id: "sponsors" as const, label: "Sponsors", description: "Brands powering competitive excellence." },
  { id: "partners" as const, label: "Partners", description: "Long-term allies in craft and culture." },
  { id: "affiliates" as const, label: "Affiliates", description: "Creators and communities in the Kyoto orbit." },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title={
          <>
            Alliances with
            <br />
            <span className="gradient-text">intention.</span>
          </>
        }
        description="We partner with brands that respect restraint, performance, and craft."
      />

      {tiers.map((tier) => {
        const list = partners.filter((p) => p.tier === tier.id);
        return (
          <Section
            key={tier.id}
            eyebrow={tier.label}
            title={tier.label}
            description={tier.description}
            className="!py-16 md:!py-20"
          >
            <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {list.map((partner) => (
                <StaggerItem key={partner.id}>
                  <a
                    href={partner.url}
                    className="group glass flex h-36 items-center justify-center transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_40px_-12px_rgba(255,79,139,0.5)]"
                  >
                    <span className="font-display text-lg tracking-[0.12em] text-muted uppercase transition-colors duration-300 group-hover:text-foreground md:text-xl">
                      {partner.name}
                    </span>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </Section>
        );
      })}

      <Section className="border-t border-white/5">
        <FadeUp className="text-center">
          <p className="text-xs tracking-[0.24em] text-accent uppercase">
            Partner with us
          </p>
          <h2 className="font-display mt-4 text-display-md">
            Build with Kyoto
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Serious inquiries welcome. Let&apos;s design something worth remembering.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex border border-accent bg-accent/10 px-7 py-3.5 text-sm tracking-wide text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Start a conversation
          </a>
        </FadeUp>
      </Section>
    </>
  );
}
