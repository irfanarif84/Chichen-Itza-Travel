export interface Review {
  id: string;
  author: string;
  location: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  tourCategory: string;
  departureCity: string;
  verified: boolean;
}

export const reviews: Review[] = [
  { id: "r1", author: "Sarah M.", location: "Dallas, TX", date: "2026-01-15", rating: 5, title: "Absolutely breathtaking experience", content: "Our guide Carlos was phenomenal — his knowledge of Mayan history brought every stone to life. The sunrise tour was worth the early wake-up. El Castillo glowing in golden light with almost no one around is something I'll never forget.", tourCategory: "sunrise", departureCity: "cancun", verified: true },
  { id: "r2", author: "James & Linda K.", location: "Toronto, ON", date: "2026-01-08", rating: 5, title: "Best day of our vacation", content: "We booked the private tour from Playa del Carmen and it exceeded every expectation. Our guide tailored the experience to our interests — focusing on astronomy and architecture. The cenote swim afterwards was the perfect cooldown.", tourCategory: "private", departureCity: "playa-del-carmen", verified: true },
  { id: "r3", author: "Miguel R.", location: "Mexico City", date: "2025-12-20", rating: 5, title: "Increíble tour desde Mérida", content: "Being so close to Chichen Itza from Mérida made the day so relaxed. We arrived before the crowds and had time to really absorb the history. The guide's passion for Mayan culture was infectious. Highly recommend the Mérida departure.", tourCategory: "day-tour", departureCity: "merida", verified: true },
  { id: "r4", author: "Emily W.", location: "London, UK", date: "2025-12-15", rating: 5, title: "Worth every penny for the VIP experience", content: "The skip-the-line access made such a difference. While other groups waited 30+ minutes, we walked straight in. Our small group of 6 meant personalized attention from our guide. The luxury van was comfortable for the drive from Cancun.", tourCategory: "private", departureCity: "cancun", verified: true },
  { id: "r5", author: "David & Maria P.", location: "Miami, FL", date: "2025-12-01", rating: 4, title: "Great tour, long day", content: "The tour itself was excellent — knowledgeable guide, delicious lunch in Valladolid, and the cenote was beautiful. Only reason for 4 stars is the 2.5-hour drive each way from Cancun. Consider staying in Valladolid if possible.", tourCategory: "day-tour", departureCity: "cancun", verified: true },
  { id: "r6", author: "Jennifer L.", location: "Seattle, WA", date: "2025-11-28", rating: 5, title: "Magical sunrise experience", content: "Watching the sun rise behind El Castillo with only our small group present was genuinely magical. Worth every early morning minute. Our guide was incredibly knowledgeable about archaeoastronomy.", tourCategory: "sunrise", departureCity: "playa-del-carmen", verified: true },
  { id: "r7", author: "Thomas H.", location: "Berlin, Germany", date: "2025-11-20", rating: 5, title: "Ek Balam was the highlight", content: "We booked the Chichen Itza + Ek Balam combo and honestly, climbing the Acropolis at Ek Balam was the most thrilling part. The 360-degree jungle views from the top are unreal. Both sites in one day was ambitious but well-organized.", tourCategory: "ek-balam", departureCity: "cancun", verified: true },
  { id: "r8", author: "Rachel & Tom S.", location: "Chicago, IL", date: "2025-11-15", rating: 5, title: "Perfect family day trip", content: "Traveled with our kids (8 and 11) and the guide kept them engaged with stories about Mayan ball games and astronomy. The cenote swim was their favorite part. Family-friendly pace, not rushed at all.", tourCategory: "day-tour", departureCity: "riviera-maya", verified: true },
  { id: "r9", author: "Alexandra F.", location: "Sydney, Australia", date: "2025-11-08", rating: 5, title: "Tulum departure was so convenient", content: "Staying in Tulum, I loved that we didn't have to go all the way to Cancun for pickup. The smaller group from Tulum made it feel more personal. Our guide connected Tulum's coastal ruins to Chichen Itza's inland grandeur beautifully.", tourCategory: "day-tour", departureCity: "tulum", verified: true },
  { id: "r10", author: "Kevin O.", location: "New York, NY", date: "2025-10-25", rating: 5, title: "Night show was unforgettable", content: "The Noches de Kukulkán light show projected on El Castillo was absolutely stunning. Seeing the pyramid come alive with light and sound at night is completely different from a daytime visit. A must-do experience.", tourCategory: "night", departureCity: "cancun", verified: true },
  { id: "r11", author: "Patricia G.", location: "Vancouver, BC", date: "2025-10-18", rating: 4, title: "Good budget option", content: "For the price, this tour delivered great value. Large group (about 40 people) but the guide used a headset so we could hear everything. Lunch buffet was decent. Would upgrade to small group next time for more personal attention.", tourCategory: "day-tour", departureCity: "cancun", verified: true },
  { id: "r12", author: "Mark & Susan B.", location: "Houston, TX", date: "2025-10-10", rating: 5, title: "Valladolid was a wonderful surprise", content: "The combo tour with Valladolid gave us the best of both worlds — ancient wonder and colonial charm. Walking the colorful streets, eating at the local market, and visiting the convent were highlights alongside Chichen Itza.", tourCategory: "valladolid", departureCity: "playa-del-carmen", verified: true },
  { id: "r13", author: "Lisa M.", location: "San Francisco, CA", date: "2025-09-30", rating: 5, title: "Cenote Ik Kil was magical", content: "The combo with Cenote Ik Kil was perfect. After hours in the sun exploring ruins, jumping into the cool cenote water surrounded by hanging vines felt like paradise. Guide timed it perfectly — we had the cenote almost to ourselves.", tourCategory: "cenote", departureCity: "riviera-maya", verified: true },
  { id: "r14", author: "Robert J.", location: "Edinburgh, UK", date: "2025-09-22", rating: 5, title: "Fall equinox experience", content: "Visited during the September equinox and witnessed the serpent shadow on El Castillo. Yes, it was crowded, but our guide positioned us perfectly. Once-in-a-lifetime experience that connected us to ancient Mayan astronomy.", tourCategory: "day-tour", departureCity: "cancun", verified: true },
  { id: "r15", author: "Ana C.", location: "Madrid, Spain", date: "2025-09-15", rating: 5, title: "Luxury tour exceeded expectations", content: "From the Mercedes van to the gourmet lunch to the private guide who was an actual archaeologist — this luxury tour was worth the premium. We even got early access before the general public. Flawless service.", tourCategory: "private", departureCity: "riviera-maya", verified: true },
  { id: "r16", author: "Daniel W.", location: "Denver, CO", date: "2025-09-01", rating: 4, title: "Hot but incredible", content: "September is HOT — bring lots of water and sunscreen. Despite the heat, Chichen Itza lived up to the hype. The guide found shaded spots for explanations. Fewer tourists than expected, which was a pleasant surprise.", tourCategory: "day-tour", departureCity: "tulum", verified: true },
  { id: "r17", author: "Sophie & Max R.", location: "Amsterdam, NL", date: "2025-08-20", rating: 5, title: "Honeymoon highlight", content: "We chose the private sunrise tour for our honeymoon and it was the most romantic experience imaginable. Watching dawn break over El Castillo, just the two of us and our guide. They even took incredible photos of us. Absolutely perfect.", tourCategory: "sunrise", departureCity: "tulum", verified: true },
  { id: "r18", author: "Christine P.", location: "Montreal, QC", date: "2025-08-10", rating: 5, title: "Coba combo was amazing", content: "Climbing the Nohoch Mul pyramid at Coba and then seeing the majestic El Castillo at Chichen Itza in one day — what a contrast! The bike ride through Coba's jungle paths was such a fun addition. Great combo tour.", tourCategory: "cenote", departureCity: "playa-del-carmen", verified: true },
  { id: "r19", author: "Andrew L.", location: "Dublin, Ireland", date: "2025-07-28", rating: 5, title: "Small group made the difference", content: "Only 10 people in our group meant more time for questions and our guide could adapt the pace. We spent extra time at the observatory because our group was interested in Mayan astronomy. So much better than a big bus tour.", tourCategory: "day-tour", departureCity: "cancun", verified: true },
  { id: "r20", author: "Maria & Jose T.", location: "Bogota, Colombia", date: "2025-07-15", rating: 5, title: "Mejor excursión de nuestro viaje", content: "Todo fue perfecto — el transporte, la guía bilingüe, el almuerzo en Valladolid, y por supuesto Chichen Itza. La pirámide es aún más impresionante en persona que en fotos. El baño en el cenote fue increíble.", tourCategory: "day-tour", departureCity: "cancun", verified: true },
  { id: "r21", author: "Helen K.", location: "Phoenix, AZ", date: "2025-07-01", rating: 4, title: "Great for older travelers", content: "As a 72-year-old, I was worried about the heat and walking. The guide was accommodating — found us shade, adjusted pace, and the van had excellent AC. Only 4 stars because the lunch stop was a bit rushed.", tourCategory: "day-tour", departureCity: "merida", verified: true },
  { id: "r22", author: "Brian F.", location: "Austin, TX", date: "2025-06-20", rating: 5, title: "Photography paradise at dawn", content: "As a semi-pro photographer, the sunrise tour was a dream. Golden hour light on El Castillo with zero tourists in frame. Our guide knew exactly which angles to recommend. Got my best travel photo ever.", tourCategory: "sunrise", departureCity: "cancun", verified: true },
  { id: "r23", author: "Natalie & Chris D.", location: "Calgary, AB", date: "2025-06-10", rating: 5, title: "Kids loved every minute", content: "Our 6-year-old and 9-year-old were fascinated by the stories of Mayan warriors and the ball game. The guide made history accessible and fun for children. Swimming in the cenote was the cherry on top of a perfect family day.", tourCategory: "day-tour", departureCity: "riviera-maya", verified: true },
  { id: "r24", author: "George S.", location: "Manchester, UK", date: "2025-05-28", rating: 5, title: "Night tour is unmissable", content: "Second visit to Chichen Itza but first time at night. Completely different experience — the light projections telling Mayan stories on El Castillo gave me chills. More atmospheric and less crowded than daytime visits.", tourCategory: "night", departureCity: "merida", verified: true },
  { id: "r25", author: "Isabella V.", location: "Rome, Italy", date: "2025-05-15", rating: 5, title: "From Riviera Maya — seamless pickup", content: "Staying at an all-inclusive in Akumal, I was worried about logistics. The pickup was right at my resort lobby, exactly on time. The whole day was seamlessly organized. Chichen Itza blew my mind — photos don't do it justice.", tourCategory: "day-tour", departureCity: "riviera-maya", verified: true },
];

// Helper functions
export const getReviewsByTourCategory = (category: string): Review[] =>
  reviews.filter((r) => r.tourCategory === category);

export const getReviewsByCity = (city: string): Review[] =>
  reviews.filter((r) => r.departureCity === city);

export const getFeaturedReviews = (limit = 6): Review[] =>
  reviews.filter((r) => r.rating === 5).slice(0, limit);

export const getAverageRating = (reviewList: Review[]): number => {
  if (reviewList.length === 0) return 0;
  return Math.round((reviewList.reduce((sum, r) => sum + r.rating, 0) / reviewList.length) * 10) / 10;
};

export const generateReviewSchema = (reviewList: Review[]) =>
  reviewList.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    datePublished: r.date,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating.toString(),
      bestRating: "5",
    },
    name: r.title,
    reviewBody: r.content,
  }));
