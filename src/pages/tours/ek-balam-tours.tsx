import { LocaleLink as Link } from "@/components/LocaleLink";
import { useState, useMemo } from "react";
import { Mountain, Clock, ChevronRight, Star, Eye, Compass, Shield } from "lucide-react";
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
import type { FAQItem } from "@/lib/faqData";
import { getReviewsByTourCategory } from "@/lib/reviewsData";
import ReviewGrid from "@/components/features/reviews/ReviewGrid";
import { useLocale } from "@/lib/i18n/useLocale";
import type { Tour } from "@/types/tour";

const ekBalamFAQs: FAQItem[] = [
  { question: "Can you still climb the pyramid at Ek Balam?", answer: "Yes! Unlike Chichen Itza where climbing is prohibited, you can still climb Ek Balam's Acropolis pyramid for breathtaking 360° panoramic views.", category: "experience" },
  { question: "How far is Ek Balam from Chichen Itza?", answer: "Ek Balam is approximately 30 miles (50 km) north of Chichen Itza, about a 45-minute drive.", category: "distance" },
  { question: "What makes Ek Balam different from Chichen Itza?", answer: "Ek Balam offers a more intimate experience with fewer crowds, the ability to climb the main pyramid, remarkably preserved stucco sculptures, and a beautiful jungle cenote.", category: "comparison" },
  { question: "Is the climb at Ek Balam difficult?", answer: "The climb is moderately challenging — the Acropolis is about 100 feet tall with steep stone steps. Most reasonably fit adults and older children can manage it.", category: "preparation" },
  { question: "Is there a cenote at Ek Balam?", answer: "Yes! Cenote Xcanche is located about a 15-minute walk from the ruins with swimming, rappelling, and zipline activities.", category: "activities" },
  { question: "How long does it take to explore Ek Balam?", answer: "Plan 1.5-2 hours for a thorough visit, including climbing the Acropolis. Add another hour if visiting Cenote Xcanche.", category: "duration" },
];

const filterTours = (allTours: Tour[], filters: FilterState): Tour[] => {
  return allTours.filter((tour) => {
    if (filters.priceRange !== "all") { const price = tour.price.adult; if (filters.priceRange === "0-60" && price >= 60) return false; if (filters.priceRange === "60-100" && (price < 60 || price >= 100)) return false; if (filters.priceRange === "100-150" && (price < 100 || price >= 150)) return false; if (filters.priceRange === "150+" && price < 150) return false; }
    if (filters.duration.length > 0) { const hours = tour.durationHours; const match = filters.duration.some((d) => { if (d === "short") return hours < 8; if (d === "full") return hours >= 8 && hours <= 12; if (d === "long") return hours > 12; return false; }); if (!match) return false; }
    if (filters.tourType.length > 0 && !filters.tourType.includes(tour.tourType)) return false;
    if (filters.category.length > 0 && !filters.category.some((c) => tour.category.includes(c))) return false;
    return true;
  });
};

