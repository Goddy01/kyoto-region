import type { Metadata } from "next";
import { PageHero, Section, GlassCard } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/FadeUp";
import { staff, staffCategories } from "@/data/staff";

export const metadata: Metadata = {
  title: "Staff",
  description: "Owners, management, coaches, and creative teams behind Kyoto Region.",
};

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow="Staff"
        title={
          <>
            The house
            <br />
            <span className="gradient-text">behind the stage.</span>
          </>
        }
        description="Operators, coaches, and creatives who keep Kyoto Region sharp."
      />

      {staffCategories.map((cat) => {
        const members = staff.filter((s) => s.category === cat.id);
        return (
          <Section
            key={cat.id}
            eyebrow={cat.label}
            title={cat.label}
            className="!py-16 md:!py-20 first:pt-8"
          >
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((m) => (
                <StaggerItem key={m.id}>
                  <GlassCard className="min-h-[200px]">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center border border-accent/30 bg-accent/10 font-display text-sm text-accent">
                      {m.monogram}
                    </div>
                    <h3 className="font-display text-xl tracking-tight">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-xs tracking-[0.16em] text-accent uppercase">
                      {m.title}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {m.bio}
                    </p>
                  </GlassCard>
                </StaggerItem>
              ))}
            </Stagger>
          </Section>
        );
      })}
    </>
  );
}
