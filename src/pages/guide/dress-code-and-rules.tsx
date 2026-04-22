import { Link } from "react-router-dom";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";
import { ChevronRight, ShieldAlert, Camera, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
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

const faqData = [
  {
    question: "Is there a dress code at Chichen Itza?",
    answer:
      "There is no strict formal dress code, but visitors should dress modestly and appropriately for a UNESCO archaeological site. Swimwear, revealing clothing, and offensive graphics are not allowed. Wear comfortable, weather-appropriate clothing. Tank tops are acceptable but avoid very revealing styles.",
  },
  {
    question: "Can you wear shorts to Chichen Itza?",
    answer:
      "Yes, shorts are perfectly acceptable and recommended for comfort in the heat. Knee-length or longer shorts are ideal. Very short shorts may draw disapproval from guards, though enforcement is inconsistent.",
  },
  {
    question: "Can you climb the pyramids at Chichen Itza?",
    answer:
      "No, climbing El Castillo and other structures has been permanently prohibited since 2006. This protects the ancient stones from erosion and ensures safety after a tourist death in 2006. Violating this rule can result in immediate removal and potential fines.",
  },
  {
    question: "Are backpacks allowed at Chichen Itza?",
    answer:
      "Yes, small to medium backpacks are allowed and recommended for carrying water, sunscreen, and essentials. Large hiking backpacks (50L+) may be restricted. All bags are subject to security inspection at entrance.",
  },
  {
    question: "Can you touch the ruins at Chichen Itza?",
    answer:
      "No, touching the ruins is strictly prohibited. The oils from human hands damage the ancient limestone and deteriorate carved details. Guards monitor the site and will warn or remove visitors who touch structures.",
  },
  {
    question: "What items are prohibited at Chichen Itza?",
    answer:
      "Prohibited items include: tripods, monopods, selfie sticks, drones, large backpacks, weapons, glass bottles, balloons, spray paint/markers, pets (except service animals), and professional video equipment without permits. Security confiscates prohibited items with no retrieval.",
  },
];

const faqDataEs = [
  { question: "¿Hay un código de vestimenta en Chichén Itzá?", answer: "No hay un código de vestimenta estricto, pero los visitantes deben vestir de manera modesta y apropiada para un sitio arqueológico UNESCO. No se permite ropa de baño, ropa reveladora ni gráficos ofensivos. Usa ropa cómoda y apropiada para el clima." },
  { question: "¿Se pueden usar pantalones cortos en Chichén Itzá?", answer: "Sí, los pantalones cortos son perfectamente aceptables y recomendados para la comodidad con el calor. Los que llegan a la rodilla o más largos son ideales." },
  { question: "¿Se puede subir a las pirámides de Chichén Itzá?", answer: "No, subir a El Castillo y otras estructuras está permanentemente prohibido desde 2006. Esto protege las piedras antiguas de la erosión y asegura la seguridad después de la muerte de un turista en 2006. Violar esta regla puede resultar en expulsión inmediata y posibles multas." },
  { question: "¿Se permiten mochilas en Chichén Itzá?", answer: "Sí, las mochilas pequeñas a medianas están permitidas y recomendadas para llevar agua, protector solar y elementos esenciales. Las mochilas grandes de senderismo (50L+) pueden estar restringidas." },
  { question: "¿Se pueden tocar las ruinas de Chichén Itzá?", answer: "No, tocar las ruinas está estrictamente prohibido. Los aceites de las manos humanas dañan la piedra caliza antigua y deterioran los detalles tallados. Los guardias monitorean el sitio activamente." },
  { question: "¿Qué artículos están prohibidos en Chichén Itzá?", answer: "Los artículos prohibidos incluyen: trípodes, monópodes, palos selfie, drones, mochilas grandes, armas, botellas de vidrio, globos, pintura en aerosol, mascotas (excepto animales de servicio) y equipo profesional de video sin permisos." },
];

const getMeta = (locale: "en" | "es") => {
  const isEs = locale === "es";
  return getPageMeta({
    title: isEs
      ? "Código de Vestimenta y Reglas de Chichén Itzá – Guía 2026"
      : "Chichen Itza Dress Code & Rules – Visitor Guide 2026",
    description: isEs
      ? "Guía completa del código de vestimenta, reglas para visitantes, artículos prohibidos y etiqueta cultural en Chichén Itzá. Qué vestir y qué no llevar."
      : "Complete guide to Chichen Itza dress code, visitor rules, prohibited items, and cultural etiquette. Know what to wear and what not to bring before you visit.",
    canonical: "/guide/dress-code-and-rules",
    ogType: "article",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Guía" : "Guide", url: "/guide" },
        { name: isEs ? "Código de Vestimenta" : "Dress Code & Rules" },
      ]),
      guideSchemas["dress-code-and-rules"],
      createFAQSchema(faqData),
    ],
  });
};

