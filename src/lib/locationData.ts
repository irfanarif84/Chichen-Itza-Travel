import type { LocationInfo } from "@/types/tour";
import {
  cancunFAQs as cancunFAQsFromFaqData,
  playaDelCarmenFAQs as playaFAQsFromFaqData,
  tulumFAQs as tulumFAQsFromFaqData,
  rivieraMayaFAQs as rivieraMayaFAQsFromFaqData,
  meridaFAQs as meridaFAQsFromFaqData,
} from "./faqData";

// Re-export FAQs for convenience
export const cancunFAQs = cancunFAQsFromFaqData;
export const playaDelCarmenFAQs = playaFAQsFromFaqData;
export const tulumFAQs = tulumFAQsFromFaqData;
export const rivieraMayaFAQs = rivieraMayaFAQsFromFaqData;
export const meridaFAQs = meridaFAQsFromFaqData;

// Location metadata for SEO and page content
export const locations: LocationInfo[] = [
  {
    id: "cancun",
    name: "Cancún",
    slug: "cancun",
    description: "Explore Chichen Itza from Mexico's most popular beach destination. Just 2.5 hours from the Hotel Zone with daily departures and hotel pickup.",
    distanceToChichen: "200 km (120 miles)",
    driveTime: "2.5 hours",
    heroImage: "/images/locations/cancun-chichen-itza.jpg",
    metaTitle: "Chichen Itza Tours from Cancún - Best Day Trips 2026 | From $89",
    metaDescription: "Book the best Chichen Itza tours from Cancún. Expert guides, small groups, lunch & cenote included. Free cancellation. Instant confirmation.",
    h1: "Chichen Itza Tours from Cancún",
  },
  {
    id: "playa-del-carmen",
    name: "Playa del Carmen",
    slug: "playa-del-carmen",
    description: "The closest major city to Chichen Itza! Just 1.5 hours drive means more time exploring the ancient ruins and less time on the road.",
    distanceToChichen: "153 km (95 miles)",
    driveTime: "1.5-2 hours",
    heroImage: "/images/locations/playa-chichen-itza.jpg",
    metaTitle: "Chichen Itza Tours from Playa del Carmen - Premium Day Trips 2026",
    metaDescription: "Premium Chichen Itza tours from Playa del Carmen. Shortest drive (1.5 hrs), expert guides, cenote swimming. Free cancellation. Book now!",
    h1: "Chichen Itza Tours from Playa del Carmen",
  },
  {
    id: "tulum",
    name: "Tulum",
    slug: "tulum",
    description: "Combine two incredible Mayan experiences. Visit Chichen Itza on a day trip and enjoy Tulum's stunning beaches and bohemian atmosphere.",
    distanceToChichen: "153 km (95 miles)",
    driveTime: "2-2.5 hours",
    heroImage: "/images/locations/tulum-chichen-itza.jpg",
    metaTitle: "Chichen Itza Tours from Tulum - Day Trips & Packages 2026",
    metaDescription: "Chichen Itza day tours from Tulum. Expert Mayan guides, cenote visits, traditional lunch. Compare two UNESCO sites in one trip!",
    h1: "Chichen Itza Tours from Tulum",
  },
  {
    id: "riviera-maya",
    name: "Riviera Maya",
    slug: "riviera-maya",
    description: "Tours departing from Puerto Aventuras, Akumal, Xpu-Ha and all major Riviera Maya resorts. Convenient pickup from your hotel.",
    distanceToChichen: "130-180 km",
    driveTime: "1.5-2.5 hours",
    heroImage: "/images/locations/riviera-maya-chichen-itza.jpg",
    metaTitle: "Chichen Itza Tours from Riviera Maya - All-Inclusive Day Trips",
    metaDescription: "Chichen Itza tours with pickup from any Riviera Maya hotel. Puerto Aventuras, Akumal, Xpu-Ha. Expert guides, lunch included.",
    h1: "Chichen Itza Tours from Riviera Maya",
  },
  {
    id: "merida",
    name: "Mérida",
    slug: "merida",
    description: "The closest city to Chichen Itza! Just 1.5 hours away. Experience authentic Yucatecan culture with local guides.",
    distanceToChichen: "120 km (75 miles)",
    driveTime: "1.5 hours",
    heroImage: "/images/locations/merida-chichen-itza.jpg",
    metaTitle: "Chichen Itza Tours from Mérida - Shortest Route 2026",
    metaDescription: "Chichen Itza tours from Mérida - the shortest route! Just 1.5 hours drive. Local Yucatecan guides, authentic experiences. Book today!",
    h1: "Chichen Itza Tours from Mérida",
  },
];

