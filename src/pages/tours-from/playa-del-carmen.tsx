import { Link } from "react-router-dom";
import { MapPin, Clock, Car, Star, ChevronRight, Shield, Calendar, Users, Sun, CloudRain } from "lucide-react";
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
import QuickBookingForm from "@/components/features/booking/QuickBookingForm";
import PopularToursWidget from "@/components/features/tours/PopularToursWidget";
import CTABox from "@/components/features/tours/CTABox";
import ComboTourCard from "@/components/features/tours/ComboTourCard";
import InfoBox from "@/components/guide/InfoBox";
import { getToursByDeparture, getLocationBySlug } from "@/lib/tourData";
import { playaDelCarmenFAQs, playaDelCarmenPageContent } from "@/lib/locationData";
import { locationSchemas } from "@/lib/schema";
import { locationImages } from "@/lib/tourImages";
import { useState, useMemo } from "react";
import type { Tour } from "@/types/tour";

const location = getLocationBySlug("playa-del-carmen")!;

const meta = getPageMeta({
  title: location.metaTitle,
  description: location.metaDescription,
  canonical: "/tours-from/playa-del-carmen",
  jsonLd: [
    createFAQSchema(playaDelCarmenFAQs),
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tours from Playa del Carmen" },
    ]),
    locationSchemas["playa-del-carmen"],
  ],
});

const breadcrumbs = [{ label: "Tours from Playa del Carmen" }];

const comboTours = [
  {
    title: "Chichen Itza + Cenote Ik Kil",
    price: 99,
    description: "Explore the ruins and swim in the iconic Cenote Ik Kil. Includes buffet lunch.",
    duration: "11 hours",
    link: "/combo-tours/cenote-ik-kil",
  },
  {
    title: "Chichen Itza + Cobá Ruins",
    price: 119,
    description: "Visit two magnificent Mayan archaeological sites in one day. Climb the Nohoch Mul pyramid.",
    duration: "13 hours",
    link: "/combo-tours/coba-ruins",
  },
  {
    title: "Chichen Itza + Valladolid",
    price: 89,
    description: "Combine ancient ruins with the charming colonial city. Explore Calzada de los Frailes.",
    duration: "12 hours",
    link: "/tours/day-tours",
  },
  {
    title: "Multi-Day Yucatán Explorer",
    price: 299,
    description: "3-day immersive Yucatán experience: Chichen Itza, Uxmal, Mérida, cenotes, and more.",
    duration: "3 days",
    link: "/combo-tours/multi-day-yucatan",
  },
];

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

