"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import type { Player } from "@/data/types";
import { useI18n } from "@/i18n/LanguageProvider";

export function PlayerProfile({ player }: { player: Player }) {
  const { t } = useI18n();

  return (
    <div className="pt-24 md:pt-28">
      <div
        className="relative overflow-hidden border-b border-white/5"
        style={{
          background: `radial-gradient(ellipse 70% 80% at 80% 20%, ${player.accent}33 0%, transparent 55%), #050505`,
        }}
      >
        <div className="pattern-asanoha absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-24">
          <FadeUp>
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image
                src={player.image}
                alt={`${player.name} portrait`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent"
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-35 mix-blend-soft-light"
                style={{
                  background: `linear-gradient(160deg, ${player.accent}77 0%, transparent 50%)`,
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-xs tracking-[0.24em] text-accent uppercase">
                  {player.role} · {player.game}
                </p>
                <h1 className="font-display mt-3 text-5xl tracking-tight md:text-6xl">
                  {player.name}
                </h1>
                <p className="mt-2 text-muted">{player.realName}</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="flex flex-col justify-center">
            <Link
              href="/roster"
              className="mb-8 inline-flex items-center gap-2 text-xs tracking-[0.18em] text-muted uppercase transition-colors hover:text-accent"
            >
              <ArrowLeft size={14} /> {t.common.backToRoster}
            </Link>
            <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
              {player.bio}
            </p>
            <div className="mt-10">
              <p className="text-xs tracking-[0.22em] text-accent uppercase">
                {t.pages.roster.achievements}
              </p>
              <ul className="mt-4 space-y-3">
                {player.achievements.map((a) => (
                  <li
                    key={a}
                    className="border-l border-accent/40 pl-4 text-muted"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {player.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-xs tracking-[0.16em] uppercase transition-colors hover:border-accent hover:text-accent"
                >
                  {s.platform}
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>
            <div className="mt-10">
              <Button href="/recruitment" variant="secondary">
                {t.common.join}
              </Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
