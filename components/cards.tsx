"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { pickText, siteCopy } from "@/site-data/content";
import { Article, Project, Video } from "@/site-data/types";

export function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();

  return (
    <article className="content-card project-card">
      <div className="card-art" style={{ backgroundImage: `url(${project.cover})` }} />
      <div className="card-body">
        <p className="card-kicker">{project.period}</p>
        <h3>{language === "cn" ? project.title_cn : project.title_en}</h3>
        <p>{language === "cn" ? project.summary_cn : project.summary_en}</p>
        <Link href={`/projects/${project.slug}`} className="inline-link">
          {pickText(language, siteCopy.cards.readMore)}
        </Link>
      </div>
    </article>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  const { language } = useLanguage();

  return (
    <article className="content-card article-card">
      <div className="card-art" style={{ backgroundImage: `url(${article.cover})` }} />
      <div className="card-body">
        <p className="card-kicker">{article.published_at}</p>
        <h3>{language === "cn" ? article.title_cn : article.title_en}</h3>
        <p>{language === "cn" ? article.summary_cn : article.summary_en}</p>
        <Link href={`/articles/${article.slug}`} className="inline-link">
          {pickText(language, siteCopy.cards.readMore)}
        </Link>
      </div>
    </article>
  );
}

export function VideoCard({ video }: { video: Video }) {
  const { language } = useLanguage();

  return (
    <article className="content-card video-card">
      <div className="card-art" style={{ backgroundImage: `url(${video.cover})` }} />
      <div className="card-body">
        <p className="card-kicker">
          {video.platform} · {video.published_at}
        </p>
        <h3>{language === "cn" ? video.title_cn : video.title_en}</h3>
        <p>{language === "cn" ? video.summary_cn : video.summary_en}</p>
        <a href={video.url} className="inline-link">
          {pickText(language, siteCopy.cards.readMore)}
        </a>
      </div>
    </article>
  );
}
