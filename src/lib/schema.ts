import type { Tour } from "@/types/tour";
import type { FAQItem } from "./faqData";

const BASE_URL = "https://chichenitzatravel.com";

// Returns YYYY-12-31 of the current year so offer schemas never expire mid-year.
// Rolls forward automatically: in late Dec, returns next year's end-of-year.
const getPriceValidUntil = (): string => {
  const now = new Date();
  const year = now.getMonth() === 11 && now.getDate() >= 15 ? now.getFullYear() + 1 : now.getFullYear();
  return `${year}-12-31`;
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Chichen Itza Tours",
  alternateName: "Chichen Itza Tours",
  url: BASE_URL,
  inLanguage: ["en", "es"],
};

// Generate Organization schema (use on homepage)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Chichen Itza Tours",
  alternateName: "Chichen Itza Tours",
  description:
    "Premier Chichen Itza tour operator offering day trips, private tours, and guided experiences from Cancun, Playa del Carmen, and Tulum.",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/images/chichen-itza-hero.jpg`,
  telephone: "+1-814-593-9266",
  email: "info@chichenitzatravel.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5th Avenue #123",
    addressLocality: "Playa del Carmen",
    addressRegion: "Quintana Roo",
    postalCode: "77710",
    addressCountry: "MX",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "3247",
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$89 - $299",
  sameAs: [
    "https://www.facebook.com/chichenitzatravel",
    "https://www.instagram.com/chichenitzatravel",
    "https://twitter.com/chichenitzatravel",
  ],
};

// Generate TouristAttraction schema for Chichen Itza
export const chichenItzaAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Chichen Itza",
  description:
    "One of the New Seven Wonders of the World and UNESCO World Heritage Site, featuring the iconic El Castillo pyramid and ancient Mayan ruins.",
  image: `${BASE_URL}/images/chichen-itza-el-castillo.jpg`,
  url: BASE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tinum",
    addressRegion: "Yucatan",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "20.6843",
    longitude: "-88.5678",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "08:00",
    closes: "17:00",
  },
};

// Generate Product schema for individual tours
export function generateTourProductSchema(tour: Tour) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: tour.title,
    description: tour.shortDescription,
    image: tour.images.map((img) => img.url),
    brand: {
      "@type": "Brand",
      name: "Chichen Itza Tours",
    },
    offers: {
      "@type": "Offer",
      price: tour.price.adult.toString(),
      priceCurrency: tour.currency,
      availability: tour.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${BASE_URL}/tours/${tour.slug}`,
      priceValidUntil: getPriceValidUntil(),
      seller: {
        "@type": "Organization",
        name: "Chichen Itza Tours",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tour.rating.toString(),
      reviewCount: tour.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

// Generate ItemList schema for tour category/listing pages
// (e.g. /tours, /tour-types/luxury, /tour-types/small-group, /tours-from/cancun)
export function generateTourItemListSchema(config: {
  name: string;
  description?: string;
  url: string;
  tours: Array<{
    title: string;
    slug: string;
    shortDescription?: string;
    price?: { adult: number };
    currency?: string;
    rating?: number;
    reviewCount?: number;
    images?: Array<{ url: string }>;
  }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: config.name,
    ...(config.description ? { description: config.description } : {}),
    url: `${BASE_URL}${config.url}`,
    numberOfItems: config.tours.length,
    itemListElement: config.tours.map((tour, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: tour.title,
        url: `${BASE_URL}/tours/${tour.slug}`,
        ...(tour.shortDescription ? { description: tour.shortDescription } : {}),
        ...(tour.images?.[0]?.url ? { image: tour.images[0].url } : {}),
        ...(tour.price
          ? {
              offers: {
                "@type": "Offer",
                price: tour.price.adult.toString(),
                priceCurrency: tour.currency || "USD",
                availability: "https://schema.org/InStock",
                url: `${BASE_URL}/tours/${tour.slug}`,
              },
            }
          : {}),
        ...(tour.rating && tour.reviewCount
          ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: tour.rating.toString(),
                reviewCount: tour.reviewCount.toString(),
                bestRating: "5",
              },
            }
          : {}),
      },
    })),
  };
}

