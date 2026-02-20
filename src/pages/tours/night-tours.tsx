import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Moon, Clock, ChevronRight, Star, Sparkles, Camera, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createFAQSchema, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourFilters, { type FilterState } from "@/components/features/tours/TourFilters";
import FAQSection from "@/components/common/FAQ";
import TrustBadges from "@/components/features/booking/TrustBadges";
import TipBox from "@/components/guide/TipBox";
import CTASection from "@/components/features/home/CTASection";
import { tours } from "@/lib/tourData";
import type { FAQItem } from "@/lib/faqData";
import { getReviewsByTourCategory } from "@/lib/reviewsData";
import ReviewGrid from "@/components/features/reviews/ReviewGrid";
import type { Tour } from "@/types/tour";

const nightToursFAQs: FAQItem[] = [
  {
    question: "What is the Noches de Kukulkan light show?",
    answer: "Noches de Kukulkan (Nights of Kukulkan) is a spectacular light and sound show featuring cutting-edge projection mapping on the El Castillo pyramid. Colorful projections tell the story of Mayan civilization, cosmology, and the significance of the pyramid's astronomical design. The show runs approximately 25-30 minutes.",
    category: "experience",
  },
  {
    question: "What nights does the light show run?",
    answer: "The show typically runs Wednesday through Sunday during high season (November–April) and Thursday through Saturday during low season. Schedules may vary — we confirm exact availability when you book. The show starts after sunset, usually around 8:00 PM.",
    category: "schedule",
  },
  {
    question: "Is the night tour different from a daytime visit?",
    answer: "Yes, completely! The night tour focuses on the light show experience rather than exploring the ruins up close. You can walk around illuminated sections of the site before the show, but it's not a full archaeological tour. If you want both experiences, we recommend booking a daytime tour on a separate day.",
    category: "comparison",
  },
  {
    question: "Can I take photos during the light show?",
    answer: "Yes, photography is encouraged during the light show. Smartphones and cameras are welcome. However, tripods, flash photography, and drones are prohibited. The projections are bright enough for excellent smartphone photos. Pro tip: turn off your flash for better results.",
    category: "photography",
  },
  {
    question: "Is dinner included in the night tour?",
    answer: "Yes, most night tours include dinner at a restaurant near the archaeological zone before the show. The meal typically features regional Yucatecan cuisine. Some premium tours offer dinner within the archaeological zone itself.",
    category: "inclusions",
  },
  {
    question: "How long is the entire night tour?",
    answer: "The total tour duration is approximately 6-7 hours, including transportation (2-2.5 hours each way from Cancún), dinner (45 minutes), pre-show exploration (30 minutes), the light show (25-30 minutes), and return journey. From closer cities like Mérida, the tour is shorter.",
    category: "duration",
  },
  {
    question: "Is the night tour suitable for children?",
    answer: "Yes, children generally love the light show. The colorful projections and dramatic sound effects are engaging for all ages. The show is not frightening. Children under 3 are usually free. Note that the tour returns late (around 10:30 PM from Cancún), so consider your child's bedtime.",
    category: "family",
  },
];

const meta = getPageMeta({
  title: "Chichen Itza Night Tours – Light & Sound Show 2026",
  description: "Experience Chichen Itza after dark with the spectacular Noches de Kukulkan light show. Projections on El Castillo, dinner included. From $79. Book now!",
  canonical: "/tours/night-tours",
  jsonLd: [
    createFAQSchema(nightToursFAQs),
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tours", url: "/tours" },
      { name: "Night Tours" },
    ]),
  ],
});

const filterTours = (allTours: Tour[], filters: FilterState): Tour[] => {
  return allTours.filter((tour) => {
    if (filters.priceRange !== "all") {
      const price = tour.price.adult;
      if (filters.priceRange === "0-60" && price >= 60) return false;
      if (filters.priceRange === "60-100" && (price < 60 || price >= 100)) return false;
      if (filters.priceRange === "100-150" && (price < 100 || price >= 150)) return false;
      if (filters.priceRange === "150+" && price < 150) return false;
    }
    if (filters.duration.length > 0) {
      const hours = tour.durationHours;
      const match = filters.duration.some((d) => {
        if (d === "short") return hours < 8;
        if (d === "full") return hours >= 8 && hours <= 12;
        if (d === "long") return hours > 12;
        return false;
      });
      if (!match) return false;
    }
    if (filters.tourType.length > 0 && !filters.tourType.includes(tour.tourType)) return false;
    if (filters.category.length > 0 && !filters.category.some((c) => tour.category.includes(c))) return false;
    return true;
  });
};

