"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Player } from "@/data/types";
import { cn } from "@/lib/cn";
import { easeExpoOut } from "@/lib/motion";

export function PlayerCard({ player }: { player: Player }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={
        reduce
          ? undefined
          : {
              y: -10,
              transition: { duration: 0.55, ease: easeExpoOut },
            }
      }
    >
    <Link
      href={`/roster/${player.slug}`}
      className={cn(
        "group glass relative block overflow-hidden",
        "hover:border-accent/50 hover:shadow-[0_24px_70px_-28px_rgba(255,79,139,0.55)]",
      )}
    >
      <div className="relative flex h-72 items-end overflow-hidden md:h-80">
        <Image
          src={player.image}
          alt={`${player.name} — ${player.role}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 mix-blend-soft-light"
          style={{
            background: `linear-gradient(165deg, ${player.accent}66 0%, transparent 55%)`,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
        />
        <div className="relative z-10 w-full p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs tracking-[0.22em] text-accent uppercase">
              {player.role}
            </p>
            <span className="text-xs text-muted">{player.nationality}</span>
          </div>
          <h3 className="font-display mt-2 text-3xl tracking-tight">
            {player.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{player.game}</p>
        </div>
      </div>
    </Link>
    </motion.div>
  );
}
