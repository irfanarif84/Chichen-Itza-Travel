import { Link } from "react-router-dom";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";
import {
  Sun,
  Droplet,
  Camera,
  ShieldCheck,
  ChevronRight,
  XCircle,
  CheckCircle,
  Shirt,
  CreditCard,
  Backpack,
  Footprints,
  Baby,
  Accessibility,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import FAQSection from "@/components/common/FAQ";
import QuickBookingForm from "@/components/features/booking/QuickBookingForm";
import TrustBadges from "@/components/features/booking/TrustBadges";
import PopularToursWidget from "@/components/features/tours/PopularToursWidget";
import { guideSchemas } from "@/lib/schema";
import { guideImages } from "@/lib/tourImages";
import RelatedResources from "@/components/common/RelatedResources";
import type { FAQItem } from "@/lib/faqData";

const faqData: FAQItem[] = [
  {
    question: "What is the dress code for Chichen Itza?",
    answer: "There is no strict dress code, but lightweight, breathable clothing is recommended. Wear comfortable walking shoes, a hat, and sunglasses. A swimsuit is optional if you plan to swim in a nearby cenote.",
    category: "packing",
  },
  {
    question: "Are drones allowed at Chichen Itza?",
    answer: "No, drones are strictly prohibited at Chichen Itza. Confiscation is possible. Leave your drone at home or in your hotel.",
    category: "packing",
  },
  {
    question: "Can I bring a backpack into Chichen Itza?",
    answer: "Small backpacks are allowed, but may be subject to search. Large backpacks and suitcases are not permitted. There is a storage facility near the entrance for larger items.",
    category: "packing",
  },
  {
    question: "Is sunscreen allowed at Chichen Itza?",
    answer: "Yes, but standard sunscreens are increasingly restricted to protect the ruins. Opt for reef-safe, biodegradable sunscreen to minimize environmental impact.",
    category: "packing",
  },
  {
    question: "Can I bring a professional camera and tripod?",
    answer: "Professional cameras are allowed, but tripods and other large photography equipment may require a permit. Contact INAH (National Institute of Anthropology and History) for details.",
    category: "packing",
  },
  {
    question: "Are there mosquitos at Chichen Itza?",
    answer: "Mosquitos are common, especially during the rainy season (June-October). Bring mosquito repellent to avoid bites.",
    category: "packing",
  },
  {
    question: "Can I bring food and drinks into Chichen Itza?",
    answer: "Outside food and drinks are not allowed. You can purchase refreshments inside the park, but prices are higher. Bringing an empty water bottle to refill is a good idea.",
    category: "packing",
  },
  {
    question: "Should I bring cash or credit cards?",
    answer: "Cash (Mexican pesos) is recommended for entrance fees, souvenirs, and smaller vendors. Credit cards are accepted at the main ticket counters and larger shops.",
    category: "packing",
  },
];

const faqDataEs: FAQItem[] = [
  { question: "¿Cuál es el código de vestimenta para Chichén Itzá?", answer: "No hay un código de vestimenta estricto, pero se recomienda ropa ligera y transpirable. Usa zapatos cómodos para caminar, sombrero y gafas de sol. El traje de baño es opcional si planeas nadar en un cenote cercano.", category: "packing" },
  { question: "¿Se permiten drones en Chichén Itzá?", answer: "No, los drones están estrictamente prohibidos en Chichén Itzá. Pueden ser confiscados. Deja tu dron en casa o en tu hotel.", category: "packing" },
  { question: "¿Puedo llevar una mochila a Chichén Itzá?", answer: "Las mochilas pequeñas están permitidas, pero pueden ser revisadas. Las mochilas grandes y maletas no están permitidas. Hay un servicio de almacenamiento cerca de la entrada para artículos más grandes.", category: "packing" },
  { question: "¿Se permite el protector solar en Chichén Itzá?", answer: "Sí, pero los protectores solares estándar están cada vez más restringidos para proteger las ruinas. Opta por protector solar biodegradable y seguro para arrecifes.", category: "packing" },
  { question: "¿Puedo llevar una cámara profesional y trípode?", answer: "Las cámaras profesionales están permitidas, pero los trípodes y otros equipos grandes pueden requerir un permiso. Contacta al INAH para más detalles.", category: "packing" },
  { question: "¿Hay mosquitos en Chichén Itzá?", answer: "Los mosquitos son comunes, especialmente durante la temporada de lluvias (junio-octubre). Lleva repelente de mosquitos para evitar picaduras.", category: "packing" },
  { question: "¿Puedo llevar comida y bebidas a Chichén Itzá?", answer: "No se permite comida ni bebidas del exterior. Puedes comprar refrescos dentro del parque, pero los precios son más altos. Llevar una botella de agua vacía para rellenar es buena idea.", category: "packing" },
  { question: "¿Debo llevar efectivo o tarjetas de crédito?", answer: "Se recomienda efectivo (pesos mexicanos) para las tarifas de entrada, recuerdos y vendedores pequeños. Las tarjetas de crédito se aceptan en las taquillas principales y tiendas más grandes.", category: "packing" },
];

const getMeta = (locale: "en" | "es") => {
  const isEs = locale === "es";
  return getPageMeta({
    title: isEs
      ? "Qué Llevar a Chichén Itzá – Lista de Equipaje 2026"
      : "What to Bring to Chichen Itza – Packing List 2026",
    description: isEs
      ? "Lista esencial de equipaje para Chichén Itzá. Qué llevar, qué NO llevar, consejos de ropa, equipo fotográfico y recomendaciones por temporada 2026."
      : "Essential packing list for Chichen Itza. What to bring, what NOT to bring, clothing tips, photography gear, and seasonal advice for 2026 visits.",
    canonical: "/guide/what-to-bring",
    ogType: "article",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Guía" : "Guide", url: "/guide" },
        { name: isEs ? "Qué Llevar" : "What to Bring" },
      ]),
      guideSchemas["what-to-bring"],
      createFAQSchema(faqData),
    ],
  });
};