const PlayaDelCarmenToursPage = () => {
  const allPlayaTours = getToursByDeparture("playa-del-carmen");
  const [filters, setFilters] = useState<FilterState>({
    priceRange: "all",
    duration: [],
    tourType: [],
    category: [],
  });

  const filteredTours = useMemo(
    () => filterTours(allPlayaTours, filters),
    [allPlayaTours, filters]
  );

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={locationImages["playa-del-carmen"]}
            alt="Playa del Carmen Fifth Avenue and Caribbean beach"
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
                  4.9/5 from 1,800+ travelers
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
                Chichen Itza Tours from Playa del Carmen — Premium Day Trips 2026
              </h1>

              <p className="text-lg text-muted-foreground mb-6 max-w-xl">
                The shortest route to Chichen Itza! Just {location.driveTime} drive means more
                time exploring the ancient Mayan wonder and less time on the road.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: Car, text: location.driveTime + " drive" },
                  { icon: MapPin, text: location.distanceToChichen },
                  { icon: Calendar, text: "Daily departures" },
                  { icon: Users, text: "5th Ave pickup" },
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
                Why Book from Playa del Carmen?
              </h2>
              <div className="space-y-4">
                {playaDelCarmenPageContent.whyBook.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-primary" />
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

      {/* Main Content + Sidebar Layout */}
      <div className="container py-12 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          {/* Main content */}
          <div>
            {/* Introduction */}
            <section className="prose prose-neutral max-w-none mb-12">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Embark on an unforgettable journey from Playa del Carmen to Chichen Itza,
                one of the New Seven Wonders of the World. Located just 95 miles west (approximately
                1.5 hours), Chichen Itza is the perfect day trip from Playa's vibrant coastal
                setting. Our expertly curated <strong>Chichen Itza tours from Playa del Carmen</strong> offer
                the ideal blend of convenience, education, and adventure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike tours from <Link to="/tours-from/cancun" className="text-primary hover:underline">Cancún (2+ hours away)</Link>,
                Playa del Carmen's proximity means more time exploring the ancient Mayan ruins
                and less time in transit. Whether you're staying in the bustling Quinta Avenida
                area or the peaceful Playacar resort zone, our pickup service ensures a hassle-free
                start to your Chichen Itza adventure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Choose from <Link to="/tours/private-tours" className="text-primary hover:underline">private tours</Link>,{" "}
                <Link to="/tour-types/small-group" className="text-primary hover:underline">small group experiences</Link>, or{" "}
                <Link to="/tours/sunrise-tours" className="text-primary hover:underline">sunrise access</Link> to
                beat the crowds and capture stunning photos of El Castillo pyramid. Every tour
                includes certified bilingual guides, comfortable air-conditioned transport, and
                most include a refreshing cenote swim and traditional Yucatecan lunch.
              </p>
            </section>

            {/* Tours Grid */}
            <section id="tours" className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">
                Top Chichen Itza Tours Departing from Playa del Carmen
              </h2>
              <p className="text-muted-foreground mb-6">
                {allPlayaTours.length} tours available with hotel pickup from Playa del Carmen
              </p>

              <TourFilters
                onFilterChange={setFilters}
                tourCount={filteredTours.length}
                className="mb-6"
              />

              {filteredTours.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            </section>

            {/* What to Expect Timeline */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">
                What to Expect on Your Playa del Carmen to Chichen Itza Tour
              </h2>
              <p className="text-muted-foreground mb-8">
                A typical day tour timeline from Playa del Carmen
              </p>

              <div className="space-y-0">
                {playaDelCarmenPageContent.timeline.map((step, i) => (
                  <TimelineItem
                    key={i}
                    time={step.time}
                    title={step.title}
                    description={step.description}
                    isLast={i === playaDelCarmenPageContent.timeline.length - 1}
                  />
                ))}
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <InfoBox
                  title="What's Included"
                  icon="✓"
                  variant="success"
                  items={[
                    "Air-conditioned transport from your hotel",
                    "Certified bilingual archaeologist guide",
                    "All entrance fees to Chichen Itza",
                    "Cenote swim with towels provided",
                    "Traditional Yucatecan buffet lunch",
                    "Bottled water and snacks",
                  ]}
                />
                <InfoBox
                  title="What to Bring"
                  icon="🎒"
                  variant="info"
                  items={[
                    "Comfortable walking shoes",
                    "Sunscreen and hat (no shade on site)",
                    "Swimsuit and towel for cenote",
                    "Camera or smartphone",
                    "Mexican pesos for souvenirs",
                    "Light rain jacket (May-Oct)",
                  ]}
                />
              </div>
            </section>

            {/* Why Book Guided */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                Guided Tour vs. Self-Drive from Playa del Carmen
              </h2>
              <ComparisonTable
                headers={["Guided Tour", "Self-Drive"]}
                highlightColumn={1}
                rows={playaDelCarmenPageContent.comparisonTable.rows.map((row) => ({
                  label: row[0],
                  values: [row[1], row[2]],
                }))}
              />
              <div className="mt-6">
                <TipBox
                  type="tip"
                  title="Pro Tip: Guided Tours Win on Value"
                  content="While driving yourself might seem cheaper at first glance, a guided tour from Playa del Carmen offers exceptional value when you factor in expertise, convenience, and the stress-free experience. Plus, you can relax and enjoy the scenic Yucatan countryside instead of navigating traffic."
                />
              </div>
            </section>

            {/* Best Time */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                Best Time to Visit Chichen Itza from Playa del Carmen
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="h-5 w-5 text-accent" />
                    <h3 className="font-heading font-semibold">Best Season</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">November–April</strong> offers dry weather and comfortable
                    temperatures (75–85°F). May–October is rainy season with afternoon showers,
                    but morning visits typically stay dry and crowds are 30% smaller.
                  </p>
                </div>
                <div className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold">Best Time of Day</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Early morning (7–9 AM)</strong> — Cooler temperatures,
                    golden light for photos, and fewer tourists. Our{" "}
                    <Link to="/tours/sunrise-tours" className="text-primary hover:underline">
                      sunrise tours
                    </Link>{" "}
                    depart Playa at 5:30 AM.
                  </p>
                </div>
              </div>

              <TipBox
                type="info"
                title="Weekday Advantage"
                content="Weekdays see 30–40% fewer visitors than weekends. Combine an early departure with a Tuesday–Thursday tour for the best experience."
              />

              <div className="mt-4">
                <Button variant="outline" asChild>
                  <Link to="/guide/best-time-to-visit">
                    Read Full Guide <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>

            {/* Map */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
                Playa del Carmen to Chichen Itza Route
              </h2>
              <MapEmbed
                title="Playa del Carmen to Chichen Itza Route"
                from="Playa del Carmen, Mexico"
                to="Chichen Itza, Mexico"
              />
              <p className="text-sm text-muted-foreground mt-3">
                The journey takes you through the scenic Yucatan Peninsula, passing traditional
                Mayan villages and jungle landscape. The modern toll road (cuota) ensures a smooth,
                safe 1.5-hour journey.
              </p>
            </section>

            {/* Combo Tours */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">
                Popular Combo Tours from Playa del Carmen
              </h2>
              <p className="text-muted-foreground mb-6">
                Maximize your day with these popular combinations that pair Chichen Itza with other Yucatan attractions:
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {comboTours.map((combo) => (
                  <ComboTourCard key={combo.title} {...combo} />
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <FAQSection
                faqs={playaDelCarmenFAQs}
                title="Frequently Asked Questions"
                subtitle="Common questions about Chichen Itza tours from Playa del Carmen"
              />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <QuickBookingForm />
              <PopularToursWidget departureCity="playa-del-carmen" />
              <CTABox />
              <TrustBadges variant="compact" />
            </div>
          </aside>
        </div>
      </div>

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
              { label: "From Tulum", href: "/tours-from/tulum" },
              { label: "From Riviera Maya", href: "/tours-from/riviera-maya" },
              { label: "From Mérida", href: "/tours-from/merida" },
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
              { label: "Cenote Tours", href: "/tours/cenote-tours" },
              { label: "Budget Tours", href: "/tour-types/budget" },
              { label: "Family Tours", href: "/tour-types/family-friendly" },
              { label: "Luxury Tours", href: "/tour-types/luxury" },
              { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
              { label: "What to Bring", href: "/guide/what-to-bring" },
              { label: "Entrance Fees", href: "/guide/entrance-fees" },
              { label: "How to Get There", href: "/guide/how-to-get-there" },
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

export default PlayaDelCarmenToursPage;
