import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, Landmark, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import { guideSchemas } from "@/lib/schema";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import FAQSection from "@/components/common/FAQ";
import QuickBookingForm from "@/components/features/booking/QuickBookingForm";
import TrustBadges from "@/components/features/booking/TrustBadges";
import PopularToursWidget from "@/components/features/tours/PopularToursWidget";
import { guideImages } from "@/lib/tourImages";

const faqData = [
  {
    question: "How old is Chichen Itza?",
    answer:
      "Chichen Itza was founded around 600 AD and reached its peak between 900-1200 AD. The structures you see today are approximately 800-1,400 years old, with El Castillo pyramid built around 1000 AD.",
  },
  {
    question: 'What does "Chichen Itza" mean?',
    answer:
      'Chichen Itza means "at the mouth of the well of the Itza" in the Mayan language. "Chi" means mouth, "chen" means well, and "Itza" refers to the Maya tribe that built the city. The name references the sacred cenotes that provided water and held religious significance.',
  },
  {
    question: "Why is Chichen Itza one of the New Seven Wonders of the World?",
    answer:
      "Chichen Itza was named one of the New Seven Wonders of the World in 2007 through a global voting campaign with over 100 million votes. It was chosen for its architectural brilliance, astronomical precision, massive scale, and cultural significance. It is also a UNESCO World Heritage Site since 1988.",
  },
  {
    question: "Who built Chichen Itza?",
    answer:
      "Chichen Itza was built by the Maya civilization, specifically the Itza Maya people, between 600-1200 AD. The city shows influence from both Maya and Toltec cultures. Construction involved thousands of workers over several centuries.",
  },
  {
    question: "Why was Chichen Itza abandoned?",
    answer:
      "Chichen Itza was gradually abandoned between 1200-1400 AD. Likely factors include drought and water scarcity, political instability and warfare, trade route changes, and the rise of competing city-states like Mayapan. The Spanish found the site already largely abandoned.",
  },
  {
    question: "Can you climb El Castillo pyramid?",
    answer:
      "No, climbing El Castillo has been prohibited since 2006 to preserve the structure and ensure visitor safety. Before the ban, millions of tourists caused significant erosion. You can view and photograph the pyramid but cannot ascend the stairs.",
  },
];

const meta = getPageMeta({
  title: "Chichen Itza History & Facts – Complete Guide 2026",
  description:
    "Discover Chichen Itza history, fascinating facts about El Castillo, Mayan civilization, UNESCO status, New Seven Wonders. Expert guide to this ancient wonder.",
  canonical: "/guide/history-and-facts",
  ogType: "article",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Guide", url: "/guide" },
      { name: "History & Facts" },
    ]),
    guideSchemas["history-and-facts"],
    createFAQSchema(faqData),
  ],
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "History & Facts" },
];

const timeline = [
  { period: "600 AD", title: "Early Settlement", icon: "🏛️", description: "Chichen Itza founded by Maya groups. Early structures built in traditional Maya style. The city begins as a regional ceremonial center." },
  { period: "800-900 AD", title: "Rise to Power", icon: "📈", description: "Chichen Itza becomes a major political and economic power in the northern Yucatan. Expansion begins. Trade networks established across Mesoamerica." },
  { period: "900-1000 AD", title: "Golden Age Begins", icon: "⭐", description: "Peak construction period. El Castillo pyramid and Great Ball Court built. The city dominates the region politically and culturally. Population reaches 50,000+." },
  { period: "1000-1200 AD", title: "Height of Power", icon: "👑", description: "Chichen Itza at its absolute zenith. Massive building projects completed. Center of astronomy, mathematics, and art. Controls trade routes across Yucatan." },
  { period: "1200-1400 AD", title: "Gradual Decline", icon: "📉", description: "Political power wanes. Rival city Mayapan rises. Population decreases. Drought and warfare contribute to abandonment. Sacred pilgrimage site remains." },
  { period: "1500s", title: "Spanish Conquest", icon: "⚔️", description: "Spanish arrive to find Chichen Itza already abandoned. Structures looted and damaged. Site falls into jungle overgrowth. Local Maya continue small pilgrimages." },
  { period: "1843", title: "Rediscovery", icon: "🔍", description: "American explorer John Lloyd Stephens and artist Frederick Catherwood document ruins. Published accounts spark international interest in Maya civilization." },
  { period: "1920s-1940s", title: "Major Excavations", icon: "⚒️", description: "Carnegie Institution conducts extensive archaeological excavations. El Castillo restored. Temple of Warriors uncovered. Scientific understanding of Maya advances dramatically." },
  { period: "1988", title: "UNESCO World Heritage", icon: "🏆", description: "Chichen Itza designated UNESCO World Heritage Site, recognized for outstanding universal value and exceptional preservation of Maya monuments." },
  { period: "2007", title: "New Seven Wonders", icon: "🌟", description: "Global voting campaign names Chichen Itza one of the New Seven Wonders of the World. Over 100 million votes cast. International recognition solidifies status." },
  { period: "Today", title: "Modern Wonder", icon: "🌎", description: "Mexico's second most-visited archaeological site. 2.6+ million annual visitors. Ongoing conservation and research. UNESCO protected." },
];