interface PackingItem {
  name: string;
  icon: React.ComponentType<any>;
  priority: "high" | "medium" | "low";
  notes?: string;
}

interface PackingCategory {
  title: string;
  items: PackingItem[];
}

const essentialItems: PackingCategory[] = [
  {
    title: "Sun Protection",
    items: [
      { name: "Sunscreen (reef-safe)", icon: Sun, priority: "high" },
      { name: "Hat", icon: Shirt, priority: "high" },
      { name: "Sunglasses", icon: Sun, priority: "high" },
    ],
  },
  {
    title: "Hydration",
    items: [
      { name: "Water bottle (refillable)", icon: Droplet, priority: "high" },
    ],
  },
  {
    title: "Clothing",
    items: [
      { name: "Lightweight clothing", icon: Shirt, priority: "high" },
      { name: "Comfortable walking shoes", icon: Footprints, priority: "high" },
    ],
  },
  {
    title: "Gear",
    items: [
      { name: "Cash (pesos)", icon: CreditCard, priority: "high" },
      { name: "Small backpack", icon: Backpack, priority: "high" },
    ],
  },
];

const prohibitedItems: PackingItem[] = [
  { name: "Drones", icon: XCircle, priority: "high" },
  { name: "Large backpacks", icon: XCircle, priority: "medium" },
  { name: "Outside food/drinks", icon: XCircle, priority: "medium" },
  { name: "Tripods (without permit)", icon: XCircle, priority: "low" },
];

const priorityColors: { [key: string]: string } = {
  high: "text-red-500",
  medium: "text-yellow-500",
  low: "text-green-500",
};

const priorityBadgeColors: { [key: string]: string } = {
  high: "bg-red-100 text-red-500",
  medium: "bg-yellow-100 text-yellow-500",
  low: "bg-green-100 text-green-500",
};

