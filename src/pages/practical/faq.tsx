import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { HelpCircle, Search, ChevronRight, MapPin, Compass, CreditCard, Sun, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createFAQSchema, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/common/FAQ";
import TrustBadges from "@/components/features/booking/TrustBadges";
import CTASection from "@/components/features/home/CTASection";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";
import { useLocalizedFAQs } from "@/hooks/useFAQLocale";
import type { FAQItem } from "@/lib/faqData";

const FAQPage = () => {
  const { locale, isEs } = useLocale();
  const { getFAQs } = useLocalizedFAQs();
  const [search, setSearch] = useState("");

  const generalFAQs = getFAQs("general");
  const practicalFAQsList = getFAQs("practical");
  const dayToursFAQsList = getFAQs("dayTours");
  const privateToursFAQsList = getFAQs("privateTours");
  const cenoteToursFAQsList = getFAQs("cenoteTours");
  const sunriseToursFAQsList = getFAQs("sunriseTours");

  const allFAQs: FAQItem[] = [
    ...generalFAQs,
    ...practicalFAQsList,
    ...dayToursFAQsList,
    ...privateToursFAQsList,
    ...cenoteToursFAQsList,
    ...sunriseToursFAQsList,
  ];

  const categories = useMemo(() => [
    { id: "general", label: isEs ? "General" : "General", icon: HelpCircle, faqs: generalFAQs },
    { id: "booking", label: isEs ? "Reservas y Pagos" : "Booking & Payments", icon: CreditCard, faqs: practicalFAQsList },
    { id: "day-tours", label: isEs ? "Tours de un Día" : "Day Tours", icon: Compass, faqs: dayToursFAQsList },
    { id: "private", label: isEs ? "Tours Privados" : "Private Tours", icon: Users, faqs: privateToursFAQsList },
    { id: "cenotes", label: isEs ? "Tours de Cenotes" : "Cenote Tours", icon: MapPin, faqs: cenoteToursFAQsList },
    { id: "sunrise", label: isEs ? "Tours al Amanecer" : "Sunrise Tours", icon: Sun, faqs: sunriseToursFAQsList },
  ], [isEs, generalFAQs, practicalFAQsList, dayToursFAQsList, privateToursFAQsList, cenoteToursFAQsList, sunriseToursFAQsList]);

  const meta = getPageMeta({
    title: isEs
      ? "Preguntas Frecuentes – Tours Chichén Itzá"
      : "Chichen Itza Tours FAQ – Your Questions Answered",
    description: isEs
      ? "Respuestas a todas tus preguntas sobre tours a Chichén Itzá: precios, qué llevar, mejor época, política de cancelación y más."
      : "Find answers to all your Chichen Itza tour questions: pricing, what to bring, best time to visit, cancellation policy, and more. Plan your perfect trip.",
    canonical: "/practical/faq",
    locale,
    jsonLd: [
      createFAQSchema(allFAQs),
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: isEs ? "Preguntas Frecuentes" : "FAQ" },
      ]),
    ],
  });

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return categories;
    const q = search.toLowerCase();
    return categories
      .map((cat) => ({
        ...cat,
        faqs: cat.faqs.filter(
          (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.faqs.length > 0);
  }, [search, categories]);

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: isEs ? "Preguntas Frecuentes" : "FAQ" }]} />
          <div className="mt-4 max-w-3xl">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {isEs
                ? "Preguntas Frecuentes Sobre Tours a Chichén Itzá"
                : "Frequently Asked Questions About Chichen Itza Tours"}
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-xl">
              {isEs
                ? "Todo lo que necesitas saber antes de reservar tu aventura a Chichén Itzá — desde precios y logística hasta qué vestir y llevar."
                : "Everything you need to know before booking your Chichen Itza adventure — from pricing and logistics to what to wear and bring."}
            </p>
            <p className="text-sm text-muted-foreground mb-6 max-w-xl">
              {isEs
                ? "Esta página recopila las 60+ preguntas que recibimos con más frecuencia, organizadas por tema. Si visitas por primera vez, comienza con \"General\" para los conceptos básicos, luego salta a la categoría de tour que te interesa. Las respuestas se actualizan trimestralmente con los precios, horarios y reglas del sitio del INAH más recientes."
                : "This page collects the 60+ questions we hear most often, organised by topic. First-time visitor? Start with \"General\" for the basics, then jump to the tour category you're considering. Answers are refreshed every quarter with the latest pricing, schedules, and INAH site rules."}
            </p>

            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={isEs ? "Buscar preguntas..." : "Search questions..."}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      {!search && (
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <cat.icon className="h-3.5 w-3.5" />
                  {cat.label} ({cat.faqs.length})
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Sections */}
      <div className="container py-12 lg:py-16">
        {filteredCategories.length > 0 ? (
          <div className="space-y-12">
            {filteredCategories.map((cat) => (
              <div key={cat.id} id={cat.id}>
                <FAQSection
                  faqs={cat.faqs}
                  title={cat.label}
                  subtitle={`${cat.faqs.length} ${isEs ? "preguntas" : "questions"}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              {isEs ? `No hay preguntas que coincidan con "${search}"` : `No questions match "${search}"`}
            </p>
            <Button variant="outline" onClick={() => setSearch("")}>
              {isEs ? "Limpiar Búsqueda" : "Clear Search"}
            </Button>
          </div>
        )}
      </div>

      <div className="container pb-8"><TrustBadges /></div>

      {/* Still Have Questions */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container text-center max-w-2xl">
          <h2 className="font-heading font-bold text-2xl mb-3">
            {isEs ? "¿Aún Tienes Preguntas?" : "Still Have Questions?"}
          </h2>
          <p className="text-muted-foreground mb-6">
            {isEs
              ? "¿No encuentras lo que buscas? Nuestros expertos en viajes están felices de ayudarte a planificar tu tour perfecto a Chichén Itzá."
              : "Can't find what you're looking for? Our travel experts are happy to help you plan the perfect Chichen Itza tour."}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <LocaleLink to="/tours">{isEs ? "Ver Todos los Tours" : "Browse All Tours"} <ChevronRight className="h-5 w-5" /></LocaleLink>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <LocaleLink to="/guide/best-time-to-visit">{isEs ? "Guía de Planificación" : "Planning Guide"}</LocaleLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">{isEs ? "Explorar Más" : "Explore More"}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: isEs ? "Todos los Tours" : "All Tours", href: "/tours" },
              { label: isEs ? "Tours de un Día" : "Day Tours", href: "/tours/day-tours" },
              { label: isEs ? "Tours Privados" : "Private Tours", href: "/tours/private-tours" },
              { label: isEs ? "Tours de Cenotes" : "Cenote Tours", href: "/tours/cenote-tours" },
              { label: isEs ? "Desde Cancún" : "From Cancún", href: "/tours-from/cancun" },
              { label: isEs ? "Desde Playa del Carmen" : "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
              { label: isEs ? "Mejor Época para Visitar" : "Best Time to Visit", href: "/guide/best-time-to-visit" },
              { label: isEs ? "Qué Llevar" : "What to Bring", href: "/guide/what-to-bring" },
            ].map((link) => (
              <LocaleLink key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label} →
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default FAQPage;
