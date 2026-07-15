import type { Metadata } from "next";
import { PageHero, Section, GlassCard } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { recruitmentRoles } from "@/data/index";

export const metadata: Metadata = {
  title: "Recruitment",
  description: "Apply to join Kyoto Region — players, creators, staff, and more.",
};

export default function RecruitmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Recruitment"
        title={
          <>
            Apply to the
            <br />
            <span className="gradient-text">region.</span>
          </>
        }
        description="We hire for standards, not noise. Show us craft, consistency, and hunger."
      />
      <Section className="!pt-16">
        <Stagger className="grid gap-5 md:grid-cols-2">
          {recruitmentRoles.map((role) => (
            <StaggerItem key={role.id}>
              <GlassCard className="flex h-full flex-col">
                <p className="text-xs tracking-[0.2em] text-accent uppercase">
                  {role.category}
                </p>
                <h3 className="font-display mt-3 text-2xl tracking-tight">
                  {role.title}
                </h3>
                <p className="mt-4 text-muted">{role.description}</p>
                <ul className="mt-6 flex-1 space-y-2">
                  {role.requirements.map((req) => (
                    <li
                      key={req}
                      className="border-l border-white/15 pl-3 text-sm text-muted"
                    >
                      {req}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href={`/contact?role=${role.id}`}
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    Apply
                  </Button>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