const WhatToBringPage = () => {
  const { locale, isEs } = useLocale();
  const meta = getMeta(locale);
  const breadcrumbs = [
    { label: isEs ? "Guía" : "Guide", href: "/guide" },
    { label: isEs ? "Qué Llevar" : "What to Bring" },
  ];

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 lg:py-16 overflow-hidden">
        <img
          src={guideImages["what-to-bring"]}
          alt="Travel essentials flat lay for visiting Chichen Itza"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          loading="eager"
        />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {isEs
                ? "Qué Llevar a Chichén Itzá: Lista Completa de Equipaje 2026"
                : "What to Bring to Chichen Itza: Complete Packing List 2026"}
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              {isEs
                ? "Empaca inteligente para tu visita a una de las Nuevas Siete Maravillas. Nuestra lista esencial cubre protección solar, hidratación, ropa, equipo fotográfico, artículos prohibidos y variaciones por temporada."
                : "Pack smart for your visit to one of the New Seven Wonders. Our essential checklist covers sun protection, hydration, clothing, photography gear, prohibited items, and seasonal variations."}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>{isEs ? "Actualizado: abril 2026" : "Updated: April 2026"}</span>
              <span>•</span>
              <span>{isEs ? "10 min lectura" : "10 min read"}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild>
                <LocaleLink to="/tours">
                  {isEs ? "Reservar Tu Tour" : "Book Your Tour"} <ChevronRight className="h-5 w-5" />
                </LocaleLink>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <LocaleLink to="/guide/best-time-to-visit">{isEs ? "Mejor Época para Visitar →" : "Best Time to Visit →"}</LocaleLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10">
            {/* Main Content */}
            <div className="space-y-14">
              {/* Packing Checklist */}
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-2xl">
                  {isEs ? "Lista de Equipaje Esencial" : "Essential Packing Checklist"}
                </h2>
                <p className="text-muted-foreground">
                  {isEs
                    ? "Artículos imprescindibles para una visita cómoda y segura a Chichén Itzá, incluyendo protección solar, hidratación y ropa adecuada."
                    : "Must-have items for a comfortable and safe visit to Chichen Itza, including sun protection, hydration, and appropriate clothing."}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {essentialItems.map((category, i) => (
                    <div key={`category-${i}`} className="space-y-3">
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, j) => (
                          <li key={`item-${j}`} className="flex items-center gap-3">
                            <item.icon className="h-5 w-5" />
                            <span>{item.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prohibited Items */}
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-2xl">
                  {isEs ? "Artículos Prohibidos" : "Prohibited Items"}
                </h2>
                <p className="text-muted-foreground">
                  {isEs
                    ? "Artículos que NO debes llevar a Chichén Itzá. El incumplimiento puede resultar en la confiscación o la denegación de la entrada."
                    : "Items you should NOT bring to Chichen Itza. Non-compliance may result in confiscation or denied entry."}
                </p>
                <ul className="space-y-2">
                  {prohibitedItems.map((item, i) => (
                    <li key={`prohibited-${i}`} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-red-500" />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Seasonal Variations */}
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-2xl">
                  {isEs ? "Variaciones Estacionales" : "Seasonal Variations"}
                </h2>
                <p className="text-muted-foreground">
                  {isEs
                    ? "Consejos de equipaje adicionales basados en la época del año en que visites Chichén Itzá."
                    : "Additional packing tips based on the time of year you visit Chichen Itza."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {isEs ? "Temporada de Lluvias (Junio-Octubre)" : "Rainy Season (June-October)"}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>{isEs ? "Paraguas o impermeable ligero" : "Umbrella or lightweight raincoat"}</li>
                      <li>{isEs ? "Repelente de mosquitos" : "Mosquito repellent"}</li>
                      <li>{isEs ? "Bolsa impermeable para aparatos electrónicos" : "Waterproof bag for electronics"}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {isEs ? "Temporada Seca (Noviembre-Mayo)" : "Dry Season (November-May)"}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>{isEs ? "Sombrero de ala ancha" : "Wide-brimmed hat"}</li>
                      <li>{isEs ? "Protector solar adicional" : "Extra sunscreen"}</li>
                      <li>{isEs ? "Bálsamo labial con SPF" : "Lip balm with SPF"}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Clothing Recommendations */}
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-2xl">
                  {isEs ? "Recomendaciones de Ropa" : "Clothing Recommendations"}
                </h2>
                <p className="text-muted-foreground">
                  {isEs
                    ? "Qué ropa llevar para mantenerte cómodo y protegido del sol y el calor en Chichén Itzá."
                    : "What clothing to wear to stay comfortable and protected from the sun and heat at Chichen Itza."}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isEs ? "Tejidos ligeros y transpirables (algodón, lino)" : "Lightweight, breathable fabrics (cotton, linen)"}</li>
                  <li>{isEs ? "Colores claros para reflejar el sol" : "Light colors to reflect the sun"}</li>
                  <li>{isEs ? "Camisas de manga larga para protección solar" : "Long-sleeved shirts for sun protection"}</li>
                  <li>{isEs ? "Pantalones o faldas largas (opcional, para protección adicional)" : "Long pants or skirts (optional, for extra protection)"}</li>
                  <li>{isEs ? "Zapatos cómodos para caminar (zapatillas de deporte, sandalias de senderismo)" : "Comfortable walking shoes (sneakers, hiking sandals)"}</li>
                </ul>
              </div>

              {/* Photography Gear */}
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-2xl">
                  {isEs ? "Equipo Fotográfico" : "Photography Gear"}
                </h2>
                <p className="text-muted-foreground">
                  {isEs
                    ? "Equipo recomendado para capturar fotos impresionantes de las ruinas mayas y los alrededores."
                    : "Recommended gear for capturing stunning photos of the Mayan ruins and surrounding areas."}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isEs ? "Cámara (DSLR, sin espejo o smartphone)" : "Camera (DSLR, mirrorless, or smartphone)"}</li>
                  <li>{isEs ? "Objetivos (gran angular, teleobjetivo)" : "Lenses (wide-angle, telephoto)"}</li>
                  <li>{isEs ? "Baterías adicionales" : "Extra batteries"}</li>
                  <li>{isEs ? "Tarjetas de memoria" : "Memory cards"}</li>
                  <li>{isEs ? "Filtro polarizador (para reducir el deslumbramiento)" : "Polarizing filter (to reduce glare)"}</li>
                  <li>{isEs ? "Bolsa o mochila para cámara" : "Camera bag or backpack"}</li>
                </ul>
                <TipBox
                  type="tip"
                  title={isEs ? "Consejo:" : "Tip:"}
                  content={
                    isEs
                      ? "Considera un tour fotográfico guiado para acceder a lugares privilegiados y obtener consejos de expertos."
                      : "Consider a guided photography tour for access to prime locations and expert tips."
                  }
                />
              </div>

              {/* Special Considerations */}
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-2xl">
                  {isEs ? "Consideraciones Especiales" : "Special Considerations"}
                </h2>
                <p className="text-muted-foreground">
                  {isEs
                    ? "Artículos adicionales a considerar en función de tus necesidades y preferencias individuales."
                    : "Additional items to consider based on your individual needs and preferences."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {isEs ? "Para Familias con Niños Pequeños" : "For Families with Young Children"}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>{isEs ? "Cochecito o portabebés" : "Stroller or baby carrier"}</li>
                      <li>{isEs ? "Pañales y toallitas" : "Diapers and wipes"}</li>
                      <li>{isEs ? "Snacks y bebidas" : "Snacks and drinks"}</li>
                      <li>{isEs ? "Juguetes o libros" : "Toys or books"}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {isEs ? "Para Personas con Movilidad Reducida" : "For Individuals with Limited Mobility"}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>{isEs ? "Bastón o andador" : "Cane or walker"}</li>
                      <li>{isEs ? "Silla de ruedas (algunas zonas son accesibles)" : "Wheelchair (some areas are accessible)"}</li>
                      <li>{isEs ? "Calzado cómodo y de apoyo" : "Comfortable, supportive footwear"}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Day-Of Tips */}
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-2xl">
                  {isEs ? "Consejos para el Día de la Visita" : "Day-Of Tips"}
                </h2>
                <p className="text-muted-foreground">
                  {isEs
                    ? "Consejos rápidos para garantizar una experiencia fluida y agradable en Chichén Itzá."
                    : "Quick tips to ensure a smooth and enjoyable experience at Chichen Itza."}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isEs ? "Llega temprano para evitar las multitudes y el calor." : "Arrive early to avoid crowds and heat."}</li>
                  <li>{isEs ? "Mantente hidratado bebiendo mucha agua." : "Stay hydrated by drinking plenty of water."}</li>
                  <li>{isEs ? "Toma descansos a la sombra cuando sea necesario." : "Take breaks in the shade when needed."}</li>
                  <li>{isEs ? "Sé consciente de tu entorno y sigue las normas del sitio." : "Be aware of your surroundings and follow site rules."}</li>
                  <li>{isEs ? "Disfruta de la historia y la belleza de Chichén Itzá." : "Enjoy the history and beauty of Chichen Itza."}</li>
                </ul>
              </div>

              {/* FAQ */}
              <FAQSection faqs={isEs ? faqDataEs : faqData} title={isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"} />
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <div className="space-y-6">
                <QuickBookingForm />
                <TrustBadges />
                <PopularToursWidget />
              </div>
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
              { label: isEs ? "Cómo Llegar" : "How to Get There", href: "/guide/how-to-get-there" },
              { label: isEs ? "Historia y Datos" : "History & Facts", href: "/guide/history-and-facts" },
              { label: isEs ? "Tours al Amanecer" : "Sunrise Tours", href: "/tours/sunrise-tours" },
              { label: isEs ? "Tours Privados" : "Private Tours", href: "/tours/private-tours" },
              { label: isEs ? "Tours Combinados" : "Combo Tours", href: "/combo-tours" },
              { label: isEs ? "Tours desde Cancún" : "Tours from Cancún", href: "/tours-from/cancun" },
              { label: isEs ? "Tours desde Tulum" : "Tours from Tulum", href: "/tours-from/tulum" },
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

export default WhatToBringPage;
