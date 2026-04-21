import LocaleLink from "@/components/LocaleLink";
import { MapPin, Clock, Car, Star, ChevronRight, Shield, Calendar, Palmtree, Sun } from "lucide-react";
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
import { tulumFAQs, tulumFAQsEs, tulumPageContent, tulumPageContentEs } from "@/lib/locationData";
import { locationSchemas } from "@/lib/schema";
import { locationImages } from "@/lib/tourImages";
import { useState, useMemo } from "react";
import { useLocale } from "@/lib/i18n/useLocale";
import type { Tour } from "@/types/tour";

const location = getLocationBySlug("tulum")!;

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
  const { locale } = useLocale();
  const isEs = locale === "es";
  const faqs = isEs ? tulumFAQsEs : tulumFAQs;
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

  const c = isEs ? {
    metaTitle: "Tours a Chichén Itzá desde Tulum — Excursiones y Paquetes 2026",
    metaDesc: "Tours a Chichén Itzá desde Tulum. Compara dos experiencias mayas increíbles. Transporte, guía, cenote y almuerzo incluidos. Reserva hoy.",
    canonical: "/es/tours-desde/tulum",
    breadcrumb: "Tours desde Tulum",
    breadcrumbHome: "Inicio",
    rating: "4.8/5 de 1,200+ viajeros",
    h1: "Tours a Chichén Itzá desde Tulum — Excursiones y Paquetes 2026",
    heroDesc: "¡Compara dos experiencias mayas increíbles! Visita Chichén Itzá desde Tulum y regresa a la hermosa costa caribeña al atardecer.",
    badges: [
      { text: location.driveTime + " en auto" },
      { text: location.distanceToChichen },
      { text: "Salidas diarias" },
      { text: "De vuelta para el atardecer" },
    ],
    viewAll: "Ver Todos los Tours",
    getQuote: "Cotización Personalizada",
    whyBookTitle: "¿Por Qué Reservar desde Tulum?",
    twoSitesTitle: "Dos Sitios UNESCO, Un Viaje",
    twoSitesContent: "Tulum y Chichén Itzá ofrecen experiencias mayas completamente diferentes. Las dramáticas ruinas de Tulum en acantilados dan al turquesa Caribe, mientras que las masivas pirámides de Chichén Itzá muestran la maestría arquitectónica maya. Visitar ambos te da una imagen completa de esta fascinante civilización.",
    intro1: (
      <p className="text-muted-foreground leading-relaxed text-lg">
        Experimenta lo mejor de ambos mundos con <strong>tours a Chichén Itzá desde Tulum</strong>. Mientras Tulum ofrece impresionantes ruinas costeras mayas con vista al Caribe, Chichén Itzá exhibe las masivas pirámides del interior que le ganaron su lugar como una de las Nuevas Siete Maravillas del Mundo.
      </p>
    ),
    intro2: (
      <p className="text-muted-foreground leading-relaxed">
        Ubicado a aproximadamente 95 millas ({location.driveTime}) de Tulum, Chichén Itzá es una excelente excursión de un día. Nuestros tours están diseñados para llegar temprano, antes de que lleguen las multitudes de <LocaleLink to="/tours-from/cancun" className="text-primary hover:underline">Cancún</LocaleLink>, dándote tiempo para explorar el sitio arqueológico y un refrescante cenote.
      </p>
    ),
    intro3: (
      <p className="text-muted-foreground leading-relaxed">
        La atmósfera bohemia y eco-consciente de Tulum se extiende a nuestros tours. Elige entre{" "}
        <LocaleLink to="/tours/private-tours" className="text-primary hover:underline">tours privados</LocaleLink>,{" "}
        <LocaleLink to="/tour-types/small-group" className="text-primary hover:underline">experiencias en grupos pequeños</LocaleLink>, o{" "}
        <LocaleLink to="/tours/sunrise-tours" className="text-primary hover:underline">acceso al amanecer</LocaleLink>. Regresa a las hermosas playas de Tulum por la tarde.
      </p>
    ),
    toursTitle: "Mejores Tours a Chichén Itzá desde Tulum",
    toursSubtitle: `${allTulumTours.length} tours disponibles con recogida en hotel desde Tulum`,
    noMatch: "Ningún tour coincide con tus filtros.",
    clearFilters: "Borrar Filtros",
    expectTitle: "Qué Esperar en Tu Tour de Tulum a Chichén Itzá",
    expectSubtitle: "Itinerario típico de un tour de día desde Tulum",
    includedTitle: "Qué Incluye",
    includedItems: [
      "Transporte con aire acondicionado desde tu hotel",
      "Guía maya experto (bilingüe)",
      "Todas las entradas a Chichén Itzá",
      "Parada para nadar en cenote sagrado",
      "Almuerzo buffet yucateco tradicional",
      "Agua embotellada durante todo el día",
    ],
    bringTitle: "Qué Llevar",
    bringItems: [
      "Zapatos cómodos para caminar",
      "Protector solar biodegradable (para cenotes)",
      "Traje de baño y toalla para cenote",
      "Cámara para fotos",
      "Efectivo para propinas y recuerdos",
      "Capas ligeras para la mañana temprana",
    ],
    compTitle: "Tour Guiado vs. Conducir desde Tulum",
    tipTitle: "Consejo Pro: Ahorra Tiempo para la Playa",
    tipContent: "Un tour guiado maneja toda la logística para que puedas relajarte en el viaje. La mayoría de los tours desde Tulum regresan a las 4:30 PM — justo a tiempo para disfrutar del famoso atardecer de Tulum desde la playa.",
    bestTimeTitle: "Mejor Época para Visitar Chichén Itzá desde Tulum",
    bestSeason: "Mejor Temporada",
    bestSeasonDesc: (<><strong className="text-foreground">Noviembre–Abril</strong> ofrece clima ideal con temperaturas cómodas. La temporada de lluvias (May-Oct) trae lluvias vespertinas pero también menos multitudes y precios más bajos.</>),
    bestTime: "Mejor Hora del Día",
    bestTimeDesc: (<><strong className="text-foreground">Sal a las 6:30 AM</strong> para llegar antes de las 9 AM. Esto evita el calor del mediodía y las multitudes de cruceros. Nuestros{" "}<LocaleLink to="/tours/sunrise-tours" className="text-primary hover:underline">tours al amanecer</LocaleLink>{" "}ofrecen la experiencia más mágica.</>),
    multiDayTitle: "Consejo Multi-Día",
    multiDayContent: "Si te quedas varios días en Tulum, considera un tour al amanecer para fotografía o un tour vespertino que incluya el show de luces de Chichén Itzá.",
    readGuide: "Leer Guía Completa",
    mapTitle: "Ruta de Tulum a Chichén Itzá",
    mapDesc: "El viaje de Tulum a Chichén Itzá te lleva por el pintoresco campo yucateco, pasando por pueblos mayas tradicionales y paisaje selvático. La moderna autopista asegura un viaje suave y cómodo de 2-2.5 horas.",
    comboTitle: "Tours Combo Populares desde Tulum",
    comboDesc: "Maximiza tu día con estas combinaciones populares que incluyen Chichén Itzá con otras atracciones de Yucatán:",
    comboTours: [
      { title: "Chichén Itzá + Cenote Ik Kil", price: 99, description: "Explora las ruinas y nada en el icónico Cenote Ik Kil. Incluye almuerzo buffet.", duration: "12 horas", link: "/combo-tours/cenote-ik-kil" },
      { title: "Chichén Itzá + Ruinas de Cobá", price: 119, description: "Dos magníficos sitios mayas en un día. Sube a la pirámide Nohoch Mul en Cobá.", duration: "14 horas", link: "/combo-tours/coba-ruins" },
      { title: "Chichén Itzá + Valladolid", price: 89, description: "Ruinas antiguas junto con la encantadora ciudad colonial y sus calles coloridas.", duration: "13 horas", link: "/tours/day-tours" },
      { title: "Explorador de Yucatán Multi-Día", price: 299, description: "Experiencia inmersiva de 3 días: Chichén Itzá, Uxmal, Mérida, cenotes y más.", duration: "3 días", link: "/combo-tours/multi-day-yucatan" },
    ],
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Preguntas comunes sobre tours a Chichén Itzá desde Tulum",
    exploreMore: "Explora Más Tours a Chichén Itzá",
    links: [
      { label: "Desde Cancún", href: "/tours-from/cancun" },
      { label: "Desde Playa del Carmen", href: "/tours-from/playa-del-carmen" },
      { label: "Desde Riviera Maya", href: "/tours-from/riviera-maya" },
      { label: "Desde Mérida", href: "/tours-from/merida" },
      { label: "Tours Privados", href: "/tours/private-tours" },
      { label: "Tours al Amanecer", href: "/tours/sunrise-tours" },
      { label: "Tours de Cenotes", href: "/tours/cenote-tours" },
      { label: "Tours Económicos", href: "/tour-types/budget" },
      { label: "Tours Familiares", href: "/tour-types/family-friendly" },
      { label: "Tours de Lujo", href: "/tour-types/luxury" },
      { label: "Mejor Época para Visitar", href: "/guide/best-time-to-visit" },
      { label: "Qué Llevar", href: "/guide/what-to-bring" },
      { label: "Precios de Entrada", href: "/guide/entrance-fees" },
      { label: "Cómo Llegar", href: "/guide/how-to-get-there" },
      { label: "Todos los Tours", href: "/tours" },
    ],
  } : {
    metaTitle: location.metaTitle,
    metaDesc: location.metaDescription,
    canonical: "/tours-from/tulum",
    breadcrumb: "Tours from Tulum",
    breadcrumbHome: "Home",
    rating: "4.8/5 from 1,200+ travelers",
    h1: "Chichen Itza Tours from Tulum — Day Trips & Packages 2026",
    heroDesc: "Compare two incredible Mayan experiences! Visit Chichen Itza from Tulum and return to the beautiful Caribbean coast by sunset.",
    badges: [
      { text: location.driveTime + " drive" },
      { text: location.distanceToChichen },
      { text: "Daily departures" },
      { text: "Back for sunset" },
    ],
    viewAll: "View All Tours",
    getQuote: "Get Custom Quote",
    whyBookTitle: "Why Book from Tulum?",
    twoSitesTitle: "Two UNESCO Sites, One Trip",
    twoSitesContent: "Tulum and Chichen Itza offer completely different Mayan experiences. Tulum's dramatic clifftop ruins overlook the turquoise Caribbean, while Chichen Itza's massive inland pyramids showcase Mayan architectural mastery. Visiting both gives you a complete picture of this fascinating civilization.",
    intro1: (
      <p className="text-muted-foreground leading-relaxed text-lg">
        Experience the best of both worlds with <strong>Chichen Itza tours from Tulum</strong>. While Tulum offers stunning coastal Mayan ruins overlooking the Caribbean, Chichen Itza showcases the massive inland pyramids that earned its place as one of the New Seven Wonders of the World.
      </p>
    ),
    intro2: (
      <p className="text-muted-foreground leading-relaxed">
        Located approximately 95 miles ({location.driveTime}) from Tulum, Chichen Itza makes an excellent day trip. Our tours are designed to get you there early, before the crowds arrive from <LocaleLink to="/tours-from/cancun" className="text-primary hover:underline">Cancún</LocaleLink>, giving you time to explore both the archaeological site and a refreshing cenote.
      </p>
    ),
    intro3: (
      <p className="text-muted-foreground leading-relaxed">
        Tulum's bohemian atmosphere and eco-conscious vibe extend to our tours. Choose from{" "}
        <LocaleLink to="/tours/private-tours" className="text-primary hover:underline">private tours</LocaleLink>,{" "}
        <LocaleLink to="/tour-types/small-group" className="text-primary hover:underline">small group experiences</LocaleLink>, or{" "}
        <LocaleLink to="/tours/sunrise-tours" className="text-primary hover:underline">sunrise access</LocaleLink>. Return to Tulum's beautiful beaches by late afternoon for the perfect end to your day.
      </p>
    ),
    toursTitle: "Top Chichen Itza Tours Departing from Tulum",
    toursSubtitle: `${allTulumTours.length} tours available with hotel pickup from Tulum`,
    noMatch: "No tours match your filters.",
    clearFilters: "Clear All Filters",
    expectTitle: "What to Expect on Your Tulum to Chichen Itza Tour",
    expectSubtitle: "A typical day tour timeline from Tulum",
    includedTitle: "What's Included",
    includedItems: [
      "Air-conditioned transport from your hotel",
      "Expert Mayan guide (bilingual)",
      "All entrance fees to Chichen Itza",
      "Sacred cenote swimming stop",
      "Traditional Yucatecan buffet lunch",
      "Bottled water throughout the day",
    ],
    bringTitle: "What to Bring",
    bringItems: [
      "Comfortable walking shoes",
      "Biodegradable sunscreen (for cenotes)",
      "Swimsuit and towel for cenote",
      "Camera for photos",
      "Cash for tips and souvenirs",
      "Light layers for early morning",
    ],
    compTitle: "Guided Tour vs. Self-Drive from Tulum",
    tipTitle: "Pro Tip: Save Time for the Beach",
    tipContent: "A guided tour handles all the logistics so you can relax on the journey. Most Tulum tours return by 4:30 PM — just in time to catch Tulum's famous sunset from the beach.",
    bestTimeTitle: "Best Time to Visit Chichen Itza from Tulum",
    bestSeason: "Best Season",
    bestSeasonDesc: (<><strong className="text-foreground">November–April</strong> offers ideal weather with comfortable temperatures. The rainy season (May-Oct) brings afternoon showers but also smaller crowds and lower prices.</>),
    bestTime: "Best Time of Day",
    bestTimeDesc: (<><strong className="text-foreground">Depart by 6:30 AM</strong> to arrive before 9 AM. This beats the midday heat and afternoon crowds from cruise ships. Our{" "}<LocaleLink to="/tours/sunrise-tours" className="text-primary hover:underline">sunrise tours</LocaleLink>{" "}offer the most magical experience.</>),
    multiDayTitle: "Multi-Day Tip",
    multiDayContent: "If you're staying multiple days in Tulum, consider a sunrise tour for photography or an afternoon tour that includes the Chichen Itza light show.",
    readGuide: "Read Full Guide",
    mapTitle: "Tulum to Chichen Itza Route",
    mapDesc: "The journey from Tulum to Chichen Itza takes you through scenic Yucatán countryside, passing traditional Mayan villages and jungle landscape. The modern highway ensures a smooth, comfortable 2-2.5 hour ride.",
    comboTitle: "Popular Combo Tours from Tulum",
    comboDesc: "Maximize your day with these popular combinations that pair Chichen Itza with other Yucatán attractions:",
    comboTours: [
      { title: "Chichen Itza + Cenote Ik Kil", price: 99, description: "Explore the ruins and swim in the iconic Cenote Ik Kil. Includes buffet lunch.", duration: "12 hours", link: "/combo-tours/cenote-ik-kil" },
      { title: "Chichen Itza + Cobá Ruins", price: 119, description: "Two magnificent Mayan sites in one day. Climb the Nohoch Mul pyramid at Cobá.", duration: "14 hours", link: "/combo-tours/coba-ruins" },
      { title: "Chichen Itza + Valladolid", price: 89, description: "Ancient ruins paired with the charming colonial city and its colorful streets.", duration: "13 hours", link: "/tours/day-tours" },
      { title: "Multi-Day Yucatán Explorer", price: 299, description: "3-day immersive experience: Chichen Itza, Uxmal, Mérida, cenotes, and more.", duration: "3 days", link: "/combo-tours/multi-day-yucatan" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Common questions about Chichen Itza tours from Tulum",
    exploreMore: "Explore More Chichen Itza Tours",
    links: [
      { label: "From Cancún", href: "/tours-from/cancun" },
      { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
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
    ],
  };

  const meta = getPageMeta({
    title: c.metaTitle,
    description: c.metaDesc,
    canonical: c.canonical,
    locale,
    jsonLd: [
      createFAQSchema(faqs),
      createBreadcrumbSchema([
        { name: c.breadcrumbHome, url: isEs ? "/es/" : "/" },
        { name: c.breadcrumb },
      ]),
      locationSchemas["tulum"],
    ],
  });

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={locationImages["tulum"]} alt="Tulum Mayan ruins overlooking the Caribbean Sea" className="w-full h-full object-cover" width={1920} height={1080} loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={[{ label: c.breadcrumb }]} />
          <div className="grid lg:grid-cols-2 gap-8 items-center mt-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-accent text-accent" />))}</div>
                <span className="text-sm text-muted-foreground">{c.rating}</span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">{c.h1}</h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl">{c.heroDesc}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {[Car, MapPin, Calendar, Palmtree].map((Icon, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border"><Icon className="h-4 w-4 text-primary" />{c.badges[i].text}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="cta" size="lg" asChild><a href="#tours">{c.viewAll} <ChevronRight className="h-5 w-5" /></a></Button>
                <Button variant="outline" size="lg" asChild><LocaleLink to="/practical/contact">{c.getQuote}</LocaleLink></Button>
              </div>
            </div>
            <div className="bg-card rounded-xl shadow-card-hover p-6 border border-border">
              <h2 className="font-heading font-semibold text-xl mb-4">{c.whyBookTitle}</h2>
              <div className="space-y-4">
                {(isEs ? tulumPageContentEs.whyBook : tulumPageContent.whyBook).map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center"><Shield className="h-4 w-4 text-secondary" /></div>
                    <div><h3 className="font-semibold text-sm">{item.title}</h3><p className="text-sm text-muted-foreground">{item.description}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border"><TrustBadges variant="compact" /></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          <div>
            <section className="prose prose-neutral max-w-none mb-12">{c.intro1}{c.intro2}{c.intro3}</section>
            <div className="mb-12"><TipBox type="info" title={c.twoSitesTitle} content={c.twoSitesContent} /></div>

            <section id="tours" className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">{c.toursTitle}</h2>
              <p className="text-muted-foreground mb-6">{c.toursSubtitle}</p>
              <TourFilters onFilterChange={setFilters} tourCount={filteredTours.length} className="mb-6" />
              {filteredTours.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{filteredTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}</div>
              ) : (
                <div className="text-center py-12 bg-card rounded-lg border border-border">
                  <p className="text-muted-foreground mb-4">{c.noMatch}</p>
                  <Button variant="outline" onClick={() => setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })}>{c.clearFilters}</Button>
                </div>
              )}
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">{c.expectTitle}</h2>
              <p className="text-muted-foreground mb-8">{c.expectSubtitle}</p>
              <div className="space-y-0">
                {(isEs ? tulumPageContentEs.timeline : tulumPageContent.timeline).map((step, i) => (<TimelineItem key={i} time={step.time} title={step.title} description={step.description} isLast={i === tulumPageContent.timeline.length - 1} />))}
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <InfoBox title={c.includedTitle} icon="✓" variant="success" items={c.includedItems} />
                <InfoBox title={c.bringTitle} icon="🎒" variant="info" items={c.bringItems} />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">{c.compTitle}</h2>
              <ComparisonTable headers={isEs ? ["Tour Guiado", "Conducir"] : ["Guided Tour", "Self-Drive"]} highlightColumn={1} recommendedLabel={isEs ? "Recomendado" : "Recommended"} rows={(isEs ? tulumPageContentEs.comparisonTable : tulumPageContent.comparisonTable).rows.map((row) => ({ label: row[0], values: [row[1], row[2]] }))} />
              <div className="mt-6"><TipBox type="tip" title={c.tipTitle} content={c.tipContent} /></div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">{c.bestTimeTitle}</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center gap-2 mb-3"><Sun className="h-5 w-5 text-accent" /><h3 className="font-heading font-semibold">{c.bestSeason}</h3></div>
                  <p className="text-sm text-muted-foreground">{c.bestSeasonDesc}</p>
                </div>
                <div className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center gap-2 mb-3"><Clock className="h-5 w-5 text-primary" /><h3 className="font-heading font-semibold">{c.bestTime}</h3></div>
                  <p className="text-sm text-muted-foreground">{c.bestTimeDesc}</p>
                </div>
              </div>
              <TipBox type="info" title={c.multiDayTitle} content={c.multiDayContent} />
              <div className="mt-4"><Button variant="outline" asChild><LocaleLink to="/guide/best-time-to-visit">{c.readGuide} <ChevronRight className="h-4 w-4" /></LocaleLink></Button></div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">{c.mapTitle}</h2>
              <MapEmbed title={c.mapTitle} from="Tulum, Mexico" to="Chichen Itza, Mexico" />
              <p className="text-sm text-muted-foreground mt-3">{c.mapDesc}</p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">{c.comboTitle}</h2>
              <p className="text-muted-foreground mb-6">{c.comboDesc}</p>
              <div className="grid sm:grid-cols-2 gap-5">{c.comboTours.map((combo) => (<ComboTourCard key={combo.title} {...combo} />))}</div>
            </section>

            <section className="mb-12"><FAQSection faqs={faqs} title={c.faqTitle} subtitle={c.faqSubtitle} /></section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6"><QuickBookingForm /><PopularToursWidget departureCity="tulum" /><CTABox /><TrustBadges variant="compact" /></div>
          </aside>
        </div>
      </div>

      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">{c.exploreMore}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {c.links.map((link) => (<LocaleLink key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</LocaleLink>))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TulumToursPage;
