import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Gem, ChevronRight, Star, Wine, Car, Crown, Sparkles } from "lucide-react";
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
  title: "Luxury Chichen Itza Tours – Premium VIP Experiences 2026",
  description: "Luxury Chichen Itza tours with private archaeologist, gourmet dining, luxury SUV, skip-the-line access. Ultimate VIP experience from $189.",
  canonical: "/tour-types/luxury",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tour Types", url: "/tours" },
      { name: "Luxury Tours" },
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

const LuxuryToursPage = () => {
  const luxuryTours = useMemo(
    () => tours.filter((t) => t.category.includes("luxury") || t.tourType === "luxury" || t.tourType === "private"),
    []
  );
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(luxuryTours, filters), [luxuryTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative bg-gradient-to-br from-accent/15 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tour Types", href: "/tours" }, { label: "Luxury Tours" }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">5.0/5 from luxury travelers</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Luxury Chichen Itza Tours – Premium VIP Experiences
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Private archaeologist guides, luxury SUV transport, gourmet hacienda dining, and skip-the-line VIP access. The ultimate way to experience Chichen Itza.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Crown, text: "VIP access" },
                { icon: Wine, text: "Gourmet dining" },
                { icon: Car, text: "Luxury transport" },
                { icon: Sparkles, text: "Private guide" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                  <item.icon className="h-4 w-4 text-accent" />
                  {item.text}
                </span>
              ))}
            </div>
            <Button variant="cta" size="lg" asChild>
              <a href="#tours">Browse Luxury Tours <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our luxury Chichen Itza tours are crafted for discerning travelers who demand the finest experience. From the moment your private luxury SUV arrives at your hotel to the final farewell, every detail is meticulously planned to exceed expectations.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Your personal archaeologist guide — fluent in your language and holding years of expertise in Mayan civilization — reveals the secrets and stories that standard tours simply don't have time for. Enjoy gourmet meals at restored colonial haciendas, swim in private cenotes away from tourist crowds, and enter Chichen Itza through the VIP priority gate.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Perfect for honeymoons, anniversaries, corporate retreats, and anyone who believes the journey should be as extraordinary as the destination. Compare with our <Link to="/tour-types/small-group" className="text-primary hover:underline">small group tours</Link> or <Link to="/tours/private-tours" className="text-primary hover:underline">private tours</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">The Luxury Difference</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Car, title: "Luxury SUV", desc: "Travel in a premium vehicle with leather seats, WiFi, AC, and complimentary premium drinks." },
              { icon: Crown, title: "Priority Entrance", desc: "Skip all lines with VIP access. Enter through the priority gate and save 30-60 minutes." },
              { icon: Wine, title: "Gourmet Dining", desc: "Fine dining at restored haciendas with regional cuisine, wine pairing, and vegetarian options." },
              { icon: Gem, title: "Exclusive Cenotes", desc: "Visit private cenotes away from tourist crowds for a serene, intimate swimming experience." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">Luxury & VIP Tours</h2>
          <p className="text-center text-muted-foreground mb-8">{luxuryTours.length} premium experiences available</p>
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
              { label: "Small Group Tours", href: "/tour-types/small-group" },
              { label: "VIP Skip-the-Line", href: "/tour-types/vip-skip-the-line" },
              { label: "From Cancún", href: "/tours-from/cancun" },
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

export default LuxuryToursPage;
