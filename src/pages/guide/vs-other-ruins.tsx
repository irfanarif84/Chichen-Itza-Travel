import { Link } from "react-router-dom";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";
import { ChevronRight, Mountain, Waves, TreePalm, Pyramid, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/common/FAQ";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import InfoBox from "@/components/guide/InfoBox";
import ComparisonTable from "@/components/guide/ComparisonTable";
import { guideSchemas } from "@/lib/schema";
import type { FAQItem } from "@/lib/faqData";

const comparisonFAQs: FAQItem[] = [
  {
    question: "Which Mayan ruin is the best to visit?",
    answer: "Chichen Itza is the must-see for first-time visitors — it's a UNESCO World Heritage Site and one of the New Seven Wonders. If you have time for a second site, Tulum offers stunning ocean views, and Coba lets you climb the tallest pyramid in the Yucatan.",
    category: "comparison",
  },
  {
    question: "Can you still climb the pyramids in Mexico?",
    answer: "You can climb pyramids at Coba (Nohoch Mul, 42 meters) and Ek Balam (the Acropolis). Climbing is no longer allowed at Chichen Itza (since 2006) or Tulum. Uxmal's Great Pyramid is also closed to climbers.",
    category: "comparison",
  },
  {
    question: "Can I visit Chichen Itza and Tulum in one day?",
    answer: "It's technically possible but not recommended — they're 150 km apart and you'd spend most of the day driving. Better to dedicate a full day to each, or combine Chichen Itza with nearby Ek Balam or Valladolid instead.",
    category: "comparison",
  },
  {
    question: "Which ruins are least crowded?",
    answer: "Ek Balam is by far the least crowded major site, followed by Coba. Chichen Itza and Tulum are the most visited. For fewer crowds at popular sites, arrive early morning or visit on weekdays.",
    category: "comparison",
  },
  {
    question: "How much do entrance fees cost at Mayan ruins?",
    answer: "As of 2026: Chichen Itza ~614 MXN ($35 USD), Tulum ~100 MXN ($6 USD), Coba ~100 MXN ($6 USD), Ek Balam ~413 MXN ($24 USD), Uxmal ~494 MXN ($28 USD). Prices include both federal and state fees.",
    category: "comparison",
  },
  {
    question: "What's the difference between Chichen Itza and Tulum?",
    answer: "Chichen Itza is a massive inland site famous for El Castillo pyramid, astronomical precision, and Mayan engineering. Tulum is a smaller coastal site perched on cliffs above the Caribbean Sea, known for its stunning beach setting. Chichen Itza is architecturally grander; Tulum wins for scenery.",
    category: "comparison",
  },
  {
    question: "Is Uxmal worth visiting?",
    answer: "Absolutely. Uxmal features the most ornate Puuc-style architecture of any Mayan site, with intricate stone mosaics on the Pyramid of the Magician. It's less crowded than Chichen Itza and best combined with a Merida trip.",
    category: "comparison",
  },
];

const comparisonFAQsEs: FAQItem[] = [
  { question: "¿Cuál es la mejor ruina maya para visitar?", answer: "Chichén Itzá es imprescindible para los visitantes primerizos — es Patrimonio de la Humanidad de la UNESCO y una de las Nuevas Siete Maravillas. Si tienes tiempo para un segundo sitio, Tulum ofrece impresionantes vistas al mar y Cobá te permite subir a la pirámide más alta de Yucatán.", category: "comparison" },
  { question: "¿Se puede subir a las pirámides en México?", answer: "Puedes subir pirámides en Cobá (Nohoch Mul, 42 metros) y Ek Balam (la Acrópolis). Ya no se permite subir en Chichén Itzá (desde 2006) ni en Tulum. La Gran Pirámide de Uxmal también está cerrada a los escaladores.", category: "comparison" },
  { question: "¿Se puede visitar Chichén Itzá y Tulum en un día?", answer: "Es técnicamente posible pero no recomendable — están a 150 km de distancia y pasarías la mayor parte del día manejando. Es mejor dedicar un día completo a cada uno, o combinar Chichén Itzá con Ek Balam o Valladolid cercanos.", category: "comparison" },
  { question: "¿Cuáles ruinas son las menos concurridas?", answer: "Ek Balam es por mucho el sitio principal menos concurrido, seguido de Cobá. Chichén Itzá y Tulum son los más visitados. Para menos multitudes en sitios populares, llega temprano en la mañana o visita entre semana.", category: "comparison" },
  { question: "¿Cuánto cuestan las entradas a las ruinas mayas?", answer: "En 2026: Chichén Itzá ~614 MXN ($35 USD), Tulum ~100 MXN ($6 USD), Cobá ~100 MXN ($6 USD), Ek Balam ~413 MXN ($24 USD), Uxmal ~494 MXN ($28 USD). Los precios incluyen tarifas federales y estatales.", category: "comparison" },
  { question: "¿Cuál es la diferencia entre Chichén Itzá y Tulum?", answer: "Chichén Itzá es un sitio masivo en el interior famoso por la pirámide de El Castillo, precisión astronómica e ingeniería maya. Tulum es un sitio costero más pequeño ubicado en acantilados sobre el Mar Caribe, conocido por su impresionante entorno de playa.", category: "comparison" },
  { question: "¿Vale la pena visitar Uxmal?", answer: "Absolutamente. Uxmal presenta la arquitectura de estilo Puuc más ornamentada de cualquier sitio maya, con intrincados mosaicos de piedra en la Pirámide del Adivino. Es menos concurrido que Chichén Itzá y se combina mejor con un viaje a Mérida.", category: "comparison" },
];

const getMeta = (locale: "en" | "es") => {
  const isEs = locale === "es";
  return getPageMeta({
    title: isEs
      ? "Chichén Itzá vs Tulum, Cobá, Ek Balam, Uxmal – Guía 2026"
      : "Chichen Itza vs Tulum, Coba, Ek Balam, Uxmal - 2026 Guide",
    description: isEs
      ? "Compara Chichén Itzá con Tulum, Cobá, Ek Balam y Uxmal. Descubre cuáles ruinas mayas visitar según multitudes, tarifas y tiempo de viaje."
      : "Compare Chichen Itza to Tulum, Coba, Ek Balam, and Uxmal. See which Mayan ruins to visit based on crowds, climbability, fees, and travel time.",
    canonical: "/guide/vs-other-ruins",
    ogType: "article",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Guía" : "Guide", url: "/guide" },
        { name: isEs ? "vs Otras Ruinas" : "vs Other Ruins" },
      ]),
      guideSchemas["vs-other-ruins"],
      createFAQSchema(comparisonFAQs),
    ],
  });
};

