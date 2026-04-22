import { Link } from "react-router-dom";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";
import { ChevronRight, BookOpen, Landmark, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import { guideSchemas } from "@/lib/schema";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import FAQSection from "@/components/common/FAQ";
import QuickBookingForm from "@/components/features/booking/QuickBookingForm";
import TrustBadges from "@/components/features/booking/TrustBadges";
import PopularToursWidget from "@/components/features/tours/PopularToursWidget";
import { guideImages } from "@/lib/tourImages";
import RelatedResources from "@/components/common/RelatedResources";

const faqData = [
  {
    question: "When was Chichen Itza built?",
    answer: "Chichen Itza was founded around 600 AD, but it rose to prominence between 850 and 1200 AD when it became the capital of the Maya civilization in the Yucatan.",
    category: "history",
  },
  {
    question: "What does Chichen Itza mean?",
    answer: "In Mayan, 'Chi' means mouth, 'Chen' means well, and 'Itza' is the name of the Maya people who settled there. So Chichen Itza translates to 'At the mouth of the well of the Itza people'.",
    category: "history",
  },
  {
    question: "Who built Chichen Itza?",
    answer: "Chichen Itza was built by the Maya civilization, with significant influence from the Toltecs who migrated from central Mexico around the 10th century AD.",
    category: "history",
  },
  {
    question: "Why is Chichen Itza a Wonder of the World?",
    answer: "Chichen Itza was named one of the New Seven Wonders of the World in 2007 due to its advanced architecture, historical significance, and the iconic El Castillo pyramid.",
    category: "history",
  },
  {
    question: "What is El Castillo?",
    answer: "El Castillo, also known as the Temple of Kukulcán, is the central pyramid at Chichen Itza. It stands 30 meters tall and has 365 steps (total from all sides), representing the days of the year. During the spring and fall equinoxes, a shadow in the shape of a serpent appears on the pyramid's staircase.",
    category: "history",
  },
  {
    question: "Is Chichen Itza a UNESCO site?",
    answer: "Yes, Chichen Itza was designated a UNESCO World Heritage Site in 1988, recognizing its cultural and historical importance as one of the best examples of Mayan-Toltec civilization in the Yucatan.",
    category: "history",
  },
  {
    question: "What happened to Chichen Itza?",
    answer: "Chichen Itza declined as a major power around the 13th century, and the capital shifted to Mayapan. The reasons for the decline are not entirely clear but may involve political instability, warfare, and environmental factors.",
    category: "history",
  },
  {
    question: "Can you still climb El Castillo?",
    answer: "No, climbing El Castillo has been prohibited since 2006 to protect the ancient structure from further damage. However, you can still explore the base and admire the pyramid up close.",
    category: "history",
  },
];

const faqDataEs = [
  { question: "¿Cuándo se construyó Chichén Itzá?", answer: "Chichén Itzá fue fundada alrededor del 600 d.C., pero alcanzó su apogeo entre el 850 y 1200 d.C. cuando se convirtió en la capital de la civilización maya en Yucatán.", category: "history" },
  { question: "¿Qué significa Chichén Itzá?", answer: "En maya, 'Chi' significa boca, 'Chen' significa pozo, e 'Itza' es el nombre del pueblo maya que se asentó allí. Así que Chichén Itzá se traduce como 'En la boca del pozo de los Itzaes'.", category: "history" },
  { question: "¿Quién construyó Chichén Itzá?", answer: "Chichén Itzá fue construida por la civilización maya, con una influencia significativa de los toltecas que migraron desde el centro de México alrededor del siglo X d.C.", category: "history" },
  { question: "¿Por qué Chichén Itzá es una Maravilla del Mundo?", answer: "Chichén Itzá fue nombrada una de las Nuevas Siete Maravillas del Mundo en 2007 debido a su avanzada arquitectura, significado histórico y la icónica pirámide de El Castillo.", category: "history" },
  { question: "¿Qué es El Castillo?", answer: "El Castillo, también conocido como el Templo de Kukulcán, es la pirámide central de Chichén Itzá. Mide 30 metros de alto y tiene 365 escalones (total de todos los lados), representando los días del año. Durante los equinoccios de primavera y otoño, una sombra en forma de serpiente aparece en la escalera de la pirámide.", category: "history" },
  { question: "¿Chichén Itzá es un sitio UNESCO?", answer: "Sí, Chichén Itzá fue designada Patrimonio de la Humanidad por la UNESCO en 1988, reconociendo su importancia cultural e histórica como uno de los mejores ejemplos de la civilización maya-tolteca en Yucatán.", category: "history" },
  { question: "¿Qué pasó con Chichén Itzá?", answer: "Chichén Itzá declinó como potencia principal alrededor del siglo XIII, y la capital se trasladó a Mayapán. Las razones de la decadencia no están del todo claras pero pueden incluir inestabilidad política, guerras y factores ambientales.", category: "history" },
  { question: "¿Se puede subir a El Castillo?", answer: "No, subir a El Castillo está prohibido desde 2006 para proteger la estructura antigua de daños mayores. Sin embargo, aún puedes explorar la base y admirar la pirámide de cerca.", category: "history" },
];

const timelineEs = [
  { year: "600 d.C.", event: "Comienza el asentamiento; los primeros grupos mayas fundan Chichén Itzá." },
  { year: "800-900 d.C.", event: "Chichén Itzá se convierte en un centro regional importante." },
  { year: "987 d.C.", event: "Llega el rey tolteca Topiltzin Ce Acatl Quetzalcóatl." },
  { year: "1000-1200 d.C.", event: "Chichén Itzá prospera como capital de la civilización maya." },
  { year: "1221 d.C.", event: "Se forma la Liga de Mayapán; el poder de Chichén Itzá declina." },
  { year: "1400 d.C.", event: "Chichén Itzá es abandonada." },
  { year: "1531 d.C.", event: "Llegan los conquistadores españoles." },
  { year: "1841 d.C.", event: "Comienza la exploración arqueológica." },
  { year: "1988 d.C.", event: "Chichén Itzá es designada Patrimonio de la Humanidad por la UNESCO." },
  { year: "2007 d.C.", event: "Chichén Itzá es nombrada una de las Nuevas Siete Maravillas del Mundo." },
];

const structuresEs = [
  { name: "El Castillo (Templo de Kukulcán)", description: "La icónica pirámide escalonada, dedicada al dios serpiente emplumada Kukulcán." },
  { name: "Gran Juego de Pelota", description: "El juego de pelota más grande de Mesoamérica, donde se celebraban juegos rituales." },
  { name: "Templo de los Guerreros", description: "Una gran pirámide escalonada con columnas talladas que representan guerreros." },
  { name: "Grupo de las Mil Columnas", description: "Un complejo de columnas y plataformas cerca del Templo de los Guerreros." },
  { name: "Cenote Sagrado", description: "Un sumidero natural usado para ofrendas sacrificiales." },
  { name: "El Observatorio (El Caracol)", description: "Una estructura única utilizada para observaciones astronómicas." },
];

const amazingFactsEs = [
  "El Castillo tiene 365 escalones, representando los días del año.",
  "Durante los equinoccios, una sombra de serpiente aparece en El Castillo.",
  "El Gran Juego de Pelota es más grande que un campo de fútbol.",
  "El Cenote Sagrado se usaba para ofrendas sacrificiales, incluyendo sacrificios humanos.",
  "Chichén Itzá fue un centro importante de astronomía y matemáticas.",
  "El sitio muestra una mezcla de estilos arquitectónicos mayas y toltecas.",
];

const getMeta = (locale: "en" | "es") => {
  const isEs = locale === "es";
  return getPageMeta({
    title: isEs
      ? "Historia y Datos de Chichén Itzá – Guía Completa 2026"
      : "Chichen Itza History & Facts – Complete Guide 2026",
    description: isEs
      ? "Descubre la historia de Chichén Itzá, datos fascinantes sobre El Castillo, la civilización maya, su estatus UNESCO y Nueva Maravilla del Mundo."
      : "Discover Chichen Itza history, fascinating facts about El Castillo, Mayan civilization, UNESCO status, New Seven Wonders. Expert guide to this ancient wonder.",
    canonical: "/guide/history-and-facts",
    ogType: "article",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Guía" : "Guide", url: "/guide" },
        { name: isEs ? "Historia y Datos" : "History & Facts" },
      ]),
      guideSchemas["history-and-facts"],
      createFAQSchema(faqData),
    ],
  });
};

