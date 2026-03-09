import { notFound } from "next/navigation";
import { ArticleDetail } from "@/components/article-detail";
import { articles } from "@/site-data/content";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
