import { Calendar, ChevronRight, Star, MapPin, Compass, Sunrise, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import { generateComboTouristTripSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourGallery from "@/components/features/tours/TourGallery";
import TrustBadges from "@/components/features/booking/TrustBadges";
import TimelineItem from "@/components/features/tours/TimelineItem";
import TipBox from "@/components/guide/TipBox";
import FAQSection from "@/components/common/FAQ";
import CTASection from "@/components/features/home/CTASection";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";
import { tours } from "@/lib/tourData";
import { comboHeroImages, comboGalleryImages, comboGalleryAltTexts } from "@/lib/tourImages";
import { useMemo } from "react";

const multiDayFAQs = [
  {
    question: "How many days is the multi-day Yucatan tour?",
    answer: "We offer 2, 3, and 4-day packages. The most popular is the 3-day itinerary covering Chichen Itza, Uxmal, Merida colonial city, and a cenote swim — with hotels included each night."
  },
  {
    question: "Are hotels included in the multi-day tour price?",
    answer: "Yes. Comfortable 3-star hotels in Merida or Valladolid are included in the package price. Upgrades to boutique colonial hotels or haciendas are available on request."
  },
  {
    question: "What sites are covered in the multi-day Yucatan package?",
    answer: "The standard 3-day itinerary covers Chichen Itza, Uxmal ruins (the Magician's Pyramid), the colonial city of Merida, inland cenotes, and the hacienda route. Optional additions include Ek Balam and Campeche."
  },
  {
    question: "Can I customize the multi-day Yucatan itinerary?",
    answer: "Yes. All multi-day tours are fully private and customizable. We can adjust which sites to visit, the pace, hotel category, and add experiences like cooking classes or cenote snorkeling."
  },
  {
    question: "Where does the multi-day Yucatan tour depart from?",
    answer: "Multi-day tours typically depart from Cancun or Playa del Carmen on Day 1 and can end in Merida or return to Cancun — depending on your preferred itinerary and flight schedule."
  },
];

const MultiDayYucatanPage = () => {
  const { locale, isEs } = useLocale();

  const meta = getPageMeta({
    title: isEs
      ? "Tour Yucatán Varios Días – Chichén Itzá, Uxmal y Más"
      : "Multi-Day Yucatan Tour – Chichen Itza, Uxmal & More",
    description: isEs
      ? "Explora la Península de Yucatán en 2-4 días. Visita Chichén Itzá, Uxmal, Mérida, cenotes y pueblos coloniales. Paquetes todo incluido."
      : "Explore the Yucatan Peninsula over 2-4 days. Visit Chichen Itza, Uxmal, Mérida, cenotes, and colonial towns. All-inclusive multi-day packages.",
    canonical: "/combo-tours/multi-day-yucatan",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Tours Combo" : "Combo Tours" },
        { name: isEs ? "Yucatán Varios Días" : "Multi-Day Yucatan" },
      ]),
      generateComboTouristTripSchema({
        name: isEs ? "Tour Yucatán Varios Días" : "Multi-Day Yucatan Tour",
        description: isEs
          ? "Paquete de 2-4 días por la Península de Yucatán: Chichén Itzá, Uxmal, Mérida y cenotes con hoteles incluidos."
          : "2-4 day package through the Yucatan Peninsula: Chichen Itza, Uxmal, Mérida and cenotes with hotels included.",
        slug: "multi-day-yucatan",
        image: "https://chichenitzatours.com/images/chichen-itza-hero.jpg",
        priceFrom: 299,
        rating: "4.9",
        reviewCount: "850",
        itinerary: isEs
          ? ["Día 1: Mérida y haciendas", "Día 2: Uxmal y Ruta Puuc", "Día 3: Chichén Itzá y cenotes", "Día 4: Valladolid y regreso"]
          : ["Day 1: Mérida & haciendas", "Day 2: Uxmal & Puuc Route", "Day 3: Chichen Itza & cenotes", "Day 4: Valladolid & return"],
      }),
      createFAQSchema(multiDayFAQs),
    ],
  });

  const topTours = useMemo(() => tours.filter((t) => t.featured).slice(0, 6), []);

  const heroImage = comboHeroImages["multi-day-yucatan"];
  const galleryImages = comboGalleryImages["multi-day-yucatan"] || [];
  const galleryAlts = comboGalleryAltTexts["multi-day-yucatan"] || [];

  const badges = isEs
    ? [
        { icon: Calendar, text: "Paquetes 2-4 días" },
        { icon: MapPin, text: "Múltiples sitios" },
        { icon: Hotel, text: "Hoteles incluidos" },
        { icon: Compass, text: "Exploración profunda" },
      ]
    : [
        { icon: Calendar, text: "2-4 day packages" },
        { icon: MapPin, text: "Multiple sites" },
        { icon: Hotel, text: "Hotels included" },
        { icon: Compass, text: "Deep exploration" },
      ];

  const itinerary = isEs
    ? [
        { time: "Día 1", title: "Chichén Itzá y Valladolid", description: "Explora Chichén Itzá con guía experto, nada en el Cenote Ik Kil, almuerzo en el colorido pueblo colonial de Valladolid. Noche en Valladolid." },
        { time: "Día 2", title: "Ek Balam, Mérida y Cenotes", description: "Sube la pirámide de Ek Balam, nada en cenotes ocultos de hacienda, llega a Mérida para un paseo nocturno por el Paseo Montejo y el zócalo." },
        { time: "Día 3", title: "Uxmal y Regreso", description: "Visita las impresionantes ruinas de Uxmal (a menudo consideradas más bellas que Chichén Itzá), almuerzo en una hacienda colonial, regreso panorámico a Cancún o Riviera Maya." },
      ]
    : [
        { time: "Day 1", title: "Chichen Itza & Valladolid", description: "Explore Chichen Itza with expert guide, swim at Cenote Ik Kil, lunch in the colorful colonial town of Valladolid. Overnight in Valladolid." },
        { time: "Day 2", title: "Ek Balam, Mérida & Cenotes", description: "Climb the Ek Balam pyramid, swim in hidden hacienda cenotes, arrive in Mérida for evening stroll through the Paseo Montejo and zócalo." },
        { time: "Day 3", title: "Uxmal & Return", description: "Visit the stunning Uxmal ruins (often called more beautiful than Chichen Itza), lunch at a colonial hacienda, scenic return to Cancun or Riviera Maya." },
      ];

  const includes = isEs
    ? [
        { icon: Hotel, title: "Alojamiento en Hotel", desc: "Hoteles cómodos de 3-4 estrellas con desayuno incluido. Opciones de mejora a boutique o lujo disponibles." },
        { icon: Compass, title: "Guías Expertos", desc: "Guías certificados en arqueología e historia en cada sitio con profundo conocimiento local." },
        { icon: MapPin, title: "Todo el Transporte", desc: "Minivan cómoda entre todos los sitios. Sin necesidad de alquilar auto o navegar." },
        { icon: Sunrise, title: "Acceso Exclusivo", desc: "Acceso matutino a sitios, cenotes ocultos y experiencias locales no disponibles para turistas de un día." },
      ]
    : [
        { icon: Hotel, title: "Hotel Accommodation", desc: "Comfortable 3-4 star hotels with breakfast included. Upgrade to boutique or luxury options available." },
        { icon: Compass, title: "Expert Guides", desc: "Certified archaeologist and historian guides at each site with deep local knowledge." },
        { icon: MapPin, title: "All Transportation", desc: "Comfortable minivan between all sites. No car rental or navigation needed." },
        { icon: Sunrise, title: "Unique Access", desc: "Early morning access to sites, hidden cenotes, and local experiences not available to day-trippers." },
      ];

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-end">
        <img
          src={heroImage}
          alt={isEs ? "Paisaje panorámico de Yucatán con pirámide de Uxmal y arquitectura colonial" : "Panoramic Yucatan landscape with Uxmal pyramid and colonial architecture"}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          width={1200}
          height={672}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
        <div className="container relative z-10 pb-10 pt-20">
          <Breadcrumbs items={[{ label: isEs ? "Tours Combo" : "Combo Tours" }, { label: isEs ? "Yucatán Varios Días" : "Multi-Day Yucatan" }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-primary-foreground/80">
                {isEs ? "4.9/5 de viajeros multi-día" : "4.9/5 from multi-day travelers"}
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4 text-primary-foreground">
              {isEs
                ? "Tour Yucatán Varios Días – Chichén Itzá, Uxmal, Mérida y Más"
                : "Multi-Day Yucatan Tour – Chichen Itza, Uxmal, Mérida & More"}
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl">
              {isEs
                ? "Ve más allá del tour de un día. Explora toda la riqueza de la Península de Yucatán en 2-4 días, visitando múltiples sitios arqueológicos, ciudades coloniales, cenotes y joyas ocultas que la mayoría de los turistas nunca ven."
                : "Go beyond the day trip. Explore the full richness of the Yucatan Peninsula over 2-4 days, visiting multiple archaeological sites, colonial cities, cenotes, and hidden gems most tourists never see."}
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
              <a href="#itinerary">{isEs ? "Ver Itinerario de Ejemplo" : "See Sample Itinerary"} <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container">
          <TourGallery images={galleryImages} altTexts={galleryAlts} tourTitle={isEs ? "Tour Yucatán Varios Días" : "Multi-Day Yucatan Tour"} />
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-2xl mb-4">
            {isEs ? "¿Por Qué Elegir un Tour de Varios Días?" : "Why Choose a Multi-Day Tour?"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs
              ? "Los tours de un día a Chichén Itzá son maravillosos, pero la Península de Yucatán tiene mucho más que ofrecer. Un tour de varios días te permite explorar a un ritmo relajado, visitando sitios que la mayoría de los turistas de un día nunca ven — las magníficas ruinas de Uxmal, la vibrante capital colonial de Mérida, las reservas de flamencos de Celestún y cenotes ocultos lejos del circuito turístico."
              : "Day trips to Chichen Itza are wonderful, but the Yucatan Peninsula has so much more to offer. A multi-day tour lets you explore at a relaxed pace, visiting sites that most day-trippers never see — the magnificent Uxmal ruins, the vibrant colonial capital of Mérida, the flamingo reserves of Celestún, and hidden cenotes far from the tourist trail."}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isEs
              ? "Nuestros paquetes de varios días incluyen alojamiento cómodo en hotel, todo el transporte entre sitios, guías expertos en cada ubicación, desayuno diario y la mayoría de las comidas. Es la forma más completa de experimentar el rico tapiz de historia maya, herencia colonial y belleza natural del Yucatán."
              : "Our multi-day packages include comfortable hotel accommodation, all transportation between sites, expert guides at each location, daily breakfast, and most meals. It's the most comprehensive way to experience the Yucatan's rich tapestry of Mayan history, colonial heritage, and natural beauty."}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {isEs
              ? <>Perfecto para viajeros que quieren profundidad sobre velocidad. Compara con nuestros <LocaleLink to="/tours/day-tours" className="text-primary hover:underline">tours de un día</LocaleLink> para opciones más cortas, o <LocaleLink to="/tours/private-tours" className="text-primary hover:underline">tours privados</LocaleLink> para experiencias multi-día personalizadas.</>
              : <>Perfect for travelers who want depth over speed. Compare with our <LocaleLink to="/tours/day-tours" className="text-primary hover:underline">day tours</LocaleLink> for shorter options, or <LocaleLink to="/tours/private-tours" className="text-primary hover:underline">private tours</LocaleLink> for customized multi-day experiences.</>}
          </p>
        </div>
      </section>

      <section id="itinerary" className="py-12 lg:py-16 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            {isEs ? "Itinerario de Ejemplo de 3 Días" : "Sample 3-Day Itinerary"}
          </h2>
          <div className="space-y-2">
            {itinerary.map((item, i) => (
              <TimelineItem key={i} time={item.time} title={item.title} description={item.description} isLast={i === itinerary.length - 1} />
            ))}
          </div>
          <div className="mt-8">
            <TipBox
              type="tip"
              title={isEs ? "Itinerario Personalizable" : "Customizable Itinerary"}
              content={isEs
                ? "Este es un itinerario de ejemplo — todos los tours de varios días se pueden personalizar según tus intereses. Agrega la reserva de flamencos de Celestún, Izamal (la Ciudad Amarilla), las ruinas de Kabah, o extiende a 4 días. Contáctanos para una cotización personalizada."
                : "This is a sample itinerary — all multi-day tours can be customized to your interests. Add Celestún flamingo reserve, Izamal (the Yellow City), Kabah ruins, or extend to 4 days. Contact us for a personalized quote."}
            />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            {isEs ? "El Tour de Varios Días Incluye" : "Multi-Day Tour Includes"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {includes.map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">
            {isEs ? "Tours Destacados para Empezar" : "Featured Tours to Start With"}
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {isEs ? "Reserva un tour de día o contáctanos para paquetes multi-día" : "Book a day tour or contact us for multi-day packages"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
          </div>
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <FAQSection faqs={multiDayFAQs} />
      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">{isEs ? "Más Combos y Tours" : "More Combos & Tours"}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: isEs ? "Combo Cenote Ik Kil" : "Cenote Ik Kil Combo", href: "/combo-tours/cenote-ik-kil" },
              { label: isEs ? "Combo Ruinas de Cobá" : "Coba Ruins Combo", href: "/combo-tours/coba-ruins" },
              { label: isEs ? "Combo Isla Mujeres" : "Isla Mujeres Combo", href: "/combo-tours/isla-mujeres" },
              { label: isEs ? "Desde Mérida" : "From Mérida", href: "/tours-from/merida" },
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

export default MultiDayYucatanPage;
