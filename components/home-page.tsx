"use client";

import Link from "next/link";
import { ArticleCard, ProjectCard, VideoCard } from "@/components/cards";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { articles, pickText, profile, projects, siteCopy, videos } from "@/site-data/content";

export function HomePage() {
  const { language } = useLanguage();

  return (
    <div className="page-stack">
      <Reveal className="hero-section is-first">
        <section className="hero-grid">
          <div className="hero-copy">
            <p className="hero-overline">{language === "cn" ? profile.subtitle_cn : profile.subtitle_en}</p>
            <div className="hero-badges">
              <span>{language === "cn" ? "AI 产品落地者" : "AI Product Executor"}</span>
              <span>{language === "cn" ? "智能体系统 / 生成式工作流" : "Agents / Generative Workflows"}</span>
            </div>
            <h1>
              {language === "cn" ? profile.name_cn : profile.name_en}
              <span>{language === "cn" ? profile.headline_cn : profile.headline_en}</span>
            </h1>
            <p className="hero-value">{language === "cn" ? profile.value_cn : profile.value_en}</p>
            <p className="hero-bio">{language === "cn" ? profile.bio_cn : profile.bio_en}</p>
            <div className="hero-actions">
              <Link href="/projects" className="button-primary">
                {pickText(language, siteCopy.heroCta.primary)}
              </Link>
              <a href={`mailto:${profile.email}`} className="button-secondary">
                {pickText(language, siteCopy.heroCta.secondary)}
              </a>
            </div>
            <div className="hero-meta-row">
              <div className="hero-meta-card">
                <strong>12</strong>
                <span>{language === "cn" ? "高频版本迭代" : "Rapid release cycles"}</span>
              </div>
              <div className="hero-meta-card">
                <strong>10+</strong>
                <span>{language === "cn" ? "动态模型调度" : "Models orchestrated"}</span>
              </div>
              <div className="hero-meta-card">
                <strong>0-1</strong>
                <span>{language === "cn" ? "原型到上线" : "Prototype to launch"}</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-shell">
              <div className="portrait-glow" />
              <div className="portrait-card">
                <div className="portrait-head" />
                <div className="portrait-lines">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-block">
          <div className="section-heading">
            <p>{pickText(language, siteCopy.sections.featuredProjects)}</p>
            <Link href="/projects" className="inline-link">
              {pickText(language, siteCopy.cards.allProjects)}
            </Link>
          </div>
          <div className="card-grid three">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-block split-section">
          <div className="split-copy">
            <p className="section-label">{pickText(language, siteCopy.sections.about)}</p>
            <h2>{language === "cn" ? "把复杂能力做成稳定产品" : "Making Complex AI Systems Product-grade"}</h2>
            <p>
              {language === "cn"
                ? "我的工作重心并不只在模型效果，而是更完整的系统能力：多智能体协作、异步服务、高并发调度、部署效率和业务交付。"
                : "My focus is not only on model quality, but on the full system around it: multi-agent collaboration, async services, throughput, deployment efficiency, and delivery."}
            </p>
            <Link href="/about" className="inline-link">
              {pickText(language, siteCopy.nav.about)}
            </Link>
          </div>
          <div className="split-panel">
            <div className="stat-panel">
              <strong>300 QPS</strong>
              <span>{language === "cn" ? "异步架构并发能力" : "Async architecture throughput"}</span>
            </div>
            <div className="stat-panel">
              <strong>75 万+</strong>
              <span>{language === "cn" ? "累计图像处理量" : "Images processed"}</span>
            </div>
            <div className="stat-panel">
              <strong>99.95%</strong>
              <span>{language === "cn" ? "服务 SLA" : "Service SLA"}</span>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-block">
          <div className="section-heading">
            <p>{pickText(language, siteCopy.sections.writing)}</p>
            <Link href="/articles" className="inline-link">
              {pickText(language, siteCopy.cards.allArticles)}
            </Link>
          </div>
          <div className="card-grid">
            {articles.slice(0, 2).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-block">
          <div className="section-heading">
            <p>{pickText(language, siteCopy.sections.videos)}</p>
            <Link href="/videos" className="inline-link">
              {pickText(language, siteCopy.cards.allVideos)}
            </Link>
          </div>
          <div className="card-grid">
            {videos.slice(0, 2).map((video) => (
              <VideoCard key={video.slug} video={video} />
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
