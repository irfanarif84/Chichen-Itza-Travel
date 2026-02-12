import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface StickyBookingBarProps {
  price: number;
  tourSlug?: string;
}

const StickyBookingBar = ({ price, tourSlug }: StickyBookingBarProps) => {
  const isMobile = useIsMobile();
  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-warm px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="font-heading font-bold text-lg">From ${price}</span>
            <span className="text-xs text-muted-foreground">/person</span>
          </div>
          <span className="flex items-center gap-1 text-xs text-success">
            <ShieldCheck className="h-3 w-3" /> Free cancellation
          </span>
        </div>
        <Button variant="cta" size="lg" className="px-6" asChild>
          <Link to={tourSlug ? `/tours/${tourSlug}` : "/tours"}>Book Now →</Link>
        </Button>
      </div>
    </div>
  );
};

export default StickyBookingBar;
