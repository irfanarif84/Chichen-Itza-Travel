import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Droplets, Clock, ChevronRight, Star, Waves, Leaf, Shield } from "lucide-react";
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
import { cenoteToursFAQs } from "@/lib/faqData";
import { getReviewsByTourCategory } from "@/lib/reviewsData";
import ReviewGrid from "@/components/features/reviews/ReviewGrid";
import type { Tour } from "@/types/tour";

const meta = getPageMeta({
  title: "Chichen Itza + Cenote Tours – Swim & Explore 2026",
  description: "Best Chichen Itza cenote combo tours. Explore ancient ruins then swim in stunning cenotes like Ik Kil. Lunch included. From $99. Book now!",
  canonical: "/tours/cenote-tours",
  jsonLd: [
    createFAQSchema(cenoteToursFAQs),
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tours", url: "/tours" },
      { name: "Cenote Tours" },
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

const CenoteToursPage = () => {
  const cenoteTours = useMemo(() => tours.filter((t) => t.category.includes("cenote-tours")), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(cenoteTours, filters), [cenoteTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tours", href: "/tours" }, { label: "Cenote Tours" }]} />

          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.8/5 from 4,500+ travelers</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Chichen Itza + Cenote Combo Tours
            </h1>

            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              The perfect combination: explore ancient Mayan ruins then cool off with a swim in a stunning natural cenote. Our most popular tour format!
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Droplets, text: "Cenote swimming" },
                { icon: Waves, text: "Crystal-clear water" },
                { icon: Leaf, text: "Natural wonder" },
                { icon: Shield, text: "Life vests provided" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                  <item.icon className="h-4 w-4 text-secondary" />
                  {item.text}
                </span>
              ))}
            </div>

            <Button variant="cta" size="lg" asChild>
              <a href="#tours">Browse Cenote Tours <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cenotes — natural limestone sinkholes filled with crystal-clear water — are one of the Yucatán's greatest treasures. The ancient Maya considered them sacred portals to the underworld, and today they offer an unforgettable swimming experience unlike anywhere else on Earth.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our Chichen Itza + Cenote combo tours pair the awe of exploring a New Seven Wonders site with the refreshing thrill of swimming in these natural pools. After 2-3 hours exploring the ruins in the Yucatan heat, there's nothing better than plunging into the cool, turquoise waters of a cenote.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Most tours visit <strong className="text-foreground">Cenote Ik Kil</strong>, the most famous cenote in Mexico with its dramatic hanging vines and 85-foot depth. Other options include Cenote Saamal, Cenote Hubiku, or private cenotes with fewer crowds.
          </p>
        </div>
      </section>

      {/* Popular Cenotes */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            Popular Cenotes Included in Our Tours
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Cenote Ik Kil", desc: "The iconic cenote just 3 miles from Chichen Itza. 85 feet deep with hanging vines and waterfalls. The most famous cenote in Mexico.", badge: "Most Popular" },
              { name: "Cenote Saamal", desc: "A semi-open cenote in Valladolid with platforms, ziplines, and stunning stalactites. Great for families with shallow areas.", badge: "Family Favorite" },
              { name: "Cenote Hubiku", desc: "A spectacular underground cenote with a dramatic light beam at midday. Less crowded than Ik Kil for a more serene experience.", badge: "Hidden Gem" },
            ].map((cenote, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden border border-border">
                <div className="h-40 bg-gradient-to-br from-secondary/30 to-primary/20 flex items-center justify-center">
                  <Droplets className="h-12 w-12 text-secondary/50" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-lg">{cenote.name}</h3>
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-medium">{cenote.badge}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{cenote.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Know */}
      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 text-center">
            Cenote Swimming Tips
          </h2>
          <TipBox
            type="info"
            title="What to Bring for Cenote Swimming"
            content="Swimsuit, biodegradable sunscreen (required — regular sunscreen damages the ecosystem), towel, water shoes, and a waterproof camera or phone case. Life vests are provided and recommended."
          />
          <TipBox
            type="warning"
            title="Important Rules"
            content="Only biodegradable sunscreen is allowed in cenotes to protect the delicate ecosystem. Insect repellent, makeup, and chemical sprays should be washed off before entering. Most cenotes have changing rooms and lockers."
          />
          <TipBox
            type="tip"
            title="Pro Tip"
            content="If you want a less crowded cenote experience, ask about tours that visit private or lesser-known cenotes instead of Ik Kil. Our private tours can arrange exclusive cenote access."
          />
        </div>
      </section>

      {/* Tour Grid */}
      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">
            All Chichen Itza + Cenote Tours
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {cenoteTours.length} cenote combo tours available
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
          <ReviewGrid reviews={getReviewsByTourCategory("cenote")} limit={3} title="Cenote Tour Reviews" showAllLink />
        </div>
      </section>

      <FAQSection faqs={cenoteToursFAQs} title="Cenote Tour FAQs" subtitle="Common questions about Chichen Itza cenote combo tours" />

      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">Explore More Tours</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Day Tours", href: "/tours/day-tours" },
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
              { label: "From Cancún", href: "/tours-from/cancun" },
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

export default CenoteToursPage;
