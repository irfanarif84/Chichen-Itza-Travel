export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const homepageFAQs: FAQItem[] = [
  {
    question: "How do I get to Chichen Itza from Cancun?",
    answer: "Chichen Itza is about 200 km (2.5 hours) from Cancun. The easiest way is to book a guided tour with round-trip transportation. You can also rent a car or take the ADO bus from Cancun Bus Station.",
  },
  {
    question: "What is the best time to visit Chichen Itza?",
    answer: "The best time to visit is early morning (opening at 8 AM) to avoid crowds and heat. The dry season from November to April offers the most comfortable weather. Our sunrise tours provide the most magical experience.",
  },
  {
    question: "How much does it cost to enter Chichen Itza?",
    answer: "The entrance fee is approximately 614 MXN (~$35 USD) for international visitors, which includes both the INAH federal fee and the Yucatán state fee. Our tour packages include all entrance fees.",
  },
  {
    question: "Can I still climb the pyramid at Chichen Itza?",
    answer: "No, climbing El Castillo (the main pyramid) has been prohibited since 2006 to preserve the structure. However, you can admire it up close and explore many other structures throughout the site.",
  },
  {
    question: "Is Chichen Itza safe for tourists?",
    answer: "Yes, Chichen Itza is very safe for tourists. The archaeological zone is well-maintained and staffed. Our tours include professional guides and safe, reliable transportation throughout your trip.",
  },
  {
    question: "What should I bring to Chichen Itza?",
    answer: "Bring sunscreen, a hat, comfortable walking shoes, water, insect repellent, and a camera. If your tour includes a cenote visit, pack a swimsuit and towel. Light, breathable clothing is recommended.",
  },
];

// Cancun-specific FAQs
export const cancunFAQs: FAQItem[] = [
  {
    question: "How long is the drive from Cancún to Chichen Itza?",
    answer: "The drive from Cancún to Chichen Itza takes approximately 2.5 hours (120 miles/195 km) via the toll highway. Most tours depart early morning between 6-7 AM to arrive before the crowds.",
    category: "distance",
  },
  {
    question: "What is included in a typical Cancún to Chichen Itza tour?",
    answer: "Most tours include round-trip air-conditioned transportation, a certified bilingual guide, Chichen Itza entrance fees, buffet lunch, and often a cenote swim. Premium tours may add skip-the-line access and gourmet meals.",
    category: "inclusions",
  },
  {
    question: "Is it better to take a tour or drive myself from Cancún?",
    answer: "A guided tour is recommended for most visitors. Benefits include expert historical commentary, no parking hassles, included entrance fees, and the option to swim at cenotes while someone else drives.",
    category: "comparison",
  },
  {
    question: "What time do tours leave from Cancún?",
    answer: "Most day tours depart between 6:00-7:30 AM to arrive at Chichen Itza before peak crowds. Sunrise tours leave earlier (around 3:30 AM), while night tours for the light show depart around 4:00 PM.",
    category: "logistics",
  },
  {
    question: "Can I be picked up from my Cancún hotel?",
    answer: "Yes! All our tours include complimentary pickup from hotels in the Cancún Hotel Zone. Some budget tours pick up from central meeting points. Your exact pickup time is confirmed 24 hours before the tour.",
    category: "logistics",
  },
  {
    question: "What should I bring on the tour from Cancún?",
    answer: "Bring comfortable walking shoes, sunscreen, a hat, sunglasses, a swimsuit and towel (for cenote), cash for tips and souvenirs, and a camera. Most tours provide bottled water.",
    category: "preparation",
  },
  {
    question: "Are Chichen Itza tours from Cancún suitable for children?",
    answer: "Yes! We offer family-friendly tours designed for children with interactive storytelling, activity booklets, and safe cenote swimming with life vests. Children under 3 typically travel free.",
    category: "family",
  },
  {
    question: "What is the best time of year to visit Chichen Itza from Cancún?",
    answer: "November to March offers the best weather with lower humidity and temperatures. The Spring Equinox (March 20-21) features the famous serpent shadow on El Castillo but is extremely crowded.",
    category: "timing",
  },
  {
    question: "Do tours include entrance fees to Chichen Itza?",
    answer: "Yes, all our tours include the Chichen Itza entrance fee (currently 614 MXN / ~$35 USD for foreigners). This covers both the federal and state fees. VIP tours may include expedited entry.",
    category: "pricing",
  },
  {
    question: "Can I cancel my Cancún to Chichen Itza tour?",
    answer: "Yes! We offer free cancellation up to 24 hours before your tour for a full refund. Cancellations within 24 hours are non-refundable. In case of severe weather, we'll reschedule at no extra cost.",
    category: "booking",
  },
];

