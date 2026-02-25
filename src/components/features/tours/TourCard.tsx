import { Link } from "react-router-dom";
import { Star, Clock, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { tourImages } from "@/lib/tourImages";
import { useLocale } from "@/lib/i18n/useLocale";
import type { Tour } from "@/types/tour";

interface TourCardProps {
  tour: Tour;
}

const TourCard = ({ tour }: TourCardProps) => {
  const heroSrc = tourImages[tour.id];
  const { t, localePath } = useLocale();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent z-10" />
        {heroSrc ? (
          <img
            src={heroSrc}
            alt={`${tour.title} - Chichen Itza tour photo`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width={1024}
            height={576}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />
        )}
        {tour.badge && (
          <span className="absolute top-3 left-3 z-20 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-md">
            {tour.badge}
          </span>
        )}
        <div className="absolute bottom-3 left-3 z-20">
          <div className="flex items-center gap-1 text-primary-foreground">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-bold">{tour.rating}</span>
            <span className="text-xs opacity-80">({tour.reviewCount.toLocaleString()} {t("tourCard.reviews")})</span>
          </div>
        </div>
        <div className="absolute bottom-3 right-3 z-20">
          <div className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-bold">
            {tour.originalPrice && (
              <span className="line-through opacity-60 mr-1 text-xs">${tour.originalPrice}</span>
            )}
            ${tour.price.adult}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-heading font-semibold text-base mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
          {tour.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{tour.shortDescription}</p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 mt-auto">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" /> {tour.groupSize.type === "private" ? t("tourCard.private") : `${t("tourCard.max")} ${tour.groupSize.max}`}
          </span>
        </div>

        <Button variant="cta" size="sm" className="w-full" asChild>
          <Link to={localePath(`/tours/${tour.slug}`)}>
            {t("tourCard.viewDetails")} <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default TourCard;
