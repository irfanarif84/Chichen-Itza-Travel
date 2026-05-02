import { LocaleLink as Link } from "@/components/LocaleLink";
import { useState, useMemo } from "react";
import { Users, ChevronRight, Star, MessageCircle, Camera, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createFAQSchema, createBreadcrumbSchema } from "@/lib/seo";
import { generateTourItemListSchema } from "@/lib/schema";
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
import { useLocale } from "@/lib/i18n/useLocale";
import type { Tour } from "@/types/tour";

const filterTours = (allTours: Tour[], filters: FilterState): Tour[] => {
  return allTours.filter((tour) => {
    if (filters.priceRange !== "all") { const price = tour.price.adult; if (filters.priceRange === "0-60" && price >= 60) return false; if (filters.priceRange === "60-100" && (price < 60 || price >= 100)) return false; if (filters.priceRange === "100-150" && (price < 100 || price >= 150)) return false; if (filters.priceRange === "150+" && price < 150) return false; }
    if (filters.duration.length > 0) { const hours = tour.durationHours; const match = filters.duration.some((d) => { if (d === "short") return hours < 8; if (d === "full") return hours >= 8 && hours <= 12; if (d === "long") return hours > 12; return false; }); if (!match) return false; }
    if (filters.tourType.length > 0 && !filters.tourType.includes(tour.tourType)) return false;
    if (filters.category.length > 0 && !filters.category.some((c) => tour.category.includes(c))) return false;
    return true;
  });
};

