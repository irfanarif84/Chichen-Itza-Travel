import { Link } from "react-router-dom";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";
import { Sun, CloudRain, Users, Camera, ChevronRight, Calendar, Thermometer, Clock, Sunrise, Sunset } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/common/FAQ";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import InfoBox from "@/components/guide/InfoBox";
import MonthlyChart from "@/components/guide/MonthlyChart";
import QuickBookingForm from "@/components/features/booking/QuickBookingForm";
import TrustBadges from "@/components/features/booking/TrustBadges";
import PopularToursWidget from "@/components/features/tours/PopularToursWidget";
import ImageGallery from "@/components/common/ImageGallery";
import { guideSchemas } from "@/lib/schema";
import { guideImages, tourGalleryImages, tourGalleryAltTexts } from "@/lib/tourImages";
import TableOfContents from "@/components/common/TableOfContents";

const timingFAQs = [
  {
    question: "What is the hottest month in Chichen Itza?",
    answer: "The hottest month in Chichen Itza is May, with an average high of 36°C (97°F). Temperatures remain high from March to August, so pack accordingly.",
    category: "timing",
  },
  {
    question: "What is the rainiest month in Chichen Itza?",
    answer: "The rainiest month is September, with an average of 170mm (6.7 inches) of rainfall. June to October see the most rain, but showers are usually brief.",
    category: "timing",
  },
  {
    question: "What is the best month to avoid crowds?",
    answer: "The low season (May, June, September, October) sees fewer visitors. Arrive early (8 AM opening) or late (3 PM) for fewer crowds any time of year.",
    category: "timing",
  },
  {
    question: "What is the cheapest month to visit Chichen Itza?",
    answer: "The shoulder season (April, May, September, October) offers the best balance of good weather and lower prices on flights and hotels.",
    category: "timing",
  },
  {
    question: "What time of day is best to visit Chichen Itza?",
    answer: "Early morning (8-10 AM) or late afternoon (3-5 PM) are ideal. The light is best for photos, and temperatures are cooler than midday.",
    category: "timing",
  },
  {
    question: "What is the best month to see the equinox?",
    answer: "March and September are best to see the serpent shadow on El Castillo pyramid during the spring and fall equinoxes. Book well in advance.",
    category: "timing",
  },
  {
    question: "What is the weather like in Chichen Itza in December?",
    answer: "December is one of the best months to visit, with warm, dry weather and comfortable temperatures averaging 27°C (81°F).",
    category: "timing",
  },
];

const timingFAQsEs = [
  { question: "¿Cuál es el mes más caluroso en Chichén Itzá?", answer: "El mes más caluroso es mayo, con una temperatura máxima promedio de 36°C (97°F). Las temperaturas se mantienen altas de marzo a agosto, así que prepárate adecuadamente.", category: "timing" },
  { question: "¿Cuál es el mes más lluvioso en Chichén Itzá?", answer: "El mes más lluvioso es septiembre, con un promedio de 170mm (6.7 pulgadas) de lluvia. De junio a octubre se ve más lluvia, pero los aguaceros suelen ser breves.", category: "timing" },
  { question: "¿Cuál es el mejor mes para evitar multitudes?", answer: "La temporada baja (mayo, junio, septiembre, octubre) tiene menos visitantes. Llega temprano (apertura a las 8 AM) o tarde (3 PM) para menos multitudes en cualquier época del año.", category: "timing" },
  { question: "¿Cuál es el mes más barato para visitar Chichén Itzá?", answer: "La temporada media (abril, mayo, septiembre, octubre) ofrece el mejor equilibrio entre buen clima y precios más bajos en vuelos y hoteles.", category: "timing" },
  { question: "¿Qué hora del día es mejor para visitar Chichén Itzá?", answer: "Temprano en la mañana (8-10 AM) o al final de la tarde (3-5 PM) son ideales. La luz es mejor para fotos y las temperaturas son más frescas que al mediodía.", category: "timing" },
  { question: "¿Cuál es el mejor mes para ver el equinoccio?", answer: "Marzo y septiembre son los mejores para ver la sombra de la serpiente en la pirámide de El Castillo durante los equinoccios de primavera y otoño. Reserva con mucha anticipación.", category: "timing" },
  { question: "¿Cómo es el clima en Chichén Itzá en diciembre?", answer: "Diciembre es uno de los mejores meses para visitar, con clima cálido y seco y temperaturas cómodas que promedian 27°C (81°F).", category: "timing" },
];

