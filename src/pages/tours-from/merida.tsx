import LocaleLink from "@/components/LocaleLink";
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
import { meridaFAQs, meridaFAQsEs, meridaPageContent } from "@/lib/locationData";
import { locationSchemas } from "@/lib/schema";
import { locationImages } from "@/lib/tourImages";
import { useState, useMemo } from "react";
import { useLocale } from "@/lib/i18n/useLocale";
import type { Tour } from "@/types/tour";

const location = getLocationBySlug("merida")!;

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
  const { locale } = useLocale();
  const isEs = locale === "es";
  const faqs = isEs ? meridaFAQsEs : meridaFAQs;
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

  const c = isEs ? {
    metaTitle: "Tours a Chichén Itzá desde Mérida — La Ruta Más Corta 2026",
    metaDesc: "Tours a Chichén Itzá desde Mérida. ¡Solo 1.5 horas! La ruta más corta con guías yucatecos locales. Cenote y almuerzo incluidos. Reserva hoy.",
    canonical: "/es/tours-desde/merida",
    breadcrumb: "Tours desde Mérida",
    breadcrumbHome: "Inicio",
    rating: "4.9/5 de 600+ viajeros",
    h1: "Tours a Chichén Itzá desde Mérida — La Ruta Más Corta 2026",
    heroDesc: `¡La ruta más corta a Chichén Itzá! Solo ${location.driveTime} desde la capital colonial de Yucatán. Experimenta la auténtica cultura yucateca con guías locales.`,
    badges: [
      { text: location.driveTime + " ¡solamente!" },
      { text: location.distanceToChichen },
      { text: "Salidas diarias" },
      { text: "Encanto colonial" },
    ],
    viewAll: "Ver Todos los Tours",
    getQuote: "Cotización Personalizada",
    whyBookTitle: "¿Por Qué Reservar desde Mérida?",
    secretTitle: "El Secreto Mejor Guardado: La Proximidad de Mérida",
    secretContent: "La mayoría de los turistas reservan desde Cancún (2.5 horas) cuando Mérida está a solo 1.5 horas de Chichén Itzá. Llegarás antes que los autobuses costeros, explorarás en las horas más frescas de la mañana y experimentarás la auténtica hospitalidad yucateca.",
    intro1: (
      <p className="text-muted-foreground leading-relaxed text-lg">
        Mérida ofrece la ruta más corta y conveniente a Chichén Itzá — solo 75 millas (1.5 horas) desde la ciudad blanca hasta la antigua capital maya. Esta proximidad significa mañanas más relajadas, más tiempo de exploración y regresos tempranos para disfrutar de las vibrantes plazas y arquitectura colonial de Mérida.
      </p>
    ),
    intro2: (
      <p className="text-muted-foreground leading-relaxed">
        Como corazón cultural de la Península de Yucatán, Mérida brinda una perspectiva diferente de los <strong>tours a Chichén Itzá</strong>. Los guías yucatecos locales comparten conexiones culturales más profundas. A diferencia de los tours desde{" "}
        <LocaleLink to="/tours-from/cancun" className="text-primary hover:underline">Cancún (2.5 horas)</LocaleLink> o{" "}
        <LocaleLink to="/tours-from/tulum" className="text-primary hover:underline">Tulum (2-2.5 horas)</LocaleLink>, llegarás antes que los autobuses costeros.
      </p>
    ),
    intro3: (
      <p className="text-muted-foreground leading-relaxed">
        Más allá del viaje más corto, los tours desde Mérida a menudo incluyen experiencias yucatecas auténticas: visitas a haciendas tradicionales, cenotes menos conocidos y la pintoresca Ciudad Amarilla de Izamal. Elige entre{" "}
        <LocaleLink to="/tours/private-tours" className="text-primary hover:underline">tours privados</LocaleLink>,{" "}
        <LocaleLink to="/tour-types/small-group" className="text-primary hover:underline">grupos pequeños</LocaleLink>, o{" "}
        <LocaleLink to="/tour-types/luxury" className="text-primary hover:underline">experiencias de lujo</LocaleLink>.
      </p>
    ),
    toursTitle: "Tours a Chichén Itzá desde Mérida",
    toursSubtitle: `${allMeridaTours.length} tours disponibles con recogida desde Mérida`,
    noMatch: "Ningún tour coincide con tus filtros.",
    clearFilters: "Borrar Filtros",
    expectTitle: "Tu Experiencia de Mérida a Chichén Itzá",
    expectSubtitle: "Itinerario típico de un tour de día desde Mérida",
    includedTitle: "Qué Incluye",
    includedItems: [
      "Transporte con aire acondicionado desde tu hotel",
      "Guía arqueólogo yucateco local",
      "Todas las entradas a Chichén Itzá",
      "Parada para nadar en cenote de hacienda",
      "Almuerzo yucateco auténtico",
      "Agua embotellada y snacks",
    ],
    bringTitle: "Qué Llevar",
    bringItems: [
      "Zapatos cómodos para caminar",
      "Protector solar y sombrero de ala ancha",
      "Traje de baño y toalla para cenote",
      "Cámara para fotos",
      "Pesos mexicanos para el mercado artesanal",
      "Ropa ligera (Mérida es más cálida)",
    ],
    compTitle: "Tour Guiado vs. Conducir o Autobús desde Mérida",
    tipTitle: "Consejo Pro: Inmersión Cultural",
    tipContent: "Los guías basados en Mérida a menudo tienen profunda herencia maya y conexiones culturales. Un tour guiado proporciona perspectivas sobre tradiciones regionales, comida e historia que simplemente no puedes obtener de una visita autoguiada.",
    bestTimeTitle: "Mejor Época para Visitar Chichén Itzá desde Mérida",
    bestSeason: "Mejor Temporada",
    bestSeasonDesc: (<><strong className="text-foreground">Noviembre–Febrero</strong> ofrece las temperaturas más cómodas. Mérida es más cálida que las áreas costeras — evita abril-mayo (meses más calientes) si es posible.</>),
    departureTimes: "Horarios de Salida",
    departureTimesDesc: (<><strong className="text-foreground">7:30–8:30 AM</strong> — Los tours desde Mérida pueden salir un poco más tarde gracias al viaje más corto. Aún así llegarás antes de los autobuses de Cancún a las 10 AM.</>),
    stayTitle: "Quédate una Noche en Mérida",
    stayContent: "Considera quedarte una noche en Mérida antes o después de tu tour. Los eventos culturales dominicales de la ciudad, la increíble escena gastronómica y la arquitectura colonial definitivamente valen la pena.",
    readGuide: "Leer Guía Completa",
    mapTitle: "Ruta de Mérida a Chichén Itzá",
    mapDesc: "El viaje de 1.5 horas al este desde Mérida te lleva por el corazón de la Península de Yucatán. La bien mantenida autopista de cuota pasa por pueblos mayas tradicionales, plantaciones de henequén y exuberante vegetación.",
    comboTitle: "Tours Combo Populares desde Mérida",
    comboDesc: "Maximiza tu experiencia yucateca con estas combinaciones populares únicas de Mérida:",
    comboTours: [
      { title: "Chichén Itzá + Izamal (Ciudad Amarilla)", price: 109, description: "Visita las ruinas antiguas y luego explora la impresionante ciudad colonial toda amarilla de Izamal.", duration: "10 horas", link: "/combo-tours/multi-day-yucatan" },
      { title: "Chichén Itzá + Cenote de Hacienda", price: 99, description: "Explora las ruinas y nada en un cenote privado de hacienda lejos de las multitudes.", duration: "9 horas", link: "/combo-tours/cenote-ik-kil" },
      { title: "Chichén Itzá + Ruinas de Uxmal", price: 189, description: "Tour de dos días visitando los sitios arqueológicos más impresionantes de Yucatán.", duration: "2 días", link: "/combo-tours/multi-day-yucatan" },
      { title: "Explorador de Yucatán Multi-Día", price: 299, description: "Experiencia inmersiva de 3 días: Chichén Itzá, Uxmal, cenotes, Izamal y más.", duration: "3 días", link: "/combo-tours/multi-day-yucatan" },
    ],
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Preguntas comunes sobre tours a Chichén Itzá desde Mérida",
    exploreMore: "Explora Más Tours a Chichén Itzá",
    links: [
      { label: "Desde Cancún", href: "/tours-from/cancun" },
      { label: "Desde Playa del Carmen", href: "/tours-from/playa-del-carmen" },
      { label: "Desde Tulum", href: "/tours-from/tulum" },
      { label: "Desde Riviera Maya", href: "/tours-from/riviera-maya" },
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
    canonical: "/tours-from/merida",
    breadcrumb: "Tours from Mérida",
    breadcrumbHome: "Home",
    rating: "4.9/5 from 600+ travelers",
    h1: "Chichen Itza Tours from Mérida — Shortest Route 2026",
    heroDesc: `The shortest route to Chichen Itza! Just ${location.driveTime} from the colonial capital of Yucatán. Experience authentic Yucatecan culture with local guides.`,
    badges: [
      { text: location.driveTime + " only!" },
      { text: location.distanceToChichen },
      { text: "Daily departures" },
      { text: "Colonial charm" },
    ],
    viewAll: "View All Tours",
    getQuote: "Get Custom Quote",
    whyBookTitle: "Why Book from Mérida?",
    secretTitle: "Best Kept Secret: Mérida's Proximity",
    secretContent: "Most tourists book from Cancún (2.5 hours) when Mérida is just 1.5 hours from Chichen Itza. You'll arrive before the coastal tour buses, explore in cooler morning hours, and experience authentic Yucatecan hospitality.",
    intro1: (
      <p className="text-muted-foreground leading-relaxed text-lg">
        Mérida offers the shortest and most convenient route to Chichen Itza — just 75 miles (1.5 hours) from the white city to the ancient Mayan capital. This proximity means more relaxed mornings, longer exploration time, and early returns to enjoy Mérida's vibrant plazas and colonial architecture.
      </p>
    ),
    intro2: (
      <p className="text-muted-foreground leading-relaxed">
        As the cultural heart of the Yucatán Peninsula, Mérida provides a different perspective on <strong>Chichen Itza tours</strong>. Local Yucatecan guides share deeper cultural connections and regional insights. Unlike tours from{" "}
        <LocaleLink to="/tours-from/cancun" className="text-primary hover:underline">Cancún (2.5 hours)</LocaleLink> or{" "}
        <LocaleLink to="/tours-from/tulum" className="text-primary hover:underline">Tulum (2-2.5 hours)</LocaleLink>, you'll arrive before the coastal tour buses.
      </p>
    ),
    intro3: (
      <p className="text-muted-foreground leading-relaxed">
        Beyond the shorter drive, Mérida-based tours often include authentic Yucatecan experiences: visits to traditional haciendas, lesser-known cenotes, and the picturesque Yellow City of Izamal. Choose from{" "}
        <LocaleLink to="/tours/private-tours" className="text-primary hover:underline">private tours</LocaleLink>,{" "}
        <LocaleLink to="/tour-types/small-group" className="text-primary hover:underline">small groups</LocaleLink>, or{" "}
        <LocaleLink to="/tour-types/luxury" className="text-primary hover:underline">luxury experiences</LocaleLink>.
      </p>
    ),
    toursTitle: "Chichen Itza Tours Departing from Mérida",
    toursSubtitle: `${allMeridaTours.length} tours available with pickup from Mérida`,
    noMatch: "No tours match your filters.",
    clearFilters: "Clear All Filters",
    expectTitle: "Your Mérida to Chichen Itza Experience",
    expectSubtitle: "A typical day tour timeline from Mérida",
    includedTitle: "What's Included",
    includedItems: [
      "Air-conditioned transport from your hotel",
      "Local Yucatecan archaeologist guide",
      "All entrance fees to Chichen Itza",
      "Hacienda cenote swimming stop",
      "Authentic Yucatecan lunch",
      "Bottled water and snacks",
    ],
    bringTitle: "What to Bring",
    bringItems: [
      "Comfortable walking shoes",
      "Sunscreen and wide-brimmed hat",
      "Swimsuit and towel for cenote",
      "Camera for photos",
      "Mexican pesos for artisan market",
      "Light clothing (Mérida is warmer)",
    ],
    compTitle: "Guided Tour vs. Self-Drive or Bus from Mérida",
    tipTitle: "Pro Tip: Cultural Immersion",
    tipContent: "Mérida-based guides often have deep Mayan heritage and cultural connections. A guided tour provides insights into regional traditions, food, and history that you simply can't get from a self-guided visit.",
    bestTimeTitle: "Best Time to Visit Chichen Itza from Mérida",
    bestSeason: "Best Season",
    bestSeasonDesc: (<><strong className="text-foreground">November–February</strong> offers the most comfortable temperatures. Mérida is warmer than coastal areas — avoid April-May (hottest months) if possible.</>),
    departureTimes: "Departure Times",
    departureTimesDesc: (<><strong className="text-foreground">7:30–8:30 AM</strong> — Mérida tours can leave slightly later thanks to the shorter drive. You'll still arrive before the Cancún buses at 10 AM.</>),
    stayTitle: "Stay a Night in Mérida",
    stayContent: "Consider staying a night in Mérida before or after your tour. The city's Sunday cultural events, incredible food scene, and colonial architecture are absolutely worth exploring.",
    readGuide: "Read Full Guide",
    mapTitle: "Mérida to Chichen Itza Route",
    mapDesc: "The 1.5-hour journey east from Mérida takes you through the heartland of the Yucatán Peninsula. The well-maintained toll highway passes traditional Mayan villages, henequen plantations, and lush vegetation.",
    comboTitle: "Popular Combo Tours from Mérida",
    comboDesc: "Maximize your Yucatán experience with these popular combinations unique to Mérida:",
    comboTours: [
      { title: "Chichen Itza + Izamal (Yellow City)", price: 109, description: "Visit the ancient ruins then explore the stunning all-yellow colonial town of Izamal.", duration: "10 hours", link: "/combo-tours/multi-day-yucatan" },
      { title: "Chichen Itza + Cenote Hacienda", price: 99, description: "Explore the ruins and swim in a private hacienda cenote away from tourist crowds.", duration: "9 hours", link: "/combo-tours/cenote-ik-kil" },
      { title: "Chichen Itza + Uxmal Ruins", price: 189, description: "Two-day tour visiting both of Yucatán's most impressive archaeological sites.", duration: "2 days", link: "/combo-tours/multi-day-yucatan" },
      { title: "Multi-Day Yucatán Explorer", price: 299, description: "3-day immersive experience: Chichen Itza, Uxmal, cenotes, Izamal, and more.", duration: "3 days", link: "/combo-tours/multi-day-yucatan" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Common questions about Chichen Itza tours from Mérida",
    exploreMore: "Explore More Chichen Itza Tours",
    links: [
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
      locationSchemas["merida"],
    ],
  });

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={locationImages["merida"]} alt="Mérida colonial architecture and colorful streets" className="w-full h-full object-cover" width={1920} height={1080} />
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
                {[Car, MapPin, Calendar, Building].map((Icon, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border"><Icon className="h-4 w-4 text-accent" />{c.badges[i].text}</span>
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
                {meridaPageContent.whyBook.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center"><Shield className="h-4 w-4 text-accent" /></div>
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
            <div className="mb-12"><TipBox type="success" title={c.secretTitle} content={c.secretContent} /></div>

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
                {meridaPageContent.timeline.map((step, i) => (<TimelineItem key={i} time={step.time} title={step.title} description={step.description} isLast={i === meridaPageContent.timeline.length - 1} />))}
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <InfoBox title={c.includedTitle} icon="✓" variant="success" items={c.includedItems} />
                <InfoBox title={c.bringTitle} icon="🎒" variant="info" items={c.bringItems} />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">{c.compTitle}</h2>
              <ComparisonTable headers={isEs ? ["Tour Guiado", "Conducir/Autobús"] : ["Guided Tour", "Self-Drive/Bus"]} highlightColumn={1} rows={meridaPageContent.comparisonTable.rows.map((row) => ({ label: row[0], values: [row[1], row[2]] }))} />
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
                  <div className="flex items-center gap-2 mb-3"><Clock className="h-5 w-5 text-primary" /><h3 className="font-heading font-semibold">{c.departureTimes}</h3></div>
                  <p className="text-sm text-muted-foreground">{c.departureTimesDesc}</p>
                </div>
              </div>
              <TipBox type="info" title={c.stayTitle} content={c.stayContent} />
              <div className="mt-4"><Button variant="outline" asChild><LocaleLink to="/guide/best-time-to-visit">{c.readGuide} <ChevronRight className="h-4 w-4" /></LocaleLink></Button></div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">{c.mapTitle}</h2>
              <MapEmbed title={c.mapTitle} from="Mérida, Mexico" to="Chichen Itza, Mexico" />
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
            <div className="sticky top-24 space-y-6"><QuickBookingForm /><PopularToursWidget departureCity="merida" /><CTABox /><TrustBadges variant="compact" /></div>
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

export default MeridaToursPage;
