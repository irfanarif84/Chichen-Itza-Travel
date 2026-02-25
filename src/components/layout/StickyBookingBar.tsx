import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocale } from "@/lib/i18n/useLocale";

interface StickyBookingBarProps {
  price: number;
  tourSlug?: string;
}

const StickyBookingBar = ({ price, tourSlug }: StickyBookingBarProps) => {
  const isMobile = useIsMobile();
  const { t, localePath } = useLocale();
  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-warm px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="font-heading font-bold text-lg">{t("sticky.from")} ${price}</span>
            <span className="text-xs text-muted-foreground">{t("sticky.perPerson")}</span>
          </div>
          <span className="flex items-center gap-1 text-xs text-success">
            <ShieldCheck className="h-3 w-3" /> {t("sticky.freeCancellation")}
          </span>
        </div>
        <Button variant="cta" size="lg" className="px-6" asChild>
          <Link to={tourSlug ? localePath(`/tours/${tourSlug}`) : localePath("/tours")}>{t("sticky.bookNow")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default StickyBookingBar;
