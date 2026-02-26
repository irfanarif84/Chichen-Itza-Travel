import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TrustBadges from "@/components/features/booking/TrustBadges";
import { getPageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().min(1, "Please select a subject"),
  tourInterest: z.string().optional(),
  travelDate: z.string().optional(),
  groupSize: z.string().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const { locale, isEs } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "", tourInterest: "", groupSize: "" },
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  const meta = getPageMeta({
    title: isEs
      ? "Contáctanos – Tours Chichén Itzá | Cotización Gratis"
      : "Contact Us – Chichen Itza Tours | Get a Free Quote",
    description: isEs
      ? "Contacta a nuestros expertos en tours a Chichén Itzá para una cotización gratuita. Recomendaciones personalizadas, descuentos grupales y respuesta en 2 horas."
      : "Contact our Chichen Itza tour experts for a free quote. Get personalized recommendations, group discounts, and fast responses within 2 hours.",
    canonical: "/practical/contact",
    locale,
  });

  const c = isEs ? {
    breadcrumb: "Contáctanos",
    h1: "Contáctanos y Obtén una Cotización Gratis",
    subtitle: "Nuestros expertos en Chichén Itzá responden en menos de 2 horas. Recibe recomendaciones personalizadas, descuentos grupales e itinerarios a medida.",
    thankYou: "¡Gracias!",
    thankYouDesc: "Hemos recibido tu mensaje y te responderemos en menos de 2 horas.",
    thankYouCta: "Explorar Tours Mientras Esperas →",
    nameLabel: "Nombre Completo *",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo Electrónico *",
    emailPlaceholder: "tu@email.com",
    phoneLabel: "Teléfono (opcional)",
    phonePlaceholder: "+52 998 123 4567",
    subjectLabel: "Asunto *",
    subjectPlaceholder: "Selecciona un asunto",
    subjects: [
      { value: "quote", label: "Solicitar Cotización" },
      { value: "group", label: "Reserva Grupal (6+)" },
      { value: "custom", label: "Itinerario Personalizado" },
      { value: "question", label: "Pregunta General" },
      { value: "support", label: "Soporte de Reserva" },
    ],
    dateLabel: "Fecha de Viaje Preferida",
    groupLabel: "Tamaño del Grupo",
    groupPlaceholder: "¿Cuántos viajeros?",
    groupOptions: [
      { value: "1-2", label: "1–2 viajeros" },
      { value: "3-5", label: "3–5 viajeros" },
      { value: "6-10", label: "6–10 viajeros" },
      { value: "11-20", label: "11–20 viajeros" },
      { value: "20+", label: "20+ viajeros" },
    ],
    messageLabel: "Tu Mensaje *",
    messagePlaceholder: "Cuéntanos sobre tu experiencia ideal, requisitos especiales o cualquier pregunta...",
    sendButton: "Enviar Mensaje y Obtener Cotización Gratis",
    sending: "Enviando...",
    sidebarTitle: "Ponte en Contacto",
    callUs: "Llámanos",
    email: "Correo",
    office: "Oficina",
    hours: "Horario",
    hoursValue: "Lun-Dom 7 AM – 9 PM CST",
    whyTitle: "¿Por Qué Contactarnos?",
    whyItems: [
      "✓ Recomendaciones personalizadas",
      "✓ Descuentos grupales para 6+ viajeros",
      "✓ Planificación de itinerarios personalizados",
      "✓ Respuesta en menos de 2 horas",
      "✓ Sin compromiso, cotizaciones gratis",
    ],
  } : {
    breadcrumb: "Contact Us",
    h1: "Contact Us & Get a Free Quote",
    subtitle: "Our Chichen Itza experts respond within 2 hours. Get personalized tour recommendations, group discounts, and custom itineraries.",
    thankYou: "Thank You!",
    thankYouDesc: "We've received your message and will get back to you within 2 hours.",
    thankYouCta: "Browse Tours While You Wait →",
    nameLabel: "Full Name *",
    namePlaceholder: "Your name",
    emailLabel: "Email Address *",
    emailPlaceholder: "you@email.com",
    phoneLabel: "Phone (optional)",
    phonePlaceholder: "+1 234 567 8900",
    subjectLabel: "Subject *",
    subjectPlaceholder: "Select a subject",
    subjects: [
      { value: "quote", label: "Request a Quote" },
      { value: "group", label: "Group Booking (6+)" },
      { value: "custom", label: "Custom Itinerary" },
      { value: "question", label: "General Question" },
      { value: "support", label: "Booking Support" },
    ],
    dateLabel: "Preferred Travel Date",
    groupLabel: "Group Size",
    groupPlaceholder: "How many travelers?",
    groupOptions: [
      { value: "1-2", label: "1–2 travelers" },
      { value: "3-5", label: "3–5 travelers" },
      { value: "6-10", label: "6–10 travelers" },
      { value: "11-20", label: "11–20 travelers" },
      { value: "20+", label: "20+ travelers" },
    ],
    messageLabel: "Your Message *",
    messagePlaceholder: "Tell us about your ideal tour experience, special requirements, or any questions...",
    sendButton: "Send Message & Get Free Quote",
    sending: "Sending...",
    sidebarTitle: "Get in Touch",
    callUs: "Call Us",
    email: "Email",
    office: "Office",
    hours: "Hours",
    hoursValue: "Mon-Sun 7 AM – 9 PM CST",
    whyTitle: "Why Contact Us?",
    whyItems: [
      "✓ Personalized tour recommendations",
      "✓ Group discounts for 6+ travelers",
      "✓ Custom itinerary planning",
      "✓ Respond within 2 hours",
      "✓ No obligation, free quotes",
    ],
  };

  return (
    <>
      <SEOHead meta={meta} />
      <div className="container py-6">
        <Breadcrumbs items={[{ label: c.breadcrumb }]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
          {/* Form */}
          <div className="lg:col-span-2">
            <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-3">
              {c.h1}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl">
              {c.subtitle}
            </p>

            {submitted ? (
              <div className="bg-success/10 border border-success/30 rounded-lg p-8 text-center">
                <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                <h2 className="font-heading font-bold text-2xl mb-2">{c.thankYou}</h2>
                <p className="text-muted-foreground mb-4">{c.thankYouDesc}</p>
                <Button variant="cta" asChild>
                  <LocaleLink to="/tours">{c.thankYouCta}</LocaleLink>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{c.nameLabel}</Label>
                    <Input id="name" placeholder={c.namePlaceholder} {...register("name")} className="mt-1" />
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">{c.emailLabel}</Label>
                    <Input id="email" type="email" placeholder={c.emailPlaceholder} {...register("email")} className="mt-1" />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">{c.phoneLabel}</Label>
                    <Input id="phone" placeholder={c.phonePlaceholder} {...register("phone")} className="mt-1" />
                  </div>
                  <div>
                    <Label>{c.subjectLabel}</Label>
                    <Select onValueChange={(v) => setValue("subject", v)}>
                      <SelectTrigger className="mt-1"><SelectValue placeholder={c.subjectPlaceholder} /></SelectTrigger>
                      <SelectContent>
                        {c.subjects.map((s) => (
                          <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="travelDate">{c.dateLabel}</Label>
                    <Input id="travelDate" type="date" {...register("travelDate")} className="mt-1" />
                  </div>
                  <div>
                    <Label>{c.groupLabel}</Label>
                    <Select onValueChange={(v) => setValue("groupSize", v)}>
                      <SelectTrigger className="mt-1"><SelectValue placeholder={c.groupPlaceholder} /></SelectTrigger>
                      <SelectContent>
                        {c.groupOptions.map((o) => (
                          <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">{c.messageLabel}</Label>
                  <Textarea id="message" placeholder={c.messagePlaceholder} rows={5} {...register("message")} className="mt-1" />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  <Send className="h-4 w-4 mr-2" /> {isSubmitting ? c.sending : c.sendButton}
                </Button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-card rounded-lg shadow-card p-6">
              <h2 className="font-heading font-semibold text-lg mb-4">{c.sidebarTitle}</h2>
              <div className="space-y-4 text-sm">
                <a href="tel:+529981234567" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <div><p className="font-semibold">{c.callUs}</p><p className="text-muted-foreground">+52 998 123 4567</p></div>
                </a>
                <a href="mailto:info@chichenitzatours.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <div><p className="font-semibold">{c.email}</p><p className="text-muted-foreground">info@chichenitzatours.com</p></div>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <div><p className="font-semibold">{c.office}</p><p className="text-muted-foreground">Cancún, Quintana Roo, MX</p></div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <div><p className="font-semibold">{c.hours}</p><p className="text-muted-foreground">{c.hoursValue}</p></div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h3 className="font-heading font-semibold mb-2">{c.whyTitle}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {c.whyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <TrustBadges variant="compact" />
          </aside>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
