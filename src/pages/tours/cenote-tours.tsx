import { LocaleLink as Link } from "@/components/LocaleLink";
import { useState, useMemo } from "react";
import { Droplets, Clock, ChevronRight, Star, Waves, Leaf, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createFAQSchema, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourFilters, { type FilterState } from "@/components/features/tours/TourFilters";
import FAQSection from "@/components/common/FAQ";
import TrustBadges from "@/components/features/booking/TrustBadges";
import TipBox from "@/components/guide/TipBox";
import CTASection from "@/components/features/home/CTASection";
import { tours } from "@/lib/tourData";
import { cenoteToursFAQs } from "@/lib/faqData";
import { getReviewsByTourCategory } from "@/lib/reviewsData";
import ReviewGrid from "@/components/features/reviews/ReviewGrid";
import { useLocale } from "@/lib/i18n/useLocale";
import type { Tour } from "@/types/tour";

const filterTours = (allTours: Tour[], filters: FilterState): Tour[] => {
  return allTours.filter((tour) => {
    if (filters.priceRange !== "all") {
      const price = tour.price.adult;
      if (filters.priceRange === "0-60" && price >= 60) return false;
      if (filters.priceRange === "60-100" && (price < 60 || price >= 100)) return false;
      if (filters.priceRange === "100-150" && (price < 100 || price >= 150)) return false;
      if (filters.priceRange === "150+" && price < 150) return false;
    }
    if (filters.duration.length > 0) {
      const hours = tour.durationHours;
      const match = filters.duration.some((d) => {
        if (d === "short") return hours < 8;
        if (d === "full") return hours >= 8 && hours <= 12;
        if (d === "long") return hours > 12;
        return false;
      });
      if (!match) return false;
    }
    if (filters.tourType.length > 0 && !filters.tourType.includes(tour.tourType)) return false;
    if (filters.category.length > 0 && !filters.category.some((c) => tour.category.includes(c))) return false;
    return true;
  });
};

const CenoteToursPage = () => {
  const { locale } = useLocale();
  const isEs = locale === "es";

  const c = isEs ? {
    metaTitle: "Chichén Itzá + Tours de Cenotes – Nada y Explora 2026",
    metaDesc: "Los mejores tours combo Chichén Itzá + cenote. Explora ruinas antiguas y nada en cenotes impresionantes como Ik Kil. Almuerzo incluido. Desde $99.",
    breadcrumb: "Tours de Cenotes",
    rating: "4.8/5 de más de 4,500 viajeros",
    h1: "Chichén Itzá + Tours Combo de Cenotes",
    subtitle: "La combinación perfecta: explora ruinas mayas antiguas y refréscate con un baño en un impresionante cenote natural. ¡Nuestro formato de tour más popular!",
    badges: [
      { icon: Droplets, text: "Baño en cenote" },
      { icon: Waves, text: "Agua cristalina" },
      { icon: Leaf, text: "Maravilla natural" },
      { icon: Shield, text: "Chalecos salvavidas" },
    ],
    cta: "Ver Tours de Cenotes",
    cenotesTitle: "Cenotes Populares Incluidos en Nuestros Tours",
    cenotes: [
      { name: "Cenote Ik Kil", desc: "El icónico cenote a solo 5 km de Chichén Itzá. 26 metros de profundidad con enredaderas colgantes y cascadas. El cenote más famoso de México.", badge: "Más Popular" },
      { name: "Cenote Saamal", desc: "Un cenote semi-abierto en Valladolid con plataformas, tirolesas e impresionantes estalactitas. Ideal para familias con áreas poco profundas.", badge: "Favorito Familiar" },
      { name: "Cenote Hubiku", desc: "Un espectacular cenote subterráneo con un dramático rayo de luz al mediodía. Menos concurrido que Ik Kil para una experiencia más serena.", badge: "Joya Oculta" },
    ],
    tipsTitle: "Consejos para Nadar en Cenotes",
    tip1Title: "Qué Llevar para Nadar en el Cenote",
    tip1Content: "Traje de baño, protector solar biodegradable (obligatorio — el protector solar regular daña el ecosistema), toalla, zapatos acuáticos y una funda impermeable para cámara o teléfono.",
    tip2Title: "Reglas Importantes",
    tip2Content: "Solo se permite protector solar biodegradable en cenotes. Repelente de insectos, maquillaje y sprays químicos deben lavarse antes de entrar. La mayoría de cenotes tienen vestidores y casilleros.",
    tip3Title: "Consejo Pro",
    tip3Content: "Si quieres una experiencia menos concurrida, pregunta por tours que visitan cenotes privados o menos conocidos en lugar de Ik Kil. Nuestros tours privados pueden organizar acceso exclusivo.",
    toursTitle: "Todos los Tours Chichén Itzá + Cenote",
    toursSuffix: "tours combo de cenote disponibles",
    reviewsTitle: "Reseñas de Tours de Cenotes",
    faqTitle: "Preguntas Frecuentes – Tours de Cenotes",
    faqSubtitle: "Preguntas comunes sobre tours combo Chichén Itzá + cenote",
    exploreTitle: "Explorar Más Tours",
    exploreLinks: [
      { label: "Tours de un Día", href: "/tours/day-tours" },
      { label: "Tours Privados", href: "/tours/private-tours" },
      { label: "Tours al Amanecer", href: "/tours/sunrise-tours" },
      { label: "Tours Ek Balam", href: "/tours/ek-balam-tours" },
      { label: "Combo Cenote Ik Kil", href: "/combo-tours/cenote-ik-kil" },
      { label: "Desde Cancún", href: "/tours-from/cancun" },
      { label: "Desde Playa del Carmen", href: "/tours-from/playa-del-carmen" },
      { label: "Qué Llevar", href: "/guide/what-to-bring" },
      { label: "Código de Vestimenta", href: "/guide/dress-code-and-rules" },
      { label: "Todos los Tours", href: "/tours" },
    ],
    noMatch: "Ningún tour coincide con tus filtros.",
    clearFilters: "Limpiar Filtros",
  } : {
    metaTitle: "Chichen Itza + Cenote Tours – Swim & Explore 2026",
    metaDesc: "Best Chichen Itza cenote combo tours. Explore ancient ruins then swim in stunning cenotes like Ik Kil. Lunch included. From $99. Book now!",
    breadcrumb: "Cenote Tours",
    rating: "4.8/5 from 4,500+ travelers",
    h1: "Chichen Itza + Cenote Combo Tours",
    subtitle: "The perfect combination: explore ancient Mayan ruins then cool off with a swim in a stunning natural cenote. Our most popular tour format!",
    badges: [
      { icon: Droplets, text: "Cenote swimming" },
      { icon: Waves, text: "Crystal-clear water" },
      { icon: Leaf, text: "Natural wonder" },
      { icon: Shield, text: "Life vests provided" },
    ],
    cta: "Browse Cenote Tours",
    cenotesTitle: "Popular Cenotes Included in Our Tours",
    cenotes: [
      { name: "Cenote Ik Kil", desc: "The iconic cenote just 3 miles from Chichen Itza. 85 feet deep with hanging vines and waterfalls. The most famous cenote in Mexico.", badge: "Most Popular" },
      { name: "Cenote Saamal", desc: "A semi-open cenote in Valladolid with platforms, ziplines, and stunning stalactites. Great for families with shallow areas.", badge: "Family Favorite" },
      { name: "Cenote Hubiku", desc: "A spectacular underground cenote with a dramatic light beam at midday. Less crowded than Ik Kil for a more serene experience.", badge: "Hidden Gem" },
    ],
    tipsTitle: "Cenote Swimming Tips",
    tip1Title: "What to Bring for Cenote Swimming",
    tip1Content: "Swimsuit, biodegradable sunscreen (required — regular sunscreen damages the ecosystem), towel, water shoes, and a waterproof camera or phone case. Life vests are provided and recommended.",
    tip2Title: "Important Rules",
    tip2Content: "Only biodegradable sunscreen is allowed in cenotes to protect the delicate ecosystem. Insect repellent, makeup, and chemical sprays should be washed off before entering. Most cenotes have changing rooms and lockers.",
    tip3Title: "Pro Tip",
    tip3Content: "If you want a less crowded cenote experience, ask about tours that visit private or lesser-known cenotes instead of Ik Kil. Our private tours can arrange exclusive cenote access.",
    toursTitle: "All Chichen Itza + Cenote Tours",
    toursSuffix: "cenote combo tours available",
    reviewsTitle: "Cenote Tour Reviews",
    faqTitle: "Cenote Tour FAQs",
    faqSubtitle: "Common questions about Chichen Itza cenote combo tours",
    exploreTitle: "Explore More Tours",
    exploreLinks: [
      { label: "Day Tours", href: "/tours/day-tours" },
      { label: "Private Tours", href: "/tours/private-tours" },
      { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
      { label: "Ek Balam Tours", href: "/tours/ek-balam-tours" },
      { label: "Cenote Ik Kil Combo", href: "/combo-tours/cenote-ik-kil" },
      { label: "From Cancún", href: "/tours-from/cancun" },
      { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
      { label: "What to Bring", href: "/guide/what-to-bring" },
      { label: "Dress Code", href: "/guide/dress-code-and-rules" },
      { label: "All Tours", href: "/tours" },
    ],
    noMatch: "No tours match your filters.",
    clearFilters: "Clear All Filters",
  };

  const meta = getPageMeta({
    title: c.metaTitle, description: c.metaDesc, canonical: "/tours/cenote-tours", locale,
    jsonLd: [createFAQSchema(cenoteToursFAQs), createBreadcrumbSchema([{ name: isEs ? "Inicio" : "Home", url: "/" }, { name: "Tours", url: "/tours" }, { name: c.breadcrumb }])],
  });

  const cenoteTours = useMemo(() => tours.filter((t) => t.category.includes("cenote-tours")), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(cenoteTours, filters), [cenoteTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tours", href: "/tours" }, { label: c.breadcrumb }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-accent text-accent" />))}
              <span className="ml-2 text-sm text-muted-foreground">{c.rating}</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">{c.h1}</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">{c.subtitle}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {c.badges.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border"><item.icon className="h-4 w-4 text-secondary" />{item.text}</span>
              ))}
            </div>
            <Button variant="cta" size="lg" asChild><a href="#tours">{c.cta} <ChevronRight className="h-5 w-5" /></a></Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs
              ? <>Los cenotes — sumideros naturales de piedra caliza llenos de agua cristalina — son uno de los mayores tesoros del Yucatán. Los antiguos mayas los consideraban portales sagrados al inframundo. Aprende más en nuestra <Link to="/guide/history-and-facts" className="text-primary hover:underline">guía de historia</Link>.</>
              : <>Cenotes — natural limestone sinkholes filled with crystal-clear water — are one of the Yucatán's greatest treasures. The ancient Maya considered them sacred portals to the underworld. Learn more in our <Link to="/guide/history-and-facts" className="text-primary hover:underline">history and facts guide</Link>.</>
            }
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs
              ? <>Nuestros tours combo Chichén Itzá + Cenote combinan la maravilla de explorar una de las Nuevas Siete Maravillas con el refrescante placer de nadar en estas piscinas naturales. No olvides revisar nuestra <Link to="/guide/what-to-bring" className="text-primary hover:underline">lista de equipaje</Link> para esenciales del cenote.</>
              : <>Our Chichen Itza + Cenote combo tours pair the awe of exploring a New Seven Wonders site with the refreshing thrill of swimming in these natural pools. Don't forget to check our <Link to="/guide/what-to-bring" className="text-primary hover:underline">packing list</Link> for cenote-specific essentials.</>
            }
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {isEs
              ? <>La mayoría de tours visitan el <strong className="text-foreground">Cenote Ik Kil</strong>, el cenote más famoso de México. Consulta nuestro <Link to="/combo-tours/cenote-ik-kil" className="text-primary hover:underline">combo Cenote Ik Kil</Link> para el paquete más popular.</>
              : <>Most tours visit <strong className="text-foreground">Cenote Ik Kil</strong>, the most famous cenote in Mexico. See our <Link to="/combo-tours/cenote-ik-kil" className="text-primary hover:underline">Cenote Ik Kil combo</Link> for the most popular package.</>
            }
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">{c.cenotesTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {c.cenotes.map((cenote, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden border border-border">
                <div className="h-40 bg-gradient-to-br from-secondary/30 to-primary/20 flex items-center justify-center"><Droplets className="h-12 w-12 text-secondary/50" /></div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-lg">{cenote.name}</h3>
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-medium">{cenote.badge}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{cenote.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 text-center">{c.tipsTitle}</h2>
          <TipBox type="info" title={c.tip1Title} content={c.tip1Content} />
          <TipBox type="warning" title={c.tip2Title} content={c.tip2Content} />
          <TipBox type="tip" title={c.tip3Title} content={c.tip3Content} />
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">{c.toursTitle}</h2>
          <p className="text-center text-muted-foreground mb-8">{cenoteTours.length} {c.toursSuffix}</p>
          <TourFilters onFilterChange={setFilters} tourCount={filteredTours.length} className="mb-6" />
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{filteredTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}</div>
          ) : (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground mb-4">{c.noMatch}</p>
              <Button variant="outline" onClick={() => setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })}>{c.clearFilters}</Button>
            </div>
          )}
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <section className="py-12 lg:py-16 bg-muted/30"><div className="container"><ReviewGrid reviews={getReviewsByTourCategory("cenote")} limit={3} title={c.reviewsTitle} showAllLink /></div></section>
      <FAQSection faqs={cenoteToursFAQs} title={c.faqTitle} subtitle={c.faqSubtitle} />
      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">{c.exploreTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {c.exploreLinks.map((link) => (<Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CenoteToursPage;
