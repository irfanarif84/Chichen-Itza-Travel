export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  robots?: string;
  locale?: "en" | "es";
  alternateUrls?: { en: string; es: string };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
