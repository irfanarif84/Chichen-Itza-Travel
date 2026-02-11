import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Users, ChevronRight, Star, MessageCircle, Camera, Shield } from "lucide-react";
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
import { smallGroupFAQs } from "@/lib/faqData";
import type { Tour } from "@/types/tour";

const meta = getPageMeta({
  title: "Small Group Chichen Itza Tours – Intimate Experiences 2026",
  description: "Small group Chichen Itza tours with 8-15 travelers max. More personal attention, better photos, flexible pacing. From $89. Book now!",
  canonical: "/tour-types/small-group",
  jsonLd: [
    createFAQSchema(smallGroupFAQs),
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tour Types", url: "/tours" },
      { name: "Small Group Tours" },
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

const SmallGroupPage = () => {
  const smallGroupTours = useMemo(
    () => tours.filter((t) => t.category.includes("small-group") || (t.groupSize.type === "small-group" && t.groupSize.max <= 15)),
    []
  );
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(smallGroupTours, filters), [smallGroupTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tour Types", href: "/tours" }, { label: "Small Group Tours" }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.8/5 average from small group travelers</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Small Group Chichen Itza Tours – Intimate Experiences
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Maximum 8-15 travelers per group. More personal attention from your guide, better photos, and a more relaxed pace than large bus tours.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Users, text: "Max 15 people" },
                { icon: MessageCircle, text: "Personal attention" },
                { icon: Camera, text: "Better photos" },
                { icon: Shield, text: "Quality vehicles" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                  <item.icon className="h-4 w-4 text-secondary" />
                  {item.text}
                </span>
              ))}
            </div>
            <Button variant="cta" size="lg" asChild>
              <a href="#tours">Browse Small Group Tours <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our small group Chichen Itza tours are designed for travelers who want a more personal, intimate experience without the premium cost of a private tour. With a maximum of 8-15 participants, you'll enjoy closer interaction with your expert guide, more flexibility in pacing, and a quieter atmosphere at the ruins.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Small groups travel in comfortable minivans rather than large tour buses, offering a smoother ride and more leg room. Your guide can answer individual questions, adapt the tour to the group's interests, and spend extra time at the structures that fascinate you most.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're a <Link to="/tours/day-tours" className="text-primary hover:underline">first-time visitor</Link> wanting a quality experience or a returning traveler looking for deeper insights, small group tours deliver the best balance of value, comfort, and personal attention.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">
            Small Group vs. Large Group vs. Private
          </h2>
          <div className="max-w-4xl mx-auto">
            <ComparisonTable
              headers={["Small Group", "Large Group", "Private"]}
              highlightColumn={1}
              rows={[
                { label: "Group Size", values: ["8-15 people", "20-40 people", "1-6 people"] },
                { label: "Guide Attention", values: ["High", "Low", "Exclusive"] },
                { label: "Vehicle", values: ["Minivan", "Tour bus", "Luxury SUV"] },
                { label: "Flexibility", values: ["Moderate", "Fixed", "Full"] },
                { label: "Photo Opportunities", values: ["Good", "Limited", "Excellent"] },
                { label: "Price Range", values: ["$89-$129", "$49-$79", "$189-$299"] },
                { label: "Best For", values: ["Most travelers", "Budget travelers", "Couples/families"] },
              ]}
            />
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <TipBox
              type="tip"
              title="Best Value Choice"
              content="Small group tours offer the best balance of quality and affordability. You get 80% of the private tour experience at roughly half the cost. They're our most recommended option for couples, solo travelers, and small families."
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            Why Choose a Small Group Tour
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: MessageCircle, title: "Ask Questions Freely", desc: "With fewer people, you can engage directly with your guide and get detailed answers about Mayan history and culture." },
              { icon: Camera, title: "Better Photo Ops", desc: "Less waiting for other people to move, more time for your perfect shot of El Castillo and other structures." },
              { icon: Users, title: "Meet Fellow Travelers", desc: "Small groups naturally foster connections. Many travelers make lasting friendships during the tour." },
              { icon: Shield, title: "Quality Transport", desc: "Travel in comfortable minivans with AC, more leg room, and fewer stops compared to large tour buses." },
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

      {/* Tour Grid */}
      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">
            All Small Group Chichen Itza Tours
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {smallGroupTours.length} small group tours available
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

      <FAQSection faqs={smallGroupFAQs} title="Small Group Tour FAQs" subtitle="Common questions about our small group experiences" />

      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">Explore More Tour Types</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Day Tours", href: "/tours/day-tours" },
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
              { label: "Cenote Tours", href: "/tours/cenote-tours" },
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
              { label: "All Tours", href: "/tours" },
              { label: "FAQ", href: "/practical/faq" },
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

export default SmallGroupPage;
