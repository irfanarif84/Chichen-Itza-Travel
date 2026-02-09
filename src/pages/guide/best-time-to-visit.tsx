import { Link } from "react-router-dom";
import { Sun, CloudRain, Users, Camera, ChevronRight, Calendar, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/common/FAQ";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import InfoBox from "@/components/guide/InfoBox";
import { guideSchemas } from "@/lib/schema";
import { generalChichenItzaFAQs } from "@/lib/faqData";

const meta = getPageMeta({
  title: "Best Time to Visit Chichen Itza - Complete 2026 Guide",
  description: "Discover the best time to visit Chichen Itza for perfect weather, fewer crowds, and stunning photos. Month-by-month breakdown and insider tips.",
  canonical: "/guide/best-time-to-visit",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Guide", url: "/guide" },
      { name: "Best Time to Visit" },
    ]),
    guideSchemas["best-time-to-visit"],
  ],
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "Best Time to Visit" },
];

const months = [
  { name: "January", temp: "75-82°F", rain: "Low", crowds: "High", rating: 4, notes: "Peak season, holiday crowds thinning" },
  { name: "February", temp: "76-84°F", rain: "Low", crowds: "High", rating: 4, notes: "Excellent weather, moderate crowds" },
  { name: "March", temp: "78-88°F", rain: "Low", crowds: "Very High", rating: 3, notes: "Spring Equinox brings massive crowds" },
  { name: "April", temp: "80-91°F", rain: "Low", crowds: "High", rating: 4, notes: "Great weather, Easter crowds" },
  { name: "May", temp: "82-93°F", rain: "Medium", crowds: "Medium", rating: 3, notes: "Getting hot, occasional rain starts" },
  { name: "June", temp: "82-92°F", rain: "Medium", crowds: "Medium", rating: 3, notes: "Rainy season begins, afternoon showers" },
  { name: "July", temp: "83-93°F", rain: "High", crowds: "Medium", rating: 2, notes: "Hot and humid, frequent rain" },
  { name: "August", temp: "83-93°F", rain: "High", crowds: "Medium", rating: 2, notes: "Peak rain season, very hot" },
  { name: "September", temp: "82-91°F", rain: "High", crowds: "Low", rating: 3, notes: "Rainy, Fall Equinox event" },
  { name: "October", temp: "80-88°F", rain: "Medium", crowds: "Low", rating: 3, notes: "Rain decreasing, fewer tourists" },
  { name: "November", temp: "77-84°F", rain: "Low", crowds: "Medium", rating: 5, notes: "Ideal conditions, Día de Muertos" },
  { name: "December", temp: "75-82°F", rain: "Low", crowds: "Very High", rating: 4, notes: "Holiday peak, book early" },
];

