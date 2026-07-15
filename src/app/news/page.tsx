"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Section, GlassCard } from "@/components/ui/Section";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion/FadeUp";
import { news } from "@/data/index";
import type { NewsCategory } from "@/data/types";
import { cn } from "@/lib/cn";
import { useI18n } from "@/i18n/LanguageProvider";

type FilterKey = "All" | NewsCategory;

export default function NewsPage() {
  const { t } = useI18n();
  const p = t.pages.news;
  const [filter, setFilter] = useState<FilterKey>("All");
  const featured = news.find((n) => n.featured) ?? news[0];
  const articles = useMemo(() => {
    const list = news.filter((n) => n.slug !== featured.slug);
    if (filter === "All") return list;
    return list.filter((n) => n.category === filter);
  }, [filter, featured.slug]);

  const filters: Array<{ key: FilterKey; label: string }> = [
    { key: "All", label: t.common.all },
    { key: "Announcement", label: p.announcement },
    { key: "Match", label: p.match },
    { key: "Community", label: p.community },
    { key: "Roster", label: p.roster },
  ];

  const categoryLabel = (category: NewsCategory) => {
    const map: Record<NewsCategory, string> = {
      Announcement: p.announcement,
      Match: p.match,
      Community: p.community,
      Roster: p.roster,
    };
    return map[category];
  };

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

      <Section className="!pt-12 !pb-8">
        <FadeUp>
          <Link
            href={`/news/${featured.slug}`}
            className="group glass grid overflow-hidden transition-colors hover:border-accent/40 md:grid-cols-[1.2fr_1fr]"
          >
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px]">
              <Image
                src={featured.image}
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-bg/30" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex flex-wrap gap-4 text-xs tracking-[0.2em] uppercase">
                <span className="text-accent">{t.common.featured}</span>
                <span className="text-muted">
                  {categoryLabel(featured.category)}
                </span>
                <span className="text-muted">{featured.date}</span>
              </div>
              <h2 className="font-display mt-6 max-w-3xl text-3xl tracking-tight transition-colors group-hover:text-accent md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-muted">{featured.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm">
                {t.common.readArticle} <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        </FadeUp>
      </Section>

      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={cn(
                "border px-4 py-2 text-xs tracking-[0.16em] uppercase transition-colors",
                filter === f.key
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-white/15 text-muted hover:border-white/30 hover:text-foreground",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <StaggerItem key={article.slug}>
              <Link href={`/news/${article.slug}`} className="block h-full">
                <GlassCard className="flex h-full flex-col overflow-hidden !p-0 transition-transform duration-500 hover:-translate-y-1">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs tracking-[0.18em] text-accent uppercase">
                      {categoryLabel(article.category)}
                    </p>
                    <h3 className="font-display mt-4 flex-1 text-xl tracking-tight">
                      {article.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm text-muted">
                      {article.excerpt}
                    </p>
                    <p className="mt-6 text-xs text-muted">{article.date}</p>
                  </div>
                </GlassCard>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
