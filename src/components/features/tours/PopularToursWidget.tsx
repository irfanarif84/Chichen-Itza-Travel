import { Star } from "lucide-react";
import { tours } from "@/lib/tourData";
import { tourImages } from "@/lib/tourImages";
import { useLocale } from "@/lib/i18n/useLocale";
import { tourTranslationsEs } from "@/lib/tourData.es";
import { LocaleLink } from "@/components/LocaleLink";

interface PopularToursWidgetProps {
  excludeTourId?: string;
  maxTours?: number;
  departureCity?: string;
}

const PopularToursWidget = ({
  excludeTourId,
  maxTours = 3,
  departureCity,
}: PopularToursWidgetProps) => {
  const { isEs } = useLocale();

  const popular = tours
    .filter((t) => t.featured && t.id !== excludeTourId)
    .filter((t) => !departureCity || t.departureCity.includes(departureCity as any))
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, maxTours);

  return (
    <div className="bg-card rounded-lg border border-border p-5">
      <h3 className="font-heading font-bold text-base mb-4">
        🔥 {isEs ? "Tours Populares" : "Popular Tours"}
      </h3>
      <div className="space-y-4">
        {popular.map((tour) => {
          const es = isEs ? tourTranslationsEs[tour.id] : null;
          const shortTitle = es?.shortTitle ?? tour.shortTitle;

          return (
            <LocaleLink
              key={tour.id}
              to={`/tours/${tour.slug}`}
              className="flex gap-3 group"
            >
              <img
                src={tourImages[tour.id] || "/placeholder.svg"}
                alt={shortTitle}
                className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                loading="lazy"
                width={64}
                height={64}
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {shortTitle}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <span className="text-xs text-muted-foreground">
                    {tour.rating} ({tour.reviewCount.toLocaleString()})
                  </span>
                </div>
                <p className="text-sm font-bold text-primary mt-0.5">
                  {isEs ? "Desde" : "From"} ${tour.price.adult}
                </p>
              </div>
            </LocaleLink>
          );
        })}
      </div>
    </div>
  );
};

export default PopularToursWidget;