// Generate ContactPage schema (use on /practical/contact)
export function generateContactPageSchema(config: {
  url: string;
  name: string;
  description: string;
  inLanguage?: "en" | "es";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${BASE_URL}${config.url}`,
    name: config.name,
    description: config.description,
    inLanguage: config.inLanguage || "en",
    isPartOf: { "@type": "WebSite", url: BASE_URL, name: "Chichen Itza Tours" },
    mainEntity: {
      "@type": "Organization",
      name: "Chichen Itza Tours",
      url: BASE_URL,
      telephone: "+1-814-593-9266",
      email: "info@chichenitzatravel.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5th Avenue #123",
        addressLocality: "Playa del Carmen",
        addressRegion: "Quintana Roo",
        postalCode: "77710",
        addressCountry: "MX",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+1-814-593-9266",
        email: "info@chichenitzatravel.com",
        areaServed: ["MX", "US", "CA", "GB"],
        availableLanguage: ["English", "Spanish", "French"],
      },
    },
  };
}

// Generate generic WebPage schema for informational/policy pages
// (use on /practical/booking-info, /practical/cancellation-policy)
export function generateWebPageSchema(config: {
  url: string;
  name: string;
  description: string;
  inLanguage?: "en" | "es";
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${BASE_URL}${config.url}`,
    name: config.name,
    description: config.description,
    inLanguage: config.inLanguage || "en",
    isPartOf: { "@type": "WebSite", url: BASE_URL, name: "Chichen Itza Tours" },
    publisher: {
      "@type": "Organization",
      name: "Chichen Itza Tours",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
    },
    ...(config.datePublished ? { datePublished: config.datePublished } : {}),
    ...(config.dateModified ? { dateModified: config.dateModified } : {}),
  };
}

// Generate TouristTrip schema for combo/multi-site tour packages
export function generateComboTouristTripSchema(config: {
  name: string;
  description: string;
  slug: string;
  image: string;
  priceFrom: number;
  rating?: string;
  reviewCount?: string;
  itinerary?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: config.name,
    description: config.description,
    url: `${BASE_URL}/combo-tours/${config.slug}`,
    image: config.image,
    touristType: ["Sightseeing", "Adventure", "Cultural"],
    provider: {
      "@type": "TravelAgency",
      name: "Chichen Itza Tours",
      url: BASE_URL,
    },
    offers: {
      "@type": "Offer",
      price: config.priceFrom.toString(),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/combo-tours/${config.slug}`,
      priceValidUntil: getPriceValidUntil(),
    },
    ...(config.rating && config.reviewCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: config.rating,
            reviewCount: config.reviewCount,
            bestRating: "5",
          },
        }
      : {}),
    ...(config.itinerary
      ? {
          itinerary: {
            "@type": "ItemList",
            itemListElement: config.itinerary.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item,
            })),
          },
        }
      : {}),
  };
}

// Location-specific schemas
export const locationSchemas = {
  cancun: {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Chichen Itza Tours from Cancún",
    description:
      "Best Chichen Itza day trips from Cancún. #1 rated tours with thousands of 5-star reviews. Book your UNESCO World Heritage adventure today.",
    url: `${BASE_URL}/tours-from/cancun`,
    geo: { "@type": "GeoCoordinates", latitude: "21.1619", longitude: "-86.8515" },
    tourBookingPage: `${BASE_URL}/tours-from/cancun`,
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2891" },
  },
  "playa-del-carmen": {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Chichen Itza Tours from Playa del Carmen",
    description:
      "Premium Chichen Itza day tours departing from Playa del Carmen. Only 1.5 hours away with expert guides, small groups, and free cancellation.",
    url: `${BASE_URL}/tours-from/playa-del-carmen`,
    geo: { "@type": "GeoCoordinates", latitude: "20.6296", longitude: "-87.0739" },
    tourBookingPage: `${BASE_URL}/tours-from/playa-del-carmen`,
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1847" },
  },
  tulum: {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Chichen Itza Tours from Tulum",
    description:
      "Explore Chichen Itza with guided tours from Tulum. Visit two incredible Mayan sites in one trip with expert guides.",
    url: `${BASE_URL}/tours-from/tulum`,
    geo: { "@type": "GeoCoordinates", latitude: "20.2114", longitude: "-87.4654" },
    tourBookingPage: `${BASE_URL}/tours-from/tulum`,
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1234" },
  },
  "riviera-maya": {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Chichen Itza Tours from Riviera Maya",
    description:
      "Convenient Chichen Itza tours from anywhere in the Riviera Maya. Hotel pickup from Puerto Aventuras, Akumal, and all major resorts.",
    url: `${BASE_URL}/tours-from/riviera-maya`,
    geo: { "@type": "GeoCoordinates", latitude: "20.5118", longitude: "-87.4341" },
    tourBookingPage: `${BASE_URL}/tours-from/riviera-maya`,
  },
  merida: {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Chichen Itza Tours from Mérida",
    description:
      "The shortest route to Chichen Itza! Day tours from Mérida take just 1.5 hours. Explore the ancient Mayan wonder with expert local guides.",
    url: `${BASE_URL}/tours-from/merida`,
    geo: { "@type": "GeoCoordinates", latitude: "20.9674", longitude: "-89.5926" },
    tourBookingPage: `${BASE_URL}/tours-from/merida`,
  },
};

// Helper to create Article schema for guide pages
function createGuideArticleSchema(config: {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: config.headline,
    description: config.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/guide/${config.slug}`,
    },
    image: `${BASE_URL}/images/guides/${config.slug}.jpg`,
    author: { "@type": "Organization", name: "Chichen Itza Tours" },
    publisher: {
      "@type": "Organization",
      name: "Chichen Itza Tours",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
    },
    datePublished: config.datePublished,
    dateModified: config.dateModified,
  };
}