export const getLocationBySlug = (slug: string): LocationInfo | undefined =>
  locations.find((l) => l.slug === slug);

// Location-specific content for SEO pages
export const cancunPageContent = {
  intro: `Discover the ancient Mayan wonder with our carefully curated Chichen Itza tours from Cancún. Located just 120 miles (2.5 hours drive) from Cancún's famous Hotel Zone, Chichen Itza is easily accessible as a day trip, making it one of the most popular excursions for Cancún visitors.

Our Cancún to Chichen Itza tours combine convenience with expertise. Every tour includes comfortable air-conditioned transportation with hotel pickup, certified archaeologist guides who bring the ruins to life, and typically a refreshing swim at a stunning cenote—the perfect way to cool off after exploring.

Whether you prefer an early sunrise experience before the crowds, a private VIP tour with skip-the-line access, or a budget-friendly option that covers all the highlights, we have the perfect Chichen Itza day trip for you.`,

  whyBook: [
    {
      title: "Convenient Hotel Pickup",
      description: "Free pickup from all major Cancún Hotel Zone properties. Your adventure starts from your hotel lobby."
    },
    {
      title: "Expert Local Guides",
      description: "Certified archaeologist guides share fascinating insights about Mayan history, astronomy, and culture."
    },
    {
      title: "Skip the Planning",
      description: "No need to worry about entrance tickets, parking, or navigation. Everything is handled for you."
    },
    {
      title: "Cenote Swimming Included",
      description: "Most tours include a swim at Cenote Ik Kil or other stunning natural sinkholes."
    },
  ],

  comparisonTable: {
    headers: ["Factor", "Guided Tour", "Self-Drive"],
    rows: [
      ["Cost (2 adults)", "$180-380 total", "$150-200 (gas, tolls, entrance, parking)"],
      ["Time Investment", "Relax on journey", "Focus on driving 5+ hours"],
      ["Historical Knowledge", "Expert archaeologist guide", "Audio guide or guidebook"],
      ["Cenote Access", "Usually included", "Must plan separately"],
      ["Convenience", "Door-to-door service", "Handle everything yourself"],
      ["Flexibility", "Fixed itinerary", "Complete freedom"],
      ["Best For", "First-time visitors", "Repeat visitors, multi-day trips"],
    ]
  },

  bestTime: `The best time to visit Chichen Itza from Cancún depends on your priorities:

**For Best Weather:** November through March offers comfortable temperatures (75-85°F) and minimal rain. This is peak tourist season, so book early.

**For Fewer Crowds:** Visit on weekdays and choose tours that arrive before 10 AM. Our Sunrise Tour arrives before general admission opens.

**For the Serpent Shadow:** The Spring and Fall Equinoxes (March 20-21 and September 22-23) create the famous serpent shadow on El Castillo. However, expect massive crowds.

**To Avoid:** July and August are the hottest months with frequent afternoon rain. December and January are busiest due to holiday travelers.`,
};

