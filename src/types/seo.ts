export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}