const timeline = [
  { year: "600 AD", event: "Settlement begins; early Maya groups found Chichen Itza." },
  { year: "800-900 AD", event: "Chichen Itza becomes a major regional center." },
  { year: "987 AD", event: "The Toltec king Topiltzin Ce Acatl Quetzalcoatl arrives." },
  { year: "1000-1200 AD", event: "Chichen Itza prospers as the capital of the Maya civilization." },
  { year: "1221 AD", event: "The League of Mayapan is formed; Chichen Itza's power declines." },
  { year: "1400 AD", event: "Chichen Itza is abandoned." },
  { year: "1531 AD", event: "Spanish conquistadors arrive." },
  { year: "1841 AD", event: "Archaeological exploration begins." },
  { year: "1988 AD", event: "Chichen Itza is designated a UNESCO World Heritage Site." },
  { year: "2007 AD", event: "Chichen Itza is named one of the New Seven Wonders of the World." },
];

const structures = [
  { name: "El Castillo (Temple of Kukulcán)", description: "The iconic step pyramid, dedicated to the feathered serpent god Kukulcán." },
  { name: "Great Ball Court", description: "The largest ball court in Mesoamerica, where ritual games were played." },
  { name: "Temple of Warriors", description: "A large stepped pyramid with carved pillars depicting warriors." },
  { name: "Group of a Thousand Columns", description: "A complex of columns and platforms near the Temple of Warriors." },
  { name: "Sacred Cenote", description: "A natural sinkhole used for sacrificial offerings." },
  { name: "The Observatory (El Caracol)", description: "A unique structure used for astronomical observations." },
];

