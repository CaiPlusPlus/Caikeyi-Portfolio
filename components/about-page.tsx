"use client";

import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { profile, siteCopy } from "@/site-data/content";

export function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="page-stack">
      <Reveal className="page-intro is-first">
        <p className="section-label">{language === "cn" ? siteCopy.aboutPage.title.cn : siteCopy.aboutPage.title.en}</p>
        <h1>{language === "cn" ? "把模型能力编辑成产品能力" : "Editing Model Capability into Product Capability"}</h1>
        <p className="intro-deck">{language === "cn" ? siteCopy.aboutPage.deck.cn : siteCopy.aboutPage.deck.en}</p>
      </Reveal>

      <Reveal>
        <section className="about-layout">
          <article className="narrative-card">
            <h2>{language === "cn" ? "个人简介" : "Profile"}</h2>
            <p>{language === "cn" ? profile.bio_cn : profile.bio_en}</p>
            <p>
              {language === "cn"
                ? "我长期参与智能体系统、图像生成、三维重建、AI 助手和部署基础设施建设，习惯站在算法、系统和业务交界处看问题。"
                : "I work across domain agents, generative imaging, 3D reconstruction, AI assistants, and deployment infrastructure, usually at the intersection of algorithms, systems, and product needs."}
            </p>
          </article>
          <article className="narrative-card">
            <h2>{language === "cn" ? "我擅长的事" : "What I Do Best"}</h2>
            <ul className="plain-list">
              <li>{language === "cn" ? "多智能体架构设计与快速迭代" : "Multi-agent architecture and rapid iteration"}</li>
              <li>{language === "cn" ? "生成式图像与 3D 工作流落地" : "Generative imaging and 3D workflow execution"}</li>
              <li>{language === "cn" ? "异步服务、高并发调度与系统稳定性" : "Async services, throughput, and reliability"}</li>
              <li>{language === "cn" ? "模型部署、资源优化与工程效率提升" : "Model deployment, resource optimization, and engineering leverage"}</li>
            </ul>
          </article>
        </section>
      </Reveal>
    </div>
  );
}
