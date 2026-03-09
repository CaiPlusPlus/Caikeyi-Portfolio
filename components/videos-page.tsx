"use client";

import { VideoCard } from "@/components/cards";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { siteCopy, videos } from "@/site-data/content";

export function VideosPage() {
  const { language } = useLanguage();

  return (
    <div className="page-stack">
      <Reveal className="page-intro is-first">
        <p className="section-label">{language === "cn" ? siteCopy.videosPage.title.cn : siteCopy.videosPage.title.en}</p>
        <h1>{language === "cn" ? "视频展示" : "Video Showcase"}</h1>
        <p className="intro-deck">{language === "cn" ? siteCopy.videosPage.deck.cn : siteCopy.videosPage.deck.en}</p>
      </Reveal>
      <section className="card-grid">
        {videos.map((video, index) => (
          <Reveal key={video.slug} delay={index * 80}>
            <VideoCard video={video} />
          </Reveal>
        ))}
      </section>
    </div>
  );
}
