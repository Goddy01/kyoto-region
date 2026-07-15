import type { Metadata } from "next";
import { PageHero, Section, GlassCard } from "@/components/ui/Section";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion/FadeUp";
import { milestones } from "@/data/results";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, vision, and competitive philosophy of Kyoto Region.",
};

const pillars = [
  {
    title: "Mission",
    body: "Build a Pacific esports house where craft, culture, and competition reinforce each other—never compromise one for another.",
  },
  {
    title: "Vision",
    body: "Stand among the world's most respected organizations—recognized as much for presence as for trophies.",
  },
  {
    title: "Competitive Philosophy",
    body: "Prepare like monks. Execute like predators. Review without ego. Win with elegance.",
  },
  {
    title: "Community Values",
    body: "Respect over toxicity. Ambition over arrogance. Fans are part of the roster—treated with clarity and care.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Quiet discipline.
            <br />
            <span className="gradient-text">Sudden bloom.</span>
          </>
        }
        description="Kyoto Region was founded to prove Japanese minimalism and modern esports intensity can share one house."
      />

      <Section>
        <Stagger className="grid gap-4 md:grid-cols-2">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <GlassCard className="h-full min-h-[220px]">
                <p className="text-xs tracking-[0.22em] text-accent uppercase">
                  {p.title}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-foreground/90">
                  {p.body}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section
        eyebrow="Timeline"
        title="Milestones"
        description="From foundation to Challengers crown."
        className="border-t border-white/5 bg-surface/40"
      >
        <div className="relative space-y-0">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-accent via-white/10 to-transparent md:left-24"
          />
          {milestones.map((m, i) => (
            <FadeUp key={`${m.year}-${m.title}`} delay={i * 0.06}>
              <div className="relative grid gap-4 py-10 pl-8 md:grid-cols-[6rem_1fr] md:pl-0">
                <div className="md:text-right">
                  <span className="font-display text-accent">{m.year}</span>
                </div>
                <div className="relative md:pl-16">
                  <span
                    aria-hidden
                    className="absolute top-2 -left-[1.65rem] h-2.5 w-2.5 rounded-full bg-accent md:-left-[2.15rem]"
                  />
                  <h3 className="font-display text-2xl tracking-tight">
                    {m.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-muted">{m.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>
    </>
  );
}
