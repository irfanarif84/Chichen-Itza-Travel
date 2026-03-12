import { Link } from "react-router-dom";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";
import { ChevronRight, DollarSign, Camera, AlertCircle } from "lucide-react";
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

const faqData = [
  { question: "How much is the entrance fee to Chichen Itza in 2026?", answer: "The total entrance fee is approximately 533 Mexican pesos (about $27-30 USD) per person. This includes both the federal INAH fee (185 pesos) and the Yucatan state fee (348 pesos). Children under 13 enter free. Guided tours typically include entrance fees in the package price." },
  { question: "Do guided tours include the entrance fee?", answer: "Yes, virtually all guided tours include the Chichen Itza entrance fee in the total tour price. Tours priced at $89-189 include transportation, guide, entrance fees, lunch, and often cenote visits — excellent value compared to paying separately." },
  { question: "Can I pay with credit card at Chichen Itza?", answer: "Yes, ticket booths accept major credit cards (Visa, Mastercard) as well as cash in Mexican pesos or US dollars. However, cash in pesos is recommended as it's faster, avoids processing issues, and ensures the best exchange rate." },
  { question: "Are there discounts for seniors or students?", answer: "Mexican citizens and residents with valid ID receive significant discounts. Foreign seniors and students do NOT receive discounts — the standard fee applies to all international visitors regardless of age (except children under 13 who enter free)." },
  { question: "Is there an extra fee for cameras?", answer: "No extra fee for smartphones or compact cameras. However, professional cameras with detachable lenses (DSLRs, mirrorless) require a special permit costing $45 USD paid separately at entrance." },
  { question: "What if I want to visit twice in one day?", answer: "Your entrance ticket is valid for one entry only. If you exit the site, you cannot re-enter without purchasing a new ticket. Plan to spend your entire visit (2-4 hours) in one session. There are no multi-day passes." },
];

const faqDataEs = [
  { question: "¿Cuánto cuesta la entrada a Chichén Itzá en 2026?", answer: "La tarifa total de entrada es aproximadamente 533 pesos mexicanos (unos $27-30 USD) por persona. Esto incluye la tarifa federal del INAH (185 pesos) y la tarifa estatal de Yucatán (348 pesos). Los menores de 13 años entran gratis. Los tours guiados generalmente incluyen las tarifas de entrada en el precio del paquete." },
  { question: "¿Los tours guiados incluyen la tarifa de entrada?", answer: "Sí, prácticamente todos los tours guiados incluyen la tarifa de entrada a Chichén Itzá en el precio total. Los tours de $89-189 incluyen transporte, guía, entrada, comida y frecuentemente visitas a cenotes — excelente valor comparado con pagar por separado." },
  { question: "¿Puedo pagar con tarjeta de crédito en Chichén Itzá?", answer: "Sí, las taquillas aceptan tarjetas de crédito principales (Visa, Mastercard) así como efectivo en pesos mexicanos o dólares. Sin embargo, se recomienda efectivo en pesos ya que es más rápido, evita problemas de procesamiento y asegura el mejor tipo de cambio." },
  { question: "¿Hay descuentos para personas mayores o estudiantes?", answer: "Los ciudadanos y residentes mexicanos con identificación válida reciben descuentos significativos. Los adultos mayores y estudiantes extranjeros NO reciben descuentos — la tarifa estándar aplica para todos los visitantes internacionales independientemente de la edad (excepto menores de 13 que entran gratis)." },
  { question: "¿Hay una tarifa extra por cámaras?", answer: "No hay tarifa extra por smartphones o cámaras compactas. Sin embargo, las cámaras profesionales con lentes desmontables (DSLR, sin espejo) requieren un permiso especial que cuesta $45 USD y se paga por separado en la entrada." },
  { question: "¿Qué pasa si quiero visitar dos veces en un día?", answer: "Tu boleto de entrada es válido para una sola entrada. Si sales del sitio, no puedes reingresar sin comprar un nuevo boleto. Planea pasar toda tu visita (2-4 horas) en una sola sesión. No hay pases de varios días." },
];

