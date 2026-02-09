import type { Tour } from "@/types/tour";
import type { FAQItem } from "./faqData";

const BASE_URL = "https://chichenitzatours.com";

// Generate Organization schema (use on homepage)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TourOperator",
  name: "Maya Explorer Tours",
  description:
    "Premier Chichen Itza tour operator offering day trips, private tours, and guided experiences from Cancun, Playa del Carmen, and Tulum.",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/images/chichen-itza-hero.jpg`,
  telephone: "+52-984-123-4567",
  email: "info@chichenitzatours.com",
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
    "https://www.facebook.com/chichenitzatours",
    "https://www.instagram.com/chichenitzatours",
    "https://twitter.com/chichenitza_tours",
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
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
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
      name: "Maya Explorer Tours",
    },
    offers: {
      "@type": "Offer",
      price: tour.price.adult.toString(),
      priceCurrency: tour.currency,
      availability: tour.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${BASE_URL}/tours/${tour.slug}`,
      priceValidUntil: "2026-12-31",
      seller: {
        "@type": "Organization",
        name: "Maya Explorer Tours",
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

// Location-specific schemas
export const locationSchemas = {
  cancun: {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Chichen Itza Tours from Cancún",
    description:
      "Best Chichen Itza day trips from Cancún. #1 rated tours with thousands of 5-star reviews. Book your UNESCO World Heritage adventure today.",
    url: `${BASE_URL}/tours-from/cancun`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.1619",
      longitude: "-86.8515",
    },
    tourBookingPage: `${BASE_URL}/tours-from/cancun`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2891",
    },
  },

  "playa-del-carmen": {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Chichen Itza Tours from Playa del Carmen",
    description:
      "Premium Chichen Itza day tours departing from Playa del Carmen. Only 1.5 hours away with expert guides, small groups, and free cancellation.",
    url: `${BASE_URL}/tours-from/playa-del-carmen`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.6296",
      longitude: "-87.0739",
    },
    tourBookingPage: `${BASE_URL}/tours-from/playa-del-carmen`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1847",
    },
  },

  tulum: {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Chichen Itza Tours from Tulum",
    description:
      "Explore Chichen Itza with guided tours from Tulum. Visit two incredible Mayan sites in one trip with expert guides.",
    url: `${BASE_URL}/tours-from/tulum`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.2114",
      longitude: "-87.4654",
    },
    tourBookingPage: `${BASE_URL}/tours-from/tulum`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1234",
    },
  },

  "riviera-maya": {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Chichen Itza Tours from Riviera Maya",
    description:
      "Convenient Chichen Itza tours from anywhere in the Riviera Maya. Hotel pickup from Puerto Aventuras, Akumal, and all major resorts.",
    url: `${BASE_URL}/tours-from/riviera-maya`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.5118",
      longitude: "-87.4341",
    },
    tourBookingPage: `${BASE_URL}/tours-from/riviera-maya`,
  },

  merida: {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Chichen Itza Tours from Mérida",
    description:
      "The shortest route to Chichen Itza! Day tours from Mérida take just 1.5 hours. Explore the ancient Mayan wonder with expert local guides.",
    url: `${BASE_URL}/tours-from/merida`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.9674",
      longitude: "-89.5926",
    },
    tourBookingPage: `${BASE_URL}/tours-from/merida`,
  },
};

// Guide page schemas
export const guideSchemas = {
  "best-time-to-visit": {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Time to Visit Chichen Itza - Complete 2026 Guide",
    description:
      "Discover the best time to visit Chichen Itza for perfect weather, fewer crowds, and unforgettable photos. Month-by-month breakdown and insider tips.",
    author: {
      "@type": "Organization",
      name: "Maya Explorer Tours",
    },
    publisher: {
      "@type": "Organization",
      name: "Maya Explorer Tours",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    datePublished: "2025-01-15",
    dateModified: "2026-02-01",
  },

  "what-to-bring": {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What to Bring to Chichen Itza - Essential Packing List",
    description:
      "Complete packing list for visiting Chichen Itza. Essential items, what to wear, prohibited items, and pro tips from experienced guides.",
    author: {
      "@type": "Organization",
      name: "Maya Explorer Tours",
    },
    publisher: {
      "@type": "Organization",
      name: "Maya Explorer Tours",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    datePublished: "2025-01-20",
    dateModified: "2026-02-01",
  },
};