export const playaDelCarmenPageContent = {
  intro: `Embark on an unforgettable journey from Playa del Carmen to Chichen Itza, one of the New Seven Wonders of the World. Located just 95 miles west (approximately 1.5 hours), Chichen Itza is the perfect day trip from Playa's vibrant coastal setting.

Unlike tours from Cancún (2+ hours away), Playa del Carmen's proximity means more time exploring the ancient Mayan ruins and less time in transit. Whether you're staying in the bustling Quinta Avenida area or the peaceful Playacar resort zone, our pickup service ensures a hassle-free start to your Chichen Itza adventure.

Our expertly curated Chichen Itza tours from Playa del Carmen offer the ideal blend of convenience, education, and adventure. Choose from private tours, small group experiences, or sunrise access to beat the crowds.`,

  whyBook: [
    {
      title: "Shortest Drive Time",
      description: "Just 1.5 hours to Chichen Itza - the shortest route from any major tourist destination."
    },
    {
      title: "5th Avenue Pickup",
      description: "Convenient pickup from hotels along Quinta Avenida and Playacar resort zone."
    },
    {
      title: "More Time Exploring",
      description: "Less travel means more time at the ruins and cenotes. Arrive early, beat the crowds."
    },
    {
      title: "Expert Bilingual Guides",
      description: "Certified guides fluent in English and Spanish bring Mayan history to life."
    },
  ],

  comparisonTable: {
    headers: ["Factor", "Guided Tour", "Self-Drive"],
    rows: [
      ["Cost (2 adults)", "$180-380 total", "$140-180 (rental, gas, tolls, entrance)"],
      ["Drive Time", "Relax & enjoy", "3+ hours total driving"],
      ["Historical Context", "Expert archaeologist guide", "Self-guided or audio tour"],
      ["Cenote Visit", "Usually included", "Plan & pay separately"],
      ["Convenience", "Door-to-door service", "Navigate unfamiliar roads"],
      ["Flexibility", "Structured itinerary", "Go at your own pace"],
      ["Best For", "Most travelers", "Experienced Mexico drivers"],
    ]
  },

  bestTime: `**Best Time of Day:** Early morning (7-9 AM arrival) is ideal for cooler temperatures, golden light for photos, and fewer tourists. Our sunrise tours depart Playa at 5:30 AM.

**Best Season:** November through April offers dry weather and comfortable temperatures. May-October is rainy season with afternoon showers, but morning visits typically stay dry and crowds are smaller.

**Pro Tip:** Weekdays see 30-40% fewer visitors than weekends. Combine an early departure with a Tuesday-Thursday tour for the best experience.`,

  timeline: [
    { time: "6:30 AM", title: "Hotel Pickup", description: "Comfortable pickup from your Playa del Carmen hotel" },
    { time: "8:00 AM", title: "Arrive at Chichen Itza", description: "Beat the crowds with early arrival" },
    { time: "8:15 AM", title: "Guided Tour Begins", description: "Expert guide shares Mayan history and secrets" },
    { time: "10:30 AM", title: "Free Time", description: "Explore independently, take photos, browse artisan market" },
    { time: "11:30 AM", title: "Cenote Swimming", description: "Cool off in crystal-clear cenote waters" },
    { time: "12:30 PM", title: "Buffet Lunch", description: "Traditional Yucatecan cuisine" },
    { time: "2:00 PM", title: "Return Journey", description: "Relaxing drive back to Playa del Carmen" },
    { time: "4:00 PM", title: "Hotel Drop-off", description: "Return to your hotel" },
  ],
};

export const tulumPageContent = {
  intro: `Experience the best of both worlds with Chichen Itza tours from Tulum. While Tulum offers stunning coastal Mayan ruins overlooking the Caribbean, Chichen Itza showcases the massive inland pyramids that earned its place as one of the New Seven Wonders of the World.

Located approximately 95 miles (2-2.5 hours) from Tulum, Chichen Itza makes an excellent day trip. Our tours are designed to get you there early, before the crowds arrive from Cancún, giving you time to explore both the archaeological site and a refreshing cenote.

Tulum's bohemian atmosphere and eco-conscious vibe extend to our tours, with options including sustainable transport and visits to lesser-known cenotes. Return to Tulum's beautiful beaches by late afternoon for the perfect end to your day.`,

  whyBook: [
    {
      title: "Two UNESCO Sites",
      description: "Compare Tulum's coastal ruins with Chichen Itza's inland grandeur on the same trip."
    },
    {
      title: "Eco-Conscious Options",
      description: "Tours with sustainable practices, biodegradable products, and eco-cenote visits."
    },
    {
      title: "Flexible Scheduling",
      description: "Early departure gets you back in time for Tulum's famous sunset."
    },
    {
      title: "Local Mayan Guides",
      description: "Many guides are from local Mayan communities, offering authentic cultural insights."
    },
  ],

  comparisonTable: {
    headers: ["Factor", "Guided Tour", "Self-Drive"],
    rows: [
      ["Cost (2 adults)", "$180-380 total", "$150-200 (rental, gas, tolls, entrance)"],
      ["Time Investment", "Relax on journey", "4-5 hours driving"],
      ["Historical Knowledge", "Expert Mayan guide", "Guidebook or audio tour"],
      ["Cenote Access", "Included in most tours", "Research and plan separately"],
      ["Convenience", "Hotel pickup & drop-off", "Find parking, navigate roads"],
      ["Flexibility", "Set schedule", "Complete freedom"],
      ["Best For", "First-time visitors", "Road trip enthusiasts"],
    ]
  },

  bestTime: `**Best Time of Day:** Depart by 6:30 AM to arrive at Chichen Itza before 9 AM. This beats the midday heat and afternoon crowds from cruise ships.

**Best Season:** November through April offers ideal weather. The rainy season (May-October) brings afternoon thunderstorms but also smaller crowds and lower prices.

**Pro Tip:** If you're staying multiple days in Tulum, consider a sunrise tour for photography or an afternoon tour that includes the Chichen Itza light show.`,

  timeline: [
    { time: "6:00 AM", title: "Tulum Pickup", description: "Collection from Tulum Town, Hotel Zone, or Aldea Zama" },
    { time: "8:30 AM", title: "Arrive at Chichen Itza", description: "Early arrival before main tour buses" },
    { time: "8:45 AM", title: "Guided Tour", description: "2-hour tour with expert Mayan guide" },
    { time: "10:45 AM", title: "Free Exploration", description: "Photos, shopping, and personal discovery" },
    { time: "11:30 AM", title: "Cenote Visit", description: "Swim in a sacred natural pool" },
    { time: "12:30 PM", title: "Traditional Lunch", description: "Yucatecan buffet with vegetarian options" },
    { time: "2:00 PM", title: "Optional Stop", description: "Valladolid colonial town or second cenote" },
    { time: "4:30 PM", title: "Return to Tulum", description: "Back in time for sunset" },
  ],
};