// Playa del Carmen specific FAQs
export const playaDelCarmenFAQs: FAQItem[] = [
  {
    question: "How far is Chichen Itza from Playa del Carmen?",
    answer: "Chichen Itza is approximately 95 miles (153 km) from Playa del Carmen, about 1.5 to 2 hours drive via the Federal Highway 180D toll road. This makes it one of the closest departure points to the archaeological site.",
    category: "distance",
  },
  {
    question: "What time do tours depart from Playa del Carmen?",
    answer: "Most tours depart between 7:00 AM and 8:00 AM from Playa del Carmen hotels and designated meeting points. Sunrise tours depart earlier at 5:30 AM. Hotel pickup times may vary by 15-30 minutes depending on your location.",
    category: "logistics",
  },
  {
    question: "Are hotel pickups included in Playa del Carmen tours?",
    answer: "Yes, most tours include complimentary hotel pickup from Playa del Carmen hotels, including the Playacar resort area and properties along 5th Avenue (Quinta Avenida). Confirm your specific pickup location when booking.",
    category: "logistics",
  },
  {
    question: "How much does a Chichen Itza tour from Playa del Carmen cost?",
    answer: "Tours from Playa del Carmen range from $89 for standard group tours to $189+ for private or VIP experiences. Prices typically include transportation, entrance fees, bilingual guide, and lunch.",
    category: "pricing",
  },
  {
    question: "Is it better to book a tour or drive myself from Playa?",
    answer: "Booking a guided tour offers better value. Tours include expert guides, skip-the-line entrance, comfortable transportation, and lunch. Self-driving requires car rental, gas, tolls, entrance fees, parking, and navigating unfamiliar roads.",
    category: "comparison",
  },
  {
    question: "Can I visit Chichen Itza and swim in a cenote on the same day?",
    answer: "Absolutely! Our Chichen Itza + Cenote combo tours are extremely popular. After exploring the ruins, you'll visit Cenote Ik Kil or Cenote Saamal for a refreshing swim. These tours cost $99-$109.",
    category: "activities",
  },
  {
    question: "What should I bring on a Chichen Itza tour from Playa del Carmen?",
    answer: "Essential items: comfortable walking shoes, sunscreen (biodegradable for cenote tours), hat, sunglasses, camera, bottled water, and cash for souvenirs and tips. For cenote tours, bring swimsuit and towel.",
    category: "preparation",
  },
  {
    question: "How long do we spend at Chichen Itza?",
    answer: "Standard tours allow 2-3 hours at Chichen Itza: approximately 1.5-2 hours for the guided tour, plus 30-60 minutes of free time to explore independently and take photos.",
    category: "duration",
  },
  {
    question: "Are Chichen Itza tours from Playa del Carmen suitable for children?",
    answer: "Yes, these tours are family-friendly and suitable for children of all ages. The site has paved pathways, shaded areas, and restrooms. Most tours offer reduced rates for children ages 4-12.",
    category: "family",
  },
  {
    question: "Can I cancel my Playa del Carmen to Chichen Itza tour?",
    answer: "Yes! We offer free cancellation up to 24 hours before your tour for a full refund. In case of severe weather, we'll reschedule at no extra cost.",
    category: "booking",
  },
];

