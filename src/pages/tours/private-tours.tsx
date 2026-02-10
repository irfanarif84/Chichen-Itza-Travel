import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Crown, Clock, Users, ChevronRight, Star, Shield, Car, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createFAQSchema, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourFilters, { type FilterState } from "@/components/features/tours/TourFilters";
import FAQSection from "@/components/common/FAQ";
import TrustBadges from "@/components/features/booking/TrustBadges";
import ComparisonTable from "@/components/guide/ComparisonTable";
import TipBox from "@/components/guide/TipBox";
import CTASection from "@/components/features/home/CTASection";
import { tours } from "@/lib/tourData";
import { privateToursFAQs } from "@/lib/faqData";
import type { Tour } from "@/types/tour";

const meta = getPageMeta({
  title: "Private Chichen Itza Tours – VIP & Skip the Line 2026",
  description: "Exclusive private Chichen Itza tours with personal guide, luxury transport & skip-the-line access. Customize your itinerary. From $189.",
  canonical: "/tours/private-tours",
  jsonLd: [
    createFAQSchema(privateToursFAQs),
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tours", url: "/tours" },
      { name: "Private Tours" },
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

const PrivateToursPage = () => {
  const privateTours = useMemo(() => tours.filter((t) => t.category.includes("private-tours") || t.tourType === "private"), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(privateTours, filters), [privateTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent/10 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tours", href: "/tours" }, { label: "Private Tours" }]} />

          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.9/5 average from 1,200+ VIP travelers</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Private Chichen Itza Tours – VIP Skip-the-Line Access
            </h1>

            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Your own personal archaeologist guide, luxury transport, flexible schedule, and priority entrance. The ultimate Chichen Itza experience.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Crown, text: "Skip the line" },
                { icon: Users, text: "Private guide" },
                { icon: Car, text: "Luxury SUV" },
                { icon: Clock, text: "Flexible schedule" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                  <item.icon className="h-4 w-4 text-accent" />
                  {item.text}
                </span>
              ))}
            </div>

            <Button variant="cta" size="lg" asChild>
              <a href="#tours">Browse Private Tours <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            A private Chichen Itza tour is the premium way to experience this UNESCO World Heritage Site. Unlike group tours with fixed schedules and 15-30 people, a private tour is exclusively for you and your party — with a dedicated archaeologist guide, luxury vehicle, and the freedom to explore at your own pace.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our private tours include VIP skip-the-line entrance, meaning you bypass the general admission queue and enter through a priority gate. Your personal guide — a certified archaeologist fluent in your language — reveals secrets and stories that group tours simply don't have time for.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Perfect for couples, families, photographers, and anyone who wants an intimate, unhurried experience. Customize your itinerary to include hidden cenotes, the colonial town of Valladolid, or the lesser-known Ek Balam ruins.
          </p>
        </div>
      </section>

      {/* Private vs Group Comparison */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">
            Private Tour vs. Group Tour
          </h2>
          <div className="max-w-4xl mx-auto">
            <ComparisonTable
              headers={["Private Tour", "Group Tour"]}
              highlightColumn={1}
              rows={[
                { label: "Group Size", values: ["Just your party (1-8)", "12-30 travelers"] },
                { label: "Guide", values: ["Personal archaeologist", "Shared group guide"] },
                { label: "Schedule", values: ["You choose departure time", "Fixed 6-7 AM departure"] },
                { label: "Entrance", values: ["VIP skip-the-line", "General admission queue"] },
                { label: "Transport", values: ["Luxury SUV/van", "Tour bus"] },
                { label: "Pace", values: ["Fully flexible", "Fixed itinerary"] },
                { label: "Customization", values: ["Add stops, extend time", "No changes possible"] },
                { label: "Price", values: ["From $189/person", "From $49/person"] },
              ]}
            />
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <TipBox
              type="tip"
              title="Best for Families & Photographers"
              content="Private tours are ideal if you're traveling with young children (flexible pacing), serious photographers (extra time for golden hour shots), or anyone who values a personalized, unhurried experience."
            />
          </div>
        </div>
      </section>

      {/* VIP Benefits */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            What Makes Our Private Tours Special
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Crown, title: "Priority Entrance", desc: "Skip the general admission line and enter through the VIP gate. Save 30-60 minutes during peak season." },
              { icon: Sparkles, title: "Personal Archaeologist", desc: "Your guide has years of expertise in Mayan civilization and tailors the tour to your interests." },
              { icon: Car, title: "Luxury Transport", desc: "Travel in a private SUV or van with AC, WiFi, premium drinks, and comfortable seating." },
              { icon: Shield, title: "Full Flexibility", desc: "Choose your departure time, add stops, extend exploration — your tour, your rules." },
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

      {/* Tour Grid */}
      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">
            All Private Chichen Itza Tours
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {privateTours.length} private tours with VIP access
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

      <FAQSection faqs={privateToursFAQs} title="Private Tour FAQs" subtitle="Common questions about private Chichen Itza tours" />

      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">Explore More Tours</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Day Tours", href: "/tours/day-tours" },
              { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
              { label: "Cenote Tours", href: "/tours/cenote-tours" },
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
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

export default PrivateToursPage;
