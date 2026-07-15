"use client";

import { Gift, MessageCircle, Swords, Users } from "lucide-react";
import { PageHero, Section, GlassCard } from "@/components/ui/Section";
import { Stagger, StaggerItem, FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/i18n/LanguageProvider";

const icons = [MessageCircle, Users, Gift, Swords] as const;

export function CommunityContent() {
  const { t } = useI18n();
  const p = t.pages.community;

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
        <FadeUp>
          <div className="glass relative overflow-hidden p-10 md:p-16">
            <div className="sakura-glow absolute inset-0" />
            <div className="relative max-w-2xl">
              <p className="text-xs tracking-[0.24em] text-accent uppercase">
                Discord
              </p>
              <h2 className="font-display mt-4 text-display-md">
                {p.discordTitle}
              </h2>
              <p className="mt-4 text-muted">{p.discordBody}</p>
              <div className="mt-8">
                <Button href={siteConfig.discord} variant="primary">
                  {p.joinDiscord}
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </Section>

      <Section
        eyebrow={p.engageEyebrow}
        title={p.engageTitle}
        description={p.engageDesc}
      >
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {p.features.map((f, i) => {
            const Icon = icons[i] ?? MessageCircle;
            return (
              <StaggerItem key={f.title}>
                <GlassCard className="min-h-[200px]">
                  <Icon className="text-accent" size={24} />
                  <h3 className="font-display mt-6 text-xl tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-muted">{f.body}</p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>
    </>
  );
}
