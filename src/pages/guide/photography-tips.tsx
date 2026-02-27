import { Link } from "react-router-dom";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";
import {
  ChevronRight,
  Camera,
  Sun,
  Sunrise,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import { guideSchemas } from "@/lib/schema";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import ComparisonTable from "@/components/guide/ComparisonTable";
import FAQSection from "@/components/common/FAQ";
import QuickBookingForm from "@/components/features/booking/QuickBookingForm";
import TrustBadges from "@/components/features/booking/TrustBadges";
import PopularToursWidget from "@/components/features/tours/PopularToursWidget";
import { guideImages } from "@/lib/tourImages";
import type { FAQItem } from "@/lib/faqData";

const faqData: FAQItem[] = [
  {
    question: "What's the best time of day for photography at Chichen Itza?",
    answer: "Early morning (sunrise) or late afternoon (golden hour) offer the best light and fewest crowds. Midday sun can create harsh shadows.",
    category: "photography",
  },
  {
    question: "Are tripods allowed at Chichen Itza?",
    answer: "Small, handheld tripods are generally permitted, but large professional tripods may require a permit. Check with site officials for current regulations.",
    category: "photography",
  },
  {
    question: "What camera settings are recommended for Chichen Itza?",
    answer: "Use a wide aperture (f/2.8 - f/5.6) for shallow depth of field, ISO 100-400 for low noise, and adjust shutter speed to match lighting conditions. Shoot in RAW format for maximum editing flexibility.",
    category: "photography",
  },
  {
    question: "Can I use a drone at Chichen Itza?",
    answer: "Drones are strictly prohibited at Chichen Itza without prior authorization from the Mexican government and site authorities.",
    category: "photography",
  },
  {
    question: "What are some must-capture photo spots at Chichen Itza?",
    answer: "El Castillo pyramid, the Great Ball Court, the Temple of Warriors, and the Sacred Cenote are iconic spots. Also, capture details like carvings and textures.",
    category: "photography",
  },
  {
    question: "What should I do if it rains during my visit?",
    answer: "Use the diffused light to capture vibrant colors and details. Protect your gear with a waterproof cover and seek shelter in covered areas.",
    category: "photography",
  },
  {
    question: "Are there any restrictions on photography inside the structures?",
    answer: "Climbing is prohibited on most structures, and flash photography may be restricted in certain areas to preserve the ruins.",
    category: "photography",
  },
  {
    question: "What's the best lens for photographing El Castillo?",
    answer: "A wide-angle lens (16-35mm) is ideal for capturing the full scale of El Castillo. A telephoto lens (70-200mm) can isolate details and create compression.",
    category: "photography",
  },
];

const faqDataEs: FAQItem[] = [
  { question: "¿Cuál es el mejor momento del día para fotografiar Chichén Itzá?", answer: "Temprano en la mañana (amanecer) o al final de la tarde (hora dorada) ofrecen la mejor luz y menos multitudes. El sol del mediodía puede crear sombras duras.", category: "photography" },
  { question: "¿Se permiten trípodes en Chichén Itzá?", answer: "Los trípodes pequeños generalmente están permitidos, pero los grandes profesionales pueden requerir un permiso. Consulta con los oficiales del sitio para conocer las regulaciones actuales.", category: "photography" },
  { question: "¿Qué configuraciones de cámara se recomiendan para Chichén Itzá?", answer: "Usa una apertura amplia (f/2.8 - f/5.6) para poca profundidad de campo, ISO 100-400 para bajo ruido, y ajusta la velocidad de obturación según las condiciones de luz. Dispara en formato RAW para máxima flexibilidad de edición.", category: "photography" },
  { question: "¿Puedo usar un dron en Chichén Itzá?", answer: "Los drones están estrictamente prohibidos en Chichén Itzá sin autorización previa del gobierno mexicano y las autoridades del sitio.", category: "photography" },
  { question: "¿Cuáles son los lugares imprescindibles para fotos en Chichén Itzá?", answer: "La pirámide de El Castillo, el Gran Juego de Pelota, el Templo de los Guerreros y el Cenote Sagrado son lugares icónicos. También captura detalles como tallas y texturas.", category: "photography" },
  { question: "¿Qué debo hacer si llueve durante mi visita?", answer: "Aprovecha la luz difusa para capturar colores vibrantes y detalles. Protege tu equipo con una cubierta impermeable y busca refugio en áreas cubiertas.", category: "photography" },
  { question: "¿Hay restricciones de fotografía dentro de las estructuras?", answer: "Está prohibido subir a la mayoría de las estructuras, y la fotografía con flash puede estar restringida en ciertas áreas para preservar las ruinas.", category: "photography" },
  { question: "¿Cuál es el mejor lente para fotografiar El Castillo?", answer: "Un lente gran angular (16-35mm) es ideal para capturar la escala completa de El Castillo. Un teleobjetivo (70-200mm) puede aislar detalles y crear compresión.", category: "photography" },
];

const compositionTechniques = [
  {
    label: "Rule of Thirds",
    description: "Place key elements along imaginary lines that divide the frame into thirds for balanced composition.",
  },
  {
    label: "Leading Lines",
    description: "Use natural lines (roads, walls) to draw the viewer's eye towards the subject.",
  },
  {
    label: "Symmetry",
    description: "Capture symmetrical elements (El Castillo) head-on for a sense of balance and grandeur.",
  },
  {
    label: "Framing",
    description: "Use natural frames (arches, doorways) to isolate and highlight the subject.",
  },
  {
    label: "Depth of Field",
    description: "Use shallow depth of field to isolate the subject against a blurred background.",
  },
];

const photoSpots = [
  {
    label: "El Castillo Pyramid",
    description: "Iconic step pyramid, best photographed at sunrise or sunset.",
  },
  {
    label: "Great Ball Court",
    description: "Largest ball court in Mesoamerica, capture the scale and details.",
  },
  {
    label: "Temple of Warriors",
    description: "Columns and carvings, best photographed with diffused light.",
  },
  {
    label: "Sacred Cenote",
    description: "Water-filled sinkhole, capture the mystery and depth.",
  },
  {
    label: "Carvings and Details",
    description: "Focus on intricate carvings and textures throughout the site.",
  },
];

const getMeta = (locale: "en" | "es") => {
  const isEs = locale === "es";
  return getPageMeta({
    title: isEs
      ? "Consejos de Fotografía en Chichén Itzá – Guía 2026"
      : "Chichen Itza Photography Tips – Complete Guide 2026",
    description: isEs
      ? "Consejos expertos de fotografía para Chichén Itzá. Mejores horarios, configuraciones de cámara, técnicas de composición y equipo prohibido."
      : "Expert photography tips for Chichen Itza. Best times, camera settings, composition techniques, prohibited equipment. Capture stunning photos of El Castillo.",
    canonical: "/guide/photography-tips",
    ogType: "article",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Guía" : "Guide", url: "/guide" },
        { name: isEs ? "Consejos de Fotografía" : "Photography Tips" },
      ]),
      guideSchemas["photography-tips"],
      createFAQSchema(faqData),
    ],
  });
};

