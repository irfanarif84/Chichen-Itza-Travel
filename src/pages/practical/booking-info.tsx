import { ShieldCheck, CreditCard, Clock, Users, CalendarCheck, ArrowRight, CheckCircle } from "lucide-react";
import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TrustBadges from "@/components/features/booking/TrustBadges";
import { getPageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import LocaleLink from "@/components/LocaleLink";
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
        <p className="text-muted-foreground mb-10 max-w-2xl">
          {isEs
            ? "Reservar es fácil, rápido y sin riesgos. Sigue tres simples pasos y estarás confirmado."
            : "Booking is easy, fast, and risk-free. Follow three simple steps and you're confirmed."}
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
      </div>
    </>
  );
};

export default BookingInfoPage;
