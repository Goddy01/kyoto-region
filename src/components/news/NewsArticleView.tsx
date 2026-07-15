"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import type { NewsArticle } from "@/data/types";
import { useI18n } from "@/i18n/LanguageProvider";

export function NewsArticleView({ article }: { article: NewsArticle }) {
  const { t } = useI18n();
  const p = t.pages.news;

  const categoryLabel = {
    Announcement: p.announcement,
    Match: p.match,
    Community: p.community,
    Roster: p.roster,
  }[article.category];

  return (
    <article className="pt-28 pb-24 md:pt-32">
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <FadeUp>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-muted uppercase transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} /> {t.common.news}
          </Link>
          <div className="mt-8 flex flex-wrap gap-4 text-xs tracking-[0.2em] uppercase">
            <span className="text-accent">{categoryLabel}</span>
            <span className="text-muted">{article.date}</span>
          </div>
          <h1 className="font-display mt-6 text-display-md text-foreground md:text-display-lg">
            {article.title}
          </h1>
          <p className="mt-6 text-lg text-muted">{article.excerpt}</p>
        </FadeUp>

        <FadeUp
          delay={0.08}
          className="relative mt-10 aspect-[16/9] overflow-hidden border border-white/10"
        >
          <Image
            src={article.image}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </FadeUp>

        <FadeUp
          delay={0.12}
          className="mx-auto mt-12 max-w-3xl space-y-6 border-t border-white/10 pt-12"
        >
          {article.body.map((para) => (
            <p
              key={para}
              className="text-base leading-relaxed text-foreground/85 md:text-lg"
            >
              {para}
            </p>
          ))}
        </FadeUp>
      </div>
    </article>
  );
}