const VsOtherRuinsPage = () => {
  const { locale, isEs } = useLocale();
  const meta = getMeta(locale);
  const breadcrumbs = [
    { label: isEs ? "Guía" : "Guide", href: "/guide" },
    { label: isEs ? "vs Otras Ruinas" : "vs Other Ruins" },
  ];

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent/10 via-background to-primary/10 py-12 lg:py-16 overflow-hidden">
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {isEs
                ? "Chichén Itzá vs Otras Ruinas Mayas — Guía Comparativa Completa"
                : "Chichen Itza vs Other Mayan Ruins — Complete Comparison Guide"}
            </h1>
            <p className="text-sm text-muted-foreground mt-2 mb-6">
              {isEs ? "Actualizado: abril 2026" : "Last updated: April 2026"}
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              {isEs
                ? "¿Decidiendo qué ruinas mayas visitar? Compara Chichén Itzá con Tulum, Cobá, Ek Balam y Uxmal en multitudes, escalabilidad, tarifas de entrada y más."
                : "Deciding which Mayan ruins to visit? Compare Chichen Itza to Tulum, Coba, Ek Balam, and Uxmal across crowd levels, climbability, entrance fees, and more."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild>
                <LocaleLink to="/tours">{isEs ? "Reservar Tour a Chichén Itzá" : "Book Chichen Itza Tour"} <ChevronRight className="h-5 w-5" /></LocaleLink>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <LocaleLink to="/guide/entrance-fees">{isEs ? "Guía de Precios de Entrada →" : "Entrance Fees Guide →"}</LocaleLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <TipBox
              type="success"
              title={isEs ? "Respuesta Rápida: Chichén Itzá Es Imprescindible" : "Quick Answer: Chichen Itza Is the Must-See"}
              content={isEs
                ? "Si solo visitas una ruina maya, que sea Chichén Itzá — es Patrimonio de la Humanidad de la UNESCO y una de las Nuevas Siete Maravillas del Mundo. Pero cada sitio ofrece algo único, y combinar dos o tres ruinas hace una experiencia inolvidable en Yucatán."
                : "If you only visit one Mayan ruin, make it Chichen Itza — it's a UNESCO World Heritage Site and one of the New Seven Wonders of the World. But each site offers something unique, and combining two or three ruins makes for an unforgettable Yucatan experience."}
            />

            <div className="mt-8 prose prose-neutral">
              <h2 className="font-heading font-bold text-2xl mb-4">{isEs ? "Panorama General" : "Overview"}</h2>
              <p className="text-muted-foreground">
                {isEs
                  ? <>La Península de Yucatán alberga docenas de antiguas ciudades mayas, pero cinco sitios destacan como los más populares y accesibles: <strong>Chichén Itzá</strong>, <strong>Tulum</strong>, <strong>Cobá</strong>, <strong>Ek Balam</strong> y <strong>Uxmal</strong>. Cada uno ofrece una experiencia distinta — desde la arquitectura monumental de Chichén Itzá hasta las dramáticas vistas al océano de Tulum, la pirámide escalable de Cobá, la atmósfera íntima de Ek Balam y los ornamentados mosaicos de piedra de Uxmal. Esta guía compara los cinco en los factores más importantes: tamaño, multitudes, <Link to="/guide/entrance-fees" className="text-primary hover:underline">tarifas de entrada</Link>, escalabilidad, <Link to="/guide/how-to-get-there" className="text-primary hover:underline">tiempo de viaje</Link>, y para qué es mejor cada sitio.</>
                  : <>The Yucatan Peninsula is home to dozens of ancient Mayan cities, but five sites stand out as the most popular and accessible for visitors: <strong>Chichen Itza</strong>, <strong>Tulum</strong>, <strong>Coba</strong>, <strong>Ek Balam</strong>, and <strong>Uxmal</strong>. Each offers a distinct experience — from Chichen Itza's monumental architecture and astronomical precision to Tulum's dramatic clifftop ocean views, Coba's jungle-wrapped climbable pyramid, Ek Balam's intimate uncrowded atmosphere, and Uxmal's ornate Puuc-style stone mosaics. This guide compares all five across the factors that matter most: size, crowds, <Link to="/guide/entrance-fees" className="text-primary hover:underline">entrance fees</Link>, climbability, <Link to="/guide/how-to-get-there" className="text-primary hover:underline">travel time</Link>, and what each site is best for.</>}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            {isEs ? "Comparación Lado a Lado" : "Side-by-Side Comparison"}
          </h2>
          <div className="max-w-5xl mx-auto">
            <ComparisonTable
              headers={["Chichen Itza", "Tulum", "Coba", "Ek Balam", "Uxmal"]}
              highlightColumn={1}
              rows={[
                { label: "UNESCO Site", values: [true, false, false, false, true] },
                { label: "7 Wonders", values: [true, false, false, false, false] },
                { label: "Climb Pyramid", values: [false, false, true, true, false] },
                { label: "Crowd Level", values: ["Very High", "High", "Medium", "Low", "Low"] },
                { label: "Entrance Fee", values: ["~$35 USD", "~$6 USD", "~$6 USD", "~$24 USD", "~$28 USD"] },
                { label: "Drive from Cancún", values: ["2.5 hrs", "2 hrs", "2.5 hrs", "2.5 hrs", "4 hrs"] },
                { label: "Drive from Mérida", values: ["1.5 hrs", "4 hrs", "3 hrs", "2.5 hrs", "1 hr"] },
                { label: "Cenote Nearby", values: [true, false, true, true, false] },
                { label: "Ocean View", values: [false, true, false, false, false] },
                { label: "Best For", values: ["History & Scale", "Scenery & Photos", "Adventure & Climbing", "Off-the-beaten-path", "Architecture & Art"] },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Individual Site Sections */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Chichen Itza */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Pyramid className="h-7 w-7 text-primary" />
                <h2 className="font-heading font-bold text-2xl">Chichen Itza</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                The crown jewel of Mayan archaeology, Chichen Itza was a major political and economic hub from 600-1200 AD. The site spans over 5 square kilometers and features El Castillo (the iconic step pyramid), the Great Ball Court (largest in Mesoamerica), the Temple of Warriors, and the Sacred Cenote. Its astronomical precision — particularly the serpent shadow during equinoxes — demonstrates remarkable scientific achievement. Learn more in our <Link to="/guide/history-and-facts" className="text-primary hover:underline">complete history and facts guide</Link>. Over 2.6 million visitors come annually, making it the most visited archaeological site in Mexico.
              </p>
              <InfoBox
                title="Why Visit Chichen Itza"
                items={[
                  "One of the New Seven Wonders of the World",
                  "UNESCO World Heritage Site since 1988",
                  "Largest and most impressive ball court in all Mesoamerica",
                  "Famous equinox serpent shadow on El Castillo",
                  "Excellent on-site museum and sound & light shows",
                  "Most accessible from Cancún, Playa del Carmen, and Mérida",
                ]}
                variant="success"
              />
            </div>

            {/* Tulum */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Waves className="h-7 w-7 text-secondary" />
                <h2 className="font-heading font-bold text-2xl">Tulum</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Perched on 12-meter cliffs overlooking the turquoise Caribbean Sea, Tulum is the only major Mayan ruin with an ocean backdrop. This Late Post-Classic walled city (1200-1521 AD) served as a trading port. While architecturally modest compared to Chichen Itza, Tulum's setting is unmatched — you can swim at the beach directly below the ruins. It's the third most visited archaeological site in Mexico and the easiest to reach from <Link to="/tours-from/tulum" className="text-primary hover:underline">Tulum's hotel zone</Link>.
              </p>
              <InfoBox
                title="Why Visit Tulum"
                icon="🌊"
                items={[
                  "Stunning clifftop ocean views — most photogenic ruin",
                  "Compact site, easy to explore in 1-2 hours",
                  "Beach access directly below the ruins",
                  "Lowest entrance fee of any major site (~$6 USD)",
                  "Easy to combine with cenote visits or beach day",
                ]}
                variant="info"
              />
            </div>

            {/* Coba */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TreePalm className="h-7 w-7 text-success" />
                <h2 className="font-heading font-bold text-2xl">Coba</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Deep in the Yucatan jungle, Coba is a sprawling site connected by ancient raised white roads (sacbeob). Its centerpiece, the Nohoch Mul pyramid, stands 42 meters tall — the tallest climbable structure in the Yucatan. The site covers 80 square kilometers (mostly unexcavated) and is best explored by rented bicycle, giving it an adventurous Indiana Jones feel. Coba is often combined with <Link to="/combo-tours/coba-ruins" className="text-primary hover:underline">Chichen Itza combo tours</Link>.
              </p>
              <InfoBox
                title="Why Visit Coba"
                icon="🌿"
                items={[
                  "Climb the tallest pyramid in the Yucatan (42 meters)",
                  "Explore by bicycle through jungle paths",
                  "80 km² of ruins — mostly unexcavated, feels like discovery",
                  "Moderate crowds compared to Chichen Itza and Tulum",
                  "Beautiful natural setting surrounded by lagoons",
                ]}
                variant="success"
              />
            </div>

            {/* Ek Balam */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Mountain className="h-7 w-7 text-accent" />
                <h2 className="font-heading font-bold text-2xl">Ek Balam</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                "Black Jaguar" in Maya, Ek Balam is a hidden gem just 30 minutes from Valladolid. Its Acropolis is one of the largest structures in the Mayan world, and you can still climb it for breathtaking 360° views over the jungle canopy. The site features remarkably preserved stucco sculptures, including an elaborate monster-mouth doorway. With far fewer visitors than Chichen Itza, Ek Balam offers an intimate, uncrowded experience. See our <Link to="/tours/ek-balam-tours" className="text-primary hover:underline">Ek Balam tour packages</Link>.
              </p>
              <InfoBox
                title="Why Visit Ek Balam"
                icon="🐆"
                items={[
                  "Climb the massive Acropolis for jungle panorama views",
                  "Incredibly well-preserved stucco sculptures and reliefs",
                  "Fraction of the crowds — often fewer than 50 visitors",
                  "On-site cenote (Cenote Xcanche) for swimming",
                  "Easy to combine with Valladolid and Chichen Itza",
                ]}
                variant="info"
              />
            </div>

            {/* Uxmal */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="h-7 w-7 text-primary" />
                <h2 className="font-heading font-bold text-2xl">Uxmal</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Often considered the most beautiful Mayan ruin by archaeologists, Uxmal showcases the intricate Puuc architectural style with elaborate geometric stone mosaics. The Pyramid of the Magician has a distinctive rounded shape unique in Mayan architecture. Uxmal is a UNESCO World Heritage Site and best accessed from <Link to="/tours-from/merida" className="text-primary hover:underline">Mérida (1 hour drive)</Link>. The evening sound and light show is considered the best in the Yucatan.
              </p>
              <InfoBox
                title="Why Visit Uxmal"
                icon="🏛️"
                items={[
                  "UNESCO World Heritage Site with finest Puuc-style architecture",
                  "Unique rounded Pyramid of the Magician",
                  "Intricate stone mosaics unmatched at any other Mayan site",
                  "Excellent sound and light show in the evening",
                  "Low crowds — relaxed, contemplative experience",
                ]}
                variant="success"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">
              {isEs ? "¿Qué Ruinas Deberías Visitar?" : "Which Ruins Should You Visit?"}
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-lg mb-2">First-Time Visitors</h3>
                <p className="text-sm text-muted-foreground">Chichen Itza is non-negotiable. Add Tulum if you're staying on the coast, or Uxmal if visiting Mérida.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-lg mb-2">Adventure Seekers</h3>
                <p className="text-sm text-muted-foreground">Coba for pyramid climbing and jungle biking, plus Ek Balam for uncrowded exploration and cenote swimming.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-lg mb-2">Photography Enthusiasts</h3>
                <p className="text-sm text-muted-foreground">Tulum for ocean-backdrop shots, <Link to="/tours/sunrise-tours" className="text-primary hover:underline">Chichen Itza sunrise tours</Link> for El Castillo without crowds, Ek Balam for canopy views. See our <Link to="/guide/photography-tips" className="text-primary hover:underline">photography tips guide</Link> for camera settings and best angles.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-lg mb-2">History Buffs</h3>
                <p className="text-sm text-muted-foreground">All five! Chichen Itza + Uxmal cover the major periods. Add Coba for sacbeob and Ek Balam for stucco art.</p>
              </div>
            </div>

            <TipBox
              type="tip"
              title="Pro Tip: Combine Sites for Value"
              content="Our combo tours pair Chichen Itza with Ek Balam, cenotes, and colonial Valladolid for a full-day experience at better value than visiting separately. See our Coba combo and cenote combo packages. Don't forget to check our photography tips guide to capture the best shots at whichever ruins you choose."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={isEs ? comparisonFAQsEs : comparisonFAQs}
        title={isEs ? "Preguntas Frecuentes sobre Ruinas Mayas" : "Mayan Ruins Comparison FAQs"}
        subtitle={isEs ? "Preguntas comunes sobre qué ruinas visitar" : "Common questions about choosing which ruins to visit"}
      />

      {/* CTA */}
      <CTASection />

      {/* Internal Links */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">
            Explore More Guides & Tours
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Ek Balam Tours", href: "/tours/ek-balam-tours" },
              { label: "Entrance Fees", href: "/guide/entrance-fees" },
              { label: "Cenote Combo Tours", href: "/combo-tours/cenote-ik-kil" },
              { label: "Coba Combo Tours", href: "/combo-tours/coba-ruins" },
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "From Tulum", href: "/tours-from/tulum" },
              { label: "From Mérida", href: "/tours-from/merida" },
              { label: "Night Tours", href: "/tours/night-tours" },
              { label: "History & Facts", href: "/guide/history-and-facts" },
              { label: "All Tours", href: "/tours" },
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

export default VsOtherRuinsPage;