const monthlyWeatherData = [
  { month: "Jan", temp: 82, rain: 2, crowds: "High", price: "$$$" },
  { month: "Feb", temp: 84, rain: 2, crowds: "High", price: "$$$" },
  { month: "Mar", temp: 88, rain: 2, crowds: "Very High", price: "$$$$" },
  { month: "Apr", temp: 92, rain: 3, crowds: "High", price: "$$$" },
  { month: "May", temp: 93, rain: 6, crowds: "Medium", price: "$$" },
  { month: "Jun", temp: 92, rain: 8, crowds: "Low", price: "$$" },
  { month: "Jul", temp: 91, rain: 7, crowds: "Medium", price: "$$" },
  { month: "Aug", temp: 91, rain: 8, crowds: "Low", price: "$$" },
  { month: "Sep", temp: 89, rain: 9, crowds: "Very Low", price: "$" },
  { month: "Oct", temp: 86, rain: 8, crowds: "Low", price: "$$" },
  { month: "Nov", temp: 83, rain: 4, crowds: "Medium", price: "$$" },
  { month: "Dec", temp: 81, rain: 3, crowds: "Very High", price: "$$$$" },
];

const getMeta = (locale: "en" | "es") => {
  const isEs = locale === "es";
  return getPageMeta({
    title: isEs
      ? "Mejor Época para Visitar Chichén Itzá – Guía 2026"
      : "Best Time to Visit Chichen Itza – Complete 2026 Guide",
    description: isEs
      ? "Descubre la mejor época para visitar Chichén Itzá. Clima, multitudes y precios por mes. Consejos expertos para planificar tu viaje perfecto en 2026."
      : "Discover the best time to visit Chichen Itza. Weather, crowds, and prices by month. Expert tips for planning your perfect trip, updated for 2026.",
    canonical: "/guide/best-time-to-visit",
    ogType: "article",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Guía" : "Guide", url: "/guide" },
        { name: isEs ? "Mejor Época para Visitar" : "Best Time to Visit" },
      ]),
      guideSchemas["best-time-to-visit"],
      createFAQSchema(timingFAQs),
    ],
  });
};

