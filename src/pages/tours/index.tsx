import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getPageMeta } from "@/lib/seo";
import { tours } from "@/lib/tourData";
import TourCard from "@/components/features/tours/TourCard";
import TrustBadges from "@/components/features/booking/TrustBadges";

const meta = getPageMeta({
  title: "All Chichen Itza Tours – Compare & Book | 2026",
  description: "Browse all Chichen Itza tours. Compare prices, durations, and reviews. Day tours, private VIP, sunrise, cenote combos & more. Free cancellation.",
  canonical: "/tours",
});

const ToursPage = () => (
  <>
    <SEOHead meta={meta} />
    <div className="container py-6">
      <Breadcrumbs items={[{ label: "Tours" }]} />

      <div className="mb-8">
        <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-3">
          All Chichen Itza Tours & Excursions
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Compare our full range of Chichen Itza tours. From budget-friendly day trips to exclusive private VIP experiences — find your perfect adventure.
        </p>
      </div>

      <div className="mb-8">
        <TrustBadges />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  </>
);

export default ToursPage;