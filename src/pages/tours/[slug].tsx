import { useParams, Link, Navigate } from "react-router-dom";
import { Check, X, Clock, Users, MapPin, Star, ArrowRight, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import QuickBookingForm from "@/components/features/booking/QuickBookingForm";
import TrustBadges from "@/components/features/booking/TrustBadges";
import PopularToursWidget from "@/components/features/tours/PopularToursWidget";
import TourCard from "@/components/features/tours/TourCard";
import ReviewGrid from "@/components/features/reviews/ReviewGrid";
import CTASection from "@/components/features/home/CTASection";
import TimelineItem from "@/components/features/tours/TimelineItem";
import TourGallery from "@/components/features/tours/TourGallery";
import FAQSection from "@/components/common/FAQ";
import StickyBookingBar from "@/components/layout/StickyBookingBar";
import { getTourBySlug, getToursByCategory } from "@/lib/tourData";
import { tourImages, tourGalleryImages } from "@/lib/tourImages";
import { getReviewsByTourCategory } from "@/lib/reviewsData";
import { generateTourProductSchema } from "@/lib/schema";
import {
  generalChichenItzaFAQs,
  dayToursFAQs,
  privateToursFAQs,
  cenoteToursFAQs,
  sunriseToursFAQs,
  smallGroupFAQs,
} from "@/lib/faqData";
import type { FAQItem } from "@/lib/faqData";

// Map category IDs to review category strings
const categoryToReviewMap: Record<string, string> = {
  "day-tours": "day-tour",
  "private-tours": "private",
  "sunrise-tours": "sunrise",
  "cenote-tours": "cenote",
  "night-tours": "night",
  "ek-balam": "ek-balam",
  "valladolid": "valladolid",
  "combo": "day-tour",
  "small-group": "day-tour",
  "luxury": "private",
  "budget": "day-tour",
  "family-friendly": "day-tour",
  "vip-skip-the-line": "private",
};

// Departure city display names
const cityLabels: Record<string, string> = {
  cancun: "Cancún",
  "playa-del-carmen": "Playa del Carmen",
  tulum: "Tulum",
  "riviera-maya": "Riviera Maya",
  merida: "Mérida",
};

// Category display names for breadcrumbs
const categoryLabels: Record<string, { label: string; href: string }> = {
  "day-tours": { label: "Day Tours", href: "/tours/day-tours" },
  "private-tours": { label: "Private Tours", href: "/tours/private-tours" },
  "sunrise-tours": { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
  "cenote-tours": { label: "Cenote Tours", href: "/tours/cenote-tours" },
  "night-tours": { label: "Night Tours", href: "/tours/night-tours" },
  "ek-balam": { label: "Ek Balam Tours", href: "/tours/ek-balam-tours" },
  "valladolid": { label: "Valladolid Tours", href: "/tours/valladolid-tours" },
  combo: { label: "Combo Tours", href: "/tours" },
  "small-group": { label: "Small Group", href: "/tour-types/small-group" },
  luxury: { label: "Luxury Tours", href: "/tour-types/luxury" },
  budget: { label: "Budget Tours", href: "/tour-types/budget" },
  "family-friendly": { label: "Family Tours", href: "/tour-types/family-friendly" },
  "vip-skip-the-line": { label: "VIP Tours", href: "/tour-types/vip-skip-the-line" },
};

const TourDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tour = getTourBySlug(slug ?? "");

  // 404 guard – redirect to /tours with a graceful fallback
  if (!tour) {
    return <Navigate to="/tours" replace />;
  }

  const heroImg = tourImages[tour.id];

  // Pick first meaningful breadcrumb category
  const primaryCategory = tour.category[0];
  const primaryCategoryMeta = categoryLabels[primaryCategory] ?? { label: "Tours", href: "/tours" };

  // Related tours – same first category, exclude current
  const relatedTours = getToursByCategory(primaryCategory)
    .filter((t) => t.id !== tour.id)
    .slice(0, 3);

  // Reviews filtered by category
  const reviewCategory = categoryToReviewMap[primaryCategory] ?? "day-tour";
  const reviews = getReviewsByTourCategory(reviewCategory).slice(0, 3);

  // FAQ mapping by category
  const categoryFAQMap: Record<string, FAQItem[]> = {
    "day-tours": dayToursFAQs,
    "private-tours": privateToursFAQs,
    "cenote-tours": cenoteToursFAQs,
    "sunrise-tours": sunriseToursFAQs,
    "small-group": smallGroupFAQs,
  };
  const categoryFaqs = categoryFAQMap[primaryCategory] ?? [];
  const seen = new Set<string>();
  const combinedFaqs = [...categoryFaqs, ...generalChichenItzaFAQs]
    .filter((f) => { if (seen.has(f.question)) return false; seen.add(f.question); return true; })
    .slice(0, 6);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: combinedFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  // JSON-LD
  const productSchema = generateTourProductSchema(tour);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://chichenitzatours.com" },
      { "@type": "ListItem", position: 2, name: "Tours", item: "https://chichenitzatours.com/tours" },
      { "@type": "ListItem", position: 3, name: primaryCategoryMeta.label, item: `https://chichenitzatours.com${primaryCategoryMeta.href}` },
      { "@type": "ListItem", position: 4, name: tour.title },
    ],
  };

  const savings = tour.originalPrice ? tour.originalPrice - tour.price.adult : 0;

  return (
    <>
      <SEOHead
        meta={{
          title: tour.metaTitle,
          description: tour.metaDescription,
          canonical: `https://chichenitzatours.com/tours/${tour.slug}`,
          ogImage: heroImg,
          jsonLd: [productSchema, breadcrumbSchema, faqSchema],
        }}
      />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[60vh] flex items-end bg-foreground"
        aria-label={`${tour.title} hero`}
      >
        {heroImg && (
          <img
            src={heroImg}
            alt={tour.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            width={1920}
            height={1080}
            loading="eager"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />

        <div className="container relative z-10 pb-10 pt-24">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-sm text-primary-foreground/70 flex-wrap">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li><Link to="/tours" className="hover:text-primary-foreground transition-colors">Tours</Link></li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li>
                <Link to={primaryCategoryMeta.href} className="hover:text-primary-foreground transition-colors">
                  {primaryCategoryMeta.label}
                </Link>
              </li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li className="text-primary-foreground font-medium truncate max-w-[200px]">{tour.shortTitle}</li>
            </ol>
          </nav>

          {/* Badge */}
          {tour.badge && (
            <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-md mb-3">
              {tour.badge}
            </span>
          )}

          {/* H1 */}
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 max-w-3xl leading-tight">
            {tour.h1}
          </h1>

          {/* Meta chips */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-1.5 text-primary-foreground">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-bold">{tour.rating}</span>
              <span className="text-primary-foreground/70 text-sm">({tour.reviewCount.toLocaleString()} reviews)</span>
            </div>
            <span className="text-primary-foreground/40">·</span>
            <div className="flex items-center gap-1.5 text-primary-foreground/90 text-sm">
              <Clock className="h-4 w-4" />
              <span>{tour.duration}</span>
            </div>
            <span className="text-primary-foreground/40">·</span>
            <div className="flex items-center gap-1.5 text-primary-foreground/90 text-sm">
              <Users className="h-4 w-4" />
              <span>
                {tour.groupSize.type === "private"
                  ? "Private group"
                  : `Max ${tour.groupSize.max} people`}
              </span>
            </div>
          </div>

          {/* Price + CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-primary text-primary-foreground rounded-lg px-5 py-3">
              {tour.originalPrice && (
                <div className="text-xs line-through opacity-70 -mb-1">
                  From ${tour.originalPrice}
                </div>
              )}
              <div className="font-heading font-bold text-2xl">
                From ${tour.price.adult}
                <span className="text-sm font-normal opacity-80 ml-1">/ adult</span>
              </div>
              {savings > 0 && (
                <div className="text-xs text-accent font-semibold mt-0.5">Save ${savings}</div>
              )}
            </div>
            <Button
              variant="cta"
              size="lg"
              className="font-bold"
              onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book This Tour <ArrowRight className="h-5 w-5 ml-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground" asChild>
              <Link to="/tours">View All Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <div className="bg-card border-b border-border py-4">
        <div className="container">
          <TrustBadges variant="compact" />
            </div>

            {/* Photo Gallery */}
            <TourGallery images={tourGalleryImages[tour.id] || []} heroImage={heroImg} tourTitle={tour.title} />
      </div>

      {/* ── Main content ── */}
      <div className="container py-10 lg:py-14 pb-24 lg:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* ── Left: Article ── */}
          <article className="lg:col-span-2 space-y-10">

            {/* Description */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{tour.description}</p>
            </div>

            {/* Highlights */}
            <section aria-labelledby="highlights-heading">
              <h2 id="highlights-heading" className="font-heading font-bold text-2xl mb-4">
                Tour Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-success/15 flex items-center justify-center">
                      <Check className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary */}
            <section aria-labelledby="itinerary-heading">
              <h2 id="itinerary-heading" className="font-heading font-bold text-2xl mb-6">
                Tour Itinerary
              </h2>
              <div className="space-y-0">
                {tour.itinerary.map((step, i) => (
                  <TimelineItem
                    key={i}
                    time={step.time}
                    title={step.title}
                    description={step.description}
                    isLast={i === tour.itinerary.length - 1}
                  />
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section aria-labelledby="inclusions-heading">
              <h2 id="inclusions-heading" className="font-heading font-bold text-2xl mb-4">
                What's Included
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Included */}
                <div className="border-2 border-success/30 rounded-lg p-5 bg-success/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="h-5 w-5 text-success" />
                    <h3 className="font-heading font-semibold">Included</h3>
                  </div>
                  <ul className="space-y-2">
                    {tour.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded */}
                <div className="border-2 border-destructive/20 rounded-lg p-5 bg-destructive/5">
                  <div className="flex items-center gap-2 mb-3">
                    <X className="h-5 w-5 text-destructive" />
                    <h3 className="font-heading font-semibold">Not Included</h3>
                  </div>
                  <ul className="space-y-2">
                    {tour.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive/60 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Departure Cities */}
            <section aria-labelledby="departure-heading">
              <h2 id="departure-heading" className="font-heading font-bold text-2xl mb-4">
                Departure Cities
              </h2>
              <div className="flex flex-wrap gap-3">
                {tour.departureCity.map((city) => (
                  <Link
                    key={city}
                    to={`/tours-from/${city}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    {cityLabels[city] ?? city}
                  </Link>
                ))}
              </div>
            </section>

            {/* Meeting Point */}
            {tour.meetingPoint && (
              <section aria-labelledby="meeting-heading">
                <h2 id="meeting-heading" className="font-heading font-bold text-2xl mb-4">
                  Meeting Point
                </h2>
                <div className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{tour.meetingPoint.address}</p>
                      {tour.meetingPoint.instructions && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {tour.meetingPoint.instructions}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Reviews */}
            {reviews.length > 0 && (
              <section aria-labelledby="reviews-heading">
                <ReviewGrid
                  reviews={reviews}
                  limit={3}
                  title="Traveler Reviews"
                  showAggregate
                  showAllLink
                />
              </section>
            )}

            {/* Related Tours */}
            {relatedTours.length > 0 && (
              <section aria-labelledby="related-heading">
                <h2 id="related-heading" className="font-heading font-bold text-2xl mb-6">
                  You Might Also Like
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {relatedTours.map((t) => (
                    <TourCard key={t.id} tour={t} />
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" asChild>
                    <Link to="/tours">
                      See All Tours <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </section>
            )}

            {/* FAQ */}
            {combinedFaqs.length > 0 && (
              <FAQSection faqs={combinedFaqs} title="Frequently Asked Questions" />
            )}

            {/* Internal links */}
            <section className="border-t border-border pt-8">
              <h3 className="font-heading font-semibold text-lg mb-4">Explore More</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: "All Tours", href: "/tours" },
                  { label: "Private Tours", href: "/tours/private-tours" },
                  { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
                  { label: "From Cancún", href: "/tours-from/cancun" },
                  { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
                  { label: "Travel Guide", href: "/guide/best-time-to-visit" },
                  { label: "Entrance Fees", href: "/guide/entrance-fees" },
                  { label: "FAQ", href: "/practical/faq" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <ArrowRight className="h-3 w-3" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          </article>

          {/* ── Right: Sticky Sidebar ── */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-5">

              {/* Price summary card */}
              <div className="bg-card rounded-lg border border-border p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-muted-foreground">Adult price</span>
                  <div>
                    {tour.originalPrice && (
                      <span className="text-xs line-through text-muted-foreground mr-1">${tour.originalPrice}</span>
                    )}
                    <span className="font-heading font-bold text-primary text-xl">${tour.price.adult}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Child price (4–12)</span>
                  <span className="font-semibold">${tour.price.child}</span>
                </div>
                {tour.price.infant === 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-success mb-4">
                    <Check className="h-3.5 w-3.5" />
                    <span>Infants under 3 travel free</span>
                  </div>
                )}
                <div className="text-xs text-muted-foreground flex items-center gap-1 mb-4">
                  <Clock className="h-3.5 w-3.5" />
                  {tour.duration} · 
                  <Users className="h-3.5 w-3.5 ml-1" />
                  {tour.groupSize.type === "private" ? "Private" : `Max ${tour.groupSize.max}`}
                </div>
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full font-bold"
                  onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book Now – Free Cancellation
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  ✓ No payment required now
                </p>
              </div>

              {/* Booking form */}
              <div id="booking-form">
                <QuickBookingForm />
              </div>

              {/* Trust badges */}
              <TrustBadges variant="compact" />

              {/* Phone CTA */}
              <div className="bg-card rounded-lg border border-border p-5 text-center">
                <p className="text-sm font-semibold mb-2">Need help choosing?</p>
                <p className="text-xs text-muted-foreground mb-3">Our experts are available 7 days a week</p>
                <a
                  href="tel:+529841234567"
                  className="flex items-center justify-center gap-2 text-primary font-bold hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  +52 984 123 4567
                </a>
              </div>

              {/* Popular tours widget */}
              <PopularToursWidget excludeTourId={tour.id} maxTours={3} />
            </div>
          </aside>
        </div>
      </div>

      {/* ── CTA Section ── */}
      <CTASection />

      {/* Mobile sticky booking bar */}
      <StickyBookingBar price={tour.price.adult} tourSlug={tour.slug} />
    </>
  );
};

export default TourDetailPage;
