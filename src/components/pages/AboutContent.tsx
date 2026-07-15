"use client";

import { PageHero, Section, GlassCard } from "@/components/ui/Section";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion/FadeUp";
import { milestones } from "@/data/results";
import { useI18n } from "@/i18n/LanguageProvider";

export function AboutContent() {
  const { t } = useI18n();
  const p = t.pages.about;

  const pillars = [
    { title: p.mission, body: p.missionBody },
    { title: p.vision, body: p.visionBody },
    { title: p.philosophy, body: p.philosophyBody },
    { title: p.values, body: p.valuesBody },
  ];

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

      <Section>
        <Stagger className="grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <GlassCard className="h-full min-h-[220px]">
                <p className="text-xs tracking-[0.22em] text-accent uppercase">
                  {pillar.title}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-foreground/90">
                  {pillar.body}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section
        eyebrow={p.timelineEyebrow}
        title={p.timelineTitle}
        description={p.timelineDesc}
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
