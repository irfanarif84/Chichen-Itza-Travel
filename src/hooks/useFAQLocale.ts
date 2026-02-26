import { useLocale } from "@/lib/i18n/useLocale";
import {
  generalChichenItzaFAQs,
  practicalFAQs,
  dayToursFAQs,
  privateToursFAQs,
  cenoteToursFAQs,
  sunriseToursFAQs,
  smallGroupFAQs,
  cancunFAQs,
  playaDelCarmenFAQs,
  tulumFAQs,
  rivieraMayaFAQs,
  meridaFAQs,
  homepageFAQs,
} from "@/lib/faqData";
import {
  generalChichenItzaFAQsEs,
  practicalFAQsEs,
  dayToursFAQsEs,
  privateToursFAQsEs,
  cenoteToursFAQsEs,
  sunriseToursFAQsEs,
  smallGroupFAQsEs,
  cancunFAQsEs,
  playaDelCarmenFAQsEs,
  tulumFAQsEs,
  rivieraMayaFAQsEs,
  meridaFAQsEs,
  homepageFAQsEs,
} from "@/lib/faqData.es";
import type { FAQItem } from "@/lib/faqData";

/**
 * Returns the correct FAQ set based on the current locale.
 * Use the key parameter to select which FAQ category you need.
 */
export const useLocalizedFAQs = () => {
  const { isEs } = useLocale();

  const get = (key: FAQKey): FAQItem[] => {
    if (!isEs) return enMap[key];
    return esMap[key];
  };

  return { getFAQs: get, isEs };
};

type FAQKey =
  | "homepage"
  | "general"
  | "practical"
  | "dayTours"
  | "privateTours"
  | "cenoteTours"
  | "sunriseTours"
  | "smallGroup"
  | "cancun"
  | "playaDelCarmen"
  | "tulum"
  | "rivieraMaya"
  | "merida";

const enMap: Record<FAQKey, FAQItem[]> = {
  homepage: homepageFAQs,
  general: generalChichenItzaFAQs,
  practical: practicalFAQs,
  dayTours: dayToursFAQs,
  privateTours: privateToursFAQs,
  cenoteTours: cenoteToursFAQs,
  sunriseTours: sunriseToursFAQs,
  smallGroup: smallGroupFAQs,
  cancun: cancunFAQs,
  playaDelCarmen: playaDelCarmenFAQs,
  tulum: tulumFAQs,
  rivieraMaya: rivieraMayaFAQs,
  merida: meridaFAQs,
};

const esMap: Record<FAQKey, FAQItem[]> = {
  homepage: homepageFAQsEs,
  general: generalChichenItzaFAQsEs,
  practical: practicalFAQsEs,
  dayTours: dayToursFAQsEs,
  privateTours: privateToursFAQsEs,
  cenoteTours: cenoteToursFAQsEs,
  sunriseTours: sunriseToursFAQsEs,
  smallGroup: smallGroupFAQsEs,
  cancun: cancunFAQsEs,
  playaDelCarmen: playaDelCarmenFAQsEs,
  tulum: tulumFAQsEs,
  rivieraMaya: rivieraMayaFAQsEs,
  merida: meridaFAQsEs,
};