// Tulum specific FAQs
export const tulumFAQs: FAQItem[] = [
  {
    question: "How far is Chichen Itza from Tulum?",
    answer: "Chichen Itza is approximately 95 miles (153 km) from Tulum, about 2-2.5 hours drive. The journey takes you through scenic Yucatan countryside and traditional Mayan villages.",
    category: "distance",
  },
  {
    question: "Is it worth visiting both Tulum Ruins and Chichen Itza?",
    answer: "Absolutely! While both are Mayan sites, they offer different experiences. Tulum features stunning coastal ruins overlooking the Caribbean, while Chichen Itza showcases massive inland pyramids. Visiting both gives you a complete picture of Mayan civilization.",
    category: "comparison",
  },
  {
    question: "What time do tours leave from Tulum?",
    answer: "Tours typically depart Tulum between 6:30-7:30 AM to arrive at Chichen Itza early and beat the crowds. Sunrise tours may depart as early as 5:00 AM. Return to Tulum is usually around 4:00-5:00 PM.",
    category: "logistics",
  },
  {
    question: "Can I do a Tulum to Chichen Itza day trip on my own?",
    answer: "Yes, but guided tours are highly recommended. You'll need car rental, tolls, gas, parking, and entrance fees. More importantly, you'll miss the historical insights from expert guides. Tours from Tulum start at $89 all-inclusive.",
    category: "comparison",
  },
  {
    question: "Are hotel pickups available from Tulum hotels?",
    answer: "Yes, most tours include pickup from hotels in Tulum town, the Hotel Zone, and nearby areas like Aldea Zama. Some eco-hotels on the beach road may have designated pickup points.",
    category: "logistics",
  },
  {
    question: "What makes Tulum a good base for visiting Chichen Itza?",
    answer: "Tulum offers a perfect blend of beach relaxation and archaeological exploration. After a day at Chichen Itza, you can return to Tulum's beautiful beaches, cenotes, and bohemian atmosphere.",
    category: "travel",
  },
  {
    question: "Can I combine Chichen Itza with other sites from Tulum?",
    answer: "Yes! Popular combo tours include Chichen Itza + Cenote Ik Kil, or Chichen Itza + Valladolid colonial town. Multi-day tours can include Ek Balam and other sites.",
    category: "activities",
  },
  {
    question: "Is a private tour from Tulum worth the extra cost?",
    answer: "Private tours from Tulum offer flexibility in departure time, personalized pace, and exclusive guide attention. They're ideal for families, photographers, or anyone wanting a VIP experience.",
    category: "pricing",
  },
];

// Riviera Maya FAQs
export const rivieraMayaFAQs: FAQItem[] = [
  {
    question: "What areas are considered Riviera Maya for tour pickups?",
    answer: "Riviera Maya stretches from Puerto Morelos in the north to Tulum in the south, including Playa del Carmen, Puerto Aventuras, Akumal, and Xpu-Ha. All major resorts in this corridor offer tour pickup.",
    category: "logistics",
  },
  {
    question: "How long is the drive from Riviera Maya to Chichen Itza?",
    answer: "Drive time varies by location: Puerto Morelos (2 hours), Playa del Carmen (1.5-2 hours), Puerto Aventuras (2 hours), Akumal (2-2.5 hours). Tours factor this into pickup schedules.",
    category: "distance",
  },
  {
    question: "Do all Riviera Maya hotels have pickup service?",
    answer: "Most major resorts and hotels along the main highway have direct pickup. Some smaller or remote properties may require meeting at a nearby collection point. Confirm when booking.",
    category: "logistics",
  },
  {
    question: "What's the best time to visit Chichen Itza from Riviera Maya?",
    answer: "November through April offers ideal weather with comfortable temperatures and minimal rain. Early morning tours (arriving before 10 AM) avoid the hottest hours and largest crowds.",
    category: "timing",
  },
];

// Merida FAQs
export const meridaFAQs: FAQItem[] = [
  {
    question: "How far is Chichen Itza from Mérida?",
    answer: "Chichen Itza is just 75 miles (120 km) from Mérida - the shortest drive of any major departure city! The journey takes approximately 1.5 hours via the toll highway, making it perfect for a relaxed day trip.",
    category: "distance",
  },
  {
    question: "Is Mérida the best city to visit Chichen Itza from?",
    answer: "Mérida offers the closest and most convenient access to Chichen Itza. The shorter drive means more time at the ruins and a more relaxed schedule. Plus, you can explore Mérida's colonial charm before or after.",
    category: "comparison",
  },
  {
    question: "What time do tours depart from Mérida?",
    answer: "Tours from Mérida can depart slightly later than coastal cities (7:30-8:30 AM) due to the shorter drive. You'll still arrive early enough to beat the crowds from Cancun and Riviera Maya.",
    category: "logistics",
  },
  {
    question: "Can I take a bus from Mérida to Chichen Itza?",
    answer: "Yes, ADO buses run frequently from Mérida's main bus terminal to Chichen Itza (about $10 USD each way). However, guided tours offer more value with included entrance, guide, and often lunch.",
    category: "transport",
  },
  {
    question: "What else can I see near Mérida and Chichen Itza?",
    answer: "The Mérida area offers excellent add-ons: Izamal (Yellow City), Uxmal ruins, Celestún flamingo reserve, and hacienda cenotes. Many tours combine Chichen Itza with these attractions.",
    category: "activities",
  },
  {
    question: "Are Mérida tours different from Cancun tours?",
    answer: "Mérida tours tend to be smaller and more culturally focused, often led by local Yucatecan guides. You'll get deeper insights into regional history and may visit less-touristy cenotes and villages.",
    category: "experience",
  },
];

