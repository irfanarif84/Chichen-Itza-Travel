export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "spring-equinox-chichen-itza-guide",
    title: "The Spring Equinox at Chichen Itza: Everything You Need to Know",
    metaTitle: "Spring Equinox at Chichen Itza 2026 – Complete Guide",
    metaDescription: "Plan your Spring Equinox visit to Chichen Itza. See the serpent shadow on El Castillo, crowd tips, best viewing spots, and booking advice.",
    excerpt: "Every March 20-21, thousands gather to witness the serpent of light descend El Castillo. Here's how to make the most of this magical event.",
    content: [
      "The Spring Equinox at Chichen Itza is one of Mexico's most spectacular astronomical events. Twice a year, on the spring and fall equinoxes, the setting sun casts a series of triangular shadows on the northern staircase of El Castillo, creating the illusion of a serpent slithering down the pyramid — the feathered serpent god Kukulkan.",
      "This phenomenon demonstrates the incredible astronomical knowledge of the ancient Maya, who designed the pyramid with mathematical precision over 1,000 years ago. The shadow effect begins around 3:00 PM and lasts approximately 45 minutes, with the serpent becoming most visible around 4:00-4:30 PM.",
      "If you're planning to witness this event, preparation is key. Expect 30,000-40,000 visitors on the equinox days. Arrive by 8:00 AM to secure a good viewing position near the northern staircase. The site opens at 8:00 AM and the shadow appears in the afternoon.",
      "Pro tip: Visit on March 19 or March 22 instead. The shadow effect is nearly identical a day or two before and after the actual equinox, but with 80-90% fewer visitors. You'll get better photos and a more peaceful experience.",
      "Our sunrise tours on equinox week include early access, expert commentary on the astronomical significance, and strategic positioning for the best views. Book at least 3 months in advance for equinox week."
    ],
    author: "Maya Explorer Tours",
    date: "2026-01-15",
    category: "Events",
    readTime: "6 min read",
    image: "/images/blog/equinox.jpg",
    imageAlt: "Serpent shadow descending El Castillo pyramid during Spring Equinox at Chichen Itza",
    tags: ["equinox", "el castillo", "events", "photography"],
  },
  {
    slug: "cenotes-near-chichen-itza",
    title: "7 Best Cenotes Near Chichen Itza Worth Swimming In",
    metaTitle: "7 Best Cenotes Near Chichen Itza – Swimming Guide 2026",
    metaDescription: "Discover the 7 best cenotes near Chichen Itza for swimming. From famous Ik Kil to hidden gems. Tips, prices, and what to bring.",
    excerpt: "The Yucatan's crystal-clear cenotes are the perfect complement to a day exploring ancient ruins. Here are 7 you shouldn't miss.",
    content: [
      "The Yucatan Peninsula is home to over 6,000 cenotes — natural sinkholes filled with crystal-clear groundwater. Many of the most spectacular cenotes are located within easy reach of Chichen Itza, making a cenote swim the perfect way to cool off after exploring the ruins.",
      "Cenote Ik Kil tops most lists for good reason. Located just 3 km from Chichen Itza, this open-air cenote features dramatic hanging vines, waterfalls, and a swimming area 26 meters below ground level. It's well-maintained with stairs, changing rooms, and life vests. Expect crowds midday — visit before 10 AM or after 3 PM.",
      "Cenote Saamal in Valladolid offers a more intimate experience. This semi-open cenote is located right in the town center, making it perfect for combo tours that include Valladolid exploration. The turquoise waters and lush vegetation create a magical atmosphere.",
      "For the adventurous, Cenote Suytun is an underground cathedral cenote with a single shaft of light illuminating a stone platform in the center — incredibly photogenic. Cenote Oxman features a rope swing and is surrounded by a beautiful hacienda property.",
      "Cenote Hubiku, Cenote Samulá, and Cenote Xkekén round out our top 7, each offering unique geological formations and swimming experiences. Our combo tours visit the cenotes best suited to your group size and interests.",
      "Essential tips: Bring biodegradable sunscreen (regular sunscreen is prohibited), a waterproof phone pouch, and water shoes. Most cenotes charge $5-10 USD entry and provide life vests. Arrive early for the best experience."
    ],
    author: "Maya Explorer Tours",
    date: "2026-01-28",
    category: "Travel Tips",
    readTime: "8 min read",
    image: "/images/blog/cenotes.jpg",
    imageAlt: "Crystal clear turquoise water inside Cenote Ik Kil near Chichen Itza with hanging vines",
    tags: ["cenotes", "swimming", "ik kil", "nature"],
  },
  {
    slug: "chichen-itza-vs-tulum-ruins",
    title: "Chichen Itza vs Tulum Ruins: Which Should You Visit?",
    metaTitle: "Chichen Itza vs Tulum Ruins – Honest Comparison 2026",
    metaDescription: "Chichen Itza or Tulum? Compare size, crowds, history, cost, and accessibility. Our honest guide helps you choose the right Mayan ruins.",
    excerpt: "Two of Mexico's most iconic archaeological sites compared side by side. Which Mayan ruins should you prioritize on your trip?",
    content: [
      "If you're visiting the Yucatan Peninsula, you'll likely face the question: Chichen Itza or Tulum? Both are magnificent Mayan archaeological sites, but they offer very different experiences. Here's our honest comparison to help you decide.",
      "Chichen Itza wins on sheer scale and historical significance. As one of the New Seven Wonders of the World, El Castillo is far larger and more impressive than any structure at Tulum. The site covers 6.5 square kilometers with dozens of structures including the Great Ball Court, Temple of Warriors, and Observatory.",
      "Tulum wins on setting and atmosphere. Perched on cliffs overlooking the turquoise Caribbean Sea, Tulum offers arguably the most photogenic Mayan ruin setting in all of Mexico. The site is much smaller and can be explored in 1-2 hours, compared to 2-4 hours at Chichen Itza.",
      "For history enthusiasts, Chichen Itza is the clear choice. It was one of the largest Mayan cities (800-1200 AD) and showcases sophisticated astronomical knowledge. Tulum was a smaller trading port (1200-1500 AD) with less elaborate architecture.",
      "Our recommendation? Visit both! They're different enough to warrant separate trips. If you only have time for one, Chichen Itza is the must-see for first-time visitors. Tulum is easier to reach from most resorts and makes a great half-day trip.",
      "We offer combo packages that include both sites on a multi-day itinerary, giving you the complete Mayan experience at a discounted rate."
    ],
    author: "Maya Explorer Tours",
    date: "2026-02-05",
    category: "Guides",
    readTime: "7 min read",
    image: "/images/blog/chichen-vs-tulum.jpg",
    imageAlt: "Split image comparing El Castillo at Chichen Itza and cliff-top ruins at Tulum",
    tags: ["comparison", "tulum", "mayan ruins", "planning"],
  },
  {
    slug: "photographing-chichen-itza-like-a-pro",
    title: "How to Photograph Chichen Itza Like a Pro",
    metaTitle: "Chichen Itza Photography Guide – Pro Tips & Best Spots",
    metaDescription: "Master Chichen Itza photography with pro tips on timing, angles, gear, and hidden spots. Get stunning shots of El Castillo and more.",
    excerpt: "From golden hour timing to hidden angles, learn how professional photographers capture stunning images of Mexico's most iconic pyramid.",
    content: [
      "Chichen Itza is one of the most photographed archaeological sites in the world, and for good reason. El Castillo's perfect symmetry, the intricate carvings, and the dramatic Yucatan sky create endless opportunities for stunning images.",
      "The golden rule of Chichen Itza photography: timing is everything. The best light occurs during the first hour after opening (8:00-9:00 AM) when the sun creates warm, golden tones on the limestone. Our sunrise tours offer even earlier access for magical pre-dawn shots.",
      "The classic shot of El Castillo is taken from the main plaza, but try these lesser-known angles: shoot from the Platform of Venus for a dramatic low angle, use the Temple of Warriors columns as a natural frame, or position yourself near the Ball Court for a unique perspective with the pyramid in the background.",
      "Gear recommendations: A wide-angle lens (16-35mm) is essential for capturing the full pyramid. A polarizing filter dramatically improves sky contrast and reduces limestone glare. Since tripods are restricted during peak hours, practice steady handheld techniques or bring a monopod.",
      "Smartphone photographers can achieve excellent results too. Use HDR mode for the high-contrast scenes, shoot in portrait mode near the carvings for beautiful bokeh, and use the panorama feature at the Ball Court. The key is visiting early when lighting is soft and crowds are minimal.",
      "Our photography-focused tours pair you with guides who know the best angles and timing, ensuring you leave with gallery-worthy images."
    ],
    author: "Maya Explorer Tours",
    date: "2026-02-10",
    category: "Photography",
    readTime: "5 min read",
    image: "/images/blog/photography.jpg",
    imageAlt: "Professional photographer capturing El Castillo pyramid at golden hour at Chichen Itza",
    tags: ["photography", "tips", "camera", "golden hour"],
  },
  {
    slug: "mayan-history-beginners-guide",
    title: "Mayan Civilization: A Beginner's Guide Before Visiting Chichen Itza",
    metaTitle: "Mayan History Guide – What to Know Before Chichen Itza",
    metaDescription: "Essential Mayan history for Chichen Itza visitors. Learn about the civilization, El Castillo, Kukulkan, and the ball game before your trip.",
    excerpt: "Understanding the Maya makes your visit 10x more meaningful. Here's the essential history every visitor should know before arriving.",
    content: [
      "Walking through Chichen Itza without understanding Mayan history is like visiting the Louvre without knowing who painted the Mona Lisa. A little background knowledge transforms your experience from sightseeing to time travel.",
      "The Maya civilization flourished from approximately 2000 BC to 1500 AD across modern-day Mexico, Guatemala, Belize, Honduras, and El Salvador. Unlike the Aztec or Inca, the Maya were never a single empire — they were a collection of city-states, each with its own ruler, similar to ancient Greece.",
      "Chichen Itza rose to prominence around 600 AD and reached its peak between 800-1200 AD. The city was a major economic power, controlling valuable obsidian and salt trade routes. At its height, an estimated 50,000 people lived in the greater Chichen Itza area.",
      "El Castillo (the Pyramid of Kukulkan) is a giant calendar in stone. Its four staircases have 91 steps each, plus the top platform — totaling 365, one for each day of the solar year. The nine terraces on each side, divided by a staircase, create 18 sections representing the 18 months of the Mayan calendar.",
      "The Great Ball Court at Chichen Itza is the largest in all of Mesoamerica, measuring 168 meters long. The Mayan ball game (pok-ta-pok) was far more than sport — it was a ritual with deep cosmological significance, sometimes ending in human sacrifice.",
      "Our guided tours bring this history to life with expert archaeologist guides who share stories, legends, and discoveries that you won't find in guidebooks."
    ],
    author: "Maya Explorer Tours",
    date: "2025-12-20",
    category: "History",
    readTime: "9 min read",
    image: "/images/blog/mayan-history.jpg",
    imageAlt: "Ancient Mayan carvings and glyphs on stone wall at Chichen Itza archaeological site",
    tags: ["history", "maya", "culture", "education"],
  },
];