const NightToursPage = () => {
  const nightTours = useMemo(() => tours.filter((t) => t.category.includes("night-tours")), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(nightTours, filters), [nightTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--foreground)/0.05)] via-background to-accent/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tours", href: "/tours" }, { label: "Night Tours" }]} />

          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.7/5 from 420+ travelers</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Chichen Itza Night Tours – Light & Sound Show
            </h1>

            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Experience the ancient wonder after dark. Watch El Castillo come alive with spectacular projection mapping during the Noches de Kukulkan show — a magical evening you'll never forget.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Moon, text: "Evening experience" },
                { icon: Sparkles, text: "Projection mapping" },
                { icon: Camera, text: "Night photography" },
                { icon: Shield, text: "Dinner included" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                  <item.icon className="h-4 w-4 text-accent" />
                  {item.text}
                </span>
              ))}
            </div>

            <Button variant="cta" size="lg" asChild>
              <a href="#tours">Browse Night Tours <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            While most visitors experience Chichen Itza under the blazing Yucatán sun, the <strong className="text-foreground">Noches de Kukulkan</strong> light and sound show transforms the ancient site into something entirely different — a mesmerizing nighttime spectacle that reveals the pyramid's secrets through cutting-edge projection technology.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            As darkness falls, El Castillo becomes a massive canvas for stunning visual projections. Ancient Mayan glyphs, celestial maps, gods, and the famous serpent shadow of the equinox are projected across the pyramid's surface in vivid color. The accompanying soundtrack blends traditional Mayan music with dramatic narration, creating an immersive multisensory experience.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Night tours offer a completely different perspective — cooler temperatures (70-75°F), fewer visitors, and a magical atmosphere impossible to replicate during the day. Perfect as a standalone experience or complement to a{" "}
            <Link to="/tours/day-tours" className="text-primary hover:underline">daytime tour</Link>. Also consider{" "}
            <Link to="/tours/sunrise-tours" className="text-primary hover:underline">sunrise tours</Link> for another unique lighting experience.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            What to Expect at the Night Show
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Projection Mapping", desc: "State-of-the-art 3D projections transform El Castillo into a living canvas. Watch Mayan cosmology, astronomical patterns, and the serpent descent come alive in vivid color.", badge: "Main Event" },
              { title: "Pre-Show Exploration", desc: "Walk around the illuminated archaeological zone before the show begins. Key structures are lit with atmospheric lighting, creating incredible photo opportunities.", badge: "30 Minutes" },
              { title: "Dinner Experience", desc: "Enjoy a traditional Yucatecan dinner before the show at a nearby restaurant or within the archaeological zone, depending on your tour package.", badge: "Included" },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden border border-border">
                <div className="h-40 bg-gradient-to-br from-foreground/10 to-accent/20 flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-accent/50" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">{item.badge}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 text-center">
            Night Tour Tips
          </h2>
          <TipBox
            type="tip"
            title="Photography Tips"
            content="Use your phone's night mode for the best results. Turn off flash — it washes out the projections and disturbs other guests. A steady hand or small beanbag support produces sharper images than handheld shots."
          />
          <TipBox
            type="info"
            title="What to Bring"
            content="Bring a light jacket — temperatures drop to 70-75°F after sunset. Bug spray is helpful for outdoor seating. A portable phone charger ensures you don't run out of battery during photos."
          />
          <TipBox
            type="warning"
            title="Availability Note"
            content="The light show doesn't run every night. High season (Nov-Apr): Wednesday through Sunday. Low season (May-Oct): Thursday through Saturday. We confirm exact dates when you book. Reserve early as shows sell out during peak season."
          />
        </div>
      </section>

      {/* Tour Grid */}
      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">
            All Chichen Itza Night Tours
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {nightTours.length} night tour{nightTours.length !== 1 ? "s" : ""} available
          </p>

          <TourFilters onFilterChange={setFilters} tourCount={filteredTours.length} className="mb-6" />

          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground mb-4">No tours match your filters.</p>
              <Button variant="outline" onClick={() => setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <ReviewGrid reviews={getReviewsByTourCategory("night")} limit={3} title="Night Tour Reviews" showAllLink />
        </div>
      </section>

      <FAQSection faqs={nightToursFAQs} title="Night Tour FAQs" subtitle="Common questions about Chichen Itza evening and light show tours" />

      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">Explore More Tours</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Day Tours", href: "/tours/day-tours" },
              { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "Cenote Tours", href: "/tours/cenote-tours" },
              { label: "Ek Balam Tours", href: "/tours/ek-balam-tours" },
              { label: "Valladolid Tours", href: "/tours/valladolid-tours" },
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "From Mérida", href: "/tours-from/merida" },
              { label: "Luxury Tours", href: "/tour-types/luxury" },
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
};

export default NightToursPage;