// General Chichen Itza FAQs (for main tour pages and guide pages)
export const generalChichenItzaFAQs: FAQItem[] = [
  {
    question: "What are the opening hours of Chichen Itza?",
    answer: "Chichen Itza is open daily from 8:00 AM to 5:00 PM (last entry at 4:00 PM). The site is open year-round except December 25th. Sunrise tours have special early access starting at 7:00 AM.",
    category: "hours",
  },
  {
    question: "How much is the entrance fee to Chichen Itza?",
    answer: "As of 2026, the entrance fee is approximately $35 USD (614 Mexican pesos). This includes both the federal (INAH) and state fees. Children under 13 enter free. Most guided tours include this fee.",
    category: "pricing",
  },
  {
    question: "What is the best time of day to visit Chichen Itza?",
    answer: "Early morning (8:00-10:00 AM) is ideal to avoid crowds and heat. Sunrise tours (7:00 AM early access) offer the best experience. Avoid midday (11:00 AM-2:00 PM) when it's hottest and most crowded.",
    category: "timing",
  },
  {
    question: "Is Chichen Itza worth visiting?",
    answer: "Yes! Chichen Itza is one of the New Seven Wonders of the World and a UNESCO World Heritage Site. The massive El Castillo pyramid, intricate carvings, and fascinating history make it a must-visit.",
    category: "value",
  },
  {
    question: "What does 'Chichen Itza' mean?",
    answer: "'Chichen Itza' translates to 'at the mouth of the well of the Itza' in Mayan. 'Chi' means mouth, 'chen' means well, and 'Itza' refers to the Maya tribe that built the city.",
    category: "history",
  },
  {
    question: "How long does it take to tour Chichen Itza?",
    answer: "A comprehensive tour takes 2-3 hours: 1.5-2 hours for a guided tour covering major structures, plus 30-60 minutes for independent exploration. Some visitors spend 3-4 hours to fully explore.",
    category: "duration",
  },
  {
    question: "What are the most important things to see at Chichen Itza?",
    answer: "Must-see structures: El Castillo pyramid, Temple of Warriors, Great Ball Court (largest in Mesoamerica), Sacred Cenote, Observatory (El Caracol), Temple of Jaguars, and Platform of Venus.",
    category: "attractions",
  },
  {
    question: "Can you swim in cenotes at Chichen Itza?",
    answer: "The Sacred Cenote at Chichen Itza is not for swimming (it's an archaeological site). However, many tours include visits to nearby swimmable cenotes like Cenote Ik Kil or Cenote Saamal.",
    category: "activities",
  },
];

// Day Tours FAQs
export const dayToursFAQs: FAQItem[] = [
  {
    question: "What's included in a Chichen Itza day tour?",
    answer: "Standard day tours include: round-trip transportation, certified bilingual guide, entrance fees, buffet lunch with regional cuisine, bottled water, and travel insurance. Many include cenote stops.",
    category: "inclusions",
  },
  {
    question: "How long is a full-day Chichen Itza tour?",
    answer: "Full-day tours typically last 10-12 hours including travel time. Tours with additional stops (cenotes, Valladolid) may extend to 13-14 hours.",
    category: "duration",
  },
  {
    question: "What size are the tour groups?",
    answer: "Standard group tours accommodate 12-15 people. Small-group tours limit capacity to 8-12 participants. Private tours are available for just your party.",
    category: "logistics",
  },
];

// Private Tours FAQs
export const privateToursFAQs: FAQItem[] = [
  {
    question: "What's the difference between private and group tours?",
    answer: "Private tours offer: exclusive guide and vehicle, flexible departure times, personalized pace, ability to spend more time at specific sites, and VIP treatment. Group tours follow fixed schedules but cost less.",
    category: "comparison",
  },
  {
    question: "How much does a private Chichen Itza tour cost?",
    answer: "Private tours typically range from $189-$299 per person with a 2-person minimum, or $380-$600 flat rate for up to 6 people. VIP tours with archaeologist guides can exceed $400 per person.",
    category: "pricing",
  },
  {
    question: "Can I customize my private tour itinerary?",
    answer: "Yes! Private tours are highly customizable. You can choose departure time, add cenote swims, visit Valladolid or Ek Balam, extend time at Chichen Itza, and request specific food preferences.",
    category: "customization",
  },
];

