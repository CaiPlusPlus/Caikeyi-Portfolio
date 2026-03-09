"use client";

import { ProjectCard } from "@/components/cards";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { projects, siteCopy } from "@/site-data/content";

export function ProjectsPage() {
  const { language } = useLanguage();

  return (
    <div className="page-stack">
      <Reveal className="page-intro is-first">
        <p className="section-label">{language === "cn" ? siteCopy.projectsPage.title.cn : siteCopy.projectsPage.title.en}</p>
        <h1>{language === "cn" ? "项目案例" : "Selected Projects"}</h1>
        <p className="intro-deck">{language === "cn" ? siteCopy.projectsPage.deck.cn : siteCopy.projectsPage.deck.en}</p>
      </Reveal>
      <section className="card-grid">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </section>
    </div>
  );
}
