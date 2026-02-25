import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, Clock, Camera, DollarSign, ShieldAlert, MapPin, Sun, Backpack, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import { guideImages } from "@/lib/tourImages";
import { useLocale } from "@/lib/i18n/useLocale";
import LocaleLink from "@/components/LocaleLink";

const guidesEn = [
  {
    title: "Best Time to Visit Chichen Itza",
    description: "Month-by-month breakdown of weather, crowds, prices, and equinox events. Find the perfect time for your visit.",
    href: "/guide/best-time-to-visit",
    icon: Sun,
    readTime: "10 min",
    imageKey: "best-time-to-visit" as const,
  },
  {
    title: "What to Bring to Chichen Itza",
    description: "Essential packing list including clothing, sun protection, water, and prohibited items you should leave behind.",
    href: "/guide/what-to-bring",
    icon: Backpack,
    readTime: "8 min",
    imageKey: "what-to-bring" as const,
  },
  {
    title: "Chichen Itza History & Facts",
    description: "1,400 years of Mayan history, El Castillo's astronomical secrets, and 25 amazing facts about this ancient wonder.",
    href: "/guide/history-and-facts",
    icon: Landmark,
    readTime: "10 min",
    imageKey: "history-and-facts" as const,
  },
  {
    title: "How to Get to Chichen Itza",
    description: "Complete transport guide from Cancun, Playa del Carmen, Tulum, and Merida. Tours vs rental cars vs buses compared.",
    href: "/guide/how-to-get-there",
    icon: MapPin,
    readTime: "8 min",
    imageKey: "how-to-get-there" as const,
  },
  {
    title: "Entrance Fees & Pricing 2026",
    description: "Updated ticket costs, payment methods, discounts, camera permits, and detailed tour vs DIY cost comparisons.",
    href: "/guide/entrance-fees",
    icon: DollarSign,
    readTime: "8 min",
    imageKey: "entrance-fees" as const,
  },
  {
    title: "Photography Tips",
    description: "Expert tips for capturing stunning photos — best times, camera settings, composition techniques, and equipment rules.",
    href: "/guide/photography-tips",
    icon: Camera,
    readTime: "9 min",
    imageKey: "photography-tips" as const,
  },
  {
    title: "Dress Code & Visitor Rules",
    description: "What to wear, prohibited items, site regulations, and cultural etiquette for this UNESCO World Heritage Site.",
    href: "/guide/dress-code-and-rules",
    icon: ShieldAlert,
    readTime: "8 min",
    imageKey: "dress-code" as const,
  },
  {
    title: "Chichen Itza vs Other Ruins",
    description: "Compare Chichen Itza to Tulum, Coba, Ek Balam, and Uxmal. Find which Mayan ruins match your travel style.",
    href: "/guide/vs-other-ruins",
    icon: BookOpen,
    readTime: "10 min",
    imageKey: "best-time-to-visit" as const,
  },
];

