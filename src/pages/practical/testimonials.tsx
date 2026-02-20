import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getPageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ReviewGrid from "@/components/features/reviews/ReviewGrid";
import { reviews, getAverageRating, generateReviewSchema } from "@/lib/reviewsData";

const meta = getPageMeta({
  title: "Testimonials – 10,000+ Happy Travelers | Chichen Itza Tours",
  description: "Read real reviews from 10,000+ travelers who loved our Chichen Itza tours. Rated 4.8/5 stars. See why we're the #1 rated tour operator.",
  canonical: "/practical/testimonials",
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
  { value: "all", label: "All Categories" },
  { value: "day-tour", label: "Day Tour" },
  { value: "private", label: "Private" },
  { value: "sunrise", label: "Sunrise" },
  { value: "cenote", label: "Cenote" },
  { value: "night", label: "Night" },
  { value: "ek-balam", label: "Ek Balam" },
  { value: "valladolid", label: "Valladolid" },
];

const cityOptions = [
  { value: "all", label: "All Cities" },
  { value: "cancun", label: "Cancún" },
  { value: "playa-del-carmen", label: "Playa del Carmen" },
  { value: "tulum", label: "Tulum" },
  { value: "riviera-maya", label: "Riviera Maya" },
  { value: "merida", label: "Mérida" },
];

const TestimonialsPage = () => {
  const [category, setCategory] = useState("all");
  const [city, setCity] = useState("all");

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
        <Breadcrumbs items={[{ label: "Testimonials" }]} />

        <div className="text-center mb-10 mt-6">
          <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-3">
            What Our Travelers Say
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Over 10,000 travelers have trusted us with their Chichen Itza experience. Here's what they have to say.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-md mx-auto">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Tour Category" />
            </SelectTrigger>
            <SelectContent>
              {categoryOptions.map((o) => (
                <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger>
              <SelectValue placeholder="Departure City" />
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
          <p className="text-center text-muted-foreground py-12">No reviews match your filters.</p>
        )}

        {/* CTA */}
        <div className="text-center bg-card rounded-lg shadow-card p-8 mt-12">
          <h2 className="font-heading font-bold text-2xl mb-2">Join 10,000+ Happy Travelers</h2>
          <p className="text-muted-foreground mb-4">Book your Chichen Itza tour today with free cancellation.</p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/tours">Explore Tours <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
