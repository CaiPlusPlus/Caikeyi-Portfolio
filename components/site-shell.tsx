"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { profile, siteCopy } from "@/site-data/content";
import { useLanguage } from "@/components/language-provider";

function textFor(language: "cn" | "en", cn: string, en: string) {
  return language === "cn" ? cn : en;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { href: "/about", label: textFor(language, siteCopy.nav.about.cn, siteCopy.nav.about.en) },
    {
      href: "/projects",
      label: textFor(language, siteCopy.nav.projects.cn, siteCopy.nav.projects.en),
    },
    {
      href: "/articles",
      label: textFor(language, siteCopy.nav.articles.cn, siteCopy.nav.articles.en),
    },
    { href: "/videos", label: textFor(language, siteCopy.nav.videos.cn, siteCopy.nav.videos.en) },
  ];

  return (
    <div className="site-frame">
      <header className="site-header">
        <Link href="/" className="brand-mark">
          <span>{language === "cn" ? profile.name_cn : profile.name_en}</span>
          <small>{language === "cn" ? profile.headline_cn : profile.headline_en}</small>
        </Link>

        <nav className="site-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="language-switch"
          onClick={() => setLanguage(language === "cn" ? "en" : "cn")}
          aria-label="Toggle language"
        >
          {language === "cn" ? "EN" : "中文"}
        </button>
      </header>
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <div>
          <p className="footer-title">{language === "cn" ? profile.name_cn : profile.name_en}</p>
          <p className="footer-copy">
            {language === "cn" ? siteCopy.footer.intro.cn : siteCopy.footer.intro.en}
          </p>
        </div>
        <div className="footer-links">
          {profile.socials.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
