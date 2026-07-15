"use client";

import { PageHero, Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/FadeUp";
import { PlayerCard } from "@/components/roster/PlayerCard";
import { players } from "@/data/roster";
import { useI18n } from "@/i18n/LanguageProvider";

export function RosterContent() {
  const { t } = useI18n();
  const p = t.pages.roster;

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
      <Section className="!pt-16">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {players.map((player, i) => (
            <StaggerItem key={player.slug}>
              <PlayerCard player={player} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
