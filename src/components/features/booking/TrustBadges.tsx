import { ShieldCheck, Clock, BadgeCheck, CreditCard } from "lucide-react";
import { useLocale } from "@/lib/i18n/useLocale";

interface TrustBadgesProps {
  variant?: "default" | "compact";
}

const TrustBadges = ({ variant = "default" }: TrustBadgesProps) => {
  const { t } = useLocale();

  const badges = [
    { icon: ShieldCheck, label: t("trust.freeCancellation"), sub: t("trust.freeCancellationSub") },
    { icon: Clock, label: t("trust.instantConfirmation"), sub: t("trust.instantConfirmationSub") },
    { icon: BadgeCheck, label: t("trust.bestPrice"), sub: t("trust.bestPriceSub") },
    { icon: CreditCard, label: t("trust.secureCheckout"), sub: t("trust.secureCheckoutSub") },
  ];

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap gap-3">
        {badges.slice(0, 3).map((b) => (
          <span
            key={b.label}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <b.icon className="h-3.5 w-3.5 text-success" />
            {b.label}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((b) => (
        <div key={b.label} className="flex items-start gap-3 p-3 rounded-lg bg-card shadow-card">
          <b.icon className="h-5 w-5 text-success mt-0.5 shrink-0" />
          <div>
            <p className="font-heading font-semibold text-sm">{b.label}</p>
            <p className="text-xs text-muted-foreground">{b.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
