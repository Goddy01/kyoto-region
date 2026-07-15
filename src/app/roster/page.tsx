import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/FadeUp";
import { PlayerCard } from "@/components/roster/PlayerCard";
import { players } from "@/data/roster";

export const metadata: Metadata = {
  title: "Roster",
  description: "Meet the Kyoto Region competitive roster.",
};

export default function RosterPage() {
  return (
    <>
      <PageHero
        eyebrow="Roster"
        title={
          <>
            Athletes of
            <br />
            <span className="gradient-text">the region.</span>
          </>
        }
        description="A multi-title squad built for pressure, chemistry, and cinematic play."
      />
      <Section className="!pt-16">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {players.map((player) => (
            <StaggerItem key={player.slug}>
              <PlayerCard player={player} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
