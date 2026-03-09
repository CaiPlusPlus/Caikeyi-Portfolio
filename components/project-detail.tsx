"use client";

import { useLanguage } from "@/components/language-provider";
import { pickText, siteCopy } from "@/site-data/content";
import { Project } from "@/site-data/types";

export function ProjectDetail({ project }: { project: Project }) {
  const { language } = useLanguage();

  return (
    <article className="detail-layout">
      <header className="detail-hero">
        <p className="section-label">{project.period}</p>
        <h1>{language === "cn" ? project.title_cn : project.title_en}</h1>
        <p className="detail-summary">{language === "cn" ? project.summary_cn : project.summary_en}</p>
      </header>

      <div className="project-meta-grid">
        <div className="meta-card">
          <p>{pickText(language, siteCopy.sections.role)}</p>
          <strong>{language === "cn" ? project.role_cn : project.role_en}</strong>
        </div>
        <div className="meta-card">
          <p>{pickText(language, siteCopy.sections.timeline)}</p>
          <strong>{project.period}</strong>
        </div>
      </div>

      <section className="metric-grid">
        {project.metrics.map((metric) => (
          <div key={`${project.slug}-${metric.value}`} className="metric-card">
            <strong>{metric.value}</strong>
            <span>{pickText(language, metric.label)}</span>
          </div>
        ))}
      </section>

      <section className="stack-section">
        <p className="section-label">{pickText(language, siteCopy.sections.stack)}</p>
        <div className="tag-row">
          {project.tech_stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="story-grid">
        {project.sections.map((section) => (
          <div key={section.title.cn} className="story-card">
            <p className="section-label">{pickText(language, section.title)}</p>
            <p>{pickText(language, section.body)}</p>
          </div>
        ))}
      </section>

      <section className="gallery-grid">
        {project.gallery.map((image) => (
          <div key={image} className="gallery-card" style={{ backgroundImage: `url(${image})` }} />
        ))}
      </section>

      <section className="embed-block">
        <div className="section-heading">
          <p>{pickText(language, siteCopy.sections.liveDemo)}</p>
        </div>
        {project.embed_enabled && project.embed_url ? (
          <div className="embed-shell">
            <iframe
              title={language === "cn" ? project.title_cn : project.title_en}
              src={project.embed_url}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="embed-fallback">
            <p>{pickText(language, siteCopy.emptyEmbed)}</p>
            {project.links[0] ? (
              <a href={project.links[0].url} className="button-secondary">
                {pickText(language, siteCopy.externalDemo)}
              </a>
            ) : null}
          </div>
        )}
      </section>

      <section className="link-row">
        {project.links.map((link) => (
          <a key={link.url} href={link.url} className="button-secondary">
            {pickText(language, link.label)}
          </a>
        ))}
      </section>
    </article>
  );
}
