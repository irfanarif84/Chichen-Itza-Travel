import type { LocationInfo } from "@/types/tour";

// Cancun-specific FAQ data
export const cancunFAQs = [
  {
    question: "How long is the drive from Cancún to Chichen Itza?",
    answer: "The drive from Cancún to Chichen Itza takes approximately 2.5 hours (120 miles/195 km) via the toll highway. Most tours depart early morning between 6-7 AM to arrive before the crowds."
  },
  {
    question: "What is included in a typical Cancún to Chichen Itza tour?",
    answer: "Most tours include round-trip air-conditioned transportation, a certified bilingual guide, Chichen Itza entrance fees, buffet lunch, and often a cenote swim. Premium tours may add skip-the-line access and gourmet meals."
  },
  {
    question: "Is it better to take a tour or drive myself from Cancún?",
    answer: "A guided tour is recommended for most visitors. Benefits include expert historical commentary, no parking hassles, included entrance fees, and the option to swim at cenotes while someone else drives. Self-driving only makes sense if you want maximum flexibility."
  },
  {
    question: "What time do tours leave from Cancún?",
    answer: "Most day tours depart between 6:00-7:30 AM to arrive at Chichen Itza before peak crowds. Sunrise tours leave earlier (around 3:30 AM), while night tours for the light show depart around 4:00 PM."
  },
  {
    question: "Can I be picked up from my Cancún hotel?",
    answer: "Yes! All our tours include complimentary pickup from hotels in the Cancún Hotel Zone. Some budget tours pick up from central meeting points. Your exact pickup time is confirmed 24 hours before the tour."
  },
  {
    question: "What should I bring on the tour from Cancún?",
    answer: "Bring comfortable walking shoes, sunscreen, a hat, sunglasses, a swimsuit and towel (for cenote), cash for tips and souvenirs, and a camera. Most tours provide bottled water."
  },
  {
    question: "Are Chichen Itza tours from Cancún suitable for children?",
    answer: "Yes! We offer family-friendly tours designed for children with interactive storytelling, activity booklets, and safe cenote swimming with life vests. Children under 3 typically travel free."
  },
  {
    question: "What is the best time of year to visit Chichen Itza from Cancún?",
    answer: "November to March offers the best weather with lower humidity and temperatures. The Spring Equinox (March 20-21) features the famous serpent shadow on El Castillo but is extremely crowded. Avoid July-August if possible due to heat and rain."
  },
  {
    question: "Do tours include entrance fees to Chichen Itza?",
    answer: "Yes, all our tours include the Chichen Itza entrance fee (currently 614 MXN / ~$35 USD for foreigners). This covers both the federal and state fees. VIP tours may include expedited entry."
  },
  {
    question: "Can I cancel my Cancún to Chichen Itza tour?",
    answer: "Yes! We offer free cancellation up to 24 hours before your tour for a full refund. Cancellations within 24 hours are non-refundable. In case of severe weather, we'll reschedule at no extra cost."
  },
  {
    question: "Is lunch included in Cancún tours to Chichen Itza?",
    answer: "Most tours (except budget options) include a buffet lunch featuring traditional Yucatecan cuisine like cochinita pibil, panuchos, and sopa de lima. Vegetarian options are available with advance notice."
  },
  {
    question: "How crowded is Chichen Itza when visiting from Cancún?",
    answer: "Chichen Itza receives 2+ million visitors annually. To avoid crowds: choose early morning tours arriving before 10 AM, or opt for our Sunrise Tour. Weekdays are less crowded than weekends."
  },
];

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

export const locationPageContent: Record<string, typeof cancunPageContent> = {
  cancun: cancunPageContent,
  // Add other locations as needed
};
