import { ShieldCheck, CreditCard, Clock, Users, CalendarCheck, ArrowRight, CheckCircle } from "lucide-react";
import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TrustBadges from "@/components/features/booking/TrustBadges";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import { generateWebPageSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import LocaleLink from "@/components/LocaleLink";
import RelatedResources from "@/components/common/RelatedResources";
import { useLocale } from "@/lib/i18n/useLocale";

const BookingInfoPage = () => {
  const { locale, isEs } = useLocale();

  const meta = getPageMeta({
    title: isEs
      ? "Información de Reserva – Cómo Reservar | Tours Chichén Itzá"
      : "Booking Information – How to Book | Chichen Itza Tours",
    description: isEs
      ? "Todo lo que necesitas saber para reservar tours a Chichén Itzá. Reserva en 3 pasos, cancelación gratuita, pago seguro y confirmación instantánea."
      : "Everything you need to know about booking Chichen Itza tours. Easy 3-step booking, free cancellation, secure payment, and instant confirmation.",
    canonical: "/practical/booking-info",
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Información de Reserva" : "Booking Information" },
      ]),
      generateWebPageSchema({
        url: "/practical/booking-info",
        name: isEs
          ? "Cómo Reservar Tu Tour a Chichén Itzá"
          : "How to Book Your Chichen Itza Tour",
        description: isEs
          ? "Guía paso a paso para reservar tours a Chichén Itzá con cancelación gratuita y pago seguro."
          : "Step-by-step guide to booking Chichen Itza tours with free cancellation and secure payment.",
        inLanguage: isEs ? "es" : "en",
        datePublished: "2025-02-01",
        dateModified: "2026-04-19",
      }),
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Book a Chichen Itza Tour",
        "description": "Step-by-step guide to booking a Chichen Itza tour from Cancun, Playa del Carmen, Tulum, or Merida.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Choose Your Tour & Date",
            "text": "Browse our tours, select your preferred date, and pick your departure city from Cancun, Playa del Carmen, Tulum, Riviera Maya, or Merida."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Enter Traveler Details",
            "text": "Tell us how many adults and children are in your group, plus any add-ons like a private guide or photography package."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Secure Payment & Confirm",
            "text": "Pay securely online via Visa, Mastercard, PayPal, or Apple Pay. Receive instant confirmation with your booking reference and tour details within 60 seconds."
          }
        ],
        "totalTime": "PT2M"
      },
    ],
  });

  const steps = [
    { num: "1", icon: CalendarCheck, title: isEs ? "Elige Tu Tour y Fecha" : "Choose Your Tour & Date", desc: isEs ? "Explora nuestros tours, selecciona tu fecha preferida y elige tu ciudad de salida." : "Browse our tours, select your preferred date, and pick your departure city." },
    { num: "2", icon: Users, title: isEs ? "Ingresa Datos de Viajeros" : "Enter Traveler Details", desc: isEs ? "Indícanos cuántos adultos y niños, más opciones como guía privado o fotografía." : "Tell us how many adults and children, plus any add-ons like private guides or photography." },
    { num: "3", icon: CreditCard, title: isEs ? "Pago Seguro y Confirmación" : "Secure Payment & Confirm", desc: isEs ? "Paga de forma segura en línea. Recibirás confirmación instantánea con todos los detalles por email." : "Pay securely online. You'll receive instant confirmation with all details via email." },
  ];

  const paymentItems = [
    { icon: CreditCard, title: isEs ? "Métodos de Pago Aceptados" : "Accepted Payment Methods", desc: isEs ? "Visa, Mastercard, American Express, PayPal, Apple Pay y Google Pay." : "Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay." },
    { icon: ShieldCheck, title: isEs ? "Encriptación Segura" : "Secure Encryption", desc: isEs ? "Todos los pagos se procesan con encriptación SSL de 256 bits. Tus datos financieros nunca se almacenan en nuestros servidores." : "All payments are processed with 256-bit SSL encryption. Your financial data is never stored on our servers." },
    { icon: Clock, title: isEs ? "Confirmación Instantánea" : "Instant Confirmation", desc: isEs ? "Una vez procesado el pago, recibirás un email de confirmación en 60 segundos con tu referencia de reserva y detalles del tour." : "Once payment is processed, you'll receive a confirmation email within 60 seconds with your booking reference and tour details." },
  ];

  const afterBooking = isEs
    ? [
        "Email de confirmación instantánea con número de referencia",
        "Instrucciones de recogida enviadas 24 horas antes del tour",
        "Contacto de WhatsApp con tu guía el día del tour",
        "Cambios de fecha gratuitos hasta 48 horas antes",
        "Reembolso completo si cancelas 24+ horas antes de la salida",
      ]
    : [
        "Instant confirmation email with booking reference number",
        "Detailed pickup instructions sent 24 hours before your tour",
        "WhatsApp contact for your guide on the day of the tour",
        "Free date changes up to 48 hours in advance",
        "Full refund if cancelled 24+ hours before departure",
      ];

  return (
    <>
      <SEOHead meta={meta} />
      <div className="container py-6 max-w-4xl">
        <Breadcrumbs items={[{ label: isEs ? "Información de Reserva" : "Booking Information" }]} />

        <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-3 mt-6">
          {isEs ? "Cómo Reservar Tu Tour a Chichén Itzá" : "How to Book Your Chichen Itza Tour"}
        </h1>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          {isEs
            ? "Reservar es fácil, rápido y sin riesgos. Sigue tres simples pasos y estarás confirmado en menos de dos minutos."
            : "Booking is easy, fast, and risk-free. Follow three simple steps and you're confirmed in under two minutes."}
        </p>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          {isEs
            ? "Hemos atendido a más de 10,000 viajeros desde 2015 y hemos refinado el proceso de reserva para eliminar la fricción común con los operadores turísticos: precios opacos, confirmaciones lentas, comunicación poco clara sobre la recogida en el hotel y políticas de cancelación rígidas. Cada paso a continuación está diseñado para que sepas exactamente lo que estás reservando, cuánto pagas y qué sucede a continuación."
            : "We've served over 10,000 travelers since 2015 and refined the booking process to remove the friction common with tour operators: opaque pricing, slow confirmations, unclear hotel-pickup communication, and rigid cancellation policies. Every step below is designed so you know exactly what you're booking, how much you're paying, and what happens next."}
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((s) => (
            <div key={s.num} className="bg-card rounded-lg shadow-card p-6 text-center relative">
              <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold mx-auto mb-4">{s.num}</div>
              <s.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="font-heading font-semibold text-lg mb-2">{s.title}</h2>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Payment info */}
        <section className="mb-12">
          <h2 className="font-heading font-bold text-2xl mb-6">{isEs ? "Pago y Seguridad" : "Payment & Security"}</h2>
          <div className="bg-card rounded-lg shadow-card p-6 space-y-4">
            {paymentItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <item.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What to expect */}
        <section className="mb-12">
          <h2 className="font-heading font-bold text-2xl mb-6">{isEs ? "Después de Reservar" : "After You Book"}</h2>
          <div className="space-y-3">
            {afterBooking.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-success shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Choosing the right tour */}
        <section className="mb-12">
          <h2 className="font-heading font-bold text-2xl mb-4">
            {isEs ? "Cómo Elegir el Tour Correcto" : "How to Choose the Right Tour"}
          </h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-3">
            <p>
              {isEs
                ? "La decisión más importante no es el precio — es el formato. Un tour grupal de día completo desde Cancún (precio típico $89–$119 USD) maximiza el valor incluyendo cenote y almuerzo, pero te coloca en un autobús de 12–40 personas y agrega 2–3 horas en el camino. Un tour privado ($299–$599 USD para 1–4 personas) intercambia el ahorro por flexibilidad total: tu propio guía, tu propio horario y la posibilidad de saltar paradas o agregar Valladolid."
                : "The most important decision isn't price — it's format. A full-day group tour from Cancún (typical $89–$119 USD) maximizes value by including a cenote and lunch, but puts you on a 12–40-person bus and adds 2–3 hours on the road. A private tour ($299–$599 USD for 1–4 people) trades savings for total flexibility: your own guide, your own pace, and the option to skip stops or add Valladolid."}
            </p>
            <p>
              {isEs
                ? "Si tu prioridad es evitar las multitudes, reserva un "
                : "If avoiding crowds is your priority, book a "}
              <LocaleLink to="/tours/sunrise-tours" className="text-primary hover:underline font-medium">
                {isEs ? "tour al amanecer" : "sunrise tour"}
              </LocaleLink>
              {isEs
                ? " que entra al sitio justo cuando abre a las 8 a.m. Si viajas con niños, los "
                : " that enters the site right at the 8 a.m. opening. If you're travelling with children, "}
              <LocaleLink to="/tour-types/family-friendly" className="text-primary hover:underline font-medium">
                {isEs ? "tours familiares" : "family-friendly tours"}
              </LocaleLink>
              {isEs
                ? " ofrecen un ritmo más lento y guías que adaptan la narración a varias edades."
                : " offer a slower pace and guides who tailor the storytelling for mixed ages."}
            </p>
            <p>
              {isEs
                ? "Para viajeros que ya están en la Riviera Maya, nuestras páginas de salida desde "
                : "For travelers already in the Riviera Maya, our departure pages for "}
              <LocaleLink to="/tours-from/cancun" className="text-primary hover:underline font-medium">Cancún</LocaleLink>
              {", "}
              <LocaleLink to="/tours-from/playa-del-carmen" className="text-primary hover:underline font-medium">Playa del Carmen</LocaleLink>
              {", "}
              <LocaleLink to="/tours-from/tulum" className="text-primary hover:underline font-medium">Tulum</LocaleLink>
              {isEs ? " y " : " and "}
              <LocaleLink to="/tours-from/merida" className="text-primary hover:underline font-medium">Mérida</LocaleLink>
              {isEs
                ? " enumeran tiempos de viaje exactos, ventanas de recogida de hotel y operadores recomendados específicos para cada ciudad."
                : " list exact drive times, hotel-pickup windows, and recommended operators specific to each city."}
            </p>
          </div>
        </section>

        {/* Group bookings */}
        <section className="mb-12 bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h2 className="font-heading font-bold text-xl mb-3">
            {isEs ? "Reservas Grupales (6+ Personas)" : "Group Bookings (6+ People)"}
          </h2>
          <p className="text-sm text-muted-foreground mb-3">
            {isEs
              ? "Los grupos de 6 o más reciben automáticamente entre 10 % y 20 % de descuento, asignación de un coordinador dedicado y la opción de comidas privadas. Para viajes corporativos, bodas y reuniones familiares, contáctanos directamente para una cotización personalizada — incluyendo opciones de transporte de lujo y guías bilingües adicionales si fuera necesario."
              : "Groups of 6 or more automatically receive 10–20 % off, a dedicated trip coordinator, and the option of private meals. For corporate trips, weddings, and family reunions, contact us directly for a custom quote — including luxury transportation options and additional bilingual guides if needed."}
          </p>
          <Button variant="outline" size="sm" asChild>
            <LocaleLink to="/practical/contact">
              {isEs ? "Obtener Cotización Grupal" : "Get a Group Quote"} <ArrowRight className="h-4 w-4 ml-1" />
            </LocaleLink>
          </Button>
        </section>

        <div className="mb-6"><TrustBadges /></div>

        {/* CTA */}
        <div className="text-center bg-card rounded-lg shadow-card p-8">
          <h2 className="font-heading font-bold text-2xl mb-2">{isEs ? "¿Listo para Reservar?" : "Ready to Book?"}</h2>
          <p className="text-muted-foreground mb-4">
            {isEs ? "Cancelación gratuita en todos los tours. Reserva ahora, paga después." : "Free cancellation on all tours. Book now, pay later."}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="cta" size="lg" asChild>
              <LocaleLink to="/tours">{isEs ? "Ver Todos los Tours" : "Browse All Tours"} <ArrowRight className="h-4 w-4 ml-1" /></LocaleLink>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <LocaleLink to="/practical/contact">{isEs ? "Solicitar Cotización Gratis" : "Get a Free Quote"}</LocaleLink>
            </Button>
          </div>
        </div>

        <RelatedResources />
      </div>
    </>
  );
};

export default BookingInfoPage;
