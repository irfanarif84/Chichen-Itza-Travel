import { Link } from "react-router-dom";
import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getPageMeta } from "@/lib/seo";
import { tours } from "@/lib/tourData";
import TourCard from "@/components/features/tours/TourCard";
import TrustBadges from "@/components/features/booking/TrustBadges";
import CTASection from "@/components/features/home/CTASection";

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
        <p className="text-muted-foreground max-w-2xl mb-4">
          Compare our full range of Chichen Itza tours. From budget-friendly day trips to exclusive private VIP experiences — find your perfect adventure.
        </p>
        <p className="text-muted-foreground max-w-2xl text-sm">
          Browse by type: <Link to="/tours/day-tours" className="text-primary hover:underline">day tours</Link>,{" "}
          <Link to="/tours/private-tours" className="text-primary hover:underline">private tours</Link>,{" "}
          <Link to="/tours/sunrise-tours" className="text-primary hover:underline">sunrise tours</Link>,{" "}
          <Link to="/tours/cenote-tours" className="text-primary hover:underline">cenote combos</Link>,{" "}
          <Link to="/tours/night-tours" className="text-primary hover:underline">night shows</Link>,{" "}
          <Link to="/tours/ek-balam-tours" className="text-primary hover:underline">Ek Balam combos</Link>, or{" "}
          <Link to="/tours/valladolid-tours" className="text-primary hover:underline">Valladolid combos</Link>.
          Not sure which to pick? Read our <Link to="/guide/best-time-to-visit" className="text-primary hover:underline">best time to visit guide</Link> or{" "}
          <Link to="/guide/vs-other-ruins" className="text-primary hover:underline">compare Mayan ruins</Link>.
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

    <CTASection />

    <section className="py-12 bg-muted/30 border-t border-border">
      <div className="container">
        <h2 className="font-heading font-semibold text-lg mb-6">Explore by Category & Destination</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: "From Cancún", href: "/tours-from/cancun" },
            { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
            { label: "From Tulum", href: "/tours-from/tulum" },
            { label: "From Riviera Maya", href: "/tours-from/riviera-maya" },
            { label: "From Mérida", href: "/tours-from/merida" },
            { label: "Budget Tours", href: "/tour-types/budget" },
            { label: "Family Friendly", href: "/tour-types/family-friendly" },
            { label: "Luxury Tours", href: "/tour-types/luxury" },
            { label: "Small Group", href: "/tour-types/small-group" },
            { label: "VIP Skip the Line", href: "/tour-types/vip-skip-the-line" },
            { label: "Photography Tips", href: "/guide/photography-tips" },
            { label: "What to Bring", href: "/guide/what-to-bring" },
            { label: "Entrance Fees", href: "/guide/entrance-fees" },
            { label: "Testimonials", href: "/practical/testimonials" },
            { label: "FAQ", href: "/practical/faq" },
          ].map((link) => (
            <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ToursPage;