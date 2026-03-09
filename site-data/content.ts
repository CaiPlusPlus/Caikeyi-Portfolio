import { Article, Language, LocalizedText, Profile, Project, Video } from "@/site-data/types";

export const siteCopy = {
  nav: {
    about: { cn: "关于", en: "About" },
    projects: { cn: "项目", en: "Projects" },
    articles: { cn: "文章", en: "Articles" },
    videos: { cn: "视频", en: "Videos" },
  },
  heroCta: {
    primary: { cn: "查看代表项目", en: "View Selected Work" },
    secondary: { cn: "联系我", en: "Get in Touch" },
  },
  sections: {
    featuredProjects: { cn: "精选项目", en: "Featured Projects" },
    writing: { cn: "文章", en: "Writing" },
    videos: { cn: "视频", en: "Videos" },
    about: { cn: "关于我", en: "About Me" },
    metrics: { cn: "关键结果", en: "Key Results" },
    stack: { cn: "技术栈", en: "Tech Stack" },
    role: { cn: "职责", en: "Role" },
    timeline: { cn: "周期", en: "Timeline" },
    projectStory: { cn: "项目叙事", en: "Project Story" },
    media: { cn: "媒体展示", en: "Media" },
    liveDemo: { cn: "演示页面", en: "Live Demo" },
  },
  cards: {
    readMore: { cn: "查看详情", en: "Read More" },
    allProjects: { cn: "查看全部项目", en: "Browse All Projects" },
    allArticles: { cn: "查看全部文章", en: "Browse All Articles" },
    allVideos: { cn: "查看全部视频", en: "Browse All Videos" },
  },
  footer: {
    intro: {
      cn: "聚焦 AI 算法、智能体系统与生成式工作流，持续把模型能力转化为稳定可用的产品体验。",
      en: "Focused on AI systems, domain agents, and generative workflows that turn model capability into usable products.",
    },
    rights: {
      cn: "个人门户站，用于展示项目、文章与视频。",
      en: "A personal portal for selected work, writing, and videos.",
    },
  },
  aboutPage: {
    title: { cn: "关于", en: "About" },
    deck: {
      cn: "我主要做两件事：把新模型能力拉到真实业务里，把复杂系统做成稳定产品。",
      en: "I do two things well: bringing frontier models into real workflows and turning complex systems into stable products.",
    },
  },
  articlesPage: {
    title: { cn: "文章", en: "Articles" },
    deck: {
      cn: "记录我对智能体、生成式图像、工程体系和产品落地的思考。",
      en: "Notes on domain agents, generative imaging, engineering systems, and product execution.",
    },
  },
  projectsPage: {
    title: { cn: "项目", en: "Projects" },
    deck: {
      cn: "从智能体架构到 3D 生成与部署优化，这里是我最能代表自己的几个案例。",
      en: "From multi-agent systems to 3D generation and deployment optimization, these are the projects that best represent my work.",
    },
  },
  videosPage: {
    title: { cn: "视频", en: "Videos" },
    deck: {
      cn: "一些项目演示、技术表达与对外分享入口。",
      en: "Selected demos, technical explainers, and public-facing presentations.",
    },
  },
  emptyEmbed: {
    cn: "当前没有可直接内嵌的公开 demo，先通过项目说明和外部入口浏览。",
    en: "No public embeddable demo is available yet. Use the project narrative and external links for now.",
  },
  externalDemo: {
    cn: "打开外部演示",
    en: "Open External Demo",
  },
};

export const profile: Profile = {
  name_cn: "菜可以",
  name_en: "Caikeyi",
  headline_cn: "AI 算法开发工程师",
  headline_en: "AI Algorithm Engineer",
  subtitle_cn: "AI 世界编辑员",
  subtitle_en: "Editor of the AI World",
  bio_cn:
    "我是菜可以，长期围绕 AI 算法、智能体系统、图像生成与业务落地展开工作。我的关注点不只在模型本身，也在如何把复杂能力组织成稳定、高并发、可扩展的产品系统。",
  bio_en:
    "I am Caikeyi, an AI engineer focused on domain agents, generative imaging, and product execution. My work is not only about models, but about shaping them into stable, scalable, high-throughput systems.",
  email: "zihongcai2050@gmail.com",
  location: {
    cn: "中国",
    en: "China",
  },
  value_cn: "将模型、智能体和工程体系转化为真实可用的产品能力。",
  value_en: "Turning models, agents, and engineering systems into product-grade capability.",
  socials: [
    { label: "Email", url: "mailto:zihongcai2050@gmail.com" },
    { label: "GitHub", url: "https://github.com/" },
  ],
};

