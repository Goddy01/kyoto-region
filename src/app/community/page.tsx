import type { Metadata } from "next";
import { Gift, MessageCircle, Swords, Users } from "lucide-react";
import { PageHero, Section, GlassCard } from "@/components/ui/Section";
import { Stagger, StaggerItem, FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Community",
  description: "Discord, events, giveaways, and fan engagement at Kyoto Region.",
};

const features = [
  {
    icon: MessageCircle,
    title: "Discord HQ",
    body: "Matchday threads, VODs, creator drops, and direct access to the community team.",
  },
  {
    icon: Users,
    title: "Community Events",
    body: "Watch parties, creator nights, and Sakura Community Week programming.",
  },
  {
    icon: Gift,
    title: "Giveaways",
    body: "Merch, peripherals, and signed drops reserved for active community members.",
  },
  {
    icon: Swords,
    title: "Fan Tournaments",
    body: "Bracketed showcases where fans compete under the Kyoto banner.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title={
          <>
            Where fans
            <br />
            <span className="gradient-text">become family.</span>
          </>
        }
        description="Kyoto Region isn't a broadcast—it's a gathering. Join the Discord and stay close."
      />

      <Section className="!pt-12">
        <FadeUp>
          <div className="glass relative overflow-hidden p-10 md:p-16">
            <div className="sakura-glow absolute inset-0" />
            <div className="relative max-w-2xl">
              <p className="text-xs tracking-[0.24em] text-accent uppercase">
                Discord
              </p>
              <h2 className="font-display mt-4 text-display-md">
                Enter the garden
              </h2>
              <p className="mt-4 text-muted">
                Real-time updates, exclusive VODs, and a culture that prizes
                respect over toxicity.
              </p>
              <div className="mt-8">
                <Button href={siteConfig.discord} variant="primary">
                  Join Discord
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </Section>

      <Section
        eyebrow="Engage"
        title="How we gather"
        description="Programs designed for presence—not spam."
      >
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <GlassCard className="min-h-[200px]">
                <f.icon className="text-accent" size={24} />
                <h3 className="font-display mt-6 text-xl tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-muted">{f.body}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
