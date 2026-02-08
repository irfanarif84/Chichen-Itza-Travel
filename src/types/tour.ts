export interface Tour {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  // SEO fields
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  // Images
  heroImage: string;
  images: TourImage[];
  // Pricing
  price: TourPrice;
  originalPrice?: number;
  currency: string;
  // Duration & Group
  duration: string;
  durationHours: number;
  groupSize: GroupSize;
  // Classification
  tourType: TourType;
  departureCity: DepartureCity[];
  category: TourCategory[];
  // Content
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryStep[];
  // Meeting point
  meetingPoint?: MeetingPoint;
  // Reviews & Status
  rating: number;
  reviewCount: number;
  featured: boolean;
  available: boolean;
  badge?: string;
}

export interface TourPrice {
  adult: number;
  child: number;
  infant?: number;
}

export interface GroupSize {
  min: number;
  max: number;
  type: "small-group" | "private" | "large-group";
}

export interface TourImage {
  url: string;
  alt: string;
  title: string;
}

export interface MeetingPoint {
  address: string;
  instructions?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ItineraryStep {
  time: string;
  title: string;
  description: string;
  icon?: string;
}

export type TourType = "group" | "private" | "luxury" | "budget" | "family" | "vip";
export type DepartureCity = "cancun" | "playa-del-carmen" | "tulum" | "riviera-maya" | "merida";
export type TourCategory = 
  | "day-tours" 
  | "private-tours" 
  | "sunrise-tours" 
  | "cenote-tours" 
  | "night-tours" 
  | "combo" 
  | "small-group" 
  | "luxury" 
  | "budget" 
  | "family-friendly" 
  | "vip-skip-the-line"
  | "valladolid"
  | "ek-balam";

export interface TourFilter {
  priceRange: [number, number];
  duration: string[];
  tourType: TourType[];
  departureCity: DepartureCity[];
  category: TourCategory[];
}

// Helper type for location pages
export interface LocationInfo {
  id: DepartureCity;
  name: string;
  slug: string;
  description: string;
  distanceToChichen: string;
  driveTime: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
}
