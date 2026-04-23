import { LocaleLink as Link } from "@/components/LocaleLink";
import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import { generateTourItemListSchema } from "@/lib/schema";
import { tours } from "@/lib/tourData";
import TourCard from "@/components/features/tours/TourCard";
import TrustBadges from "@/components/features/booking/TrustBadges";
import CTASection from "@/components/features/home/CTASection";
import { useLocale } from "@/lib/i18n/useLocale";

const ToursPage = () => {
  const { locale, t, localePath } = useLocale();

  const c = locale === "es" ? {
    seoTitle: "Todos los Tours a Chichén Itzá – Compara y Reserva | 2026",
    seoDesc: "Explora todos los tours a Chichén Itzá. Compara precios, duraciones y reseñas. Tours de día, VIP privados, al amanecer, combos con cenotes y más. Cancelación gratuita.",
    h1: "Todos los Tours y Excursiones a Chichén Itzá",
    subtitle: "Compara nuestra gama completa de tours a Chichén Itzá. Desde excursiones económicas hasta experiencias VIP privadas — encuentra tu aventura perfecta.",
    browseBy: "Buscar por tipo:",
    notSure: "¿No sabes cuál elegir? Lee nuestra",
    bestTimeGuide: "guía de mejor época para visitar",
    or: "o",
    compareRuins: "compara ruinas mayas",
    exploreByCategory: "Explorar por Categoría y Destino",
  } : {
    seoTitle: "All Chichen Itza Tours – Compare & Book | 2026",
    seoDesc: "Browse all Chichen Itza tours. Compare prices, durations, and reviews. Day tours, private VIP, sunrise, cenote combos & more. Free cancellation.",
    h1: "All Chichen Itza Tours & Excursions",
    subtitle: "Compare our full range of Chichen Itza tours. From budget-friendly day trips to exclusive private VIP experiences — find your perfect adventure.",
    browseBy: "Browse by type:",
    notSure: "Not sure which to pick? Read our",
    bestTimeGuide: "best time to visit guide",
    or: "or",
    compareRuins: "compare Mayan ruins",
    exploreByCategory: "Explore by Category & Destination",
  };

  const meta = getPageMeta({
    title: c.seoTitle,
    description: c.seoDesc,
    canonical: localePath("/tours"),
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: locale === "es" ? "Inicio" : "Home", url: "/" },
        { name: "Tours" },
      ]),
      generateTourItemListSchema({
        name: c.h1,
        description: c.subtitle,
        url: "/tours",
        tours,
      }),
    ],
  });

  const links = [
    { label: locale === "es" ? "Desde Cancún" : "From Cancún", href: "/tours-from/cancun" },
    { label: locale === "es" ? "Desde Playa del Carmen" : "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
    { label: locale === "es" ? "Desde Tulum" : "From Tulum", href: "/tours-from/tulum" },
    { label: locale === "es" ? "Desde Riviera Maya" : "From Riviera Maya", href: "/tours-from/riviera-maya" },
    { label: locale === "es" ? "Desde Mérida" : "From Mérida", href: "/tours-from/merida" },
    { label: locale === "es" ? "Tours Económicos" : "Budget Tours", href: "/tour-types/budget" },
    { label: locale === "es" ? "Familiar" : "Family Friendly", href: "/tour-types/family-friendly" },
    { label: locale === "es" ? "Tours de Lujo" : "Luxury Tours", href: "/tour-types/luxury" },
    { label: locale === "es" ? "Grupos Pequeños" : "Small Group", href: "/tour-types/small-group" },
    { label: locale === "es" ? "VIP Sin Filas" : "VIP Skip the Line", href: "/tour-types/vip-skip-the-line" },
    { label: locale === "es" ? "Consejos de Fotografía" : "Photography Tips", href: "/guide/photography-tips" },
    { label: locale === "es" ? "Qué Llevar" : "What to Bring", href: "/guide/what-to-bring" },
    { label: locale === "es" ? "Precios de Entrada" : "Entrance Fees", href: "/guide/entrance-fees" },
    { label: locale === "es" ? "Testimonios" : "Testimonials", href: "/practical/testimonials" },
    { label: locale === "es" ? "Preguntas Frecuentes" : "FAQ", href: "/practical/faq" },
  ];

  return (
    <>
      <SEOHead meta={meta} />
      <div className="container py-6">
        <Breadcrumbs items={[{ label: "Tours" }]} />

        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-3">{c.h1}</h1>
          <p className="text-muted-foreground max-w-2xl mb-4">{c.subtitle}</p>
          <p className="text-muted-foreground max-w-2xl text-sm">
            {c.browseBy}{" "}
            <Link to="/tours/day-tours" className="text-primary hover:underline">{t("tour.dayTours").toLowerCase()}</Link>,{" "}
            <Link to="/tours/private-tours" className="text-primary hover:underline">{t("tour.privateTours").toLowerCase()}</Link>,{" "}
            <Link to="/tours/sunrise-tours" className="text-primary hover:underline">{t("tour.sunriseTours").toLowerCase()}</Link>,{" "}
            <Link to="/tours/cenote-tours" className="text-primary hover:underline">{t("tour.cenoteTours").toLowerCase()}</Link>,{" "}
            <Link to="/tours/night-tours" className="text-primary hover:underline">{t("tour.nightTours").toLowerCase()}</Link>,{" "}
            <Link to="/tours/ek-balam-tours" className="text-primary hover:underline">{t("tour.ekBalamTours")}</Link>,{" "}
            {locale === "es" ? "o " : "or "}
            <Link to="/tours/valladolid-tours" className="text-primary hover:underline">{t("tour.valladolidTours")}</Link>.
            {" "}{c.notSure}{" "}
            <Link to="/guide/best-time-to-visit" className="text-primary hover:underline">{c.bestTimeGuide}</Link>{" "}
            {c.or}{" "}
            <Link to="/guide/vs-other-ruins" className="text-primary hover:underline">{c.compareRuins}</Link>.
          </p>
        </div>

        <div className="mb-8"><TrustBadges /></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>

      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">{c.exploreByCategory}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {links.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ToursPage;
