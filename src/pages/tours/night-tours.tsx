import { LocaleLink as Link } from "@/components/LocaleLink";
import { useState, useMemo } from "react";
import { Moon, Clock, ChevronRight, Star, Sparkles, Camera, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createFAQSchema, createBreadcrumbSchema, createItemListSchema } from "@/lib/seo";
import { tourTranslationsEs } from "@/lib/tourData.es";
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

const nightToursFAQsEn: FAQItem[] = [
  { question: "What is the Noches de Kukulkan light show?", answer: "A spectacular light and sound show featuring cutting-edge projection mapping on the El Castillo pyramid. Colorful projections tell the story of Mayan civilization. The show runs approximately 25-30 minutes.", category: "experience" },
  { question: "What nights does the light show run?", answer: "Wednesday through Sunday during high season (November–April) and Thursday through Saturday during low season. The show starts after sunset, usually around 8:00 PM.", category: "schedule" },
  { question: "Is the night tour different from a daytime visit?", answer: "Yes, completely! The night tour focuses on the light show rather than exploring the ruins up close. You can walk around illuminated sections before the show.", category: "comparison" },
  { question: "Can I take photos during the light show?", answer: "Yes, photography is encouraged. Smartphones and cameras are welcome. However, tripods, flash, and drones are prohibited.", category: "photography" },
  { question: "Is dinner included?", answer: "Yes, most night tours include dinner at a restaurant near the archaeological zone before the show.", category: "inclusions" },
  { question: "How long is the entire night tour?", answer: "Approximately 6-7 hours total, including transportation, dinner, pre-show exploration, the light show, and return journey.", category: "duration" },
  { question: "Is the night tour suitable for children?", answer: "Yes, children generally love the light show. The colorful projections are engaging for all ages. Children under 3 are usually free.", category: "family" },
];
const nightToursFAQsEs: FAQItem[] = [
  { question: "¿Qué es el espectáculo de luces Noches de Kukulkán?", answer: "Un espectacular show de luz y sonido con proyección de última generación sobre la pirámide de El Castillo. Las proyecciones coloridas cuentan la historia de la civilización maya. El show dura aproximadamente 25-30 minutos.", category: "experience" },
  { question: "¿Qué noches se presenta el show de luces?", answer: "De miércoles a domingo en temporada alta (noviembre-abril) y de jueves a sábado en temporada baja. El show comienza después del atardecer, usualmente alrededor de las 8:00 PM.", category: "schedule" },
  { question: "¿El tour nocturno es diferente a una visita de día?", answer: "¡Sí, completamente! El tour nocturno se enfoca en el show de luces en lugar de explorar las ruinas de cerca. Puedes caminar por las secciones iluminadas antes del show.", category: "comparison" },
  { question: "¿Puedo tomar fotos durante el show de luces?", answer: "Sí, se anima a tomar fotos. Los smartphones y cámaras son bienvenidos. Sin embargo, los trípodes, el flash y los drones están prohibidos.", category: "photography" },
  { question: "¿Incluye cena?", answer: "Sí, la mayoría de los tours nocturnos incluyen cena en un restaurante cercano a la zona arqueológica antes del show.", category: "inclusions" },
  { question: "¿Cuánto dura el tour nocturno completo?", answer: "Aproximadamente 6-7 horas en total, incluyendo transporte, cena, exploración previa al show, el espectáculo de luces y el viaje de regreso.", category: "duration" },
  { question: "¿Es el tour nocturno adecuado para niños?", answer: "Sí, a los niños generalmente les encanta el show de luces. Las proyecciones coloridas son atractivas para todas las edades. Los niños menores de 3 años usualmente son gratis.", category: "family" },
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

const NightToursPage = () => {
  const { locale } = useLocale();
  const isEs = locale === "es";
  const nightToursFAQs = isEs ? nightToursFAQsEs : nightToursFAQsEn;

  const c = isEs ? {
    metaTitle: "Tours Nocturnos Chichén Itzá – Espectáculo de Luz y Sonido 2026",
    metaDesc: "Vive Chichén Itzá de noche con el espectacular show de luces Noches de Kukulkán. Proyecciones en El Castillo, cena incluida. Desde $79.",
    breadcrumb: "Tours Nocturnos", rating: "4.7/5 de más de 420 viajeros",
    h1: "Tours Nocturnos Chichén Itzá – Espectáculo de Luz y Sonido",
    subtitle: "Experimenta la antigua maravilla después del anochecer. Mira cómo El Castillo cobra vida con espectacular mapeo de proyección durante el show Noches de Kukulkán.",
    badges: [{ icon: Moon, text: "Experiencia nocturna" }, { icon: Sparkles, text: "Proyecciones" }, { icon: Camera, text: "Fotografía nocturna" }, { icon: Shield, text: "Cena incluida" }],
    cta: "Ver Tours Nocturnos",
    expectTitle: "Qué Esperar del Show Nocturno",
    expectItems: [
      { title: "Mapeo de Proyección", desc: "Proyecciones 3D de última tecnología transforman El Castillo en un lienzo viviente. Observa la cosmología maya y patrones astronómicos cobrar vida en color vívido.", badge: "Evento Principal" },
      { title: "Exploración Pre-Show", desc: "Camina por la zona arqueológica iluminada antes del show. Estructuras clave están iluminadas con luz atmosférica para increíbles fotos.", badge: "30 Minutos" },
      { title: "Experiencia Gastronómica", desc: "Disfruta una cena tradicional yucateca antes del show en un restaurante cercano o dentro de la zona arqueológica.", badge: "Incluida" },
    ],
    tipsTitle: "Consejos para el Tour Nocturno",
    tip1Title: "Tips de Fotografía", tip1Content: "Usa el modo nocturno de tu teléfono para mejores resultados. Apaga el flash — arruina las proyecciones y molesta a otros invitados.",
    tip2Title: "Qué Llevar", tip2Content: "Trae una chaqueta ligera — las temperaturas bajan a 21-24°C después del atardecer. Repelente de insectos es útil. Un cargador portátil asegura batería para fotos.",
    tip3Title: "Nota de Disponibilidad", tip3Content: "El show de luces no funciona todas las noches. Temporada alta (Nov-Abr): miércoles a domingo. Temporada baja (May-Oct): jueves a sábado. Reserva temprano ya que los shows se agotan.",
    toursTitle: "Todos los Tours Nocturnos Chichén Itzá", toursSuffix: "disponibles",
    reviewsTitle: "Reseñas Tours Nocturnos", faqTitle: "Preguntas Frecuentes – Tours Nocturnos", faqSubtitle: "Preguntas comunes sobre tours nocturnos y de espectáculo de luces",
    exploreTitle: "Explorar Más Tours",
    exploreLinks: [{ label: "Tours de un Día", href: "/tours/day-tours" }, { label: "Tours al Amanecer", href: "/tours/sunrise-tours" }, { label: "Tours Privados", href: "/tours/private-tours" }, { label: "Tours Cenote", href: "/tours/cenote-tours" }, { label: "Desde Cancún", href: "/tours-from/cancun" }, { label: "Todos los Tours", href: "/tours" }],
    noMatch: "Ningún tour coincide con tus filtros.", clearFilters: "Limpiar Filtros",
  } : {
    metaTitle: "Chichen Itza Night Tours – Light & Sound Show 2026",
    metaDesc: "Experience Chichen Itza after dark with the spectacular Noches de Kukulkan light show. Projections on El Castillo, dinner included. From $79. Book now!",
    breadcrumb: "Night Tours", rating: "4.7/5 from 420+ travelers",
    h1: "Chichen Itza Night Tours – Light & Sound Show",
    subtitle: "Experience the ancient wonder after dark. Watch El Castillo come alive with spectacular projection mapping during the Noches de Kukulkan show — a magical evening you'll never forget.",
    badges: [{ icon: Moon, text: "Evening experience" }, { icon: Sparkles, text: "Projection mapping" }, { icon: Camera, text: "Night photography" }, { icon: Shield, text: "Dinner included" }],
    cta: "Browse Night Tours",
    expectTitle: "What to Expect at the Night Show",
    expectItems: [
      { title: "Projection Mapping", desc: "State-of-the-art 3D projections transform El Castillo into a living canvas. Watch Mayan cosmology and astronomical patterns come alive in vivid color.", badge: "Main Event" },
      { title: "Pre-Show Exploration", desc: "Walk around the illuminated archaeological zone before the show begins. Key structures are lit with atmospheric lighting for incredible photo opportunities.", badge: "30 Minutes" },
      { title: "Dinner Experience", desc: "Enjoy a traditional Yucatecan dinner before the show at a nearby restaurant or within the archaeological zone.", badge: "Included" },
    ],
    tipsTitle: "Night Tour Tips",
    tip1Title: "Photography Tips", tip1Content: "Use your phone's night mode for the best results. Turn off flash — it washes out the projections and disturbs other guests.",
    tip2Title: "What to Bring", tip2Content: "Bring a light jacket — temperatures drop to 70-75°F after sunset. Bug spray is helpful. A portable phone charger ensures battery for photos.",
    tip3Title: "Availability Note", tip3Content: "The light show doesn't run every night. High season (Nov-Apr): Wednesday through Sunday. Low season (May-Oct): Thursday through Saturday. Reserve early as shows sell out.",
    toursTitle: "All Chichen Itza Night Tours", toursSuffix: "available",
    reviewsTitle: "Night Tour Reviews", faqTitle: "Night Tour FAQs", faqSubtitle: "Common questions about Chichen Itza evening and light show tours",
    exploreTitle: "Explore More Tours",
    exploreLinks: [{ label: "Day Tours", href: "/tours/day-tours" }, { label: "Sunrise Tours", href: "/tours/sunrise-tours" }, { label: "Private Tours", href: "/tours/private-tours" }, { label: "Cenote Tours", href: "/tours/cenote-tours" }, { label: "From Cancún", href: "/tours-from/cancun" }, { label: "All Tours", href: "/tours" }],
    noMatch: "No tours match your filters.", clearFilters: "Clear All Filters",
  };

  const nightTours = useMemo(() => tours.filter((t) => t.category.includes("night-tours")), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(nightTours, filters), [nightTours, filters]);

  const itemListItems = nightTours.map((tour) => {
    const es = isEs ? tourTranslationsEs[tour.id] : null;
    return { name: es?.title ?? tour.title, url: isEs ? `/es/tours/${tour.slug}` : `/tours/${tour.slug}` };
  });

  const meta = getPageMeta({ title: c.metaTitle, description: c.metaDesc, canonical: "/tours/night-tours", locale, jsonLd: [createFAQSchema(nightToursFAQs), createBreadcrumbSchema([{ name: isEs ? "Inicio" : "Home", url: "/" }, { name: "Tours", url: "/tours" }, { name: c.breadcrumb }]), createItemListSchema({ name: c.metaTitle, url: isEs ? "/es/tours/tours-nocturnos" : "/tours/night-tours", items: itemListItems })] });

  return (
    <>
      <SEOHead meta={meta} />
      <section className="relative bg-gradient-to-br from-[hsl(var(--foreground)/0.05)] via-background to-accent/10 py-12 lg:py-16">
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
            {isEs ? <>Mientras la mayoría de visitantes experimentan Chichén Itzá bajo el sol ardiente, el espectáculo <strong className="text-foreground">Noches de Kukulkán</strong> transforma el sitio antiguo en algo completamente diferente — un espectáculo nocturno hipnotizante con tecnología de proyección de última generación.</> : <>While most visitors experience Chichen Itza under the blazing Yucatán sun, the <strong className="text-foreground">Noches de Kukulkan</strong> light and sound show transforms the ancient site into something entirely different — a mesmerizing nighttime spectacle with cutting-edge projection technology.</>}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {isEs ? <>Los tours nocturnos ofrecen una perspectiva completamente diferente — temperaturas frescas (21-24°C), menos visitantes, y una atmósfera mágica. Perfecto como complemento a un <Link to="/tours/day-tours" className="text-primary hover:underline">tour diurno</Link>. También considera <Link to="/tours/sunrise-tours" className="text-primary hover:underline">tours al amanecer</Link> para otra experiencia de iluminación única.</> : <>Night tours offer a completely different perspective — cooler temperatures, fewer visitors, and a magical atmosphere. Perfect as a complement to a <Link to="/tours/day-tours" className="text-primary hover:underline">daytime tour</Link>. Also consider <Link to="/tours/sunrise-tours" className="text-primary hover:underline">sunrise tours</Link> for another unique lighting experience.</>}
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container"><h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">{c.expectTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {c.expectItems.map((item, i) => (<div key={i} className="bg-card rounded-lg overflow-hidden border border-border"><div className="h-40 bg-gradient-to-br from-foreground/10 to-accent/20 flex items-center justify-center"><Sparkles className="h-12 w-12 text-accent/50" /></div><div className="p-5"><div className="flex items-center gap-2 mb-2"><h3 className="font-heading font-semibold text-lg">{item.title}</h3><span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">{item.badge}</span></div><p className="text-sm text-muted-foreground">{item.desc}</p></div></div>))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16"><div className="container max-w-3xl space-y-6"><h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 text-center">{c.tipsTitle}</h2><TipBox type="tip" title={c.tip1Title} content={c.tip1Content} /><TipBox type="info" title={c.tip2Title} content={c.tip2Content} /><TipBox type="warning" title={c.tip3Title} content={c.tip3Content} /></div></section>

      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">{c.toursTitle}</h2>
          <p className="text-center text-muted-foreground mb-8">{nightTours.length} {isEs ? "tour" : "night tour"}{nightTours.length !== 1 ? "s" : ""} {c.toursSuffix}</p>
          <TourFilters onFilterChange={setFilters} tourCount={filteredTours.length} className="mb-6" />
          {filteredTours.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{filteredTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}</div>) : (<div className="text-center py-12 bg-card rounded-lg border border-border"><p className="text-muted-foreground mb-4">{c.noMatch}</p><Button variant="outline" onClick={() => setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })}>{c.clearFilters}</Button></div>)}
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <section className="py-12 lg:py-16 bg-muted/30"><div className="container"><ReviewGrid reviews={getReviewsByTourCategory("night")} limit={3} title={c.reviewsTitle} showAllLink /></div></section>
      <FAQSection faqs={nightToursFAQs} title={c.faqTitle} subtitle={c.faqSubtitle} />
      <CTASection />
      <section className="py-12 bg-muted/30 border-t border-border"><div className="container"><h2 className="font-heading font-semibold text-lg mb-6">{c.exploreTitle}</h2><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">{c.exploreLinks.map((link) => (<Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>))}</div></div></section>
    </>
  );
};

export default NightToursPage;
