"use client";

import { ArticleCard } from "@/components/cards";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { articles, siteCopy } from "@/site-data/content";

export function ArticlesPage() {
  const { language } = useLanguage();

  return (
    <div className="page-stack">
      <Reveal className="page-intro is-first">
        <p className="section-label">{language === "cn" ? siteCopy.articlesPage.title.cn : siteCopy.articlesPage.title.en}</p>
        <h1>{language === "cn" ? "文章与思考" : "Writing and Notes"}</h1>
        <p className="intro-deck">{language === "cn" ? siteCopy.articlesPage.deck.cn : siteCopy.articlesPage.deck.en}</p>
      </Reveal>
      <section className="card-grid">
        {articles.map((article, index) => (
          <Reveal key={article.slug} delay={index * 80}>
            <ArticleCard article={article} />
          </Reveal>
        ))}
      </section>
    </div>
  );
}