const BestTimeToVisitPage = () => {
  const topMonths = months.filter((m) => m.rating >= 4);
  const timingFAQs = generalChichenItzaFAQs.filter(
    (f) => f.category === "timing" || f.category === "hours"
  );

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/10 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Best Time to Visit Chichen Itza
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Plan your perfect visit with our comprehensive guide to weather, crowds, 
              and special events at Mexico's most famous archaeological site.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild>
                <Link to="/tours">
                  Book Your Tour <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/guide/what-to-bring">What to Bring →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <TipBox
              type="success"
              title="Quick Answer: November is the Best Month"
              content="November offers the perfect combination of comfortable weather (77-84°F), low rainfall, and moderate crowds. The rainy season has ended, holiday rush hasn't started, and you'll enjoy ideal conditions for photography and exploration."
            />

            <div className="mt-8 prose prose-neutral">
              <h2 className="font-heading font-bold text-2xl mb-4">Overview</h2>
              <p className="text-muted-foreground">
                Chichen Itza welcomes over 2.6 million visitors annually, making timing crucial for 
                the best experience. The Yucatan Peninsula has two distinct seasons: the dry season 
                (November-April) and the rainy season (May-October). Your ideal visit depends on 
                your priorities—weather, crowds, special events, or budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Times Grid */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            When to Visit Based on Your Priorities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Sun className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Best Weather</h3>
              <p className="text-sm text-muted-foreground mb-3">
                November through April offers dry conditions and comfortable temperatures.
              </p>
              <p className="text-primary font-semibold">Nov - Apr</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Fewest Crowds</h3>
              <p className="text-sm text-muted-foreground mb-3">
                September and October see the lowest visitor numbers of the year.
              </p>
              <p className="text-primary font-semibold">Sep - Oct</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Best Photography</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Early morning on November weekdays offers golden light and empty plazas.
              </p>
              <p className="text-primary font-semibold">November AM</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Special Events</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Spring/Fall Equinoxes feature the famous serpent shadow on El Castillo.
              </p>
              <p className="text-primary font-semibold">Mar 20 / Sep 22</p>
            </div>
          </div>
        </div>
      </section>

      {/* Month by Month */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
            Month-by-Month Breakdown
          </h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-heading font-semibold">Month</th>
                  <th className="text-left py-3 px-4 font-heading font-semibold">Temp</th>
                  <th className="text-left py-3 px-4 font-heading font-semibold">Rain</th>
                  <th className="text-left py-3 px-4 font-heading font-semibold">Crowds</th>
                  <th className="text-left py-3 px-4 font-heading font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {months.map((month, i) => (
                  <tr key={i} className={`border-b border-border ${month.rating >= 4 ? "bg-success/5" : ""}`}>
                    <td className="py-3 px-4 font-medium">{month.name}</td>
                    <td className="py-3 px-4 text-muted-foreground">{month.temp}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        month.rain === "Low" ? "bg-success/10 text-success" :
                        month.rain === "Medium" ? "bg-accent/10 text-accent" :
                        "bg-destructive/10 text-destructive"
                      }`}>
                        {month.rain}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        month.crowds === "Low" ? "bg-success/10 text-success" :
                        month.crowds === "Medium" ? "bg-secondary/10 text-secondary" :
                        month.crowds === "High" ? "bg-accent/10 text-accent" :
                        "bg-destructive/10 text-destructive"
                      }`}>
                        {month.crowds}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{month.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Time of Day */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
              Best Time of Day to Visit
            </h2>

            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border-2 border-success">
                <div className="flex items-center gap-3 mb-3">
                  <Sun className="h-6 w-6 text-success" />
                  <h3 className="font-heading font-semibold text-lg">Early Morning (8-10 AM) - BEST</h3>
                </div>
                <p className="text-muted-foreground">
                  Arrive when gates open at 8 AM for the optimal experience. Temperatures are 
                  cooler (75-85°F), light is perfect for photography, and you'll explore before 
                  tour buses from Cancun arrive around 10 AM. Our sunrise tours offer even 
                  earlier access starting at 7 AM.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Thermometer className="h-6 w-6 text-accent" />
                  <h3 className="font-heading font-semibold text-lg">Midday (10 AM - 2 PM) - Avoid if Possible</h3>
                </div>
                <p className="text-muted-foreground">
                  Peak crowds and peak heat combine to create the least pleasant experience. 
                  Temperatures can exceed 95°F with intense sun. Most large tour groups are 
                  on-site during these hours. If you must visit midday, seek shade and stay hydrated.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <CloudRain className="h-6 w-6 text-secondary" />
                  <h3 className="font-heading font-semibold text-lg">Late Afternoon (3-5 PM) - Good Alternative</h3>
                </div>
                <p className="text-muted-foreground">
                  Crowds thin as tour buses depart. Light becomes golden for photography. 
                  Temperature drops slightly. During rainy season, afternoon showers may 
                  occur but usually pass quickly. The site closes at 5 PM (last entry 4 PM).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
              Special Events & Phenomena
            </h2>

            <div className="space-y-6">
              <InfoBox
                title="Spring Equinox (March 20-21)"
                icon="🌅"
                items={[
                  "Famous serpent shadow appears on El Castillo pyramid",
                  "Occurs around 3-4 PM as sun sets",
                  "40,000+ visitors on equinox days",
                  "Book tours 3+ months in advance",
                  "Consider visiting March 19 or 22 for similar effect with fewer crowds",
                ]}
                variant="info"
              />

              <InfoBox
                title="Fall Equinox (September 22-23)"
                icon="🌄"
                items={[
                  "Same serpent shadow phenomenon as spring",
                  "Fewer tourists than March equinox",
                  "Part of rainy season - bring rain gear",
                  "Magical atmosphere with possible dramatic clouds",
                ]}
                variant="info"
              />

              <TipBox
                type="warning"
                title="Equinox Crowd Warning"
                content="The equinox events are spectacular but extremely crowded. If experiencing the serpent shadow is your goal, arrive by 8 AM and stake out a viewing spot. Otherwise, consider visiting a few days before or after for similar conditions with 90% fewer tourists."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Recommendation */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
              Our Recommendation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              For the best overall experience, visit Chichen Itza on a <strong>Tuesday through Thursday 
              in November</strong>, arriving before 9 AM. You'll enjoy perfect weather, manageable 
              crowds, and optimal photography conditions. Book a sunrise tour for the ultimate experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link to="/tours/sunrise-tours">
                  Browse Sunrise Tours <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/tours">All Tours</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={timingFAQs}
        title="Timing FAQs"
        subtitle="Common questions about when to visit Chichen Itza"
      />

      {/* CTA */}
      <CTASection />

      {/* Internal Links */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">
            Continue Planning Your Visit
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "What to Bring", href: "/guide/what-to-bring" },
              { label: "How to Get There", href: "/guide/how-to-get-there" },
              { label: "Entrance Fees", href: "/guide/entrance-fees" },
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
              { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "Photography Tips", href: "/guide/photography-tips" },
              { label: "History & Facts", href: "/guide/history-and-facts" },
              { label: "All Tours", href: "/tours" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BestTimeToVisitPage;
