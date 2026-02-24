import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Sunrise, Clock, ChevronRight, Star, Camera, Moon, Coffee, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createFAQSchema, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourFilters, { type FilterState } from "@/components/features/tours/TourFilters";
import FAQSection from "@/components/common/FAQ";
import TrustBadges from "@/components/features/booking/TrustBadges";
import TimelineItem from "@/components/features/tours/TimelineItem";
import TipBox from "@/components/guide/TipBox";
import CTASection from "@/components/features/home/CTASection";
import { tours } from "@/lib/tourData";
import { sunriseToursFAQs } from "@/lib/faqData";
import { getReviewsByTourCategory } from "@/lib/reviewsData";
import ReviewGrid from "@/components/features/reviews/ReviewGrid";
import type { Tour } from "@/types/tour";

const meta = getPageMeta({
  title: "Chichen Itza Sunrise Tour – Early Access Before Crowds",
  description: "Experience Chichen Itza at sunrise before the crowds. Early access, golden hour photos, expert historian guide. Breakfast & lunch included. Book now!",
  canonical: "/tours/sunrise-tours",
  jsonLd: [
    createFAQSchema(sunriseToursFAQs),
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Tours", url: "/tours" },
      { name: "Sunrise Tours" },
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

const sunriseTimeline = [
  { time: "3:30 AM", title: "Early Morning Pickup", description: "Pickup from your hotel in the darkness — coffee and light snack provided on board." },
  { time: "6:00 AM", title: "Arrive Before Dawn", description: "Arrive at Chichen Itza while the sky is still transitioning. Feel the peaceful silence of the empty site." },
  { time: "6:30 AM", title: "Sunrise at El Castillo", description: "Watch the first golden light illuminate the pyramid. Capture stunning photos with almost no one around." },
  { time: "7:00 AM", title: "Hot Breakfast", description: "Enjoy a traditional Mexican breakfast with coffee, juice, fresh fruit, and regional specialties." },
  { time: "8:00 AM", title: "In-Depth Guided Tour", description: "Explore the site while it's still peaceful. Your Mayan historian guide shares stories the crowds never hear." },
  { time: "10:30 AM", title: "Free Exploration", description: "Wander independently, revisit favorite spots, and browse the artisan market as it opens." },
  { time: "11:30 AM", title: "Cenote & Lunch", description: "Refreshing cenote swim followed by a traditional Yucatecan buffet lunch." },
  { time: "2:00 PM", title: "Return Journey", description: "Relaxing drive back to your hotel, arriving by late afternoon." },
];

const SunriseToursPage = () => {
  const sunriseTours = useMemo(() => tours.filter((t) => t.category.includes("sunrise-tours")), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(sunriseTours, filters), [sunriseTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent/15 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tours", href: "/tours" }, { label: "Sunrise Tours" }]} />

          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.9/5 from 900+ early birds</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Chichen Itza Sunrise Tour – Experience the Magic Before Crowds
            </h1>

            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Be among the first to enter Chichen Itza at dawn. Watch golden light illuminate El Castillo in near-perfect solitude. The ultimate photography and cultural experience.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Sunrise, text: "Sunrise access" },
                { icon: Camera, text: "Photo paradise" },
                { icon: Coffee, text: "Breakfast included" },
                { icon: Moon, text: "Departs 3:30 AM" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                  <item.icon className="h-4 w-4 text-accent" />
                  {item.text}
                </span>
              ))}
            </div>

            <Button variant="cta" size="lg" asChild>
              <a href="#tours">Browse Sunrise Tours <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Imagine standing before El Castillo pyramid as the first rays of sunlight paint it in shades of gold and amber — with barely another soul in sight. That's the magic of our Chichen Itza sunrise tour, consistently rated our #1 experience by photographers, history buffs, and travelers seeking something truly special. See our <Link to="/guide/photography-tips" className="text-primary hover:underline">photography tips guide</Link> for the best camera settings and angles.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            While standard <Link to="/tours/day-tours" className="text-primary hover:underline">day tours</Link> arrive at 9-10 AM alongside hundreds of other visitors, our sunrise tours grant early access before the site officially opens to the general public. You'll experience the ruins in peaceful solitude, with cooler temperatures (75-80°F vs. 95°F at midday) and the most beautiful natural light of the day. Check our <Link to="/guide/best-time-to-visit" className="text-primary hover:underline">seasonal guide</Link> for the best months.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Yes, the 3:30 AM pickup requires an early alarm — but every traveler who's done it says the same thing: <strong className="text-foreground">"It was absolutely worth it."</strong> The empty plazas, the golden light, and the sense of discovery make this an experience you'll remember for a lifetime. Review our <Link to="/guide/what-to-bring" className="text-primary hover:underline">what to bring checklist</Link> for early morning essentials.
          </p>
        </div>
      </section>

      {/* Why Sunrise */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            Why Choose a Sunrise Tour?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Camera, title: "Golden Hour Photos", desc: "Capture El Castillo in perfect morning light. No crowds in your shots — just you and the ancient pyramid." },
              { icon: Users, title: "50-70% Fewer People", desc: "Experience the site in near solitude. Standard tours don't arrive until 9-10 AM, giving you a peaceful head start." },
              { icon: Sunrise, title: "Cooler Temperatures", desc: "Explore comfortably in 75-80°F instead of battling 95°F midday heat. Less sweating, more enjoying." },
              { icon: Moon, title: "Magical Atmosphere", desc: "There's something spiritual about watching an ancient wonder awaken with the dawn. An unforgettable moment." },
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

      {/* Timeline */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
              Your Sunrise Tour Timeline
            </h2>
            <div className="space-y-0">
              {sunriseTimeline.map((step, i) => (
                <TimelineItem
                  key={i}
                  time={step.time}
                  title={step.title}
                  description={step.description}
                  isLast={i === sunriseTimeline.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 text-center">
            Sunrise Tour Tips
          </h2>
          <TipBox
            type="tip"
            title="Prepare the Night Before"
            content="Set two alarms, lay out your clothes, and pack your bag the night before. Most hotels can prepare early coffee or a grab-and-go breakfast. Wear layers — mornings can be cool (65-70°F) before warming up."
          />
          <TipBox
            type="info"
            title="Photography Gear"
            content="Bring a camera with low-light capability. A tripod is allowed during sunrise hours (not later). Wide-angle lenses are best for capturing El Castillo. Your phone camera works great too — the light is incredibly flattering."
          />
          <TipBox
            type="warning"
            title="Limited Availability"
            content="Sunrise tours are our most popular premium experience and have limited capacity (max 12 per group). Book at least 3-5 days in advance, especially during high season (November-March)."
          />
        </div>
      </section>

      {/* Tour Grid */}
      <section id="tours" className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">
            All Sunrise Tour Options
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {sunriseTours.length} sunrise tours with early access
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
          <ReviewGrid reviews={getReviewsByTourCategory("sunrise")} limit={3} title="Sunrise Tour Reviews" showAllLink />
        </div>
      </section>

      <FAQSection faqs={sunriseToursFAQs} title="Sunrise Tour FAQs" subtitle="Common questions about Chichen Itza sunrise tours" />

      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">Explore More Tours</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Day Tours", href: "/tours/day-tours" },
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "Cenote Tours", href: "/tours/cenote-tours" },
              { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
              { label: "Photography Tips", href: "/guide/photography-tips" },
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

export default SunriseToursPage;
