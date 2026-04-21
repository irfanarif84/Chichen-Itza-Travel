import { Mountain, ChevronRight, Star, ArrowUpRight, Compass, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import { generateComboTouristTripSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourGallery from "@/components/features/tours/TourGallery";
import TrustBadges from "@/components/features/booking/TrustBadges";
import ComparisonTable from "@/components/guide/ComparisonTable";
import TipBox from "@/components/guide/TipBox";
import FAQSection from "@/components/common/FAQ";
import CTASection from "@/components/features/home/CTASection";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";
import { tours } from "@/lib/tourData";
import { comboHeroImages, comboGalleryImages, comboGalleryAltTexts } from "@/lib/tourImages";
import { useMemo } from "react";

const cobaRuinsFAQs = [
  {
    question: "Can I still climb the Coba pyramid?",
    answer: "Yes. Nohoch Mul pyramid at Coba is currently one of the very few Mayan pyramids where climbing is still permitted. At 42 meters tall, it offers breathtaking views over the jungle canopy."
  },
  {
    question: "How far is Coba from Chichen Itza?",
    answer: "Coba is approximately 100 km from Chichen Itza — about 1.5 hours by road. Our combo tour visits both sites in a single day with efficient routing so you maximize time at each."
  },
  {
    question: "How long does the Coba ruins visit take?",
    answer: "Allow 2-3 hours at Coba to explore the main Nohoch Mul pyramid, jungle paths, and smaller temple structures. The site is far quieter than Chichen Itza — ideal for photography."
  },
  {
    question: "Is hotel pickup included from Cancun and Tulum?",
    answer: "Yes. We offer hotel pickup from Cancun Hotel Zone, Playa del Carmen, Tulum beach road, and Riviera Maya resorts for this combo tour."
  },
  {
    question: "What is the best time of day to visit Coba?",
    answer: "Early morning is best — cooler temperatures and fewer visitors. Our combo tour is scheduled so you visit Chichen Itza first at peak time, then arrive at Coba in the afternoon when it is quietest."
  },
];

const CobaRuinsComboPage = () => {
  const { locale, isEs } = useLocale();

  const meta = getPageMeta({
    title: isEs
      ? "Chichén Itzá + Ruinas de Cobá – Dos Sitios Mayas en Un Día"
      : "Chichen Itza + Coba Ruins Tour – Two Mayan Sites in One Day",
    description: isEs
      ? "Visita Chichén Itzá y sube la pirámide Nohoch Mul en Cobá — la más alta de Yucatán. Dos sitios mayas increíbles en un día. Desde $109."
      : "Visit Chichen Itza and climb the Nohoch Mul pyramid at Coba — the tallest in the Yucatan. Two incredible Mayan sites in one day. From $109.",
    canonical: "/combo-tours/coba-ruins",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Tours Combo" : "Combo Tours" },
        { name: isEs ? "Ruinas de Cobá" : "Coba Ruins" },
      ]),
      generateComboTouristTripSchema({
        name: isEs ? "Tour Combo Chichén Itzá + Ruinas de Cobá" : "Chichen Itza + Coba Ruins Combo Tour",
        description: isEs
          ? "Visita dos sitios mayas en un día: Chichén Itzá y la pirámide Nohoch Mul de Cobá."
          : "Visit two Mayan sites in one day: Chichen Itza and the Nohoch Mul pyramid at Coba.",
        slug: "coba-ruins",
        image: "https://chichenitzatours.com/images/chichen-itza-hero.jpg",
        priceFrom: 109,
        rating: "4.8",
        reviewCount: "1800",
        itinerary: isEs
          ? ["Recogida en hotel", "Tour de Chichén Itzá", "Almuerzo", "Ruinas de Cobá y Nohoch Mul", "Regreso"]
          : ["Hotel pickup", "Chichen Itza tour", "Lunch", "Coba ruins & Nohoch Mul", "Return"],
      }),
      createFAQSchema(cobaRuinsFAQs),
    ],
  });

  const comboTours = useMemo(
    () => tours.filter((t) => t.category.includes("combo") || t.category.includes("ek-balam")),
    []
  );

  const heroImage = comboHeroImages["coba-ruins"];
  const galleryImages = comboGalleryImages["coba-ruins"] || [];
  const galleryAlts = comboGalleryAltTexts["coba-ruins"] || [];

  const badges = isEs
    ? [
        { icon: Mountain, text: "Sube una pirámide" },
        { icon: ArrowUpRight, text: "42 m de altura" },
        { icon: TreePine, text: "Entorno selvático" },
        { icon: Compass, text: "Dos sitios" },
      ]
    : [
        { icon: Mountain, text: "Climb a pyramid" },
        { icon: ArrowUpRight, text: "138 ft tall" },
        { icon: TreePine, text: "Jungle setting" },
        { icon: Compass, text: "Two sites" },
      ];

  const comparisonRows = isEs
    ? [
        { label: "Famoso Por", values: ["Pirámide El Castillo", "Nohoch Mul (escalable)"] },
        { label: "¿Se Puede Subir?", values: ["No (cerrada desde 2006)", "¡Sí! 120 escalones hasta la cima"] },
        { label: "Entorno", values: ["Terrenos abiertos y cuidados", "Ruinas cubiertas de selva"] },
        { label: "Nivel de Multitud", values: ["Alto (2.5M visitantes/año)", "Bajo-Moderado"] },
        { label: "Estado UNESCO", values: ["Patrimonio de la Humanidad", "Aún no listado"] },
        { label: "Transporte Entre", values: ["~2 horas de distancia", "~2 horas de distancia"] },
      ]
    : [
        { label: "Famous For", values: ["El Castillo pyramid", "Nohoch Mul (climbable)"] },
        { label: "Can You Climb?", values: ["No (closed since 2006)", "Yes! 120 steps to the top"] },
        { label: "Setting", values: ["Open, manicured grounds", "Jungle-covered ruins"] },
        { label: "Crowd Level", values: ["High (2.5M visitors/yr)", "Low-Moderate"] },
        { label: "UNESCO Status", values: ["World Heritage Site", "Not yet listed"] },
        { label: "Transport Between", values: ["~2 hours apart", "~2 hours apart"] },
      ];

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-end">
        <img
          src={heroImage}
          alt={isEs ? "Pirámide Nohoch Mul en Cobá rodeada de selva" : "Nohoch Mul pyramid at Coba surrounded by jungle canopy"}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          width={1200}
          height={672}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
        <div className="container relative z-10 pb-10 pt-20">
          <Breadcrumbs items={[{ label: isEs ? "Tours Combo" : "Combo Tours" }, { label: isEs ? "Ruinas de Cobá" : "Coba Ruins" }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-primary-foreground/80">
                {isEs ? "4.8/5 de viajeros aventureros" : "4.8/5 from adventure travelers"}
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4 text-primary-foreground">
              {isEs ? "Tour Combo Chichén Itzá + Ruinas de Cobá" : "Chichen Itza + Coba Ruins Combo Tour"}
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl">
              {isEs
                ? "Experimenta dos espectaculares sitios mayas en un día. Explora el icónico El Castillo de Chichén Itzá, luego sube la pirámide Nohoch Mul de 42 metros en Cobá — la pirámide escalable más alta de la Península de Yucatán."
                : "Experience two spectacular Mayan sites in one day. Explore Chichen Itza's iconic El Castillo, then climb the 138-foot Nohoch Mul pyramid at Coba — the tallest climbable pyramid in the Yucatan Peninsula."}
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
              <a href="#tours">{isEs ? "Ver Tours Combo" : "View Combo Tours"} <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container">
          <TourGallery images={galleryImages} altTexts={galleryAlts} tourTitle={isEs ? "Tour Combo Chichén Itzá + Ruinas de Cobá" : "Chichen Itza + Coba Ruins Combo Tour"} />
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-2xl mb-4">
            {isEs ? "¿Por Qué Agregar Cobá a Tu Viaje a Chichén Itzá?" : "Why Add Coba to Your Chichen Itza Trip?"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs
              ? "Aunque Chichén Itzá es la más famosa, Cobá ofrece algo único que no puedes experimentar en ningún otro lugar — la oportunidad de realmente subir una enorme pirámide maya. La pirámide Nohoch Mul en Cobá mide 42 metros de altura y ofrece vistas panorámicas de 360 grados sobre la selva."
              : "While Chichen Itza is the most famous, Coba offers something unique that you can't experience anywhere else — the chance to actually climb a massive Mayan pyramid. The Nohoch Mul pyramid at Coba stands 138 feet (42 meters) tall and offers breathtaking 360-degree views over the jungle canopy."}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs
              ? "Cobá se encuentra en las profundidades de la selva, conectada por antiguos caminos elevados de piedra llamados sacbés. A diferencia de los terrenos cuidados de Chichén Itzá, Cobá se siente salvaje e indomable — muchas estructuras permanecen parcialmente cubiertas por vegetación selvática, creando una atmósfera tipo Indiana Jones que los fotógrafos adoran."
              : "Coba is set deep in the jungle, connected by ancient raised stone roads called sacbés. Unlike the manicured grounds of Chichen Itza, Coba feels wild and untamed — many structures remain partially covered by jungle vegetation, creating an Indiana Jones-like atmosphere that photographers love."}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {isEs
              ? <>Los dos sitios se complementan perfectamente: Chichén Itzá por su escala masiva e importancia histórica, Cobá por su experiencia aventurera de escalada e inmersión en la selva. Consulta también nuestro <LocaleLink to="/combo-tours/cenote-ik-kil" className="text-primary hover:underline">combo Cenote Ik Kil</LocaleLink> y los <LocaleLink to="/combo-tours/multi-day-yucatan" className="text-primary hover:underline">tours de varios días</LocaleLink>.</>
              : <>The two sites complement each other perfectly: Chichen Itza for its massive scale and historical importance, Coba for its adventurous climbing experience and jungle immersion. See also our <LocaleLink to="/combo-tours/cenote-ik-kil" className="text-primary hover:underline">Cenote Ik Kil combo</LocaleLink> and <LocaleLink to="/combo-tours/multi-day-yucatan" className="text-primary hover:underline">multi-day tours</LocaleLink>.</>}
          </p>
          <TipBox
            type="warning"
            title={isEs ? "Requisitos Físicos" : "Physical Requirements"}
            content={isEs
              ? "La subida a la pirámide Nohoch Mul implica 120 escalones de piedra empinados. Se recomienda un nivel moderado de condición física. Usa zapatos cerrados con agarre. Se proporciona un pasamanos de cuerda. No recomendado para personas con vértigo o problemas severos de rodilla."
              : "The Nohoch Mul pyramid climb involves 120 steep stone steps. A moderate fitness level is recommended. Wear closed-toe shoes with grip. A rope handrail is provided. Not recommended for those with vertigo or severe knee issues."}
          />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">
            {isEs ? "Chichén Itzá vs. Cobá" : "Chichen Itza vs. Coba"}
          </h2>
          <ComparisonTable
            headers={["Chichén Itzá", "Cobá"]}
            rows={comparisonRows}
          />
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">
            {isEs ? "Tours Combo Multi-Sitio" : "Multi-Site Combo Tours"}
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {comboTours.length} {isEs ? "tours combo disponibles" : "combo tours available"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comboTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
          </div>
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <FAQSection faqs={cobaRuinsFAQs} />
      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">{isEs ? "Más Combos y Tours" : "More Combos & Tours"}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: isEs ? "Combo Cenote Ik Kil" : "Cenote Ik Kil Combo", href: "/combo-tours/cenote-ik-kil" },
              { label: isEs ? "Yucatán Varios Días" : "Multi-Day Yucatan", href: "/combo-tours/multi-day-yucatan" },
              { label: isEs ? "Tours de un Día" : "Day Tours", href: "/tours/day-tours" },
              { label: isEs ? "Desde Tulum" : "From Tulum", href: "/tours-from/tulum" },
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

export default CobaRuinsComboPage;
