import { LocaleLink as Link } from "@/components/LocaleLink";
import { useState, useMemo } from "react";
import { Crown, ChevronRight, Star, Zap, Shield, Clock, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
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
    if (filters.priceRange !== "all") { const price = tour.price.adult; if (filters.priceRange === "0-60" && price >= 60) return false; if (filters.priceRange === "60-100" && (price < 60 || price >= 100)) return false; if (filters.priceRange === "100-150" && (price < 100 || price >= 150)) return false; if (filters.priceRange === "150+" && price < 150) return false; }
    if (filters.duration.length > 0) { const hours = tour.durationHours; const match = filters.duration.some((d) => { if (d === "short") return hours < 8; if (d === "full") return hours >= 8 && hours <= 12; if (d === "long") return hours > 12; return false; }); if (!match) return false; }
    return true;
  });
};

const VIPSkipTheLinePage = () => {
  const { locale } = useLocale();
  const isEs = locale === "es";

  const c = isEs ? {
    metaTitle: "Tours VIP Sin Filas en Chichén Itzá – Acceso Prioritario",
    metaDesc: "Salta la fila en Chichén Itzá con acceso prioritario VIP. Ahorra 30-60 minutos, entra por la puerta VIP. Guía privado, transporte de lujo. ¡Reserva ahora!",
    breadcrumb: "VIP Sin Filas", rating: "4.9/5 de viajeros VIP",
    h1: "Tours VIP Sin Filas en Chichén Itzá – Acceso Prioritario",
    subtitle: "Salta la cola de admisión general de 30-60 minutos y entra por la puerta VIP prioritaria. Más tiempo explorando, menos tiempo esperando.",
    badges: [{ icon: Zap, text: "Sin filas" }, { icon: Ticket, text: "Entrada VIP" }, { icon: Clock, text: "Ahorra 30-60 min" }, { icon: Shield, text: "Acceso prioritario" }],
    cta: "Ver Tours VIP",
    compTitle: "Entrada VIP vs. Entrada Estándar",
    compHeaders: ["VIP Sin Filas", "Admisión Estándar"],
    compRows: [
      { label: "Tiempo de espera", values: ["0-5 minutos", "30-60+ minutos"] },
      { label: "Entrada", values: ["Puerta VIP dedicada", "Cola de admisión general"] },
      { label: "Temporada alta", values: ["Impacto mínimo", "Filas pueden superar 1 hora"] },
      { label: "Oportunidad de foto", values: ["Sitio menos concurrido", "Compitiendo con grandes grupos"] },
      { label: "Calidad de guía", values: ["Arqueólogo personal", "Guía grupal compartido"] },
      { label: "Disponibilidad", values: ["Tours privados y de lujo", "Todos los tours"] },
    ],
    tipTitle: "¿Cuándo Es Más Valioso el VIP?",
    tipContent: "El acceso VIP sin filas ahorra más tiempo durante temporada alta (diciembre-abril), vacaciones escolares y alrededor del Equinoccio de Primavera (20-21 de marzo). En temporada baja (mayo-octubre), las filas de admisión general suelen ser más cortas.",
    toursTitle: "Tours con Acceso VIP Sin Filas", toursSuffix: "tours VIP disponibles",
    exploreTitle: "Explorar Más",
    exploreLinks: [{ label: "Tours Privados", href: "/tours/private-tours" }, { label: "Tours de Lujo", href: "/tour-types/luxury" }, { label: "Tours al Amanecer", href: "/tours/sunrise-tours" }, { label: "Grupos Pequeños", href: "/tour-types/small-group" }, { label: "Todos los Tours", href: "/tours" }],
    noMatch: "Ningún tour coincide con tus filtros.", clearFilters: "Limpiar Filtros",
  } : {
    metaTitle: "VIP Skip-the-Line Chichen Itza Tours – Priority Access",
    metaDesc: "Skip the line at Chichen Itza with VIP priority entrance. Save 30-60 minutes, enter through VIP gate. Private guide, luxury transport. Book VIP access now!",
    breadcrumb: "VIP Skip-the-Line", rating: "4.9/5 from VIP travelers",
    h1: "VIP Skip-the-Line Chichen Itza Tours – Priority Access",
    subtitle: "Skip the 30-60 minute general admission queue and enter through the VIP priority gate. More time exploring, less time waiting.",
    badges: [{ icon: Zap, text: "Skip the line" }, { icon: Ticket, text: "VIP entrance" }, { icon: Clock, text: "Save 30-60 min" }, { icon: Shield, text: "Priority access" }],
    cta: "Browse VIP Tours",
    compTitle: "VIP vs. Standard Entrance",
    compHeaders: ["VIP Skip-the-Line", "Standard Admission"],
    compRows: [
      { label: "Wait Time", values: ["0-5 minutes", "30-60+ minutes"] },
      { label: "Entrance", values: ["Dedicated VIP gate", "General admission line"] },
      { label: "Peak Season", values: ["Minimal impact", "Lines can exceed 1 hour"] },
      { label: "Photo Opportunity", values: ["Less crowded site", "Competing with large groups"] },
      { label: "Guide Quality", values: ["Personal archaeologist", "Shared group guide"] },
      { label: "Availability", values: ["Private & luxury tours", "All tours"] },
    ],
    tipTitle: "When Is VIP Most Valuable?",
    tipContent: "VIP skip-the-line access saves the most time during peak season (December-April), school holidays, and around the Spring Equinox (March 20-21). During low season (May-October), general admission lines are typically shorter.",
    toursTitle: "Tours with VIP Skip-the-Line Access", toursSuffix: "VIP tours available",
    exploreTitle: "Explore More",
    exploreLinks: [{ label: "Private Tours", href: "/tours/private-tours" }, { label: "Luxury Tours", href: "/tour-types/luxury" }, { label: "Sunrise Tours", href: "/tours/sunrise-tours" }, { label: "Small Group Tours", href: "/tour-types/small-group" }, { label: "All Tours", href: "/tours" }],
    noMatch: "No tours match your filters.", clearFilters: "Clear All Filters",
  };

  const meta = getPageMeta({ title: c.metaTitle, description: c.metaDesc, canonical: "/tour-types/vip-skip-the-line", locale, jsonLd: [createBreadcrumbSchema([{ name: isEs ? "Inicio" : "Home", url: "/" }, { name: isEs ? "Tipos de Tour" : "Tour Types", url: "/tours" }, { name: c.breadcrumb }])] });

  const vipTours = useMemo(() => tours.filter((t) => t.category.includes("vip-skip-the-line") || t.tourType === "private" || t.tourType === "luxury"), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(vipTours, filters), [vipTours, filters]);

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
            {isEs ? "Durante temporada alta, la fila de admisión general en Chichén Itzá puede extenderse de 30 minutos a más de una hora. Nuestros tours VIP eliminan esta frustrante espera por completo — entrarás por una puerta prioritaria dedicada." : "During peak season, the general admission line at Chichen Itza can stretch for 30 minutes to over an hour. Our VIP skip-the-line tours eliminate this frustrating wait entirely — you'll enter through a dedicated priority gate."}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {isEs ? <>El acceso VIP está disponible en todos nuestros <Link to="/tours/private-tours" className="text-primary hover:underline">tours privados</Link> y <Link to="/tour-types/luxury" className="text-primary hover:underline">experiencias de lujo</Link>. Es especialmente valioso durante diciembre-abril (temporada alta) y alrededor del Equinoccio de Primavera en marzo.</> : <>VIP access is available on all our <Link to="/tours/private-tours" className="text-primary hover:underline">private tours</Link> and <Link to="/tour-types/luxury" className="text-primary hover:underline">luxury experiences</Link>. It's especially valuable during December-April (peak season) and around the Spring Equinox in March.</>}
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">{c.compTitle}</h2>
          <ComparisonTable headers={c.compHeaders} highlightColumn={1} rows={c.compRows} />
          <div className="mt-8"><TipBox type="info" title={c.tipTitle} content={c.tipContent} /></div>
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">{c.toursTitle}</h2>
          <p className="text-center text-muted-foreground mb-8">{vipTours.length} {c.toursSuffix}</p>
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

export default VIPSkipTheLinePage;
