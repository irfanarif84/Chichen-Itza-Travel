import LocaleLink from "@/components/LocaleLink";
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
import { rivieraMayaFAQs, rivieraMayaFAQsEs, rivieraMayaPageContent, rivieraMayaPageContentEs } from "@/lib/locationData";
import { locationSchemas } from "@/lib/schema";
import { locationImages } from "@/lib/tourImages";
import { useState, useMemo } from "react";
import { useLocale } from "@/lib/i18n/useLocale";
import type { Tour } from "@/types/tour";

const location = getLocationBySlug("riviera-maya")!;

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
  const { locale } = useLocale();
  const isEs = locale === "es";
  const faqs = isEs ? rivieraMayaFAQsEs : rivieraMayaFAQs;
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

  const c = isEs ? {
    metaTitle: "Tours a Chichén Itzá desde Riviera Maya — Excursiones Todo Incluido",
    metaDesc: "Tours a Chichén Itzá con recogida en cualquier hotel de la Riviera Maya. Desde Puerto Morelos hasta Akumal. Guía, cenote y almuerzo incluidos.",
    canonical: "/es/tours-desde/riviera-maya",
    breadcrumb: "Tours desde Riviera Maya",
    breadcrumbHome: "Inicio",
    rating: "4.8/5 de 900+ viajeros",
    h1: "Tours a Chichén Itzá desde Riviera Maya — Excursiones Todo Incluido",
    heroDesc: "Tours convenientes a Chichén Itzá con recogida en cualquier hotel a lo largo del corredor de la Riviera Maya. Desde Puerto Morelos hasta Akumal, te cubrimos.",
    badges: [
      { text: location.driveTime },
      { text: location.distanceToChichen },
      { text: "Salidas diarias" },
      { text: "Todos los resorts cubiertos" },
    ],
    viewAll: "Ver Todos los Tours",
    getQuote: "Cotización Personalizada",
    whyBookTitle: "¿Por Qué Reservar desde Riviera Maya?",
    intro1: (
      <p className="text-muted-foreground leading-relaxed text-lg">
        Descubre Chichén Itzá con convenientes <strong>tours desde cualquier lugar de la Riviera Maya</strong>. Ya sea que estés en Puerto Aventuras, Akumal, Xpu-Ha, o cualquier resort a lo largo de la famosa costa caribeña de México, ofrecemos recogida sin complicaciones y transporte a uno de los sitios arqueológicos más espectaculares del mundo.
      </p>
    ),
    intro2: (
      <p className="text-muted-foreground leading-relaxed">
        La ubicación central de la Riviera Maya significa tiempos de viaje de {location.driveTime} dependiendo de tu hotel exacto. Nuestros coordinadores optimizan las rutas de recogida para minimizar los tiempos de espera. Compara con tours desde{" "}
        <LocaleLink to="/tours-from/cancun" className="text-primary hover:underline">Cancún</LocaleLink>,{" "}
        <LocaleLink to="/tours-from/playa-del-carmen" className="text-primary hover:underline">Playa del Carmen</LocaleLink>, o{" "}
        <LocaleLink to="/tours-from/tulum" className="text-primary hover:underline">Tulum</LocaleLink>.
      </p>
    ),
    intro3: (
      <p className="text-muted-foreground leading-relaxed">
        Los resorts todo incluido se benefician especialmente de nuestros tours. Elige entre{" "}
        <LocaleLink to="/tours/private-tours" className="text-primary hover:underline">tours privados</LocaleLink>,{" "}
        <LocaleLink to="/tour-types/small-group" className="text-primary hover:underline">experiencias en grupos pequeños</LocaleLink>, o{" "}
        <LocaleLink to="/tour-types/family-friendly" className="text-primary hover:underline">opciones familiares</LocaleLink>.
      </p>
    ),
    toursTitle: "Tours a Chichén Itzá desde Resorts de Riviera Maya",
    toursSubtitle: `${allRivieraTours.length} tours disponibles con recogida en resort`,
    noMatch: "Ningún tour coincide con tus filtros.",
    clearFilters: "Borrar Filtros",
    expectTitle: "Tu Día de Riviera Maya a Chichén Itzá",
    expectSubtitle: "Itinerario típico de un tour de día desde resorts de Riviera Maya",
    includedTitle: "Qué Incluye",
    includedItems: [
      "Recogida y regreso puerta a puerta en resort",
      "Guía arqueólogo bilingüe certificado",
      "Todas las entradas a Chichén Itzá",
      "Parada para nadar en cenote",
      "Almuerzo buffet yucateco tradicional",
      "Agua embotellada y snacks a bordo",
    ],
    bringTitle: "Qué Llevar",
    bringItems: [
      "Zapatos cómodos para caminar",
      "Protector solar y sombrero",
      "Traje de baño y toalla para cenote",
      "Cámara o smartphone",
      "Efectivo para propinas y recuerdos",
      "Chaqueta ligera para van con aire acondicionado",
    ],
    compTitle: "Tour Guiado vs. Conducir desde Tu Resort",
    tipTitle: "Consejo Pro: Comodidad del Resort",
    tipContent: "Los huéspedes de todo incluido obtienen máximo valor de un tour guiado — sin necesidad de alquilar auto, navegar por carreteras desconocidas ni preocuparse por estacionamiento. Tu tour maneja todo desde la recogida en el lobby hasta el regreso por la tarde.",
    bestTimeTitle: "Mejor Época para Visitar Chichén Itzá desde Riviera Maya",
    bestSeason: "Mejor Temporada",
    bestSeasonDesc: (<><strong className="text-foreground">Noviembre–Abril</strong> ofrece clima seco y temperaturas cómodas. Los huéspedes de todo incluido tienen más flexibilidad para reservar de último minuto en temporada baja.</>),
    pickupTimes: "Horarios de Recogida",
    pickupTimesDesc: (<><strong className="text-foreground">Varía por ubicación:</strong> Puerto Morelos 6:15 AM, Playa del Carmen 6:30-7:00 AM, Puerto Aventuras/Akumal 6:45-7:15 AM.</>),
    conciergeTip: "Consejo de Concierge",
    conciergeContent: "Pregunta al concierge de tu resort sobre tours asociados — algunos resorts ofrecen paquetes exclusivos o descuentos para sus huéspedes.",
    readGuide: "Leer Guía Completa",
    mapTitle: "Ruta de Riviera Maya a Chichén Itzá",
    mapDesc: "El viaje desde el corredor de la Riviera Maya te lleva al oeste a través de la pintoresca Península de Yucatán. Los tiempos varían según la ubicación de recogida, desde 1.5 horas (resorts del norte) hasta 2.5 horas (resorts del sur cerca de Tulum).",
    comboTitle: "Tours Combo Populares desde Riviera Maya",
    comboDesc: "Maximiza tu día con estas combinaciones populares que incluyen Chichén Itzá con otras atracciones de Yucatán:",
    comboTours: [
      { title: "Chichén Itzá + Cenote Ik Kil", price: 99, description: "Explora las ruinas y nada en el icónico Cenote Ik Kil. Incluye almuerzo buffet.", duration: "11 horas", link: "/combo-tours/cenote-ik-kil" },
      { title: "Chichén Itzá + Ruinas de Cobá", price: 119, description: "Visita dos magníficos sitios mayas en un día. Sube a la pirámide Nohoch Mul.", duration: "13 horas", link: "/combo-tours/coba-ruins" },
      { title: "Chichén Itzá + Isla Mujeres", price: 159, description: "Combina historia maya antigua con una experiencia paradisíaca en isla caribeña.", duration: "2 días", link: "/combo-tours/isla-mujeres" },
      { title: "Explorador de Yucatán Multi-Día", price: 299, description: "Experiencia inmersiva de 3 días: Chichén Itzá, Uxmal, Mérida, cenotes y más.", duration: "3 días", link: "/combo-tours/multi-day-yucatan" },
    ],
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Preguntas comunes sobre tours a Chichén Itzá desde Riviera Maya",
    exploreMore: "Explora Más Tours a Chichén Itzá",
    links: [
      { label: "Desde Cancún", href: "/tours-from/cancun" },
      { label: "Desde Playa del Carmen", href: "/tours-from/playa-del-carmen" },
      { label: "Desde Tulum", href: "/tours-from/tulum" },
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
    canonical: "/tours-from/riviera-maya",
    breadcrumb: "Tours from Riviera Maya",
    breadcrumbHome: "Home",
    rating: "4.8/5 from 900+ travelers",
    h1: "Chichen Itza Tours from Riviera Maya — All-Inclusive Day Trips",
    heroDesc: "Convenient Chichen Itza tours with pickup from any hotel along the Riviera Maya corridor. From Puerto Morelos to Akumal, we've got you covered.",
    badges: [
      { text: location.driveTime },
      { text: location.distanceToChichen },
      { text: "Daily departures" },
      { text: "All resorts covered" },
    ],
    viewAll: "View All Tours",
    getQuote: "Get Custom Quote",
    whyBookTitle: "Why Book from Riviera Maya?",
    intro1: (
      <p className="text-muted-foreground leading-relaxed text-lg">
        Discover Chichen Itza with convenient <strong>tours departing from anywhere in the Riviera Maya</strong>. Whether you're staying in Puerto Aventuras, Akumal, Xpu-Ha, or any resort along Mexico's famous Caribbean coastline, we offer hassle-free pickup and transportation to one of the world's most spectacular archaeological sites.
      </p>
    ),
    intro2: (
      <p className="text-muted-foreground leading-relaxed">
        The Riviera Maya's central location means drive times of {location.driveTime} depending on your exact hotel. Our tour coordinators optimize pickup routes to minimize wait times. Compare with tours from{" "}
        <LocaleLink to="/tours-from/cancun" className="text-primary hover:underline">Cancún</LocaleLink>,{" "}
        <LocaleLink to="/tours-from/playa-del-carmen" className="text-primary hover:underline">Playa del Carmen</LocaleLink>, or{" "}
        <LocaleLink to="/tours-from/tulum" className="text-primary hover:underline">Tulum</LocaleLink>.
      </p>
    ),
    intro3: (
      <p className="text-muted-foreground leading-relaxed">
        All-inclusive resorts especially benefit from our day tours. Choose from{" "}
        <LocaleLink to="/tours/private-tours" className="text-primary hover:underline">private tours</LocaleLink>,{" "}
        <LocaleLink to="/tour-types/small-group" className="text-primary hover:underline">small group experiences</LocaleLink>, or{" "}
        <LocaleLink to="/tour-types/family-friendly" className="text-primary hover:underline">family-friendly options</LocaleLink>.
      </p>
    ),
    toursTitle: "Chichen Itza Tours from Riviera Maya Resorts",
    toursSubtitle: `${allRivieraTours.length} tours available with resort pickup`,
    noMatch: "No tours match your filters.",
    clearFilters: "Clear All Filters",
    expectTitle: "Your Riviera Maya to Chichen Itza Day",
    expectSubtitle: "A typical day tour timeline from Riviera Maya resorts",
    includedTitle: "What's Included",
    includedItems: [
      "Door-to-door resort pickup & drop-off",
      "Certified bilingual archaeologist guide",
      "All entrance fees to Chichen Itza",
      "Cenote swimming stop",
      "Traditional Yucatecan buffet lunch",
      "Bottled water and snacks on board",
    ],
    bringTitle: "What to Bring",
    bringItems: [
      "Comfortable walking shoes",
      "Sunscreen and hat",
      "Swimsuit and towel for cenote",
      "Camera or smartphone",
      "Cash for tips and souvenirs",
      "Light jacket for air-conditioned van",
    ],
    compTitle: "Guided Tour vs. Self-Drive from Your Resort",
    tipTitle: "Pro Tip: Resort Convenience",
    tipContent: "All-inclusive guests get maximum value from a guided tour — no need to arrange car rental, navigate unfamiliar roads, or worry about parking. Your tour handles everything from lobby pickup to evening drop-off.",
    bestTimeTitle: "Best Time to Visit Chichen Itza from Riviera Maya",
    bestSeason: "Best Season",
    bestSeasonDesc: (<><strong className="text-foreground">November–April</strong> offers dry weather and comfortable temperatures. All-inclusive guests have more flexibility to book last-minute during shoulder seasons.</>),
    pickupTimes: "Pickup Times",
    pickupTimesDesc: (<><strong className="text-foreground">Varies by location:</strong> Puerto Morelos 6:15 AM, Playa del Carmen 6:30-7:00 AM, Puerto Aventuras/Akumal 6:45-7:15 AM.</>),
    conciergeTip: "Resort Concierge Tip",
    conciergeContent: "Ask your resort concierge about partnered tours — some resorts offer exclusive packages or discounts for their guests.",
    readGuide: "Read Full Guide",
    mapTitle: "Riviera Maya to Chichen Itza Route",
    mapDesc: "The journey from the Riviera Maya corridor takes you west through the scenic Yucatán Peninsula. Drive times vary by pickup location, from 1.5 hours (northern resorts) to 2.5 hours (southern resorts near Tulum).",
    comboTitle: "Popular Combo Tours from Riviera Maya",
    comboDesc: "Maximize your day with these popular combinations that pair Chichen Itza with other Yucatán attractions:",
    comboTours: [
      { title: "Chichen Itza + Cenote Ik Kil", price: 99, description: "Explore the ruins and swim in the iconic Cenote Ik Kil. Includes buffet lunch.", duration: "11 hours", link: "/combo-tours/cenote-ik-kil" },
      { title: "Chichen Itza + Cobá Ruins", price: 119, description: "Visit two magnificent Mayan sites in one day. Climb the Nohoch Mul pyramid.", duration: "13 hours", link: "/combo-tours/coba-ruins" },
      { title: "Chichen Itza + Isla Mujeres", price: 159, description: "Combine ancient Mayan history with a Caribbean island paradise experience.", duration: "2 days", link: "/combo-tours/isla-mujeres" },
      { title: "Multi-Day Yucatán Explorer", price: 299, description: "3-day immersive experience: Chichen Itza, Uxmal, Mérida, cenotes, and more.", duration: "3 days", link: "/combo-tours/multi-day-yucatan" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Common questions about Chichen Itza tours from Riviera Maya",
    exploreMore: "Explore More Chichen Itza Tours",
    links: [
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
      locationSchemas["riviera-maya"],
    ],
  });

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={locationImages["riviera-maya"]} alt="Riviera Maya tropical coastline with palm trees and resorts" className="w-full h-full object-cover" width={1920} height={1080} loading="eager" fetchPriority="high" />
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
                {[Car, MapPin, Calendar, Hotel].map((Icon, i) => (
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
                {(isEs ? rivieraMayaPageContentEs.whyBook : rivieraMayaPageContent.whyBook).map((item, i) => (
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
                {(isEs ? rivieraMayaPageContentEs.timeline : rivieraMayaPageContent.timeline).map((step, i) => (<TimelineItem key={i} time={step.time} title={step.title} description={step.description} isLast={i === rivieraMayaPageContent.timeline.length - 1} />))}
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <InfoBox title={c.includedTitle} icon="✓" variant="success" items={c.includedItems} />
                <InfoBox title={c.bringTitle} icon="🎒" variant="info" items={c.bringItems} />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">{c.compTitle}</h2>
              <ComparisonTable headers={isEs ? ["Tour Guiado", "Conducir"] : ["Guided Tour", "Self-Drive"]} highlightColumn={1} recommendedLabel={isEs ? "Recomendado" : "Recommended"} rows={(isEs ? rivieraMayaPageContentEs.comparisonTable : rivieraMayaPageContent.comparisonTable).rows.map((row) => ({ label: row[0], values: [row[1], row[2]] }))} />
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
                  <div className="flex items-center gap-2 mb-3"><Clock className="h-5 w-5 text-primary" /><h3 className="font-heading font-semibold">{c.pickupTimes}</h3></div>
                  <p className="text-sm text-muted-foreground">{c.pickupTimesDesc}</p>
                </div>
              </div>
              <TipBox type="info" title={c.conciergeTip} content={c.conciergeContent} />
              <div className="mt-4"><Button variant="outline" asChild><LocaleLink to="/guide/best-time-to-visit">{c.readGuide} <ChevronRight className="h-4 w-4" /></LocaleLink></Button></div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">{c.mapTitle}</h2>
              <MapEmbed title={c.mapTitle} from="Riviera Maya, Mexico" to="Chichen Itza, Mexico" />
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
            <div className="sticky top-24 space-y-6"><QuickBookingForm /><PopularToursWidget departureCity="riviera-maya" /><CTABox /><TrustBadges variant="compact" /></div>
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

export default RivieraMayaToursPage;
