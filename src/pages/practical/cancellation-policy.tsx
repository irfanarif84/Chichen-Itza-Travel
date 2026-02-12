import { Link } from "react-router-dom";
import { ShieldCheck, Clock, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getPageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";

const meta = getPageMeta({
  title: "Cancellation Policy – Free Cancellation | Chichen Itza Tours",
  description: "Flexible cancellation policy for all Chichen Itza tours. Free cancellation up to 24 hours before your tour. Full refund guaranteed. Book with confidence.",
  canonical: "/practical/cancellation-policy",
});

const policies = [
  { icon: CheckCircle, title: "Free Cancellation", desc: "Cancel up to 24 hours before your tour for a full refund. No questions asked.", color: "text-success" },
  { icon: Clock, title: "Late Cancellation (< 24 hrs)", desc: "Cancellations within 24 hours of the tour are non-refundable. Changes may be possible.", color: "text-accent" },
  { icon: AlertCircle, title: "No-Show", desc: "If you don't show up for your tour without notice, no refund is provided.", color: "text-destructive" },
];

const CancellationPolicyPage = () => (
  <>
    <SEOHead meta={meta} />
    <div className="container py-6 max-w-4xl">
      <Breadcrumbs items={[{ label: "Cancellation Policy" }]} />

      <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-3 mt-6">
        Cancellation & Refund Policy
      </h1>
      <p className="text-muted-foreground mb-10 max-w-2xl">
        We want you to book with confidence. That's why we offer flexible, hassle-free cancellation on all our Chichen Itza tours.
      </p>

      {/* Policy cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {policies.map((p) => (
          <div key={p.title} className="bg-card rounded-lg shadow-card p-6 text-center">
            <p.icon className={`h-10 w-10 mx-auto mb-3 ${p.color}`} />
            <h2 className="font-heading font-semibold text-lg mb-2">{p.title}</h2>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Detailed policy */}
      <div className="prose max-w-none space-y-8">
        <section>
          <h2 className="font-heading font-bold text-2xl mb-4">How Cancellations Work</h2>
          <div className="bg-card rounded-lg shadow-card p-6 space-y-4">
            <div className="flex gap-4 items-start">
              <span className="bg-success/10 text-success rounded-full p-2 shrink-0"><CheckCircle className="h-5 w-5" /></span>
              <div>
                <h3 className="font-heading font-semibold">Standard Tours (Day Tours, Combo Tours)</h3>
                <p className="text-sm text-muted-foreground">Free cancellation up to 24 hours before departure. Full refund credited to your original payment method within 5–7 business days.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-success/10 text-success rounded-full p-2 shrink-0"><CheckCircle className="h-5 w-5" /></span>
              <div>
                <h3 className="font-heading font-semibold">Private & VIP Tours</h3>
                <p className="text-sm text-muted-foreground">Free cancellation up to 48 hours before departure. Due to exclusive arrangements, a 50% fee applies for cancellations within 24–48 hours.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-success/10 text-success rounded-full p-2 shrink-0"><CheckCircle className="h-5 w-5" /></span>
              <div>
                <h3 className="font-heading font-semibold">Multi-Day Tours</h3>
                <p className="text-sm text-muted-foreground">Free cancellation up to 7 days before departure. 50% refund for cancellations 3–7 days prior. Non-refundable within 72 hours.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl mb-4">Weather & Force Majeure</h2>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">Full refund or free reschedule guaranteed</p>
                <p className="text-sm text-muted-foreground">
                  If we cancel a tour due to severe weather, natural disasters, or government restrictions, you'll receive a full refund or the option to reschedule at no extra cost. Your safety is our priority.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl mb-4">How to Cancel or Modify</h2>
          <ol className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <span>Log into your booking confirmation email and click "Manage Booking"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <span>Or email us at info@chichenitzatours.com with your booking reference number</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <span>For urgent changes, call us at +52 998 123 4567 (available 7 AM – 9 PM CST)</span>
            </li>
          </ol>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center bg-card rounded-lg shadow-card p-8">
        <h2 className="font-heading font-bold text-2xl mb-2">Ready to Book Risk-Free?</h2>
        <p className="text-muted-foreground mb-4">All tours include free cancellation. Book now, decide later.</p>
        <Button variant="cta" size="lg" asChild>
          <Link to="/tours">Browse All Tours <ArrowRight className="h-4 w-4 ml-1" /></Link>
        </Button>
      </div>
    </div>
  </>
);

export default CancellationPolicyPage;