// Cenote Tours FAQs
export const cenoteToursFAQs: FAQItem[] = [
  {
    question: "What is a cenote?",
    answer: "A cenote is a natural sinkhole formed by the collapse of limestone bedrock, revealing groundwater pools beneath. The Yucatán Peninsula has over 6,000 cenotes. The ancient Maya considered them sacred portals to the underworld.",
    category: "general",
  },
  {
    question: "Which cenote do Chichen Itza tours visit?",
    answer: "Most tours visit Cenote Ik Kil, the most famous cenote in Mexico, located just 3 miles from Chichen Itza. Some tours visit Cenote Saamal in Valladolid or private, lesser-known cenotes for a more exclusive experience.",
    category: "logistics",
  },
  {
    question: "Do I need to know how to swim to visit a cenote?",
    answer: "No! Life vests are provided at all cenotes and are mandatory at some. You can float comfortably even without swimming skills. Some cenotes also have shallow wading areas and platforms.",
    category: "safety",
  },
  {
    question: "What sunscreen can I use in cenotes?",
    answer: "Only biodegradable sunscreen is allowed in cenotes to protect the delicate ecosystem. Regular sunscreen, insect repellent, and makeup should be washed off before entering. Biodegradable options are often available for purchase on-site.",
    category: "preparation",
  },
  {
    question: "How long do we spend at the cenote?",
    answer: "Most tours allocate 30-45 minutes for cenote swimming. This includes changing time, swimming, and photos. Private tours offer flexibility to extend this time based on your preferences.",
    category: "duration",
  },
  {
    question: "Is cenote swimming safe for children?",
    answer: "Yes, cenote swimming is safe for children. Life vests are provided in all sizes, and many cenotes have graduated depths and platforms. Our family tours choose cenotes with the safest conditions for young swimmers.",
    category: "family",
  },
];

// Sunrise Tours FAQs
export const sunriseToursFAQs: FAQItem[] = [
  {
    question: "What time do sunrise tours depart?",
    answer: "Sunrise tours depart at approximately 3:30 AM from Cancún and 4:00 AM from Playa del Carmen to arrive at Chichen Itza around 6:00-6:30 AM, before the site opens to general visitors at 8:00 AM.",
    category: "logistics",
  },
  {
    question: "Is the sunrise tour worth the early wake-up?",
    answer: "Absolutely! Benefits include 50-70% fewer visitors, cooler temperatures (75-80°F vs 95°F midday), magical golden hour lighting, and experiencing the ruins in peaceful solitude. It's our highest-rated tour experience.",
    category: "value",
  },
  {
    question: "Do sunrise tours include breakfast?",
    answer: "Yes! Most sunrise tours include a light snack and coffee during the drive, plus a full hot breakfast after arriving at or near Chichen Itza. A traditional buffet lunch is also included later in the day.",
    category: "inclusions",
  },
  {
    question: "Can I bring a tripod for sunrise photography?",
    answer: "Yes, tripods are generally allowed during the early access period before the site gets crowded. However, drones and selfie sticks are strictly prohibited at all times. Professional photography equipment is welcome.",
    category: "photography",
  },
  {
    question: "How many people are on the sunrise tour?",
    answer: "Sunrise tours are limited to a maximum of 12 people per group to maintain the intimate, exclusive atmosphere. This is significantly smaller than standard day tours (15-30 people).",
    category: "logistics",
  },
  {
    question: "What if it's cloudy on the day of my sunrise tour?",
    answer: "Even on cloudy mornings, the experience is magical — the site is still nearly empty, temperatures are cool, and the diffused light is actually excellent for photography. The tour proceeds rain or shine, with free rescheduling offered only in cases of severe weather.",
    category: "weather",
  },
];

