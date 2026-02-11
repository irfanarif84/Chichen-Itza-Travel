import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Baby, ChevronRight, Star, Shield, Heart, Smile, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourFilters, { type FilterState } from "@/components/features/tours/TourFilters";
import TrustBadges from "@/components/features/booking/TrustBadges";
import TipBox from "@/components/guide/TipBox";
import CTASection from "@/components/features/home/CTASection";
import { tours } from "@/lib/tourData";
import type { Tour } from "@/types/tour";

const meta = getPageMeta({
  title: "Family-Friendly Chichen Itza Tours – Kid-Safe Adventures",
  description: "Best family Chichen Itza tours with kid-friendly guides, interactive activities, safe cenote swimming. Children under 3 free. Book your family adventure!",
  canonical: "/tour-types/family-friendly",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tour Types", url: "/tours" },
      { name: "Family-Friendly Tours" },
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

const FamilyFriendlyPage = () => {
  const familyTours = useMemo(
    () => tours.filter((t) => t.category.includes("family-friendly") || t.tourType === "family"),
    []
  );
  // Also suggest other suitable tours (cenote combos, private)
  const suitableTours = useMemo(
    () => tours.filter((t) =>
      t.category.includes("family-friendly") || t.tourType === "family" || t.tourType === "private" ||
      (t.groupSize.type === "small-group" && t.category.includes("cenote-tours"))
    ),
    []
  );
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(suitableTours, filters), [suitableTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative bg-gradient-to-br from-secondary/10 via-background to-accent/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tour Types", href: "/tours" }, { label: "Family-Friendly Tours" }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.8/5 from families with children</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Family-Friendly Chichen Itza Tours – Adventures for All Ages
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Kid-safe tours with interactive Mayan storytelling, activity booklets, safe cenote swimming with life vests, and patient family-oriented guides. Children under 3 travel free.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Baby, text: "Under 3 free" },
                { icon: Shield, text: "Safety first" },
                { icon: BookOpen, text: "Interactive learning" },
                { icon: Smile, text: "Fun for kids" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                  <item.icon className="h-4 w-4 text-secondary" />
                  {item.text}
                </span>
              ))}
            </div>
            <Button variant="cta" size="lg" asChild>
              <a href="#tours">Browse Family Tours <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Traveling with kids? Our family-friendly Chichen Itza tours are specifically designed to make ancient Mayan history exciting and accessible for children of all ages. Expert guides use interactive storytelling, fun facts, and activity booklets to keep young explorers engaged throughout the tour.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Safety is paramount — all cenote visits include appropriately-sized life vests, and our family tours choose cenotes with gentle entry points and shallow areas. Vehicles are equipped with child seats upon request, and rest stops are scheduled with families in mind.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For maximum flexibility, consider a <Link to="/tours/private-tours" className="text-primary hover:underline">private tour</Link> where you control the pace entirely — perfect for families with very young children or those wanting extra time at the cenote.
          </p>
          <TipBox
            type="tip"
            title="Family Pro Tips"
            content="Bring hats and biodegradable sunscreen for the kids. Our guides carry extra water and snacks. Request child seats when booking. The on-site market has child-friendly souvenirs from $2-5. Morning tours are best for younger children — cooler and less crowded."
          />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">What Makes Our Family Tours Special</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: BookOpen, title: "Interactive Learning", desc: "Mayan storytelling, riddles, and activity booklets turn history into adventure for children ages 4-14." },
              { icon: Shield, title: "Safety Focused", desc: "Life vests, shallow cenote areas, child seats, frequent rest stops, and experienced family guides." },
              { icon: Heart, title: "Patient Guides", desc: "Our family guides are specially trained to engage children and accommodate different paces and attention spans." },
              { icon: Smile, title: "Fun Activities", desc: "Mayan games, treasure hunts, and coloring activities keep kids entertained during transitions." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-secondary" />
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
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">Family-Suitable Tours</h2>
          <p className="text-center text-muted-foreground mb-8">{suitableTours.length} family-friendly options</p>
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
              { label: "Cenote Tours", href: "/tours/cenote-tours" },
              { label: "Small Group Tours", href: "/tour-types/small-group" },
              { label: "What to Bring", href: "/guide/what-to-bring" },
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

export default FamilyFriendlyPage;
