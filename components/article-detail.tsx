"use client";

import { useLanguage } from "@/components/language-provider";
import { Article } from "@/site-data/types";

export function ArticleDetail({ article }: { article: Article }) {
  const { language } = useLanguage();

  return (
    <article className="detail-layout">
      <header className="detail-hero">
        <p className="section-label">{article.published_at}</p>
        <h1>{language === "cn" ? article.title_cn : article.title_en}</h1>
        <p className="detail-summary">{language === "cn" ? article.summary_cn : article.summary_en}</p>
        <div className="tag-row">
          {article.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </header>
      <div className="detail-art" style={{ backgroundImage: `url(${article.cover})` }} />
      <section className="prose-block">
        {article.body.map((paragraph, index) => (
          <p key={`${article.slug}-${index}`}>{language === "cn" ? paragraph.cn : paragraph.en}</p>
        ))}
      </section>
    </article>
  );
}
