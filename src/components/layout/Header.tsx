import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/useLocale";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tourDropdown, setTourDropdown] = useState(false);
  const [guideDropdown, setGuideDropdown] = useState(false);
  const { t, localePath } = useLocale();

  const tourLinks = [
    { label: t("tour.allTours"), href: localePath("/tours") },
    { label: t("tour.dayTours"), href: localePath("/tours/day-tours") },
    { label: t("tour.privateTours"), href: localePath("/tours/private-tours") },
    { label: t("tour.sunriseTours"), href: localePath("/tours/sunrise-tours") },
    { label: t("tour.cenoteTours"), href: localePath("/tours/cenote-tours") },
    { label: t("tour.ekBalamTours"), href: localePath("/tours/ek-balam-tours") },
    { label: t("tour.valladolidTours"), href: localePath("/tours/valladolid-tours") },
    { label: t("tour.nightTours"), href: localePath("/tours/night-tours") },
  ];

  const tourTypeLinks = [
    { label: t("tourType.smallGroup"), href: localePath("/tour-types/small-group") },
    { label: t("tourType.luxury"), href: localePath("/tour-types/luxury") },
    { label: t("tourType.budget"), href: localePath("/tour-types/budget") },
    { label: t("tourType.familyFriendly"), href: localePath("/tour-types/family-friendly") },
    { label: t("tourType.vipSkipTheLine"), href: localePath("/tour-types/vip-skip-the-line") },
  ];

  const comboLinks = [
    { label: t("combo.cenoteIkKil"), href: localePath("/combo-tours/cenote-ik-kil") },
    { label: t("combo.cobaRuins"), href: localePath("/combo-tours/coba-ruins") },
    { label: t("combo.islaMujeres"), href: localePath("/combo-tours/isla-mujeres") },
    { label: t("combo.multiDayYucatan"), href: localePath("/combo-tours/multi-day-yucatan") },
  ];

  const departureLinks = [
    { label: t("from.cancun"), href: localePath("/tours-from/cancun") },
    { label: t("from.playa"), href: localePath("/tours-from/playa-del-carmen") },
    { label: t("from.tulum"), href: localePath("/tours-from/tulum") },
    { label: t("from.rivieraMaya"), href: localePath("/tours-from/riviera-maya") },
    { label: t("from.merida"), href: localePath("/tours-from/merida") },
  ];

  const guideLinks = [
    { label: t("guide.bestTime"), href: localePath("/guide/best-time-to-visit") },
    { label: t("guide.whatToBring"), href: localePath("/guide/what-to-bring") },
    { label: t("guide.history"), href: localePath("/guide/history-and-facts") },
    { label: t("guide.howToGetThere"), href: localePath("/guide/how-to-get-there") },
    { label: t("guide.entranceFees"), href: localePath("/guide/entrance-fees") },
    { label: t("guide.photography"), href: localePath("/guide/photography-tips") },
    { label: t("guide.dressCode"), href: localePath("/guide/dress-code-and-rules") },
    { label: t("guide.vsOtherRuins"), href: localePath("/guide/vs-other-ruins") },
  ];

  const homePath = localePath("/");

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-foreground text-primary-foreground">
        <div className="container flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <span>{t("topBar.freeCancellation")}</span>
            <span className="hidden sm:inline">{t("topBar.instantConfirmation")}</span>
            <span className="hidden md:inline">{t("topBar.bestPrice")}</span>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a href="tel:+529981234567" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              <span>+52 998 123 4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between h-16">
        <Link to={homePath} className="flex items-center gap-2">
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
              {t("nav.tours")} <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {tourDropdown && (
              <div className="absolute top-full left-0 bg-popover border border-border rounded-lg shadow-card-hover py-3 min-w-[560px] grid grid-cols-3 gap-0 animate-fade-in-up">
                <div className="px-4">
                  <p className="px-0 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("nav.tourCategories")}</p>
                  {tourLinks.map((l) => (
                    <Link key={l.href} to={l.href} className="block py-1.5 hover:text-primary transition-colors text-sm">{l.label}</Link>
                  ))}
                </div>
                <div className="px-4 border-l border-border">
                  <p className="px-0 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("nav.tourTypes")}</p>
                  {tourTypeLinks.map((l) => (
                    <Link key={l.href} to={l.href} className="block py-1.5 hover:text-primary transition-colors text-sm">{l.label}</Link>
                  ))}
                </div>
                <div className="px-4 border-l border-border">
                  <p className="px-0 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("nav.comboTours")}</p>
                  {comboLinks.map((l) => (
                    <Link key={l.href} to={l.href} className="block py-1.5 hover:text-primary transition-colors text-sm">{l.label}</Link>
                  ))}
                  <div className="border-t border-border my-2" />
                  <p className="px-0 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("nav.departures")}</p>
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
              {t("nav.guide")} <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {guideDropdown && (
              <div className="absolute top-full left-0 bg-popover border border-border rounded-lg shadow-card-hover py-2 min-w-[220px] animate-fade-in-up">
                {guideLinks.map((l) => (
                  <Link key={l.href} to={l.href} className="block px-4 py-2 hover:bg-muted transition-colors text-sm">{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to={localePath("/blog")} className="hover:text-primary transition-colors">{t("nav.blog")}</Link>
          <Link to={localePath("/practical/faq")} className="hover:text-primary transition-colors">{t("nav.faq")}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="cta" size="sm" className="hidden sm:inline-flex" asChild>
            <Link to={localePath("/tours")}>{t("nav.bookNow")}</Link>
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
            <p className="px-3 pt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("nav.tours")}</p>
            {tourLinks.map((l) => (
              <Link key={l.href} to={l.href} className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors font-medium" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="border-t border-border my-1" />
            <p className="px-3 pt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("nav.tourTypes")}</p>
            {tourTypeLinks.map((l) => (
              <Link key={l.href} to={l.href} className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="border-t border-border my-1" />
            <p className="px-3 pt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("nav.comboTours")}</p>
            {comboLinks.map((l) => (
              <Link key={l.href} to={l.href} className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="border-t border-border my-1" />
            <p className="px-3 pt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("nav.departures")}</p>
            {departureLinks.map((l) => (
              <Link key={l.href} to={l.href} className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="border-t border-border my-1" />
            <p className="px-3 pt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("nav.travelGuide")}</p>
            {guideLinks.map((l) => (
              <Link key={l.href} to={l.href} className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="border-t border-border my-1" />
            <Link to={localePath("/blog")} className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.blog")}</Link>
            <Link to={localePath("/practical/faq")} className="py-2.5 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.faq")}</Link>
            <Button variant="cta" className="mt-2" asChild>
              <Link to={localePath("/tours")} onClick={() => setMobileOpen(false)}>{t("nav.bookNow")}</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
