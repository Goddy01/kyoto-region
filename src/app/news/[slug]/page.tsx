import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, news } from "@/data/index";
import { NewsArticleView } from "@/components/news/NewsArticleView";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "News" };
  return { title: article.title, description: article.excerpt };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return <NewsArticleView article={article} />;
}