const PhotographyTipsPage = () => {
  const { locale, isEs } = useLocale();
  const meta = getMeta(locale);
  const breadcrumbs = [
    { label: isEs ? "Guía" : "Guide", href: "/guide" },
    { label: isEs ? "Consejos de Fotografía" : "Photography Tips" },
  ];

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16 overflow-hidden">
        <img
          src={guideImages["photography-tips"]}
          alt="Photographer capturing El Castillo pyramid at Chichen Itza during golden hour"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          loading="eager"
        />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {isEs
                ? "Consejos de Fotografía en Chichén Itzá: Guía Completa"
                : "Chichen Itza Photography Tips: Complete Guide"}
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              {isEs
                ? "Consejos expertos para capturar fotos impresionantes de El Castillo y las ruinas antiguas — mejores horarios, configuraciones de cámara, técnicas de composición y reglas de equipo."
                : "Expert tips for capturing stunning photos of El Castillo and the ancient ruins — best times, camera settings, composition techniques, and equipment rules."}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              {isEs ? "Actualizado: Febrero 2026 • 9 min lectura • Consejos Expertos" : "Updated: February 2026 • 9 min read • Expert Tips"}
            </p>
            <Button variant="cta" size="lg" asChild>
              <LocaleLink to="/tours/sunrise-tours">
                {isEs ? "Reservar Tour Fotográfico al Amanecer" : "Book a Sunrise Photo Tour"} <ChevronRight className="h-5 w-5" />
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
              {/* Quick Tips */}
              <div>
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Consejos Rápidos de Fotografía" : "Quick Photography Tips"}
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <TipBox
                    type="tip"
                    title={isEs ? "Madruga o Quédate Hasta Tarde" : "Arrive Early or Stay Late"}
                    content={isEs ? "La mejor luz y menos multitudes son al amanecer y atardecer." : "Best light and fewest crowds are at sunrise and sunset."}
                  />
                  <TipBox
                    type="tip"
                    title={isEs ? "Usa un Lente Gran Angular" : "Use a Wide-Angle Lens"}
                    content={isEs ? "Captura la escala completa de El Castillo con un lente de 16-35mm." : "Capture the full scale of El Castillo with a 16-35mm lens."}
                  />
                  <TipBox
                    type="tip"
                    title={isEs ? "Dispara en Formato RAW" : "Shoot in RAW Format"}
                    content={isEs ? "Máxima flexibilidad de edición con archivos RAW sin comprimir." : "Maximum editing flexibility with uncompressed RAW files."}
                  />
                  <TipBox
                    type="tip"
                    title={isEs ? "Busca Detalles" : "Look for Details"}
                    content={isEs ? "Encuentra tallas intrincadas y texturas en todo el sitio." : "Find intricate carvings and textures throughout the site."}
                  />
                </div>
              </div>

              {/* Best Photo Spots */}
              <div>
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Mejores Lugares para Fotos" : "Best Photo Spots"}
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {photoSpots.map((spot) => (
                    <TipBox
                      key={spot.label}
                      type="info"
                      title={isEs ? spot.label : spot.label}
                      content={isEs ? spot.description : spot.description}
                    />
                  ))}
                </div>
              </div>

              {/* Composition Techniques */}
              <div>
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Técnicas de Composición" : "Composition Techniques"}
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {compositionTechniques.map((technique) => (
                    <TipBox
                      key={technique.label}
                      type="success"
                      title={isEs ? technique.label : technique.label}
                      content={isEs ? technique.description : technique.description}
                    />
                  ))}
                </div>
              </div>

              {/* Camera Settings */}
              <div>
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Configuraciones de Cámara" : "Camera Settings"}
                </h2>
                <ComparisonTable
                  headers={[isEs ? "Ajuste" : "Setting", isEs ? "Recomendación" : "Recommendation"]}
                  rows={[
                    {
                      label: isEs ? "Apertura" : "Aperture",
                      values: [isEs ? "f/2.8 - f/5.6" : "f/2.8 - f/5.6"],
                    },
                    {
                      label: isEs ? "ISO" : "ISO",
                      values: [isEs ? "100 - 400" : "100 - 400"],
                    },
                    {
                      label: isEs ? "Velocidad de Obturación" : "Shutter Speed",
                      values: [isEs ? "Ajustar según la luz" : "Adjust to match lighting"],
                    },
                    {
                      label: isEs ? "Balance de Blancos" : "White Balance",
                      values: [isEs ? "Luz del día o automático" : "Daylight or Auto"],
                    },
                    {
                      label: isEs ? "Modo de Enfoque" : "Focus Mode",
                      values: [isEs ? "AF-S o enfoque manual" : "AF-S or Manual Focus"],
                    },
                  ]}
                />
              </div>

              {/* Equipment Rules */}
              <div>
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Reglas de Equipo" : "Equipment Rules"}
                </h2>
                <div className="space-y-3">
                  <TipBox
                    type="warning"
                    title={isEs ? "Trípodes" : "Tripods"}
                    content={isEs ? "Los trípodes pequeños están permitidos, pero los grandes pueden requerir un permiso." : "Small tripods are allowed, but large ones may require a permit."}
                  />
                  <TipBox
                    type="warning"
                    title={isEs ? "Drones" : "Drones"}
                    content={isEs ? "Los drones están estrictamente prohibidos sin autorización." : "Drones are strictly prohibited without authorization."}
                  />
                  <TipBox
                    type="success"
                    title={isEs ? "Lentes" : "Lenses"}
                    content={isEs ? "Se recomiendan lentes gran angular y teleobjetivo." : "Wide-angle and telephoto lenses are recommended."}
                  />
                </div>
              </div>

              {/* FAQ */}
              <FAQSection faqs={isEs ? faqDataEs : faqData} title={isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"} />
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="space-y-8">
                <QuickBookingForm />
                <TrustBadges />
                <PopularToursWidget />
              </div>
            </aside>
          </div>
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
              { label: isEs ? "Tours al Amanecer" : "Sunrise Tours", href: "/tours/sunrise-tours" },
              { label: isEs ? "Qué Empacar" : "What to Pack", href: "/guide/what-to-bring" },
              { label: isEs ? "Mejor Época" : "Best Time", href: "/guide/best-time-to-visit" },
              { label: isEs ? "Historia y Datos" : "History & Facts", href: "/guide/history-and-facts" },
              { label: isEs ? "Todos los Tours" : "All Tours", href: "/tours" },
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

export default PhotographyTipsPage;
