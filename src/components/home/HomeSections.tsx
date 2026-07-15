"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, GlassCard } from "@/components/ui/Section";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { PlayerCard } from "@/components/roster/PlayerCard";
import { achievements, homeStats } from "@/data/results";
import { news } from "@/data/index";
import { players } from "@/data/roster";
import { useI18n } from "@/i18n/LanguageProvider";
import { Marquee } from "@/components/motion/Marquee";

export function HomeMarquee() {
  const { t } = useI18n();
  return <Marquee items={[...t.home.marquee]} speed={32} />;
}

export function HomeStats() {
  return (
    <Section
      id="stats"
      className="!py-16 md:!py-20 border-y border-white/5 bg-surface/40"
    >
      <Stagger className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
        {homeStats.map((stat, i) => (
          <StaggerItem key={stat.label}>
            <AnimatedStat stat={stat} index={i} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export function HomeAchievements() {
  const { t } = useI18n();

  return (
    <Section
      eyebrow={t.home.legacyEyebrow}
      title={t.home.legacyTitle}
      description={t.home.legacyDesc}
    >
      <Stagger className="grid gap-4 md:grid-cols-2">
        {achievements.map((a, i) => (
          <StaggerItem key={a.id}>
            <GlassCard className="hud-frame esports-sheen flex items-start justify-between gap-6">
              <span className="sheen-beam" aria-hidden />
              <div>
                <p className="placement-chip">
                  <span className="inline-block h-1.5 w-1.5 bg-accent" />
                  {a.year}
                </p>
                <h3 className="font-display mt-4 text-xl tracking-tight md:text-2xl">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{a.subtitle}</p>
              </div>
              <span
                aria-hidden
                className="font-hero text-5xl leading-none tracking-wider text-white/[0.06] md:text-6xl"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
      <FadeUp className="mt-10">
        <Button href="/results" variant="secondary">
          {t.common.viewAllResults}
        </Button>
      </FadeUp>
    </Section>
  );
}

export function HomeAnnouncement() {
  const { t } = useI18n();
  const featured = news.find((n) => n.featured) ?? news[0];

  return (
    <Section
      eyebrow={t.home.newsEyebrow}
      title={t.home.newsTitle}
      description={t.home.newsDesc}
      className="bg-surface/40"
    >
      <FadeUp>
        <Link
          href={`/news/${featured.slug}`}
          className="group glass hud-frame esports-sheen grid overflow-hidden transition-colors duration-500 hover:border-accent/40 md:grid-cols-[1.1fr_1fr]"
        >
          <span className="sheen-beam" aria-hidden />
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[320px]">
            <Image
              src={featured.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-bg/40" />
            <div className="scanlines absolute inset-0 opacity-20" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-xs tracking-[0.2em] uppercase">
              <span className="placement-chip">
                <span className="inline-block h-1.5 w-1.5 bg-accent" />
                {featured.category}
              </span>
              <span className="text-muted">{featured.date}</span>
            </div>
            <h3 className="font-display mt-6 max-w-3xl text-2xl tracking-tight transition-colors group-hover:text-accent md:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-2xl text-muted">{featured.excerpt}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-foreground uppercase">
              {t.common.readMore}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </Link>
      </FadeUp>
    </Section>
  );
}

export function HomeRosterTeaser() {
  const { t } = useI18n();

  return (
    <Section
      eyebrow={t.home.rosterEyebrow}
      title={t.home.rosterTitle}
      description={t.home.rosterDesc}
    >
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {players.slice(0, 3).map((p, i) => (
          <StaggerItem key={p.slug}>
            <PlayerCard player={p} index={i} />
          </StaggerItem>
        ))}
      </Stagger>
      <FadeUp className="mt-10 flex flex-wrap gap-4">
        <Button href="/roster" variant="primary">
          {t.common.fullRoster}
        </Button>
        <Button href="/recruitment" variant="secondary">
          {t.common.joinTheOrg}
        </Button>
      </FadeUp>
    </Section>
  );
}
