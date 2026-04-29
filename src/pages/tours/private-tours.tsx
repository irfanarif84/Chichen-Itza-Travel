import { LocaleLink as Link } from "@/components/LocaleLink";
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
import { useLocalizedFAQs } from "@/hooks/useFAQLocale";
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

const PrivateToursPage = () => {
  const { locale } = useLocale();
  const isEs = locale === "es";
  const { getFAQs } = useLocalizedFAQs();
  const privateToursFAQs = getFAQs("privateTours");

  const c = isEs ? {
    metaTitle: "Tours Privados a Chichén Itzá – VIP y Sin Filas 2026",
    metaDesc: "Tours privados exclusivos a Chichén Itzá con guía personal, transporte de lujo y acceso sin filas. Personaliza tu itinerario. Desde $189.",
    breadcrumb: "Tours Privados",
    rating: "4.9/5 de más de 1,200 viajeros VIP",
    h1: "Tours Privados a Chichén Itzá – Acceso VIP Sin Filas",
    subtitle: "Tu propio arqueólogo guía, transporte de lujo, horario flexible y entrada prioritaria. La experiencia definitiva en Chichén Itzá.",
    badges: [
      { icon: Crown, text: "Sin filas" },
      { icon: Users, text: "Guía privado" },
      { icon: Car, text: "SUV de lujo" },
      { icon: Clock, text: "Horario flexible" },
    ],
    cta: "Ver Tours Privados",
    intro1: "Un tour privado a Chichén Itzá es la forma premium de experimentar este Patrimonio Mundial de la UNESCO. A diferencia de los tours grupales con horarios fijos y 15-30 personas, un tour privado es exclusivamente para ti y tu grupo — con un arqueólogo guía dedicado, vehículo de lujo y la libertad de explorar a tu propio ritmo.",
    intro2: "Nuestros tours privados incluyen entrada VIP sin filas, lo que significa que pasas directamente por una puerta prioritaria. Tu guía personal — un arqueólogo certificado fluido en tu idioma — revela secretos e historias que los tours grupales simplemente no tienen tiempo de contar.",
    intro3: "Perfecto para parejas, familias, fotógrafos y cualquier persona que desee una experiencia íntima y sin prisas. Personaliza tu itinerario para incluir cenotes ocultos, la ciudad colonial de",
    comparisonTitle: "Tour Privado vs. Tour Grupal",
    compHeaders: ["Tour Privado", "Tour Grupal"],
    compRows: [
      { label: "Tamaño del grupo", values: ["Solo tu grupo (1-8)", "12-30 viajeros"] },
      { label: "Guía", values: ["Arqueólogo personal", "Guía grupal compartido"] },
      { label: "Horario", values: ["Tú eliges la hora de salida", "Salida fija 6-7 AM"] },
      { label: "Entrada", values: ["VIP sin filas", "Cola de admisión general"] },
      { label: "Transporte", values: ["SUV/van de lujo", "Autobús turístico"] },
      { label: "Ritmo", values: ["Totalmente flexible", "Itinerario fijo"] },
      { label: "Personalización", values: ["Agregar paradas, extender tiempo", "Sin cambios posibles"] },
      { label: "Precio", values: ["Desde $189/persona", "Desde $49/persona"] },
    ],
    tipTitle: "Ideal para Familias y Fotógrafos",
    tipContent: "Los tours privados son ideales si viajas con niños pequeños (ritmo flexible), fotógrafos serios (tiempo extra para fotos en hora dorada) o cualquier persona que valore una experiencia personalizada y sin prisas.",
    specialTitle: "Qué Hace Especiales Nuestros Tours Privados",
    specialItems: [
      { icon: Crown, title: "Entrada Prioritaria", desc: "Salta la fila de admisión general y entra por la puerta VIP. Ahorra 30-60 minutos en temporada alta." },
      { icon: Sparkles, title: "Arqueólogo Personal", desc: "Tu guía tiene años de experiencia en civilización maya y adapta el tour a tus intereses." },
      { icon: Car, title: "Transporte de Lujo", desc: "Viaja en un SUV o van privada con AC, WiFi, bebidas premium y asientos cómodos." },
      { icon: Shield, title: "Total Flexibilidad", desc: "Elige tu hora de salida, agrega paradas, extiende la exploración — tu tour, tus reglas." },
    ],
    toursTitle: "Todos los Tours Privados a Chichén Itzá",
    toursSuffix: "tours privados con acceso VIP",
    reviewsTitle: "Reseñas de Tours Privados",
    faqTitle: "Preguntas Frecuentes – Tours Privados",
    faqSubtitle: "Preguntas comunes sobre tours privados a Chichén Itzá",
    exploreTitle: "Explorar Más Tours",
    exploreLinks: [
      { label: "Tours de un Día", href: "/tours/day-tours" },
      { label: "Tours al Amanecer", href: "/tours/sunrise-tours" },
      { label: "Tours con Cenote", href: "/tours/cenote-tours" },
      { label: "Desde Cancún", href: "/tours-from/cancun" },
      { label: "Desde Playa del Carmen", href: "/tours-from/playa-del-carmen" },
      { label: "Todos los Tours", href: "/tours" },
    ],
    noMatch: "Ningún tour coincide con tus filtros.",
    clearFilters: "Limpiar Filtros",
  } : {
    metaTitle: "Private Chichen Itza Tours – VIP & Skip the Line 2026",
    metaDesc: "Exclusive private Chichen Itza tours with personal guide, luxury transport & skip-the-line access. Customize your itinerary. From $189.",
    breadcrumb: "Private Tours",
    rating: "4.9/5 average from 1,200+ VIP travelers",
    h1: "Private Chichen Itza Tours – VIP Skip-the-Line Access",
    subtitle: "Your own personal archaeologist guide, luxury transport, flexible schedule, and priority entrance. The ultimate Chichen Itza experience.",
    badges: [
      { icon: Crown, text: "Skip the line" },
      { icon: Users, text: "Private guide" },
      { icon: Car, text: "Luxury SUV" },
      { icon: Clock, text: "Flexible schedule" },
    ],
    cta: "Browse Private Tours",
    intro1: "A private Chichen Itza tour is the premium way to experience this UNESCO World Heritage Site. Unlike group tours with fixed schedules and 15-30 people, a private tour is exclusively for you and your party — with a dedicated archaeologist guide, luxury vehicle, and the freedom to explore at your own pace.",
    intro2: "Our private tours include VIP skip-the-line entrance, meaning you bypass the general admission queue and enter through a priority gate. Your personal guide — a certified archaeologist fluent in your language — reveals secrets and stories that group tours simply don't have time for.",
    intro3: "Perfect for couples, families, photographers, and anyone who wants an intimate, unhurried experience. Customize your itinerary to include hidden cenotes, the colonial town of",
    comparisonTitle: "Private Tour vs. Group Tour",
    compHeaders: ["Private Tour", "Group Tour"],
    compRows: [
      { label: "Group Size", values: ["Just your party (1-8)", "12-30 travelers"] },
      { label: "Guide", values: ["Personal archaeologist", "Shared group guide"] },
      { label: "Schedule", values: ["You choose departure time", "Fixed 6-7 AM departure"] },
      { label: "Entrance", values: ["VIP skip-the-line", "General admission queue"] },
      { label: "Transport", values: ["Luxury SUV/van", "Tour bus"] },
      { label: "Pace", values: ["Fully flexible", "Fixed itinerary"] },
      { label: "Customization", values: ["Add stops, extend time", "No changes possible"] },
      { label: "Price", values: ["From $189/person", "From $49/person"] },
    ],
    tipTitle: "Best for Families & Photographers",
    tipContent: "Private tours are ideal if you're traveling with young children (flexible pacing), serious photographers (extra time for golden hour shots), or anyone who values a personalized, unhurried experience.",
    specialTitle: "What Makes Our Private Tours Special",
    specialItems: [
      { icon: Crown, title: "Priority Entrance", desc: "Skip the general admission line and enter through the VIP gate. Save 30-60 minutes during peak season." },
      { icon: Sparkles, title: "Personal Archaeologist", desc: "Your guide has years of expertise in Mayan civilization and tailors the tour to your interests." },
      { icon: Car, title: "Luxury Transport", desc: "Travel in a private SUV or van with AC, WiFi, premium drinks, and comfortable seating." },
      { icon: Shield, title: "Full Flexibility", desc: "Choose your departure time, add stops, extend exploration — your tour, your rules." },
    ],
    toursTitle: "All Private Chichen Itza Tours",
    toursSuffix: "private tours with VIP access",
    reviewsTitle: "Private Tour Reviews",
    faqTitle: "Private Tour FAQs",
    faqSubtitle: "Common questions about private Chichen Itza tours",
    exploreTitle: "Explore More Tours",
    exploreLinks: [
      { label: "Day Tours", href: "/tours/day-tours" },
      { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
      { label: "Cenote Tours", href: "/tours/cenote-tours" },
      { label: "From Cancún", href: "/tours-from/cancun" },
      { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
      { label: "All Tours", href: "/tours" },
    ],
    noMatch: "No tours match your filters.",
    clearFilters: "Clear All Filters",
  };

  const privateTours = useMemo(() => tours.filter((t) => t.category.includes("private-tours") || t.tourType === "private"), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(privateTours, filters), [privateTours, filters]);

  const itemListItems = privateTours.map((tour) => {
    const es = isEs ? tourTranslationsEs[tour.id] : null;
    return { name: es?.title ?? tour.title, url: isEs ? `/es/tours/${tour.slug}` : `/tours/${tour.slug}` };
  });

  const meta = getPageMeta({
    title: c.metaTitle,
    description: c.metaDesc,
    canonical: "/tours/private-tours",
    locale,
    jsonLd: [
      createFAQSchema(privateToursFAQs),
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: "Tours", url: "/tours" },
        { name: c.breadcrumb },
      ]),
      createItemListSchema({ name: c.metaTitle, url: isEs ? "/es/tours/tours-privados" : "/tours/private-tours", items: itemListItems }),
    ],
  });

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative bg-gradient-to-br from-accent/10 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tours", href: "/tours" }, { label: c.breadcrumb }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-accent text-accent" />))}
              <span className="ml-2 text-sm text-muted-foreground">{c.rating}</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">{c.h1}</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">{c.subtitle}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {c.badges.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                  <item.icon className="h-4 w-4 text-accent" />{item.text}
                </span>
              ))}
            </div>
            <Button variant="cta" size="lg" asChild>
              <a href="#tours">{c.cta} <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            {c.intro1} {isEs
              ? <>Para más sobre el fascinante pasado de Chichén Itzá, consulta nuestra <Link to="/guide/history-and-facts" className="text-primary hover:underline">guía de historia y datos</Link>.</>
              : <>For more on Chichen Itza's fascinating past, see our <Link to="/guide/history-and-facts" className="text-primary hover:underline">history and facts guide</Link>.</>
            }
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {c.intro2} {isEs
              ? <>Consulta los <Link to="/guide/entrance-fees" className="text-primary hover:underline">precios de entrada</Link> para más detalles.</>
              : <>Check <Link to="/guide/entrance-fees" className="text-primary hover:underline">entrance fees</Link> for full pricing details.</>
            }
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {c.intro3}{" "}
            <Link to="/tours/valladolid-tours" className="text-primary hover:underline">Valladolid</Link>{isEs ? ", o las menos conocidas ruinas de " : ", or the lesser-known "}
            <Link to="/tours/ek-balam-tours" className="text-primary hover:underline">Ek Balam</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">{c.comparisonTitle}</h2>
          <div className="max-w-4xl mx-auto">
            <ComparisonTable headers={c.compHeaders} highlightColumn={1} rows={c.compRows} />
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <TipBox type="tip" title={c.tipTitle} content={c.tipContent} />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">{c.specialTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {c.specialItems.map((item, i) => (
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

      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">{c.toursTitle}</h2>
          <p className="text-center text-muted-foreground mb-8">{privateTours.length} {c.toursSuffix}</p>
          <TourFilters onFilterChange={setFilters} tourCount={filteredTours.length} className="mb-6" />
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground mb-4">{c.noMatch}</p>
              <Button variant="outline" onClick={() => setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })}>{c.clearFilters}</Button>
            </div>
          )}
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <ReviewGrid reviews={getReviewsByTourCategory("private")} limit={3} title={c.reviewsTitle} showAllLink />
        </div>
      </section>

      <FAQSection faqs={privateToursFAQs} title={c.faqTitle} subtitle={c.faqSubtitle} />
      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">{c.exploreTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {c.exploreLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateToursPage;
