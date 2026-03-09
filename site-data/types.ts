export type Language = "cn" | "en";

export type LocalizedText = {
  cn: string;
  en: string;
};

export type SocialLink = {
  label: string;
  url: string;
};

export type Profile = {
  name_cn: string;
  name_en: string;
  headline_cn: string;
  headline_en: string;
  subtitle_cn: string;
  subtitle_en: string;
  bio_cn: string;
  bio_en: string;
  email: string;
  avatar?: string;
  location: LocalizedText;
  value_cn: string;
  value_en: string;
  socials: SocialLink[];
};

export type Metric = {
  value: string;
  label: LocalizedText;
};

export type ProjectSection = {
  title: LocalizedText;
  body: LocalizedText;
};

export type ProjectLink = {
  label: LocalizedText;
  url: string;
};

export type Project = {
  slug: string;
  title_cn: string;
  title_en: string;
  summary_cn: string;
  summary_en: string;
  role_cn: string;
  role_en: string;
  period: string;
  tech_stack: string[];
  metrics: Metric[];
  sections: ProjectSection[];
  cover: string;
  gallery: string[];
  links: ProjectLink[];
  embed_url?: string;
  embed_enabled: boolean;
};

export type Article = {
  slug: string;
  title_cn: string;
  title_en: string;
  summary_cn: string;
  summary_en: string;
  published_at: string;
  tags: string[];
  cover: string;
  body: LocalizedText[];
};

export type Video = {
  slug: string;
  title_cn: string;
  title_en: string;
  summary_cn: string;
  summary_en: string;
  platform: string;
  url: string;
  cover: string;
  published_at: string;
};
