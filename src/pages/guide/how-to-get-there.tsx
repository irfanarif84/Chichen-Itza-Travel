import { Link } from "react-router-dom";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";
import {
  ChevronRight,
  Car,
  Bus,
  Users,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import { guideSchemas } from "@/lib/schema";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import ComparisonTable from "@/components/guide/ComparisonTable";
import FAQSection from "@/components/common/FAQ";
import QuickBookingForm from "@/components/features/booking/QuickBookingForm";
import TrustBadges from "@/components/features/booking/TrustBadges";
import PopularToursWidget from "@/components/features/tours/PopularToursWidget";
import { guideImages } from "@/lib/tourImages";
import TableOfContents from "@/components/common/TableOfContents";

const faqData = [
  {
    question: "How far is Chichen Itza from Cancun?",
    answer:
      "Chichen Itza is approximately 120 miles (193 km) from Cancun, taking 2.5-3 hours by car via Highway 180D (toll road). Most tours depart Cancun between 6:30-7:30 AM to arrive when the site opens at 8:00 AM.",
  },
  {
    question: "Is it better to drive or take a tour to Chichen Itza?",
    answer:
      "Tours are recommended for most visitors. While driving costs $60-80 for car rental plus $30 gas and $15 tolls, tours ($89-109) include transportation, expert guides, entrance fees, lunch, and often cenote visits. You also avoid navigation stress and parking hassles.",
  },
  {
    question: "Can you take a bus to Chichen Itza?",
    answer:
      "Yes, ADO buses run from Cancun, Playa del Carmen, Merida, and Valladolid to Chichen Itza. From Cancun, buses depart at 8:45 AM daily, cost $12-15 USD one-way, and take 3-4 hours. However, you'll miss expert guide commentary and must arrange your own return.",
  },
  {
    question: "How long does it take to get to Chichen Itza from Playa del Carmen?",
    answer:
      "The drive from Playa del Carmen to Chichen Itza takes 1.5-2 hours (95 miles/153 km). This is the closest major departure point, meaning tours from Playa can leave later (7:00-7:30 AM) and still arrive early.",
  },
  {
    question: "Is the drive to Chichen Itza safe?",
    answer:
      "Yes, Highway 180D (the toll road) is well-maintained, modern, and safe. It's heavily traveled by tourists and locals. Drive during daylight hours and use the toll road (not the free road). The route is considered one of the safest drives in the Yucatan.",
  },
  {
    question: "Do I need a car to visit Chichen Itza?",
    answer:
      "No. Guided tours are the most popular option and include round-trip transportation from your hotel. Tours offer better value than renting a car when you factor in guide expertise, entrance fees, and lunch.",
  },
];

const faqDataEs = [
  { question: "¿Qué tan lejos está Chichén Itzá de Cancún?", answer: "Chichén Itzá está a aproximadamente 193 km (120 millas) de Cancún, tomando 2.5-3 horas en auto por la autopista 180D (de cuota). La mayoría de los tours salen de Cancún entre las 6:30-7:30 AM para llegar cuando el sitio abre a las 8:00 AM." },
  { question: "¿Es mejor manejar o tomar un tour a Chichén Itzá?", answer: "Los tours son recomendados para la mayoría de los visitantes. Mientras que manejar cuesta $60-80 por renta de auto más $30 de gasolina y $15 de peajes, los tours ($89-109) incluyen transporte, guías expertos, tarifas de entrada, comida y frecuentemente visitas a cenotes." },
  { question: "¿Se puede tomar un autobús a Chichén Itzá?", answer: "Sí, los autobuses ADO salen de Cancún, Playa del Carmen, Mérida y Valladolid hacia Chichén Itzá. Desde Cancún, los autobuses salen a las 8:45 AM diariamente, cuestan $12-15 USD ida y tardan 3-4 horas." },
  { question: "¿Cuánto tiempo toma llegar a Chichén Itzá desde Playa del Carmen?", answer: "El viaje desde Playa del Carmen a Chichén Itzá toma 1.5-2 horas (153 km). Es el punto de salida principal más cercano, lo que significa que los tours pueden salir más tarde (7:00-7:30 AM) y aún llegar temprano." },
  { question: "¿Es seguro el camino a Chichén Itzá?", answer: "Sí, la autopista 180D (de cuota) está bien mantenida, es moderna y segura. Es muy transitada por turistas y locales. Maneja durante el día y usa la autopista de cuota (no la libre). Se considera una de las rutas más seguras en Yucatán." },
  { question: "¿Necesito un auto para visitar Chichén Itzá?", answer: "No. Los tours guiados son la opción más popular e incluyen transporte ida y vuelta desde tu hotel. Los tours ofrecen mejor valor que rentar un auto cuando consideras la experiencia del guía, las tarifas de entrada y la comida." },
];

const getMeta = (locale: "en" | "es") => {
  const isEs = locale === "es";
  return getPageMeta({
    title: isEs
      ? "Cómo Llegar a Chichén Itzá – Guía de Transporte 2026"
      : "How to Get to Chichen Itza – Complete Transport Guide 2026",
    description: isEs
      ? "Guía completa para llegar a Chichén Itzá desde Cancún, Playa del Carmen y Tulum. Compara tours, autos de alquiler, autobuses, distancias y costos."
      : "Complete guide to reaching Chichen Itza from Cancun, Playa del Carmen, and Tulum. Compare tours, rental cars, buses, distances, and costs.",
    canonical: "/guide/how-to-get-there",
    ogType: "article",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Guía" : "Guide", url: "/guide" },
        { name: isEs ? "Cómo Llegar" : "How to Get There" },
      ]),
      guideSchemas["how-to-get-there"],
      createFAQSchema(faqData),
    ],
  });
};

