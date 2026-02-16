import { Link } from "react-router-dom";
import { MapPin, Clock, Car, Star, ChevronRight, Shield, Calendar, Hotel, Sun } from "lucide-react";
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
import { rivieraMayaFAQs, rivieraMayaPageContent } from "@/lib/locationData";
import { locationSchemas } from "@/lib/schema";
import { locationImages } from "@/lib/tourImages";
import { useState, useMemo } from "react";
import type { Tour } from "@/types/tour";

const location = getLocationBySlug("riviera-maya")!;

const meta = getPageMeta({
  title: location.metaTitle,
  description: location.metaDescription,
  canonical: "/tours-from/riviera-maya",
  jsonLd: [
    createFAQSchema(rivieraMayaFAQs),
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tours from Riviera Maya" },
    ]),
    locationSchemas["riviera-maya"],
  ],
});

const breadcrumbs = [{ label: "Tours from Riviera Maya" }];

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
    description: "Visit two magnificent Mayan sites in one day. Climb the Nohoch Mul pyramid.",
    duration: "13 hours",
    link: "/combo-tours/coba-ruins",
  },
  {
    title: "Chichen Itza + Isla Mujeres",
    price: 159,
    description: "Combine ancient Mayan history with a Caribbean island paradise experience.",
    duration: "2 days",
    link: "/combo-tours/isla-mujeres",
  },
  {
    title: "Multi-Day Yucatán Explorer",
    price: 299,
    description: "3-day immersive experience: Chichen Itza, Uxmal, Mérida, cenotes, and more.",
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

const RivieraMayaToursPage = () => {
  const allRivieraTours = getToursByDeparture("riviera-maya");
  const [filters, setFilters] = useState<FilterState>({
    priceRange: "all",
    duration: [],
    tourType: [],
    category: [],
  });

  const filteredTours = useMemo(
    () => filterTours(allRivieraTours, filters),
    [allRivieraTours, filters]
  );

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={locationImages["riviera-maya"]}
            alt="Riviera Maya tropical coastline with palm trees and resorts"
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
                  4.8/5 from 900+ travelers
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
                Chichen Itza Tours from Riviera Maya — All-Inclusive Day Trips
              </h1>

              <p className="text-lg text-muted-foreground mb-6 max-w-xl">
                Convenient Chichen Itza tours with pickup from any hotel along the
                Riviera Maya corridor. From Puerto Morelos to Akumal, we've got you covered.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: Car, text: location.driveTime },
                  { icon: MapPin, text: location.distanceToChichen },
                  { icon: Calendar, text: "Daily departures" },
                  { icon: Hotel, text: "All resorts covered" },
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
                Why Book from Riviera Maya?
              </h2>
              <div className="space-y-4">
                {rivieraMayaPageContent.whyBook.map((item, i) => (
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
                Discover Chichen Itza with convenient <strong>tours departing from anywhere in
                the Riviera Maya</strong>. Whether you're staying in Puerto Aventuras, Akumal,
                Xpu-Ha, or any resort along Mexico's famous Caribbean coastline, we offer
                hassle-free pickup and transportation to one of the world's most spectacular
                archaeological sites.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Riviera Maya's central location means drive times of {location.driveTime} depending
                on your exact hotel. Our tour coordinators optimize pickup routes to minimize wait
                times while ensuring everyone arrives at Chichen Itza for an early morning experience.
                Compare with tours from{" "}
                <Link to="/tours-from/cancun" className="text-primary hover:underline">Cancún</Link>,{" "}
                <Link to="/tours-from/playa-del-carmen" className="text-primary hover:underline">Playa del Carmen</Link>, or{" "}
                <Link to="/tours-from/tulum" className="text-primary hover:underline">Tulum</Link>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All-inclusive resorts especially benefit from our day tours — step away from the
                beach for a day of culture, history, and adventure, then return to your resort's
                amenities by late afternoon. Choose from{" "}
                <Link to="/tours/private-tours" className="text-primary hover:underline">private tours</Link>,{" "}
                <Link to="/tour-types/small-group" className="text-primary hover:underline">small group experiences</Link>, or{" "}
                <Link to="/tour-types/family-friendly" className="text-primary hover:underline">family-friendly options</Link>.
              </p>
            </section>

            {/* Tours Grid */}
            <section id="tours" className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">
                Chichen Itza Tours from Riviera Maya Resorts
              </h2>
              <p className="text-muted-foreground mb-6">
                {allRivieraTours.length} tours available with resort pickup
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
                Your Riviera Maya to Chichen Itza Day
              </h2>
              <p className="text-muted-foreground mb-8">
                A typical day tour timeline from Riviera Maya resorts
              </p>

              <div className="space-y-0">
                {rivieraMayaPageContent.timeline.map((step, i) => (
                  <TimelineItem
                    key={i}
                    time={step.time}
                    title={step.title}
                    description={step.description}
                    isLast={i === rivieraMayaPageContent.timeline.length - 1}
                  />
                ))}
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <InfoBox
                  title="What's Included"
                  icon="✓"
                  variant="success"
                  items={[
                    "Door-to-door resort pickup & drop-off",
                    "Certified bilingual archaeologist guide",
                    "All entrance fees to Chichen Itza",
                    "Cenote swimming stop",
                    "Traditional Yucatecan buffet lunch",
                    "Bottled water and snacks on board",
                  ]}
                />
                <InfoBox
                  title="What to Bring"
                  icon="🎒"
                  variant="info"
                  items={[
                    "Comfortable walking shoes",
                    "Sunscreen and hat",
                    "Swimsuit and towel for cenote",
                    "Camera or smartphone",
                    "Cash for tips and souvenirs",
                    "Light jacket for air-conditioned van",
                  ]}
                />
              </div>
            </section>

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                Guided Tour vs. Self-Drive from Your Resort
              </h2>
              <ComparisonTable
                headers={["Guided Tour", "Self-Drive"]}
                highlightColumn={1}
                rows={rivieraMayaPageContent.comparisonTable.rows.map((row) => ({
                  label: row[0],
                  values: [row[1], row[2]],
                }))}
              />
              <div className="mt-6">
                <TipBox
                  type="tip"
                  title="Pro Tip: Resort Convenience"
                  content="All-inclusive guests get maximum value from a guided tour — no need to arrange car rental, navigate unfamiliar roads, or worry about parking. Your tour handles everything from lobby pickup to evening drop-off."
                />
              </div>
            </section>

            {/* Best Time */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                Best Time to Visit Chichen Itza from Riviera Maya
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="h-5 w-5 text-accent" />
                    <h3 className="font-heading font-semibold">Best Season</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">November–April</strong> offers dry weather
                    and comfortable temperatures. All-inclusive guests have more flexibility to book
                    last-minute during shoulder seasons.
                  </p>
                </div>
                <div className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold">Pickup Times</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Varies by location:</strong> Puerto Morelos
                    6:15 AM, Playa del Carmen 6:30-7:00 AM, Puerto Aventuras/Akumal 6:45-7:15 AM.
                  </p>
                </div>
              </div>

              <TipBox
                type="info"
                title="Resort Concierge Tip"
                content="Ask your resort concierge about partnered tours — some resorts offer exclusive packages or discounts for their guests."
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
                Riviera Maya to Chichen Itza Route
              </h2>
              <MapEmbed
                title="Riviera Maya to Chichen Itza Route"
                from="Riviera Maya, Mexico"
                to="Chichen Itza, Mexico"
              />
              <p className="text-sm text-muted-foreground mt-3">
                The journey from the Riviera Maya corridor takes you west through the scenic
                Yucatán Peninsula. Drive times vary by pickup location, from 1.5 hours (northern
                resorts) to 2.5 hours (southern resorts near Tulum).
              </p>
            </section>

            {/* Combo Tours */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">
                Popular Combo Tours from Riviera Maya
              </h2>
              <p className="text-muted-foreground mb-6">
                Maximize your day with these popular combinations that pair Chichen Itza with other Yucatán attractions:
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
                faqs={rivieraMayaFAQs}
                title="Frequently Asked Questions"
                subtitle="Common questions about Chichen Itza tours from Riviera Maya"
              />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <QuickBookingForm />
              <PopularToursWidget departureCity="riviera-maya" />
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
              { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
              { label: "From Tulum", href: "/tours-from/tulum" },
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

export default RivieraMayaToursPage;
