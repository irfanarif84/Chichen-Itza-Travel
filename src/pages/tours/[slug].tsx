import { useParams, Navigate } from "react-router-dom";
import { Check, X, Clock, Users, MapPin, Star, ArrowRight, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
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
import { LocaleLink } from "@/components/LocaleLink";
import { getTourBySlug, getToursByCategory } from "@/lib/tourData";
import { tourImages, tourGalleryImages, tourGalleryAltTexts } from "@/lib/tourImages";
import { getReviewsByTourCategory, generateReviewSchema } from "@/lib/reviewsData";
import { generateTourProductSchema } from "@/lib/schema";
import { useLocale } from "@/lib/i18n/useLocale";
import { useLocalizedTour } from "@/hooks/useTourLocale";
import { useLocalizedFAQs } from "@/hooks/useFAQLocale";
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

// Category display names (EN / ES)
const categoryLabelsMap: Record<string, { en: { label: string; href: string }; es: { label: string; href: string } }> = {
  "day-tours": { en: { label: "Day Tours", href: "/tours/day-tours" }, es: { label: "Tours de Día", href: "/tours/day-tours" } },
  "private-tours": { en: { label: "Private Tours", href: "/tours/private-tours" }, es: { label: "Tours Privados", href: "/tours/private-tours" } },
  "sunrise-tours": { en: { label: "Sunrise Tours", href: "/tours/sunrise-tours" }, es: { label: "Tours al Amanecer", href: "/tours/sunrise-tours" } },
  "cenote-tours": { en: { label: "Cenote Tours", href: "/tours/cenote-tours" }, es: { label: "Tours de Cenotes", href: "/tours/cenote-tours" } },
  "night-tours": { en: { label: "Night Tours", href: "/tours/night-tours" }, es: { label: "Tours Nocturnos", href: "/tours/night-tours" } },
  "ek-balam": { en: { label: "Ek Balam Tours", href: "/tours/ek-balam-tours" }, es: { label: "Tours Ek Balam", href: "/tours/ek-balam-tours" } },
  "valladolid": { en: { label: "Valladolid Tours", href: "/tours/valladolid-tours" }, es: { label: "Tours Valladolid", href: "/tours/valladolid-tours" } },
  combo: { en: { label: "Combo Tours", href: "/tours" }, es: { label: "Tours Combo", href: "/tours" } },
  "small-group": { en: { label: "Small Group", href: "/tour-types/small-group" }, es: { label: "Grupo Pequeño", href: "/tour-types/small-group" } },
  luxury: { en: { label: "Luxury Tours", href: "/tour-types/luxury" }, es: { label: "Tours de Lujo", href: "/tour-types/luxury" } },
  budget: { en: { label: "Budget Tours", href: "/tour-types/budget" }, es: { label: "Tours Económicos", href: "/tour-types/budget" } },
  "family-friendly": { en: { label: "Family Tours", href: "/tour-types/family-friendly" }, es: { label: "Tours Familiares", href: "/tour-types/family-friendly" } },
  "vip-skip-the-line": { en: { label: "VIP Tours", href: "/tour-types/vip-skip-the-line" }, es: { label: "Tours VIP", href: "/tour-types/vip-skip-the-line" } },
};

const TourDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tour = getTourBySlug(slug ?? "");
  const { isEs, locale } = useLocale();
  const { getFAQs } = useLocalizedFAQs();

  // 404 guard
  if (!tour) {
    return <Navigate to="/tours" replace />;
  }

  const loc = useLocalizedTour(tour);
  const heroImg = tourImages[tour.id];

  // Pick first meaningful breadcrumb category
  const primaryCategory = tour.category[0];
  const catMeta = categoryLabelsMap[primaryCategory]?.[locale] ?? { label: "Tours", href: "/tours" };

  // Related tours
  const relatedTours = getToursByCategory(primaryCategory)
    .filter((t) => t.id !== tour.id)
    .slice(0, 3);

  // Reviews — top 5 for schema, top 3 for display
  const reviewCategory = categoryToReviewMap[primaryCategory] ?? "day-tour";
  const allCategoryReviews = getReviewsByTourCategory(reviewCategory);
  const reviews = allCategoryReviews.slice(0, 3);
  const schemaReviews = allCategoryReviews.slice(0, 5);

  // FAQ - use localized versions
  const categoryFAQKeyMap: Record<string, "dayTours" | "privateTours" | "cenoteTours" | "sunriseTours" | "smallGroup"> = {
    "day-tours": "dayTours",
    "private-tours": "privateTours",
    "cenote-tours": "cenoteTours",
    "sunrise-tours": "sunriseTours",
    "small-group": "smallGroup",
  };
  const faqKey = categoryFAQKeyMap[primaryCategory];
  const categoryFaqs = faqKey ? getFAQs(faqKey) : [];
  const generalFaqs = getFAQs("general");
  const seen = new Set<string>();
  const combinedFaqs = [...categoryFaqs, ...generalFaqs]
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

  // JSON-LD — extend Product schema with individual Review items for star-snippet eligibility
  const baseProductSchema = generateTourProductSchema(tour);
  const productSchema = schemaReviews.length > 0
    ? { ...baseProductSchema, review: generateReviewSchema(schemaReviews) }
    : baseProductSchema;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: "https://chichenitzatours.com" },
      { "@type": "ListItem", position: 2, name: "Tours", item: "https://chichenitzatours.com/tours" },
      { "@type": "ListItem", position: 3, name: catMeta.label, item: `https://chichenitzatours.com${catMeta.href}` },
      { "@type": "ListItem", position: 4, name: loc.title },
    ],
  };

  const savings = tour.originalPrice ? tour.originalPrice - tour.price.adult : 0;

  // ImageObject schema
  const galleryImgs = tourGalleryImages[tour.id] || [];
  const galleryAlts = tourGalleryAltTexts[tour.id] || [];
  const imageObjectSchema = galleryImgs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${loc.title} Photo Gallery`,
    about: { "@type": "TouristAttraction", name: "Chichen Itza" },
    image: galleryImgs.map((url, i) => ({
      "@type": "ImageObject",
      contentUrl: url,
      name: galleryAlts[i] ?? `${loc.title} photo ${i + 1}`,
      description: galleryAlts[i] ?? `${loc.title} - Chichen Itza tour photo ${i + 1}`,
    })),
  } : null;

  // Localized labels
  const l = {
    home: isEs ? "Inicio" : "Home",
    reviews: isEs ? "reseñas" : "reviews",
    privateGroup: isEs ? "Grupo privado" : "Private group",
    maxPeople: isEs ? "Máx" : "Max",
    people: isEs ? "personas" : "people",
    from: isEs ? "Desde" : "From",
    perAdult: isEs ? "/ adulto" : "/ adult",
    save: isEs ? "Ahorra" : "Save",
    bookThis: isEs ? "Reservar Este Tour" : "Book This Tour",
    viewAll: isEs ? "Ver Todos los Tours" : "View All Tours",
    tourHighlights: isEs ? "Aspectos Destacados" : "Tour Highlights",
    tourItinerary: isEs ? "Itinerario del Tour" : "Tour Itinerary",
    whatsIncluded: isEs ? "Qué Incluye" : "What's Included",
    included: isEs ? "Incluido" : "Included",
    notIncluded: isEs ? "No Incluido" : "Not Included",
    departureCities: isEs ? "Ciudades de Salida" : "Departure Cities",
    meetingPoint: isEs ? "Punto de Encuentro" : "Meeting Point",
    travelerReviews: isEs ? "Reseñas de Viajeros" : "Traveler Reviews",
    youMightLike: isEs ? "También Te Puede Gustar" : "You Might Also Like",
    seeAll: isEs ? "Ver Todos los Tours" : "See All Tours",
    faq: isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions",
    exploreMore: isEs ? "Explorar Más" : "Explore More",
    adultPrice: isEs ? "Precio adulto" : "Adult price",
    childPrice: isEs ? "Precio niño (4–12)" : "Child price (4–12)",
    infantsFree: isEs ? "Menores de 3 años gratis" : "Infants under 3 travel free",
    private: isEs ? "Privado" : "Private",
    bookNow: isEs ? "Reservar Ahora – Cancelación Gratuita" : "Book Now – Free Cancellation",
    noPayment: isEs ? "✓ No se requiere pago ahora" : "✓ No payment required now",
    needHelp: isEs ? "¿Necesitas ayuda?" : "Need help choosing?",
    expertsAvail: isEs ? "Nuestros expertos están disponibles 7 días a la semana" : "Our experts are available 7 days a week",
    allTours: isEs ? "Todos los Tours" : "All Tours",
    privateTours: isEs ? "Tours Privados" : "Private Tours",
    sunriseTours: isEs ? "Tours al Amanecer" : "Sunrise Tours",
    fromCancun: isEs ? "Desde Cancún" : "From Cancún",
    fromPlaya: isEs ? "Desde Playa del Carmen" : "From Playa del Carmen",
    travelGuide: isEs ? "Guía de Viaje" : "Travel Guide",
    entranceFees: isEs ? "Precios de Entrada" : "Entrance Fees",
    faqLink: isEs ? "Preguntas Frecuentes" : "FAQ",
  };

  return (
    <>
      <SEOHead
        meta={{
          title: tour.metaTitle,
          description: tour.metaDescription,
          canonical: `https://chichenitzatours.com/tours/${tour.slug}`,
          ogImage: heroImg,
          jsonLd: [productSchema, breadcrumbSchema, faqSchema, ...(imageObjectSchema ? [imageObjectSchema] : [])],
        }}
      />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[60vh] flex items-end bg-foreground"
        aria-label={`${loc.title} hero`}
      >
        {heroImg && (
          <img
            src={heroImg}
            alt={`${loc.title} - Chichen Itza tour hero image`}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />

        <div className="container relative z-10 pb-10 pt-24">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-sm text-primary-foreground/70 flex-wrap">
              <li><LocaleLink to="/" className="hover:text-primary-foreground transition-colors">{l.home}</LocaleLink></li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li><LocaleLink to="/tours" className="hover:text-primary-foreground transition-colors">Tours</LocaleLink></li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li>
                <LocaleLink to={catMeta.href} className="hover:text-primary-foreground transition-colors">
                  {catMeta.label}
                </LocaleLink>
              </li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li className="text-primary-foreground font-medium truncate max-w-[200px]">{loc.shortTitle}</li>
            </ol>
          </nav>

          {/* Badge */}
          {loc.badge && (
            <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-md mb-3">
              {loc.badge}
            </span>
          )}

          {/* H1 */}
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 max-w-3xl leading-tight">
            {loc.h1}
          </h1>

          {/* Meta chips */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-1.5 text-primary-foreground">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-bold">{tour.rating}</span>
              <span className="text-primary-foreground/70 text-sm">({tour.reviewCount.toLocaleString()} {l.reviews})</span>
            </div>
            <span className="text-primary-foreground/40">·</span>
            <div className="flex items-center gap-1.5 text-primary-foreground/90 text-sm">
              <Clock className="h-4 w-4" />
              <span>{loc.duration}</span>
            </div>
            <span className="text-primary-foreground/40">·</span>
            <div className="flex items-center gap-1.5 text-primary-foreground/90 text-sm">
              <Users className="h-4 w-4" />
              <span>
                {tour.groupSize.type === "private"
                  ? l.privateGroup
                  : `${l.maxPeople} ${tour.groupSize.max} ${l.people}`}
              </span>
            </div>
          </div>

          {/* Price + CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-primary text-primary-foreground rounded-lg px-5 py-3">
              {tour.originalPrice && (
                <div className="text-xs line-through opacity-70 -mb-1">
                  {l.from} ${tour.originalPrice}
                </div>
              )}
              <div className="font-heading font-bold text-2xl">
                {l.from} ${tour.price.adult}
                <span className="text-sm font-normal opacity-80 ml-1">{l.perAdult}</span>
              </div>
              {savings > 0 && (
                <div className="text-xs text-accent font-semibold mt-0.5">{l.save} ${savings}</div>
              )}
            </div>
            <Button
              variant="cta"
              size="lg"
              className="font-bold"
              onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              {l.bookThis} <ArrowRight className="h-5 w-5 ml-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground" asChild>
              <LocaleLink to="/tours">{l.viewAll}</LocaleLink>
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
            <TourGallery images={tourGalleryImages[tour.id] || []} altTexts={tourGalleryAltTexts[tour.id]} heroImage={heroImg} tourTitle={loc.title} />
      </div>

      {/* ── Main content ── */}
      <div className="container py-10 lg:py-14 pb-24 lg:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* ── Left: Article ── */}
          <article className="lg:col-span-2 space-y-10">

            {/* Description */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{loc.description}</p>
            </div>

            {/* Highlights */}
            <section aria-labelledby="highlights-heading">
              <h2 id="highlights-heading" className="font-heading font-bold text-2xl mb-4">
                {l.tourHighlights}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {loc.highlights.map((h, i) => (
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
                {l.tourItinerary}
              </h2>
              <div className="space-y-0">
                {loc.itinerary.map((step, i) => (
                  <TimelineItem
                    key={i}
                    time={step.time}
                    title={step.title}
                    description={step.description}
                    isLast={i === loc.itinerary.length - 1}
                  />
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section aria-labelledby="inclusions-heading">
              <h2 id="inclusions-heading" className="font-heading font-bold text-2xl mb-4">
                {l.whatsIncluded}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border-2 border-success/30 rounded-lg p-5 bg-success/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="h-5 w-5 text-success" />
                    <h3 className="font-heading font-semibold">{l.included}</h3>
                  </div>
                  <ul className="space-y-2">
                    {loc.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-2 border-destructive/20 rounded-lg p-5 bg-destructive/5">
                  <div className="flex items-center gap-2 mb-3">
                    <X className="h-5 w-5 text-destructive" />
                    <h3 className="font-heading font-semibold">{l.notIncluded}</h3>
                  </div>
                  <ul className="space-y-2">
                    {loc.exclusions.map((item, i) => (
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
                {l.departureCities}
              </h2>
              <div className="flex flex-wrap gap-3">
                {tour.departureCity.map((city) => (
                  <LocaleLink
                    key={city}
                    to={`/tours-from/${city}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    {cityLabels[city] ?? city}
                  </LocaleLink>
                ))}
              </div>
            </section>

            {/* Meeting Point */}
            {tour.meetingPoint && (
              <section aria-labelledby="meeting-heading">
                <h2 id="meeting-heading" className="font-heading font-bold text-2xl mb-4">
                  {l.meetingPoint}
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
                  title={l.travelerReviews}
                  showAggregate
                  showAllLink
                />
              </section>
            )}

            {/* Related Tours */}
            {relatedTours.length > 0 && (
              <section aria-labelledby="related-heading">
                <h2 id="related-heading" className="font-heading font-bold text-2xl mb-6">
                  {l.youMightLike}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {relatedTours.map((t) => (
                    <TourCard key={t.id} tour={t} />
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" asChild>
                    <LocaleLink to="/tours">
                      {l.seeAll} <ArrowRight className="h-4 w-4 ml-1" />
                    </LocaleLink>
                  </Button>
                </div>
              </section>
            )}

            {/* FAQ */}
            {combinedFaqs.length > 0 && (
              <FAQSection faqs={combinedFaqs} title={l.faq} />
            )}

            {/* Internal links */}
            <section className="border-t border-border pt-8">
              <h3 className="font-heading font-semibold text-lg mb-4">{l.exploreMore}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: l.allTours, href: "/tours" },
                  { label: l.privateTours, href: "/tours/private-tours" },
                  { label: l.sunriseTours, href: "/tours/sunrise-tours" },
                  { label: l.fromCancun, href: "/tours-from/cancun" },
                  { label: l.fromPlaya, href: "/tours-from/playa-del-carmen" },
                  { label: l.travelGuide, href: "/guide/best-time-to-visit" },
                  { label: l.entranceFees, href: "/guide/entrance-fees" },
                  { label: l.faqLink, href: "/practical/faq" },
                ].map((link) => (
                  <LocaleLink
                    key={link.href}
                    to={link.href}
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <ArrowRight className="h-3 w-3" />
                    {link.label}
                  </LocaleLink>
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
                  <span className="text-sm text-muted-foreground">{l.adultPrice}</span>
                  <div>
                    {tour.originalPrice && (
                      <span className="text-xs line-through text-muted-foreground mr-1">${tour.originalPrice}</span>
                    )}
                    <span className="font-heading font-bold text-primary text-xl">${tour.price.adult}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">{l.childPrice}</span>
                  <span className="font-semibold">${tour.price.child}</span>
                </div>
                {tour.price.infant === 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-success mb-4">
                    <Check className="h-3.5 w-3.5" />
                    <span>{l.infantsFree}</span>
                  </div>
                )}
                <div className="text-xs text-muted-foreground flex items-center gap-1 mb-4">
                  <Clock className="h-3.5 w-3.5" />
                  {loc.duration} · 
                  <Users className="h-3.5 w-3.5 ml-1" />
                  {tour.groupSize.type === "private" ? l.private : `${l.maxPeople} ${tour.groupSize.max}`}
                </div>
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full font-bold"
                  onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {l.bookNow}
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  {l.noPayment}
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
                <p className="text-sm font-semibold mb-2">{l.needHelp}</p>
                <p className="text-xs text-muted-foreground mb-3">{l.expertsAvail}</p>
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
