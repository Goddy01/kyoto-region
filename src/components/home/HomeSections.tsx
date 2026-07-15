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

export function HomeStats() {
  return (
    <Section id="stats" className="!py-20 md:!py-24 border-y border-white/5 bg-surface/50">
      <Stagger className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
        {homeStats.map((stat) => (
          <StaggerItem key={stat.label}>
            <AnimatedStat stat={stat} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export function HomeAchievements() {
  return (
    <Section
      eyebrow="Legacy"
      title="Featured achievements"
      description="Titles earned through discipline—not noise."
    >
      <Stagger className="grid gap-4 md:grid-cols-2">
        {achievements.map((a) => (
          <StaggerItem key={a.id}>
            <GlassCard className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs tracking-[0.2em] text-accent uppercase">
                  {a.year}
                </p>
                <h3 className="font-display mt-3 text-xl tracking-tight md:text-2xl">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{a.subtitle}</p>
              </div>
              <span className="font-display text-4xl text-white/5">京</span>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
      <FadeUp className="mt-10">
        <Button href="/results" variant="secondary">
          View all results
        </Button>
      </FadeUp>
    </Section>
  );
}

export function HomeAnnouncement() {
  const featured = news.find((n) => n.featured) ?? news[0];

  return (
    <Section
      eyebrow="News"
      title="Latest announcement"
      description="Stay inside the bloom."
      className="bg-surface/40"
    >
      <FadeUp>
        <Link
          href={`/news/${featured.slug}`}
          className="group glass grid overflow-hidden transition-colors duration-500 hover:border-accent/40 md:grid-cols-[1.1fr_1fr]"
        >
          <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px]">
            <Image
              src={featured.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-bg/40" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-xs tracking-[0.2em] uppercase">
              <span className="text-accent">{featured.category}</span>
              <span className="text-muted">{featured.date}</span>
            </div>
            <h3 className="font-display mt-6 max-w-3xl text-2xl tracking-tight transition-colors group-hover:text-accent md:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-2xl text-muted">{featured.excerpt}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm text-foreground">
              Read more
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
  return (
    <Section
      eyebrow="Roster"
      title="The sharp edge"
      description="Athletes forged for pressure."
    >
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {players.slice(0, 3).map((p) => (
          <StaggerItem key={p.slug}>
            <PlayerCard player={p} />
          </StaggerItem>
        ))}
      </Stagger>
      <FadeUp className="mt-10 flex flex-wrap gap-4">
        <Button href="/roster" variant="primary">
          Full roster
        </Button>
        <Button href="/recruitment" variant="secondary">
          Join the org
        </Button>
      </FadeUp>
    </Section>
  );
}
