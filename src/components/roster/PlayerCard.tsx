"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Player } from "@/data/types";
import { cn } from "@/lib/cn";
import { easeExpoOut } from "@/lib/motion";

export function PlayerCard({
  player,
  index = 0,
}: {
  player: Player;
  index?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={
        reduce
          ? undefined
          : {
              y: -12,
              transition: { duration: 0.55, ease: easeExpoOut },
            }
      }
    >
      <Link
        href={`/roster/${player.slug}`}
        className={cn(
          "group glass hud-frame esports-sheen relative block overflow-hidden",
          "hover:border-accent/50 hover:shadow-[0_28px_80px_-30px_rgba(255,79,139,0.55)]",
        )}
      >
        <span className="sheen-beam" aria-hidden />
        <div className="relative flex h-72 items-end overflow-hidden md:h-80">
          <Image
            src={player.image}
            alt={`${player.name} — ${player.role}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-45 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-70"
            style={{
              background: `linear-gradient(165deg, ${player.accent}66 0%, transparent 55%)`,
            }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent via-accent to-transparent transition-transform duration-500 group-hover:scale-x-100"
          />

          <span
            aria-hidden
            className="absolute top-5 right-5 font-hero text-4xl leading-none tracking-wider text-white/10 transition-colors duration-500 group-hover:text-accent/25"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="relative z-10 w-full p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="placement-chip">
                <span className="inline-block h-1.5 w-1.5 bg-accent" />
                {player.role}
              </p>
              <span className="text-xs tracking-[0.16em] text-muted uppercase">
                {player.nationality}
              </span>
            </div>
            <h3 className="font-display mt-3 text-3xl tracking-tight transition-colors duration-300 group-hover:text-accent">
              {player.name}
            </h3>
            <p className="mt-1 text-sm text-muted">{player.game}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
