import { Link } from "react-router-dom";
import { MapPin, Clock, Car, Star, ChevronRight, Shield, Calendar, Building, Sun } from "lucide-react";
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
import { meridaFAQs, meridaPageContent } from "@/lib/locationData";
import { locationSchemas } from "@/lib/schema";
import { locationImages } from "@/lib/tourImages";
import { useState, useMemo } from "react";
import type { Tour } from "@/types/tour";

const location = getLocationBySlug("merida")!;

const meta = getPageMeta({
  title: location.metaTitle,
  description: location.metaDescription,
  canonical: "/tours-from/merida",
  jsonLd: [
    createFAQSchema(meridaFAQs),
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tours from Mérida" },
    ]),
    locationSchemas["merida"],
  ],
});

const breadcrumbs = [{ label: "Tours from Mérida" }];

const comboTours = [
  {
    title: "Chichen Itza + Izamal (Yellow City)",
    price: 109,
    description: "Visit the ancient ruins then explore the stunning all-yellow colonial town of Izamal.",
    duration: "10 hours",
    link: "/combo-tours/multi-day-yucatan",
  },
  {
    title: "Chichen Itza + Cenote Hacienda",
    price: 99,
    description: "Explore the ruins and swim in a private hacienda cenote away from tourist crowds.",
    duration: "9 hours",
    link: "/combo-tours/cenote-ik-kil",
  },
  {
    title: "Chichen Itza + Uxmal Ruins",
    price: 189,
    description: "Two-day tour visiting both of Yucatán's most impressive archaeological sites.",
    duration: "2 days",
    link: "/combo-tours/multi-day-yucatan",
  },
  {
    title: "Multi-Day Yucatán Explorer",
    price: 299,
    description: "3-day immersive experience: Chichen Itza, Uxmal, cenotes, Izamal, and more.",
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

const MeridaToursPage = () => {
  const allMeridaTours = getToursByDeparture("merida");
  const [filters, setFilters] = useState<FilterState>({
    priceRange: "all",
    duration: [],
    tourType: [],
    category: [],
  });

  const filteredTours = useMemo(
    () => filterTours(allMeridaTours, filters),
    [allMeridaTours, filters]
  );

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={locationImages["merida"]}
            alt="Mérida colonial architecture and colorful streets"
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
                  4.9/5 from 600+ travelers
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
                Chichen Itza Tours from Mérida — Shortest Route 2026
              </h1>

              <p className="text-lg text-muted-foreground mb-6 max-w-xl">
                The shortest route to Chichen Itza! Just {location.driveTime} from the
                colonial capital of Yucatán. Experience authentic Yucatecan culture with local guides.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: Car, text: location.driveTime + " only!" },
                  { icon: MapPin, text: location.distanceToChichen },
                  { icon: Calendar, text: "Daily departures" },
                  { icon: Building, text: "Colonial charm" },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border"
                  >
                    <item.icon className="h-4 w-4 text-accent" />
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
                Why Book from Mérida?
              </h2>
              <div className="space-y-4">
                {meridaPageContent.whyBook.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-accent" />
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
                Mérida offers the shortest and most convenient route to Chichen Itza — just 75
                miles (1.5 hours) from the white city to the ancient Mayan capital. This proximity
                means more relaxed mornings, longer exploration time, and early returns to enjoy
                Mérida's vibrant plazas and colonial architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As the cultural heart of the Yucatán Peninsula, Mérida provides a different
                perspective on <strong>Chichen Itza tours</strong>. Local Yucatecan guides share
                deeper cultural connections and regional insights you won't get from coastal tour
                operators. Unlike tours from{" "}
                <Link to="/tours-from/cancun" className="text-primary hover:underline">Cancún (2.5 hours)</Link> or{" "}
                <Link to="/tours-from/tulum" className="text-primary hover:underline">Tulum (2-2.5 hours)</Link>,
                you'll arrive before the coastal tour buses.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond the shorter drive, Mérida-based tours often include authentic Yucatecan
                experiences: visits to traditional haciendas, lesser-known cenotes, and the
                picturesque Yellow City of Izamal. Choose from{" "}
                <Link to="/tours/private-tours" className="text-primary hover:underline">private tours</Link>,{" "}
                <Link to="/tour-types/small-group" className="text-primary hover:underline">small groups</Link>, or{" "}
                <Link to="/tour-types/luxury" className="text-primary hover:underline">luxury experiences</Link>.
              </p>
            </section>

            <div className="mb-12">
              <TipBox
                type="success"
                title="Best Kept Secret: Mérida's Proximity"
                content="Most tourists book from Cancún (2.5 hours) when Mérida is just 1.5 hours from Chichen Itza. You'll arrive before the coastal tour buses, explore in cooler morning hours, and experience authentic Yucatecan hospitality."
              />
            </div>

            {/* Tours Grid */}
            <section id="tours" className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">
                Chichen Itza Tours Departing from Mérida
              </h2>
              <p className="text-muted-foreground mb-6">
                {allMeridaTours.length} tours available with pickup from Mérida
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
                Your Mérida to Chichen Itza Experience
              </h2>
              <p className="text-muted-foreground mb-8">
                A typical day tour timeline from Mérida
              </p>

              <div className="space-y-0">
                {meridaPageContent.timeline.map((step, i) => (
                  <TimelineItem
                    key={i}
                    time={step.time}
                    title={step.title}
                    description={step.description}
                    isLast={i === meridaPageContent.timeline.length - 1}
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
                    "Local Yucatecan archaeologist guide",
                    "All entrance fees to Chichen Itza",
                    "Hacienda cenote swimming stop",
                    "Authentic Yucatecan lunch",
                    "Bottled water and snacks",
                  ]}
                />
                <InfoBox
                  title="What to Bring"
                  icon="🎒"
                  variant="info"
                  items={[
                    "Comfortable walking shoes",
                    "Sunscreen and wide-brimmed hat",
                    "Swimsuit and towel for cenote",
                    "Camera for photos",
                    "Mexican pesos for artisan market",
                    "Light clothing (Mérida is warmer)",
                  ]}
                />
              </div>
            </section>

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                Guided Tour vs. Self-Drive or Bus from Mérida
              </h2>
              <ComparisonTable
                headers={["Guided Tour", "Self-Drive/Bus"]}
                highlightColumn={1}
                rows={meridaPageContent.comparisonTable.rows.map((row) => ({
                  label: row[0],
                  values: [row[1], row[2]],
                }))}
              />
              <div className="mt-6">
                <TipBox
                  type="tip"
                  title="Pro Tip: Cultural Immersion"
                  content="Mérida-based guides often have deep Mayan heritage and cultural connections. A guided tour provides insights into regional traditions, food, and history that you simply can't get from a self-guided visit."
                />
              </div>
            </section>

            {/* Best Time */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                Best Time to Visit Chichen Itza from Mérida
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="h-5 w-5 text-accent" />
                    <h3 className="font-heading font-semibold">Best Season</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">November–February</strong> offers the most
                    comfortable temperatures. Mérida is warmer than coastal areas — avoid April-May
                    (hottest months) if possible.
                  </p>
                </div>
                <div className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold">Departure Times</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">7:30–8:30 AM</strong> — Mérida tours can leave
                    slightly later thanks to the shorter drive. You'll still arrive before the Cancún
                    buses at 10 AM.
                  </p>
                </div>
              </div>

              <TipBox
                type="info"
                title="Stay a Night in Mérida"
                content="Consider staying a night in Mérida before or after your tour. The city's Sunday cultural events, incredible food scene, and colonial architecture are absolutely worth exploring."
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
                Mérida to Chichen Itza Route
              </h2>
              <MapEmbed
                title="Mérida to Chichen Itza Route"
                from="Mérida, Mexico"
                to="Chichen Itza, Mexico"
              />
              <p className="text-sm text-muted-foreground mt-3">
                The 1.5-hour journey east from Mérida takes you through the heartland of the
                Yucatán Peninsula. The well-maintained toll highway passes traditional Mayan
                villages, henequen plantations, and lush vegetation.
              </p>
            </section>

            {/* Combo Tours */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">
                Popular Combo Tours from Mérida
              </h2>
              <p className="text-muted-foreground mb-6">
                Maximize your Yucatán experience with these popular combinations unique to Mérida:
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
                faqs={meridaFAQs}
                title="Frequently Asked Questions"
                subtitle="Common questions about Chichen Itza tours from Mérida"
              />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <QuickBookingForm />
              <PopularToursWidget departureCity="merida" />
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
              { label: "From Riviera Maya", href: "/tours-from/riviera-maya" },
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

export default MeridaToursPage;