// Small Group Tours FAQs
export const smallGroupFAQs: FAQItem[] = [
  {
    question: "How many people are in a small group tour?",
    answer: "Our small group tours are limited to 8-15 participants, depending on the specific tour. This ensures personalized attention from your guide, easier communication, and a more intimate experience compared to large 30+ person tours.",
    category: "logistics",
  },
  {
    question: "Why choose a small group over a large group tour?",
    answer: "Small groups offer better guide interaction, more flexibility for questions, less waiting time at each stop, quieter experience at the ruins, and often include higher-quality transport. You'll also get better photo opportunities without crowds blocking your shots.",
    category: "comparison",
  },
  {
    question: "Are small group tours more expensive?",
    answer: "Small group tours typically cost $10-30 more than large group options but offer significantly better value through personalized attention, better vehicles, and more intimate experiences. They're the sweet spot between budget and private tours.",
    category: "pricing",
  },
  {
    question: "Can I request a specific language for my small group?",
    answer: "Most small group tours operate in English and Spanish. Due to smaller group sizes, you're more likely to be in a group that matches your language preference. Contact us for tours in French, German, or Italian.",
    category: "logistics",
  },
  {
    question: "Are small group tours suitable for solo travelers?",
    answer: "Yes! Small group tours are ideal for solo travelers. The intimate group size makes it easy to connect with fellow travelers, and you'll receive more personal attention from the guide. Many solo travelers prefer small groups over private tours.",
    category: "solo",
  },
  {
    question: "Which small group tour is best for first-time visitors?",
    answer: "For most first-time visitors we recommend the Chichen Itza Day Tour from Cancun — it covers El Castillo, the Sacred Cenote, a buffet lunch and a cenote swim with an expert bilingual guide and a max group size of 15. See full details on /tours/chichen-itza-day-tour-from-cancun.",
    category: "recommendation",
  },
  {
    question: "Do you have small group tours that include a cenote?",
    answer: "Yes — our most popular cenote-inclusive small group option is the Chichen Itza + Cenote Ik Kil combo, with skip-the-line entrance and 45 minutes of swim time at the cenote. Details at /tours/chichen-itza-cenote-ik-kil-combo-tour.",
    category: "inclusions",
  },
  {
    question: "Is there a small group tour from Playa del Carmen?",
    answer: "Yes. Our small group budget tour from Playa del Carmen runs daily with hotel pickup along the Riviera Maya, capped at 15 travelers. Full itinerary on /tours/chichen-itza-budget-tour-playa-del-carmen.",
    category: "departure",
  },
];

// Practical / General FAQ page data
export const practicalFAQs: FAQItem[] = [
  {
    question: "How do I book a Chichen Itza tour?",
    answer: "You can book directly through our website using the booking form on any tour page. Select your preferred tour, choose a date, enter the number of travelers, and complete the checkout. You'll receive an instant confirmation email with all details.",
    category: "booking",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer free cancellation up to 24 hours before your scheduled tour for a full refund. Cancellations within 24 hours are non-refundable. In cases of severe weather, we'll reschedule at no extra cost or provide a full refund.",
    category: "booking",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. Payment is processed securely through our encrypted checkout. You can also pay in Mexican pesos or US dollars.",
    category: "payment",
  },
  {
    question: "Is travel insurance included?",
    answer: "Basic travel insurance covering the tour duration is included in all our tour packages. For comprehensive coverage including trip cancellation and medical emergencies, we recommend purchasing additional travel insurance.",
    category: "safety",
  },
  {
    question: "What happens if it rains on tour day?",
    answer: "Tours operate rain or shine — rain showers are usually brief and the site is still enjoyable. In cases of severe weather warnings, we'll offer free rescheduling or a full refund. Guides carry umbrellas and adjust itineraries as needed.",
    category: "weather",
  },
  {
    question: "Are tips expected for guides and drivers?",
    answer: "Tips are not included in tour prices but are appreciated for good service. A typical tip is $5-10 USD per person for the guide and $3-5 for the driver. Tipping is entirely at your discretion based on your experience.",
    category: "etiquette",
  },
  {
    question: "Can I bring food or drinks into Chichen Itza?",
    answer: "Sealed water bottles are allowed. Outside food is technically not permitted but small snacks are rarely an issue. Glass bottles, alcohol, and large coolers are prohibited. Vendors inside sell drinks and snacks.",
    category: "rules",
  },
  {
    question: "Is Chichen Itza wheelchair accessible?",
    answer: "The main areas around El Castillo have relatively flat pathways suitable for wheelchairs. However, some areas have uneven terrain and steps. We recommend our private tours for travelers with mobility needs, as guides can adapt the route.",
    category: "accessibility",
  },
];