const SmallGroupPage = () => {
  const { locale } = useLocale();
  const isEs = locale === "es";
  const { getFAQs } = useLocalizedFAQs();
  const smallGroupFAQs = getFAQs("smallGroup");

  const c = isEs ? {
    metaTitle: "Tours en Grupo Pequeño a Chichén Itzá – Experiencias Íntimas 2026",
    metaDesc: "Tours en grupo pequeño a Chichén Itzá con máximo 8-15 viajeros. Más atención personal, mejores fotos, ritmo flexible. Desde $89.",
    breadcrumb: "Grupos Pequeños", rating: "4.8/5 de viajeros en grupo pequeño",
    h1: "Tours en Grupo Pequeño a Chichén Itzá – Experiencias Íntimas",
    subtitle: "Máximo 8-15 viajeros por grupo. Más atención personal de tu guía, mejores fotos y un ritmo más relajado que los grandes autobuses turísticos.",
    badges: [{ icon: Users, text: "Máx. 15 personas" }, { icon: MessageCircle, text: "Atención personal" }, { icon: Camera, text: "Mejores fotos" }, { icon: Shield, text: "Vehículos de calidad" }],
    cta: "Ver Tours Grupo Pequeño",
    recTitle: "Tours en Grupo Pequeño Recomendados",
    recSubtitle: "Tres opciones populares seleccionadas para distintos viajeros.",
    recommended: [
      { slug: "chichen-itza-day-tour-from-cancun", name: "Tour Clásico de un Día desde Cancún", desc: "El Castillo, Cenote Sagrado, almuerzo buffet y nado en cenote con guía bilingüe experto." },
      { slug: "chichen-itza-cenote-ik-kil-combo-tour", name: "Grupo Pequeño + Cenote Ik Kil", desc: "Combina las ruinas con 45 minutos de nado en el icónico cenote Ik Kil." },
      { slug: "chichen-itza-valladolid-colonial-tour", name: "Grupo Pequeño + Valladolid", desc: "Añade la Valladolid colonial con paseo por el centro histórico y degustación local." },
    ],
    fromLabel: "Desde", viewTour: "Ver tour",
    compTitle: "Grupo Pequeño vs. Grupo Grande vs. Privado",
    compHeaders: ["Grupo Pequeño", "Grupo Grande", "Privado"],
    compRows: [
      { label: "Tamaño del grupo", values: ["8-15 personas", "20-40 personas", "1-6 personas"] },
      { label: "Atención del guía", values: ["Alta", "Baja", "Exclusiva"] },
      { label: "Vehículo", values: ["Minivan", "Autobús", "SUV de lujo"] },
      { label: "Flexibilidad", values: ["Moderada", "Fija", "Total"] },
      { label: "Oportunidades de foto", values: ["Buenas", "Limitadas", "Excelentes"] },
      { label: "Rango de precio", values: ["$89-$129", "$49-$79", "$189-$299"] },
      { label: "Ideal para", values: ["La mayoría", "Viajeros de presupuesto", "Parejas/familias"] },
    ],
    tipTitle: "Mejor Relación Calidad-Precio",
    tipContent: "Los tours en grupo pequeño ofrecen el mejor equilibrio entre calidad y precio. Obtienes el 80% de la experiencia privada a la mitad del costo. Son nuestra opción más recomendada para parejas, viajeros solos y familias pequeñas.",
    comp2Title: "Grupo Pequeño vs. Manejar Solo vs. Autobús Turístico",
    comp2Headers: ["Grupo Pequeño", "Manejar Solo", "Autobús Turístico"],
    comp2Rows: [
      { label: "Costo total (2 personas)", values: ["$180-$260", "$150-$220", "$100-$160"] },
      { label: "Tiempo de organización", values: ["Mínimo", "Alto (auto, mapas, entradas)", "Mínimo"] },
      { label: "Nivel de estrés", values: ["Bajo", "Alto (tráfico, peajes)", "Bajo"] },
      { label: "Conocimiento local", values: ["Guía experto", "Solo investigación propia", "Guía estándar"] },
      { label: "Acceso sin filas", values: [true, false, false] },
      { label: "Tiempo para fotos", values: ["Bueno", "Total pero apurado", "Limitado"] },
      { label: "Dinámica de grupo", values: ["Íntima, social", "Solo tu grupo", "Multitud impersonal"] },
      { label: "Ideal para", values: ["La mayoría de viajeros", "Aventureros independientes", "Presupuesto estricto"] },
    ],
    benefitsTitle: "Por Qué Elegir un Tour en Grupo Pequeño",
    benefits: [
      { icon: MessageCircle, title: "Haz Preguntas Libremente", desc: "Con menos personas, puedes interactuar directamente con tu guía y obtener respuestas detalladas sobre la historia maya." },
      { icon: Camera, title: "Mejores Oportunidades de Foto", desc: "Menos espera por otras personas, más tiempo para tu toma perfecta de El Castillo." },
      { icon: Users, title: "Conoce Otros Viajeros", desc: "Los grupos pequeños fomentan conexiones naturalmente. Muchos viajeros hacen amistades duraderas." },
      { icon: Shield, title: "Transporte de Calidad", desc: "Viaja en minivans cómodas con AC, más espacio y menos paradas que los grandes autobuses." },
    ],
    toursTitle: "Todos los Tours en Grupo Pequeño", toursSuffix: "tours en grupo pequeño disponibles",
    faqTitle: "Preguntas Frecuentes – Grupos Pequeños", faqSubtitle: "Preguntas comunes sobre experiencias en grupo pequeño",
    exploreTitle: "Explorar Más Tipos de Tour",
    exploreLinks: [{ label: "Tours de un Día", href: "/tours/day-tours" }, { label: "Tours Privados", href: "/tours/private-tours" }, { label: "Tours al Amanecer", href: "/tours/sunrise-tours" }, { label: "Tours Cenote", href: "/tours/cenote-tours" }, { label: "Desde Cancún", href: "/tours-from/cancun" }, { label: "Todos los Tours", href: "/tours" }],
    noMatch: "Ningún tour coincide con tus filtros.", clearFilters: "Limpiar Filtros",
  } : {
    metaTitle: "Small Group Chichen Itza Tours – Intimate Experiences 2026",
    metaDesc: "Small group Chichen Itza tours with 8-15 travelers max. More personal attention, better photos, flexible pacing. From $89. Book now!",
    breadcrumb: "Small Group Tours", rating: "4.8/5 average from small group travelers",
    h1: "Small Group Chichen Itza Tours – Intimate Experiences",
    subtitle: "Maximum 8-15 travelers per group. More personal attention from your guide, better photos, and a more relaxed pace than large bus tours.",
    badges: [{ icon: Users, text: "Max 15 people" }, { icon: MessageCircle, text: "Personal attention" }, { icon: Camera, text: "Better photos" }, { icon: Shield, text: "Quality vehicles" }],
    cta: "Browse Small Group Tours",
    recTitle: "Recommended Small Group Tours",
    recSubtitle: "Three popular options curated for different travelers.",
    recommended: [
      { slug: "chichen-itza-day-tour-from-cancun", name: "Classic Small Group Day Tour", desc: "El Castillo, Sacred Cenote, buffet lunch and a cenote swim with an expert bilingual guide." },
      { slug: "chichen-itza-cenote-ik-kil-combo-tour", name: "Small Group + Cenote Ik Kil", desc: "Pair the ruins with 45 minutes of swim time at the iconic Ik Kil cenote." },
      { slug: "chichen-itza-valladolid-colonial-tour", name: "Small Group + Valladolid", desc: "Add colonial Valladolid with a walk through the historic center and local tasting." },
    ],
    fromLabel: "From", viewTour: "View tour",
    compTitle: "Small Group vs. Large Group vs. Private",
    compHeaders: ["Small Group", "Large Group", "Private"],
    compRows: [
      { label: "Group Size", values: ["8-15 people", "20-40 people", "1-6 people"] },
      { label: "Guide Attention", values: ["High", "Low", "Exclusive"] },
      { label: "Vehicle", values: ["Minivan", "Tour bus", "Luxury SUV"] },
      { label: "Flexibility", values: ["Moderate", "Fixed", "Full"] },
      { label: "Photo Opportunities", values: ["Good", "Limited", "Excellent"] },
      { label: "Price Range", values: ["$89-$129", "$49-$79", "$189-$299"] },
      { label: "Best For", values: ["Most travelers", "Budget travelers", "Couples/families"] },
    ],
    tipTitle: "Best Value Choice",
    tipContent: "Small group tours offer the best balance of quality and affordability. You get 80% of the private tour experience at roughly half the cost. They're our most recommended option for couples, solo travelers, and small families.",
    comp2Title: "Small Group vs. Self-Drive vs. Joining a Large Bus",
    comp2Headers: ["Small Group", "Self-Drive", "Large Bus"],
    comp2Rows: [
      { label: "Total cost (2 people)", values: ["$180-$260", "$150-$220", "$100-$160"] },
      { label: "Planning time", values: ["Minimal", "High (car, maps, tickets)", "Minimal"] },
      { label: "Stress level", values: ["Low", "High (traffic, tolls)", "Low"] },
      { label: "Local expertise", values: ["Expert guide", "Self-research only", "Standard guide"] },
      { label: "Skip-the-line", values: [true, false, false] },
      { label: "Photo time", values: ["Good", "Full but rushed", "Limited"] },
      { label: "Group dynamic", values: ["Intimate, social", "Just your group", "Impersonal crowd"] },
      { label: "Best for", values: ["Most travelers", "Independent adventurers", "Tight budget"] },
    ],
    benefitsTitle: "Why Choose a Small Group Tour",
    benefits: [
      { icon: MessageCircle, title: "Ask Questions Freely", desc: "With fewer people, you can engage directly with your guide and get detailed answers about Mayan history." },
      { icon: Camera, title: "Better Photo Ops", desc: "Less waiting for other people to move, more time for your perfect shot of El Castillo." },
      { icon: Users, title: "Meet Fellow Travelers", desc: "Small groups naturally foster connections. Many travelers make lasting friendships." },
      { icon: Shield, title: "Quality Transport", desc: "Travel in comfortable minivans with AC, more leg room, and fewer stops." },
    ],
    toursTitle: "All Small Group Chichen Itza Tours", toursSuffix: "small group tours available",
    faqTitle: "Small Group Tour FAQs", faqSubtitle: "Common questions about our small group experiences",
    exploreTitle: "Explore More Tour Types",
    exploreLinks: [{ label: "Day Tours", href: "/tours/day-tours" }, { label: "Private Tours", href: "/tours/private-tours" }, { label: "Sunrise Tours", href: "/tours/sunrise-tours" }, { label: "Cenote Tours", href: "/tours/cenote-tours" }, { label: "From Cancún", href: "/tours-from/cancun" }, { label: "All Tours", href: "/tours" }],
    noMatch: "No tours match your filters.", clearFilters: "Clear All Filters",
  };

  const recommendedTours = useMemo(
    () => c.recommended.map((r) => ({ ...r, tour: tours.find((t) => t.slug === r.slug) })).filter((r) => r.tour),
    [c.recommended]
  );

  const smallGroupTours = useMemo(() => tours.filter((t) => t.category.includes("small-group") || (t.groupSize.type === "small-group" && t.groupSize.max <= 15)), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(smallGroupTours, filters), [smallGroupTours, filters]);

  const meta = getPageMeta({
    title: c.metaTitle,
    description: c.metaDesc,
    canonical: "/tour-types/small-group",
    locale,
    jsonLd: [
      createFAQSchema(smallGroupFAQs),
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Tipos de Tour" : "Tour Types", url: "/tours" },
        { name: c.breadcrumb },
      ]),
      generateTourItemListSchema({
        name: c.h1,
        description: c.subtitle,
        url: "/tour-types/small-group",
        tours: smallGroupTours,
      }),
    ],
  });

  return (
    <>
      <SEOHead meta={meta} />
      <section className="relative bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: isEs ? "Tipos de Tour" : "Tour Types", href: "/tours" }, { label: c.breadcrumb }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-accent text-accent" />))}<span className="ml-2 text-sm text-muted-foreground">{c.rating}</span></div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">{c.h1}</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">{c.subtitle}</p>
            <div className="flex flex-wrap gap-3 mb-6">{c.badges.map((item, i) => (<span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border"><item.icon className="h-4 w-4 text-secondary" />{item.text}</span>))}</div>
            <Button variant="cta" size="lg" asChild><a href="#tours">{c.cta} <ChevronRight className="h-5 w-5" /></a></Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs ? "Nuestros tours en grupo pequeño a Chichén Itzá están diseñados para viajeros que desean una experiencia más personal e íntima sin el costo premium de un tour privado. Con un máximo de 8-15 participantes, disfrutarás una interacción más cercana con tu guía experto." : "Our small group Chichen Itza tours are designed for travelers who want a more personal, intimate experience without the premium cost of a private tour. With a maximum of 8-15 participants, you'll enjoy closer interaction with your expert guide."}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {isEs ? <>Ya sea que seas un <Link to="/tours/day-tours" className="text-primary hover:underline">visitante por primera vez</Link> que desea una experiencia de calidad o un viajero que regresa buscando conocimientos más profundos, los tours en grupo pequeño ofrecen el mejor equilibrio de valor y atención personal.</> : <>Whether you're a <Link to="/tours/day-tours" className="text-primary hover:underline">first-time visitor</Link> wanting a quality experience or a returning traveler looking for deeper insights, small group tours deliver the best balance of value, comfort, and personal attention.</>}
          </p>
        </div>
      </section>

      {/* Recommended Small Group Tours */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-3">{c.recTitle}</h2>
            <p className="text-muted-foreground">{c.recSubtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {recommendedTours.map((r) => (
              <Link key={r.slug} to={`/tours/${r.slug}`} className="group bg-card rounded-lg p-6 border border-border hover:border-secondary hover:shadow-md transition-all flex flex-col">
                <Users className="h-6 w-6 text-secondary mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{r.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{r.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                  <span className="text-sm text-muted-foreground">{c.fromLabel} <span className="font-semibold text-foreground">${r.tour!.price.adult}</span></span>
                  <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">{c.viewTour} <ChevronRight className="h-4 w-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container"><h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">{c.compTitle}</h2>
          <div className="max-w-4xl mx-auto"><ComparisonTable headers={c.compHeaders} highlightColumn={1} rows={c.compRows} /></div>
          <div className="max-w-3xl mx-auto mt-8"><TipBox type="tip" title={c.tipTitle} content={c.tipContent} /></div>
        </div>
      </section>

      {/* Secondary comparison: Small Group vs Self-Drive vs Large Bus */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">{c.comp2Title}</h2>
          <div className="max-w-4xl mx-auto"><ComparisonTable headers={c.comp2Headers} highlightColumn={1} rows={c.comp2Rows} /></div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container"><h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">{c.benefitsTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {c.benefits.map((item, i) => (<div key={i} className="bg-card rounded-lg p-6 border border-border text-center"><div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4"><item.icon className="h-6 w-6 text-secondary" /></div><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">{c.toursTitle}</h2>
          <p className="text-center text-muted-foreground mb-8">{smallGroupTours.length} {c.toursSuffix}</p>
          <TourFilters onFilterChange={setFilters} tourCount={filteredTours.length} className="mb-6" />
          {filteredTours.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{filteredTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}</div>) : (<div className="text-center py-12 bg-card rounded-lg border border-border"><p className="text-muted-foreground mb-4">{c.noMatch}</p><Button variant="outline" onClick={() => setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })}>{c.clearFilters}</Button></div>)}
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <FAQSection faqs={smallGroupFAQs} title={c.faqTitle} subtitle={c.faqSubtitle} />
      <CTASection />
      <section className="py-12 bg-muted/30 border-t border-border"><div className="container"><h2 className="font-heading font-semibold text-lg mb-6">{c.exploreTitle}</h2><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">{c.exploreLinks.map((link) => (<Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>))}</div></div></section>
    </>
  );
};

export default SmallGroupPage;
