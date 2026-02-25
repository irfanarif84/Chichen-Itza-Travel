import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLocale } from "@/lib/i18n/useLocale";

const Footer = () => {
  const { t, localePath } = useLocale();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to={localePath("/")} className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏛️</span>
              <div className="leading-tight">
                <span className="font-heading font-bold text-lg">Chichen Itza</span>
                <span className="block text-xs text-accent font-semibold -mt-0.5">TOURS & EXCURSIONS</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">{t("footer.description")}</p>
            <div className="flex flex-col gap-2 mt-4 text-sm opacity-80">
              <a href="tel:+529981234567" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" /> +52 998 123 4567
              </a>
              <a href="mailto:info@chichenitzatours.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" /> info@chichenitzatours.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Cancún, Quintana Roo, México
              </span>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h3 className="font-heading font-semibold text-accent mb-4">{t("footer.tours")}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                { l: t("tour.allTours"), h: localePath("/tours") },
                { l: t("tour.dayTours"), h: localePath("/tours/day-tours") },
                { l: t("tour.privateTours"), h: localePath("/tours/private-tours") },
                { l: t("tour.sunriseTours"), h: localePath("/tours/sunrise-tours") },
                { l: t("tour.cenoteTours"), h: localePath("/tours/cenote-tours") },
                { l: t("tourType.smallGroup"), h: localePath("/tour-types/small-group") },
                { l: t("tourType.luxury"), h: localePath("/tour-types/luxury") },
                { l: t("tourType.budget"), h: localePath("/tour-types/budget") },
                { l: t("tourType.familyFriendly"), h: localePath("/tour-types/family-friendly") },
                { l: t("tourType.vipSkipTheLine"), h: localePath("/tour-types/vip-skip-the-line") },
              ].map((i) => (
                <li key={i.h}>
                  <Link to={i.h} className="hover:text-accent transition-colors">{i.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Combo Tours & Departures */}
          <div>
            <h3 className="font-heading font-semibold text-accent mb-4">{t("footer.comboTours")}</h3>
            <ul className="space-y-2 text-sm opacity-80 mb-6">
              {[
                { l: t("combo.cenoteIkKil"), h: localePath("/combo-tours/cenote-ik-kil") },
                { l: t("combo.cobaRuins"), h: localePath("/combo-tours/coba-ruins") },
                { l: t("combo.islaMujeres"), h: localePath("/combo-tours/isla-mujeres") },
                { l: t("combo.multiDayYucatan"), h: localePath("/combo-tours/multi-day-yucatan") },
              ].map((i) => (
                <li key={i.h}>
                  <Link to={i.h} className="hover:text-accent transition-colors">{i.l}</Link>
                </li>
              ))}
            </ul>
            <h3 className="font-heading font-semibold text-accent mb-3">{t("footer.departFrom")}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                { l: "Cancún", h: localePath("/tours-from/cancun") },
                { l: "Playa del Carmen", h: localePath("/tours-from/playa-del-carmen") },
                { l: "Tulum", h: localePath("/tours-from/tulum") },
                { l: "Riviera Maya", h: localePath("/tours-from/riviera-maya") },
                { l: "Mérida", h: localePath("/tours-from/merida") },
              ].map((i) => (
                <li key={i.h}>
                  <Link to={i.h} className="hover:text-accent transition-colors">{i.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Guide */}
          <div>
            <h3 className="font-heading font-semibold text-accent mb-4">{t("footer.travelGuide")}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                { l: t("guide.bestTime"), h: localePath("/guide/best-time-to-visit") },
                { l: t("guide.whatToBring"), h: localePath("/guide/what-to-bring") },
                { l: t("guide.history"), h: localePath("/guide/history-and-facts") },
                { l: t("guide.howToGetThere"), h: localePath("/guide/how-to-get-there") },
                { l: t("guide.entranceFees"), h: localePath("/guide/entrance-fees") },
                { l: t("guide.photography"), h: localePath("/guide/photography-tips") },
                { l: t("guide.dressCode"), h: localePath("/guide/dress-code-and-rules") },
                { l: t("guide.vsOtherRuins"), h: localePath("/guide/vs-other-ruins") },
              ].map((i) => (
                <li key={i.h}>
                  <Link to={i.h} className="hover:text-accent transition-colors">{i.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Blog */}
          <div>
            <h3 className="font-heading font-semibold text-accent mb-4">{t("footer.resources")}</h3>
            <ul className="space-y-2 text-sm opacity-80 mb-6">
              <li><Link to={localePath("/blog")} className="hover:text-accent transition-colors">{t("nav.blog")}</Link></li>
              <li><Link to={localePath("/practical/faq")} className="hover:text-accent transition-colors">{t("nav.faq")}</Link></li>
              <li><Link to={localePath("/practical/contact")} className="hover:text-accent transition-colors">{t("practical.contactUs")}</Link></li>
              <li><Link to={localePath("/practical/booking-info")} className="hover:text-accent transition-colors">{t("practical.bookingInfo")}</Link></li>
              <li><Link to={localePath("/practical/cancellation-policy")} className="hover:text-accent transition-colors">{t("practical.cancellationPolicy")}</Link></li>
              <li><Link to={localePath("/practical/testimonials")} className="hover:text-accent transition-colors">{t("practical.testimonials")}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 flex flex-col items-center gap-2 text-xs opacity-60">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2">
            <p>{t("footer.copyright")}</p>
            <div className="flex items-center gap-4">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>PayPal</span>
              <span>Amex</span>
            </div>
          </div>
          <p className="text-center">
            {t("footer.seoCredit")}{" "}
            <a href="https://marketingsolos.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline">
              Marketing Solos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
