import { LocaleLink as Link } from "@/components/LocaleLink";
import { useState, useMemo } from "react";
import { Baby, ChevronRight, Star, Shield, Heart, Smile, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourFilters, { type FilterState } from "@/components/features/tours/TourFilters";
import TrustBadges from "@/components/features/booking/TrustBadges";
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

const FamilyFriendlyPage = () => {
  const { locale } = useLocale();
  const isEs = locale === "es";

  const c = isEs ? {
    metaTitle: "Tours Familiares a Chichén Itzá – Aventuras para Niños",
    metaDesc: "Los mejores tours familiares a Chichén Itzá con guías para niños, actividades interactivas, nado seguro en cenotes. Menores de 3 gratis. ¡Reserva tu aventura familiar!",
    breadcrumb: "Tours Familiares", rating: "4.8/5 de familias con niños",
    h1: "Tours Familiares a Chichén Itzá – Aventuras para Todas las Edades",
    subtitle: "Tours seguros para niños con narración maya interactiva, cuadernillos de actividades, nado seguro en cenotes con chalecos salvavidas y guías pacientes orientados a familias. Menores de 3 años viajan gratis.",
    badges: [{ icon: Baby, text: "Menores de 3 gratis" }, { icon: Shield, text: "Seguridad primero" }, { icon: BookOpen, text: "Aprendizaje interactivo" }, { icon: Smile, text: "Diversión para niños" }],
    cta: "Ver Tours Familiares",
    tipTitle: "Consejos Pro para Familias",
    tipContent: "Trae sombreros y protector solar biodegradable para los niños. Nuestros guías llevan agua y snacks extra. Solicita asientos para niños al reservar. El mercado del sitio tiene recuerdos para niños desde $2-5.",
    specialTitle: "Qué Hace Especiales Nuestros Tours Familiares",
    specialItems: [
      { icon: BookOpen, title: "Aprendizaje Interactivo", desc: "Narración maya, adivinanzas y cuadernillos de actividades convierten la historia en aventura para niños de 4-14 años." },
      { icon: Shield, title: "Enfoque en Seguridad", desc: "Chalecos salvavidas, áreas poco profundas de cenote, asientos para niños, paradas de descanso frecuentes y guías familiares experimentados." },
      { icon: Heart, title: "Guías Pacientes", desc: "Nuestros guías familiares están especialmente entrenados para involucrar a los niños y adaptarse a diferentes ritmos." },
      { icon: Smile, title: "Actividades Divertidas", desc: "Juegos mayas, búsquedas del tesoro y actividades de colorear mantienen a los niños entretenidos." },
    ],
    toursTitle: "Tours Aptos para Familias", toursSuffix: "opciones familiares",
    exploreTitle: "Explorar Más",
    exploreLinks: [{ label: "Tours Privados", href: "/tours/private-tours" }, { label: "Tours Cenote", href: "/tours/cenote-tours" }, { label: "Grupos Pequeños", href: "/tour-types/small-group" }, { label: "Qué Llevar", href: "/guide/what-to-bring" }, { label: "Todos los Tours", href: "/tours" }],
    noMatch: "Ningún tour coincide con tus filtros.", clearFilters: "Limpiar Filtros",
  } : {
    metaTitle: "Family-Friendly Chichen Itza Tours – Kid-Safe Adventures",
    metaDesc: "Best family Chichen Itza tours with kid-friendly guides, interactive activities, safe cenote swimming. Children under 3 free. Book your family adventure!",
    breadcrumb: "Family-Friendly Tours", rating: "4.8/5 from families with children",
    h1: "Family-Friendly Chichen Itza Tours – Adventures for All Ages",
    subtitle: "Kid-safe tours with interactive Mayan storytelling, activity booklets, safe cenote swimming with life vests, and patient family-oriented guides. Children under 3 travel free.",
    badges: [{ icon: Baby, text: "Under 3 free" }, { icon: Shield, text: "Safety first" }, { icon: BookOpen, text: "Interactive learning" }, { icon: Smile, text: "Fun for kids" }],
    cta: "Browse Family Tours",
    tipTitle: "Family Pro Tips",
    tipContent: "Bring hats and biodegradable sunscreen for the kids. Our guides carry extra water and snacks. Request child seats when booking. The on-site market has child-friendly souvenirs from $2-5.",
    specialTitle: "What Makes Our Family Tours Special",
    specialItems: [
      { icon: BookOpen, title: "Interactive Learning", desc: "Mayan storytelling, riddles, and activity booklets turn history into adventure for children ages 4-14." },
      { icon: Shield, title: "Safety Focused", desc: "Life vests, shallow cenote areas, child seats, frequent rest stops, and experienced family guides." },
      { icon: Heart, title: "Patient Guides", desc: "Our family guides are specially trained to engage children and accommodate different paces." },
      { icon: Smile, title: "Fun Activities", desc: "Mayan games, treasure hunts, and coloring activities keep kids entertained." },
    ],
    toursTitle: "Family-Suitable Tours", toursSuffix: "family-friendly options",
    exploreTitle: "Explore More",
    exploreLinks: [{ label: "Private Tours", href: "/tours/private-tours" }, { label: "Cenote Tours", href: "/tours/cenote-tours" }, { label: "Small Group Tours", href: "/tour-types/small-group" }, { label: "What to Bring", href: "/guide/what-to-bring" }, { label: "All Tours", href: "/tours" }],
    noMatch: "No tours match your filters.", clearFilters: "Clear All Filters",
  };

  const faqs = isEs ? [
    { question: "¿A partir de qué edad pueden los niños hacer el tour a Chichén Itzá?", answer: "Recibimos a niños desde 0 años. Menores de 3 viajan gratis. Los tours están diseñados para mantener a los niños de 4-14 años entretenidos con actividades interactivas." },
    { question: "¿Es seguro nadar en el cenote con niños?", answer: "Sí. Proporcionamos chalecos salvavidas gratuitos para todos los niños y los cenotes tienen áreas poco profundas. Nuestros guías están entrenados en seguridad acuática." },
    { question: "¿Cuánto cuesta un tour familiar a Chichén Itzá?", answer: "Los tours familiares comienzan desde $89 USD para adultos. Los niños 4-12 reciben descuento de ~30%, y menores de 3 son gratis." },
    { question: "¿Hay paradas de baño durante el tour familiar?", answer: "Sí. Hacemos paradas de baño cada 1.5-2 horas y nuestros guías llevan agua y snacks extra para los niños." },
  ] : [
    { question: "What age can kids do the Chichen Itza tour?", answer: "We welcome children of all ages. Under 3 travel free. Tours are designed to keep children 4-14 engaged with interactive activities and games." },
    { question: "Is cenote swimming safe with kids?", answer: "Yes. We provide complimentary life vests for all children and cenotes have shallow areas. Our guides are trained in water safety." },
    { question: "How much does a family Chichen Itza tour cost?", answer: "Family tours start at $89 USD for adults. Children 4-12 get ~30% discount, and under 3 are free." },
    { question: "Are there bathroom stops during the family tour?", answer: "Yes. We make bathroom stops every 1.5-2 hours and our guides carry extra water and snacks for the kids." },
  ];

  const meta = getPageMeta({ title: c.metaTitle, description: c.metaDesc, canonical: "/tour-types/family-friendly", locale, jsonLd: [createBreadcrumbSchema([{ name: isEs ? "Inicio" : "Home", url: "/" }, { name: isEs ? "Tipos de Tour" : "Tour Types", url: "/tours" }, { name: c.breadcrumb }]), createFAQSchema(faqs)] });

  const suitableTours = useMemo(() => tours.filter((t) => t.category.includes("family-friendly") || t.tourType === "family" || t.tourType === "private" || (t.groupSize.type === "small-group" && t.category.includes("cenote-tours"))), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(suitableTours, filters), [suitableTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />
      <section className="relative bg-gradient-to-br from-secondary/10 via-background to-accent/10 py-12 lg:py-16">
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
            {isEs ? "¿Viajas con niños? Nuestros tours familiares a Chichén Itzá están diseñados específicamente para hacer que la historia maya antigua sea emocionante y accesible para niños de todas las edades." : "Traveling with kids? Our family-friendly Chichen Itza tours are specifically designed to make ancient Mayan history exciting and accessible for children of all ages."}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs ? <>Para máxima flexibilidad, considera un <Link to="/tours/private-tours" className="text-primary hover:underline">tour privado</Link> donde controlas el ritmo completamente — perfecto para familias con niños muy pequeños.</> : <>For maximum flexibility, consider a <Link to="/tours/private-tours" className="text-primary hover:underline">private tour</Link> where you control the pace entirely — perfect for families with very young children.</>}
          </p>
          <TipBox type="tip" title={c.tipTitle} content={c.tipContent} />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container"><h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">{c.specialTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {c.specialItems.map((item, i) => (<div key={i} className="bg-card rounded-lg p-6 border border-border text-center"><div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4"><item.icon className="h-6 w-6 text-secondary" /></div><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">{c.toursTitle}</h2>
          <p className="text-center text-muted-foreground mb-8">{suitableTours.length} {c.toursSuffix}</p>
          <TourFilters onFilterChange={setFilters} tourCount={filteredTours.length} className="mb-6" />
          {filteredTours.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{filteredTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}</div>) : (<div className="text-center py-12 bg-card rounded-lg border border-border"><p className="text-muted-foreground mb-4">{c.noMatch}</p><Button variant="outline" onClick={() => setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })}>{c.clearFilters}</Button></div>)}
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <CTASection />
      <section className="py-12 bg-muted/30 border-t border-border"><div className="container"><h2 className="font-heading font-semibold text-lg mb-6">{c.exploreTitle}</h2><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">{c.exploreLinks.map((link) => (<Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>))}</div></div></section>
    </>
  );
};

export default FamilyFriendlyPage;
