import type { PageMeta } from "@/types/seo";

const BASE_URL = "https://chichenitzatours.com";

export const getPageMeta = (meta: Partial<PageMeta>): PageMeta => ({
  title: meta.title || "Chichen Itza Tours – Best Guided Tours 2026",
  description: meta.description || "Book the best Chichen Itza tours from Cancun, Playa del Carmen & Tulum. Free cancellation & instant confirmation.",
  canonical: meta.canonical ? `${BASE_URL}${meta.canonical}` : BASE_URL,
  ogImage: meta.ogImage,
  jsonLd: meta.jsonLd,
});

export const createTourSchema = (tour: { title: string; description: string; price: number; rating: number; reviewCount: number; duration: string; images?: string[] }) => ({
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: tour.title,
  description: tour.description,
  offers: {
    "@type": "Offer",
    price: tour.price,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: tour.rating,
    reviewCount: tour.reviewCount,
    bestRating: 5,
  },
  touristType: "Sightseeing",
  itinerary: {
    "@type": "ItemList",
    name: tour.title,
  },
});

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