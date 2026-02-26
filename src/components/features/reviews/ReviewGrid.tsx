import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewCard from "./ReviewCard";
import type { Review } from "@/lib/reviewsData";
import { getAverageRating } from "@/lib/reviewsData";
import { useLocale } from "@/lib/i18n/useLocale";
import { LocaleLink } from "@/components/LocaleLink";

interface ReviewGridProps {
  reviews: Review[];
  limit?: number;
  title?: string;
  showAggregate?: boolean;
  showAllLink?: boolean;
}

const ReviewGrid = ({
  reviews,
  limit,
  title,
  showAggregate = true,
  showAllLink = false,
}: ReviewGridProps) => {
  const { isEs } = useLocale();
  const displayed = limit ? reviews.slice(0, limit) : reviews;
  const avg = getAverageRating(reviews);
  const displayTitle = title || (isEs ? "Lo Que Dicen los Viajeros" : "What Travelers Say");

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">{displayTitle}</h2>
        {showAggregate && reviews.length > 0 && (
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-heading font-bold">{avg}/5</span>
            <span className="text-sm text-muted-foreground">
              {isEs ? "de" : "from"} {reviews.length} {isEs ? (reviews.length !== 1 ? "reseñas" : "reseña") : (reviews.length !== 1 ? "reviews" : "review")}
            </span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>

      {showAllLink && (
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <LocaleLink to="/practical/testimonials">
              {isEs ? "Ver Todas las Reseñas" : "See All Reviews"} <ArrowRight className="h-4 w-4 ml-1" />
            </LocaleLink>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReviewGrid;
