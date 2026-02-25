import { LocaleLink as Link } from "@/components/LocaleLink";
import { useState, useMemo } from "react";
import { Sunrise, Clock, ChevronRight, Star, Camera, Moon, Coffee, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createFAQSchema, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourFilters, { type FilterState } from "@/components/features/tours/TourFilters";
import FAQSection from "@/components/common/FAQ";
import TrustBadges from "@/components/features/booking/TrustBadges";
import TimelineItem from "@/components/features/tours/TimelineItem";
import TipBox from "@/components/guide/TipBox";
import CTASection from "@/components/features/home/CTASection";
import { tours } from "@/lib/tourData";
import { sunriseToursFAQs } from "@/lib/faqData";
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

const SunriseToursPage = () => {
  const { locale } = useLocale();
  const isEs = locale === "es";

  const c = isEs ? {
    metaTitle: "Tour al Amanecer en Chichén Itzá – Acceso Temprano",
    metaDesc: "Vive Chichén Itzá al amanecer antes de las multitudes. Acceso temprano, fotos en hora dorada, guía historiador experto. Desayuno y almuerzo incluidos.",
    breadcrumb: "Tours al Amanecer",
    rating: "4.9/5 de más de 900 madrugadores",
    h1: "Tour al Amanecer en Chichén Itzá – La Magia Antes de las Multitudes",
    subtitle: "Sé de los primeros en entrar a Chichén Itzá al alba. Observa la luz dorada iluminar El Castillo en soledad casi perfecta. La experiencia definitiva de fotografía y cultura.",
    badges: [
      { icon: Sunrise, text: "Acceso al amanecer" },
      { icon: Camera, text: "Paraíso fotográfico" },
      { icon: Coffee, text: "Desayuno incluido" },
      { icon: Moon, text: "Sale a las 3:30 AM" },
    ],
    cta: "Ver Tours al Amanecer",
    whyTitle: "¿Por Qué Elegir un Tour al Amanecer?",
    whyItems: [
      { icon: Camera, title: "Fotos en Hora Dorada", desc: "Captura El Castillo con la luz perfecta de la mañana. Sin multitudes en tus fotos — solo tú y la pirámide antigua." },
      { icon: Users, title: "50-70% Menos Personas", desc: "Vive el sitio en casi total soledad. Los tours estándar no llegan hasta las 9-10 AM, dándote una ventaja tranquila." },
      { icon: Sunrise, title: "Temperaturas Más Frescas", desc: "Explora cómodamente a 24-27°C en lugar de luchar con los 35°C del mediodía. Menos sudor, más disfrute." },
      { icon: Moon, title: "Atmósfera Mágica", desc: "Hay algo espiritual en ver una maravilla antigua despertar con el amanecer. Un momento inolvidable." },
    ],
    timelineTitle: "Tu Línea de Tiempo del Tour al Amanecer",
    timeline: [
      { time: "3:30 AM", title: "Recogida Temprana", description: "Recogida de tu hotel en la oscuridad — café y refrigerio ligero incluidos a bordo." },
      { time: "6:00 AM", title: "Llegada Antes del Alba", description: "Llega a Chichén Itzá mientras el cielo aún está en transición. Siente el silencio pacífico del sitio vacío." },
      { time: "6:30 AM", title: "Amanecer en El Castillo", description: "Observa la primera luz dorada iluminar la pirámide. Captura fotos impresionantes con casi nadie alrededor." },
      { time: "7:00 AM", title: "Desayuno Caliente", description: "Disfruta un desayuno mexicano tradicional con café, jugo, fruta fresca y especialidades regionales." },
      { time: "8:00 AM", title: "Tour Guiado a Profundidad", description: "Explora el sitio mientras aún está tranquilo. Tu guía historiador maya comparte historias que las multitudes nunca escuchan." },
      { time: "10:30 AM", title: "Exploración Libre", description: "Recorre independientemente, revisita tus lugares favoritos y explora el mercado artesanal." },
      { time: "11:30 AM", title: "Cenote y Almuerzo", description: "Refrescante nado en cenote seguido de un almuerzo buffet tradicional yucateco." },
      { time: "2:00 PM", title: "Viaje de Regreso", description: "Viaje relajante de regreso a tu hotel, llegando por la tarde." },
    ],
    tipsTitle: "Consejos para el Tour al Amanecer",
    tip1Title: "Prepárate la Noche Anterior",
    tip1Content: "Pon dos alarmas, prepara tu ropa y empaca tu bolsa la noche anterior. La mayoría de hoteles pueden preparar café temprano. Usa capas — las mañanas pueden ser frescas (18-21°C) antes de calentar.",
    tip2Title: "Equipo Fotográfico",
    tip2Content: "Trae una cámara con capacidad de poca luz. Se permite trípode durante las horas del amanecer (después no). Lentes gran angular son mejores para capturar El Castillo.",
    tip3Title: "Disponibilidad Limitada",
    tip3Content: "Los tours al amanecer son nuestra experiencia premium más popular con capacidad limitada (máx. 12 por grupo). Reserva al menos 3-5 días de anticipación, especialmente en temporada alta (noviembre-marzo).",
    toursTitle: "Todas las Opciones de Tour al Amanecer",
    toursSuffix: "tours al amanecer con acceso temprano",
    reviewsTitle: "Reseñas de Tours al Amanecer",
    faqTitle: "Preguntas Frecuentes – Tours al Amanecer",
    faqSubtitle: "Preguntas comunes sobre tours al amanecer en Chichén Itzá",
    exploreTitle: "Explorar Más Tours",
    exploreLinks: [
      { label: "Tours de un Día", href: "/tours/day-tours" },
      { label: "Tours Privados", href: "/tours/private-tours" },
      { label: "Tours con Cenote", href: "/tours/cenote-tours" },
      { label: "Mejor Época para Visitar", href: "/guide/best-time-to-visit" },
      { label: "Tips de Fotografía", href: "/guide/photography-tips" },
      { label: "Todos los Tours", href: "/tours" },
    ],
    noMatch: "Ningún tour coincide con tus filtros.",
    clearFilters: "Limpiar Filtros",
  } : {
    metaTitle: "Chichen Itza Sunrise Tour – Early Access Before Crowds",
    metaDesc: "Experience Chichen Itza at sunrise before the crowds. Early access, golden hour photos, expert historian guide. Breakfast & lunch included. Book now!",
    breadcrumb: "Sunrise Tours",
    rating: "4.9/5 from 900+ early birds",
    h1: "Chichen Itza Sunrise Tour – Experience the Magic Before Crowds",
    subtitle: "Be among the first to enter Chichen Itza at dawn. Watch golden light illuminate El Castillo in near-perfect solitude. The ultimate photography and cultural experience.",
    badges: [
      { icon: Sunrise, text: "Sunrise access" },
      { icon: Camera, text: "Photo paradise" },
      { icon: Coffee, text: "Breakfast included" },
      { icon: Moon, text: "Departs 3:30 AM" },
    ],
    cta: "Browse Sunrise Tours",
    whyTitle: "Why Choose a Sunrise Tour?",
    whyItems: [
      { icon: Camera, title: "Golden Hour Photos", desc: "Capture El Castillo in perfect morning light. No crowds in your shots — just you and the ancient pyramid." },
      { icon: Users, title: "50-70% Fewer People", desc: "Experience the site in near solitude. Standard tours don't arrive until 9-10 AM, giving you a peaceful head start." },
      { icon: Sunrise, title: "Cooler Temperatures", desc: "Explore comfortably in 75-80°F instead of battling 95°F midday heat. Less sweating, more enjoying." },
      { icon: Moon, title: "Magical Atmosphere", desc: "There's something spiritual about watching an ancient wonder awaken with the dawn. An unforgettable moment." },
    ],
    timelineTitle: "Your Sunrise Tour Timeline",
    timeline: [
      { time: "3:30 AM", title: "Early Morning Pickup", description: "Pickup from your hotel in the darkness — coffee and light snack provided on board." },
      { time: "6:00 AM", title: "Arrive Before Dawn", description: "Arrive at Chichen Itza while the sky is still transitioning. Feel the peaceful silence of the empty site." },
      { time: "6:30 AM", title: "Sunrise at El Castillo", description: "Watch the first golden light illuminate the pyramid. Capture stunning photos with almost no one around." },
      { time: "7:00 AM", title: "Hot Breakfast", description: "Enjoy a traditional Mexican breakfast with coffee, juice, fresh fruit, and regional specialties." },
      { time: "8:00 AM", title: "In-Depth Guided Tour", description: "Explore the site while it's still peaceful. Your Mayan historian guide shares stories the crowds never hear." },
      { time: "10:30 AM", title: "Free Exploration", description: "Wander independently, revisit favorite spots, and browse the artisan market as it opens." },
      { time: "11:30 AM", title: "Cenote & Lunch", description: "Refreshing cenote swim followed by a traditional Yucatecan buffet lunch." },
      { time: "2:00 PM", title: "Return Journey", description: "Relaxing drive back to your hotel, arriving by late afternoon." },
    ],
    tipsTitle: "Sunrise Tour Tips",
    tip1Title: "Prepare the Night Before",
    tip1Content: "Set two alarms, lay out your clothes, and pack your bag the night before. Most hotels can prepare early coffee or a grab-and-go breakfast. Wear layers — mornings can be cool (65-70°F) before warming up.",
    tip2Title: "Photography Gear",
    tip2Content: "Bring a camera with low-light capability. A tripod is allowed during sunrise hours (not later). Wide-angle lenses are best for capturing El Castillo. Your phone camera works great too — the light is incredibly flattering.",
    tip3Title: "Limited Availability",
    tip3Content: "Sunrise tours are our most popular premium experience and have limited capacity (max 12 per group). Book at least 3-5 days in advance, especially during high season (November-March).",
    toursTitle: "All Sunrise Tour Options",
    toursSuffix: "sunrise tours with early access",
    reviewsTitle: "Sunrise Tour Reviews",
    faqTitle: "Sunrise Tour FAQs",
    faqSubtitle: "Common questions about Chichen Itza sunrise tours",
    exploreTitle: "Explore More Tours",
    exploreLinks: [
      { label: "Day Tours", href: "/tours/day-tours" },
      { label: "Private Tours", href: "/tours/private-tours" },
      { label: "Cenote Tours", href: "/tours/cenote-tours" },
      { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
      { label: "Photography Tips", href: "/guide/photography-tips" },
      { label: "All Tours", href: "/tours" },
    ],
    noMatch: "No tours match your filters.",
    clearFilters: "Clear All Filters",
  };

  const meta = getPageMeta({
    title: c.metaTitle, description: c.metaDesc, canonical: "/tours/sunrise-tours", locale,
    jsonLd: [createFAQSchema(sunriseToursFAQs), createBreadcrumbSchema([{ name: isEs ? "Inicio" : "Home", url: "/" }, { name: "Tours", url: "/tours" }, { name: c.breadcrumb }])],
  });

  const sunriseTours = useMemo(() => tours.filter((t) => t.category.includes("sunrise-tours")), []);
  const [filters, setFilters] = useState<FilterState>({ priceRange: "all", duration: [], tourType: [], category: [] });
  const filteredTours = useMemo(() => filterTours(sunriseTours, filters), [sunriseTours, filters]);

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative bg-gradient-to-br from-accent/15 via-background to-primary/10 py-12 lg:py-16">
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
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                  <item.icon className="h-4 w-4 text-accent" />{item.text}
                </span>
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
              ? <>Imagina estar frente a la pirámide de El Castillo mientras los primeros rayos de sol la pintan en tonos dorados y ámbar — sin casi otra alma a la vista. Esa es la magia de nuestro tour al amanecer, consistentemente calificado como nuestra experiencia #1. Consulta nuestra <Link to="/guide/photography-tips" className="text-primary hover:underline">guía de fotografía</Link> para los mejores ajustes de cámara.</>
              : <>Imagine standing before El Castillo pyramid as the first rays of sunlight paint it in shades of gold and amber — with barely another soul in sight. That's the magic of our Chichen Itza sunrise tour, consistently rated our #1 experience. See our <Link to="/guide/photography-tips" className="text-primary hover:underline">photography tips guide</Link> for the best camera settings.</>
            }
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs
              ? <>Mientras los <Link to="/tours/day-tours" className="text-primary hover:underline">tours de un día</Link> estándar llegan a las 9-10 AM junto con cientos de visitantes, nuestros tours al amanecer otorgan acceso temprano antes de que el sitio abra al público general. Consulta nuestra <Link to="/guide/best-time-to-visit" className="text-primary hover:underline">guía estacional</Link> para los mejores meses.</>
              : <>While standard <Link to="/tours/day-tours" className="text-primary hover:underline">day tours</Link> arrive at 9-10 AM alongside hundreds of other visitors, our sunrise tours grant early access before the site officially opens. Check our <Link to="/guide/best-time-to-visit" className="text-primary hover:underline">seasonal guide</Link> for the best months.</>
            }
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {isEs
              ? <>Sí, la recogida a las 3:30 AM requiere una alarma temprana — pero todos los viajeros que lo han hecho dicen lo mismo: <strong className="text-foreground">"Absolutamente vale la pena."</strong> Revisa nuestra <Link to="/guide/what-to-bring" className="text-primary hover:underline">lista de qué llevar</Link>.</>
              : <>Yes, the 3:30 AM pickup requires an early alarm — but every traveler who's done it says the same thing: <strong className="text-foreground">"It was absolutely worth it."</strong> Review our <Link to="/guide/what-to-bring" className="text-primary hover:underline">what to bring checklist</Link>.</>
            }
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">{c.whyTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {c.whyItems.map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"><item.icon className="h-6 w-6 text-accent" /></div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container"><div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">{c.timelineTitle}</h2>
          <div className="space-y-0">
            {c.timeline.map((step, i) => (<TimelineItem key={i} time={step.time} title={step.title} description={step.description} isLast={i === c.timeline.length - 1} />))}
          </div>
        </div></div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 text-center">{c.tipsTitle}</h2>
          <TipBox type="tip" title={c.tip1Title} content={c.tip1Content} />
          <TipBox type="info" title={c.tip2Title} content={c.tip2Content} />
          <TipBox type="warning" title={c.tip3Title} content={c.tip3Content} />
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">{c.toursTitle}</h2>
          <p className="text-center text-muted-foreground mb-8">{sunriseTours.length} {c.toursSuffix}</p>
          <TourFilters onFilterChange={setFilters} tourCount={filteredTours.length} className="mb-6" />
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground mb-4">{c.noMatch}</p>
              <Button variant="outline" onClick={() => setFilters({ priceRange: "all", duration: [], tourType: [], category: [] })}>{c.clearFilters}</Button>
            </div>
          )}
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <section className="py-12 lg:py-16 bg-muted/30"><div className="container"><ReviewGrid reviews={getReviewsByTourCategory("sunrise")} limit={3} title={c.reviewsTitle} showAllLink /></div></section>
      <FAQSection faqs={sunriseToursFAQs} title={c.faqTitle} subtitle={c.faqSubtitle} />
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

export default SunriseToursPage;
