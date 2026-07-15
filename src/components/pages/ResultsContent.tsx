"use client";

import { Trophy } from "lucide-react";
import { PageHero, Section, GlassCard } from "@/components/ui/Section";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion/FadeUp";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { results, resultStats } from "@/data/results";
import { useI18n } from "@/i18n/LanguageProvider";

export function ResultsContent() {
  const { t } = useI18n();
  const p = t.pages.results;
  const featured = results.filter((r) => r.featured);

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

      <Section className="!pt-16 !pb-8">
        <Stagger className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {resultStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <AnimatedStat stat={stat} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section
        eyebrow={p.trophiesEyebrow}
        title={p.trophiesTitle}
        description={p.trophiesDesc}
      >
        <Stagger className="grid gap-4 md:grid-cols-3">
          {featured.map((r) => (
            <StaggerItem key={r.id}>
              <GlassCard className="min-h-[240px]">
                <Trophy className="mb-6 text-accent" size={28} />
                <p className="text-xs tracking-[0.2em] text-muted uppercase">
                  {r.year} · {r.game}
                </p>
                <h3 className="font-display mt-3 text-2xl tracking-tight">
                  {r.tournament}
                </h3>
                <p className="mt-4 text-accent">{r.placement}</p>
                {r.prize && (
                  <p className="mt-1 text-sm text-muted">{r.prize}</p>
                )}
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section
        eyebrow={p.archiveEyebrow}
        title={p.archiveTitle}
        className="border-t border-white/5 bg-surface/40"
      >
        <FadeUp>
          <div className="divide-y divide-white/5 border-y border-white/5">
            {results.map((r) => (
              <div
                key={r.id}
                className="grid grid-cols-2 gap-4 py-6 md:grid-cols-[1fr_8rem_6rem_8rem] md:items-center"
              >
                <div>
                  <p className="font-display text-lg tracking-tight">
                    {r.tournament}
                  </p>
                  <p className="mt-1 text-sm text-muted">{r.game}</p>
                </div>
                <p className="text-sm text-muted md:text-right">{r.year}</p>
                <p className="font-medium text-accent md:text-center">
                  {r.placement}
                </p>
                <p className="text-sm text-muted md:text-right">
                  {r.prize ?? "—"}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Section>
    </>
  );
}
