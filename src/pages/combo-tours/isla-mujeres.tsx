import { Ship, ChevronRight, Star, Waves, Sun, Fish } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import { generateComboTouristTripSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourGallery from "@/components/features/tours/TourGallery";
import TrustBadges from "@/components/features/booking/TrustBadges";
import TipBox from "@/components/guide/TipBox";
import FAQSection from "@/components/common/FAQ";
import CTASection from "@/components/features/home/CTASection";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";
import { tours } from "@/lib/tourData";
import { comboHeroImages, comboGalleryImages, comboGalleryAltTexts } from "@/lib/tourImages";
import { useMemo } from "react";

const islaMujeresFAQs = [
  {
    question: "How do we get to Isla Mujeres from Cancun?",
    answer: "The ferry from Puerto Juarez in Cancun takes about 20 minutes. Our tour includes round-trip ferry tickets and hotel transfers from your Cancun or Riviera Maya hotel to the ferry terminal."
  },
  {
    question: "Is a golf cart rental included?",
    answer: "Yes. Golf cart rental is included so you can freely explore the whole island at your own pace — from Playa Norte beach to the southern cliffs and the Ixchel temple ruins."
  },
  {
    question: "Is snorkeling included in the Isla Mujeres combo?",
    answer: "Yes. MUSA underwater museum snorkeling is part of the tour. The Caribbean waters around Isla Mujeres are exceptionally clear with vibrant marine life and over 500 submerged sculptures."
  },
  {
    question: "How long is the Isla Mujeres day trip?",
    answer: "The full day trip is approximately 8-10 hours including ferry travel, island exploration by golf cart, snorkeling, and free beach time at Playa Norte."
  },
  {
    question: "What is the best beach on Isla Mujeres?",
    answer: "Playa Norte is consistently rated one of the best beaches in the entire Caribbean — shallow turquoise water, soft white sand, and calm waves perfect for swimming and relaxing."
  },
];

const IslaMujeresComboPage = () => {
  const { locale, isEs } = useLocale();

  const meta = getPageMeta({
    title: isEs
      ? "Chichén Itzá + Isla Mujeres – Ruinas y Playa"
      : "Chichen Itza + Isla Mujeres Multi-Day Tour – Ruins & Beach",
    description: isEs
      ? "Combina las ruinas de Chichén Itzá con la paradisíaca Isla Mujeres. Aventura por Yucatán con snorkel, ruinas y playas del Caribe."
      : "Combine Chichen Itza ruins with Isla Mujeres paradise island. Multi-day Yucatan adventure with snorkeling, ruins, and Caribbean beaches.",
    canonical: "/combo-tours/isla-mujeres",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Tours Combo" : "Combo Tours" },
        { name: "Isla Mujeres" },
      ]),
      generateComboTouristTripSchema({
        name: isEs ? "Tour Combo Chichén Itzá + Isla Mujeres" : "Chichen Itza + Isla Mujeres Combo Tour",
        description: isEs
          ? "Combina las ruinas mayas de Chichén Itzá con la paradisíaca Isla Mujeres y snorkel en el Caribe."
          : "Combine the Mayan ruins of Chichen Itza with paradise island Isla Mujeres and Caribbean snorkeling.",
        slug: "isla-mujeres",
        image: "https://chichenitzatravel.com/images/chichen-itza-hero.jpg",
        priceFrom: 149,
        rating: "4.8",
        reviewCount: "1200",
        itinerary: isEs
          ? ["Día 1: Tour de Chichén Itzá", "Día 2: Ferry a Isla Mujeres", "Snorkel y playa", "Regreso"]
          : ["Day 1: Chichen Itza tour", "Day 2: Ferry to Isla Mujeres", "Snorkeling & beach", "Return"],
      }),
      createFAQSchema(islaMujeresFAQs),
    ],
  });

  const relatedTours = useMemo(
    () => tours.filter((t) => t.category.includes("combo") || t.departureCity.includes("cancun")).slice(0, 6),
    []
  );

  const heroImage = comboHeroImages["isla-mujeres"];
  const galleryImages = comboGalleryImages["isla-mujeres"] || [];
  const galleryAlts = comboGalleryAltTexts["isla-mujeres"] || [];

  const badges = isEs
    ? [
        { icon: Ship, text: "Ferry a la isla" },
        { icon: Waves, text: "Snorkel" },
        { icon: Sun, text: "Paraíso playero" },
        { icon: Fish, text: "Vida marina" },
      ]
    : [
        { icon: Ship, text: "Ferry to island" },
        { icon: Waves, text: "Snorkeling" },
        { icon: Sun, text: "Beach paradise" },
        { icon: Fish, text: "Marine life" },
      ];

  const highlights = isEs
    ? [
        { icon: Waves, title: "Playa Norte", desc: "Una de las playas mejor calificadas del Caribe con agua turquesa tranquila y arena blanca como polvo." },
        { icon: Fish, title: "Snorkel MUSA", desc: "Museo submarino con más de 500 esculturas sumergidas en aguas cristalinas del Caribe." },
        { icon: Sun, title: "Punta Sur", desc: "Vistas dramáticas desde los acantilados en la punta sur de la isla con ruinas del templo de Ixchel." },
        { icon: Ship, title: "Fácil Acceso", desc: "Solo 20 minutos en ferry desde Cancún. Los barcos salen cada 30 minutos todo el día." },
      ]
    : [
        { icon: Waves, title: "Playa Norte", desc: "One of the Caribbean's top-rated beaches with calm turquoise water and powder-white sand." },
        { icon: Fish, title: "MUSA Snorkeling", desc: "Underwater museum with 500+ sculptures submerged in crystal-clear Caribbean waters." },
        { icon: Sun, title: "Punta Sur", desc: "Dramatic cliff views at the island's southern tip with Ixchel temple ruins." },
        { icon: Ship, title: "Easy Access", desc: "Just 20 minutes by ferry from Cancun. Boats depart every 30 minutes all day." },
      ];

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-end">
        <img
          src={heroImage}
          alt={isEs ? "Playa Norte de Isla Mujeres con agua turquesa del Caribe y arena blanca" : "Isla Mujeres Playa Norte with turquoise Caribbean water and white sand"}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          width={1200}
          height={672}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
        <div className="container relative z-10 pb-10 pt-20">
          <Breadcrumbs items={[{ label: isEs ? "Tours Combo" : "Combo Tours" }, { label: "Isla Mujeres" }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-primary-foreground/80">
                {isEs ? "4.7/5 de viajeros multi-experiencia" : "4.7/5 from multi-experience travelers"}
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4 text-primary-foreground">
              {isEs
                ? "Chichén Itzá + Isla Mujeres – Ruinas Antiguas y Paraíso Caribeño"
                : "Chichen Itza + Isla Mujeres – Ancient Ruins Meets Caribbean Paradise"}
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl">
              {isEs
                ? "La experiencia definitiva de Yucatán: explora las antiguas ruinas mayas de Chichén Itzá un día, luego navega a la impresionante Isla Mujeres para aguas cristalinas del Caribe, snorkel y playas de arena blanca."
                : "The ultimate Yucatan experience: explore the ancient Mayan ruins of Chichen Itza one day, then sail to the stunning Isla Mujeres for crystal-clear Caribbean waters, snorkeling, and white-sand beaches."}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {badges.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full border border-primary-foreground/20">
                  <item.icon className="h-4 w-4" />
                  {item.text}
                </span>
              ))}
            </div>
            <Button variant="cta" size="lg" asChild>
              <a href="#tours">{isEs ? "Ver Tours Relacionados" : "View Related Tours"} <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container">
          <TourGallery images={galleryImages} altTexts={galleryAlts} tourTitle={isEs ? "Tour Combo Chichén Itzá + Isla Mujeres" : "Chichen Itza + Isla Mujeres Combo Tour"} />
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-2xl mb-4">
            {isEs ? "Ruinas y Playa – La Combinación Perfecta" : "Ruins & Beach – The Perfect Combination"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs
              ? "¿Por qué elegir entre historia y relajación? Este paquete de varios días te permite experimentar lo mejor de la Península de Yucatán: las impresionantes ruinas antiguas de Chichén Itzá y las aguas turquesas del Caribe de Isla Mujeres."
              : "Why choose between history and relaxation? This multi-day package lets you experience the best of the Yucatan Peninsula: the awe-inspiring ancient ruins of Chichen Itza and the turquoise Caribbean waters of Isla Mujeres."}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs
              ? <><strong>Día 1: Chichén Itzá</strong> – Sal de Cancún para un tour guiado de día completo a Chichén Itzá con nado en cenote y almuerzo. Regreso a Cancún por la noche.</>
              : <><strong>Day 1: Chichen Itza</strong> – Depart from Cancun for a full-day guided tour of Chichen Itza with cenote swim and lunch. Return to Cancun in the evening.</>}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs
              ? <><strong>Día 2: Isla Mujeres</strong> – Ferry a Isla Mujeres (20 minutos desde Cancún). Snorkel en el museo submarino MUSA, explora la isla en carrito de golf y relájate en Playa Norte — constantemente clasificada como una de las mejores playas del Caribe.</>
              : <><strong>Day 2: Isla Mujeres</strong> – Ferry to Isla Mujeres (20 minutes from Cancun). Snorkel in the underwater museum MUSA, explore the island by golf cart, and relax on Playa Norte — consistently ranked one of the best beaches in the Caribbean.</>}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {isEs
              ? <>Ambos días se pueden reservar por separado — explora nuestros <LocaleLink to="/tours/day-tours" className="text-primary hover:underline">tours de día a Chichén Itzá</LocaleLink> y combínalos con cualquier excursión a Isla Mujeres. O consulta nuestros <LocaleLink to="/combo-tours/multi-day-yucatan" className="text-primary hover:underline">paquetes de varios días por Yucatán</LocaleLink> para itinerarios más extensos.</>
              : <>Both days can be booked separately — explore our <LocaleLink to="/tours/day-tours" className="text-primary hover:underline">Chichen Itza day tours</LocaleLink> and pair with any Isla Mujeres excursion. Or see our <LocaleLink to="/combo-tours/multi-day-yucatan" className="text-primary hover:underline">multi-day Yucatan packages</LocaleLink> for more extensive itineraries.</>}
          </p>
          <TipBox
            type="tip"
            title={isEs ? "Consejo de Reserva" : "Booking Tip"}
            content={isEs
              ? "Reserva Chichén Itzá para el Día 1 e Isla Mujeres para el Día 2. Estarás más cansado después del viaje a Chichén Itzá, así que relajarte en la playa al día siguiente es la recuperación perfecta. El ferry Ultramar de Cancún a Isla Mujeres sale cada 30 minutos."
              : "Book Chichen Itza for Day 1 and Isla Mujeres for Day 2. You'll be more tired after the Chichen Itza day trip, so beach relaxation the next day is the perfect recovery. The Ultramar ferry from Cancun to Isla Mujeres departs every 30 minutes."}
          />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            {isEs ? "Destacados de Isla Mujeres" : "Isla Mujeres Highlights"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {highlights.map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">
            {isEs ? "Tours Relacionados desde Cancún" : "Related Tours from Cancún"}
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {isEs ? "Combina cualquiera de estos con un día en Isla Mujeres" : "Combine any of these with an Isla Mujeres day"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
          </div>
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <FAQSection faqs={islaMujeresFAQs} />
      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">{isEs ? "Más Combos" : "More Combos"}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: isEs ? "Combo Cenote Ik Kil" : "Cenote Ik Kil Combo", href: "/combo-tours/cenote-ik-kil" },
              { label: isEs ? "Combo Ruinas de Cobá" : "Coba Ruins Combo", href: "/combo-tours/coba-ruins" },
              { label: isEs ? "Yucatán Varios Días" : "Multi-Day Yucatan", href: "/combo-tours/multi-day-yucatan" },
              { label: isEs ? "Desde Cancún" : "From Cancún", href: "/tours-from/cancun" },
              { label: isEs ? "Todos los Tours" : "All Tours", href: "/tours" },
            ].map((link) => (
              <LocaleLink key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</LocaleLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IslaMujeresComboPage;
