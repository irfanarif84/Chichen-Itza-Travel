import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Church, Clock, ChevronRight, Star, Palette, Camera, Shield } from "lucide-react";
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

const valladolidFAQs: FAQItem[] = [
  {
    question: "What is Valladolid and why is it included in Chichen Itza tours?",
    answer: "Valladolid is a charming colonial town designated as a 'Pueblo Mágico' (Magical Town) by the Mexican government. Located just 45 minutes from Chichen Itza, it offers colorful colonial architecture, authentic Yucatecan cuisine, and a peaceful contrast to the archaeological site. It's the perfect cultural complement to your ruins visit.",
    category: "general",
  },
  {
    question: "What can I see in Valladolid?",
    answer: "Top attractions include the Convento de San Bernardino de Siena (16th-century convent), the colorful Calzada de los Frailes street, Cenote Zaci (in the town center), the main plaza, artisan markets, and the stunning Church of San Servacio. The town is very walkable and photogenic.",
    category: "attractions",
  },
  {
    question: "How long do tours spend in Valladolid?",
    answer: "Most combo tours allocate 1.5-2 hours in Valladolid, which includes a guided walking tour of the main sights, lunch, and free time for shopping or exploration. Private tours can extend this based on your interests.",
    category: "duration",
  },
  {
    question: "Is Valladolid safe for tourists?",
    answer: "Yes, Valladolid is considered very safe for tourists. It's a peaceful, well-maintained colonial town with a strong tourism infrastructure. The main plaza and walking areas are well-lit and patrolled. It's noticeably less touristy than coastal destinations.",
    category: "safety",
  },
  {
    question: "Can I swim in a cenote in Valladolid?",
    answer: "Yes! Cenote Zaci is located right in the town center, and Cenote Saamal is on the outskirts. Some combo tours include swimming at one of these cenotes as part of the Valladolid visit. Both are stunning and less crowded than Cenote Ik Kil.",
    category: "activities",
  },
  {
    question: "What food should I try in Valladolid?",
    answer: "Valladolid is famous for authentic Yucatecan cuisine. Must-try dishes include cochinita pibil (slow-roasted pork), papadzules (egg-filled tortillas), sopa de lima (lime soup), and longaniza de Valladolid (local sausage). The town's restaurants offer some of the most authentic regional food in the Yucatán.",
    category: "food",
  },
];

const meta = getPageMeta({
  title: "Chichen Itza + Valladolid Tours – Colonial Town Combo 2026",
  description: "Combine Chichen Itza ruins with charming Valladolid, a Pueblo Mágico. Colonial architecture, cenotes, authentic cuisine. From $94. Book now!",
  canonical: "/tours/valladolid-tours",
  jsonLd: [
    createFAQSchema(valladolidFAQs),
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tours", url: "/tours" },
      { name: "Valladolid Tours" },
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

const ValladolidToursPage = () => {
  const valladolidTours = useMemo(() => tours.filter((t) => t.category.includes("valladolid")), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(valladolidTours, filters), [valladolidTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tours", href: "/tours" }, { label: "Valladolid Tours" }]} />

          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.7/5 from 1,900+ travelers</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Chichen Itza + Valladolid Colonial Town Tours
            </h1>

            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Pair ancient Mayan ruins with the colorful charm of Valladolid, one of Mexico's enchanting Pueblos Mágicos. Culture, history, and authentic cuisine in one unforgettable day.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Church, text: "Pueblo Mágico" },
                { icon: Palette, text: "Colonial architecture" },
                { icon: Camera, text: "Photogenic streets" },
                { icon: Shield, text: "Authentic cuisine" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.text}
                </span>
              ))}
            </div>

            <Button variant="cta" size="lg" asChild>
              <a href="#tours">Browse Valladolid Tours <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Valladolid</strong> is a hidden gem that most beach-resort tourists never discover. This beautifully preserved colonial town, located just 45 minutes from Chichen Itza, was built atop a pre-existing Mayan city and blends indigenous and Spanish colonial heritage in a way few places can match.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Walking through Valladolid's colorful streets feels like stepping back in time. Pastel-colored buildings line cobblestone lanes, the 16th-century <strong className="text-foreground">Convento de San Bernardino de Siena</strong> stands as a testament to early colonial architecture, and the main plaza buzzes with authentic local life far removed from tourist zones.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our combo tours pair the archaeological grandeur of Chichen Itza with Valladolid's colonial charm. Also explore{" "}
            <Link to="/tours/ek-balam-tours" className="text-primary hover:underline">Ek Balam combos</Link>,{" "}
            <Link to="/tours/cenote-tours" className="text-primary hover:underline">cenote combos</Link>, or{" "}
            <Link to="/tours/day-tours" className="text-primary hover:underline">standard day tours</Link>.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            What to See in Valladolid
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Convento de San Bernardino", desc: "A stunning 16th-century Franciscan convent with original frescoes, one of the oldest churches in the Americas. Features a beautiful courtyard and museum.", badge: "Must See" },
              { title: "Calzada de los Frailes", desc: "The most photogenic street in the Yucatán. Colorful colonial buildings, boutique shops, and cafés line this pedestrian-friendly avenue perfect for Instagram.", badge: "Photo Spot" },
              { title: "Cenote Zaci", desc: "A dramatic open cenote right in the town center. While not all tours include swimming here, the viewing alone is impressive — a massive limestone sinkhole surrounded by greenery.", badge: "Town Cenote" },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden border border-border">
                <div className="h-40 bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                  <Church className="h-12 w-12 text-primary/50" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{item.badge}</span>
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
            Valladolid Visitor Tips
          </h2>
          <TipBox
            type="tip"
            title="Best Photo Spots"
            content="The Calzada de los Frailes is most photogenic in the morning light. The main plaza offers great shots of the Church of San Servacio. For overhead views, some restaurants near the plaza have rooftop terraces."
          />
          <TipBox
            type="info"
            title="Shopping for Souvenirs"
            content="Valladolid's artisan market offers handmade textiles, hammocks, huipil dresses, and local honey at much better prices than resort areas. Look for authentic Yucatecan crafts — the quality and authenticity are exceptional."
          />
          <TipBox
            type="tip"
            title="Food to Try"
            content="Don't miss cochinita pibil (slow-roasted pork), sopa de lima (lime soup), and longaniza de Valladolid (local sausage). The restaurants around the main plaza serve some of the most authentic Yucatecan food in the region."
          />
        </div>
      </section>

      {/* Tour Grid */}
      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">
            All Chichen Itza + Valladolid Tours
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {valladolidTours.length} Valladolid combo tours available
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
          <ReviewGrid reviews={getReviewsByTourCategory("valladolid")} limit={3} title="Valladolid Tour Reviews" showAllLink />
        </div>
      </section>

      <FAQSection faqs={valladolidFAQs} title="Valladolid Tour FAQs" subtitle="Common questions about Chichen Itza + Valladolid combo tours" />

      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">Explore More Tours</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Day Tours", href: "/tours/day-tours" },
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "Cenote Tours", href: "/tours/cenote-tours" },
              { label: "Ek Balam Tours", href: "/tours/ek-balam-tours" },
              { label: "Night Tours", href: "/tours/night-tours" },
              { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
              { label: "Budget Tours", href: "/tour-types/budget" },
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

export default ValladolidToursPage;
