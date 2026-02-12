import { Link } from "react-router-dom";
import { ShieldCheck, CreditCard, Clock, Users, CalendarCheck, ArrowRight, CheckCircle } from "lucide-react";
import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TrustBadges from "@/components/features/booking/TrustBadges";
import { getPageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";

const meta = getPageMeta({
  title: "Booking Information – How to Book | Chichen Itza Tours",
  description: "Everything you need to know about booking Chichen Itza tours. Easy 3-step booking, free cancellation, secure payment, and instant confirmation.",
  canonical: "/practical/booking-info",
});

const steps = [
  { num: "1", icon: CalendarCheck, title: "Choose Your Tour & Date", desc: "Browse our tours, select your preferred date, and pick your departure city." },
  { num: "2", icon: Users, title: "Enter Traveler Details", desc: "Tell us how many adults and children, plus any add-ons like private guides or photography." },
  { num: "3", icon: CreditCard, title: "Secure Payment & Confirm", desc: "Pay securely online. You'll receive instant confirmation with all details via email." },
];

const BookingInfoPage = () => (
  <>
    <SEOHead meta={meta} />
    <div className="container py-6 max-w-4xl">
      <Breadcrumbs items={[{ label: "Booking Information" }]} />

      <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-3 mt-6">
        How to Book Your Chichen Itza Tour
      </h1>
      <p className="text-muted-foreground mb-10 max-w-2xl">
        Booking is easy, fast, and risk-free. Follow three simple steps and you're confirmed.
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {steps.map((s) => (
          <div key={s.num} className="bg-card rounded-lg shadow-card p-6 text-center relative">
            <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold mx-auto mb-4">{s.num}</div>
            <s.icon className="h-8 w-8 text-primary mx-auto mb-3" />
            <h2 className="font-heading font-semibold text-lg mb-2">{s.title}</h2>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Payment info */}
      <section className="mb-12">
        <h2 className="font-heading font-bold text-2xl mb-6">Payment & Security</h2>
        <div className="bg-card rounded-lg shadow-card p-6 space-y-4">
          {[
            { icon: CreditCard, title: "Accepted Payment Methods", desc: "Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay." },
            { icon: ShieldCheck, title: "Secure Encryption", desc: "All payments are processed with 256-bit SSL encryption. Your financial data is never stored on our servers." },
            { icon: Clock, title: "Instant Confirmation", desc: "Once payment is processed, you'll receive a confirmation email within 60 seconds with your booking reference and tour details." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <item.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to expect */}
      <section className="mb-12">
        <h2 className="font-heading font-bold text-2xl mb-6">After You Book</h2>
        <div className="space-y-3">
          {[
            "Instant confirmation email with booking reference number",
            "Detailed pickup instructions sent 24 hours before your tour",
            "WhatsApp contact for your guide on the day of the tour",
            "Free date changes up to 48 hours in advance",
            "Full refund if cancelled 24+ hours before departure",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-success shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="mb-6"><TrustBadges /></div>

      {/* CTA */}
      <div className="text-center bg-card rounded-lg shadow-card p-8">
        <h2 className="font-heading font-bold text-2xl mb-2">Ready to Book?</h2>
        <p className="text-muted-foreground mb-4">Free cancellation on all tours. Book now, pay later.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="cta" size="lg" asChild>
            <Link to="/tours">Browse All Tours <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/practical/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  </>
);

export default BookingInfoPage;
