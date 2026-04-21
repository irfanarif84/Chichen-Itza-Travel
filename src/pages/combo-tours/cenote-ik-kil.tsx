import { Droplets, ChevronRight, Star, Camera, Waves, Leaf, MapPin } from "lucide-react";
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
import ReviewGrid from "@/components/features/reviews/ReviewGrid";
import { getReviewsByTourCategory } from "@/lib/reviewsData";

const cenoteIkKilFAQs = [
  {
    question: "How long is the Chichen Itza + Cenote Ik Kil combo tour?",
    answer: "The full tour takes approximately 10-12 hours including round-trip transportation, a guided visit to Chichen Itza, swimming at Cenote Ik Kil, and a regional lunch stop."
  },
  {
    question: "Can I swim at Cenote Ik Kil?",
    answer: "Yes. Cenote Ik Kil is one of the most famous swimming cenotes in Yucatan — crystal clear water about 26 meters deep with hanging vines and catfish. Life jackets are available on site."
  },
  {
    question: "Is lunch included in this combo tour?",
    answer: "Yes, a regional Yucatecan lunch is included at a local restaurant near Chichen Itza, featuring traditional dishes like cochinita pibil, sopa de lima, and fresh tortillas."
  },
  {
    question: "What should I bring to Cenote Ik Kil?",
    answer: "Bring swimwear, a towel, biodegradable sunscreen (required at all cenotes), water shoes, and a change of clothes. Lockers are available on site for a small fee."
  },
  {
    question: "Is hotel pickup included from Cancun and Playa del Carmen?",
    answer: "Yes. We offer hotel pickup from Cancun Hotel Zone, downtown Cancun, Playa del Carmen 5th Avenue, Tulum beach road, and Riviera Maya resorts. Exact pickup time is confirmed 24 hours before your tour."
  },
];

