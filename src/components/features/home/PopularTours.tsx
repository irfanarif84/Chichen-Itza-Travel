import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedTours } from "@/lib/tourData";
import TourCard from "@/components/features/tours/TourCard";
import { useLocale } from "@/lib/i18n/useLocale";

const PopularTours = () => {
  const featured = getFeaturedTours();
  const { t, localePath } = useLocale();

  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("popular.label")}</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mt-2 mb-3">{t("popular.h2")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("popular.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to={localePath("/tours")}>
              {t("popular.viewAll")} <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
