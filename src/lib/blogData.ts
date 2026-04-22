export type BlogContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "quick-answer"; text: string }
  | { type: "tip"; text: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: (string | BlogContentBlock)[];
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
  tocItems?: { id: string; title: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "spring-equinox-chichen-itza-guide",
    title: "The Spring Equinox at Chichen Itza: Everything You Need to Know",
    metaTitle: "Spring Equinox at Chichen Itza 2026 – Complete Guide",
    metaDescription: "Plan your Spring Equinox visit to Chichen Itza. See the serpent shadow on El Castillo, crowd tips, best viewing spots, and booking advice.",
    excerpt: "Every March 20-21, thousands gather to witness the serpent of light descend El Castillo. Here's how to make the most of this magical event.",
    content: [
      "The Chichen Itza equinox falls on March 20–21 each year. The setting sun casts a serpent shadow down El Castillo's north staircase from approximately 3:00 PM, peaking between 4:00 and 4:30 PM. Crowds reach 30,000–40,000 people — visiting March 19 or 22 delivers the same spectacle with a fraction of the visitors.",
      "The Spring Equinox at Chichen Itza is one of Mexico's most spectacular astronomical events. Twice a year, on the spring and fall equinoxes, the setting sun casts a series of triangular shadows on the northern staircase of El Castillo, creating the illusion of a serpent slithering down the pyramid — the feathered serpent god Kukulkan.",
      "This phenomenon demonstrates the incredible astronomical knowledge of the ancient Maya, who designed the pyramid with mathematical precision over 1,000 years ago. The shadow effect begins around 3:00 PM and lasts approximately 45 minutes, with the serpent becoming most visible around 4:00-4:30 PM.",
      "If you're planning to witness this event, preparation is key. Expect 30,000-40,000 visitors on the equinox days. Arrive by 8:00 AM to secure a good viewing position near the northern staircase. The site opens at 8:00 AM and the shadow appears in the afternoon.",
      "Pro tip: Visit on March 19 or March 22 instead. The shadow effect is nearly identical a day or two before and after the actual equinox, but with 80-90% fewer visitors. You'll get better photos and a more peaceful experience.",
      "Our sunrise tours on equinox week include early access, expert commentary on the astronomical significance, and strategic positioning for the best views. Book at least 3 months in advance for equinox week.",
      "The mechanics behind the equinox shadow reveal a level of astronomical precision that continues to astonish modern engineers. El Castillo's north face is oriented almost perfectly on a north-south axis, allowing the late-afternoon equinox sun — sitting at a solar declination of 0° — to strike the nine stepped terraces of the pyramid's northwest corner at exactly the right angle. As the sun descends toward the horizon, each terrace casts a triangular shadow that overlaps the one below it. Seven distinct isosceles triangles of light and shadow stack along the balustrade, tapering toward the giant carved serpent head at the pyramid's base. The result is a seamless undulation that mimics a living body in motion. Maya astronomers almost certainly refined this alignment over generations of observation, tracking how the shadow pattern shifted day by day until the pyramid's angle was perfected to produce the effect exclusively on equinox afternoons — not a day earlier, not a day later.",
      "Kukulkan was the most powerful deity in the northern Maya pantheon — a feathered serpent who embodied wind, rain, and the planet Venus. The serpent's annual descent on the equinox was not merely spectacle; it carried direct consequences for ordinary Maya life. When Kukulkan appeared to touch the earth via the pyramid staircase, it signaled the moment to begin planting. Farmers across the Yucatan used this solar calendar marker to time their milpa — the traditional cornfield — knowing that planting too early risked drought and too late risked storm damage. The serpent descending was, in essence, the god arriving to bless the soil. This also explains why the stone serpent heads at the pyramid's base face outward along the north staircase: the entire structure is a message written in sunlight, intended to be read once a year by an entire civilization that depended on that single announcement.",
      "Seven hours between gate opening and the main event is plenty of time to see everything at Chichen Itza — if you plan your route. Start at El Castillo immediately after entering to photograph it without crowds, then walk east to the Temple of Warriors and the Group of a Thousand Columns, where shaded corridors offer genuine relief from the mid-morning heat. The Great Ball Court deserves at least 30 minutes — test the famous acoustic echo yourself. By noon, the Sacred Cenote provides a quiet, shaded pause away from the central plaza. After lunch (bring 1.5 liters of water minimum and a snack for the full day — food vendors are available just outside the south entrance but lines are long on equinox days), visit El Caracol observatory and the Nunnery complex on the site's southern edge. By 1:45 PM, start moving back toward the north face of El Castillo. Claim your viewing position no later than 2:00 PM — by 2:30 PM the front area is already packed four to five people deep and late arrivals lose their sightlines entirely.",
      "Not all positions on the north side deliver the same view. The shadow forms on the left balustrade of the north staircase — the western edge — so positioning yourself slightly left of center gives the most unobstructed sightline as the seven triangles form. Standing directly in front of the staircase risks taller visitors blocking your view as the crowd swells. The far right of the viewing area (the east side of the north face) often carries slightly less pressure and still provides a clear diagonal angle across the full shadow sequence. For photography, a horizontal landscape frame captures all seven triangles along the balustrade in one image, while a tighter vertical frame isolates the serpent head at the base with two or three triangles above it. Avoid standing too close — the full serpent illusion resolves best from 20 to 30 meters back, where the individual triangles visually merge into a single, continuously undulating body.",
      "March is statistically one of the driest months in the Yucatan, with significant cloud interference affecting roughly 15% of equinox afternoons — compared to more than 60% during the September equinox. Light or partial cloud cover still allows the shadow to form; the triangles remain visible as long as direct sunlight reaches the pyramid's northwest corner for at least part of the 3:00–4:30 PM window. Heavy overcast eliminates the shadow entirely. Our guides have witnessed both outcomes over many years — the great majority of March equinox tours deliver the full effect. That said, it is worth building in flexibility: if you can visit on March 19 and March 21, you double your chances of catching ideal conditions across multiple afternoons. Guides consistently note that even on a partly cloudy equinox day, the experience itself — the crowd, the atmosphere, the scale of the site — is unlike anything else Chichen Itza offers throughout the year.",
      "The fall equinox on September 21 produces the exact same serpent shadow on El Castillo — same geometry, same solar angle, same visual result. The difference is entirely the weather. September sits at the height of the Yucatan rainy season, when afternoon storms arrive reliably between 2:00 and 5:00 PM — precisely the window the shadow requires. Rain in September typically falls hard and fast, but on the equinox itself the timing is brutal: just as the shadow should be peaking, a storm front can eliminate it completely. Humidity in September also runs significantly higher than March, making a seven-hour wait on site far less comfortable. For the vast majority of visitors, the spring equinox is the clearly superior choice: lower humidity, reliable dry-season skies, and identical shadow quality. If September is your only realistic option, position early and be prepared to embrace the experience even if the clouds win — the fall equinox atmosphere draws dedicated Maya enthusiasts and carries its own distinct energy.",
      "After leading equinox tours for over two decades, our guides have refined a few pieces of advice that don't appear anywhere in official guidebooks. First: skip breakfast at a restaurant in Pisté or Valladolid on equinox morning — every café near the site is overwhelmed by 7:00 AM. Eat before you leave your hotel and bring food with you. Second: wear a hat with a full brim, not a cap. From 2:00 to 4:30 PM you will be standing in direct sun with no shade available in the viewing area, and the March equinox sun is deceptively intense — a baseball cap leaves the sides of your face and neck completely exposed. Third, and this is the one most people miss: stay after the shadow peaks. Around 4:15 PM the crowd begins dissolving as tour buses start their return journeys. Fifteen minutes later the north plaza is notably quieter, the light turns golden, and the pyramid feels like it belongs to you. Our guests consistently take their best images in that final window.",
      "The single most common mistake is arriving at 1:00 or 2:00 PM for a 'shadow-only' visit. By the time you enter, walk to El Castillo's north face, and orient yourself, the front rows are already taken — you will watch through a wall of raised phones rather than with your own eyes. The second mistake is positioning on the wrong side of the pyramid; the south and east faces receive no shadow on the equinox and offer nothing to see. Third, many visitors underestimate how fast equinox-week hotels book out: accommodation in Pisté, Valladolid, and even Cancun fills 3–4 months in advance — book accommodation and tours at the same time, in the same week you decide to go. Fourth, footwear: flip-flops across Chichen Itza's uneven limestone paths over seven hours will end your day early. Closed-toe shoes with grip are essential. Finally, bring more water than you think necessary — two liters per person is the minimum for a full equinox day in the Yucatan heat."
    ],
    author: "Maya Explorer Tours",
    date: "2026-01-15",
    category: "Events",
    readTime: "12 min read",
    image: "/images/blog/equinox.jpg",
    imageAlt: "Serpent shadow descending El Castillo pyramid during Spring Equinox at Chichen Itza",
    tags: ["equinox", "el castillo", "events", "photography"],
  },
  {
    slug: "cenotes-near-chichen-itza",
    title: "7 Best Cenotes Near Chichen Itza Worth Swimming In",
    metaTitle: "7 Best Cenotes Near Chichen Itza – Swimming Guide 2026",
    metaDescription: "Discover the 7 best cenotes near Chichen Itza for swimming. From famous Ik Kil to hidden gems. Distances, crowd levels, biodegradable sunscreen rule, and what to bring.",
    excerpt: "The Yucatan's crystal-clear cenotes are the perfect complement to a day exploring ancient ruins. Here are 7 you shouldn't miss — with distances, crowd rankings, and a guide's honest pick.",
    content: [
      { type: "quick-answer", text: "The 7 best cenotes near Chichen Itza are: Ik Kil (3 km), Suytun (45 km), Oxman (40 km), Hubiku (30 km), Saamal (45 km), Samulá and Xkekén (80 km). All have crystal-clear freshwater, natural light, and easy access from the Chichen Itza–Valladolid corridor. Most require biodegradable sunscreen only." },
      { type: "p", text: "The Yucatan Peninsula is home to over 6,000 cenotes — natural sinkholes filled with crystal-clear groundwater. Many of the most spectacular cenotes are located within easy reach of Chichen Itza, making a cenote swim the perfect way to cool off after exploring the ruins." },
      { type: "p", text: "Cenote Ik Kil tops most lists for good reason. Located just 3 km from Chichen Itza, this open-air cenote features dramatic hanging vines, waterfalls, and a swimming area 26 meters below ground level. It's well-maintained with stairs, changing rooms, and life vests. Expect crowds midday — visit before 10 AM or after 3 PM." },
      { type: "p", text: "Cenote Saamal in Valladolid offers a more intimate experience. This semi-open cenote is located right in the town center, making it perfect for combo tours that include Valladolid exploration. The turquoise waters and lush vegetation create a magical atmosphere." },
      { type: "p", text: "For the adventurous, Cenote Suytun is an underground cathedral cenote with a single shaft of light illuminating a stone platform in the center — incredibly photogenic. Cenote Oxman features a rope swing and is surrounded by a beautiful hacienda property." },
      { type: "p", text: "Cenote Hubiku, Cenote Samulá, and Cenote Xkekén round out our top 7, each offering unique geological formations and swimming experiences. Our combo tours visit the cenotes best suited to your group size and interests." },
      { type: "p", text: "Essential tips: Bring biodegradable sunscreen (regular sunscreen is prohibited), a waterproof phone pouch, and water shoes. Most cenotes charge $5-10 USD entry and provide life vests. Arrive early for the best experience." },
      { type: "h2", text: "Distance & Travel Time from Chichen Itza", id: "distance-travel-time-from-chichen-itza" },
      { type: "list", items: [
        "Cenote Ik Kil — 3 km / 5 min drive (on-site combo tours)",
        "Cenote Hubiku — 30 km / 25 min drive (Pisté direction)",
        "Cenote Oxman — 40 km / 35 min toward Valladolid",
        "Cenote Saamal — 45 km / 40 min, Valladolid town center",
        "Cenote Suytun — 45 km / 40 min, Valladolid outskirts",
        "Cenote Samulá — 80 km / 65 min, Dzitnup village",
        "Cenote Xkekén — 80 km / 65 min, Dzitnup (same entrance as Samulá)"
      ]},
      { type: "h2", text: "Cenote Suytun — The Underground Cathedral", id: "cenote-suytun-the-underground-cathedral" },
      { type: "p", text: "Suytun is a fully underground cenote with crystal-blue water at a constant 26°C/79°F. A narrow stone platform extends into the center of the water, directly beneath a circular skylight that floods the chamber with a dramatic shaft of sunlight between 11:00 AM and 1:00 PM. Access is via a steep staircase (82 steps down) — manageable for most but not ideal for those with mobility limitations. Crowd levels peak at 11:30 AM when tour buses arrive from Cancun; arriving before 10:00 AM or after 2:00 PM cuts wait times by half." },
      { type: "h2", text: "Cenote Oxman — Rope Swings and Hacienda Grounds", id: "cenote-oxman-rope-swings-and-hacienda-grounds" },
      { type: "p", text: "Oxman sits inside the grounds of Hacienda San Lorenzo Oxman, a 17th-century henequen estate now converted to a boutique hotel. The cenote is semi-open with turquoise-green water 12 meters deep, accessible via a wooden ladder and rope. The famous rope swing hangs from a 15-meter tree root — usable by anyone comfortable with heights. Unlike Ik Kil, Oxman sees significantly fewer visitors; early mornings (8:00–9:30 AM) are nearly empty. Entry costs around 100 MXN separately from the hacienda restaurant." },
      { type: "h2", text: "Cenote Samulá and Xkekén — Twin Cenotes of Dzitnup", id: "cenote-samula-and-xkeken-twin-cenotes-of-dzitnup" },
      { type: "p", text: "Samulá and Xkekén sit 200 meters apart under the village of Dzitnup and share a single entrance fee (~180 MXN for both). Xkekén is semi-open with a narrow ceiling gap that creates a single spotlight beam on the blue-black water — best photographed at midday. Samulá is fully underground with a cathedral-like ceiling covered in stalactites and dangling tree roots; the water glows an ethereal turquoise from refracted light. Both are 45–55 minutes from Chichen Itza. Crowd levels are moderate — busier on weekends but quieter than Ik Kil on weekdays." },
      { type: "h2", text: "Crowd Levels Ranked — Least to Most Busy", id: "crowd-levels-ranked-least-to-most-busy" },
      { type: "list", items: [
        "1. Cenote Oxman — quietest, mostly independent travelers",
        "2. Cenote Hubiku — off the main tour circuit, local favorite",
        "3. Cenote Samulá + Xkekén — moderate, peaks on weekends",
        "4. Cenote Saamal — steady flow, Valladolid town location",
        "5. Cenote Suytun — busy at midday, quiet before 10 AM",
        "6. Cenote Ik Kil — busiest of all, major group tour stop"
      ]},
      { type: "h2", text: "Why Biodegradable Sunscreen Is Required", id: "why-biodegradable-sunscreen-is-required" },
      { type: "p", text: "Cenotes are not connected to the sea — they are freshwater sinkholes fed by underground rivers filtered through porous limestone. Regular sunscreen contains oxybenzone and octinoxate, chemicals that do not break down in UV-free underground water. These accumulate in the ecosystem, harming the micro-organisms, fish, and blind crustaceans that live in the water table. The Yucatan government mandates biodegradable sunscreen at all cenotes by law. Buy it before you go — airport pharmacies in Cancun stock it (Farmacias del Ahorro, Walmart), as do pharmacies in Valladolid on Calle 39. On-site vendors sell small bottles for 80–120 MXN." },
      { type: "h2", text: "Can Non-Swimmers Visit Cenotes?", id: "can-non-swimmers-visit-cenotes" },
      { type: "p", text: "Yes — all major cenotes near Chichen Itza provide life vests at no extra cost. Non-swimmers can float freely in any cenote with a vest. At Suytun, the stone platform allows you to stand in shallow areas near the edge without entering deep water. Ik Kil has shallow ledges around the perimeter. Oxman and Saamal are deeper with no wading areas — life vests are essential for non-swimmers there. Children under 5 are not recommended at Oxman due to the ladder-only access. All cenotes have trained lifeguards on duty." },
      { type: "h2", text: "Hidden Cenotes Along the Route", id: "hidden-cenotes-along-the-route" },
      { type: "p", text: "Beyond the famous seven, the Chichen Itza–Valladolid corridor has dozens of lesser-visited cenotes. Cenote X'Batún near Temozón is a series of connected pools rarely visited by tour groups — access is through a local family's property (small entry fee, basic facilities). Cenote Lol-Há near Pisté is a roadside cenote popular with locals but missed by most tourists. Cenote Yokdzonot, 20 km from Chichen Itza, is community-run with a zip line and platform — significantly less crowded than Ik Kil with similar open-sky experience." },
      { type: "h2", text: "Which Cenote Is on Which Tour?", id: "which-cenote-is-on-which-tour" },
      { type: "list", items: [
        "Day tours from Cancun/Playa → Cenote Ik Kil (included in most)",
        "Cenote combo tours → Ik Kil + Hubiku or Saamal options",
        "Valladolid combo tours → Suytun or Saamal (in town)",
        "Private tours → any cenote of your choice, flexible",
        "Sunrise tours → Ik Kil add-on available after site visit",
        "Multi-day Yucatan tours → Samulá + Xkekén at Dzitnup"
      ]},
      { type: "h2", text: "Our Guide's Pick", id: "our-guides-pick" },
      { type: "tip", text: "After leading thousands of tours through the Yucatan, Cenote Oxman is my personal recommendation for anyone who wants a cenote experience without the crowds. Arrive at 8:30 AM, skip the rope swing queue (it gets long by 10 AM), float in water that genuinely glows turquoise in the morning light, and have your photos taken before the first tour bus arrives. Pair it with a coffee at the hacienda courtyard — it is worth every extra kilometer." },
    ],
    tocItems: [
      { id: "distance-travel-time-from-chichen-itza", title: "Distance & Travel Time" },
      { id: "cenote-suytun-the-underground-cathedral", title: "Cenote Suytun" },
      { id: "cenote-oxman-rope-swings-and-hacienda-grounds", title: "Cenote Oxman" },
      { id: "cenote-samula-and-xkeken-twin-cenotes-of-dzitnup", title: "Cenote Samulá & Xkekén" },
      { id: "crowd-levels-ranked-least-to-most-busy", title: "Crowd Levels Ranked" },
      { id: "why-biodegradable-sunscreen-is-required", title: "Biodegradable Sunscreen" },
      { id: "can-non-swimmers-visit-cenotes", title: "Non-Swimmers Guide" },
      { id: "hidden-cenotes-along-the-route", title: "Hidden Cenotes" },
      { id: "which-cenote-is-on-which-tour", title: "Which Tour Includes What" },
      { id: "our-guides-pick", title: "Our Guide's Pick" },
    ],
    author: "Maya Explorer Tours",
    date: "2026-01-28",
    category: "Travel Tips",
    readTime: "11 min read",
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