const CenoteIkKilComboPage = () => {
  const { locale, isEs } = useLocale();

  const meta = getPageMeta({
    title: isEs
      ? "Chichén Itzá + Cenote Ik Kil – Nada y Explora"
      : "Chichen Itza + Cenote Ik Kil Tour – Swim & Explore",
    description: isEs
      ? "Mejor combo: ruinas de Chichén Itzá + nado en el famoso Cenote Ik Kil. Tour guiado, almuerzo y transporte incluido. Cancelación gratuita. Desde $99."
      : "Best combo: Chichen Itza ruins + swimming at famous Cenote Ik Kil. Guided tour, lunch, transport included. Free cancellation. From $99.",
    canonical: "/combo-tours/cenote-ik-kil",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Tours Combo" : "Combo Tours" },
        { name: "Cenote Ik Kil" },
      ]),
      generateComboTouristTripSchema({
        name: isEs ? "Tour Combo Chichén Itzá + Cenote Ik Kil" : "Chichen Itza + Cenote Ik Kil Combo Tour",
        description: isEs
          ? "Combo guiado: ruinas de Chichén Itzá más nado en el Cenote Ik Kil con almuerzo y transporte."
          : "Guided combo: Chichen Itza ruins plus swimming at Cenote Ik Kil with lunch and transport included.",
        slug: "cenote-ik-kil",
        image: "https://chichenitzatravel.com/images/chichen-itza-hero.jpg",
        priceFrom: 99,
        rating: "4.8",
        reviewCount: "2500",
        itinerary: isEs
          ? ["Recogida en hotel", "Tour guiado de Chichén Itzá", "Almuerzo yucateco", "Nado en Cenote Ik Kil", "Regreso al hotel"]
          : ["Hotel pickup", "Guided Chichen Itza tour", "Yucatecan lunch", "Cenote Ik Kil swimming", "Hotel return"],
      }),
      createFAQSchema(cenoteIkKilFAQs),
    ],
  });

  const reviews = getReviewsByTourCategory("day-tour").slice(0, 3);

  const comboTours = useMemo(
    () => tours.filter((t) => t.category.includes("cenote-tours") || t.category.includes("combo")),
    []
  );

  const heroImage = comboHeroImages["cenote-ik-kil"];
  const galleryImages = comboGalleryImages["cenote-ik-kil"] || [];
  const galleryAlts = comboGalleryAltTexts["cenote-ik-kil"] || [];

  const badges = isEs
    ? [
        { icon: Droplets, text: "Nado en cenote" },
        { icon: Camera, text: "Fotos icónicas" },
        { icon: Leaf, text: "Maravilla natural" },
        { icon: MapPin, text: "A solo 5 km" },
      ]
    : [
        { icon: Droplets, text: "Cenote swimming" },
        { icon: Camera, text: "Iconic photos" },
        { icon: Leaf, text: "Natural wonder" },
        { icon: MapPin, text: "Just 3 miles apart" },
      ];

  const aboutItems = isEs
    ? [
        { icon: Waves, title: "26 m de Profundidad", desc: "Un espectacular cenote a cielo abierto con paredes de piedra caliza de 26 metros y agua turquesa cristalina." },
        { icon: Leaf, title: "Belleza Natural", desc: "Enredaderas colgantes, pequeñas cascadas y vegetación tropical crean una gruta mágica para nadar." },
        { icon: Droplets, title: "26°C Todo el Año", desc: "Temperatura constante y cómoda sin importar la temporada. Perfecto para nadar en cualquier época." },
        { icon: Camera, title: "Famoso en Instagram", desc: "Uno de los lugares naturales más fotografiados de México. Impresionante desde cualquier ángulo." },
      ]
    : [
        { icon: Waves, title: "85 ft Deep", desc: "A dramatic open-air cenote with 85-foot limestone walls and crystal-clear turquoise water." },
        { icon: Leaf, title: "Natural Beauty", desc: "Hanging vines, small waterfalls, and tropical vegetation create a magical swimming grotto." },
        { icon: Droplets, title: "79°F Year-Round", desc: "Constant comfortable temperature regardless of season. Perfect for swimming any time of year." },
        { icon: Camera, title: "Instagram Famous", desc: "One of the most photographed natural swimming spots in Mexico. Stunning from every angle." },
      ];

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-end">
        <img
          src={heroImage}
          alt={isEs ? "Vista aérea del Cenote Ik Kil con enredaderas colgantes y agua turquesa" : "Cenote Ik Kil overhead view with hanging vines and turquoise water"}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          width={1200}
          height={672}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
        <div className="container relative z-10 pb-10 pt-20">
          <Breadcrumbs items={[{ label: isEs ? "Tours Combo" : "Combo Tours" }, { label: "Cenote Ik Kil" }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-primary-foreground/80">
                {isEs ? "4.8/5 de 2,500+ viajeros combo" : "4.8/5 from 2,500+ combo travelers"}
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4 text-primary-foreground">
              {isEs ? "Tour Combo Chichén Itzá + Cenote Ik Kil" : "Chichen Itza + Cenote Ik Kil Combo Tour"}
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl">
              {isEs
                ? "Explora las antiguas ruinas mayas y luego refréscate con un baño en el cenote más famoso de México — un impresionante sumidero natural con enredaderas colgantes y agua cristalina."
                : "Explore the ancient Mayan ruins then cool off with a refreshing swim in Mexico's most famous cenote — a stunning natural sinkhole with hanging vines and crystal-clear water."}
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
          <TourGallery images={galleryImages} altTexts={galleryAlts} tourTitle={isEs ? "Tour Combo Chichén Itzá + Cenote Ik Kil" : "Chichen Itza + Cenote Ik Kil Combo Tour"} />
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-2xl mb-4">
            {isEs ? "Por Qué Este Combo Es Nuestro #1 en Ventas" : "Why This Combo Is Our #1 Seller"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs
              ? "El Cenote Ik Kil está ubicado a solo 5 km de Chichén Itzá, lo que lo convierte en el complemento natural perfecto para tu aventura arqueológica. Este impresionante cenote a cielo abierto presenta dramáticas paredes de piedra caliza de 26 metros cubiertas con enredaderas colgantes y pequeñas cascadas, creando uno de los lugares para nadar más fotografiados de México."
              : "Cenote Ik Kil is located just 3 miles from Chichen Itza, making it the perfect natural complement to your archaeological adventure. This stunning open-air cenote features dramatic 85-foot limestone walls draped with hanging vines and small waterfalls, creating one of the most photographed swimming spots in Mexico."}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs
              ? "Después de pasar 2-3 horas explorando las antiguas ruinas bajo el calor yucateco, no hay nada más refrescante que descender por la escalera de piedra tallada hacia las aguas frescas y cristalinas del Cenote Ik Kil. El cenote mantiene una temperatura constante de 26°C durante todo el año, perfecto para nadar en cualquier temporada."
              : "After spending 2-3 hours exploring the ancient ruins in the Yucatan heat, there's nothing more refreshing than descending the carved stone staircase into the cool, crystal-clear waters of Cenote Ik Kil. The cenote maintains a constant temperature of 79°F (26°C) year-round, making it perfect for swimming any time of year."}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {isEs
              ? <>Nuestros tours combo incluyen todo: tour guiado de Chichén Itzá, entrada al cenote y tiempo de nado, almuerzo yucateco tradicional y transporte redondo. Compara con nuestros <LocaleLink to="/tours/cenote-tours" className="text-primary hover:underline">otros tours de cenotes</LocaleLink> o el <LocaleLink to="/combo-tours/coba-ruins" className="text-primary hover:underline">combo de ruinas de Cobá</LocaleLink>.</>
              : <>Our combo tours include everything: guided tour of Chichen Itza, cenote entrance and swimming time, traditional Yucatecan lunch, and round-trip transportation. Compare with our <LocaleLink to="/tours/cenote-tours" className="text-primary hover:underline">other cenote tours</LocaleLink> or <LocaleLink to="/combo-tours/coba-ruins" className="text-primary hover:underline">Coba ruins combo</LocaleLink>.</>}
          </p>
          <TipBox
            type="info"
            title={isEs ? "Consejos para Nadar en el Cenote" : "Cenote Swimming Tips"}
            content={isEs
              ? "Lleva bloqueador solar biodegradable (el bloqueador regular está prohibido), una cámara acuática y zapatos de agua para las escaleras de piedra. Los chalecos salvavidas se proporcionan gratis. El cenote cuenta con vestidores, lockers ($2) y una pequeña cafetería."
              : "Bring biodegradable sunscreen (regular sunscreen is prohibited), a waterproof camera, and water shoes for the stone steps. Life vests are provided free of charge. The cenote has changing rooms, lockers ($2), and a small café."}
          />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            {isEs ? "Sobre el Cenote Ik Kil" : "About Cenote Ik Kil"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {aboutItems.map((item, i) => (
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
            {isEs ? "Tours Combo con Cenote" : "Cenote Combo Tours"}
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {comboTours.length} {isEs ? "tours combo con nado en cenote" : "combo tours with cenote swimming"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comboTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
          </div>
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <ReviewGrid reviews={reviews} />
        </div>
      </section>

      <FAQSection faqs={cenoteIkKilFAQs} />
      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">{isEs ? "Más Tours Combo" : "More Combo Tours"}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: isEs ? "Combo Ruinas de Cobá" : "Coba Ruins Combo", href: "/combo-tours/coba-ruins" },
              { label: isEs ? "Yucatán Varios Días" : "Multi-Day Yucatan", href: "/combo-tours/multi-day-yucatan" },
              { label: isEs ? "Tours de Cenotes" : "Cenote Tours", href: "/tours/cenote-tours" },
              { label: isEs ? "Tours de un Día" : "Day Tours", href: "/tours/day-tours" },
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

export default CenoteIkKilComboPage;
