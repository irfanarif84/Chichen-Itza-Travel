import { ShieldCheck, Clock, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getPageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import LocaleLink from "@/components/LocaleLink";
import RelatedResources from "@/components/common/RelatedResources";
import { useLocale } from "@/lib/i18n/useLocale";

const CancellationPolicyPage = () => {
  const { locale, isEs } = useLocale();

  const meta = getPageMeta({
    title: isEs
      ? "Política de Cancelación – Cancelación Gratuita | Tours Chichén Itzá"
      : "Cancellation Policy – Free Cancellation | Chichen Itza Tours",
    description: isEs
      ? "Política de cancelación flexible para todos los tours a Chichén Itzá. Cancelación gratuita hasta 24 horas antes. Reembolso completo garantizado."
      : "Flexible cancellation policy for all Chichen Itza tours. Free cancellation up to 24 hours before your tour. Full refund guaranteed. Book with confidence.",
    canonical: "/practical/cancellation-policy",
    locale,
  });

  const policies = [
    { icon: CheckCircle, title: isEs ? "Cancelación Gratuita" : "Free Cancellation", desc: isEs ? "Cancela hasta 24 horas antes de tu tour para un reembolso completo. Sin preguntas." : "Cancel up to 24 hours before your tour for a full refund. No questions asked.", color: "text-success" },
    { icon: Clock, title: isEs ? "Cancelación Tardía (< 24 hrs)" : "Late Cancellation (< 24 hrs)", desc: isEs ? "Las cancelaciones dentro de las 24 horas del tour no son reembolsables. Cambios podrían ser posibles." : "Cancellations within 24 hours of the tour are non-refundable. Changes may be possible.", color: "text-accent" },
    { icon: AlertCircle, title: isEs ? "No Presentarse" : "No-Show", desc: isEs ? "Si no te presentas al tour sin aviso, no se proporciona reembolso." : "If you don't show up for your tour without notice, no refund is provided.", color: "text-destructive" },
  ];

  const tourTypes = isEs
    ? [
        { title: "Tours Estándar (Tours de un Día, Tours Combo)", desc: "Cancelación gratuita hasta 24 horas antes de la salida. Reembolso completo a tu método de pago original en 5-7 días hábiles." },
        { title: "Tours Privados y VIP", desc: "Cancelación gratuita hasta 48 horas antes de la salida. Debido a arreglos exclusivos, se aplica un cargo del 50% para cancelaciones dentro de 24-48 horas." },
        { title: "Tours de Varios Días", desc: "Cancelación gratuita hasta 7 días antes de la salida. 50% de reembolso para cancelaciones de 3-7 días antes. No reembolsable dentro de 72 horas." },
      ]
    : [
        { title: "Standard Tours (Day Tours, Combo Tours)", desc: "Free cancellation up to 24 hours before departure. Full refund credited to your original payment method within 5–7 business days." },
        { title: "Private & VIP Tours", desc: "Free cancellation up to 48 hours before departure. Due to exclusive arrangements, a 50% fee applies for cancellations within 24–48 hours." },
        { title: "Multi-Day Tours", desc: "Free cancellation up to 7 days before departure. 50% refund for cancellations 3–7 days prior. Non-refundable within 72 hours." },
      ];

  const howToCancel = isEs
    ? [
        "Ingresa a tu email de confirmación de reserva y haz clic en \"Administrar Reserva\"",
        "O envíanos un email a info@chichenitzatours.com con tu número de referencia",
        "Para cambios urgentes, llámanos al +52 998 123 4567 (disponible 7 AM – 9 PM CST)",
      ]
    : [
        "Log into your booking confirmation email and click \"Manage Booking\"",
        "Or email us at info@chichenitzatours.com with your booking reference number",
        "For urgent changes, call us at +52 998 123 4567 (available 7 AM – 9 PM CST)",
      ];

  return (
    <>
      <SEOHead meta={meta} />
      <div className="container py-6 max-w-4xl">
        <Breadcrumbs items={[{ label: isEs ? "Política de Cancelación" : "Cancellation Policy" }]} />

        <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-3 mt-6">
          {isEs ? "Política de Cancelación y Reembolso" : "Cancellation & Refund Policy"}
        </h1>
        <p className="text-muted-foreground mb-4 max-w-2xl">
          {isEs
            ? "Queremos que reserves con confianza. Por eso ofrecemos cancelación flexible y sin complicaciones en todos nuestros tours a Chichén Itzá."
            : "We want you to book with confidence. That's why we offer flexible, hassle-free cancellation on all our Chichen Itza tours."}
        </p>
        <p className="text-muted-foreground mb-10 max-w-2xl text-sm">
          {isEs
            ? "Esta política se aplica a todas las reservas realizadas directamente en chichenitzatours.com. Cumple — y en muchos casos excede — los estándares de la industria establecidos por GetYourGuide, Viator y Expedia. Los reembolsos se procesan automáticamente al método de pago original; no necesitas llamar para reclamar tu dinero."
            : "This policy applies to every booking made directly on chichenitzatours.com. It meets — and in most cases exceeds — the industry standards set by GetYourGuide, Viator, and Expedia. Refunds are processed automatically to your original payment method; you don't need to call to claim your money."}
        </p>

        {/* Policy cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {policies.map((p) => (
            <div key={p.title} className="bg-card rounded-lg shadow-card p-6 text-center">
              <p.icon className={`h-10 w-10 mx-auto mb-3 ${p.color}`} />
              <h2 className="font-heading font-semibold text-lg mb-2">{p.title}</h2>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed policy */}
        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="font-heading font-bold text-2xl mb-4">
              {isEs ? "Cómo Funcionan las Cancelaciones" : "How Cancellations Work"}
            </h2>
            <div className="bg-card rounded-lg shadow-card p-6 space-y-4">
              {tourTypes.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="bg-success/10 text-success rounded-full p-2 shrink-0"><CheckCircle className="h-5 w-5" /></span>
                  <div>
                    <h3 className="font-heading font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4">
              {isEs ? "Clima y Fuerza Mayor" : "Weather & Force Majeure"}
            </h2>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">
                    {isEs ? "Reembolso completo o reprogramación gratuita garantizada" : "Full refund or free reschedule guaranteed"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isEs
                      ? "Si cancelamos un tour por clima severo, desastres naturales o restricciones gubernamentales, recibirás un reembolso completo o la opción de reprogramar sin costo. Tu seguridad es nuestra prioridad."
                      : "If we cancel a tour due to severe weather, natural disasters, or government restrictions, you'll receive a full refund or the option to reschedule at no extra cost. Your safety is our priority."}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4">
              {isEs ? "Cómo Cancelar o Modificar" : "How to Cancel or Modify"}
            </h2>
            <ol className="space-y-3 text-muted-foreground">
              {howToCancel.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-card rounded-lg shadow-card p-8">
          <h2 className="font-heading font-bold text-2xl mb-2">
            {isEs ? "¿Listo para Reservar Sin Riesgo?" : "Ready to Book Risk-Free?"}
          </h2>
          <p className="text-muted-foreground mb-4">
            {isEs ? "Todos los tours incluyen cancelación gratuita. Reserva ahora, decide después." : "All tours include free cancellation. Book now, decide later."}
          </p>
          <Button variant="cta" size="lg" asChild>
            <LocaleLink to="/tours">{isEs ? "Ver Todos los Tours" : "Browse All Tours"} <ArrowRight className="h-4 w-4 ml-1" /></LocaleLink>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CancellationPolicyPage;
