// Tour hero images
import classicDayTour from "@/assets/tours/classic-day-tour.webp";
import privateVipTour from "@/assets/tours/private-vip-tour.webp";
import sunriseTour from "@/assets/tours/sunrise-tour.webp";
import cenoteCombo from "@/assets/tours/cenote-combo.webp";
import budgetExpress from "@/assets/tours/budget-express.webp";
import familyAdventure from "@/assets/tours/family-adventure.webp";
import nightShow from "@/assets/tours/night-show.webp";
import valladolidCombo from "@/assets/tours/valladolid-combo.webp";
import privateSunrise from "@/assets/tours/private-sunrise.webp";
import budgetPlaya from "@/assets/tours/budget-playa.webp";
import cenoteSaamal from "@/assets/tours/cenote-saamal.webp";
import ekBalamCombo from "@/assets/tours/ek-balam-combo.webp";
import meridaCultural from "@/assets/tours/merida-cultural.webp";

// Location hero images
import cancun from "@/assets/locations/cancun.webp";
import playaDelCarmen from "@/assets/locations/playa-del-carmen.webp";
import tulum from "@/assets/locations/tulum.webp";
import rivieraMaya from "@/assets/locations/riviera-maya.webp";
import merida from "@/assets/locations/merida.webp";

// Guide hero images
import bestTimeToVisit from "@/assets/guide/best-time-to-visit.webp";
import dressCode from "@/assets/guide/dress-code.webp";
import entranceFees from "@/assets/guide/entrance-fees.webp";
import historyAndFacts from "@/assets/guide/history-and-facts.webp";
import howToGetThere from "@/assets/guide/how-to-get-there.webp";
import photographyTips from "@/assets/guide/photography-tips.webp";
import whatToBring from "@/assets/guide/what-to-bring.webp";

export const tourImages: Record<string, string> = {
  "classic-day-tour": classicDayTour,
  "private-vip-tour": privateVipTour,
  "sunrise-tour": sunriseTour,
  "cenote-ik-kil-combo": cenoteCombo,
  "budget-express": budgetExpress,
  "family-adventure": familyAdventure,
  "night-light-show": nightShow,
  "chichen-valladolid-combo": valladolidCombo,
  "private-sunrise-tour": privateSunrise,
  "budget-day-playa": budgetPlaya,
  "cenote-saamal-combo": cenoteSaamal,
  "ek-balam-combo": ekBalamCombo,
  "merida-cultural-tour": meridaCultural,
};

export const locationImages: Record<string, string> = {
  cancun,
  "playa-del-carmen": playaDelCarmen,
  tulum,
  "riviera-maya": rivieraMaya,
  merida,
};

export const guideImages: Record<string, string> = {
  "best-time-to-visit": bestTimeToVisit,
  "dress-code-and-rules": dressCode,
  "entrance-fees": entranceFees,
  "history-and-facts": historyAndFacts,
  "how-to-get-there": howToGetThere,
  "photography-tips": photographyTips,
  "what-to-bring": whatToBring,
};
