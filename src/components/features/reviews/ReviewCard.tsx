import { Star, Quote, BadgeCheck } from "lucide-react";
import type { Review } from "@/lib/reviewsData";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => (
  <div className="bg-card rounded-lg shadow-card p-6 flex flex-col hover:shadow-card-hover transition-shadow duration-300">
    <Quote className="h-6 w-6 text-primary/30 mb-3 shrink-0" />
    <h3 className="font-heading font-semibold text-sm mb-2">{review.title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
      "{review.content}"
    </p>
    <div className="flex gap-0.5 mb-2">
      {[...Array(5)].map((_, j) => (
        <Star
          key={j}
          className={`h-4 w-4 ${j < review.rating ? "fill-accent text-accent" : "text-muted"}`}
        />
      ))}
    </div>
    <div className="flex items-center gap-1.5">
      <span className="font-heading font-semibold text-sm">{review.author}</span>
      {review.verified && (
        <BadgeCheck className="h-4 w-4 text-secondary" />
      )}
    </div>
    <p className="text-xs text-muted-foreground">
      {review.location} • {review.date}
    </p>
  </div>
);

export default ReviewCard;
