import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Mountain, Clock, ChevronRight, Star, Eye, Compass, Shield } from "lucide-react";
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
import type { Tour } from "@/types/tour";

const ekBalamFAQs: FAQItem[] = [
  {
    question: "Can you still climb the pyramid at Ek Balam?",
    answer: "Yes! Unlike Chichen Itza where climbing is prohibited, you can still climb Ek Balam's Acropolis pyramid. The climb rewards you with breathtaking 360° panoramic views of the Yucatán jungle canopy stretching to the horizon.",
    category: "experience",
  },
  {
    question: "How far is Ek Balam from Chichen Itza?",
    answer: "Ek Balam is approximately 30 miles (50 km) north of Chichen Itza, about a 45-minute drive. This proximity makes it easy to visit both sites in a single day on our combo tours.",
    category: "distance",
  },
  {
    question: "What makes Ek Balam different from Chichen Itza?",
    answer: "While Chichen Itza is larger and more famous, Ek Balam offers a more intimate experience with fewer crowds, the ability to climb the main pyramid, remarkably preserved stucco sculptures, and a beautiful jungle cenote (Cenote Xcanche) within walking distance.",
    category: "comparison",
  },
  {
    question: "Is the climb at Ek Balam difficult?",
    answer: "The climb is moderately challenging — the Acropolis is about 100 feet tall with steep stone steps. Most reasonably fit adults and older children can manage it. Take your time, use the rope handrails, and wear sturdy shoes. The views from the top are absolutely worth the effort.",
    category: "preparation",
  },
  {
    question: "Is there a cenote at Ek Balam?",
    answer: "Yes! Cenote Xcanche is located about a 15-minute walk (or short bike ride) from the Ek Balam ruins. It's a beautiful open cenote with swimming, rappelling, and zipline activities. Some tours include this as part of the combo itinerary.",
    category: "activities",
  },
  {
    question: "How long does it take to explore Ek Balam?",
    answer: "Plan 1.5-2 hours for a thorough visit to Ek Balam, including climbing the Acropolis and exploring the other structures. Add another hour if visiting Cenote Xcanche. Our combo tours allocate appropriate time for both.",
    category: "duration",
  },
];

const meta = getPageMeta({
  title: "Chichen Itza + Ek Balam Tours – Climb a Mayan Pyramid 2026",
  description: "Combine Chichen Itza with Ek Balam — one of the few Mayan pyramids you can still climb. Panoramic jungle views, cenote swim. From $119. Book now!",
  canonical: "/tours/ek-balam-tours",
  jsonLd: [
    createFAQSchema(ekBalamFAQs),
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tours", url: "/tours" },
      { name: "Ek Balam Tours" },
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

const EkBalamToursPage = () => {
  const ekBalamTours = useMemo(() => tours.filter((t) => t.category.includes("ek-balam")), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(ekBalamTours, filters), [ekBalamTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent/10 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tours", href: "/tours" }, { label: "Ek Balam Tours" }]} />

          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.9/5 from 670+ travelers</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Chichen Itza + Ek Balam Combo Tours
            </h1>

            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Visit two magnificent Mayan sites in one day — and climb the Acropolis pyramid at Ek Balam for breathtaking jungle views. An adventurer's dream tour!
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Mountain, text: "Climbable pyramid" },
                { icon: Eye, text: "360° jungle views" },
                { icon: Compass, text: "Two archaeological sites" },
                { icon: Shield, text: "Small groups (max 12)" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                  <item.icon className="h-4 w-4 text-accent" />
                  {item.text}
                </span>
              ))}
            </div>

            <Button variant="cta" size="lg" asChild>
              <a href="#tours">Browse Ek Balam Tours <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            While Chichen Itza is undeniably the star of Yucatán archaeology, nearby <strong className="text-foreground">Ek Balam</strong> offers something Chichen Itza cannot — the chance to <strong className="text-foreground">climb an ancient Mayan pyramid</strong>. The Acropolis at Ek Balam stands 100 feet tall and rewards climbers with unobstructed 360-degree views of the jungle canopy.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Located just 30 miles north of Chichen Itza, Ek Balam ("Black Jaguar" in Maya) was a powerful city-state that rivaled Chichen Itza during the Late Classic period. Its remarkably preserved stucco sculptures — including the famous "Monster Mouth" entrance — are among the finest in the Mayan world.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our combo tours efficiently pair both sites, plus cenote swimming and lunch. Compare with{" "}
            <Link to="/tours/day-tours" className="text-primary hover:underline">standard day tours</Link>,{" "}
            <Link to="/tours/cenote-tours" className="text-primary hover:underline">cenote combos</Link>, or{" "}
            <Link to="/tours/private-tours" className="text-primary hover:underline">private experiences</Link>.
          </p>
        </div>
      </section>

      {/* Why Ek Balam */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            Why Add Ek Balam to Your Chichen Itza Tour?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Climb the Acropolis", desc: "One of the few Mayan pyramids you can still climb. The 100-foot ascent rewards you with spectacular 360° jungle views.", badge: "Unique" },
              { title: "Fewer Crowds", desc: "Ek Balam receives a fraction of Chichen Itza's visitors, offering a peaceful, intimate archaeological experience.", badge: "Peaceful" },
              { title: "Stunning Sculptures", desc: "The 'Monster Mouth' stucco facade is among the best-preserved examples of ancient Mayan art anywhere in the world.", badge: "Art & History" },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden border border-border">
                <div className="h-40 bg-gradient-to-br from-accent/30 to-primary/20 flex items-center justify-center">
                  <Mountain className="h-12 w-12 text-accent/50" />
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
            Ek Balam Climbing Tips
          </h2>
          <TipBox
            type="tip"
            title="What to Wear for the Climb"
            content="Wear sturdy closed-toe shoes with good grip — the stone steps can be slippery, especially in the morning dew. Avoid sandals or flip-flops. Bring a small backpack to keep your hands free during the climb."
          />
          <TipBox
            type="info"
            title="Cenote Xcanche"
            content="If your tour includes Cenote Xcanche (a 15-minute walk from the ruins), bring your swimsuit, towel, and biodegradable sunscreen. The cenote also offers rappelling and zipline activities for an extra fee."
          />
          <TipBox
            type="warning"
            title="Physical Requirements"
            content="The pyramid climb is moderately strenuous. If you have mobility issues, knee problems, or fear of heights, you can still enjoy the ground-level structures. The stucco sculptures are visible without climbing."
          />
        </div>
      </section>

      {/* Tour Grid */}
      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">
            All Chichen Itza + Ek Balam Tours
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {ekBalamTours.length} Ek Balam combo tours available
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

      <FAQSection faqs={ekBalamFAQs} title="Ek Balam Tour FAQs" subtitle="Common questions about Chichen Itza + Ek Balam combo tours" />

      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">Explore More Tours</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Day Tours", href: "/tours/day-tours" },
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "Cenote Tours", href: "/tours/cenote-tours" },
              { label: "Valladolid Tours", href: "/tours/valladolid-tours" },
              { label: "Night Tours", href: "/tours/night-tours" },
              { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "From Mérida", href: "/tours-from/merida" },
              { label: "Family Tours", href: "/tour-types/family-friendly" },
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

export default EkBalamToursPage;
