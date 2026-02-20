import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewCard from "./ReviewCard";
import type { Review } from "@/lib/reviewsData";
import { getAverageRating } from "@/lib/reviewsData";

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
  title = "What Travelers Say",
  showAggregate = true,
  showAllLink = false,
}: ReviewGridProps) => {
  const displayed = limit ? reviews.slice(0, limit) : reviews;
  const avg = getAverageRating(reviews);

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2">{title}</h2>
        {showAggregate && reviews.length > 0 && (
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-heading font-bold">{avg}/5</span>
            <span className="text-sm text-muted-foreground">
              from {reviews.length} review{reviews.length !== 1 ? "s" : ""}
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
            <Link to="/practical/testimonials">
              See All Reviews <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReviewGrid;
