import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getPageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ReviewGrid from "@/components/features/reviews/ReviewGrid";
import LocaleLink from "@/components/LocaleLink";
import RelatedResources from "@/components/common/RelatedResources";
import { useLocale } from "@/lib/i18n/useLocale";
import { reviews, getAverageRating, generateReviewSchema } from "@/lib/reviewsData";

const TestimonialsPage = () => {
  const { locale, isEs } = useLocale();
  const [category, setCategory] = useState("all");
  const [city, setCity] = useState("all");

  const meta = getPageMeta({
    title: isEs
      ? "Testimonios – 10,000+ Viajeros Felices | Tours Chichén Itzá"
      : "Testimonials – 10,000+ Happy Travelers | Chichen Itza Tours",
    description: isEs
      ? "Lee reseñas reales de más de 10,000 viajeros que amaron nuestros tours a Chichén Itzá. Calificación 4.8/5 estrellas."
      : "Read real reviews from 10,000+ travelers who loved our Chichen Itza tours. Rated 4.8/5 stars. See why we're the #1 rated tour operator.",
    canonical: "/practical/testimonials",
    locale,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Chichen Itza Tours",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: getAverageRating(reviews).toString(),
          reviewCount: reviews.length.toString(),
          bestRating: "5",
        },
        review: generateReviewSchema(reviews),
      },
    ],
  });

  const categoryOptions = [
    { value: "all", label: isEs ? "Todas las Categorías" : "All Categories" },
    { value: "day-tour", label: isEs ? "Tour de un Día" : "Day Tour" },
    { value: "private", label: isEs ? "Privado" : "Private" },
    { value: "sunrise", label: isEs ? "Amanecer" : "Sunrise" },
    { value: "cenote", label: "Cenote" },
    { value: "night", label: isEs ? "Nocturno" : "Night" },
    { value: "ek-balam", label: "Ek Balam" },
    { value: "valladolid", label: "Valladolid" },
  ];

  const cityOptions = [
    { value: "all", label: isEs ? "Todas las Ciudades" : "All Cities" },
    { value: "cancun", label: "Cancún" },
    { value: "playa-del-carmen", label: "Playa del Carmen" },
    { value: "tulum", label: "Tulum" },
    { value: "riviera-maya", label: "Riviera Maya" },
    { value: "merida", label: "Mérida" },
  ];

  const filtered = useMemo(
    () =>
      reviews.filter(
        (r) =>
          (category === "all" || r.tourCategory === category) &&
          (city === "all" || r.departureCity === city)
      ),
    [category, city]
  );

  return (
    <>
      <SEOHead meta={meta} />
      <div className="container py-6">
        <Breadcrumbs items={[{ label: isEs ? "Testimonios" : "Testimonials" }]} />

        <div className="text-center mb-10 mt-6">
          <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-3">
            {isEs ? "Lo Que Dicen Nuestros Viajeros" : "What Our Travelers Say"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            {isEs
              ? "Más de 10,000 viajeros han confiado en nosotros para su experiencia en Chichén Itzá. Esto es lo que dicen."
              : "Over 10,000 travelers have trusted us with their Chichen Itza experience. Here's what they have to say."}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-md mx-auto">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder={isEs ? "Categoría del Tour" : "Tour Category"} />
            </SelectTrigger>
            <SelectContent>
              {categoryOptions.map((o) => (
                <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger>
              <SelectValue placeholder={isEs ? "Ciudad de Salida" : "Departure City"} />
            </SelectTrigger>
            <SelectContent>
              {cityOptions.map((o) => (
                <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <ReviewGrid reviews={filtered} showAggregate />

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            {isEs ? "No hay reseñas que coincidan con tus filtros." : "No reviews match your filters."}
          </p>
        )}

        {/* CTA */}
        <div className="text-center bg-card rounded-lg shadow-card p-8 mt-12">
          <h2 className="font-heading font-bold text-2xl mb-2">
            {isEs ? "Únete a 10,000+ Viajeros Felices" : "Join 10,000+ Happy Travelers"}
          </h2>
          <p className="text-muted-foreground mb-4">
            {isEs ? "Reserva tu tour a Chichén Itzá hoy con cancelación gratuita." : "Book your Chichen Itza tour today with free cancellation."}
          </p>
          <Button variant="cta" size="lg" asChild>
            <LocaleLink to="/tours">{isEs ? "Explorar Tours" : "Explore Tours"} <ArrowRight className="h-4 w-4 ml-1" /></LocaleLink>
          </Button>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