const DressCodePage = () => {
  const { locale, isEs } = useLocale();
  const meta = getMeta(locale);
  const breadcrumbs = [
    { label: isEs ? "Guía" : "Guide", href: "/guide" },
    { label: isEs ? "Código de Vestimenta" : "Dress Code & Rules" },
  ];

  const prohibitedGroups = [
    { category: isEs ? "Fotografía" : "Photography", items: isEs ? ["Trípodes", "Monópodes", "Palos selfie", "Drones", "Flashes externos"] : ["Tripods", "Monopods", "Selfie sticks", "Drones", "External flashes"], icon: "📷" },
    { category: isEs ? "Seguridad" : "Safety", items: isEs ? ["Armas", "Cuchillos", "Objetos punzantes", "Fuegos artificiales", "Materiales inflamables"] : ["Weapons", "Knives", "Sharp objects", "Fireworks", "Flammable materials"], icon: "⚠️" },
    { category: isEs ? "Preservación" : "Preservation", items: isEs ? ["Pintura en aerosol", "Marcadores", "Gis", "Calcomanías", "Cinceles/herramientas"] : ["Spray paint", "Markers", "Chalk", "Stickers", "Chisels/tools"], icon: "🎨" },
    { category: isEs ? "Reglas del Sitio" : "Site Rules", items: isEs ? ["Botellas de vidrio", "Alcohol", "Drogas ilegales", "Hieleras grandes", "Globos"] : ["Glass bottles", "Alcohol", "Illegal drugs", "Large coolers", "Balloons"], icon: "🚫" },
    { category: isEs ? "Animales" : "Animals", items: isEs ? ["Mascotas (excepto perros de servicio)", "Animales de apoyo emocional", "Cualquier otro animal"] : ["Pets (except service dogs)", "Emotional support animals", "Any other animals"], icon: "🐕" },
    { category: isEs ? "Otros" : "Other", items: isEs ? ["Cometas", "Juguetes voladores", "Patinetas", "Scooters", "Instrumentos musicales"] : ["Kites", "Flying toys", "Skateboards", "Scooters", "Musical instruments"], icon: "🎈" },
  ];

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16 overflow-hidden">
        <img
          src={guideImages["dress-code"]}
          alt={isEs ? "Visitantes en Chichén Itzá vestidos apropiadamente para el sitio arqueológico" : "Visitors at Chichen Itza dressed appropriately for the archaeological site"}
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          loading="eager"
          fetchPriority="high"
        />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {isEs
                ? "Código de Vestimenta y Reglas de Chichén Itzá: Guía Completa"
                : "Chichen Itza Dress Code & Rules: Complete Visitor Guide"}
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              {isEs
                ? "Todo lo que necesitas saber sobre qué vestir, artículos prohibidos, regulaciones del sitio y etiqueta cultural en este Patrimonio de la Humanidad de la UNESCO."
                : "Everything you need to know about what to wear, what's prohibited, site regulations, and cultural etiquette at this UNESCO World Heritage Site."}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              {isEs ? "Actualizado: abril 2026 • 8 min lectura" : "Updated: April 2026 • 8 min read"}
            </p>
            <Button variant="cta" size="lg" asChild>
              <LocaleLink to="/tours">
                {isEs ? "Reservar un Tour Guiado" : "Book a Guided Tour"} <ChevronRight className="h-5 w-5" />
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
              {/* Quick Summary */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 lg:p-8">
                <h2 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-primary" />
                  {isEs ? "Resumen Rápido: Las Reglas Esenciales" : "Quick Summary: The Essential Rules"}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-success mb-2">{isEs ? "✓ SÍ:" : "✓ DO:"}</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {(isEs ? [
                        "Usa ropa modesta y cómoda",
                        "Lleva protección solar (sombrero, bloqueador)",
                        "Mantente en los caminos designados",
                        "Respeta el significado cultural",
                        "Sigue las instrucciones del guía",
                      ] : [
                        "Wear modest, comfortable clothing",
                        "Bring sun protection (hat, sunscreen)",
                        "Stay on designated paths",
                        "Respect cultural significance",
                        "Follow guide instructions",
                      ]).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-destructive mb-2">{isEs ? "✗ NO:" : "✗ DON'T:"}</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {(isEs ? [
                        "Subir o tocar las ruinas",
                        "Llevar trípodes o palos selfie",
                        "Usar ropa de baño o ropa ofensiva",
                        "Hacer ruido excesivo",
                        "Tirar basura o dañar la propiedad",
                      ] : [
                        "Climb or touch the ruins",
                        "Bring tripods or selfie sticks",
                        "Wear swimwear or offensive clothing",
                        "Make excessive noise",
                        "Litter or damage property",
                      ]).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dress Code */}
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-2">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                  {isEs ? "Código de Vestimenta: Qué Vestir" : "Dress Code: What to Wear"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {isEs
                    ? "Aunque Chichén Itzá no aplica un código de vestimenta estricto como los sitios religiosos, los visitantes deben vestir respetuosamente para este Patrimonio de la Humanidad de la UNESCO y sitio sagrado maya. La ropa práctica para el calor y la protección solar es esencial."
                    : "While Chichen Itza doesn't enforce a strict dress code like religious sites, visitors should dress respectfully for this UNESCO World Heritage Site and sacred Mayan location. Practical clothing for heat and sun protection is essential."}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Appropriate */}
                  <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <h3 className="font-heading font-semibold text-base">{isEs ? "✓ Ropa Apropiada" : "✓ Appropriate Clothing"}</h3>
                    </div>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-medium mb-1">{isEs ? "Para Hombres:" : "For Men:"}</p>
                        <ul className="text-muted-foreground space-y-0.5">
                          {(isEs ? [
                            "Camiseta ligera o polo",
                            "Bermudas casuales (idealmente a la rodilla)",
                            "Shorts deportivos/cargo aceptables",
                            "Zapatos cómodos para caminar",
                            "Sombrero o gorra",
                          ] : [
                            "Lightweight t-shirt or polo",
                            "Casual shorts (knee-length ideal)",
                            "Athletic/cargo shorts acceptable",
                            "Comfortable walking shoes",
                            "Sun hat or cap",
                          ]).map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-1">{isEs ? "Para Mujeres:" : "For Women:"}</p>
                        <ul className="text-muted-foreground space-y-0.5">
                          {(isEs ? [
                            "Blusa ligera o camiseta",
                            "Blusas sin mangas ok (no muy reveladoras)",
                            "Shorts, capris o pantalones ligeros",
                            "Vestido cómodo (largo práctico)",
                            "Zapatos cerrados para caminar",
                            "Sombrero o sombrero de ala ancha",
                          ] : [
                            "Lightweight blouse or t-shirt",
                            "Tank tops okay (not too revealing)",
                            "Shorts, capris, or light pants",
                            "Comfortable sundress (practical length)",
                            "Closed-toe walking shoes",
                            "Sun hat or wide-brim hat",
                          ]).map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Inappropriate */}
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="h-5 w-5 text-destructive" />
                      <h3 className="font-heading font-semibold text-base">{isEs ? "✗ Ropa Inapropiada" : "✗ Inappropriate Clothing"}</h3>
                    </div>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-medium mb-1">{isEs ? "NO Permitido:" : "NOT Allowed:"}</p>
                        <ul className="text-muted-foreground space-y-0.5">
                          {(isEs ? [
                            "Trajes de baño (bikinis, bermudas de natación)",
                            "Ropa transparente o de malla",
                            "Ropa con gráficos/texto ofensivo",
                            "Tops o bottoms extremadamente reveladores",
                            "Tacones altos o chanclas (imprácticos)",
                          ] : [
                            "Swimwear (bikinis, swim trunks)",
                            "See-through or mesh clothing",
                            "Clothing with offensive graphics/text",
                            "Extremely revealing tops or bottoms",
                            "High heels or flip-flops (impractical)",
                          ]).map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-1">{isEs ? "Desaconsejado:" : "Discouraged:"}</p>
                        <ul className="text-muted-foreground space-y-0.5">
                          {(isEs ? [
                            "Shorts muy cortos (a medio muslo o más)",
                            "Tops escotados o que muestren el abdomen",
                            "Blusas de tirantes delgados",
                            "Ropa con mensajes políticos",
                            "Disfraces o ropa ceremonial",
                          ] : [
                            "Very short shorts (mid-thigh or higher)",
                            "Low-cut or midriff-baring tops",
                            "Spaghetti strap tank tops",
                            "Clothing with political messages",
                            "Costumes or ceremonial dress",
                          ]).map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <TipBox type="tip" title={isEs ? "Consejo Pro" : "Pro Tip"} content={isEs ? "Usa tela de color claro que absorba la humedad. Caminarás 3-5 km con calor intenso. Los colores oscuros absorben el calor y el algodón retiene el sudor." : "Wear light-colored, moisture-wicking fabric. You'll walk 2-3 miles in intense heat. Dark colors absorb heat and cotton holds sweat."} />
                <p className="text-sm text-muted-foreground mt-3">
                  {isEs ? (
                    <>Consulta nuestra <LocaleLink to="/guide/what-to-bring" className="text-primary hover:underline">lista completa de qué llevar</LocaleLink> para recomendaciones detalladas de ropa y equipo.</>
                  ) : (
                    <>See our complete <LocaleLink to="/guide/what-to-bring" className="text-primary hover:underline">what to bring checklist</LocaleLink> for detailed clothing and gear recommendations.</>
                  )}
                </p>
              </div>

              {/* Major Rules */}
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-accent" />
                  {isEs ? "Reglas y Regulaciones Principales" : "Major Rules & Regulations"}
                </h2>

                {/* No Climbing */}
                <div className="bg-destructive/5 border-2 border-destructive/30 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        {isEs ? "#1 REGLA: NO SUBIR NI TOCAR LAS ESTRUCTURAS" : "#1 RULE: NO CLIMBING OR TOUCHING STRUCTURES"}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {isEs ? (
                          <><strong>Permanentemente prohibido desde 2006.</strong> No puedes subir a El Castillo, el Templo de los Guerreros ni ninguna otra estructura. No puedes tocar, apoyarte ni sentarte en las piedras antiguas.</>
                        ) : (
                          <><strong>Permanently prohibited since 2006.</strong> You cannot climb El Castillo, Temple of Warriors, or any other structures. You cannot touch, lean against, or sit on ancient stones.</>
                        )}
                      </p>
                      <div className="bg-destructive/10 rounded-lg p-3 mb-3">
                        <p className="text-sm font-medium">
                          {isEs
                            ? "⚠️ Consecuencias: Expulsión inmediata del sitio, multas potenciales de hasta $5,000 USD, posible arresto por violaciones severas. Los guardias monitorean activamente y aplican esta regla estrictamente."
                            : "⚠️ Consequences: Immediate removal from site, potential fines up to $5,000 USD, possible arrest for severe violations. Guards actively monitor and strictly enforce this rule."}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {isEs ? (
                          <><strong>¿Por qué?:</strong> Previene daños por erosión, preserva tallas antiguas, asegura la seguridad de los visitantes (un turista murió al caer de El Castillo en 2006).</>
                        ) : (
                          <><strong>Why:</strong> Prevents erosion damage, preserves ancient carvings, ensures visitor safety (a tourist died falling from El Castillo in 2006).</>
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Photography Rules */}
                <div className="bg-card rounded-xl border border-border p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Camera className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold text-lg">{isEs ? "Reglas de Fotografía y Equipo" : "Photography & Equipment Rules"}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {isEs ? (
                      <>Para consejos detallados de cámara y técnicas de composición, consulta nuestros <LocaleLink to="/guide/photography-tips" className="text-primary hover:underline">consejos de fotografía en Chichén Itzá</LocaleLink>. Las cámaras profesionales requieren una <LocaleLink to="/guide/entrance-fees" className="text-primary hover:underline">tarifa de permiso de $45</LocaleLink>.</>
                    ) : (
                      <>For detailed camera advice and composition techniques, see our <LocaleLink to="/guide/photography-tips" className="text-primary hover:underline">Chichen Itza photography tips</LocaleLink>. Professional cameras require a <LocaleLink to="/guide/entrance-fees" className="text-primary hover:underline">$45 permit fee</LocaleLink>.</>
                    )}
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-success mb-2">{isEs ? "✓ PERMITIDO:" : "✓ ALLOWED:"}</p>
                      <ul className="text-muted-foreground space-y-0.5">
                        {(isEs ? [
                          "Smartphones (fotos ilimitadas)",
                          "Cámaras compactas",
                          "GoPros y cámaras de acción",
                          "Fotografía para uso personal",
                        ] : [
                          "Smartphones (unlimited photos)",
                          "Compact point-and-shoot cameras",
                          "GoPros and action cameras",
                          "Photography for personal use",
                        ]).map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-accent mb-2">{isEs ? "⚠️ REQUIERE PERMISO ($45 USD):" : "⚠️ REQUIRES PERMIT ($45 USD):"}</p>
                      <ul className="text-muted-foreground space-y-0.5">
                        {(isEs ? [
                          "Cámaras DSLR (lentes desmontables)",
                          "Cámaras sin espejo",
                          "Equipo de cámara profesional",
                        ] : [
                          "DSLR cameras (detachable lenses)",
                          "Mirrorless cameras",
                          "Professional camera equipment",
                        ]).map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-destructive mb-2">{isEs ? "✗ ESTRICTAMENTE PROHIBIDO:" : "✗ STRICTLY PROHIBITED:"}</p>
                      <ul className="text-muted-foreground space-y-0.5">
                        {(isEs ? [
                          "Trípodes, monópodes (confiscados)",
                          "Palos selfie (confiscados)",
                          "Drones (confiscados + acción legal)",
                          "Flashes externos/estroboscópicos",
                          "Video comercial sin permisos",
                        ] : [
                          "Tripods, monopods (confiscated)",
                          "Selfie sticks (confiscated)",
                          "Drones (confiscated + legal)",
                          "External flashes/strobes",
                          "Commercial video without permits",
                        ]).map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Behavioral Rules */}
                <div className="bg-card rounded-xl border border-border p-6 mb-6">
                  <h3 className="font-heading font-semibold text-lg mb-4">{isEs ? "Pautas de Comportamiento" : "Behavioral Guidelines"}</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium mb-2">{isEs ? "Ruido y Conducta:" : "Noise & Conduct:"}</p>
                      <ul className="text-muted-foreground space-y-0.5">
                        {(isEs ? [
                          "Mantén las voces a un nivel moderado",
                          "No grites ni pongas música fuerte",
                          "No interrumpas a otros grupos de tour",
                          "Respeta los momentos de silencio",
                        ] : [
                          "Keep voices at moderate level",
                          "No shouting or loud music",
                          "Don't disrupt other tour groups",
                          "Respect moments of silence",
                        ]).map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">{isEs ? "Etiqueta de Grupo:" : "Group Etiquette:"}</p>
                      <ul className="text-muted-foreground space-y-0.5">
                        {(isEs ? [
                          "Quédate con tu grupo de tour",
                          "No bloquees los caminos para fotos",
                          "Sé considerado con las fotos de otros",
                          "Sigue las instrucciones del guía",
                        ] : [
                          "Stay with your tour group",
                          "Don't block pathways for photos",
                          "Be mindful of others' photos",
                          "Follow guide instructions",
                        ]).map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Path Rules */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-semibold text-lg mb-4">{isEs ? "Restricciones de Caminos y Acceso" : "Path & Access Restrictions"}</h3>
                  <ul className="space-y-2 text-sm">
                    {(isEs ? [
                      "Mantente en los caminos designados — las áreas acordonadas están estrictamente prohibidas",
                      "No entres en zonas arqueológicas restringidas (claramente marcadas)",
                      "Algunas cámaras interiores están cerradas al público — respeta las barreras",
                      "No camines sobre el pasto o vegetación a menos que el camino lo cruce",
                      "Las sillas de ruedas tienen acceso a la plaza principal pero no a todas las estructuras",
                    ] : [
                      "Stay on designated pathways — roped-off areas are strictly prohibited",
                      "Don't enter restricted archaeological zones (clearly marked)",
                      "Some interior chambers are closed to public — respect barriers",
                      "Don't walk on grass or vegetation unless path crosses it",
                      "Wheelchairs have access to main plaza but not all structures",
                    ]).map((rule, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Prohibited Items */}
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
                  {isEs ? "Lista Completa de Artículos Prohibidos" : "Complete List of Prohibited Items"}
                </h2>

                <div className="mb-6">
                  <TipBox type="warning" title={isEs ? "CRÍTICO: Los Artículos Serán Confiscados" : "CRITICAL: Items Will Be Confiscated"} content={isEs ? "La seguridad inspecciona minuciosamente todos los bolsos en la entrada. Los artículos prohibidos son confiscados SIN opción de recuperación ni almacenamiento. Perderás los artículos permanentemente o tendrás que regresarlos a tu vehículo/hotel (retrasando a tu grupo)." : "Security thoroughly inspects all bags at entrance. Prohibited items are confiscated with NO retrieval or storage options. You will either forfeit items permanently or return them to your vehicle/hotel (delaying your group)."} />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {prohibitedGroups.map((group, index) => (
                    <div key={index} className="bg-card rounded-xl border border-border p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">{group.icon}</span>
                        <h3 className="font-heading font-semibold text-sm">{group.category}</h3>
                      </div>
                      <ul className="space-y-1">
                        {group.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <XCircle className="h-3.5 w-3.5 text-destructive flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cultural Respect */}
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
                  {isEs ? "Respeto Cultural y Etiqueta" : "Cultural Respect & Etiquette"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {isEs ? (
                    <>Chichén Itzá es un sitio sagrado para la cultura maya y Patrimonio de la Humanidad de la UNESCO. Aprende sobre la <LocaleLink to="/guide/history-and-facts" className="text-primary hover:underline">fascinante historia detrás de las ruinas</LocaleLink> para profundizar tu apreciación. Más allá de las reglas formales, el comportamiento respetuoso honra tanto a la civilización antigua como a los descendientes mayas modernos.</>
                  ) : (
                    <>Chichen Itza is a sacred site for Maya culture and a UNESCO World Heritage Site. Learn about the <LocaleLink to="/guide/history-and-facts" className="text-primary hover:underline">fascinating history behind the ruins</LocaleLink> to deepen your appreciation. Beyond formal rules, respectful behavior honors both the ancient civilization and modern Maya descendants.</>
                  )}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                    <p className="font-semibold text-success mb-3">{isEs ? "✓ Comportamiento Respetuoso:" : "✓ Respectful Behavior:"}</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {(isEs ? [
                        "Trata el sitio como tratarías una catedral o museo",
                        "Escucha atentamente el contexto histórico del guía",
                        "Reconoce el significado espiritual del sitio",
                        "Sé consciente de la conexión del pueblo maya moderno",
                        "Compra artesanías auténticas de artesanos locales",
                        "Aprende frases básicas en español (\"gracias\", \"permiso\")",
                        "Pide permiso antes de fotografiar vendedores",
                      ] : [
                        "Treat site as you would a cathedral or museum",
                        "Listen attentively to guide's historical context",
                        "Acknowledge site's spiritual significance",
                        "Be mindful of modern Maya people's connection",
                        "Purchase authentic handicrafts from local artisans",
                        "Learn basic Spanish phrases (\"gracias,\" \"permiso\")",
                        "Ask permission before photographing vendors",
                      ]).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                    <p className="font-semibold text-destructive mb-3">{isEs ? "✗ Comportamiento Irrespetuoso:" : "✗ Disrespectful Behavior:"}</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {(isEs ? [
                        "Burlarse de las creencias o costumbres mayas",
                        "Posar irrespetuosamente con las estructuras",
                        "Tirar basura o dañar la propiedad",
                        "Tratar a los vendedores con desdén",
                        "Realizar ceremonias/rituales no autorizados",
                        "Tomar fotos con flash durante eventos especiales",
                        "Asumir que todos los vendedores son \"estafadores\"",
                      ] : [
                        "Making fun of Maya beliefs or customs",
                        "Posing disrespectfully with structures",
                        "Littering or defacing property",
                        "Treating vendors dismissively",
                        "Performing unauthorized ceremonies/rituals",
                        "Taking flash photos during special events",
                        "Assuming all vendors are \"scammers\"",
                      ]).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <TipBox type="info" title={isEs ? "Contexto Cultural" : "Cultural Context"} content={isEs ? "Más de 6 millones de descendientes mayas viven en México y Centroamérica hoy. Chichén Itzá sigue siendo culturalmente significativo para estas comunidades. Tu respeto como visitante ayuda a preservar tanto el sitio físico como su patrimonio vivo." : "Over 6 million Maya descendants live across Mexico and Central America today. Chichen Itza remains culturally significant to these communities. Your respect as a visitor helps preserve both the physical site and its living heritage."} />

                <p className="text-sm text-muted-foreground mt-3">
                  {isEs ? (
                    <>Explora cómo Chichén Itzá <LocaleLink to="/guide/vs-other-ruins" className="text-primary hover:underline">se compara con otras ruinas mayas</LocaleLink>, o consulta nuestros <LocaleLink to="/tours" className="text-primary hover:underline">paquetes de tours guiados</LocaleLink> dirigidos por expertos culturalmente conocedores.</>
                  ) : (
                    <>Explore how Chichen Itza <LocaleLink to="/guide/vs-other-ruins" className="text-primary hover:underline">compares to other Mayan ruins</LocaleLink>, or browse our <LocaleLink to="/tours" className="text-primary hover:underline">guided tour packages</LocaleLink> led by culturally knowledgeable experts.</>
                  )}
                </p>
              </div>

              {/* Accessibility */}
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                  {isEs ? "Accesibilidad y Consideraciones Especiales" : "Accessibility & Special Considerations"}
                </h2>

                <div className="space-y-4">
                  <div className="bg-card rounded-xl border border-border p-5">
                    <h3 className="font-heading font-semibold text-base mb-2">{isEs ? "♿ Accesibilidad para Sillas de Ruedas" : "♿ Wheelchair Accessibility"}</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {(isEs ? [
                        "La plaza principal y los caminos están pavimentados y son accesibles en silla de ruedas",
                        "Préstamo gratuito de sillas de ruedas en la entrada (cantidad limitada)",
                        "Nadie puede subir a muchas estructuras (escaleras prohibidas)",
                        "Baños accesibles disponibles cerca de la entrada",
                        "Algunas áreas de descanso con sombra tienen asientos accesibles",
                      ] : [
                        "Main plaza and pathways are paved and wheelchair-accessible",
                        "Free wheelchair rentals available at entrance (limited quantity)",
                        "Many structures cannot be climbed by anyone (stairs prohibited)",
                        "Accessible bathrooms available near entrance",
                        "Some shaded rest areas have accessible seating",
                      ]).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card rounded-xl border border-border p-5">
                    <h3 className="font-heading font-semibold text-base mb-2">{isEs ? "🐕‍🦺 Animales de Servicio" : "🐕‍🦺 Service Animals"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {isEs
                        ? "Los perros de servicio certificados están permitidos. Los animales de apoyo emocional NO están permitidos (la ley mexicana distingue entre animales de servicio y de apoyo emocional). Lleva la certificación de tu animal de servicio y asegúrate de que tu perro pueda manejar el calor."
                        : "Certified service dogs are permitted. Emotional support animals are NOT allowed (Mexican law distinguishes between service and ESA animals). Bring service animal certification and ensure your dog can handle heat."}
                    </p>
                  </div>

                  <div className="bg-card rounded-xl border border-border p-5">
                    <h3 className="font-heading font-semibold text-base mb-2">{isEs ? "🤰 Visitantes Embarazadas" : "🤰 Pregnant Visitors"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {isEs
                        ? "Chichén Itzá es seguro para mujeres embarazadas. Toma descansos frecuentes a la sombra, mantente hidratada (3+ litros de agua), usa zapatos cómodos y evita el calor del mediodía. Informa a tu guía para que pueda ajustar el ritmo. Hay sillas de ruedas disponibles si las necesitas."
                        : "Chichen Itza is safe for pregnant women. Take frequent rest breaks in shade, stay hydrated (3+ liters water), wear comfortable shoes, and avoid midday heat. Inform your guide so they can adjust pace. Wheelchairs available if needed."}
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <FAQSection title={isEs ? "Preguntas Frecuentes sobre Código de Vestimenta y Reglas" : "Dress Code & Rules FAQ"} faqs={isEs ? faqDataEs : faqData} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <QuickBookingForm />
              <TrustBadges />

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h3 className="font-heading font-semibold text-base mb-3">{isEs ? "📋 Lista de Verificación:" : "📋 Checklist:"}</h3>
                <ul className="space-y-2">
                  {(isEs ? [
                    "Ropa modesta y cómoda",
                    "Zapatos cerrados para caminar",
                    "Sombrero y bloqueador solar",
                    "Sin trípodes ni palos selfie",
                    "Efectivo para souvenirs",
                    "Respeta el significado cultural",
                  ] : [
                    "Modest, comfortable clothing",
                    "Closed-toe walking shoes",
                    "Sun hat & sunscreen",
                    "No tripods or selfie sticks",
                    "Cash for souvenirs",
                    "Respect cultural significance",
                  ]).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <PopularToursWidget />

              <div className="bg-card rounded-lg border border-border p-5">
                <h3 className="font-heading font-semibold text-base mb-3">{isEs ? "Más Guías de Planificación" : "More Planning Guides"}</h3>
                <ul className="space-y-2">
                  <li><LocaleLink to="/guide/what-to-bring" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ {isEs ? "Qué Llevar" : "What to Bring"}</LocaleLink></li>
                  <li><LocaleLink to="/guide/entrance-fees" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ {isEs ? "Precios de Entrada" : "Entrance Fees"}</LocaleLink></li>
                  <li><LocaleLink to="/guide/history-and-facts" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ {isEs ? "Historia y Datos" : "History & Facts"}</LocaleLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Related Links */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">{isEs ? "Guías Relacionadas" : "Related Guides"}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {(isEs ? [
              { label: "Qué Llevar", href: "/guide/what-to-bring" },
              { label: "Precios de Entrada", href: "/guide/entrance-fees" },
              { label: "Consejos de Fotografía", href: "/guide/photography-tips" },
              { label: "Cómo Llegar", href: "/guide/how-to-get-there" },
              { label: "Mejor Época para Visitar", href: "/guide/best-time-to-visit" },
              { label: "Historia y Datos", href: "/guide/history-and-facts" },
              { label: "Todos los Tours", href: "/tours" },
              { label: "Preguntas Frecuentes", href: "/practical/faq" },
            ] : [
              { label: "What to Bring", href: "/guide/what-to-bring" },
              { label: "Entrance Fees", href: "/guide/entrance-fees" },
              { label: "Photography Tips", href: "/guide/photography-tips" },
              { label: "How to Get There", href: "/guide/how-to-get-there" },
              { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
              { label: "History & Facts", href: "/guide/history-and-facts" },
              { label: "All Tours", href: "/tours" },
              { label: "FAQ", href: "/practical/faq" },
            ]).map((link) => (
              <LocaleLink key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label} →
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DressCodePage;