const amazingFacts = [
  "El Castillo has 365 steps, representing the days of the year.",
  "During the equinoxes, a serpent shadow appears on El Castillo.",
  "The Great Ball Court is larger than a football field.",
  "The Sacred Cenote was used for sacrificial offerings, including human sacrifices.",
  "Chichen Itza was a major center for astronomy and mathematics.",
  "The site shows a blend of Maya and Toltec architectural styles.",
];

const HistoryAndFactsPage = () => {
  const { locale, isEs } = useLocale();
  const meta = getMeta(locale);
  const breadcrumbs = [
    { label: isEs ? "Guía" : "Guide", href: "/guide" },
    { label: isEs ? "Historia y Datos" : "History & Facts" },
  ];

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16 overflow-hidden">
        <img
          src={guideImages["history-and-facts"]}
          alt="El Castillo pyramid at Chichen Itza, ancient Maya wonder"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          loading="eager"
          fetchPriority="high"
        />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {isEs
                ? "Historia y Datos de Chichén Itzá: Antigua Maravilla Maya"
                : "Chichen Itza History & Facts: Ancient Mayan Wonder"}
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              {isEs
                ? "Explora la fascinante historia de 1,400 años de una de las Nuevas Siete Maravillas del Mundo — desde su fundación alrededor del 600 d.C. hasta su estatus como Patrimonio de la Humanidad de la UNESCO hoy."
                : "Explore the fascinating 1,400-year history of one of the New Seven Wonders of the World — from its founding around 600 AD to its status as a UNESCO World Heritage Site today."}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              {isEs ? "Actualizado: abril 2026 • 10 min lectura • Guía Histórica" : "Updated: April 2026 • 10 min read • Historical Guide"}
            </p>
            <Button variant="cta" size="lg" asChild>
              <LocaleLink to="/tours">
                {isEs ? "Explorar Tours" : "Explore Tours"} <ChevronRight className="h-5 w-5" />
              </LocaleLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10">
            {/* Main Content */}
            <div className="space-y-14">
              {/* Quick Facts */}
              <div>
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Datos Rápidos" : "Quick Facts"}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <BookOpen className="h-9 w-9 text-primary mb-2" />
                    <h3 className="font-semibold text-lg mb-1">
                      {isEs ? "Fundación" : "Founded"}
                    </h3>
                    <p className="text-muted-foreground">
                      {isEs ? "Alrededor del 600 d.C." : "Around 600 AD"}
                    </p>
                  </div>
                  <div>
                    <Landmark className="h-9 w-9 text-secondary mb-2" />
                    <h3 className="font-semibold text-lg mb-1">
                      {isEs ? "Civilización" : "Civilization"}
                    </h3>
                    <p className="text-muted-foreground">
                      {isEs ? "Maya y Tolteca" : "Mayan & Toltec"}
                    </p>
                  </div>
                  <div>
                    <Sparkles className="h-9 w-9 text-success mb-2" />
                    <h3 className="font-semibold text-lg mb-1">
                      {isEs ? "Maravilla del Mundo" : "Wonder of the World"}
                    </h3>
                    <p className="text-muted-foreground">
                      {isEs ? "Desde 2007" : "Since 2007"}
                    </p>
                  </div>
                  <div>
                    <BookOpen className="h-9 w-9 text-accent mb-2" />
                    <h3 className="font-semibold text-lg mb-1">
                      {isEs ? "UNESCO" : "UNESCO"}
                    </h3>
                    <p className="text-muted-foreground">
                      {isEs ? "Desde 1988" : "Since 1988"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Historical Timeline */}
              <div>
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Cronología Histórica" : "Historical Timeline"}
                </h2>
                <ul className="list-none space-y-3">
                  {(isEs ? timelineEs : timeline).map((item, i) => (
                    <li key={i} className="grid grid-cols-[100px_1fr] gap-4">
                      <div className="font-semibold">{item.year}</div>
                      <div className="text-muted-foreground">{item.event}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* El Castillo Deep Dive */}
              <div>
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "El Castillo en Profundidad" : "El Castillo Deep Dive"}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {isEs
                    ? "El Castillo, también conocido como el Templo de Kukulcán, es la estructura más emblemática de Chichén Itzá. Esta pirámide escalonada de 30 metros de altura fue construida por la civilización maya entre los siglos IX y XII d.C. como templo del dios Kukulcán (la versión maya de Quetzalcóatl, la serpiente emplumada de la mitología mesoamericana)."
                    : "El Castillo, also known as the Temple of Kukulcán, is the most iconic structure at Chichen Itza. This 30-meter-tall stepped pyramid was built by the Maya civilization between the 9th and 12th centuries AD as a temple to the god Kukulcán (the Mayan version of Quetzalcoatl, the feathered serpent of Mesoamerican mythology)."}
                </p>
                <p className="text-muted-foreground mb-4">
                  {isEs
                    ? "El diseño de la pirámide está lleno de simbolismo astronómico y religioso. Cada una de sus cuatro caras tiene una escalera con 91 escalones, que sumados a la plataforma superior dan un total de 365 escalones, uno por cada día del año. Durante los equinoccios de primavera y otoño, la luz del sol proyecta sombras triangulares en la escalera norte, creando la ilusión de una serpiente descendiendo por la pirámide."
                    : "The pyramid's design is full of astronomical and religious symbolism. Each of its four sides has a staircase with 91 steps, which, when added to the top platform, totals 365 steps, one for each day of the year. During the spring and autumn equinoxes, sunlight casts triangular shadows on the north staircase, creating the illusion of a serpent descending the pyramid."}
                </p>
                <TipBox
                  type="tip"
                  title={isEs ? "El Equinoccio de la Serpiente" : "The Serpent Equinox"}
                  content={isEs ? "Visita durante los equinoccios de primavera y otoño para presenciar el famoso descenso de la serpiente en El Castillo." : "Visit during the spring and autumn equinoxes to witness the famous serpent descent on El Castillo."}
                />
              </div>

              {/* Key Structures */}
              <div>
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Estructuras Clave" : "Key Structures"}
                </h2>
                <ul className="list-none space-y-3">
                  {(isEs ? structuresEs : structures).map((structure, i) => (
                    <li key={i} className="space-y-1">
                      <h3 className="font-semibold">{structure.name}</h3>
                      <p className="text-muted-foreground">{structure.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amazing Facts */}
              <div>
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Datos Asombrosos" : "Amazing Facts"}
                </h2>
                <ul className="list-disc list-inside space-y-3">
                  {(isEs ? amazingFactsEs : amazingFacts).map((fact, i) => (
                    <li key={i} className="text-muted-foreground">
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <FAQSection
                faqs={isEs ? faqDataEs : faqData}
                title={isEs ? "Preguntas Frecuentes sobre la Historia de Chichén Itzá" : "Chichen Itza History FAQs"}
                subtitle={isEs ? "Respuestas a preguntas comunes sobre la historia y los datos de Chichén Itzá" : "Answers to common questions about Chichen Itza history and facts"}
              />
            </div>

            {/* Sidebar */}
            <div>
              <QuickBookingForm />
              <TrustBadges />
              <PopularToursWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours & Guides */}
      <section className="py-8">
        <div className="container">
          <RelatedResources />
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Internal Links */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">
            {isEs ? "Explora Más Guías y Tours" : "Explore More Guides & Tours"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: isEs ? "Tours a Chichén Itzá" : "Chichen Itza Tours", href: "/tours" },
              { label: isEs ? "Mejor Época para Visitar" : "Best Time to Visit", href: "/guide/best-time-to-visit" },
              { label: isEs ? "Qué Llevar" : "What to Bring", href: "/guide/what-to-bring" },
              { label: isEs ? "Cómo Llegar" : "How to Get There", href: "/guide/how-to-get-there" },
              { label: isEs ? "Precios de Entrada" : "Entrance Fees", href: "/guide/entrance-fees" },
              { label: isEs ? "Tours al Amanecer" : "Sunrise Tours", href: "/tours/sunrise-tours" },
              { label: isEs ? "Tours Privados" : "Private Tours", href: "/tours/private-tours" },
              { label: isEs ? "Tours Nocturnos" : "Night Tours", href: "/tours/night-tours" },
              { label: isEs ? "Tours desde Cancún" : "Tours from Cancun", href: "/tours-from/cancun" },
              { label: isEs ? "Tours desde Playa del Carmen" : "Tours from Playa del Carmen", href: "/tours-from/playa-del-carmen" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryAndFactsPage;
