import { Link } from "react-router-dom";
import { MapPin, Clock, Car, Star, ChevronRight, Shield, Calendar, Palmtree } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createFAQSchema, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourFilters, { type FilterState } from "@/components/features/tours/TourFilters";
import FAQSection from "@/components/common/FAQ";
import ComparisonTable from "@/components/guide/ComparisonTable";
import MapEmbed from "@/components/common/MapEmbed";
import CTASection from "@/components/features/home/CTASection";
import TrustBadges from "@/components/features/booking/TrustBadges";
import TimelineItem from "@/components/features/tours/TimelineItem";
import TipBox from "@/components/guide/TipBox";
import { getToursByDeparture, getLocationBySlug } from "@/lib/tourData";
import { tulumFAQs, tulumPageContent } from "@/lib/locationData";
import { locationSchemas } from "@/lib/schema";
import { locationImages } from "@/lib/tourImages";
import { useState, useMemo } from "react";
import type { Tour } from "@/types/tour";

const location = getLocationBySlug("tulum")!;

const meta = getPageMeta({
  title: location.metaTitle,
  description: location.metaDescription,
  canonical: "/tours-from/tulum",
  jsonLd: [
    createFAQSchema(tulumFAQs),
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tours from Tulum" },
    ]),
    locationSchemas["tulum"],
  ],
});

const breadcrumbs = [{ label: "Tours from Tulum" }];

const filterTours = (tours: Tour[], filters: FilterState): Tour[] => {
  return tours.filter((tour) => {
    if (filters.priceRange !== "all") {
      const price = tour.price.adult;
      if (filters.priceRange === "0-60" && price >= 60) return false;
      if (filters.priceRange === "60-100" && (price < 60 || price >= 100)) return false;
      if (filters.priceRange === "100-150" && (price < 100 || price >= 150)) return false;
      if (filters.priceRange === "150+" && price < 150) return false;
    }
    if (filters.duration.length > 0) {
      const hours = tour.durationHours;
      const matchesDuration = filters.duration.some((d) => {
        if (d === "short") return hours < 8;
        if (d === "full") return hours >= 8 && hours <= 12;
        if (d === "long") return hours > 12;
        return false;
      });
      if (!matchesDuration) return false;
    }
    if (filters.tourType.length > 0) {
      if (!filters.tourType.includes(tour.tourType)) return false;
    }
    if (filters.category.length > 0) {
      const hasCategory = filters.category.some((c) => tour.category.includes(c));
      if (!hasCategory) return false;
    }
    return true;
  });
};

const TulumToursPage = () => {
  const allTulumTours = getToursByDeparture("tulum");
  const [filters, setFilters] = useState<FilterState>({
    priceRange: "all",
    duration: [],
    tourType: [],
    category: [],
  });

  const filteredTours = useMemo(
    () => filterTours(allTulumTours, filters),
    [allTulumTours, filters]
  );

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={locationImages["tulum"]}
            alt="Tulum Mayan ruins overlooking the Caribbean Sea"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />

          <div className="grid lg:grid-cols-2 gap-8 items-center mt-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  4.8/5 from 1,200+ travelers
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
                {location.h1}
              </h1>

              <p className="text-lg text-muted-foreground mb-6 max-w-xl">
                Compare two incredible Mayan experiences! Visit Chichen Itza from Tulum 
                and return to the beautiful Caribbean coast by sunset.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: Car, text: location.driveTime + " drive" },
                  { icon: MapPin, text: location.distanceToChichen },
                  { icon: Calendar, text: "Daily departures" },
                  { icon: Palmtree, text: "Back for sunset" },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border"
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.text}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="cta" size="lg" asChild>
                  <a href="#tours">
                    View All Tours <ChevronRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/practical/contact">Get Custom Quote</Link>
                </Button>
              </div>
            </div>

            {/* Quick stats card */}
            <div className="bg-card rounded-xl shadow-card-hover p-6 border border-border">
              <h2 className="font-heading font-semibold text-xl mb-4">
                Why Book from Tulum?
              </h2>
              <div className="space-y-4">
                {tulumPageContent.whyBook.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <TrustBadges variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro content */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-neutral">
            {tulumPageContent.intro.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <TipBox
              type="info"
              title="Two UNESCO Sites, One Trip"
              content="Tulum and Chichen Itza offer completely different Mayan experiences. Tulum's dramatic clifftop ruins overlook the turquoise Caribbean, while Chichen Itza's massive inland pyramids showcase Mayan architectural mastery. Visiting both gives you a complete picture of this fascinating civilization."
            />
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">
              Top Chichen Itza Tours Departing from Tulum
            </h2>
            <p className="text-muted-foreground">
              {allTulumTours.length} tours available with hotel pickup from Tulum
            </p>
          </div>

          <TourFilters
            onFilterChange={setFilters}
            tourCount={filteredTours.length}
            className="mb-6"
          />

          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground mb-4">No tours match your filters.</p>
              <Button
                variant="outline"
                onClick={() =>
                  setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })
                }
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
              What to Expect on Your Tulum to Chichen Itza Tour
            </h2>
            
            <div className="space-y-0">
              {tulumPageContent.timeline.map((step, i) => (
                <TimelineItem
                  key={i}
                  time={step.time}
                  title={step.title}
                  description={step.description}
                  isLast={i === tulumPageContent.timeline.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">
            Guided Tour vs. Self-Drive from Tulum
          </h2>
          <div className="max-w-4xl mx-auto">
            <ComparisonTable
              headers={["Guided Tour", "Self-Drive"]}
              highlightColumn={1}
              rows={tulumPageContent.comparisonTable.rows.map((row) => ({
                label: row[0],
                values: [row[1], row[2]],
              }))}
            />
          </div>
        </div>
      </section>

      {/* Best Time Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
              Best Time to Visit Chichen Itza from Tulum
            </h2>
            <div className="prose prose-neutral">
              {tulumPageContent.bestTime.split("\n\n").map((paragraph, i) => (
                <div key={i} className="mb-4">
                  {paragraph.split("\n").map((line, j) => {
                    if (line.startsWith("**")) {
                      const text = line.replace(/\*\*/g, "");
                      return (
                        <p key={j} className="font-semibold text-foreground mb-1">
                          {text}
                        </p>
                      );
                    }
                    return (
                      <p key={j} className="text-muted-foreground">
                        {line}
                      </p>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="outline" asChild>
                <Link to="/guide/best-time-to-visit">
                  Read Full Guide <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <MapEmbed
            title="Tulum to Chichen Itza Route"
            from="Tulum, Mexico"
            to="Chichen Itza, Mexico"
          />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={tulumFAQs}
        title="Frequently Asked Questions"
        subtitle="Common questions about Chichen Itza tours from Tulum"
      />

      {/* CTA */}
      <CTASection />

      {/* Internal Links Footer */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">
            Explore More Chichen Itza Tours
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
              { label: "From Riviera Maya", href: "/tours-from/riviera-maya" },
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
              { label: "Cenote Tours", href: "/tours/cenote-tours" },
              { label: "Family Tours", href: "/tour-types/family-friendly" },
              { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
              { label: "What to Bring", href: "/guide/what-to-bring" },
              { label: "All Tours", href: "/tours" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TulumToursPage;