const getMeta = (locale: "en" | "es") => {
  const isEs = locale === "es";
  return getPageMeta({
    title: isEs ? "Precios de Entrada a Chichén Itzá 2026 – Guía Completa" : "Chichen Itza Entrance Fees 2026 – Complete Price Guide",
    description: isEs ? "Guía completa de precios de entrada a Chichén Itzá. Tarifas actualizadas 2026, métodos de pago, descuentos y costos de tours vs visita independiente." : "Complete guide to Chichen Itza entrance fees and ticket prices. Updated 2026 pricing, payment methods, discounts, and tour vs independent costs.",
    canonical: "/guide/entrance-fees",
    ogType: "article",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Guía" : "Guide", url: "/guide" },
        { name: isEs ? "Precios de Entrada" : "Entrance Fees" },
      ]),
      guideSchemas["entrance-fees"],
      createFAQSchema(faqData),
    ],
  });
};

const EntranceFeesPage = () => {
  const { locale, isEs } = useLocale();
  const meta = getMeta(locale);
  const breadcrumbs = [
    { label: isEs ? "Guía" : "Guide", href: "/guide" },
    { label: isEs ? "Precios de Entrada" : "Entrance Fees" },
  ];

  const additionalFees = [
    { item: isEs ? "Estacionamiento" : "Parking", cost: "80-100 MXN (~$5)", note: isEs ? "Si manejas tú mismo" : "If driving yourself", icon: "🚗" },
    { item: isEs ? "Alquiler de Casillero" : "Locker Rental", cost: "30-50 MXN (~$2-3)", note: isEs ? "Para guardar bolsas/objetos de valor" : "For storing bags/valuables", icon: "🔒" },
    { item: isEs ? "Tarifa de Baño" : "Bathroom Fee", cost: "5-10 MXN", note: isEs ? "Algunas instalaciones cobran una pequeña tarifa" : "Some facilities charge small fee", icon: "🚻" },
    { item: isEs ? "Guía Impresa" : "Guidebook", cost: "100-200 MXN (~$5-10)", note: isEs ? "Se vende en la entrada, varios idiomas" : "Sold at entrance, various languages", icon: "📖" },
    { item: isEs ? "Audioguía" : "Audio Guide", cost: "100 MXN (~$5)", note: isEs ? "Alquiler opcional" : "Optional rental", icon: "🎧" },
    { item: isEs ? "Agua Embotellada" : "Bottled Water", cost: "30-40 MXN (~$2)", note: isEs ? "Vendedores dentro del sitio" : "Vendors inside site", icon: "💧" },
  ];

  const savingTips = [
    { tip: isEs ? "Reserva Tours con Anticipación en Línea" : "Book Tours in Advance Online", savings: isEs ? "Ahorra 10-20%" : "Save 10-20%", description: isEs ? "Las reservas de último momento y los tours de concierge del hotel suelen cobrar recargos. Reserva directamente en línea 1-2 semanas antes para mejores precios." : "Last-minute bookings and hotel concierge tours often charge premiums. Book directly online 1-2 weeks ahead for best rates.", icon: "💻" },
    { tip: isEs ? "Visita en Temporada Baja" : "Visit During Low Season", savings: isEs ? "Ahorra 25-35%" : "Save 25-35%", description: isEs ? "Los tours de mayo a octubre son 25-35% más baratos que en temporada alta (dic-abr). Las tarifas de entrada son iguales, pero los paquetes de tours bajan significativamente." : "May-October tours are 25-35% cheaper than peak season (Dec-Apr). Entrance fees are the same, but tour packages drop significantly.", icon: "📅" },
    { tip: isEs ? "Lleva Efectivo en Pesos" : "Bring Cash in Pesos", savings: isEs ? "Mejor Tipo de Cambio" : "Better Exchange Rate", description: isEs ? "Pagar en USD en la entrada da malos tipos de cambio. Cambia moneda antes o retira pesos de cajeros automáticos." : "Paying in USD at the entrance gives poor exchange rates. Exchange currency beforehand or withdraw pesos from ATMs.", icon: "💵" },
    { tip: isEs ? "Grupo Pequeño vs Privado" : "Small Group vs Private", savings: isEs ? "Ahorra $80-150" : "Save $80-150", description: isEs ? "Los tours en grupo pequeño ($109) dan casi la misma experiencia que los tours privados ($189+) para viajeros solos o parejas." : "Small group tours ($109) give nearly the same experience as private tours ($189+) for solo/couple travelers.", icon: "👥" },
    { tip: isEs ? "Lleva Tus Propios Snacks y Agua" : "Pack Your Own Snacks & Water", savings: isEs ? "Ahorra $10-15" : "Save $10-15", description: isEs ? "Los vendedores dentro cobran precios turísticos. Lleva agua embotellada y barras energéticas de tiendas de conveniencia." : "Vendors inside charge tourist prices. Bring bottled water and energy bars from convenience stores.", icon: "🎒" },
    { tip: isEs ? "Evita el Permiso de Cámara Profesional" : "Skip Professional Camera Permit", savings: isEs ? "Ahorra $45" : "Save $45", description: isEs ? "Usa smartphones o cámaras compactas. Las cámaras modernas de teléfono toman excelentes fotos sin la tarifa de $45 por permiso DSLR." : "Use smartphones or compact cameras. Modern phone cameras take excellent photos without the $45 DSLR permit fee.", icon: "📱" },
  ];

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16 overflow-hidden">
        <img
          src={guideImages["entrance-fees"]}
          alt={isEs ? "Entrada y área de boletos de Chichén Itzá para visitantes" : "Chichen Itza entrance and ticket area for visitors"}
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          loading="eager"
        />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {isEs ? "Precios de Entrada a Chichén Itzá 2026: Guía Completa" : "Chichen Itza Entrance Fees 2026: Complete Pricing Guide"}
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              {isEs
                ? "Todo lo que necesitas saber sobre los costos de entrada, tipos de boletos, métodos de pago, descuentos y cómo se comparan los tours guiados con la visita independiente."
                : "Everything you need to know about Chichen Itza entrance costs, ticket types, payment methods, discounts, and how guided tours compare to visiting independently."}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              {isEs ? "Actualizado: Febrero 2026 • 8 min lectura" : "Updated: February 2026 • 8 min read"}
            </p>
            <Button variant="cta" size="lg" asChild>
              <LocaleLink to="/tours">
                {isEs ? "Ver Paquetes de Tours (Entrada Incluida)" : "View Tour Packages (Fees Included)"} <ChevronRight className="h-5 w-5" />
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
              {/* Quick Answer */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 lg:p-8">
                <h2 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  {isEs ? "Respuesta Rápida: ¿Cuánto Cuesta?" : "Quick Answer: How Much Does It Cost?"}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4 p-4 bg-card rounded-lg border border-border">
                    <div>
                      <p className="font-semibold">{isEs ? "Visita Independiente:" : "Independent Visit:"}</p>
                      <p className="text-sm text-muted-foreground">{isEs ? "533 pesos mexicanos (solo entrada — sin guía, transporte ni comida)" : "533 Mexican pesos (entrance only — no guide, transport, or lunch)"}</p>
                    </div>
                    <span className="font-heading font-bold text-xl text-primary flex-shrink-0">~$27-30 USD</span>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-4 bg-success/5 rounded-lg border border-success/20">
                    <div>
                      <p className="font-semibold">{isEs ? "Paquete de Tour Guiado:" : "Guided Tour Package:"}</p>
                      <p className="text-sm text-muted-foreground">{isEs ? "Incluye entrada, transporte, guía experto, comida, frecuentemente cenotes" : "Includes entrance, transport, expert guide, lunch, often cenotes"}</p>
                    </div>
                    <span className="font-heading font-bold text-xl text-success flex-shrink-0">$89-189</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  {isEs ? (
                    <><strong>En resumen:</strong> Los tours guiados ofrecen mejor valor cuando consideras el transporte, la experiencia del guía y la comida. Consulta nuestra <LocaleLink to="/guide/how-to-get-there" className="text-primary hover:underline">guía de cómo llegar</LocaleLink> si consideras una visita por tu cuenta.</>
                  ) : (
                    <><strong>Bottom line:</strong> Guided tours offer better value when you factor in transportation, guide expertise, and lunch. Check our <LocaleLink to="/guide/how-to-get-there" className="text-primary hover:underline">how to get there guide</LocaleLink> if you're considering a DIY visit.</>
                  )}
                </p>
              </div>

              {/* Current Entrance Fees */}
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  {isEs ? "Desglose de Tarifas de Entrada Actuales" : "Current Entrance Fees Breakdown"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {isEs
                    ? "Las tarifas de entrada a Chichén Itzá tienen dos componentes: una tarifa federal (INAH) y una tarifa estatal de Yucatán. Ambas deben pagarse para entrar."
                    : "Chichen Itza entrance fees have two components: a federal fee (INAH) and a Yucatan state fee. Both must be paid to enter."}
                </p>

                <div className="bg-card rounded-xl border border-border overflow-hidden mb-6">
                  <div className="p-4 bg-muted/50 border-b border-border">
                    <h3 className="font-heading font-semibold text-base">{isEs ? "Precios Oficiales 2026" : "2026 Official Pricing"}</h3>
                  </div>
                  <div className="divide-y divide-border">
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-semibold">{isEs ? "Tarifa Federal INAH" : "INAH Federal Fee"}</p>
                        <p className="text-xs text-muted-foreground">{isEs ? "Instituto Nacional de Antropología e Historia" : "National Institute of Anthropology"}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">185 MXN</p>
                        <p className="text-xs text-muted-foreground">~$10 USD</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-semibold">{isEs ? "Tarifa Estatal de Yucatán" : "Yucatan State Fee"}</p>
                        <p className="text-xs text-muted-foreground">{isEs ? "Cargo de entrada del gobierno estatal" : "State government entrance charge"}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">348 MXN</p>
                        <p className="text-xs text-muted-foreground">~$18 USD</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-primary/5">
                      <div>
                        <p className="font-bold text-primary">{isEs ? "TARIFA TOTAL DE ENTRADA" : "TOTAL ENTRANCE FEE"}</p>
                        <p className="text-xs text-muted-foreground">{isEs ? "Por persona (adultos y niños 13+)" : "Per person (adults & children 13+)"}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary text-lg">533 MXN</p>
                        <p className="text-xs text-muted-foreground">~$27-30 USD</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 p-4 border-t border-border">
                    <div>
                      <p className="text-sm font-semibold text-success mb-1">{isEs ? "✓ Entrada Gratis:" : "✓ Free Entry:"}</p>
                      <ul className="text-sm text-muted-foreground space-y-0.5">
                        {(isEs ? [
                          "Niños menores de 13 años",
                          "Entrada dominical para nacionales mexicanos",
                          "Maestros/estudiantes con credenciales mexicanas",
                        ] : [
                          "Children under 13 years old",
                          "Sunday entry for Mexican nationals",
                          "Teachers/students with Mexican credentials",
                        ]).map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">{isEs ? "📝 Nota:" : "📝 Note:"}</p>
                      <ul className="text-sm text-muted-foreground space-y-0.5">
                        {(isEs ? [
                          "Las tarifas se actualizan anualmente (generalmente en enero)",
                          "El equivalente en USD fluctúa con el tipo de cambio",
                          "No hay descuentos para adultos mayores/estudiantes extranjeros",
                        ] : [
                          "Fees updated annually (usually January)",
                          "USD equivalent fluctuates with exchange rate",
                          "No foreign senior/student discounts",
                        ]).map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <TipBox type="warning" title={isEs ? "Consejo de Pago" : "Payment Tip"} content={isEs ? "Lleva efectivo en pesos mexicanos para la entrada más rápida. Se aceptan tarjetas de crédito pero el procesamiento puede ser lento en horas pico. Se aceptan USD con tipos de cambio desfavorables." : "Bring Mexican pesos cash for the fastest entry. Credit cards are accepted but processing can be slow during peak hours. USD is accepted at unfavorable exchange rates."} />

                <p className="text-sm text-muted-foreground mt-4">
                  {isEs ? (
                    <>Antes de visitar, revisa el <LocaleLink to="/guide/dress-code-and-rules" className="text-primary hover:underline">código de vestimenta y reglas del sitio</LocaleLink> para asegurarte de no llevar artículos prohibidos, y consulta nuestros <LocaleLink to="/guide/photography-tips" className="text-primary hover:underline">consejos de fotografía</LocaleLink> para decidir si necesitas el permiso de cámara de $45.</>
                  ) : (
                    <>Before you visit, review the <LocaleLink to="/guide/dress-code-and-rules" className="text-primary hover:underline">dress code and site rules</LocaleLink> to ensure you don't bring prohibited items, and check our <LocaleLink to="/guide/photography-tips" className="text-primary hover:underline">photography tips</LocaleLink> to decide whether you need the $45 camera permit.</>
                  )}
                </p>
              </div>

              {/* Additional Fees */}
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                  {isEs ? "Tarifas y Costos Adicionales" : "Additional Fees & Costs"}
                </h2>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <Camera className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-semibold text-base mb-1">
                        {isEs ? "Permiso de Cámara Profesional: $45 USD" : "Professional Camera Permit: $45 USD"}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {isEs
                          ? "Requerido para cámaras DSLR, cámaras sin espejo, o cualquier cámara con lentes desmontables. Aplica para aficionados y profesionales. Se paga por separado en la entrada."
                          : "Required for DSLR cameras, mirrorless cameras, or any camera with detachable lenses. Applies to hobbyists and professionals alike. Paid separately at entrance."}
                      </p>
                      <p className="text-sm text-success">
                        {isEs ? "✓ Smartphones y cámaras compactas no requieren permiso" : "✓ Smartphones and compact point-and-shoot cameras don't require permits"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {additionalFees.map((fee, index) => (
                    <div key={index} className="bg-card rounded-lg border border-border p-4">
                      <div className="flex items-start gap-3">
                        <span className="text-xl flex-shrink-0">{fee.icon}</span>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-0.5">
                            <p className="font-semibold text-sm">{fee.item}</p>
                            <span className="text-xs font-medium bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{fee.cost}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{fee.note}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tour vs DIY Comparison */}
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
                  {isEs ? "Tour Guiado vs Independiente: Comparación Total de Costos" : "Guided Tour vs DIY: Total Cost Comparison"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {isEs ? (
                    <>Muchos visitantes asumen que visitar independientemente es más barato. Sin embargo, cuando consideras todos los costos, los tours guiados frecuentemente ofrecen mejor valor. Mira cómo Chichén Itzá <LocaleLink to="/guide/vs-other-ruins" className="text-primary hover:underline">se compara con otras ruinas</LocaleLink> si planeas visitar múltiples sitios.</>
                  ) : (
                    <>Many visitors assume visiting independently is cheaper. However, when you factor in all costs, guided tours often provide better value. See how Chichen Itza <LocaleLink to="/guide/vs-other-ruins" className="text-primary hover:underline">compares to other ruins</LocaleLink> if you're planning multiple site visits.</>
                  )}
                </p>

                <ComparisonTable
                  title={isEs ? "Comparación de Costos (2 Personas desde Cancún)" : "Cost Comparison (2 People from Cancun)"}
                  recommendedLabel={isEs ? "Recomendado" : "Recommended"}
                  headers={isEs ? ["Independiente", "Tour Guiado"] : ["DIY (Independent)", "Guided Tour"]}
                  rows={isEs ? [
                    { label: "Tarifas de Entrada", values: ["$54-60 (2×$27-30)", "✓ Incluidas"] },
                    { label: "Transporte", values: ["$60-80 (auto de alquiler)", "✓ Incluido"] },
                    { label: "Gasolina + Peajes", values: ["$40-45", "✓ Incluidos"] },
                    { label: "Estacionamiento", values: ["$5", "✓ Incluido"] },
                    { label: "Comida", values: ["$20-30", "✓ Incluida"] },
                    { label: "Guía Experto", values: ["$60-90 (si lo contratas)", "✓ Incluido"] },
                    { label: "TOTAL (2 personas)", values: ["$239-310", "$178-378"] },
                  ] : [
                    { label: "Entrance Fees", values: ["$54-60 (2×$27-30)", "✓ Included"] },
                    { label: "Transportation", values: ["$60-80 (rental car)", "✓ Included"] },
                    { label: "Gas + Tolls", values: ["$40-45", "✓ Included"] },
                    { label: "Parking", values: ["$5", "✓ Included"] },
                    { label: "Lunch", values: ["$20-30", "✓ Included"] },
                    { label: "Expert Guide", values: ["$60-90 (if hired)", "✓ Included"] },
                    { label: "TOTAL (2 people)", values: ["$239-310", "$178-378"] },
                  ]}
                  highlightColumn={2}
                />

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                    <p className="text-sm font-semibold text-success mb-2">{isEs ? "✓ Por Qué Ganan los Tours:" : "✓ Why Tours Win:"}</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {(isEs ? [
                        "Sin estrés de manejar ni navegación",
                        "Comentarios históricos expertos incluidos",
                        "Evita filas de boletos",
                        "Recogida/regreso al hotel",
                        "Frecuentemente incluyen visitas a cenotes",
                        "Horario garantizado (llegan temprano)",
                      ] : [
                        "No driving stress or navigation",
                        "Expert historical commentary included",
                        "Skip ticket lines",
                        "Hotel pickup/dropoff",
                        "Often include cenote visits",
                        "Guaranteed good timing (arrive early)",
                      ]).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">{isEs ? "→ Cuándo Ir por Tu Cuenta:" : "→ When to Go DIY:"}</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {(isEs ? [
                        "Quieres flexibilidad total de horario",
                        "Te hospedas en Valladolid o Mérida (muy cerca)",
                        "Visitas múltiples sitios durante varios días",
                        "Ya tienes auto de alquiler por otras razones",
                      ] : [
                        "You want complete schedule flexibility",
                        "Staying in Valladolid or Merida (very close)",
                        "Visiting multiple sites over several days",
                        "Already have rental car for other reasons",
                      ]).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Money-Saving Tips */}
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                  {isEs ? "Consejos para Ahorrar Dinero" : "Money-Saving Tips"}
                </h2>

                <div className="space-y-3">
                  {savingTips.map((item, index) => (
                    <div key={index} className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl">{item.icon}</span>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-heading font-semibold text-base">{item.tip}</h3>
                          <span className="text-xs font-semibold bg-success/10 text-success px-2 py-0.5 rounded-full">{item.savings}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <FAQSection title={isEs ? "Preguntas Frecuentes sobre Precios de Entrada" : "Entrance Fees FAQ"} faqs={isEs ? faqDataEs : faqData} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <QuickBookingForm />
              <TrustBadges />

              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h3 className="font-heading font-semibold text-base mb-2">{isEs ? "💡 Mejor Valor:" : "💡 Best Value:"}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {isEs
                    ? "Nuestros tours incluyen tarifas de entrada, transporte, guías expertos y comida — mejor valor que pagar por separado."
                    : "Our tours include entrance fees, transport, expert guides, and lunch — better value than paying separately."}
                </p>
                <Button variant="cta" size="sm" className="w-full" asChild>
                  <LocaleLink to="/tours">{isEs ? "Comparar Paquetes de Tours" : "Compare Tour Packages"}</LocaleLink>
                </Button>
              </div>

              <PopularToursWidget />

              <div className="bg-card rounded-lg border border-border p-5">
                <h3 className="font-heading font-semibold text-base mb-3">{isEs ? "Más Guías de Planificación" : "More Planning Guides"}</h3>
                <ul className="space-y-2">
                  <li><LocaleLink to="/guide/how-to-get-there" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ {isEs ? "Cómo Llegar" : "How to Get There"}</LocaleLink></li>
                  <li><LocaleLink to="/guide/what-to-bring" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ {isEs ? "Qué Llevar" : "What to Bring"}</LocaleLink></li>
                  <li><LocaleLink to="/guide/best-time-to-visit" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ {isEs ? "Mejor Época para Visitar" : "Best Time to Visit"}</LocaleLink></li>
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
              { label: "Cómo Llegar", href: "/guide/how-to-get-there" },
              { label: "Qué Llevar", href: "/guide/what-to-bring" },
              { label: "Mejor Época para Visitar", href: "/guide/best-time-to-visit" },
              { label: "Consejos de Fotografía", href: "/guide/photography-tips" },
              { label: "Código de Vestimenta", href: "/guide/dress-code-and-rules" },
              { label: "Historia y Datos", href: "/guide/history-and-facts" },
              { label: "Todos los Tours", href: "/tours" },
              { label: "Preguntas Frecuentes", href: "/practical/faq" },
            ] : [
              { label: "How to Get There", href: "/guide/how-to-get-there" },
              { label: "What to Bring", href: "/guide/what-to-bring" },
              { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
              { label: "Photography Tips", href: "/guide/photography-tips" },
              { label: "Dress Code", href: "/guide/dress-code-and-rules" },
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

export default EntranceFeesPage;
