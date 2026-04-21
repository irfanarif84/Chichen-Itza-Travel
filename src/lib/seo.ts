import type { PageMeta } from "@/types/seo";
import type { Locale } from "@/lib/i18n/useLocale";
import { enToEsRoutes } from "@/lib/i18n/routeMap";

const BASE_URL = "https://chichenitzatravel.com";

export const getPageMeta = (meta: Partial<PageMeta> & { locale?: Locale }): PageMeta => {
  const locale = meta.locale || "en";
  const enPath = locale === "en" ? (meta.canonical || "/") : (meta.canonical || "/").replace(/^\/es/, "") || "/";
  const esPath = enToEsRoutes[enPath] || `/es${enPath}`;

  return {
    title: meta.title || "Chichen Itza Tours – Best Guided Tours 2026",
    description: meta.description || "Book the best Chichen Itza tours from Cancun, Playa del Carmen & Tulum. Free cancellation & instant confirmation.",
    canonical: meta.canonical ? `${BASE_URL}${meta.canonical}` : BASE_URL,
    ogImage: meta.ogImage,
    jsonLd: meta.jsonLd,
    robots: meta.robots,
    locale,
    alternateUrls: { en: enPath, es: esPath },
  };
};

export const createFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const createBreadcrumbSchema = (items: { name: string; url?: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    ...(item.url ? { item: `${BASE_URL}${item.url}` } : {}),
  })),
});