const structures = [
  { name: "Great Ball Court", icon: "⚽", description: "Largest ball court in Mesoamerica at 551 feet long. Stone rings 20 feet high. Incredible acoustics — whispers carry across the 500-foot field.", fact: "A whisper at one end can be heard clearly at the other end 500 feet away." },
  { name: "Temple of Warriors", icon: "⚔️", description: "Massive stepped pyramid surrounded by the Group of a Thousand Columns. Features carved warriors, serpent columns, and a chacmool statue at the top.", fact: "The 1,000+ columns once supported a massive wooden roof creating covered markets." },
  { name: "Sacred Cenote", icon: "💧", description: "Natural sinkhole 200 feet wide and 90 feet deep. Used for human and material sacrifices to the rain god Chaac. Archaeological dredging recovered gold, jade, and pottery.", fact: "Over 200 sacrificial victims' remains have been recovered from the cenote." },
  { name: "El Caracol (Observatory)", icon: "🔭", description: "Circular tower unique in Maya architecture. Windows aligned with Venus' orbit and other celestial events. Maya astronomers tracked planets and predicted eclipses.", fact: "The building's name means 'snail' in Spanish due to its spiral interior staircase." },
  { name: "Platform of Venus", icon: "⭐", description: "Square platform decorated with feathered serpent and Venus glyphs. Used for ceremonies tied to Venus cycles. The Maya considered Venus movements critically important.", fact: "The Maya tracked Venus with accuracy to within 2 hours over 500+ years." },
  { name: "Temple of Jaguars", icon: "🐆", description: "Two-story temple overlooking the ball court. Intricately carved jaguar thrones and warriors. Upper temple contains murals depicting Maya battles.", fact: "Original paint and stucco decoration still visible in protected interior areas." },
];

const amazingFacts = [
  "Chichen Itza receives over 2.6 million visitors annually — Mexico's second most-visited archaeological site",
  'The name "Chichen Itza" means "at the mouth of the well of the Itza" in Maya',
  "El Castillo has exactly 365 steps (364 + top platform) representing days of the year",
  "During equinoxes, a serpent shadow 'descends' the pyramid stairs — visible only 2 days/year",
  "The Great Ball Court is the largest in all of Mesoamerica at 551 feet long",
  "A handclap at the ball court produces a chirping echo mimicking the sacred quetzal bird",
  "The Maya practiced human sacrifice at the Sacred Cenote to appease rain god Chaac",
  "El Caracol observatory windows align precisely with Venus' extreme positions",
  "Maya astronomers predicted solar eclipses with remarkable accuracy from Chichen Itza",
  "The site was inhabited for over 1,000 years before abandonment around 1400 AD",
  "UNESCO designated Chichen Itza a World Heritage Site in 1988",
  "Named one of the New Seven Wonders of the World in 2007 (100+ million votes)",
  "You cannot climb El Castillo anymore — banned in 2006 for preservation",
  "There's a smaller pyramid hidden INSIDE El Castillo containing a jaguar throne",
  "The Temple of Warriors has over 1,000 carved stone columns",
  "Chichen Itza covers over 5 square miles — you only see about 10% on standard tours",
  "The Maya ball game had religious significance — losers (or winners) were sometimes sacrificed",
  "Original structures were painted vibrant red, blue, yellow — weathering removed most color",
  "The city controlled salt trade routes — a major source of wealth",
  "At its peak, Chichen Itza's population exceeded 50,000 people",
  "The site shows both Maya and Toltec architectural influences",
  "Cenote Xtoloc provided drinking water — the city's survival depended on cenotes",
  "Spanish conquistadors found the site already abandoned when they arrived in 1500s",
  "American explorer John Lloyd Stephens popularized the ruins in 1843",
  "Ongoing archaeological work continues discovering new structures yearly",
];