const BestTimeToVisitPage = () => {
  const { locale, isEs } = useLocale();
  const meta = getMeta(locale);
  const breadcrumbs = [
    { label: isEs ? "Guía" : "Guide", href: "/guide" },
    { label: isEs ? "Mejor Época para Visitar" : "Best Time to Visit" },
  ];

  const tocItems = [
    { id: "overview",    title: isEs ? "Resumen General"                  : "At a Glance" },
    { id: "weather",     title: isEs ? "Clima Mes a Mes"                  : "Weather by Month" },
    { id: "crowds",      title: isEs ? "Niveles de Multitudes"            : "Crowd Levels" },
    { id: "prices",      title: isEs ? "Precios y Valor"                  : "Prices & Value" },
    { id: "equinox",     title: isEs ? "Equinoccios de Primavera y Otoño" : "Spring & Fall Equinoxes" },
    { id: "day-of-week", title: isEs ? "Mejor Día de la Semana"           : "Best Day of the Week" },
    { id: "time-of-day", title: isEs ? "Mejor Hora del Día"               : "Best Time of Day" },
  ];

  return (
    <>
      <SEOHead meta={meta} />

      {/* ---- Hero ---- */}
      <section className="relative bg-gradient-to-br from-accent/10 via-background to-primary/10 py-12 lg:py-16 overflow-hidden">
        <img
          src={guideImages["best-time-to-visit"]}
          alt="Chichen Itza El Castillo pyramid in golden afternoon light"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          loading="eager"
          fetchPriority="high"
        />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {isEs
                ? "Mejor Época para Visitar Chichén Itzá: Guía Completa 2026"
                : "Best Time to Visit Chichen Itza: Complete 2026 Guide"}
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              {isEs
                ? "Planifica tu visita perfecta con nuestra guía completa de clima, multitudes y eventos especiales en el sitio arqueológico más famoso de México."
                : "Plan your perfect visit with our comprehensive guide to weather, crowds, and special events at Mexico's most famous archaeological site."}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              {isEs ? "Actualizado: abril 2026 · 12 min lectura · Por Maya Explorer Team" : "Updated: April 2026 · 12 min read · By Maya Explorer Team"}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild>
                <LocaleLink to="/tours">{isEs ? "Reservar Tu Tour" : "Book Your Tour"} <ChevronRight className="h-5 w-5" /></LocaleLink>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <LocaleLink to="/guide/what-to-bring">{isEs ? "Qué Llevar →" : "What to Bring →"}</LocaleLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Two-column layout ---- */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10">
            {/* Main Content */}
            <div className="space-y-14">
              <TableOfContents items={tocItems} isEs={isEs} />

              {/* Overview */}
              <div id="overview">
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "De un Vistazo: Mejor Época para Visitar Chichén Itzá" : "At a Glance: Best Time to Visit Chichen Itza"}
                </h2>
                <p className="text-muted-foreground">
                  {isEs
                    ? "La mejor época para visitar Chichén Itzá es de diciembre a marzo, cuando el clima es cálido y seco, y las multitudes son moderadas. Evita los meses de mayo, junio y septiembre, cuando el calor y la humedad son altos, y hay más lluvia."
                    : "The best time to visit Chichen Itza is from December to March, when the weather is warm and dry, and the crowds are moderate. Avoid May, June, and September, when the heat and humidity are high, and there is more rain."}
                </p>
                <TipBox
                  type="info"
                  title={isEs ? "Clima Ideal y Menos Multitudes" : "Ideal Weather & Fewer Crowds"}
                  content={isEs
                    ? "Para el equilibrio óptimo entre buen clima y menos multitudes, considera visitar en abril, noviembre o principios de diciembre. El clima sigue siendo agradable y hay menos turistas que durante la temporada alta."
                    : "For the optimal balance of good weather and fewer crowds, consider visiting in April, November, or early December. The weather is still pleasant, and there are fewer tourists than during peak season."}
                />
              </div>

              {/* Weather by Month */}
              <div id="weather">
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Clima Mes a Mes en Chichén Itzá" : "Chichen Itza Weather Month by Month"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {isEs
                    ? "El clima en Chichén Itzá varía a lo largo del año, con una estación seca de diciembre a abril y una estación húmeda de mayo a octubre. Las temperaturas se mantienen relativamente constantes, pero la humedad y las precipitaciones varían significativamente."
                    : "The weather in Chichen Itza varies throughout the year, with a dry season from December to April and a wet season from May to October. Temperatures remain relatively constant, but humidity and rainfall vary significantly."}
                </p>
                <MonthlyChart data={monthlyWeatherData} />
              </div>

              {/* Crowd Levels */}
              <div id="crowds">
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Niveles de Multitudes y Temporada Turística" : "Crowd Levels & Tourist Season"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {isEs
                    ? "La temporada alta en Chichén Itzá es de diciembre a marzo, cuando el clima es más agradable. Las multitudes son más grandes durante este tiempo, especialmente alrededor de las vacaciones. La temporada baja es de mayo a junio y de septiembre a octubre, cuando el clima es más caluroso y húmedo, y hay más lluvia."
                    : "The peak season in Chichen Itza is from December to March, when the weather is most pleasant. Crowds are largest during this time, especially around holidays. The low season is from May to June and September to October, when the weather is hotter and more humid, and there is more rain."}
                </p>
                <InfoBox
                  title={isEs ? "Consejos para Evitar Multitudes" : "Tips for Avoiding Crowds"}
                  items={[
                    isEs ? "Llega temprano (la apertura es a las 8 AM)" : "Arrive early (8 AM opening)",
                    isEs ? "Visita entre semana (de martes a jueves)" : "Visit on weekdays (Tuesday to Thursday)",
                    isEs ? "Reserva tours que salgan temprano" : "Book tours that depart early",
                    isEs ? "Evita los días festivos mexicanos" : "Avoid Mexican holidays",
                  ]}
                  variant="info"
                />
              </div>

              {/* Prices & Value */}
              <div id="prices">
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Precios y Valor: Cuándo Obtener las Mejores Ofertas" : "Prices & Value: When to Get the Best Deals"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {isEs
                    ? "Los precios de vuelos y hoteles son más altos durante la temporada alta (diciembre a marzo). Para obtener las mejores ofertas, considera visitar durante la temporada baja (mayo a junio y septiembre a octubre) o la temporada media (abril y noviembre)."
                    : "Flight and hotel prices are highest during the peak season (December to March). For the best deals, consider visiting during the low season (May to June and September to October) or the shoulder season (April and November)."}
                </p>
                <TipBox
                  type="tip"
                  title={isEs ? "Reserva con Anticipación para Ahorrar" : "Book in Advance to Save"}
                  content={isEs
                    ? "Reserva tus vuelos, hoteles y tours con anticipación, especialmente si viajas durante la temporada alta. Esto te ayudará a asegurar las mejores tarifas y disponibilidad."
                    : "Book your flights, hotels, and tours in advance, especially if traveling during the peak season. This will help you secure the best rates and availability."}
                />
              </div>

              {/* Spring & Fall Equinoxes */}
              <div id="equinox">
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Equinoccios de Primavera y Otoño" : "Spring & Fall Equinoxes"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {isEs
                    ? "Los equinoccios de primavera (marzo) y otoño (septiembre) son momentos especiales para visitar Chichén Itzá. Durante estos días, el sol proyecta una sombra en forma de serpiente en la pirámide de El Castillo, un espectáculo impresionante que atrae a miles de visitantes."
                    : "The spring (March) and fall (September) equinoxes are special times to visit Chichen Itza. During these days, the sun casts a shadow in the shape of a serpent on the El Castillo pyramid, an impressive spectacle that attracts thousands of visitors."}
                </p>
                <InfoBox
                  title={isEs ? "Planifica con Anticipación para los Equinoccios" : "Plan Ahead for the Equinoxes"}
                  items={[
                    isEs ? "Reserva vuelos y hoteles con meses de anticipación" : "Book flights and hotels months in advance",
                    isEs ? "Compra boletos para Chichén Itzá en línea" : "Purchase Chichen Itza tickets online",
                    isEs ? "Llega temprano para asegurar un buen lugar" : "Arrive early to secure a good viewing spot",
                    isEs ? "Prepárate para grandes multitudes" : "Prepare for large crowds",
                  ]}
                  variant="info"
                />
              </div>

              {/* Best Day of the Week */}
              <div id="day-of-week">
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Mejor Día de la Semana para Visitar" : "Best Day of the Week to Visit"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {isEs
                    ? "Los fines de semana tienden a ser más concurridos en Chichén Itzá. Si es posible, planifica tu visita para un día entre semana, como martes, miércoles o jueves, para evitar las multitudes más grandes."
                    : "Weekends tend to be busier at Chichen Itza. If possible, plan your visit for a weekday, such as Tuesday, Wednesday, or Thursday, to avoid the largest crowds."}
                </p>
              </div>

              {/* Best Time of Day */}
              <div id="time-of-day">
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {isEs ? "Mejor Hora del Día para Visitar" : "Best Time of Day to Visit"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {isEs
                    ? "La mejor hora del día para visitar Chichén Itzá es temprano en la mañana (8-10 AM) o tarde en la tarde (3-5 PM). Durante estos tiempos, la luz es mejor para las fotos, y las temperaturas son más frescas que al mediodía."
                    : "The best time of day to visit Chichen Itza is early in the morning (8-10 AM) or late in the afternoon (3-5 PM). During these times, the light is best for photos, and the temperatures are cooler than midday."}
                </p>
                {/* Gallery placeholder */}
              </div>

              {/* FAQ */}
              <FAQSection faqs={isEs ? timingFAQsEs : timingFAQs} title={isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"} subtitle={isEs ? "Sobre el Tiempo y la Planificación" : "About Timing & Planning"} />
            </div>

            {/* Sidebar */}
            <div className="sticky top-0 py-4">
              <QuickBookingForm />
              <TrustBadges />
              <PopularToursWidget />
            </div>
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
              { label: isEs ? "Tours Privados" : "Private Tours", href: "/tours/private-tours" },
              { label: isEs ? "Tours Económicos" : "Budget Tours", href: "/tours/budget-tours" },
              { label: isEs ? "Tours Nocturnos" : "Night Tours", href: "/tours/night-tours" },
              { label: isEs ? "Tours desde Cancún" : "From Cancún", href: "/tours-from/cancun" },
              { label: isEs ? "Tours desde Tulum" : "From Tulum", href: "/tours-from/tulum" },
              { label: isEs ? "Tours Familiares" : "Family Tours", href: "/tours/family-tours" },
              { label: isEs ? "Guía de Fotografía" : "Photography Guide", href: "/guide/photography-tips" },
              { label: isEs ? "Qué Empacar" : "What to Pack", href: "/guide/what-to-bring" },
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

export default BestTimeToVisitPage;