export const projects: Project[] = [
  {
    slug: "laser-domain-ai-agent",
    title_cn: "AI 激光垂类智能体",
    title_en: "Laser-domain AI Agent",
    summary_cn:
      "面向激光工艺场景构建的多智能体系统，打通生成、编辑、调度与交付链路，实现高频迭代与稳定上线。",
    summary_en:
      "A multi-agent system for laser-focused workflows, connecting generation, editing, orchestration, and delivery into a stable production system.",
    role_cn: "架构设计、后端研发、模型调度、发布节奏推进",
    role_en: "Architecture, backend engineering, model orchestration, and release execution",
    period: "2025.10 - 2026.01",
    tech_stack: ["Python", "Asyncio", "Socket.IO", "Supervisor", "Swarm", "Prompt Systems"],
    metrics: [
      { value: "12", label: { cn: "版本迭代", en: "Release iterations" } },
      { value: "300 QPS", label: { cn: "并发处理能力", en: "Concurrent throughput" } },
      { value: "99.95%", label: { cn: "服务可用性 SLA", en: "Service availability SLA" } },
      { value: "750k+", label: { cn: "累计图像处理量", en: "Images processed" } },
    ],
    sections: [
      {
        title: { cn: "背景", en: "Context" },
        body: {
          cn: "项目需要从原型快速走向生产，既要支持多智能体协作，也要覆盖激光工艺相关的图像生成、编辑与任务编排能力。",
          en: "The product had to move from prototype to production quickly, while supporting multi-agent collaboration and laser-focused generation, editing, and orchestration workflows.",
        },
      },
      {
        title: { cn: "技术设计", en: "Technical Design" },
        body: {
          cn: "我设计了支持 supervisor 和 swarm 的多智能体拓扑，构建可插拔工具模块与横向扩展 Prompt 体系，并采用 API + Asyncio 全异步架构承接高并发与大批量任务。",
          en: "I designed a topology supporting both supervisor and swarm agents, built pluggable tools with horizontally extensible prompts, and used an API plus asyncio architecture for high concurrency and batch-heavy workloads.",
        },
      },
      {
        title: { cn: "结果", en: "Outcome" },
        body: {
          cn: "系统实现几乎每周一次迭代的节奏，具备异步队列、即时推送、横向扩展和削峰填谷能力，并支撑多模型动态调度，形成稳定产品能力。",
          en: "The system shipped on a near-weekly cadence, with async queues, real-time push, horizontal scaling, and dynamic multi-model scheduling to support a stable product experience.",
        },
      },
    ],
    cover: "/placeholder-project-1.svg",
    gallery: ["/placeholder-project-1.svg", "/placeholder-detail-1.svg"],
    links: [{ label: { cn: "联系获取演示", en: "Request a Demo" }, url: "mailto:zihongcai2050@gmail.com" }],
    embed_enabled: false,
  },
  {
    slug: "image-to-3d",
    title_cn: "Image-to-3D / 深浮雕 / 3D 点云",
    title_en: "Image-to-3D / Relief / Point Cloud",
    summary_cn:
      "围绕深浮雕、位图转 3D 点云和工艺场景适配展开的算法探索与产品落地，兼顾质量、速度和制造可用性。",
    summary_en:
      "Algorithm exploration and productization across relief generation, image-to-3D point clouds, and fabrication-oriented workflows.",
    role_cn: "算法预研、模型优化、流程验证、工艺适配",
    role_en: "Algorithm exploration, model optimization, pipeline validation, and fabrication adaptation",
    period: "2025 - 2026",
    tech_stack: ["Flux", "3D Reconstruction", "Depth Estimation", "Point Cloud", "Texture Fusion"],
    metrics: [
      { value: "14.3x", label: { cn: "深浮雕处理提速", en: "Relief speed-up" } },
      { value: "7s", label: { cn: "优化后处理耗时", en: "Optimized processing time" } },
      { value: "Image-to-3D", label: { cn: "重点突破方向", en: "Key breakthrough" } },
    ],
    sections: [
      {
        title: { cn: "背景", en: "Context" },
        body: {
          cn: "在玻璃内雕、UV 打印等场景中，传统图像生成结果难以直接满足加工约束，需要兼顾深度、结构与工艺表现。",
          en: "Workflows such as glass engraving and UV printing require outputs that satisfy depth, structure, and fabrication constraints beyond standard image generation.",
        },
      },
      {
        title: { cn: "技术设计", en: "Technical Design" },
        body: {
          cn: "我围绕 Flux 系列模型训练深浮雕能力，并将位图转 3D 点云、稠密重建与纹理融合串接成完整流程，同时持续预研 3D 模型生成、位图转矢量与多层加工文件生成。",
          en: "I trained relief generation on Flux models, connected image-to-point-cloud reconstruction with dense geometry and texture fusion, and continued exploring 3D generation, vectorization, and multi-layer fabrication outputs.",
        },
      },
      {
        title: { cn: "结果", en: "Outcome" },
        body: {
          cn: "深度细节明显提升，处理耗时从 100 秒降到 7 秒，形成更贴近工艺需求的 3D 生成方案，并支撑相关专利成果。",
          en: "Depth quality improved significantly while latency dropped from 100 seconds to 7 seconds, enabling a more fabrication-ready 3D workflow and supporting patent work.",
        },
      },
    ],
    cover: "/placeholder-project-2.svg",
    gallery: ["/placeholder-project-2.svg", "/placeholder-detail-2.svg"],
    links: [{ label: { cn: "联系获取案例", en: "Request Case Details" }, url: "mailto:zihongcai2050@gmail.com" }],
    embed_enabled: false,
  },
  {
    slug: "xtool-studio-ai-assistant",
    title_cn: "xTool Studio AI 助手",
    title_en: "xTool Studio AI Assistant",
    summary_cn:
      "面向产品内交互的 AI 决策中枢，负责意图识别、域路由、能力编排与最终回答质量。",
    summary_en:
      "An in-product AI decision engine responsible for intent recognition, domain routing, capability orchestration, and answer quality.",
    role_cn: "后端负责人、决策中枢设计、能力调度",
    role_en: "Backend lead, decision engine design, and capability orchestration",
    period: "2025",
    tech_stack: ["LLM Routing", "Intent Recognition", "Tool Orchestration", "Backend Services"],
    metrics: [
      { value: "Multi-domain", label: { cn: "域路由能力", en: "Domain routing" } },
      { value: "Quality-first", label: { cn: "回答质量治理", en: "Answer quality control" } },
    ],
    sections: [
      {
        title: { cn: "背景", en: "Context" },
        body: {
          cn: "AI 助手需要在复杂产品环境中理解用户意图，并将请求稳定映射到合适能力与上下文。",
          en: "The assistant needed to understand user intent inside a complex product and route requests to the right capabilities and context with consistency.",
        },
      },
      {
        title: { cn: "技术设计", en: "Technical Design" },
        body: {
          cn: "我负责 AI 决策中枢与能力调度，将意图识别、域路由和能力编排串成一条闭环，重点保障最终响应质量。",
          en: "I led the AI decision engine and orchestration layer, connecting intent recognition, domain routing, and capability planning into a closed loop focused on answer quality.",
        },
      },
      {
        title: { cn: "结果", en: "Outcome" },
        body: {
          cn: "系统建立了更清晰的能力边界和调度策略，为产品内 AI 交互提供了更稳定的执行与回答体验。",
          en: "The system established clearer capability boundaries and routing logic, producing a more reliable assistant experience inside the product.",
        },
      },
    ],
    cover: "/placeholder-project-3.svg",
    gallery: ["/placeholder-project-3.svg", "/placeholder-detail-3.svg"],
    links: [{ label: { cn: "联系了解细节", en: "Discuss the System" }, url: "mailto:zihongcai2050@gmail.com" }],
    embed_enabled: false,
  },
];