const HistoryAndFactsPage = () => (
  <>
    <SEOHead meta={meta} />

    {/* Hero */}
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16 overflow-hidden">
      <img
        src={guideImages["history-and-facts"]}
        alt="El Castillo pyramid at Chichen Itza, ancient Maya wonder"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        loading="eager"
      />
      <div className="container relative z-10">
        <Breadcrumbs items={breadcrumbs} />
        <div className="max-w-3xl mt-4">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Chichen Itza History & Facts: Ancient Mayan Wonder
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Explore the fascinating 1,400-year history of one of the New Seven Wonders of the World — from its founding around 600 AD to its status as a UNESCO World Heritage Site today.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Updated: February 2026 • 10 min read • Historical Guide
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/tours">
              Explore Tours <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Two-column layout */}
    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10">
          {/* Main Content */}
          <div className="space-y-14">
            {/* Quick Facts */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 lg:p-8">
              <h2 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Chichen Itza at a Glance
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-1.5">
                  <p><span className="font-medium">Founded:</span> <span className="text-muted-foreground">~600 AD</span></p>
                  <p><span className="font-medium">Peak Period:</span> <span className="text-muted-foreground">900-1200 AD</span></p>
                  <p><span className="font-medium">Abandoned:</span> <span className="text-muted-foreground">~1200-1400 AD</span></p>
                  <p><span className="font-medium">Civilization:</span> <span className="text-muted-foreground">Maya (Itza people)</span></p>
                  <p><span className="font-medium">Location:</span> <span className="text-muted-foreground">Yucatan, Mexico</span></p>
                </div>
                <div className="space-y-1.5">
                  <p><span className="font-medium">UNESCO Site:</span> <span className="text-muted-foreground">1988</span></p>
                  <p><span className="font-medium">New Wonder:</span> <span className="text-muted-foreground">2007</span></p>
                  <p><span className="font-medium">Annual Visitors:</span> <span className="text-muted-foreground">2.6+ million</span></p>
                  <p><span className="font-medium">Main Structure:</span> <span className="text-muted-foreground">El Castillo (79 ft tall)</span></p>
                  <p><span className="font-medium">Meaning:</span> <span className="text-muted-foreground">"At the mouth of the well of the Itza"</span></p>
                </div>
              </div>
            </div>

            {/* Historical Timeline */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Historical Timeline
              </h2>

              <div className="space-y-0">
                {timeline.map((event, index) => (
                  <div key={index} className="flex gap-4 relative">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl flex-shrink-0">{event.icon}</span>
                      {index < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-border my-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-heading font-semibold text-base">{event.title}</h3>
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{event.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* El Castillo Deep Dive */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-2">
                <Landmark className="h-6 w-6 text-accent" />
                El Castillo: The Temple of Kukulkan
              </h2>
              <p className="text-muted-foreground mb-6">
                El Castillo (Spanish for "The Castle") is the centerpiece of Chichen Itza and one of the most recognizable structures in the world. This step-pyramid temple dedicated to the feathered serpent god Kukulkan showcases the Maya's extraordinary astronomical and mathematical knowledge.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-semibold text-base mb-3">Physical Dimensions</h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Height: 79 feet (24 meters)</li>
                    <li>• Base: 181 feet (55.3 meters) square</li>
                    <li>• Steps: 91 steps × 4 sides = 364 steps</li>
                    <li>• Top platform: 1 step (= 365 total, days in year)</li>
                    <li>• Terraces: 9 levels (18 on two sides = 18 Mayan months)</li>
                  </ul>
                </div>
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-semibold text-base mb-3">Construction Details</h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Built: ~1000 AD</li>
                    <li>• Material: Limestone blocks</li>
                    <li>• Labor: Thousands of workers over decades</li>
                    <li>• Weight: Estimated millions of pounds</li>
                    <li>• Alignment: Precisely cardinal directions (N/S/E/W)</li>
                  </ul>
                </div>
              </div>

              <TipBox
                type="info"
                title="The Equinox Serpent Shadow"
                content="Twice a year during the spring and fall equinoxes (March 20 & September 22), the setting sun casts triangular shadows on the north staircase that create the illusion of a feathered serpent descending the pyramid. This remarkable astronomical alignment draws tens of thousands of visitors."
              />

              <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-base mb-2">The Hidden Pyramid Inside</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  In the 1930s, archaeologists discovered an earlier, smaller pyramid buried inside El Castillo. The Maya built the current structure over the older one, a common practice called "temple encapsulation." The interior pyramid contains a red jaguar throne with jade inlays and a chacmool statue.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Note: The interior pyramid was open to tourists until 2006 but is now permanently closed due to structural concerns.
                </p>
              </div>
            </div>

            {/* Major Structures */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 flex items-center gap-2">
                <Landmark className="h-6 w-6 text-primary" />
                Other Major Structures
              </h2>

              <div className="space-y-4">
                {structures.map((structure, index) => (
                  <div key={index} className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{structure.icon}</span>
                      <h3 className="font-heading font-semibold text-base">{structure.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{structure.description}</p>
                    <div className="bg-primary/5 border border-primary/10 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-primary">💡 Fascinating Fact:</span> {structure.fact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 25 Amazing Facts */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-accent" />
                25 Amazing Facts About Chichen Itza
              </h2>

              <div className="space-y-2">
                {amazingFacts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card rounded-lg border border-border p-3 hover:shadow-sm transition-shadow">
                    <span className="bg-primary/10 text-primary font-bold text-xs rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-sm text-muted-foreground">{fact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why It Matters */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Why Chichen Itza Matters Today
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Archaeological Importance", text: "Provides crucial insights into Maya civilization at its peak. Demonstrates advanced knowledge of astronomy, mathematics, engineering, and architecture. Ongoing excavations continue revealing new information." },
                  { title: "Cultural Heritage", text: "For modern Maya descendants (6+ million people across Mexico and Central America), Chichen Itza represents ancestral achievement and cultural identity, connecting present-day communities to their illustrious past." },
                  { title: "Scientific Achievement", text: "The Maya developed one of only five fully developed writing systems in human history, created a calendar more accurate than the Julian calendar, and made astronomical observations rivaling modern measurements — without metal tools or the wheel." },
                  { title: "Economic Impact", text: "Generates billions in tourism revenue, supporting thousands of families in Yucatan. Creates jobs for guides, archaeologists, conservators, hospitality workers, and artisans while funding preservation efforts." },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-xl border border-border p-5">
                    <h3 className="font-heading font-semibold text-base mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <FAQSection title="History & Facts FAQ" faqs={faqData} />

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 lg:p-8 text-center">
              <h2 className="font-heading font-bold text-xl mb-2">
                Experience This Ancient Wonder Yourself
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Book a guided tour with expert historians who bring Chichen Itza's fascinating past to life
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="cta" asChild>
                  <Link to="/tours">View All Tours</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/practical/contact">Ask an Expert</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <QuickBookingForm />
            <TrustBadges />

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <h3 className="font-heading font-semibold text-base mb-2">📚 Learn More:</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Our expert guides share fascinating historical details and stories you won't find in books.
              </p>
              <Button variant="cta" size="sm" className="w-full" asChild>
                <Link to="/tours/private-tours">Book Educational Tour</Link>
              </Button>
            </div>

            <PopularToursWidget />

            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-heading font-semibold text-base mb-3">More Planning Guides</h3>
              <ul className="space-y-2">
                <li><Link to="/guide/best-time-to-visit" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ Best Time to Visit</Link></li>
                <li><Link to="/guide/what-to-bring" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ What to Bring</Link></li>
                <li><Link to="/guide/photography-tips" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ Photography Tips</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection />

    {/* Related Links */}
    <section className="py-12 bg-muted/30 border-t border-border">
      <div className="container">
        <h2 className="font-heading font-semibold text-lg mb-6">Related Guides</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
            { label: "What to Bring", href: "/guide/what-to-bring" },
            { label: "How to Get There", href: "/guide/how-to-get-there" },
            { label: "Photography Tips", href: "/guide/photography-tips" },
            { label: "Dress Code", href: "/guide/dress-code-and-rules" },
            { label: "vs Other Ruins", href: "/guide/vs-other-ruins" },
            { label: "Entrance Fees", href: "/guide/entrance-fees" },
            { label: "All Tours", href: "/tours" },
          ].map((link) => (
            <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default HistoryAndFactsPage;