// Guide page schemas — all 8 guides
export const guideSchemas = {
  "best-time-to-visit": createGuideArticleSchema({
    headline: "Best Time to Visit Chichen Itza - Complete 2026 Guide",
    description: "Discover the best time to visit Chichen Itza for perfect weather, fewer crowds, and unforgettable photos. Month-by-month breakdown and insider tips.",
    slug: "best-time-to-visit",
    datePublished: "2025-01-15",
    dateModified: "2026-02-01",
  }),
  "what-to-bring": createGuideArticleSchema({
    headline: "What to Bring to Chichen Itza - Essential Packing List",
    description: "Complete packing list for visiting Chichen Itza. Essential items, what to wear, prohibited items, and pro tips from experienced guides.",
    slug: "what-to-bring",
    datePublished: "2025-01-20",
    dateModified: "2026-02-01",
  }),
  "history-and-facts": createGuideArticleSchema({
    headline: "Chichen Itza History & Facts – Ancient Mayan Wonder",
    description: "Explore the fascinating 1,400-year history of Chichen Itza. Timeline, El Castillo facts, major structures, and 25 amazing facts about this UNESCO site.",
    slug: "history-and-facts",
    datePublished: "2025-01-25",
    dateModified: "2026-02-15",
  }),
  "how-to-get-there": createGuideArticleSchema({
    headline: "How to Get to Chichen Itza – Complete Transportation Guide 2026",
    description: "Complete guide to reaching Chichen Itza from Cancun, Playa del Carmen, Tulum. Tours, rental cars, buses, distances, and costs compared.",
    slug: "how-to-get-there",
    datePublished: "2025-01-28",
    dateModified: "2026-02-15",
  }),
  "entrance-fees": createGuideArticleSchema({
    headline: "Chichen Itza Entrance Fees 2026 – Complete Pricing Guide",
    description: "Complete guide to Chichen Itza entrance fees, tickets, payment methods, discounts. Updated 2026 pricing for tours vs independent visits.",
    slug: "entrance-fees",
    datePublished: "2025-02-01",
    dateModified: "2026-02-15",
  }),
  "photography-tips": createGuideArticleSchema({
    headline: "Chichen Itza Photography Tips – Complete Guide 2026",
    description: "Expert photography tips for Chichen Itza. Best times, camera settings, composition techniques, prohibited equipment. Capture stunning photos.",
    slug: "photography-tips",
    datePublished: "2025-02-05",
    dateModified: "2026-02-15",
  }),
  "dress-code-and-rules": createGuideArticleSchema({
    headline: "Chichen Itza Dress Code & Rules – Complete Visitor Guide 2026",
    description: "Complete guide to Chichen Itza dress code, rules, prohibited items, visitor etiquette. What to wear, what not to bring, cultural respect guidelines.",
    slug: "dress-code-and-rules",
    datePublished: "2025-02-08",
    dateModified: "2026-02-15",
  }),
  "vs-other-ruins": createGuideArticleSchema({
    headline: "Chichen Itza vs Other Mayan Ruins – Complete Comparison Guide",
    description: "Compare Chichen Itza to Tulum, Coba, Ek Balam, and Uxmal. See which Mayan ruins to visit based on crowds, climbability, fees, and travel time.",
    slug: "vs-other-ruins",
    datePublished: "2025-02-01",
    dateModified: "2026-02-15",
  }),
};
