import { ShieldCheck, Clock, BadgeCheck, CreditCard } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Free Cancellation", sub: "Up to 24 hours before" },
  { icon: Clock, label: "Instant Confirmation", sub: "Booking confirmed immediately" },
  { icon: BadgeCheck, label: "Best Price Guarantee", sub: "Find it cheaper? We'll match" },
  { icon: CreditCard, label: "Secure Checkout", sub: "256-bit SSL encryption" },
];

const TrustBadges = () => (
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

export default TrustBadges;