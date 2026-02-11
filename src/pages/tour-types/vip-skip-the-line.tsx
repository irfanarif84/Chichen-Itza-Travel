import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Crown, ChevronRight, Star, Zap, Shield, Clock, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourFilters, { type FilterState } from "@/components/features/tours/TourFilters";
import TrustBadges from "@/components/features/booking/TrustBadges";
import ComparisonTable from "@/components/guide/ComparisonTable";
import TipBox from "@/components/guide/TipBox";
import CTASection from "@/components/features/home/CTASection";
import { tours } from "@/lib/tourData";
import type { Tour } from "@/types/tour";

const meta = getPageMeta({
  title: "VIP Skip-the-Line Chichen Itza Tours – Priority Access",
  description: "Skip the line at Chichen Itza with VIP priority entrance. Save 30-60 minutes, enter through VIP gate. Private guide, luxury transport. Book VIP access now!",
  canonical: "/tour-types/vip-skip-the-line",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tour Types", url: "/tours" },
      { name: "VIP Skip-the-Line" },
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
    return true;
  });
};

const VIPSkipTheLinePage = () => {
  const vipTours = useMemo(
    () => tours.filter((t) => t.category.includes("vip-skip-the-line") || t.tourType === "private" || t.tourType === "luxury"),
    []
  );
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(vipTours, filters), [vipTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative bg-gradient-to-br from-accent/15 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tour Types", href: "/tours" }, { label: "VIP Skip-the-Line" }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.9/5 from VIP travelers</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              VIP Skip-the-Line Chichen Itza Tours – Priority Access
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Skip the 30-60 minute general admission queue and enter through the VIP priority gate. More time exploring, less time waiting.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Zap, text: "Skip the line" },
                { icon: Ticket, text: "VIP entrance" },
                { icon: Clock, text: "Save 30-60 min" },
                { icon: Shield, text: "Priority access" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                  <item.icon className="h-4 w-4 text-accent" />
                  {item.text}
                </span>
              ))}
            </div>
            <Button variant="cta" size="lg" asChild>
              <a href="#tours">Browse VIP Tours <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            During peak season, the general admission line at Chichen Itza can stretch for 30 minutes to over an hour. Our VIP skip-the-line tours eliminate this frustrating wait entirely — you'll enter through a dedicated priority gate used exclusively by VIP tour groups and private visitors.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This isn't just about saving time. Entering before the main crowd means you'll experience the archaeological site in relative peace, with better opportunities for unobstructed photos of El Castillo, the Temple of Warriors, and the Great Ball Court.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            VIP access is available on all our <Link to="/tours/private-tours" className="text-primary hover:underline">private tours</Link> and <Link to="/tour-types/luxury" className="text-primary hover:underline">luxury experiences</Link>. It's especially valuable during December-April (peak season) and around the Spring Equinox in March.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">VIP vs. Standard Entrance</h2>
          <ComparisonTable
            headers={["VIP Skip-the-Line", "Standard Admission"]}
            highlightColumn={1}
            rows={[
              { label: "Wait Time", values: ["0-5 minutes", "30-60+ minutes"] },
              { label: "Entrance", values: ["Dedicated VIP gate", "General admission line"] },
              { label: "Peak Season", values: ["Minimal impact", "Lines can exceed 1 hour"] },
              { label: "Photo Opportunity", values: ["Less crowded site", "Competing with large groups"] },
              { label: "Guide Quality", values: ["Personal archaeologist", "Shared group guide"] },
              { label: "Availability", values: ["Private & luxury tours", "All tours"] },
            ]}
          />
          <div className="mt-8">
            <TipBox
              type="info"
              title="When Is VIP Most Valuable?"
              content="VIP skip-the-line access saves the most time during peak season (December-April), school holidays, and around the Spring Equinox (March 20-21). During low season (May-October), general admission lines are typically shorter."
            />
          </div>
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">Tours with VIP Skip-the-Line Access</h2>
          <p className="text-center text-muted-foreground mb-8">{vipTours.length} VIP tours available</p>
          <TourFilters onFilterChange={setFilters} tourCount={filteredTours.length} className="mb-6" />
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground mb-4">No tours match your filters.</p>
              <Button variant="outline" onClick={() => setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })}>Clear All Filters</Button>
            </div>
          )}
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">Explore More</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "Luxury Tours", href: "/tour-types/luxury" },
              { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
              { label: "Small Group Tours", href: "/tour-types/small-group" },
              { label: "All Tours", href: "/tours" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VIPSkipTheLinePage;
