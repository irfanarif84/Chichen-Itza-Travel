import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🏛️</span>
            <div className="leading-tight">
              <span className="font-heading font-bold text-lg">Chichen Itza</span>
              <span className="block text-xs text-accent font-semibold -mt-0.5">TOURS & EXCURSIONS</span>
            </div>
          </Link>
          <p className="text-sm opacity-80 leading-relaxed">
            Your trusted partner for unforgettable Chichen Itza experiences. Book with confidence — free cancellation on all tours.
          </p>
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
          <h3 className="font-heading font-semibold text-accent mb-4">Tours</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              { l: "All Tours", h: "/tours" },
              { l: "Day Tours", h: "/tours/day-tours" },
              { l: "Private Tours", h: "/tours/private-tours" },
              { l: "Sunrise Tours", h: "/tours/sunrise-tours" },
              { l: "Cenote Combo", h: "/tours/cenote-tours" },
              { l: "Small Group", h: "/tour-types/small-group" },
              { l: "Luxury", h: "/tour-types/luxury" },
              { l: "Budget", h: "/tour-types/budget" },
              { l: "Family Friendly", h: "/tour-types/family-friendly" },
              { l: "VIP Skip the Line", h: "/tour-types/vip-skip-the-line" },
            ].map((i) => (
              <li key={i.h}>
                <Link to={i.h} className="hover:text-accent transition-colors">{i.l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Combo Tours & Departures */}
        <div>
          <h3 className="font-heading font-semibold text-accent mb-4">Combo Tours</h3>
          <ul className="space-y-2 text-sm opacity-80 mb-6">
            {[
              { l: "Cenote Ik Kil", h: "/combo-tours/cenote-ik-kil" },
              { l: "Coba Ruins", h: "/combo-tours/coba-ruins" },
              { l: "Isla Mujeres", h: "/combo-tours/isla-mujeres" },
              { l: "Multi-Day Yucatan", h: "/combo-tours/multi-day-yucatan" },
            ].map((i) => (
              <li key={i.h}>
                <Link to={i.h} className="hover:text-accent transition-colors">{i.l}</Link>
              </li>
            ))}
          </ul>
          <h3 className="font-heading font-semibold text-accent mb-3">Depart From</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              { l: "Cancún", h: "/tours-from/cancun" },
              { l: "Playa del Carmen", h: "/tours-from/playa-del-carmen" },
              { l: "Tulum", h: "/tours-from/tulum" },
              { l: "Riviera Maya", h: "/tours-from/riviera-maya" },
              { l: "Mérida", h: "/tours-from/merida" },
            ].map((i) => (
              <li key={i.h}>
                <Link to={i.h} className="hover:text-accent transition-colors">{i.l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Travel Guide */}
        <div>
          <h3 className="font-heading font-semibold text-accent mb-4">Travel Guide</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              { l: "Best Time to Visit", h: "/guide/best-time-to-visit" },
              { l: "What to Bring", h: "/guide/what-to-bring" },
              { l: "History & Facts", h: "/guide/history-and-facts" },
              { l: "How to Get There", h: "/guide/how-to-get-there" },
              { l: "Entrance Fees", h: "/guide/entrance-fees" },
              { l: "Photography Tips", h: "/guide/photography-tips" },
              { l: "Dress Code & Rules", h: "/guide/dress-code-and-rules" },
            ].map((i) => (
              <li key={i.h}>
                <Link to={i.h} className="hover:text-accent transition-colors">{i.l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support & Blog */}
        <div>
          <h3 className="font-heading font-semibold text-accent mb-4">Resources</h3>
          <ul className="space-y-2 text-sm opacity-80 mb-6">
            <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link to="/practical/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            <li><Link to="/practical/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            <li><Link to="/practical/booking-info" className="hover:text-accent transition-colors">Booking Info</Link></li>
            <li><Link to="/practical/cancellation-policy" className="hover:text-accent transition-colors">Cancellation Policy</Link></li>
            <li><Link to="/practical/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-60">
        <p>© 2026 Chichen Itza Tours. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>PayPal</span>
          <span>Amex</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
