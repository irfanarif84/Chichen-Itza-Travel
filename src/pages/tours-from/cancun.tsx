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
import { cancunFAQs, cancunPageContent } from "@/lib/locationData";
import { locationSchemas } from "@/lib/schema";
import { locationImages } from "@/lib/tourImages";
import { useState, useMemo } from "react";
import { useLocale } from "@/lib/i18n/useLocale";
import type { Tour } from "@/types/tour";

const location = getLocationBySlug("cancun")!;

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

const CancunToursPage = () => {
  const { locale } = useLocale();
  const isEs = locale === "es";
  const allCancunTours = getToursByDeparture("cancun");
  const [filters, setFilters] = useState<FilterState>({
    priceRange: "all",
    duration: [],
    tourType: [],
    category: [],
  });

  const filteredTours = useMemo(
    () => filterTours(allCancunTours, filters),
    [allCancunTours, filters]
  );

  const c = isEs ? {
    metaTitle: "Tours a Chichén Itzá desde Cancún — Mejores Excursiones 2026",
    metaDesc: "Descubre los mejores tours a Chichén Itzá desde Cancún. Transporte, guía certificado, cenote y almuerzo incluidos. Cancelación gratuita. ¡Reserva hoy!",
    canonical: "/es/tours-desde/cancun",
    breadcrumb: "Tours desde Cancún",
    breadcrumbHome: "Inicio",
    rating: "4.8/5 de 2,500+ viajeros",
    h1: "Tours a Chichén Itzá desde Cancún — Mejores Excursiones 2026",
    heroDesc: `¡La excursión #1 de México! Explora la antigua maravilla maya con nuestros tours mejor valorados desde Cancún. Solo ${location.driveTime} en auto hasta una de las Nuevas Siete Maravillas del Mundo.`,
    badges: [
      { text: location.driveTime + " en auto" },
      { text: location.distanceToChichen },
      { text: "Salidas diarias" },
      { text: "Recogida en hotel incluida" },
    ],
    viewAll: "Ver Todos los Tours",
    getQuote: "Cotización Personalizada",
    whyBookTitle: "¿Por Qué Reservar desde Cancún?",
    intro1: (
      <p className="text-muted-foreground leading-relaxed text-lg">
        Descubre la antigua maravilla maya con nuestros <strong>tours a Chichén Itzá desde Cancún</strong> cuidadosamente seleccionados. Ubicado a solo 120 millas (2.5 horas en auto) de la famosa Zona Hotelera de Cancún, Chichén Itzá es fácilmente accesible como excursión de un día, lo que lo convierte en una de las excursiones más populares para los visitantes de Cancún.
      </p>
    ),
    intro2: (
      <p className="text-muted-foreground leading-relaxed">
        Nuestros tours de Cancún a Chichén Itzá combinan comodidad con experiencia. Cada tour incluye transporte cómodo con aire acondicionado con recogida en hotel, guías arqueólogos certificados que dan vida a las ruinas, y normalmente un refrescante baño en un cenote impresionante. Compara opciones desde{" "}
        <LocaleLink to="/tours-from/playa-del-carmen" className="text-primary hover:underline">Playa del Carmen</LocaleLink>,{" "}
        <LocaleLink to="/tours-from/tulum" className="text-primary hover:underline">Tulum</LocaleLink>, o{" "}
        <LocaleLink to="/tours-from/merida" className="text-primary hover:underline">Mérida</LocaleLink>.
      </p>
    ),
    intro3: (
      <p className="text-muted-foreground leading-relaxed">
        Ya sea que prefieras una experiencia de{" "}
        <LocaleLink to="/tours/sunrise-tours" className="text-primary hover:underline">amanecer</LocaleLink> antes de las multitudes, un{" "}
        <LocaleLink to="/tours/private-tours" className="text-primary hover:underline">tour privado VIP</LocaleLink> con acceso sin filas, o una{" "}
        <LocaleLink to="/tour-types/budget" className="text-primary hover:underline">opción económica</LocaleLink> que cubre todos los puntos destacados, tenemos la excursión perfecta a Chichén Itzá para ti.
      </p>
    ),
    toursTitle: "Mejores Tours a Chichén Itzá desde Cancún",
    toursSubtitle: `${allCancunTours.length} tours disponibles con recogida en hotel desde Cancún`,
    noMatch: "Ningún tour coincide con tus filtros.",
    clearFilters: "Borrar Filtros",
    expectTitle: "Qué Esperar en Tu Tour de Cancún a Chichén Itzá",
    expectSubtitle: "Itinerario típico de un tour de día desde Cancún",
    includedTitle: "Qué Incluye",
    includedItems: [
      "Transporte con aire acondicionado desde tu hotel",
      "Guía arqueólogo bilingüe certificado",
      "Todas las entradas a Chichén Itzá",
      "Baño en cenote (la mayoría de tours)",
      "Almuerzo buffet yucateco tradicional",
      "Agua embotellada y snacks",
    ],
    bringTitle: "Qué Llevar",
    bringItems: [
      "Zapatos cómodos para caminar",
      "Protector solar y sombrero (poca sombra)",
      "Traje de baño y toalla para cenote",
      "Cámara o smartphone",
      "Pesos mexicanos para recuerdos",
      "Chaqueta ligera para lluvia (May-Oct)",
    ],
    compTitle: "Tour Guiado vs. Conducir desde Cancún",
    tipTitle: "Consejo Pro: Los Tours Guiados Ganan en Valor",
    tipContent: "Un tour guiado desde Cancún te ahorra más de 5 horas de conducción, incluye comentarios expertos que no puedes obtener de una audioguía, y permite que todos en tu grupo disfruten del pintoresco campo yucateco en lugar de navegar por el tráfico de la autopista.",
    bestTimeTitle: "Mejor Época para Visitar Chichén Itzá desde Cancún",
    bestSeason: "Mejor Temporada",
    bestSeasonDesc: (<><strong className="text-foreground">Noviembre–Marzo</strong> ofrece temperaturas cómodas (24–30°C) y lluvia mínima. Es temporada alta, así que reserva con anticipación para asegurar tu lugar.</>),
    bestTime: "Mejor Hora del Día",
    bestTimeDesc: (<><strong className="text-foreground">Temprano en la mañana (8:30–10 AM llegada)</strong> — Temperaturas más frescas, luz dorada para fotos y menos turistas. Nuestros{" "}<LocaleLink to="/tours/sunrise-tours" className="text-primary hover:underline">tours al amanecer</LocaleLink>{" "}salen de Cancún a las 3:30 AM.</>),
    equinoxTitle: "Alerta de Equinoccio",
    equinoxContent: "El Equinoccio de Primavera (20-21 de marzo) crea la famosa sombra de serpiente en El Castillo. Espera multitudes masivas — reserva con al menos 2 meses de anticipación.",
    readGuide: "Leer Guía Completa",
    mapTitle: "Ruta de Cancún a Chichén Itzá",
    mapDesc: "El viaje de 2.5 horas te lleva al oeste a través de la Península de Yucatán por la moderna autopista de cuota. Pasarás por pueblos mayas tradicionales y exuberante paisaje selvático antes de llegar a la zona arqueológica.",
    comboTitle: "Tours Combo Populares desde Cancún",
    comboDesc: "Maximiza tu día con estas combinaciones populares que incluyen Chichén Itzá con otras atracciones de Yucatán:",
    comboTours: [
      { title: "Chichén Itzá + Cenote Ik Kil", price: 99, description: "Explora las ruinas y nada en el icónico Cenote Ik Kil. Incluye almuerzo buffet.", duration: "11 horas", link: "/combo-tours/cenote-ik-kil" },
      { title: "Chichén Itzá + Ruinas de Cobá", price: 119, description: "Visita dos magníficos sitios arqueológicos mayas en un día. Sube a la pirámide Nohoch Mul.", duration: "13 horas", link: "/combo-tours/coba-ruins" },
      { title: "Chichén Itzá + Valladolid", price: 89, description: "Combina ruinas antiguas con la encantadora ciudad colonial. Explora la Calzada de los Frailes.", duration: "12 horas", link: "/tours/day-tours" },
      { title: "Explorador de Yucatán Multi-Día", price: 299, description: "Experiencia inmersiva de 3 días: Chichén Itzá, Uxmal, Mérida, cenotes y más.", duration: "3 días", link: "/combo-tours/multi-day-yucatan" },
    ],
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Preguntas comunes sobre tours a Chichén Itzá desde Cancún",
    exploreMore: "Explora Más Tours a Chichén Itzá",
    links: [
      { label: "Desde Playa del Carmen", href: "/tours-from/playa-del-carmen" },
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
    canonical: "/tours-from/cancun",
    breadcrumb: "Tours from Cancún",
    breadcrumbHome: "Home",
    rating: "4.8/5 from 2,500+ travelers",
    h1: "Chichen Itza Tours from Cancún — Best Day Trips 2026",
    heroDesc: `Mexico's #1 day trip! Explore the ancient Mayan wonder with our top-rated tours from Cancún. Just ${location.driveTime} drive to one of the New Seven Wonders of the World.`,
    badges: [
      { text: location.driveTime + " drive" },
      { text: location.distanceToChichen },
      { text: "Daily departures" },
      { text: "Hotel pickup included" },
    ],
    viewAll: "View All Tours",
    getQuote: "Get Custom Quote",
    whyBookTitle: "Why Book from Cancún?",
    intro1: (
      <p className="text-muted-foreground leading-relaxed text-lg">
        Discover the ancient Mayan wonder with our carefully curated <strong>Chichen Itza tours from Cancún</strong>. Located just 120 miles (2.5 hours drive) from Cancún's famous Hotel Zone, Chichen Itza is easily accessible as a day trip, making it one of the most popular excursions for Cancún visitors.
      </p>
    ),
    intro2: (
      <p className="text-muted-foreground leading-relaxed">
        Our Cancún to Chichen Itza tours combine convenience with expertise. Every tour includes comfortable air-conditioned transportation with hotel pickup, certified archaeologist guides who bring the ruins to life, and typically a refreshing swim at a stunning cenote—the perfect way to cool off after exploring. Compare options from{" "}
        <LocaleLink to="/tours-from/playa-del-carmen" className="text-primary hover:underline">Playa del Carmen</LocaleLink>,{" "}
        <LocaleLink to="/tours-from/tulum" className="text-primary hover:underline">Tulum</LocaleLink>, or{" "}
        <LocaleLink to="/tours-from/merida" className="text-primary hover:underline">Mérida</LocaleLink>.
      </p>
    ),
    intro3: (
      <p className="text-muted-foreground leading-relaxed">
        Whether you prefer an early{" "}
        <LocaleLink to="/tours/sunrise-tours" className="text-primary hover:underline">sunrise experience</LocaleLink> before the crowds, a{" "}
        <LocaleLink to="/tours/private-tours" className="text-primary hover:underline">private VIP tour</LocaleLink> with skip-the-line access, or a{" "}
        <LocaleLink to="/tour-types/budget" className="text-primary hover:underline">budget-friendly option</LocaleLink> that covers all the highlights, we have the perfect Chichen Itza day trip for you.
      </p>
    ),
    toursTitle: "Top Chichen Itza Tours Departing from Cancún",
    toursSubtitle: `${allCancunTours.length} tours available with hotel pickup from Cancún`,
    noMatch: "No tours match your filters.",
    clearFilters: "Clear All Filters",
    expectTitle: "What to Expect on Your Cancún to Chichen Itza Tour",
    expectSubtitle: "A typical day tour timeline from Cancún",
    includedTitle: "What's Included",
    includedItems: [
      "Air-conditioned transport from your hotel",
      "Certified bilingual archaeologist guide",
      "All entrance fees to Chichen Itza",
      "Cenote swim (most tours)",
      "Traditional Yucatecan buffet lunch",
      "Bottled water and snacks",
    ],
    bringTitle: "What to Bring",
    bringItems: [
      "Comfortable walking shoes",
      "Sunscreen and hat (limited shade)",
      "Swimsuit and towel for cenote",
      "Camera or smartphone",
      "Mexican pesos for souvenirs",
      "Light rain jacket (May-Oct)",
    ],
    compTitle: "Guided Tour vs. Self-Drive from Cancún",
    tipTitle: "Pro Tip: Guided Tours Win on Value",
    tipContent: "A guided tour from Cancún saves you 5+ hours of driving, includes expert commentary you can't get from an audio guide, and lets everyone in your group enjoy the scenic Yucatán countryside instead of navigating highway traffic.",
    bestTimeTitle: "Best Time to Visit Chichen Itza from Cancún",
    bestSeason: "Best Season",
    bestSeasonDesc: (<><strong className="text-foreground">November–March</strong> offers comfortable temperatures (75–85°F) and minimal rain. This is peak tourist season, so book early to secure your spot.</>),
    bestTime: "Best Time of Day",
    bestTimeDesc: (<><strong className="text-foreground">Early morning (8:30–10 AM arrival)</strong> — Cooler temperatures, golden light for photos, and fewer tourists. Our{" "}<LocaleLink to="/tours/sunrise-tours" className="text-primary hover:underline">sunrise tours</LocaleLink>{" "}depart Cancún at 3:30 AM.</>),
    equinoxTitle: "Equinox Alert",
    equinoxContent: "The Spring Equinox (March 20-21) creates the famous serpent shadow on El Castillo. Expect massive crowds — book at least 2 months in advance.",
    readGuide: "Read Full Guide",
    mapTitle: "Cancún to Chichen Itza Route",
    mapDesc: "The 2.5-hour journey takes you west through the Yucatán Peninsula via the modern toll highway (cuota). You'll pass traditional Mayan villages and lush jungle landscape before arriving at the archaeological zone.",
    comboTitle: "Popular Combo Tours from Cancún",
    comboDesc: "Maximize your day with these popular combinations that pair Chichen Itza with other Yucatán attractions:",
    comboTours: [
      { title: "Chichen Itza + Cenote Ik Kil", price: 99, description: "Explore the ruins and swim in the iconic Cenote Ik Kil. Includes buffet lunch.", duration: "11 hours", link: "/combo-tours/cenote-ik-kil" },
      { title: "Chichen Itza + Cobá Ruins", price: 119, description: "Visit two magnificent Mayan archaeological sites in one day. Climb the Nohoch Mul pyramid.", duration: "13 hours", link: "/combo-tours/coba-ruins" },
      { title: "Chichen Itza + Valladolid", price: 89, description: "Combine ancient ruins with the charming colonial city. Explore Calzada de los Frailes.", duration: "12 hours", link: "/tours/day-tours" },
      { title: "Multi-Day Yucatán Explorer", price: 299, description: "3-day immersive Yucatán experience: Chichen Itza, Uxmal, Mérida, cenotes, and more.", duration: "3 days", link: "/combo-tours/multi-day-yucatan" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Common questions about Chichen Itza tours from Cancún",
    exploreMore: "Explore More Chichen Itza Tours",
    links: [
      { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
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
      createFAQSchema(cancunFAQs),
      createBreadcrumbSchema([
        { name: c.breadcrumbHome, url: isEs ? "/es/" : "/" },
        { name: c.breadcrumb },
      ]),
      locationSchemas["cancun"],
    ],
  });

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={locationImages["cancun"]}
            alt="Cancún beachfront hotels and turquoise Caribbean waters"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={[{ label: c.breadcrumb }]} />

          <div className="grid lg:grid-cols-2 gap-8 items-center mt-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{c.rating}</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
                {c.h1}
              </h1>

              <p className="text-lg text-muted-foreground mb-6 max-w-xl">{c.heroDesc}</p>

              <div className="flex flex-wrap gap-3 mb-6">
                {[Car, MapPin, Calendar, Users].map((Icon, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                    <Icon className="h-4 w-4 text-primary" />
                    {c.badges[i].text}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="cta" size="lg" asChild>
                  <a href="#tours">{c.viewAll} <ChevronRight className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <LocaleLink to="/practical/contact">{c.getQuote}</LocaleLink>
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-card-hover p-6 border border-border">
              <h2 className="font-heading font-semibold text-xl mb-4">{c.whyBookTitle}</h2>
              <div className="space-y-4">
                {cancunPageContent.whyBook.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-primary" />
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
          <div>
            {/* Introduction */}
            <section className="prose prose-neutral max-w-none mb-12">
              {c.intro1}
              {c.intro2}
              {c.intro3}
            </section>

            {/* Tours Grid */}
            <section id="tours" className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">{c.toursTitle}</h2>
              <p className="text-muted-foreground mb-6">{c.toursSubtitle}</p>

              <TourFilters onFilterChange={setFilters} tourCount={filteredTours.length} className="mb-6" />

              {filteredTours.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
                </div>
              ) : (
                <div className="text-center py-12 bg-card rounded-lg border border-border">
                  <p className="text-muted-foreground mb-4">{c.noMatch}</p>
                  <Button variant="outline" onClick={() => setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })}>
                    {c.clearFilters}
                  </Button>
                </div>
              )}
            </section>

            {/* What to Expect Timeline */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">{c.expectTitle}</h2>
              <p className="text-muted-foreground mb-8">{c.expectSubtitle}</p>

              <div className="space-y-0">
                {cancunPageContent.timeline.map((step, i) => (
                  <TimelineItem key={i} time={step.time} title={step.title} description={step.description} isLast={i === cancunPageContent.timeline.length - 1} />
                ))}
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <InfoBox title={c.includedTitle} icon="✓" variant="success" items={c.includedItems} />
                <InfoBox title={c.bringTitle} icon="🎒" variant="info" items={c.bringItems} />
              </div>
            </section>

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">{c.compTitle}</h2>
              <ComparisonTable
                headers={isEs ? ["Tour Guiado", "Conducir"] : ["Guided Tour", "Self-Drive"]}
                highlightColumn={1}
                rows={cancunPageContent.comparisonTable.rows.map((row) => ({ label: row[0], values: [row[1], row[2]] }))}
              />
              <div className="mt-6">
                <TipBox type="tip" title={c.tipTitle} content={c.tipContent} />
              </div>
            </section>

            {/* Best Time */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">{c.bestTimeTitle}</h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="h-5 w-5 text-accent" />
                    <h3 className="font-heading font-semibold">{c.bestSeason}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{c.bestSeasonDesc}</p>
                </div>
                <div className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold">{c.bestTime}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{c.bestTimeDesc}</p>
                </div>
              </div>

              <TipBox type="info" title={c.equinoxTitle} content={c.equinoxContent} />

              <div className="mt-4">
                <Button variant="outline" asChild>
                  <LocaleLink to="/guide/best-time-to-visit">{c.readGuide} <ChevronRight className="h-4 w-4" /></LocaleLink>
                </Button>
              </div>
            </section>

            {/* Map */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">{c.mapTitle}</h2>
              <MapEmbed title={c.mapTitle} from="Cancún, Mexico" to="Chichen Itza, Mexico" />
              <p className="text-sm text-muted-foreground mt-3">{c.mapDesc}</p>
            </section>

            {/* Combo Tours */}
            <section className="mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">{c.comboTitle}</h2>
              <p className="text-muted-foreground mb-6">{c.comboDesc}</p>
              <div className="grid sm:grid-cols-2 gap-5">
                {c.comboTours.map((combo) => (<ComboTourCard key={combo.title} {...combo} />))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <FAQSection faqs={cancunFAQs} title={c.faqTitle} subtitle={c.faqSubtitle} />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <QuickBookingForm />
              <PopularToursWidget departureCity="cancun" />
              <CTABox />
              <TrustBadges variant="compact" />
            </div>
          </aside>
        </div>
      </div>

      <CTASection />

      {/* Internal Links Footer */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">{c.exploreMore}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {c.links.map((link) => (
              <LocaleLink key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label} →
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CancunToursPage;