export const articles: Article[] = [
  {
    slug: "building-laser-domain-ai-agents",
    title_cn: "构建 AI 激光垂类智能体的系统方法",
    title_en: "Building a Laser-domain AI Agent System",
    summary_cn: "从多智能体拓扑、异步架构到动态模型调度，我如何把复杂 AI 能力做成一套稳定产品。",
    summary_en: "How I turned multi-agent topology, async infrastructure, and dynamic model routing into a stable product system.",
    published_at: "2026-03-09",
    tags: ["Agents", "Architecture", "Productization"],
    cover: "/placeholder-article-1.svg",
    body: [
      {
        cn: "我对智能体系统的判断一直很直接：如果不能快速接进业务、稳定上线、被持续迭代，它就只是一个会动的原型。",
        en: "My view on agent systems is simple: if they cannot plug into real workflows, ship reliably, and sustain iteration, they are still only animated prototypes.",
      },
      {
        cn: "在 AI 激光垂类智能体的建设里，我更关心三件事：清晰的多智能体协作边界、可扩展的工具与 Prompt 体系，以及能承载真实吞吐的异步应用架构。",
        en: "In building the laser-domain AI agent, I focused on three concerns: clear multi-agent boundaries, extensible tool and prompt systems, and an async application architecture that can handle real throughput.",
      },
      {
        cn: "最终这套系统不是停留在 demo，而是形成了可持续迭代、可扩展、可交付的产品能力。",
        en: "The outcome was not a demo, but a product-grade capability that could keep evolving, scaling, and shipping.",
      },
    ],
  },
  {
    slug: "from-image-to-fabrication",
    title_cn: "从图像生成到加工可用：3D 与深浮雕的工程化路径",
    title_en: "From Image Generation to Fabrication-ready 3D",
    summary_cn: "生成式模型只有走进工艺约束，才能真正形成有价值的产品能力。",
    summary_en: "Generative models create real value only when they enter fabrication constraints and product workflows.",
    published_at: "2026-02-18",
    tags: ["3D", "Fabrication", "Imaging"],
    cover: "/placeholder-article-2.svg",
    body: [
      {
        cn: "图像生成很容易给人一种进展很快的错觉，但一旦进入加工场景，真正的问题才刚刚开始。",
        en: "Image generation often looks fast-moving until it enters fabrication scenarios, where the real problems finally begin.",
      },
      {
        cn: "深浮雕、点云和纹理重建都必须同时考虑速度、结构完整性和最终加工表现，这让算法预研和工程落地需要更紧密地绑在一起。",
        en: "Relief generation, point clouds, and texture reconstruction all have to balance speed, structure, and final fabrication quality, which tightly couples algorithm research with engineering execution.",
      },
    ],
  },
  {
    slug: "engineering-ai-systems-that-scale",
    title_cn: "让 AI 系统真正可扩展，不只是堆更多模型",
    title_en: "Scaling AI Systems Is More Than Adding Models",
    summary_cn: "从部署流程、资源切分到服务治理，稳定性来自系统设计，而不是单点优化。",
    summary_en: "From deployment workflows to GPU slicing and service governance, scale comes from system design rather than isolated tuning.",
    published_at: "2026-01-24",
    tags: ["Infra", "Deployment", "Systems"],
    cover: "/placeholder-article-3.svg",
    body: [
      {
        cn: "很多 AI 项目的瓶颈并不在模型本身，而在部署流程、资源利用率和服务治理。",
        en: "The bottleneck of many AI projects is not the model itself, but deployment workflow, resource efficiency, and service governance.",
      },
      {
        cn: "当我把部署从 8 步压缩到 3 步，把 GPU 切分方案和应用共享机制接上之后，整个团队的试错成本和上线速度都发生了明显变化。",
        en: "When I compressed deployment from eight steps to three and connected GPU slicing with shared application execution, the team moved faster and iterated with less friction.",
      },
    ],
  },
];