const EkBalamToursPage = () => {
  const { locale } = useLocale();
  const isEs = locale === "es";

  const c = isEs ? {
    metaTitle: "Chichén Itzá + Ek Balam Tours – Sube una Pirámide Maya 2026",
    metaDesc: "Combina Chichén Itzá con Ek Balam — una de las pocas pirámides mayas que puedes subir. Vistas panorámicas de la selva, nado en cenote. Desde $119.",
    breadcrumb: "Tours Ek Balam", rating: "4.9/5 de más de 670 viajeros",
    h1: "Chichén Itzá + Tours Combo Ek Balam",
    subtitle: "Visita dos magníficos sitios mayas en un día — y sube la pirámide Acrópolis de Ek Balam para vistas impresionantes de la selva. ¡El tour soñado para aventureros!",
    badges: [{ icon: Mountain, text: "Pirámide escalable" }, { icon: Eye, text: "Vistas 360° de la selva" }, { icon: Compass, text: "Dos sitios arqueológicos" }, { icon: Shield, text: "Grupos pequeños (máx. 12)" }],
    cta: "Ver Tours Ek Balam",
    whyTitle: "¿Por Qué Agregar Ek Balam a Tu Tour?",
    whyItems: [
      { title: "Sube la Acrópolis", desc: "Una de las pocas pirámides mayas que puedes subir. El ascenso de 30 metros te recompensa con vistas espectaculares 360° de la selva.", badge: "Único" },
      { title: "Menos Multitudes", desc: "Ek Balam recibe una fracción de los visitantes de Chichén Itzá, ofreciendo una experiencia arqueológica íntima y tranquila.", badge: "Tranquilo" },
      { title: "Esculturas Impresionantes", desc: "La fachada de estuco 'Boca del Monstruo' es uno de los mejores ejemplos conservados del arte maya antiguo.", badge: "Arte e Historia" },
    ],
    tipsTitle: "Consejos para Subir Ek Balam",
    tip1Title: "Qué Vestir para la Subida", tip1Content: "Usa zapatos cerrados resistentes con buen agarre — los escalones de piedra pueden ser resbaladizos. Evita sandalias o chanclas. Trae una mochila pequeña para tener las manos libres.",
    tip2Title: "Cenote Xcanche", tip2Content: "Si tu tour incluye Cenote Xcanche (15 minutos caminando de las ruinas), trae tu traje de baño, toalla y protector solar biodegradable.",
    tip3Title: "Requisitos Físicos", tip3Content: "La subida es moderadamente exigente. Si tienes problemas de movilidad o vértigo, puedes disfrutar las estructuras a nivel del suelo. Las esculturas de estuco son visibles sin subir.",
    toursTitle: "Todos los Tours Chichén Itzá + Ek Balam", toursSuffix: "tours combo Ek Balam disponibles",
    reviewsTitle: "Reseñas Tours Ek Balam", faqTitle: "Preguntas Frecuentes – Tours Ek Balam", faqSubtitle: "Preguntas comunes sobre tours combo Chichén Itzá + Ek Balam",
    exploreTitle: "Explorar Más Tours",
    exploreLinks: [{ label: "Tours de un Día", href: "/tours/day-tours" }, { label: "Tours Privados", href: "/tours/private-tours" }, { label: "Tours Cenote", href: "/tours/cenote-tours" }, { label: "Tours Valladolid", href: "/tours/valladolid-tours" }, { label: "Desde Cancún", href: "/tours-from/cancun" }, { label: "Todos los Tours", href: "/tours" }],
    noMatch: "Ningún tour coincide con tus filtros.", clearFilters: "Limpiar Filtros",
  } : {
    metaTitle: "Chichen Itza + Ek Balam Tours – Climb a Mayan Pyramid 2026",
    metaDesc: "Combine Chichen Itza with Ek Balam — one of the few Mayan pyramids you can still climb. Panoramic jungle views, cenote swim. From $119. Book now!",
    breadcrumb: "Ek Balam Tours", rating: "4.9/5 from 670+ travelers",
    h1: "Chichen Itza + Ek Balam Combo Tours",
    subtitle: "Visit two magnificent Mayan sites in one day — and climb the Acropolis pyramid at Ek Balam for breathtaking jungle views. An adventurer's dream tour!",
    badges: [{ icon: Mountain, text: "Climbable pyramid" }, { icon: Eye, text: "360° jungle views" }, { icon: Compass, text: "Two archaeological sites" }, { icon: Shield, text: "Small groups (max 12)" }],
    cta: "Browse Ek Balam Tours",
    whyTitle: "Why Add Ek Balam to Your Chichen Itza Tour?",
    whyItems: [
      { title: "Climb the Acropolis", desc: "One of the few Mayan pyramids you can still climb. The 100-foot ascent rewards you with spectacular 360° jungle views.", badge: "Unique" },
      { title: "Fewer Crowds", desc: "Ek Balam receives a fraction of Chichen Itza's visitors, offering a peaceful, intimate archaeological experience.", badge: "Peaceful" },
      { title: "Stunning Sculptures", desc: "The 'Monster Mouth' stucco facade is among the best-preserved examples of ancient Mayan art anywhere.", badge: "Art & History" },
    ],
    tipsTitle: "Ek Balam Climbing Tips",
    tip1Title: "What to Wear for the Climb", tip1Content: "Wear sturdy closed-toe shoes with good grip — the stone steps can be slippery. Avoid sandals or flip-flops. Bring a small backpack to keep your hands free.",
    tip2Title: "Cenote Xcanche", tip2Content: "If your tour includes Cenote Xcanche (a 15-minute walk from the ruins), bring your swimsuit, towel, and biodegradable sunscreen.",
    tip3Title: "Physical Requirements", tip3Content: "The pyramid climb is moderately strenuous. If you have mobility issues or fear of heights, you can still enjoy the ground-level structures.",
    toursTitle: "All Chichen Itza + Ek Balam Tours", toursSuffix: "Ek Balam combo tours available",
    reviewsTitle: "Ek Balam Tour Reviews", faqTitle: "Ek Balam Tour FAQs", faqSubtitle: "Common questions about Chichen Itza + Ek Balam combo tours",
    exploreTitle: "Explore More Tours",
    exploreLinks: [{ label: "Day Tours", href: "/tours/day-tours" }, { label: "Private Tours", href: "/tours/private-tours" }, { label: "Cenote Tours", href: "/tours/cenote-tours" }, { label: "Valladolid Tours", href: "/tours/valladolid-tours" }, { label: "From Cancún", href: "/tours-from/cancun" }, { label: "All Tours", href: "/tours" }],
    noMatch: "No tours match your filters.", clearFilters: "Clear All Filters",
  };

  const meta = getPageMeta({ title: c.metaTitle, description: c.metaDesc, canonical: "/tours/ek-balam-tours", locale, jsonLd: [createFAQSchema(ekBalamFAQs), createBreadcrumbSchema([{ name: isEs ? "Inicio" : "Home", url: "/" }, { name: "Tours", url: "/tours" }, { name: c.breadcrumb }])] });

  const ekBalamTours = useMemo(() => tours.filter((t) => t.category.includes("ek-balam")), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(ekBalamTours, filters), [ekBalamTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />
      <section className="relative bg-gradient-to-br from-accent/10 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Tours", href: "/tours" }, { label: c.breadcrumb }]} />
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
            {isEs ? <>Mientras Chichén Itzá es la estrella indiscutible de la arqueología yucateca, el cercano <strong className="text-foreground">Ek Balam</strong> ofrece algo que Chichén Itzá no puede — la oportunidad de <strong className="text-foreground">subir una pirámide maya antigua</strong>. La Acrópolis de Ek Balam tiene 30 metros de alto y recompensa a los escaladores con vistas 360° ininterrumpidas del dosel de la selva.</> : <>While Chichen Itza is the star of Yucatán archaeology, nearby <strong className="text-foreground">Ek Balam</strong> offers something Chichen Itza cannot — the chance to <strong className="text-foreground">climb an ancient Mayan pyramid</strong>. The Acropolis at Ek Balam stands 100 feet tall and rewards climbers with unobstructed 360-degree jungle views.</>}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {isEs ? <>Nuestros tours combo combinan eficientemente ambos sitios, más nado en cenote y almuerzo. Compara con <Link to="/tours/day-tours" className="text-primary hover:underline">tours de un día estándar</Link>, <Link to="/tours/cenote-tours" className="text-primary hover:underline">combos cenote</Link>, o <Link to="/tours/private-tours" className="text-primary hover:underline">experiencias privadas</Link>.</> : <>Our combo tours efficiently pair both sites, plus cenote swimming and lunch. Compare with <Link to="/tours/day-tours" className="text-primary hover:underline">standard day tours</Link>, <Link to="/tours/cenote-tours" className="text-primary hover:underline">cenote combos</Link>, or <Link to="/tours/private-tours" className="text-primary hover:underline">private experiences</Link>.</>}
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container"><h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">{c.whyTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {c.whyItems.map((item, i) => (<div key={i} className="bg-card rounded-lg overflow-hidden border border-border"><div className="h-40 bg-gradient-to-br from-accent/30 to-primary/20 flex items-center justify-center"><Mountain className="h-12 w-12 text-accent/50" /></div><div className="p-5"><div className="flex items-center gap-2 mb-2"><h3 className="font-heading font-semibold text-lg">{item.title}</h3><span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">{item.badge}</span></div><p className="text-sm text-muted-foreground">{item.desc}</p></div></div>))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16"><div className="container max-w-3xl space-y-6"><h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 text-center">{c.tipsTitle}</h2><TipBox type="tip" title={c.tip1Title} content={c.tip1Content} /><TipBox type="info" title={c.tip2Title} content={c.tip2Content} /><TipBox type="warning" title={c.tip3Title} content={c.tip3Content} /></div></section>

      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">{c.toursTitle}</h2>
          <p className="text-center text-muted-foreground mb-8">{ekBalamTours.length} {c.toursSuffix}</p>
          <TourFilters onFilterChange={setFilters} tourCount={filteredTours.length} className="mb-6" />
          {filteredTours.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{filteredTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}</div>) : (<div className="text-center py-12 bg-card rounded-lg border border-border"><p className="text-muted-foreground mb-4">{c.noMatch}</p><Button variant="outline" onClick={() => setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })}>{c.clearFilters}</Button></div>)}
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <section className="py-12 lg:py-16 bg-muted/30"><div className="container"><ReviewGrid reviews={getReviewsByTourCategory("ek-balam")} limit={3} title={c.reviewsTitle} showAllLink /></div></section>
      <FAQSection faqs={ekBalamFAQs} title={c.faqTitle} subtitle={c.faqSubtitle} />
      <CTASection />
      <section className="py-12 bg-muted/30 border-t border-border"><div className="container"><h2 className="font-heading font-semibold text-lg mb-6">{c.exploreTitle}</h2><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">{c.exploreLinks.map((link) => (<Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>))}</div></div></section>
    </>
  );
};

export default EkBalamToursPage;