const guidesEs = [
  {
    title: "Mejor Época para Visitar Chichén Itzá",
    description: "Desglose mes a mes del clima, multitudes, precios y eventos del equinoccio. Encuentra el momento perfecto para tu visita.",
    href: "/guide/best-time-to-visit",
    icon: Sun,
    readTime: "10 min",
    imageKey: "best-time-to-visit" as const,
  },
  {
    title: "Qué Llevar a Chichén Itzá",
    description: "Lista esencial de equipaje: ropa, protección solar, agua y artículos prohibidos que debes dejar en el hotel.",
    href: "/guide/what-to-bring",
    icon: Backpack,
    readTime: "8 min",
    imageKey: "what-to-bring" as const,
  },
  {
    title: "Historia y Datos de Chichén Itzá",
    description: "1,400 años de historia maya, secretos astronómicos de El Castillo y 25 datos fascinantes sobre esta maravilla antigua.",
    href: "/guide/history-and-facts",
    icon: Landmark,
    readTime: "10 min",
    imageKey: "history-and-facts" as const,
  },
  {
    title: "Cómo Llegar a Chichén Itzá",
    description: "Guía completa de transporte desde Cancún, Playa del Carmen, Tulum y Mérida. Tours vs auto vs autobús comparados.",
    href: "/guide/how-to-get-there",
    icon: MapPin,
    readTime: "8 min",
    imageKey: "how-to-get-there" as const,
  },
  {
    title: "Precios de Entrada 2026",
    description: "Costos actualizados de boletos, métodos de pago, descuentos, permisos de cámara y comparación detallada tour vs DIY.",
    href: "/guide/entrance-fees",
    icon: DollarSign,
    readTime: "8 min",
    imageKey: "entrance-fees" as const,
  },
  {
    title: "Consejos de Fotografía",
    description: "Consejos expertos para capturar fotos increíbles — mejores horarios, ajustes de cámara, técnicas de composición y reglas de equipo.",
    href: "/guide/photography-tips",
    icon: Camera,
    readTime: "9 min",
    imageKey: "photography-tips" as const,
  },
  {
    title: "Código de Vestimenta y Reglas",
    description: "Qué vestir, artículos prohibidos, regulaciones del sitio y etiqueta cultural para este Patrimonio de la Humanidad UNESCO.",
    href: "/guide/dress-code-and-rules",
    icon: ShieldAlert,
    readTime: "8 min",
    imageKey: "dress-code" as const,
  },
  {
    title: "Chichén Itzá vs Otras Ruinas",
    description: "Compara Chichén Itzá con Tulum, Cobá, Ek Balam y Uxmal. Descubre qué ruinas mayas se adaptan a tu estilo de viaje.",
    href: "/guide/vs-other-ruins",
    icon: BookOpen,
    readTime: "10 min",
    imageKey: "best-time-to-visit" as const,
  },
];

const GuideIndexPage = () => {
  const { isEs, locale } = useLocale();
  const guides = isEs ? guidesEs : guidesEn;

  const meta = getPageMeta({
    title: isEs
      ? "Guía del Visitante de Chichén Itzá – Todo lo que Necesitas Saber"
      : "Chichen Itza Visitor Guide – Everything You Need to Know",
    description: isEs
      ? "Guía completa de Chichén Itzá: mejor época, qué llevar, precios, cómo llegar, consejos de fotografía, código de vestimenta, historia y más."
      : "Complete Chichen Itza visitor guide: best time to visit, what to bring, entrance fees, how to get there, photography tips, dress code, history, and more.",
    canonical: isEs ? "/es/guia" : "/guide",
    locale,
    jsonLd: createBreadcrumbSchema([
      { name: isEs ? "Inicio" : "Home", url: "/" },
      { name: isEs ? "Guía del Visitante" : "Visitor Guide" },
    ]),
  });

  const breadcrumbs = [{ label: isEs ? "Guía del Visitante" : "Visitor Guide" }];

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {isEs ? "Guía del Visitante de Chichén Itzá" : "Chichen Itza Visitor Guide"}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {isEs
                ? "Todo lo que necesitas para planificar la visita perfecta — desde qué vestir y cuándo ir, hasta precios de entrada, opciones de transporte y consejos de fotografía."
                : "Everything you need to plan the perfect visit — from what to wear and when to go, to entrance fees, transport options, and insider photography tips."}
            </p>
            <Button variant="cta" size="lg" asChild>
              <LocaleLink to="/tours">
                {isEs ? "Ver Tours" : "Browse Tours"} <ChevronRight className="h-5 w-5" />
              </LocaleLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Guide Grid */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <LocaleLink
                  key={guide.href}
                  to={guide.href}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={guideImages[guide.imageKey]}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {guide.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <h2 className="font-heading font-semibold text-base group-hover:text-primary transition-colors">
                        {guide.title}
                      </h2>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {guide.description}
                    </p>
                  </div>
                </LocaleLink>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default GuideIndexPage;