export const videos: Video[] = [
  {
    slug: "laser-agent-demo",
    title_cn: "AI 激光垂类智能体演示",
    title_en: "Laser-domain AI Agent Demo",
    summary_cn: "展示多智能体协作、图像处理链路与产品化能力的项目入口。",
    summary_en: "A showcase of multi-agent coordination, imaging workflows, and production-grade capability.",
    platform: "Private Demo",
    url: "mailto:zihongcai2050@gmail.com",
    cover: "/placeholder-video-1.svg",
    published_at: "2026-03-01",
  },
  {
    slug: "image-to-3d-demo",
    title_cn: "Image-to-3D 工艺场景演示",
    title_en: "Image-to-3D Fabrication Demo",
    summary_cn: "从位图到 3D 点云与深浮雕输出的核心效果展示。",
    summary_en: "A demonstration of image-to-point-cloud and relief output in fabrication-oriented scenarios.",
    platform: "Internal Demo",
    url: "mailto:zihongcai2050@gmail.com",
    cover: "/placeholder-video-2.svg",
    published_at: "2026-02-11",
  },
  {
    slug: "ai-assistant-walkthrough",
    title_cn: "xTool Studio AI 助手能力讲解",
    title_en: "xTool Studio AI Assistant Walkthrough",
    summary_cn: "关于意图识别、域路由和能力调度的产品型讲解。",
    summary_en: "A product-focused walkthrough of intent recognition, domain routing, and orchestration.",
    platform: "Presentation",
    url: "mailto:zihongcai2050@gmail.com",
    cover: "/placeholder-video-3.svg",
    published_at: "2026-01-09",
  },
];

export function pickText(language: Language, copy: LocalizedText): string {
  return copy[language] || copy.cn;
}
