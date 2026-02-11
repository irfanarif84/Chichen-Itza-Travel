import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const tourLinks = [
  { label: "All Tours", href: "/tours" },
  { label: "Day Tours", href: "/tours/day-tours" },
  { label: "Private Tours", href: "/tours/private-tours" },
  { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
  { label: "Cenote Tours", href: "/tours/cenote-tours" },
];

const tourTypeLinks = [
  { label: "Small Group", href: "/tour-types/small-group" },
  { label: "Luxury", href: "/tour-types/luxury" },
  { label: "Budget", href: "/tour-types/budget" },
  { label: "Family Friendly", href: "/tour-types/family-friendly" },
  { label: "VIP Skip the Line", href: "/tour-types/vip-skip-the-line" },
];

const comboLinks = [
  { label: "Cenote Ik Kil Combo", href: "/combo-tours/cenote-ik-kil" },
  { label: "Coba Ruins Combo", href: "/combo-tours/coba-ruins" },
  { label: "Isla Mujeres Combo", href: "/combo-tours/isla-mujeres" },
  { label: "Multi-Day Yucatan", href: "/combo-tours/multi-day-yucatan" },
];

const departureLinks = [
  { label: "From Cancún", href: "/tours-from/cancun" },
  { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
  { label: "From Tulum", href: "/tours-from/tulum" },
  { label: "From Riviera Maya", href: "/tours-from/riviera-maya" },
  { label: "From Mérida", href: "/tours-from/merida" },
];

const guideLinks = [
  { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
  { label: "What to Bring", href: "/guide/what-to-bring" },
  { label: "History & Facts", href: "/guide/history-and-facts" },
  { label: "How to Get There", href: "/guide/how-to-get-there" },
  { label: "Entrance Fees", href: "/guide/entrance-fees" },
  { label: "Photography Tips", href: "/guide/photography-tips" },
  { label: "Dress Code & Rules", href: "/guide/dress-code-and-rules" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tourDropdown, setTourDropdown] = useState(false);
  const [guideDropdown, setGuideDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-foreground text-primary-foreground">
        <div className="container flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <span>✓ Free Cancellation</span>
            <span className="hidden sm:inline">✓ Instant Confirmation</span>
            <span className="hidden md:inline">✓ Best Price Guarantee</span>
          </div>
          <a href="tel:+529981234567" className="flex items-center gap-1 hover:text-accent transition-colors">
            <Phone className="h-3 w-3" />
            <span>+52 998 123 4567</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🏛️</span>
          <div className="leading-tight">
            <span className="font-heading font-bold text-lg text-foreground">Chichen Itza</span>
            <span className="block text-xs text-primary font-semibold -mt-0.5">TOURS & EXCURSIONS</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {/* Tours Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setTourDropdown(true)}
            onMouseLeave={() => setTourDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary transition-colors py-4">
              Tours <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {tourDropdown && (
              <div className="absolute top-full left-0 bg-popover border border-border rounded-lg shadow-card-hover py-3 min-w-[560px] grid grid-cols-3 gap-0 animate-fade-in-up">
                <div className="px-4">
                  <p className="px-0 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tour Categories</p>
                  {tourLinks.map((l) => (
                    <Link key={l.href} to={l.href} className="block py-1.5 hover:text-primary transition-colors text-sm">{l.label}</Link>
                  ))}
                </div>
                <div className="px-4 border-l border-border">
                  <p className="px-0 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tour Types</p>
                  {tourTypeLinks.map((l) => (
                    <Link key={l.href} to={l.href} className="block py-1.5 hover:text-primary transition-colors text-sm">{l.label}</Link>
                  ))}
                </div>
                <div className="px-4 border-l border-border">
                  <p className="px-0 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Combo Tours</p>
                  {comboLinks.map((l) => (
                    <Link key={l.href} to={l.href} className="block py-1.5 hover:text-primary transition-colors text-sm">{l.label}</Link>
                  ))}
                  <div className="border-t border-border my-2" />
                  <p className="px-0 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Departures</p>
                  {departureLinks.slice(0, 3).map((l) => (
                    <Link key={l.href} to={l.href} className="block py-1.5 hover:text-primary transition-colors text-sm">{l.label}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Guide Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setGuideDropdown(true)}
            onMouseLeave={() => setGuideDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary transition-colors py-4">
              Guide <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {guideDropdown && (
              <div className="absolute top-full left-0 bg-popover border border-border rounded-lg shadow-card-hover py-2 min-w-[220px] animate-fade-in-up">
                {guideLinks.map((l) => (
                  <Link key={l.href} to={l.href} className="block px-4 py-2 hover:bg-muted transition-colors text-sm">{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link to="/practical/faq" className="hover:text-primary transition-colors">FAQ</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="cta" size="sm" className="hidden sm:inline-flex" asChild>
            <Link to="/tours">Book Now →</Link>
          </Button>
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background pb-4 animate-fade-in-up max-h-[80vh] overflow-y-auto">
          <div className="container flex flex-col gap-1 pt-2">
            <p className="px-3 pt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tours</p>
            {tourLinks.map((l) => (
              <Link key={l.href} to={l.href} className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors font-medium" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="border-t border-border my-1" />
            <p className="px-3 pt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tour Types</p>
            {tourTypeLinks.map((l) => (
              <Link key={l.href} to={l.href} className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="border-t border-border my-1" />
            <p className="px-3 pt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Combo Tours</p>
            {comboLinks.map((l) => (
              <Link key={l.href} to={l.href} className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="border-t border-border my-1" />
            <p className="px-3 pt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Departures</p>
            {departureLinks.map((l) => (
              <Link key={l.href} to={l.href} className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="border-t border-border my-1" />
            <p className="px-3 pt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Travel Guide</p>
            {guideLinks.map((l) => (
              <Link key={l.href} to={l.href} className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="border-t border-border my-1" />
            <Link to="/blog" className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link to="/practical/faq" className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>FAQ</Link>
            <Button variant="cta" className="mt-2" asChild>
              <Link to="/tours" onClick={() => setMobileOpen(false)}>Book Now →</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