export const rivieraMayaPageContent = {
  intro: `Discover Chichen Itza with convenient tours departing from anywhere in the Riviera Maya. Whether you're staying in Puerto Aventuras, Akumal, Xpu-Ha, or any resort along Mexico's famous Caribbean coastline, we offer hassle-free pickup and transportation to one of the world's most spectacular archaeological sites.

The Riviera Maya's central location means drive times of 1.5-2.5 hours depending on your exact hotel location. Our tour coordinators optimize pickup routes to minimize wait times while ensuring everyone arrives at Chichen Itza for an early morning experience.

All-inclusive resorts especially benefit from our day tours - step away from the beach for a day of culture, history, and adventure, then return to your resort's amenities by late afternoon.`,

  whyBook: [
    {
      title: "Resort Pickup Included",
      description: "Pickup from all major resorts along the Riviera Maya corridor, from Puerto Morelos to Tulum."
    },
    {
      title: "All-Inclusive Add-on",
      description: "Perfect complement to your resort stay - add culture and adventure to your beach vacation."
    },
    {
      title: "Optimized Routes",
      description: "Smart pickup schedules minimize wait times and maximize time at Chichen Itza."
    },
    {
      title: "Return by Sunset",
      description: "Back at your resort in time to enjoy evening activities and dinner."
    },
  ],

  comparisonTable: {
    headers: ["Factor", "Guided Tour", "Self-Drive"],
    rows: [
      ["Cost (2 adults)", "$180-380 total", "$160-220 (rental, gas, tolls, entrance)"],
      ["Convenience", "Door-to-door service", "Navigate from your resort"],
      ["Expert Knowledge", "Certified archaeologist guide", "Guidebook only"],
      ["Cenote Swim", "Usually included", "Plan and pay extra"],
      ["Lunch", "Included in most tours", "Find restaurant, pay separately"],
      ["Insurance", "Travel insurance included", "Check rental coverage"],
      ["Best For", "Resort guests", "Independent travelers"],
    ]
  },

  bestTime: `**Pickup Times:** Vary by location. Puerto Morelos hotels: 6:15 AM. Playa del Carmen: 6:30-7:00 AM. Puerto Aventuras/Akumal: 6:45-7:15 AM.

**Best Season:** November-April offers dry weather. All-inclusive guests often have more flexibility to book last-minute during shoulder seasons.

**Pro Tip:** Ask your resort concierge about partnered tours - some resorts offer exclusive packages or discounts.`,

  timeline: [
    { time: "6:15-7:15 AM", title: "Resort Pickup", description: "Pickup time varies by hotel location" },
    { time: "8:30-9:00 AM", title: "Arrive at Chichen Itza", description: "Early arrival before crowds" },
    { time: "9:00 AM", title: "Guided Tour", description: "2-hour expert-led exploration" },
    { time: "11:00 AM", title: "Free Time", description: "Independent exploration and shopping" },
    { time: "12:00 PM", title: "Lunch", description: "Traditional Yucatecan buffet" },
    { time: "1:00 PM", title: "Cenote Swim", description: "Refreshing dip in natural pool" },
    { time: "2:30 PM", title: "Return Journey", description: "Comfortable return to Riviera Maya" },
    { time: "4:30-5:30 PM", title: "Resort Drop-off", description: "Return based on location" },
  ],
};

