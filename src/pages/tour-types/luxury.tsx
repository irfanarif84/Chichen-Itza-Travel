import { LocaleLink as Link } from "@/components/LocaleLink";
import { useState, useMemo } from "react";
import { Gem, ChevronRight, Star, Wine, Car, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import { generateTourItemListSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourFilters, { type FilterState } from "@/components/features/tours/TourFilters";
import TrustBadges from "@/components/features/booking/TrustBadges";
import FAQSection from "@/components/common/FAQ";
import ComparisonTable from "@/components/guide/ComparisonTable";
import TipBox from "@/components/guide/TipBox";
import CTASection from "@/components/features/home/CTASection";
import { tours } from "@/lib/tourData";
import { useLocale } from "@/lib/i18n/useLocale";
import type { Tour } from "@/types/tour";

const filterTours = (allTours: Tour[], filters: FilterState): Tour[] => {
  return allTours.filter((tour) => {
    if (filters.priceRange !== "all") { const price = tour.price.adult; if (filters.priceRange === "0-60" && price >= 60) return false; if (filters.priceRange === "60-100" && (price < 60 || price >= 100)) return false; if (filters.priceRange === "100-150" && (price < 100 || price >= 150)) return false; if (filters.priceRange === "150+" && price < 150) return false; }
    if (filters.duration.length > 0) { const hours = tour.durationHours; const match = filters.duration.some((d) => { if (d === "short") return hours < 8; if (d === "full") return hours >= 8 && hours <= 12; if (d === "long") return hours > 12; return false; }); if (!match) return false; }
    return true;
  });
};

const FEATURED_SLUGS = [
  "chichen-itza-private-vip-tour",
  "chichen-itza-private-sunrise-tour",
  "chichen-itza-cenote-saamal-combo-tour",
] as const;

const LuxuryToursPage = () => {
  const { locale } = useLocale();
  const isEs = locale === "es";

  const c = isEs ? {
    metaTitle: "Tours de Lujo a Chichén Itzá – Experiencias VIP Premium 2026",
    metaDesc: "Tours de lujo a Chichén Itzá con arqueólogo privado, cena gourmet, SUV de lujo, acceso sin filas. La experiencia VIP definitiva desde $189.",
    breadcrumb: "Tours de Lujo", rating: "5.0/5 de viajeros de lujo",
    h1: "Tours de Lujo a Chichén Itzá – Experiencias VIP Premium",
    subtitle: "Guías arqueólogos privados, transporte en SUV de lujo, cena gourmet en hacienda y acceso VIP sin filas. La forma definitiva de experimentar Chichén Itzá.",
    badges: [{ icon: Crown, text: "Acceso VIP" }, { icon: Wine, text: "Cena gourmet" }, { icon: Car, text: "Transporte de lujo" }, { icon: Sparkles, text: "Guía privado" }],
    cta: "Ver Tours de Lujo",
    diffTitle: "La Diferencia del Lujo",
    diffItems: [
      { icon: Car, title: "SUV de Lujo", desc: "Viaja en un vehículo premium con asientos de piel, WiFi, AC y bebidas premium de cortesía." },
      { icon: Crown, title: "Entrada Prioritaria", desc: "Salta todas las filas con acceso VIP. Entra por la puerta prioritaria y ahorra 30-60 minutos." },
      { icon: Wine, title: "Cena Gourmet", desc: "Gastronomía en haciendas restauradas con cocina regional, maridaje de vinos y opciones vegetarianas." },
      { icon: Gem, title: "Cenotes Exclusivos", desc: "Visita cenotes privados lejos de las multitudes turísticas para una experiencia íntima de baño." },
    ],
    featuredTitle: "Experiencias de Lujo Destacadas",
    featuredSubtitle: "Tres tours premium seleccionados a mano para viajeros exigentes.",
    featured: [
      { slug: FEATURED_SLUGS[0], name: "Tour VIP Privado en Hacienda", desc: "Arqueólogo privado, SUV de lujo, comida gourmet en hacienda restaurada y acceso prioritario sin filas." },
      { slug: FEATURED_SLUGS[1], name: "Amanecer Privado Antes de las Multitudes", desc: "Entrada exclusiva al amanecer con guía privado para fotografiar El Castillo casi vacío." },
      { slug: FEATURED_SLUGS[2], name: "Combo Cenote Saamal de Lujo", desc: "Tour privado a Chichén Itzá combinado con baño en el cenote semi-abierto Saamal y almuerzo en hacienda." },
    ],
    fromLabel: "Desde", viewTour: "Ver tour",
    compTitle: "Lujo vs. Grupo Pequeño vs. Autobús Estándar",
    compHeaders: ["Lujo Privado", "Grupo Pequeño", "Autobús Estándar"],
    compRows: [
      { label: "Tamaño del grupo", values: ["1-6 personas", "8-15 personas", "20-40 personas"] },
      { label: "Vehículo", values: ["SUV de lujo", "Minivan", "Autobús turístico"] },
      { label: "Tipo de guía", values: ["Arqueólogo certificado", "Guía bilingüe experto", "Guía estándar"] },
      { label: "Acceso sin filas", values: [true, false, false] },
      { label: "Comida gourmet", values: [true, false, false] },
      { label: "Tipo de cenote", values: ["Privado/exclusivo", "Compartido popular", "Compartido masivo"] },
      { label: "Paradas para fotos", values: ["Ilimitadas", "Buenas", "Mínimas"] },
      { label: "Ventana de recogida", values: ["A tu hora", "30-45 min", "60-90 min"] },
      { label: "Rango de precio", values: ["$189-$400+", "$89-$129", "$49-$79"] },
      { label: "Ideal para", values: ["Lunas de miel, VIP", "Parejas, familias", "Viajeros de presupuesto"] },
    ],
    compTipTitle: "¿No estás seguro de necesitar lujo?",
    compTipContent: "Si valoras la atención personal pero no necesitas SUV de lujo y cena gourmet, los tours en grupo pequeño (8-15 personas) ofrecen el 80% de la experiencia a la mitad del costo. Compara opciones en /tour-types/small-group.",
    toursTitle: "Tours de Lujo y VIP", toursSuffix: "experiencias premium disponibles",
    faqTitle: "Preguntas Frecuentes – Tours de Lujo",
    faqSubtitle: "Todo lo que necesitas saber antes de reservar tu experiencia VIP.",
    exploreTitle: "Explorar Más",
    exploreLinks: [{ label: "Tours Privados", href: "/tours/private-tours" }, { label: "Grupos Pequeños", href: "/tour-types/small-group" }, { label: "VIP Sin Filas", href: "/tour-types/vip-skip-the-line" }, { label: "Desde Cancún", href: "/tours-from/cancun" }, { label: "Todos los Tours", href: "/tours" }],
    noMatch: "Ningún tour coincide con tus filtros.", clearFilters: "Limpiar Filtros",
  } : {
    metaTitle: "Luxury Chichen Itza Tours – Premium VIP Experiences 2026",
    metaDesc: "Luxury Chichen Itza tours with private archaeologist, gourmet dining, luxury SUV, skip-the-line access. Ultimate VIP experience from $189.",
    breadcrumb: "Luxury Tours", rating: "5.0/5 from luxury travelers",
    h1: "Luxury Chichen Itza Tours – Premium VIP Experiences",
    subtitle: "Private archaeologist guides, luxury SUV transport, gourmet hacienda dining, and skip-the-line VIP access. The ultimate way to experience Chichen Itza.",
    badges: [{ icon: Crown, text: "VIP access" }, { icon: Wine, text: "Gourmet dining" }, { icon: Car, text: "Luxury transport" }, { icon: Sparkles, text: "Private guide" }],
    cta: "Browse Luxury Tours",
    diffTitle: "The Luxury Difference",
    diffItems: [
      { icon: Car, title: "Luxury SUV", desc: "Travel in a premium vehicle with leather seats, WiFi, AC, and complimentary premium drinks." },
      { icon: Crown, title: "Priority Entrance", desc: "Skip all lines with VIP access. Enter through the priority gate and save 30-60 minutes." },
      { icon: Wine, title: "Gourmet Dining", desc: "Fine dining at restored haciendas with regional cuisine, wine pairing, and vegetarian options." },
      { icon: Gem, title: "Exclusive Cenotes", desc: "Visit private cenotes away from tourist crowds for a serene, intimate swimming experience." },
    ],
    featuredTitle: "Featured Luxury Experiences",
    featuredSubtitle: "Three premium tours hand-picked for discerning travelers.",
    featured: [
      { slug: FEATURED_SLUGS[0], name: "Private VIP Hacienda Experience", desc: "Private archaeologist, luxury SUV, gourmet hacienda lunch, and priority skip-the-line access." },
      { slug: FEATURED_SLUGS[1], name: "Private Sunrise Before the Crowds", desc: "Exclusive sunrise entrance with a private guide to photograph El Castillo nearly empty." },
      { slug: FEATURED_SLUGS[2], name: "Luxury Cenote Saamal Combo", desc: "Private Chichen Itza tour paired with a swim in the semi-open Saamal cenote and hacienda lunch." },
    ],
    fromLabel: "From", viewTour: "View tour",
    compTitle: "Luxury vs. Small Group vs. Standard Bus",
    compHeaders: ["Luxury Private", "Small Group", "Standard Bus"],
    compRows: [
      { label: "Group size", values: ["1-6 people", "8-15 people", "20-40 people"] },
      { label: "Vehicle", values: ["Luxury SUV", "Minivan", "Tour bus"] },
      { label: "Guide type", values: ["Certified archaeologist", "Expert bilingual", "Standard guide"] },
      { label: "Skip-the-line", values: [true, false, false] },
      { label: "Gourmet meal", values: [true, false, false] },
      { label: "Cenote type", values: ["Private/exclusive", "Popular shared", "Mass-tourist"] },
      { label: "Photo stops", values: ["Unlimited", "Good", "Minimal"] },
      { label: "Pickup window", values: ["On your schedule", "30-45 min", "60-90 min"] },
      { label: "Price range", values: ["$189-$400+", "$89-$129", "$49-$79"] },
      { label: "Best for", values: ["Honeymoons, VIPs", "Couples, families", "Budget travelers"] },
    ],
    compTipTitle: "Not sure you need luxury?",
    compTipContent: "If you value personal attention but don't need a luxury SUV and gourmet dining, small group tours (8-15 people) deliver 80% of the experience at roughly half the price. Compare at /tour-types/small-group.",
    toursTitle: "Luxury & VIP Tours", toursSuffix: "premium experiences available",
    faqTitle: "Luxury Tour FAQs",
    faqSubtitle: "Everything you need to know before booking your VIP experience.",
    exploreTitle: "Explore More",
    exploreLinks: [{ label: "Private Tours", href: "/tours/private-tours" }, { label: "Small Group Tours", href: "/tour-types/small-group" }, { label: "VIP Skip-the-Line", href: "/tour-types/vip-skip-the-line" }, { label: "From Cancún", href: "/tours-from/cancun" }, { label: "All Tours", href: "/tours" }],
    noMatch: "No tours match your filters.", clearFilters: "Clear All Filters",
  };

  const faqs = isEs ? [
    { question: "¿Qué incluyen los tours de lujo a Chichén Itzá?", answer: "Transporte privado en SUV de lujo, guía arqueólogo privado, entrada VIP sin filas, cena gourmet en hacienda, bebidas premium y acceso a cenotes exclusivos." },
    { question: "¿Cuánto cuesta un tour de lujo a Chichén Itzá?", answer: "Los tours de lujo comienzan desde $189 USD por persona y pueden llegar a $400+ para experiencias completamente privadas con extras como fotografía profesional." },
    { question: "¿Cuál es la diferencia entre tour de lujo y tour privado?", answer: "Los tours de lujo siempre son privados pero añaden servicios premium: SUV de lujo en lugar de van, cena gourmet en hacienda, bebidas premium y guía arqueólogo certificado." },
    { question: "¿Puedo personalizar mi tour de lujo?", answer: "Sí. Los tours de lujo son completamente personalizables: añade cenotes privados, fotografía profesional, helicóptero, extensiones a Uxmal o Valladolid." },
    { question: "¿Qué tour de lujo es mejor para parejas?", answer: "Para parejas recomendamos el Tour Privado al Amanecer (/tours/chichen-itza-private-sunrise-tour) por la magia de tener las ruinas casi vacías al amanecer, o el Tour VIP Privado en Hacienda (/tours/chichen-itza-private-vip-tour) con cena gourmet." },
    { question: "¿Puedo combinar un tour de lujo con un cenote?", answer: "Sí. Nuestro Combo de Lujo Chichén Itzá + Cenote Saamal (/tours/chichen-itza-cenote-saamal-combo-tour) combina visita privada a las ruinas con baño en un cenote semi-abierto y almuerzo en hacienda restaurada." },
  ] : [
    { question: "What's included in luxury Chichen Itza tours?", answer: "Private luxury SUV transport, private archaeologist guide, VIP skip-the-line entrance, gourmet hacienda dining, premium drinks, and access to exclusive cenotes." },
    { question: "How much does a luxury Chichen Itza tour cost?", answer: "Luxury tours start from $189 USD per person and can reach $400+ for fully private experiences with extras like professional photography." },
    { question: "What's the difference between luxury and private tours?", answer: "Luxury tours are always private but add premium services: luxury SUV instead of van, gourmet hacienda dining, premium drinks, and a certified archaeologist guide." },
    { question: "Can I customize my luxury tour?", answer: "Yes. Luxury tours are fully customizable: add private cenotes, professional photography, helicopter transfers, or extensions to Uxmal or Valladolid." },
    { question: "Which luxury tour is best for couples?", answer: "For couples we recommend the Private Sunrise Tour (/tours/chichen-itza-private-sunrise-tour) for the magic of seeing the ruins nearly empty at dawn, or the Private VIP Hacienda Tour (/tours/chichen-itza-private-vip-tour) with gourmet dining." },
    { question: "Can I combine a luxury Chichen Itza tour with a cenote?", answer: "Yes. Our Luxury Chichen Itza + Cenote Saamal Combo (/tours/chichen-itza-cenote-saamal-combo-tour) pairs a private ruins visit with a swim in the semi-open Saamal cenote and a hacienda lunch." },
  ];

  const luxuryTours = useMemo(() => tours.filter((t) => t.category.includes("luxury") || t.tourType === "luxury" || t.tourType === "private"), []);
  const featuredTours = useMemo(
    () => c.featured.map((f) => ({ ...f, tour: tours.find((t) => t.slug === f.slug) })).filter((f) => f.tour),
    [c.featured]
  );
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(luxuryTours, filters), [luxuryTours, filters]);

  const meta = getPageMeta({
    title: c.metaTitle,
    description: c.metaDesc,
    canonical: "/tour-types/luxury",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Tipos de Tour" : "Tour Types", url: "/tours" },
        { name: c.breadcrumb },
      ]),
      createFAQSchema(faqs),
      generateTourItemListSchema({
        name: c.h1,
        description: c.subtitle,
        url: "/tour-types/luxury",
        tours: luxuryTours,
      }),
    ],
  });

  return (
    <>
      <SEOHead meta={meta} />
      <section className="relative bg-gradient-to-br from-accent/15 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: isEs ? "Tipos de Tour" : "Tour Types", href: "/tours" }, { label: c.breadcrumb }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-accent text-accent" />))}<span className="ml-2 text-sm text-muted-foreground">{c.rating}</span></div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">{c.h1}</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">{c.subtitle}</p>
            <div className="flex flex-wrap gap-3 mb-6">{c.badges.map((item, i) => (<span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border"><item.icon className="h-4 w-4 text-accent" />{item.text}</span>))}</div>
            <Button variant="cta" size="lg" asChild><a href="#tours">{c.cta} <ChevronRight className="h-5 w-5" /></a></Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs ? "Nuestros tours de lujo a Chichén Itzá están diseñados para viajeros exigentes que demandan la mejor experiencia. Desde el momento en que tu SUV de lujo privado llega a tu hotel hasta la despedida final, cada detalle está meticulosamente planificado." : "Our luxury Chichen Itza tours are crafted for discerning travelers who demand the finest experience. From the moment your private luxury SUV arrives at your hotel to the final farewell, every detail is meticulously planned."}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {isEs ? <>Perfecto para lunas de miel, aniversarios, retiros corporativos y cualquier persona que crea que el viaje debe ser tan extraordinario como el destino. Compara con nuestros <Link to="/tour-types/small-group" className="text-primary hover:underline">tours en grupo pequeño</Link> o <Link to="/tours/private-tours" className="text-primary hover:underline">tours privados</Link>.</> : <>Perfect for honeymoons, anniversaries, corporate retreats, and anyone who believes the journey should be as extraordinary as the destination. Compare with our <Link to="/tour-types/small-group" className="text-primary hover:underline">small group tours</Link> or <Link to="/tours/private-tours" className="text-primary hover:underline">private tours</Link>.</>}
          </p>
        </div>
      </section>

      {/* Featured Luxury Experiences */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-3">{c.featuredTitle}</h2>
            <p className="text-muted-foreground">{c.featuredSubtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredTours.map((f) => (
              <Link key={f.slug} to={`/tours/${f.slug}`} className="group bg-card rounded-lg p-6 border border-border hover:border-accent hover:shadow-md transition-all flex flex-col">
                <Crown className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{f.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{f.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                  <span className="text-sm text-muted-foreground">{c.fromLabel} <span className="font-semibold text-foreground">${f.tour!.price.adult}</span></span>
                  <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">{c.viewTour} <ChevronRight className="h-4 w-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container"><h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">{c.diffTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {c.diffItems.map((item, i) => (<div key={i} className="bg-card rounded-lg p-6 border border-border text-center"><div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"><item.icon className="h-6 w-6 text-accent" /></div><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></div>))}
          </div>
        </div>
      </section>

      {/* Luxury vs. Small Group vs. Standard Bus comparison */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">{c.compTitle}</h2>
          <div className="max-w-4xl mx-auto"><ComparisonTable headers={c.compHeaders} highlightColumn={1} rows={c.compRows} /></div>
          <div className="max-w-3xl mx-auto mt-8"><TipBox type="tip" title={c.compTipTitle} content={c.compTipContent} /></div>
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">{c.toursTitle}</h2>
          <p className="text-center text-muted-foreground mb-8">{luxuryTours.length} {c.toursSuffix}</p>
          <TourFilters onFilterChange={setFilters} tourCount={filteredTours.length} className="mb-6" />
          {filteredTours.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{filteredTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}</div>) : (<div className="text-center py-12 bg-card rounded-lg border border-border"><p className="text-muted-foreground mb-4">{c.noMatch}</p><Button variant="outline" onClick={() => setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })}>{c.clearFilters}</Button></div>)}
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <FAQSection faqs={faqs} title={c.faqTitle} subtitle={c.faqSubtitle} />
      <CTASection />
      <section className="py-12 bg-muted/30 border-t border-border"><div className="container"><h2 className="font-heading font-semibold text-lg mb-6">{c.exploreTitle}</h2><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">{c.exploreLinks.map((link) => (<Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>))}</div></div></section>
    </>
  );
};

export default LuxuryToursPage;
