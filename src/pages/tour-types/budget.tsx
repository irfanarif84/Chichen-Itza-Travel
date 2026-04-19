import { LocaleLink as Link } from "@/components/LocaleLink";
import { useState, useMemo } from "react";
import { DollarSign, ChevronRight, Star, Bus, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import { generateTourItemListSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourFilters, { type FilterState } from "@/components/features/tours/TourFilters";
import TrustBadges from "@/components/features/booking/TrustBadges";
import ComparisonTable from "@/components/guide/ComparisonTable";
import TipBox from "@/components/guide/TipBox";
import CTASection from "@/components/features/home/CTASection";
import { tours } from "@/lib/tourData";
import { useLocale } from "@/lib/i18n/useLocale";
import type { Tour } from "@/types/tour";

const filterTours = (allTours: Tour[], filters: FilterState): Tour[] => {
  return allTours.filter((tour) => {
    if (filters.duration.length > 0) { const hours = tour.durationHours; const match = filters.duration.some((d) => { if (d === "short") return hours < 8; if (d === "full") return hours >= 8 && hours <= 12; if (d === "long") return hours > 12; return false; }); if (!match) return false; }
    return true;
  });
};

const BudgetToursPage = () => {
  const { locale } = useLocale();
  const isEs = locale === "es";

  const c = isEs ? {
    metaTitle: "Tours Económicos a Chichén Itzá – Desde $49",
    metaDesc: "Los tours más económicos a Chichén Itzá desde Cancún y Playa del Carmen. Guías profesionales, transporte incluido. Desde solo $49. ¡Reserva ahora!",
    breadcrumb: "Tours Económicos", rating: "4.5/5 de más de 3,200 viajeros económicos",
    h1: "Tours Económicos a Chichén Itzá – Desde Solo $49",
    subtitle: "Visita una de las Nuevas Siete Maravillas del Mundo sin gastar una fortuna. Guías profesionales, transporte cómodo y entradas incluidas a precios imbatibles.",
    badges: [{ icon: DollarSign, text: "Desde $49/persona" }, { icon: Bus, text: "Transporte incluido" }, { icon: CheckCircle, text: "Entradas incluidas" }, { icon: Clock, text: "Día completo" }],
    cta: "Ver Tours Económicos",
    compTitle: "Económico vs. Estándar vs. Premium",
    compHeaders: ["Económico", "Estándar", "Premium"],
    compRows: [
      { label: "Precio", values: ["Desde $49", "Desde $89", "Desde $189"] },
      { label: "Transporte", values: ["Autobús turístico", "Minivan", "SUV de lujo"] },
      { label: "Grupo", values: ["20-30", "12-15", "1-6 (Privado)"] },
      { label: "Guía", values: ["Profesional", "Experto certificado", "Arqueólogo privado"] },
      { label: "Almuerzo", values: ["No incluido", "Buffet incluido", "Hacienda gourmet"] },
      { label: "Cenote", values: ["No incluido", "Incluido", "Cenote privado"] },
    ],
    tipTitle: "Consejo Económico",
    tipContent: "Trae tus propios snacks y agua para ahorrar en comida. El mercado de vendedores ofrece opciones de almuerzo económicas desde $5-8 USD. Los tours económicos aún incluyen guías profesionales que cubren todas las estructuras importantes.",
    toursTitle: "Tours Económicos a Chichén Itzá", toursSuffix: "opciones económicas",
    exploreTitle: "Explorar Más",
    exploreLinks: [{ label: "Grupos Pequeños", href: "/tour-types/small-group" }, { label: "Tours de un Día", href: "/tours/day-tours" }, { label: "Desde Cancún", href: "/tours-from/cancun" }, { label: "Desde Playa del Carmen", href: "/tours-from/playa-del-carmen" }, { label: "Todos los Tours", href: "/tours" }],
    noMatch: "Ningún tour coincide con tus filtros.", clearFilters: "Limpiar Filtros",
  } : {
    metaTitle: "Budget Chichen Itza Tours – Affordable Day Trips from $49",
    metaDesc: "Cheapest Chichen Itza tours from Cancun and Playa del Carmen. Professional guides, transport included. Budget-friendly from just $49. Book now!",
    breadcrumb: "Budget Tours", rating: "4.5/5 from 3,200+ budget travelers",
    h1: "Budget Chichen Itza Tours – From Just $49",
    subtitle: "See one of the New Seven Wonders of the World without breaking the bank. Professional guides, comfortable transport, and all entrance fees included at unbeatable prices.",
    badges: [{ icon: DollarSign, text: "From $49/person" }, { icon: Bus, text: "Transport included" }, { icon: CheckCircle, text: "Entrance fees included" }, { icon: Clock, text: "Full day experience" }],
    cta: "See Budget Tours",
    compTitle: "Budget vs. Standard vs. Premium",
    compHeaders: ["Budget", "Standard", "Premium"],
    compRows: [
      { label: "Price", values: ["From $49", "From $89", "From $189"] },
      { label: "Transport", values: ["Tour bus", "Minivan", "Luxury SUV"] },
      { label: "Group Size", values: ["20-30", "12-15", "1-6 (Private)"] },
      { label: "Guide", values: ["Professional", "Certified expert", "Private archaeologist"] },
      { label: "Lunch", values: ["Not included", "Buffet included", "Gourmet hacienda"] },
      { label: "Cenote", values: ["Not included", "Included", "Private cenote"] },
    ],
    tipTitle: "Budget Tip",
    tipContent: "Bring your own snacks and water to save on food costs. The on-site vendor market offers affordable lunch options from $5-8 USD. Budget tours still include professional guides who cover all the important structures.",
    toursTitle: "Affordable Chichen Itza Tours", toursSuffix: "budget-friendly options",
    exploreTitle: "Explore More",
    exploreLinks: [{ label: "Small Group Tours", href: "/tour-types/small-group" }, { label: "Day Tours", href: "/tours/day-tours" }, { label: "From Cancún", href: "/tours-from/cancun" }, { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" }, { label: "All Tours", href: "/tours" }],
    noMatch: "No tours match your filters.", clearFilters: "Clear All Filters",
  };

  const faqs = isEs ? [
    { question: "¿Cuál es el tour más económico a Chichén Itzá?", answer: "Nuestro tour económico desde Cancún o Playa del Carmen comienza desde $49 USD por persona, incluye transporte, guía profesional y entradas." },
    { question: "¿Qué incluye un tour económico a Chichén Itzá?", answer: "Transporte en autobús turístico ida y vuelta, guía profesional certificado, entrada al sitio arqueológico. El almuerzo y bebidas no están incluidos." },
    { question: "¿Cuál es la diferencia entre un tour económico y uno estándar?", answer: "Los tours económicos usan autobuses más grandes (20-30 personas), no incluyen almuerzo ni cenote. Los tours estándar usan minivans (12-15) e incluyen almuerzo buffet y nado en cenote." },
    { question: "¿Vale la pena pagar más por un tour estándar o premium?", answer: "Si tienes presupuesto limitado, el tour económico cubre lo esencial. Pero el tour estándar añade el cenote y el almuerzo, lo cual mejora mucho la experiencia por solo $40 más." },
  ] : [
    { question: "What's the cheapest Chichen Itza tour?", answer: "Our budget tour from Cancun or Playa del Carmen starts at $49 USD per person, including transport, professional guide, and entrance fees." },
    { question: "What's included in a budget Chichen Itza tour?", answer: "Round-trip tour bus transport, certified professional guide, archaeological site entrance fee. Lunch and drinks are not included." },
    { question: "What's the difference between budget and standard tours?", answer: "Budget tours use larger buses (20-30 people) and don't include lunch or a cenote. Standard tours use minivans (12-15) and include buffet lunch plus cenote swimming." },
    { question: "Is it worth paying more for a standard or premium tour?", answer: "If your budget is tight, the budget tour covers the essentials. But the standard tour adds a cenote and lunch — a big experience upgrade for just $40 more." },
  ];

  const budgetTours = useMemo(() => tours.filter((t) => t.category.includes("budget") || t.tourType === "budget" || t.price.adult <= 70), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(budgetTours, filters), [budgetTours, filters]);

  const meta = getPageMeta({
    title: c.metaTitle,
    description: c.metaDesc,
    canonical: "/tour-types/budget",
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
        url: "/tour-types/budget",
        tours: budgetTours,
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
            <div className="flex flex-wrap gap-3 mb-6">{c.badges.map((item, i) => (<span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border"><item.icon className="h-4 w-4 text-primary" />{item.text}</span>))}</div>
            <Button variant="cta" size="lg" asChild><a href="#tours">{c.cta} <ChevronRight className="h-5 w-5" /></a></Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs ? <>Nuestros tours económicos a Chichén Itzá prueban que no necesitas gastar una fortuna para experimentar uno de los sitios arqueológicos más increíbles del mundo. Estos tours asequibles incluyen todo lo esencial: transporte climatizado cómodo, guía profesional certificado y entradas a Chichén Itzá.</> : <>Our budget Chichen Itza tours prove you don't need to spend a fortune to experience one of the world's most incredible archaeological sites. These affordable tours include everything essential: comfortable air-conditioned transportation, a certified professional guide, and Chichen Itza entrance fees.</>}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs ? <>Aunque pueden no incluir comidas gourmet o acceso a cenotes privados como nuestros <Link to="/tour-types/luxury" className="text-primary hover:underline">tours de lujo</Link>, los tours económicos cubren todas las estructuras principales y entregan el mismo comentario histórico experto.</> : <>While they may not include gourmet meals or private cenote access like our <Link to="/tour-types/luxury" className="text-primary hover:underline">luxury tours</Link>, budget tours cover all the major structures and deliver the same expert historical commentary.</>}
          </p>
          <TipBox type="tip" title={c.tipTitle} content={c.tipContent} />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">{c.compTitle}</h2>
          <ComparisonTable headers={c.compHeaders} highlightColumn={1} rows={c.compRows} />
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">{c.toursTitle}</h2>
          <p className="text-center text-muted-foreground mb-8">{budgetTours.length} {c.toursSuffix}</p>
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

export default BudgetToursPage;
