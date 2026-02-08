import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedTours } from "@/lib/tourData";
import TourCard from "@/components/features/tours/TourCard";

const PopularTours = () => {
  const featured = getFeaturedTours();

  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Most Popular</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mt-2 mb-3">
            Top-Rated Chichen Itza Tours
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose from our hand-picked selection of the most popular and highly-rated tours. All include free cancellation and instant confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/tours">
              View All Tours <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;