import LocaleLink from "@/components/LocaleLink";
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
import { playaDelCarmenFAQs, playaDelCarmenFAQsEs, playaDelCarmenPageContent, playaDelCarmenPageContentEs } from "@/lib/locationData";
import { locationSchemas } from "@/lib/schema";
import { locationImages } from "@/lib/tourImages";
import { useState, useMemo } from "react";
import { useLocale } from "@/lib/i18n/useLocale";
import type { Tour } from "@/types/tour";

const location = getLocationBySlug("playa-del-carmen")!;

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
  const { locale } = useLocale();
  const isEs = locale === "es";
  const faqs = isEs ? playaDelCarmenFAQsEs : playaDelCarmenFAQs;
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

  const c = isEs ? {
    metaTitle: "Tours a Chichén Itzá desde Playa del Carmen — Excursiones Premium 2026",
    metaDesc: "Tours a Chichén Itzá desde Playa del Carmen. La ruta más corta (1.5 hrs). Guía certificado, cenote y almuerzo incluidos. Cancelación gratuita.",
    canonical: "/es/tours-desde/playa-del-carmen",
    breadcrumb: "Tours desde Playa del Carmen",
    breadcrumbHome: "Inicio",
    rating: "4.9/5 de 1,800+ viajeros",
    h1: "Tours a Chichén Itzá desde Playa del Carmen — Excursiones Premium 2026",
    heroDesc: `¡La ruta más corta a Chichén Itzá! Solo ${location.driveTime} en auto significa más tiempo explorando la antigua maravilla maya y menos tiempo en carretera.`,
    badges: [
      { text: location.driveTime + " en auto" },
      { text: location.distanceToChichen },
      { text: "Salidas diarias" },
      { text: "Recogida en 5ta Avenida" },
    ],
    viewAll: "Ver Todos los Tours",
    getQuote: "Cotización Personalizada",
    whyBookTitle: "¿Por Qué Reservar desde Playa del Carmen?",
    intro1: (
      <p className="text-muted-foreground leading-relaxed text-lg">
        Embárcate en un viaje inolvidable desde Playa del Carmen a Chichén Itzá, una de las Nuevas Siete Maravillas del Mundo. Ubicado a solo 95 millas al oeste (aproximadamente 1.5 horas), Chichén Itzá es la excursión perfecta desde el vibrante entorno costero de Playa. Nuestros <strong>tours a Chichén Itzá desde Playa del Carmen</strong> ofrecen la combinación ideal de comodidad, educación y aventura.
      </p>
    ),
    intro2: (
      <p className="text-muted-foreground leading-relaxed">
        A diferencia de los tours desde <LocaleLink to="/tours-from/cancun" className="text-primary hover:underline">Cancún (más de 2 horas)</LocaleLink>, la proximidad de Playa del Carmen significa más tiempo explorando las antiguas ruinas mayas y menos tiempo en tránsito. Ya sea que estés en la zona de la Quinta Avenida o en la zona de resorts de Playacar, nuestro servicio de recogida garantiza un inicio sin complicaciones.
      </p>
    ),
    intro3: (
      <p className="text-muted-foreground leading-relaxed">
        Elige entre <LocaleLink to="/tours/private-tours" className="text-primary hover:underline">tours privados</LocaleLink>,{" "}
        <LocaleLink to="/tour-types/small-group" className="text-primary hover:underline">experiencias en grupos pequeños</LocaleLink>, o{" "}
        <LocaleLink to="/tours/sunrise-tours" className="text-primary hover:underline">acceso al amanecer</LocaleLink> para evitar las multitudes y capturar fotos impresionantes de la pirámide El Castillo.
      </p>
    ),
    toursTitle: "Mejores Tours a Chichén Itzá desde Playa del Carmen",
    toursSubtitle: `${allPlayaTours.length} tours disponibles con recogida en hotel desde Playa del Carmen`,
    noMatch: "Ningún tour coincide con tus filtros.",
    clearFilters: "Borrar Filtros",
    expectTitle: "Qué Esperar en Tu Tour de Playa del Carmen a Chichén Itzá",
    expectSubtitle: "Itinerario típico de un tour de día desde Playa del Carmen",
    includedTitle: "Qué Incluye",
    includedItems: [
      "Transporte con aire acondicionado desde tu hotel",
      "Guía arqueólogo bilingüe certificado",
      "Todas las entradas a Chichén Itzá",
      "Baño en cenote con toallas incluidas",
      "Almuerzo buffet yucateco tradicional",
      "Agua embotellada y snacks",
    ],
    bringTitle: "Qué Llevar",
    bringItems: [
      "Zapatos cómodos para caminar",
      "Protector solar y sombrero (sin sombra en el sitio)",
      "Traje de baño y toalla para cenote",
      "Cámara o smartphone",
      "Pesos mexicanos para recuerdos",
      "Chaqueta ligera para lluvia (May-Oct)",
    ],
    compTitle: "Tour Guiado vs. Conducir desde Playa del Carmen",
    tipTitle: "Consejo Pro: Los Tours Guiados Ganan en Valor",
    tipContent: "Aunque conducir puede parecer más barato a primera vista, un tour guiado desde Playa del Carmen ofrece un valor excepcional cuando consideras la experiencia, comodidad y la experiencia sin estrés. Además, puedes relajarte y disfrutar del pintoresco campo yucateco.",
    bestTimeTitle: "Mejor Época para Visitar Chichén Itzá desde Playa del Carmen",
    bestSeason: "Mejor Temporada",
    bestSeasonDesc: (<><strong className="text-foreground">Noviembre–Abril</strong> ofrece clima seco y temperaturas cómodas (24–30°C). Mayo–Octubre es temporada de lluvias con lluvias vespertinas, pero las visitas matutinas suelen estar secas y las multitudes son 30% menores.</>),
    bestTime: "Mejor Hora del Día",
    bestTimeDesc: (<><strong className="text-foreground">Temprano en la mañana (7–9 AM)</strong> — Temperaturas más frescas, luz dorada para fotos y menos turistas. Nuestros{" "}<LocaleLink to="/tours/sunrise-tours" className="text-primary hover:underline">tours al amanecer</LocaleLink>{" "}salen de Playa a las 5:30 AM.</>),
    weekdayTitle: "Ventaja entre Semana",
    weekdayContent: "Los días entre semana tienen 30–40% menos visitantes que los fines de semana. Combina una salida temprana con un tour de martes a jueves para la mejor experiencia.",
    readGuide: "Leer Guía Completa",
    mapTitle: "Ruta de Playa del Carmen a Chichén Itzá",
    mapDesc: "El viaje te lleva a través de la pintoresca Península de Yucatán, pasando por pueblos mayas tradicionales y paisaje selvático. La moderna autopista de cuota asegura un viaje suave y seguro de 1.5 horas.",
    comboTitle: "Tours Combo Populares desde Playa del Carmen",
    comboDesc: "Maximiza tu día con estas combinaciones populares que incluyen Chichén Itzá con otras atracciones de Yucatán:",
    comboTours: [
      { title: "Chichén Itzá + Cenote Ik Kil", price: 99, description: "Explora las ruinas y nada en el icónico Cenote Ik Kil. Incluye almuerzo buffet.", duration: "11 horas", link: "/combo-tours/cenote-ik-kil" },
      { title: "Chichén Itzá + Ruinas de Cobá", price: 119, description: "Visita dos magníficos sitios arqueológicos mayas en un día. Sube a la pirámide Nohoch Mul.", duration: "13 horas", link: "/combo-tours/coba-ruins" },
      { title: "Chichén Itzá + Valladolid", price: 89, description: "Combina ruinas antiguas con la encantadora ciudad colonial. Explora la Calzada de los Frailes.", duration: "12 horas", link: "/tours/day-tours" },
      { title: "Explorador de Yucatán Multi-Día", price: 299, description: "Experiencia inmersiva de 3 días: Chichén Itzá, Uxmal, Mérida, cenotes y más.", duration: "3 días", link: "/combo-tours/multi-day-yucatan" },
    ],
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Preguntas comunes sobre tours a Chichén Itzá desde Playa del Carmen",
    exploreMore: "Explora Más Tours a Chichén Itzá",
    links: [
      { label: "Desde Cancún", href: "/tours-from/cancun" },
      { label: "Desde Tulum", href: "/tours-from/tulum" },
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
    canonical: "/tours-from/playa-del-carmen",
    breadcrumb: "Tours from Playa del Carmen",
    breadcrumbHome: "Home",
    rating: "4.9/5 from 1,800+ travelers",
    h1: "Chichen Itza Tours from Playa del Carmen — Premium Day Trips 2026",
    heroDesc: `The shortest route to Chichen Itza! Just ${location.driveTime} drive means more time exploring the ancient Mayan wonder and less time on the road.`,
    badges: [
      { text: location.driveTime + " drive" },
      { text: location.distanceToChichen },
      { text: "Daily departures" },
      { text: "5th Ave pickup" },
    ],
    viewAll: "View All Tours",
    getQuote: "Get Custom Quote",
    whyBookTitle: "Why Book from Playa del Carmen?",
    intro1: (
      <p className="text-muted-foreground leading-relaxed text-lg">
        Embark on an unforgettable journey from Playa del Carmen to Chichen Itza, one of the New Seven Wonders of the World. Located just 95 miles west (approximately 1.5 hours), Chichen Itza is the perfect day trip from Playa's vibrant coastal setting. Our expertly curated <strong>Chichen Itza tours from Playa del Carmen</strong> offer the ideal blend of convenience, education, and adventure.
      </p>
    ),
    intro2: (
      <p className="text-muted-foreground leading-relaxed">
        Unlike tours from <LocaleLink to="/tours-from/cancun" className="text-primary hover:underline">Cancún (2+ hours away)</LocaleLink>, Playa del Carmen's proximity means more time exploring the ancient Mayan ruins and less time in transit. Whether you're staying in the bustling Quinta Avenida area or the peaceful Playacar resort zone, our pickup service ensures a hassle-free start to your Chichen Itza adventure.
      </p>
    ),
    intro3: (
      <p className="text-muted-foreground leading-relaxed">
        Choose from <LocaleLink to="/tours/private-tours" className="text-primary hover:underline">private tours</LocaleLink>,{" "}
        <LocaleLink to="/tour-types/small-group" className="text-primary hover:underline">small group experiences</LocaleLink>, or{" "}
        <LocaleLink to="/tours/sunrise-tours" className="text-primary hover:underline">sunrise access</LocaleLink> to beat the crowds and capture stunning photos of El Castillo pyramid.
      </p>
    ),
    toursTitle: "Top Chichen Itza Tours Departing from Playa del Carmen",
    toursSubtitle: `${allPlayaTours.length} tours available with hotel pickup from Playa del Carmen`,
    noMatch: "No tours match your filters.",
    clearFilters: "Clear All Filters",
    expectTitle: "What to Expect on Your Playa del Carmen to Chichen Itza Tour",
    expectSubtitle: "A typical day tour timeline from Playa del Carmen",
    includedTitle: "What's Included",
    includedItems: [
      "Air-conditioned transport from your hotel",
      "Certified bilingual archaeologist guide",
      "All entrance fees to Chichen Itza",
      "Cenote swim with towels provided",
      "Traditional Yucatecan buffet lunch",
      "Bottled water and snacks",
    ],
    bringTitle: "What to Bring",
    bringItems: [
      "Comfortable walking shoes",
      "Sunscreen and hat (no shade on site)",
      "Swimsuit and towel for cenote",
      "Camera or smartphone",
      "Mexican pesos for souvenirs",
      "Light rain jacket (May-Oct)",
    ],
    compTitle: "Guided Tour vs. Self-Drive from Playa del Carmen",
    tipTitle: "Pro Tip: Guided Tours Win on Value",
    tipContent: "While driving yourself might seem cheaper at first glance, a guided tour from Playa del Carmen offers exceptional value when you factor in expertise, convenience, and the stress-free experience. Plus, you can relax and enjoy the scenic Yucatan countryside instead of navigating traffic.",
    bestTimeTitle: "Best Time to Visit Chichen Itza from Playa del Carmen",
    bestSeason: "Best Season",
    bestSeasonDesc: (<><strong className="text-foreground">November–April</strong> offers dry weather and comfortable temperatures (75–85°F). May–October is rainy season with afternoon showers, but morning visits typically stay dry and crowds are 30% smaller.</>),
    bestTime: "Best Time of Day",
    bestTimeDesc: (<><strong className="text-foreground">Early morning (7–9 AM)</strong> — Cooler temperatures, golden light for photos, and fewer tourists. Our{" "}<LocaleLink to="/tours/sunrise-tours" className="text-primary hover:underline">sunrise tours</LocaleLink>{" "}depart Playa at 5:30 AM.</>),
    weekdayTitle: "Weekday Advantage",
    weekdayContent: "Weekdays see 30–40% fewer visitors than weekends. Combine an early departure with a Tuesday–Thursday tour for the best experience.",
    readGuide: "Read Full Guide",
    mapTitle: "Playa del Carmen to Chichen Itza Route",
    mapDesc: "The journey takes you through the scenic Yucatan Peninsula, passing traditional Mayan villages and jungle landscape. The modern toll road (cuota) ensures a smooth, safe 1.5-hour journey.",
    comboTitle: "Popular Combo Tours from Playa del Carmen",
    comboDesc: "Maximize your day with these popular combinations that pair Chichen Itza with other Yucatan attractions:",
    comboTours: [
      { title: "Chichen Itza + Cenote Ik Kil", price: 99, description: "Explore the ruins and swim in the iconic Cenote Ik Kil. Includes buffet lunch.", duration: "11 hours", link: "/combo-tours/cenote-ik-kil" },
      { title: "Chichen Itza + Cobá Ruins", price: 119, description: "Visit two magnificent Mayan archaeological sites in one day. Climb the Nohoch Mul pyramid.", duration: "13 hours", link: "/combo-tours/coba-ruins" },
      { title: "Chichen Itza + Valladolid", price: 89, description: "Combine ancient ruins with the charming colonial city. Explore Calzada de los Frailes.", duration: "12 hours", link: "/tours/day-tours" },
      { title: "Multi-Day Yucatán Explorer", price: 299, description: "3-day immersive Yucatán experience: Chichen Itza, Uxmal, Mérida, cenotes, and more.", duration: "3 days", link: "/combo-tours/multi-day-yucatan" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Common questions about Chichen Itza tours from Playa del Carmen",
    exploreMore: "Explore More Chichen Itza Tours",
    links: [
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
      locationSchemas["playa-del-carmen"],
    ],
  });

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={locationImages["playa-del-carmen"]} alt="Playa del Carmen Fifth Avenue and Caribbean beach" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={[{ label: c.breadcrumb }]} />
          <div className="grid lg:grid-cols-2 gap-8 items-center mt-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-accent text-accent" />))}
                </div>
                <span className="text-sm text-muted-foreground">{c.rating}</span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">{c.h1}</h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl">{c.heroDesc}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {[Car, MapPin, Calendar, Users].map((Icon, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                    <Icon className="h-4 w-4 text-primary" />{c.badges[i].text}
                  </span>
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
                {(isEs ? playaDelCarmenPageContentEs.whyBook : playaDelCarmenPageContent.whyBook).map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Shield className="h-4 w-4 text-primary" /></div>
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
                {(isEs ? playaDelCarmenPageContentEs.timeline : playaDelCarmenPageContent.timeline).map((step, i) => (
                  <TimelineItem key={i} time={step.time} title={step.title} description={step.description} isLast={i === playaDelCarmenPageContent.timeline.length - 1} />
                ))}
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <InfoBox title={c.includedTitle} icon="✓" variant="success" items={c.includedItems} />
                <InfoBox title={c.bringTitle} icon="🎒" variant="info" items={c.bringItems} />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">{c.compTitle}</h2>
              <ComparisonTable headers={isEs ? ["Tour Guiado", "Conducir"] : ["Guided Tour", "Self-Drive"]} highlightColumn={1} recommendedLabel={isEs ? "Recomendado" : "Recommended"} rows={(isEs ? playaDelCarmenPageContentEs.comparisonTable : playaDelCarmenPageContent.comparisonTable).rows.map((row) => ({ label: row[0], values: [row[1], row[2]] }))} />
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
              <TipBox type="info" title={c.weekdayTitle} content={c.weekdayContent} />
              <div className="mt-4"><Button variant="outline" asChild><LocaleLink to="/guide/best-time-to-visit">{c.readGuide} <ChevronRight className="h-4 w-4" /></LocaleLink></Button></div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">{c.mapTitle}</h2>
              <MapEmbed title={c.mapTitle} from="Playa del Carmen, Mexico" to="Chichen Itza, Mexico" />
              <p className="text-sm text-muted-foreground mt-3">{c.mapDesc}</p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">{c.comboTitle}</h2>
              <p className="text-muted-foreground mb-6">{c.comboDesc}</p>
              <div className="grid sm:grid-cols-2 gap-5">{c.comboTours.map((combo) => (<ComboTourCard key={combo.title} {...combo} />))}</div>
            </section>

            <section className="mb-12">
              <FAQSection faqs={faqs} title={c.faqTitle} subtitle={c.faqSubtitle} />
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <QuickBookingForm /><PopularToursWidget departureCity="playa-del-carmen" /><CTABox /><TrustBadges variant="compact" />
            </div>
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

export default PlayaDelCarmenToursPage;
