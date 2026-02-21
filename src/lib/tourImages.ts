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

// Gallery images
import budgetExpress1 from "@/assets/tours/gallery/budget-express-1.webp";
import budgetExpress2 from "@/assets/tours/gallery/budget-express-2.webp";
import budgetExpress3 from "@/assets/tours/gallery/budget-express-3.webp";
import familyAdventure1 from "@/assets/tours/gallery/family-adventure-1.webp";
import familyAdventure2 from "@/assets/tours/gallery/family-adventure-2.webp";
import familyAdventure3 from "@/assets/tours/gallery/family-adventure-3.webp";
import nightShow1 from "@/assets/tours/gallery/night-show-1.webp";
import nightShow2 from "@/assets/tours/gallery/night-show-2.webp";
import nightShow3 from "@/assets/tours/gallery/night-show-3.webp";
import valladolidCombo1 from "@/assets/tours/gallery/valladolid-combo-1.webp";
import valladolidCombo2 from "@/assets/tours/gallery/valladolid-combo-2.webp";
import valladolidCombo3 from "@/assets/tours/gallery/valladolid-combo-3.webp";
import budgetPlaya1 from "@/assets/tours/gallery/budget-playa-1.webp";
import budgetPlaya2 from "@/assets/tours/gallery/budget-playa-2.webp";
import budgetPlaya3 from "@/assets/tours/gallery/budget-playa-3.webp";
import meridaCultural1 from "@/assets/tours/gallery/merida-cultural-1.webp";
import meridaCultural2 from "@/assets/tours/gallery/merida-cultural-2.webp";
import meridaCultural3 from "@/assets/tours/gallery/merida-cultural-3.webp";
import classicDay1 from "@/assets/tours/gallery/classic-day-1.webp";
import classicDay2 from "@/assets/tours/gallery/classic-day-2.webp";
import classicDay3 from "@/assets/tours/gallery/classic-day-3.webp";
import privateVip1 from "@/assets/tours/gallery/private-vip-1.webp";
import privateVip2 from "@/assets/tours/gallery/private-vip-2.webp";
import privateVip3 from "@/assets/tours/gallery/private-vip-3.webp";
import sunrise1 from "@/assets/tours/gallery/sunrise-1.webp";
import sunrise2 from "@/assets/tours/gallery/sunrise-2.webp";
import sunrise3 from "@/assets/tours/gallery/sunrise-3.webp";
import cenoteCombo1 from "@/assets/tours/gallery/cenote-combo-1.webp";
import cenoteCombo2 from "@/assets/tours/gallery/cenote-combo-2.webp";
import cenoteCombo3 from "@/assets/tours/gallery/cenote-combo-3.webp";
import privateSunrise1 from "@/assets/tours/gallery/private-sunrise-1.webp";
import privateSunrise2 from "@/assets/tours/gallery/private-sunrise-2.webp";
import privateSunrise3 from "@/assets/tours/gallery/private-sunrise-3.webp";
import cenoteSaamal1 from "@/assets/tours/gallery/cenote-saamal-1.webp";
import cenoteSaamal2 from "@/assets/tours/gallery/cenote-saamal-2.webp";
import cenoteSaamal3 from "@/assets/tours/gallery/cenote-saamal-3.webp";
import ekBalam1 from "@/assets/tours/gallery/ek-balam-1.webp";
import ekBalam2 from "@/assets/tours/gallery/ek-balam-2.webp";
import ekBalam3 from "@/assets/tours/gallery/ek-balam-3.webp";

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

/** Gallery images per tour (resolved asset URLs) */
export const tourGalleryImages: Record<string, string[]> = {
  "classic-day-tour": [classicDay1, classicDay2, classicDay3],
  "private-vip-tour": [privateVip1, privateVip2, privateVip3],
  "sunrise-tour": [sunrise1, sunrise2, sunrise3],
  "cenote-ik-kil-combo": [cenoteCombo1, cenoteCombo2, cenoteCombo3],
  "budget-express": [budgetExpress1, budgetExpress2, budgetExpress3],
  "family-adventure": [familyAdventure1, familyAdventure2, familyAdventure3],
  "night-light-show": [nightShow1, nightShow2, nightShow3],
  "chichen-valladolid-combo": [valladolidCombo1, valladolidCombo2, valladolidCombo3],
  "private-sunrise-tour": [privateSunrise1, privateSunrise2, privateSunrise3],
  "budget-day-playa": [budgetPlaya1, budgetPlaya2, budgetPlaya3],
  "cenote-saamal-combo": [cenoteSaamal1, cenoteSaamal2, cenoteSaamal3],
  "ek-balam-combo": [ekBalam1, ekBalam2, ekBalam3],
  "merida-cultural-tour": [meridaCultural1, meridaCultural2, meridaCultural3],
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