export const meridaPageContent = {
  intro: `Mérida offers the shortest and most convenient route to Chichen Itza - just 75 miles (1.5 hours) from the white city to the ancient Mayan capital. This proximity means more relaxed mornings, longer exploration time, and early returns to enjoy Mérida's vibrant plazas and colonial architecture.

As the cultural heart of the Yucatán Peninsula, Mérida provides a different perspective on Chichen Itza tours. Local Yucatecan guides share deeper cultural connections and regional insights you won't get from coastal tour operators. Many guides are descendants of Maya families with generations of knowledge passed down.

Beyond the shorter drive, Mérida-based tours often include authentic Yucatecan experiences: visits to traditional haciendas, lesser-known cenotes, and the picturesque Yellow City of Izamal.`,

  whyBook: [
    {
      title: "Shortest Drive (1.5 hrs)",
      description: "The closest major city to Chichen Itza means more exploring, less traveling."
    },
    {
      title: "Local Yucatecan Guides",
      description: "Guides with deep cultural connections and authentic regional knowledge."
    },
    {
      title: "Unique Add-ons",
      description: "Combine with Izamal, Uxmal, or hacienda cenotes unavailable from coastal cities."
    },
    {
      title: "Colonial City Experience",
      description: "Explore Mérida's plazas and culture before or after your Chichen Itza adventure."
    },
  ],

  comparisonTable: {
    headers: ["Factor", "Guided Tour", "Self-Drive or Bus"],
    rows: [
      ["Cost (2 adults)", "$150-320 total", "$60-100 (bus/rental, entrance, lunch)"],
      ["Drive Time", "1.5 hours (relax)", "1.5 hours (drive yourself)"],
      ["Historical Context", "Expert Yucatecan guide", "Self-guided exploration"],
      ["Cenote Access", "Included in many tours", "Plan and pay separately"],
      ["Flexibility", "Structured itinerary", "Complete freedom"],
      ["Local Insights", "Deep cultural knowledge", "Tourist information only"],
      ["Best For", "Cultural immersion seekers", "Budget travelers"],
    ]
  },

  bestTime: `**Departure Times:** Mérida tours can leave slightly later (7:30-8:30 AM) thanks to the shorter drive. You'll still arrive before the Cancún buses.

**Best Season:** Mérida is warmer than coastal areas. November-February offers the most comfortable temperatures. Avoid April-May (hottest months).

**Pro Tip:** Consider staying a night in Mérida before or after. The city's Sunday cultural events, food scene, and colonial architecture are worth exploring.`,

  timeline: [
    { time: "7:30 AM", title: "Mérida Pickup", description: "Collection from your hotel or central meeting point" },
    { time: "9:00 AM", title: "Arrive at Chichen Itza", description: "Before crowds from coastal cities" },
    { time: "9:15 AM", title: "Guided Tour", description: "2-hour exploration with local guide" },
    { time: "11:15 AM", title: "Free Time", description: "Independent exploration and artisan market" },
    { time: "12:00 PM", title: "Cenote Visit", description: "Swim in a hacienda cenote" },
    { time: "1:00 PM", title: "Traditional Lunch", description: "Authentic Yucatecan cuisine at local restaurant" },
    { time: "2:30 PM", title: "Optional: Izamal", description: "Visit the Yellow City (select tours)" },
    { time: "4:00 PM", title: "Return to Mérida", description: "Afternoon arrival for evening exploration" },
  ],
};

export const locationPageContent: Record<string, typeof cancunPageContent> = {
  cancun: cancunPageContent,
  "playa-del-carmen": playaDelCarmenPageContent,
  tulum: tulumPageContent,
  "riviera-maya": rivieraMayaPageContent,
  merida: meridaPageContent,
};
