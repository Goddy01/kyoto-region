"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Section, GlassCard } from "@/components/ui/Section";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion/FadeUp";
import { news } from "@/data/index";
import type { NewsCategory } from "@/data/types";
import { cn } from "@/lib/cn";

const filters: Array<"All" | NewsCategory> = [
  "All",
  "Announcement",
  "Match",
  "Community",
  "Roster",
];

export default function NewsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const featured = news.find((n) => n.featured) ?? news[0];
  const articles = useMemo(() => {
    const list = news.filter((n) => n.slug !== featured.slug);
    if (filter === "All") return list;
    return list.filter((n) => n.category === filter);
  }, [filter, featured.slug]);

  return (
    <>
      <PageHero
        eyebrow="News"
        title={
          <>
            Signals from
            <br />
            <span className="gradient-text">the region.</span>
          </>
        }
        description="Announcements, match reports, roster moves, and community drops."
      />

      <Section className="!pt-12 !pb-8">
        <FadeUp>
          <Link
            href={`/news/${featured.slug}`}
            className="group glass block overflow-hidden p-8 transition-colors hover:border-accent/40 md:p-12"
          >
            <div className="flex flex-wrap gap-4 text-xs tracking-[0.2em] uppercase">
              <span className="text-accent">Featured</span>
              <span className="text-muted">{featured.category}</span>
              <span className="text-muted">{featured.date}</span>
            </div>
            <h2 className="font-display mt-6 max-w-3xl text-3xl tracking-tight transition-colors group-hover:text-accent md:text-5xl">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-2xl text-muted">{featured.excerpt}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm">
              Read article <ArrowUpRight size={16} />
            </span>
          </Link>
        </FadeUp>
      </Section>

      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "border px-4 py-2 text-xs tracking-[0.16em] uppercase transition-colors",
                filter === f
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-white/15 text-muted hover:border-white/30 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <StaggerItem key={article.slug}>
              <Link href={`/news/${article.slug}`} className="block h-full">
                <GlassCard className="flex h-full min-h-[220px] flex-col transition-transform duration-500 hover:-translate-y-1">
                  <p className="text-xs tracking-[0.18em] text-accent uppercase">
                    {article.category}
                  </p>
                  <h3 className="font-display mt-4 flex-1 text-xl tracking-tight">
                    {article.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm text-muted">
                    {article.excerpt}
                  </p>
                  <p className="mt-6 text-xs text-muted">{article.date}</p>
                </GlassCard>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
