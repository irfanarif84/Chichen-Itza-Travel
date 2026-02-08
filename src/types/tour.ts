export interface Tour {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  images: string[];
  price: number;
  originalPrice?: number;
  currency: string;
  duration: string;
  durationHours: number;
  groupSize: string;
  tourType: TourType;
  departureCity: DepartureCity[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryStep[];
  rating: number;
  reviewCount: number;
  featured: boolean;
  badge?: string;
  category: TourCategory[];
}

export type TourType = "group" | "private" | "luxury" | "budget" | "family" | "vip";
export type DepartureCity = "cancun" | "playa-del-carmen" | "tulum" | "riviera-maya" | "merida";
export type TourCategory = "day-tours" | "private-tours" | "sunrise-tours" | "cenote-tours" | "night-tours" | "combo" | "small-group" | "luxury" | "budget" | "family-friendly" | "vip-skip-the-line";

export interface ItineraryStep {
  time: string;
  title: string;
  description: string;
}

export interface TourFilter {
  priceRange: [number, number];
  duration: string[];
  tourType: TourType[];
  departureCity: DepartureCity[];
  category: TourCategory[];
}