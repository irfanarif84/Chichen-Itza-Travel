import { LocaleLink as Link } from "@/components/LocaleLink";
import { useState, useMemo } from "react";
import { Sun, Clock, Users, ChevronRight, Star, Utensils, Droplets, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createFAQSchema, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourFilters, { type FilterState } from "@/components/features/tours/TourFilters";
import FAQSection from "@/components/common/FAQ";
import TrustBadges from "@/components/features/booking/TrustBadges";
import TipBox from "@/components/guide/TipBox";
import CTASection from "@/components/features/home/CTASection";
import { tours } from "@/lib/tourData";
import { dayToursFAQs } from "@/lib/faqData";
import { getReviewsByTourCategory } from "@/lib/reviewsData";
import ReviewGrid from "@/components/features/reviews/ReviewGrid";
import { useLocale } from "@/lib/i18n/useLocale";
import type { Tour } from "@/types/tour";

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

const DayToursPage = () => {
  const { locale, t } = useLocale();
  const dayTours = useMemo(() => tours.filter((t) => t.category.includes("day-tours")), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(dayTours, filters), [dayTours, filters]);

  const c = locale === "es" ? {
    seoTitle: "Tours de Día a Chichén Itzá – Excursiones Guiadas 2026",
    seoDesc: "Compara los mejores tours de día a Chichén Itzá. Excursiones guiadas con cenote, almuerzo y transporte desde $49. Cancelación gratuita. ¡Reserva ahora!",
    h1: "Tours de Día a Chichén Itzá – Experiencias Guiadas de Día Completo",
    rating: "4.8/5 promedio de más de 7,000 viajeros",
    subtitle: "¡Nuestra opción más popular! Los tours de día completo incluyen guías expertos, nado en cenote, almuerzo tradicional y transporte ida y vuelta desde tu hotel.",
    chips: [
      { text: "10-14 horas" },
      { text: "Almuerzo incluido" },
      { text: "Nado en cenote" },
      { text: "Paradas fotográficas" },
    ],
    cta: "Ver Tours de Día",
    intro1: "Un tour de día a Chichén Itzá es la forma más fácil y popular de visitar una de las Nuevas Siete Maravillas del Mundo. Saliendo desde Cancún, Playa del Carmen, Tulum o la Riviera Maya, estas excursiones todo incluido manejan cada detalle para que te concentres en la experiencia.",
    intro2: "Cada tour de día incluye transporte con aire acondicionado y recogida en hotel, un guía bilingüe certificado que da vida a la historia maya, entradas, y un almuerzo buffet yucateco tradicional. La mayoría incluyen un refrescante baño en un cenote — un sumidero natural sagrado para los antiguos mayas.",
    intro3: "Elige entre tours económicos en grupo desde $49, experiencias en grupos pequeños de máximo 15 personas, o opciones familiares con actividades interactivas para niños. Todos ofrecen cancelación gratuita hasta 24 horas antes de la salida.",
    whatsIncluded: "¿Qué Incluye un Tour de Día?",
    includedItems: [
      { title: "Guía Experto", desc: "Guía arqueólogo certificado compartiendo historia, astronomía y cultura maya en inglés y español." },
      { title: "Almuerzo Incluido", desc: "Buffet yucateco tradicional con especialidades regionales, opciones vegetarianas disponibles." },
      { title: "Nado en Cenote", desc: "Refréscate en un impresionante cenote natural. Chalecos salvavidas y vestidores disponibles." },
      { title: "Grupos Pequeños", desc: "Máximo 15 personas por grupo garantiza atención personalizada y mejores fotos." },
    ],
    allDayTours: "Todos los Tours de Día a Chichén Itzá",
    toursAvailable: "tours de día disponibles con cancelación gratuita",
    tipTitle: "Consejo de Mejor Valor",
    tipContent: "Reserva un tour combo Chichén Itzá + Cenote para el mejor valor. Obtienes ambas experiencias en un día — ahorrando típicamente $20-30 comparado con reservar por separado. Nuestro combo más popular incluye Cenote Ik Kil.",
    infoTitle: "Ciudades de Salida",
    infoContent: "Los tours de día salen diariamente desde Cancún, Playa del Carmen, Tulum y todos los resorts de la Riviera Maya. La recogida en hotel está incluida. Elige tu ciudad de salida al reservar.",
    dayToursByCity: "Tours de Día por Ciudad de Salida",
    fromCities: ["Desde Cancún", "Desde Playa del Carmen", "Desde Tulum", "Desde Riviera Maya", "Desde Mérida"],
    reviewsTitle: "Reseñas de Tours de Día",
    faqTitle: "Preguntas Frecuentes de Tours de Día",
    faqSubtitle: "Preguntas comunes sobre tours de día a Chichén Itzá",
    exploreMore: "Explorar Más Tours",
    links: [
      { label: "Tours Privados", href: "/tours/private-tours" },
      { label: "Tours al Amanecer", href: "/tours/sunrise-tours" },
      { label: "Tours de Cenotes", href: "/tours/cenote-tours" },
      { label: "Mejor Época para Visitar", href: "/guide/best-time-to-visit" },
      { label: "Qué Llevar", href: "/guide/what-to-bring" },
      { label: "Todos los Tours", href: "/tours" },
    ],
  } : {
    seoTitle: "Chichen Itza Day Tours – Full Day Guided Trips 2026",
    seoDesc: "Compare the best Chichen Itza day tours. Full-day guided trips with cenote, lunch & transport from $49. Free cancellation. Book your day trip now!",
    h1: "Chichen Itza Day Tours – Full Day Guided Experiences",
    rating: "4.8/5 average from 7,000+ travelers",
    subtitle: "Our most popular option! Full-day tours include expert guides, cenote swimming, traditional lunch, and round-trip transport from your hotel.",
    chips: [
      { text: "10-14 hours" },
      { text: "Lunch included" },
      { text: "Cenote swim" },
      { text: "Photo stops" },
    ],
    cta: "Browse Day Tours",
    intro1: "A Chichen Itza day tour is the easiest and most popular way to visit one of the New Seven Wonders of the World. Departing from Cancún, Playa del Carmen, Tulum, or the Riviera Maya, these all-inclusive excursions handle every detail so you can focus on the experience.",
    intro2: "Every day tour includes air-conditioned transportation with hotel pickup, a certified bilingual guide who brings Mayan history to life, entrance fees, and a traditional Yucatecan buffet lunch. Most tours also include a refreshing swim at a cenote — a natural sinkhole sacred to the ancient Maya.",
    intro3: "Choose from budget-friendly group tours starting at $49, small-group experiences limited to 15 people, or family-friendly options with interactive activities for kids. All tours offer free cancellation up to 24 hours before departure.",
    whatsIncluded: "What's Included in a Day Tour?",
    includedItems: [
      { title: "Expert Guide", desc: "Certified archaeologist guide sharing Mayan history, astronomy, and culture in English and Spanish." },
      { title: "Lunch Included", desc: "Traditional Yucatecan buffet featuring regional specialties, with vegetarian options available." },
      { title: "Cenote Swim", desc: "Cool off in a stunning natural cenote. Life vests and changing facilities provided." },
      { title: "Small Groups", desc: "Maximum 15 people per group ensures personalized attention and better photo opportunities." },
    ],
    allDayTours: "All Chichen Itza Day Tours",
    toursAvailable: "day tours available with free cancellation",
    tipTitle: "Best Value Tip",
    tipContent: "Book a Chichen Itza + Cenote combo tour for the best value. You get both experiences in one day — typically saving $20-30 compared to booking separately. Our most popular combo includes Cenote Ik Kil.",
    infoTitle: "Departure Cities",
    infoContent: "Day tours depart daily from Cancún, Playa del Carmen, Tulum, and all Riviera Maya resorts. Hotel pickup is included in all tours. Choose your departure city when booking.",
    dayToursByCity: "Day Tours by Departure City",
    fromCities: ["From Cancún", "From Playa del Carmen", "From Tulum", "From Riviera Maya", "From Mérida"],
    reviewsTitle: "Day Tour Reviews",
    faqTitle: "Day Tour FAQs",
    faqSubtitle: "Common questions about Chichen Itza day tours",
    exploreMore: "Explore More Tours",
    links: [
      { label: "Private Tours", href: "/tours/private-tours" },
      { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
      { label: "Cenote Tours", href: "/tours/cenote-tours" },
      { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
      { label: "What to Bring", href: "/guide/what-to-bring" },
      { label: "All Tours", href: "/tours" },
    ],
  };

  const meta = getPageMeta({
    title: c.seoTitle,
    description: c.seoDesc,
    canonical: "/tours/day-tours",
    locale,
    jsonLd: [
      createFAQSchema(dayToursFAQs),
      createBreadcrumbSchema([
        { name: locale === "es" ? "Inicio" : "Home", url: "/" },
        { name: "Tours", url: "/tours" },
        { name: locale === "es" ? "Tours de Día" : "Day Tours" },
      ]),
    ],
  });

  const chipIcons = [Clock, Utensils, Droplets, Camera];
  const includedIcons = [Sun, Utensils, Droplets, Users];
  const fromCityHrefs = ["/tours-from/cancun", "/tours-from/playa-del-carmen", "/tours-from/tulum", "/tours-from/riviera-maya", "/tours-from/merida"];

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tours", href: "/tours" }, { label: locale === "es" ? "Tours de Día" : "Day Tours" }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-accent text-accent" />))}
              <span className="ml-2 text-sm text-muted-foreground">{c.rating}</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">{c.h1}</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">{c.subtitle}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {c.chips.map((item, i) => {
                const Icon = chipIcons[i];
                return (
                  <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                    <Icon className="h-4 w-4 text-primary" />{item.text}
                  </span>
                );
              })}
            </div>
            <Button variant="cta" size="lg" asChild>
              <a href="#tours">{c.cta} <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">{c.intro1}</p>
          <p className="text-muted-foreground leading-relaxed mb-4">{c.intro2}</p>
          <p className="text-muted-foreground leading-relaxed mb-6">{c.intro3}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/tours/private-tours" className="text-primary hover:underline">{locale === "es" ? "Tours Privados →" : "Private Tours →"}</Link>
            <Link to="/tours/sunrise-tours" className="text-primary hover:underline">{locale === "es" ? "Tours al Amanecer →" : "Sunrise Tours →"}</Link>
            <Link to="/tours/cenote-tours" className="text-primary hover:underline">{locale === "es" ? "Combos con Cenotes →" : "Cenote Combos →"}</Link>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">{c.whatsIncluded}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {c.includedItems.map((item, i) => {
              const Icon = includedIcons[i];
              return (
                <div key={i} className="bg-card rounded-lg p-6 border border-border text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">{c.allDayTours}</h2>
          <p className="text-center text-muted-foreground mb-8">{dayTours.length} {c.toursAvailable}</p>
          <TourFilters onFilterChange={setFilters} tourCount={filteredTours.length} className="mb-6" />
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground mb-4">{t("filter.noMatch")}</p>
              <Button variant="outline" onClick={() => setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })}>{t("filter.clearAll")}</Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container max-w-3xl">
          <TipBox type="tip" title={c.tipTitle} content={c.tipContent} />
          <div className="mt-6">
            <TipBox type="info" title={c.infoTitle} content={c.infoContent} />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">{c.dayToursByCity}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {c.fromCities.map((label, i) => (
              <Button key={fromCityHrefs[i]} variant="outline" className="w-full" asChild>
                <Link to={fromCityHrefs[i]}>{label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <ReviewGrid reviews={getReviewsByTourCategory("day-tour")} limit={3} title={c.reviewsTitle} showAllLink />
        </div>
      </section>

      <FAQSection faqs={dayToursFAQs} title={c.faqTitle} subtitle={c.faqSubtitle} />
      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">{c.exploreMore}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {c.links.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DayToursPage;
