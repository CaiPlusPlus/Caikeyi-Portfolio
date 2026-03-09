import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-provider";
import { PageTransition } from "@/components/page-transition";
import { SiteShell } from "@/components/site-shell";
import { profile } from "@/site-data/content";
import "./globals.css";

export const metadata: Metadata = {
  title: "菜可以 | AI 算法开发工程师",
  description: "AI 激光垂类智能体、3D 生成与 AI 助手相关的个人门户站。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <LanguageProvider>
          <PageTransition>
            <SiteShell>{children}</SiteShell>
          </PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