const HowToGetTherePage = () => {
  const { locale, isEs } = useLocale();
  const meta = getMeta(locale);
  const breadcrumbs = [
    { label: isEs ? "Guía" : "Guide", href: "/guide" },
    { label: isEs ? "Cómo Llegar" : "How to Get There" },
  ];

  const tocItems = [
    { id: "distances",        title: isEs ? "Distancia desde Ciudades Principales" : "Distance from Major Cities" },
    { id: "comparison",       title: isEs ? "Opciones de Transporte Comparadas"    : "Transportation Options Compared" },
    { id: "guided-tours",     title: isEs ? "Opción 1: Tours Guiados"              : "Option 1: Guided Tours" },
    { id: "rental-car",       title: isEs ? "Opción 2: Auto de Alquiler"           : "Option 2: Drive Yourself" },
    { id: "ado-bus",          title: isEs ? "Opción 3: Autobús ADO"                : "Option 3: ADO Bus" },
    { id: "private-transfer", title: isEs ? "Opción 4: Transfer Privado"           : "Option 4: Private Transfer" },
    { id: "faq",              title: isEs ? "Preguntas Frecuentes"                 : "FAQ" },
  ];

  const distances = [
    { city: "Cancún", icon: "🏖️", distance: "120 miles (193 km)", time: isEs ? "2.5-3 horas" : "2.5-3 hours" },
    { city: "Playa del Carmen", icon: "🌴", distance: "95 miles (153 km)", time: isEs ? "1.5-2 horas" : "1.5-2 hours" },
    { city: "Tulum", icon: "🏛️", distance: "95 miles (153 km)", time: isEs ? "2-2.5 horas" : "2-2.5 hours" },
    { city: "Mérida", icon: "🏙️", distance: "75 miles (121 km)", time: isEs ? "1.5 horas" : "1.5 hours" },
    { city: "Valladolid", icon: "🌺", distance: "26 miles (42 km)", time: isEs ? "30-40 minutos" : "30-40 minutes" },
    { city: "Cozumel", icon: "⛴️", distance: "130 miles (209 km)", time: isEs ? "4+ horas (ferry + auto)" : "4+ hours (ferry + drive)" },
  ];

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-12 lg:py-16 overflow-hidden">
        <img
          src={guideImages["how-to-get-there"]}
          alt={isEs ? "Camino escénico por la selva yucateca hacia Chichén Itzá" : "Scenic road through Yucatan jungle leading to Chichen Itza"}
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          loading="eager"
        />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {isEs
                ? "Cómo Llegar a Chichén Itzá: Guía Completa de Transporte"
                : "How to Get to Chichen Itza: Complete Transportation Guide"}
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              {isEs
                ? "Compara todas las opciones de transporte — tours guiados, autos de alquiler y autobuses públicos — desde cada ciudad principal de Yucatán."
                : "Compare all transport options — guided tours, rental cars, and public buses — from every major departure city in the Yucatan."}
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span>{isEs ? "Actualizado: abril 2026" : "Updated: April 2026"}</span>
              <span>•</span>
              <span>{isEs ? "8 min lectura" : "8 min read"}</span>
            </div>
            <Button variant="cta" size="lg" asChild>
              <LocaleLink to="/tours">
                {isEs ? "Reservar Tour con Transporte" : "Book a Tour with Transport"} <ChevronRight className="h-5 w-5" />
              </LocaleLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10">
            {/* Main Content */}
            <div className="space-y-12">
              <TableOfContents items={tocItems} isEs={isEs} />

              {/* Quick Answer */}
              <div className="bg-success/5 border-2 border-success rounded-xl p-6">
                <h2 className="font-heading font-bold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" /> {isEs ? "Respuesta Rápida: La Mejor Forma de Llegar" : "Quick Answer: Best Way to Get There"}
                </h2>
                <p className="text-muted-foreground mb-3">
                  {isEs ? (
                    <><strong>Para el 95% de los visitantes: Reserva un tour guiado.</strong> Los tours desde Cancún, Playa del Carmen o Tulum proporcionan transporte, guías expertos, tarifas de entrada y comida por $89-$129 — mejor valor que manejar tú mismo cuando consideras la renta de auto, gasolina, peajes y la falta de comentarios expertos.</>
                  ) : (
                    <><strong>For 95% of visitors: Book a guided tour.</strong> Tours from Cancun, Playa del Carmen, or Tulum provide transportation, expert guides, entrance fees, and lunch for $89-$129 — better value than driving yourself when you factor in car rental, gas, tolls, and missing the expert commentary.</>
                  )}
                </p>
                <p className="text-muted-foreground">
                  {isEs ? (
                    <><strong>Maneja tú mismo solo si:</strong> Quieres flexibilidad total de horarios, planeas visitar múltiples sitios durante varios días, o te hospedas en Valladolid o Mérida (muy cerca de Chichén Itzá).</>
                  ) : (
                    <><strong>Drive yourself only if:</strong> You want complete schedule flexibility, plan to visit multiple sites over several days, or are staying in Valladolid or Merida (very close to Chichen Itza).</>
                  )}
                </p>
              </div>

              {/* Distance Quick Reference */}
              <section id="distances">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                  {isEs ? "Distancia desde las Principales Ciudades" : "Distance from Major Cities"}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {distances.map((loc) => (
                    <div key={loc.city} className="bg-card rounded-xl p-4 border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{loc.icon}</span>
                        <h3 className="font-heading font-semibold">{loc.city}</h3>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" /> {loc.distance}
                        </p>
                        <p className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-primary flex-shrink-0" /> {loc.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Transport Comparison Table */}
              <section id="comparison">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                  {isEs ? "Comparación de Opciones de Transporte" : "Transportation Options Compared"}
                </h2>
                <ComparisonTable
                  recommendedLabel={isEs ? "Recomendado" : "Recommended"}
                  headers={isEs ? ["Tour Guiado", "Auto de Alquiler", "Autobús ADO"] : ["Guided Tour", "Rental Car", "ADO Bus"]}
                  rows={isEs ? [
                    { label: "Costo (por persona)", values: ["$89-$189", "$60-100 total", "$25-30 ida y vuelta"] },
                    { label: "Conveniencia", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐"] },
                    { label: "Flexibilidad", values: ["Horario fijo", "Libertad total", "Horario del autobús"] },
                    { label: "Guía incluido", values: [true, false, false] },
                    { label: "Tarifa de entrada", values: ["Incluida", "Extra ~$27", "Extra ~$27"] },
                    { label: "Comida", values: ["Generalmente incluida", "Costo extra", "Costo extra"] },
                    { label: "Mejor para", values: ["La mayoría", "Viajeros independientes", "Viajeros con presupuesto"] },
                  ] : [
                    { label: "Cost (per person)", values: ["$89-$189", "$60-100 total", "$25-30 round-trip"] },
                    { label: "Convenience", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐"] },
                    { label: "Flexibility", values: ["Fixed schedule", "Full freedom", "Bus schedule"] },
                    { label: "Guide included", values: [true, false, false] },
                    { label: "Entrance fee", values: ["Included", "Extra ~$27", "Extra ~$27"] },
                    { label: "Lunch", values: ["Usually included", "Extra cost", "Extra cost"] },
                    { label: "Best for", values: ["Most visitors", "Independent travelers", "Budget travelers"] },
                  ]}
                />
              </section>

              {/* Option 1: Guided Tours */}
              <section id="guided-tours">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-2">
                  <Users className="h-7 w-7 text-success" /> {isEs ? "Opción 1: Tours Guiados (Recomendado)" : "Option 1: Guided Tours (Recommended)"}
                </h2>

                <TipBox
                  type="success"
                  title={isEs ? "Mejor Opción para la Mayoría" : "Best Choice for Most Visitors"}
                  content={isEs
                    ? "Los tours guiados ofrecen el mejor valor y experiencia. Obtendrás comentarios históricos expertos que dan vida a las ruinas, logística sin complicaciones, y frecuentemente experiencias adicionales como nadar en cenotes o visitar pueblos coloniales."
                    : "Guided tours offer the best value and experience. You'll get expert historical commentary that brings the ruins to life, hassle-free logistics, and often additional experiences like cenote swimming or colonial town visits."
                  }
                />

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-card rounded-xl p-5 border border-border">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-3">{isEs ? "✓ Qué Incluye:" : "✓ What's Included:"}</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {(isEs ? [
                        "Transporte ida y vuelta con aire acondicionado",
                        "Recogida y regreso al hotel",
                        "Guía bilingüe certificado",
                        "Tarifas de entrada al sitio arqueológico",
                        "Comida buffet (la mayoría de los tours)",
                        "Seguro de viaje",
                        "Agua embotellada",
                      ] : [
                        "Round-trip air-conditioned transportation",
                        "Hotel pickup and drop-off",
                        "Certified bilingual guide",
                        "Entrance fees to archaeological site",
                        "Buffet lunch (most tours)",
                        "Travel insurance",
                        "Bottled water",
                      ]).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-border">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-3">{isEs ? "💰 Precios por Tipo de Tour:" : "💰 Pricing by Tour Type:"}</p>
                    <div className="space-y-3 text-sm">
                      {(isEs ? [
                        { type: "Tour en Grupo Estándar", price: "$89-$99", note: "12-15 personas, experiencia clásica" },
                        { type: "Tour en Grupo Pequeño", price: "$109-$119", note: "Máx 12 personas, más personal" },
                        { type: "Tour al Amanecer", price: "$129-$139", note: "Acceso temprano, luz dorada" },
                        { type: "Tour Privado", price: "$189-$299/persona", note: "Solo tu grupo, horario flexible" },
                      ] : [
                        { type: "Standard Group Tour", price: "$89-$99", note: "12-15 people, classic experience" },
                        { type: "Small Group Tour", price: "$109-$119", note: "Max 12 people, more personal" },
                        { type: "Sunrise Tour", price: "$129-$139", note: "Early access, golden hour light" },
                        { type: "Private Tour", price: "$189-$299/person", note: "Your group only, flexible schedule" },
                      ]).map((t) => (
                        <div key={t.type}>
                          <p className="font-semibold">
                            {t.type}: <span className="text-primary">{t.price}</span>
                          </p>
                          <p className="text-xs text-muted-foreground">{t.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Departure city links */}
                <div className="space-y-2 mt-6">
                  {(isEs ? [
                    { to: "/tours-from/cancun", label: "Tours desde Cancún", detail: "Salida más popular • 2.5 horas en auto • Sale 6:30-7:30 AM", price: "Desde $89" },
                    { to: "/tours-from/playa-del-carmen", label: "Tours desde Playa del Carmen", detail: "Punto de salida más cercano • 1.5 horas • Sale 7:00-7:30 AM", price: "Desde $89" },
                    { to: "/tours-from/tulum", label: "Tours desde Tulum", detail: "Viajeros culturales • 2 horas • Visita dos sitios mayas", price: "Desde $94" },
                    { to: "/tours-from/merida", label: "Tours desde Mérida", detail: "Ciudad más cercana • 1.5 horas • Inmersión cultural", price: "Desde $79" },
                  ] : [
                    { to: "/tours-from/cancun", label: "Tours from Cancún", detail: "Most popular departure • 2.5 hour drive • Departs 6:30-7:30 AM", price: "From $89" },
                    { to: "/tours-from/playa-del-carmen", label: "Tours from Playa del Carmen", detail: "Closest departure point • 1.5 hour drive • Departs 7:00-7:30 AM", price: "From $89" },
                    { to: "/tours-from/tulum", label: "Tours from Tulum", detail: "Cultural travelers • 2 hour drive • Visit two Mayan sites", price: "From $94" },
                    { to: "/tours-from/merida", label: "Tours from Mérida", detail: "Closest city • 1.5 hour drive • Cultural immersion", price: "From $79" },
                  ]).map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="flex items-center justify-between bg-card rounded-xl p-4 border border-border hover:border-primary transition-colors group"
                    >
                      <div>
                        <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {link.label} →
                        </p>
                        <p className="text-xs text-muted-foreground">{link.detail}</p>
                      </div>
                      <span className="text-primary font-bold text-sm whitespace-nowrap">{link.price}</span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Option 2: Rental Car */}
              <section id="rental-car">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-2">
                  <Car className="h-7 w-7 text-primary" /> {isEs ? "Opción 2: Manejar Tú Mismo (Auto de Alquiler)" : "Option 2: Drive Yourself (Rental Car)"}
                </h2>

                <p className="text-muted-foreground mb-6">
                  {isEs
                    ? "Manejar a Chichén Itzá es sencillo por la autopista 180D (de cuota). Esta opción es ideal para viajeros independientes que quieren flexibilidad de horario o planean visitar múltiples sitios."
                    : "Driving to Chichen Itza is straightforward via Highway 180D (toll road). This option suits independent travelers who want schedule flexibility or plan to visit multiple sites."}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card rounded-xl p-5 border-2 border-success">
                    <p className="text-xs font-semibold uppercase tracking-wider text-success mb-3">{isEs ? "✓ Ventajas:" : "✓ Advantages:"}</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {(isEs ? [
                        "Control total del horario (llega/sal cuando quieras)",
                        "Para en atracciones en el camino (cenotes, pueblos)",
                        "Visita múltiples sitios en un día (Ek Balam, Valladolid)",
                        "Sin esperar a otros miembros del grupo",
                        "Explora a tu propio ritmo",
                      ] : [
                        "Complete schedule control (arrive/leave when you want)",
                        "Stop at attractions along the way (cenotes, towns)",
                        "Visit multiple sites in one day (Ek Balam, Valladolid)",
                        "No waiting for tour group members",
                        "Explore at your own pace",
                      ]).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card rounded-xl p-5 border-2 border-destructive">
                    <p className="text-xs font-semibold uppercase tracking-wider text-destructive mb-3">{isEs ? "✗ Desventajas:" : "✗ Disadvantages:"}</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {(isEs ? [
                        "Te pierdes los comentarios del guía experto (historia/contexto)",
                        "Navegación requerida (aunque la ruta es simple)",
                        "Tarifas y molestias de estacionamiento",
                        "El conductor no puede relajarse o dormir en el viaje",
                        "Costo total frecuentemente similar al tour guiado",
                      ] : [
                        "Miss expert guide commentary (history/context)",
                        "Navigation required (though route is simple)",
                        "Parking fees and hassle",
                        "Driver can't relax or nap on journey",
                        "Total cost often similar to guided tour",
                      ]).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="bg-card rounded-xl p-5 border border-border mb-6">
                  <p className="font-heading font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" /> {isEs ? "Desglose de Costos (desde Cancún):" : "Total Cost Breakdown (from Cancún):"}
                  </p>
                  <div className="space-y-2 text-sm">
                    {(isEs ? [
                      { item: "Renta de auto (1 día, compacto básico)", cost: "$60-80" },
                      { item: "Gasolina (ida y vuelta ~400 km)", cost: "$25-30" },
                      { item: "Peajes de autopista (180D ida y vuelta)", cost: "$15" },
                      { item: "Estacionamiento en Chichén Itzá", cost: "$5" },
                      { item: "Tarifa de entrada (por persona)", cost: "$27" },
                      { item: "Comida (por persona)", cost: "$10-15" },
                    ] : [
                      { item: "Rental car (1 day, basic compact)", cost: "$60-80" },
                      { item: "Gas (round trip ~250 miles)", cost: "$25-30" },
                      { item: "Highway tolls (180D both ways)", cost: "$15" },
                      { item: "Parking at Chichen Itza", cost: "$5" },
                      { item: "Entrance fee (per person)", cost: "$27" },
                      { item: "Lunch (per person)", cost: "$10-15" },
                    ]).map((row) => (
                      <div key={row.item} className="flex justify-between">
                        <span className="text-muted-foreground">{row.item}</span>
                        <span className="font-medium">{row.cost}</span>
                      </div>
                    ))}
                    <div className="flex justify-between border-t border-border pt-2 font-bold">
                      <span>{isEs ? "TOTAL (para 2 personas):" : "TOTAL (for 2 people):"}</span>
                      <span className="text-primary">$184-224</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    {isEs
                      ? "Compara con el tour guiado: $178-198 para 2 personas (incluye guía, sin estrés de manejar)"
                      : "Compare to guided tour: $178-198 for 2 people (includes guide, no driving stress)"}
                  </p>
                </div>

                {/* Driving Tips */}
                <div className="bg-accent/5 border border-accent rounded-xl p-5">
                  <p className="font-heading font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-accent" /> {isEs ? "Consejos y Advertencias para Manejar:" : "Driving Tips & Warnings:"}
                  </p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {(isEs ? [
                      { bold: "Usa la autopista 180D (de cuota)", rest: ", NO la carretera libre 180. La autopista de cuota es más segura, rápida y mejor mantenida." },
                      { bold: "", rest: "Maneja solo durante el día (6 AM - 6 PM)" },
                      { bold: "", rest: "El GPS puede ser poco confiable — descarga mapas offline antes" },
                      { bold: "", rest: "Lleva efectivo en pesos mexicanos para peajes (no siempre aceptan tarjetas)" },
                      { bold: "", rest: "Gasolineras: Llena en Cancún o Playa; las estaciones son escasas en la ruta" },
                      { bold: "", rest: "Límite de velocidad: 110 km/h en la autopista de cuota, con cámaras de velocidad" },
                      { bold: "", rest: "Se requiere seguro de auto mexicano (las compañías de renta lo proporcionan)" },
                    ] : [
                      { bold: "Use Highway 180D (toll road)", rest: ", NOT the free road 180. The toll road is safer, faster, and better maintained." },
                      { bold: "", rest: "Drive during daylight hours only (6 AM - 6 PM)" },
                      { bold: "", rest: "GPS can be unreliable — download offline maps beforehand" },
                      { bold: "", rest: "Bring Mexican pesos cash for tolls (credit cards not always accepted)" },
                      { bold: "", rest: "Gas stations: Fill up in Cancun or Playa; stations are sparse along route" },
                      { bold: "", rest: "Speed limit: 110 km/h (68 mph) on toll road, enforced by cameras" },
                      { bold: "", rest: "Mexican car insurance required (rental companies provide)" },
                    ]).map((tip, i) => (
                      <li key={i}>
                        • {tip.bold ? <strong>{tip.bold}</strong> : null}{tip.rest}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Option 3: ADO Bus */}
              <section id="ado-bus">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-2">
                  <Bus className="h-7 w-7 text-accent" /> {isEs ? "Opción 3: Autobús ADO (Opción Económica)" : "Option 3: ADO Bus (Budget Option)"}
                </h2>

                <p className="text-muted-foreground mb-6">
                  {isEs
                    ? "ADO opera autobuses de primera clase desde las principales ciudades a Chichén Itzá. La opción económica, pero con compromisos en conveniencia y tiempo."
                    : "ADO operates first-class buses from major cities to Chichen Itza. The budget-friendly option, but with trade-offs in convenience and time."}
                </p>

                <div className="bg-card rounded-xl p-5 border border-border mb-6">
                  <p className="font-heading font-semibold mb-4">{isEs ? "Horarios y Precios de Autobuses ADO" : "ADO Bus Schedule & Pricing"}</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {(isEs ? [
                      { from: "Desde Cancún:", lines: ["Salida: 8:45 AM (diario)", "Duración: 3-4 horas", "Costo: $12-15 USD ida", "Regreso: 4:30 PM (¡último autobús!)"] },
                      { from: "Desde Playa del Carmen:", lines: ["Salida: 9:15 AM (diario)", "Duración: 3 horas", "Costo: $10-12 USD ida", "Regreso: 4:30 PM"] },
                      { from: "Desde Valladolid:", lines: ["Salidas: 7 AM, 9 AM, 11 AM", "Duración: 45 minutos", "Costo: $3-5 USD ida"] },
                    ] : [
                      { from: "From Cancún:", lines: ["Departure: 8:45 AM (daily)", "Duration: 3-4 hours", "Cost: $12-15 USD one-way", "Return: 4:30 PM (last bus!)"] },
                      { from: "From Playa del Carmen:", lines: ["Departure: 9:15 AM (daily)", "Duration: 3 hours", "Cost: $10-12 USD one-way", "Return: 4:30 PM"] },
                      { from: "From Valladolid:", lines: ["Departures: 7 AM, 9 AM, 11 AM", "Duration: 45 minutes", "Cost: $3-5 USD one-way"] },
                    ]).map((schedule) => (
                      <div key={schedule.from}>
                        <p className="font-semibold text-sm mb-2">{schedule.from}</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {schedule.lines.map((line) => (
                            <li key={line}>• {line}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card rounded-xl p-5 border border-border">
                    <p className="text-xs font-semibold uppercase tracking-wider text-success mb-3">{isEs ? "✓ Ventajas:" : "✓ Pros:"}</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {(isEs ? [
                        "Opción más barata ($25-30 ida y vuelta)",
                        "Autobuses cómodos de primera clase (A/C, baños)",
                        "Sin estrés de manejar",
                        "Horario confiable",
                      ] : [
                        "Cheapest option ($25-30 round-trip)",
                        "Comfortable first-class buses (A/C, bathrooms)",
                        "No driving stress",
                        "Reliable schedule",
                      ]).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-border">
                    <p className="text-xs font-semibold uppercase tracking-wider text-destructive mb-3">{isEs ? "✗ Desventajas:" : "✗ Cons:"}</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {(isEs ? [
                        "Sin guía (te pierdes el contexto histórico)",
                        "Horarios limitados de salida/regreso",
                        "Debes organizar tu propia comida",
                        "Llegas tarde (el sitio ya está lleno)",
                        "La terminal de autobuses suele estar lejos de los hoteles",
                      ] : [
                        "No guide (miss historical context)",
                        "Limited departure/return times",
                        "Must arrange own lunch",
                        "Arrive late (site already crowded)",
                        "Bus station often far from hotels",
                      ]).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <TipBox
                  type="info"
                  title={isEs ? "Consejo Económico" : "Budget Tip"}
                  content={isEs
                    ? "Si tomas el autobús, quédate una noche en Valladolid (30 min de Chichén Itzá) en lugar de ir y volver. Hoteles desde $30/noche, múltiples autobuses diarios, y puedes llegar al sitio a la apertura cuando hay menos gente."
                    : "If taking the bus, stay overnight in Valladolid (30 min from Chichen Itza) instead. Hotels from $30/night, multiple daily buses, and you can arrive at the site at opening when it's least crowded."
                  }
                />
              </section>

              {/* Option 4: Private Transfer */}
              <section id="private-transfer">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
                  {isEs ? "Opción 4: Transfer Privado / Chofer" : "Option 4: Private Transfer / Driver"}
                </h2>

                <p className="text-muted-foreground mb-4">
                  {isEs
                    ? "Contrata un chofer privado para lujo y flexibilidad sin la molestia de manejar tú mismo. Ideal para grupos que dividen el costo o quienes desean servicio VIP."
                    : "Hire a private driver for luxury and flexibility without the hassle of driving yourself. Best for groups splitting the cost or those wanting VIP service."}
                </p>

                <div className="bg-card rounded-xl p-5 border border-border">
                  <p className="font-heading font-semibold mb-3">{isEs ? "Precios y Detalles:" : "Pricing & Details:"}</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• <strong>{isEs ? "Costo:" : "Cost:"}</strong> $300-500 {isEs ? "por vehículo (hasta 6-8 pasajeros)" : "for vehicle (up to 6-8 passengers)"}</li>
                    <li>• <strong>{isEs ? "Costo por persona (grupo de 4):" : "Per person cost (group of 4):"}</strong> $75-125 {isEs ? "cada uno" : "each"}</li>
                    <li>• <strong>{isEs ? "Incluye:" : "Includes:"}</strong> {isEs ? "Vehículo privado, chofer, horario flexible" : "Private vehicle, driver, flexible schedule"}</li>
                    <li>• <strong>{isEs ? "No incluye:" : "Not included:"}</strong> {isEs ? "Servicios de guía, tarifas de entrada, comida" : "Guide services, entrance fees, lunch"}</li>
                    <li>• <strong>{isEs ? "Mejor para:" : "Best for:"}</strong> {isEs ? "Familias, grupos, viajeros de lujo" : "Families, groups, luxury travelers"}</li>
                  </ul>
                  <Link
                    to="/tours/private-tours"
                    className="inline-block mt-3 text-sm text-primary hover:underline font-medium"
                  >
                    {isEs ? "Ver Opciones de Tours Privados →" : "View Private Tour Options →"}
                  </Link>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <FAQSection
                  title={isEs ? "Preguntas Frecuentes sobre Cómo Llegar a Chichén Itzá" : "Frequently Asked Questions About Getting to Chichen Itza"}
                  subtitle={isEs ? "Preguntas comunes de viajeros que planifican su viaje" : "Common questions from travelers planning their journey"}
                  faqs={isEs ? faqDataEs : faqData}
                />
              </section>

              {/* Final CTA */}
              <div className="text-center bg-primary/5 rounded-xl p-8 border border-primary/20">
                <h2 className="font-heading font-bold text-2xl mb-3">
                  {isEs ? "¿Listo para Visitar Chichén Itzá?" : "Ready to Visit Chichen Itza?"}
                </h2>
                <p className="text-muted-foreground mb-5">
                  {isEs
                    ? "Olvídate del estrés de manejar — reserva un tour guiado con recogida en el hotel incluida."
                    : "Skip the driving stress — book a guided tour with hotel pickup included."}
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button variant="cta" size="lg" asChild>
                    <LocaleLink to="/tours">
                      {isEs ? "Ver Todos los Tours" : "Browse All Tours"} <ChevronRight className="h-5 w-5" />
                    </LocaleLink>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <LocaleLink to="/practical/contact">{isEs ? "Hacer una Pregunta" : "Ask a Question"}</LocaleLink>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <QuickBookingForm />
              <TrustBadges />
              <PopularToursWidget />

              <div className="bg-card rounded-lg border border-border p-5">
                <h3 className="font-heading font-bold text-base mb-3">{isEs ? "Más Guías de Planificación" : "More Planning Guides"}</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <LocaleLink to="/guide/best-time-to-visit" className="text-primary hover:underline">
                      → {isEs ? "Mejor Época para Visitar" : "Best Time to Visit"}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink to="/guide/what-to-bring" className="text-primary hover:underline">
                      → {isEs ? "Qué Llevar" : "What to Bring"}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink to="/guide/entrance-fees" className="text-primary hover:underline">
                      → {isEs ? "Precios de Entrada" : "Entrance Fees"}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink to="/guide/photography-tips" className="text-primary hover:underline">
                      → {isEs ? "Consejos de Fotografía" : "Photography Tips"}
                    </LocaleLink>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Internal Links */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">{isEs ? "Planifica Tu Viaje" : "Plan Your Trip"}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {(isEs ? [
              { label: "Desde Cancún", href: "/tours-from/cancun" },
              { label: "Desde Playa del Carmen", href: "/tours-from/playa-del-carmen" },
              { label: "Desde Tulum", href: "/tours-from/tulum" },
              { label: "Desde Mérida", href: "/tours-from/merida" },
              { label: "Mejor Época para Visitar", href: "/guide/best-time-to-visit" },
              { label: "Qué Llevar", href: "/guide/what-to-bring" },
              { label: "Precios de Entrada", href: "/guide/entrance-fees" },
              { label: "Tours Económicos", href: "/tour-types/budget" },
              { label: "Tours Privados", href: "/tours/private-tours" },
              { label: "Todos los Tours", href: "/tours" },
            ] : [
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
              { label: "From Tulum", href: "/tours-from/tulum" },
              { label: "From Mérida", href: "/tours-from/merida" },
              { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
              { label: "What to Bring", href: "/guide/what-to-bring" },
              { label: "Entrance Fees", href: "/guide/entrance-fees" },
              { label: "Budget Tours", href: "/tour-types/budget" },
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "All Tours", href: "/tours" },
            ]).map((link) => (
              <LocaleLink
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label} →
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToGetTherePage;
