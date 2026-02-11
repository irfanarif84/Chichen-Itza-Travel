import { Link } from "react-router-dom";
import { ChevronRight, Car, Bus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import ComparisonTable from "@/components/guide/ComparisonTable";

const meta = getPageMeta({
  title: "How to Get to Chichen Itza – Transport Guide 2026",
  description: "Complete transport guide to Chichen Itza. Compare driving, buses, and guided tours from Cancun, Playa del Carmen, Tulum, and Merida.",
  canonical: "/guide/how-to-get-there",
  jsonLd: createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Guide", url: "/guide" },
    { name: "How to Get There" },
  ]),
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "How to Get There" },
];

const distances = [
  { city: "Cancún", distance: "200 km / 125 mi", drive: "2.5 hours", toll: "~$25 USD" },
  { city: "Playa del Carmen", distance: "153 km / 95 mi", drive: "2 hours", toll: "~$20 USD" },
  { city: "Tulum", distance: "153 km / 95 mi", drive: "2-2.5 hours", toll: "~$15 USD" },
  { city: "Mérida", distance: "120 km / 75 mi", drive: "1.5 hours", toll: "~$12 USD" },
  { city: "Valladolid", distance: "42 km / 26 mi", drive: "40 min", toll: "Free" },
];

const HowToGetTherePage = () => (
  <>
    <SEOHead meta={meta} />

    <section className="bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-12 lg:py-16">
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        <div className="max-w-3xl mt-4">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
            How to Get to Chichen Itza
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Compare all transport options — guided tours, rental cars, and public buses — from every major departure city in the Yucatan.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/tours">Book a Tour with Transport <ChevronRight className="h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>

    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <TipBox type="success" title="Easiest Option: Guided Tour" content="A guided tour is the most popular and stress-free way to visit Chichen Itza. Round-trip transport, entrance fees, guide, and lunch are all included. No driving, parking, or navigation needed." />
        </div>
      </div>
    </section>

    {/* Transport Comparison */}
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container">
        <ComparisonTable
          title="Transport Options Compared"
          headers={["Guided Tour", "Rental Car", "ADO Bus"]}
          rows={[
            { label: "Cost (per person)", values: ["$49-$249", "$60-$100 total", "$15-$25 each way"] },
            { label: "Convenience", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐"] },
            { label: "Flexibility", values: ["Fixed schedule", "Full freedom", "Bus schedule"] },
            { label: "Guide included", values: [true, false, false] },
            { label: "Entrance fee", values: ["Included", "Extra $35", "Extra $35"] },
            { label: "Lunch", values: ["Usually included", "Extra cost", "Extra cost"] },
            { label: "Best for", values: ["Most visitors", "Independent travelers", "Budget travelers"] },
          ]}
        />
      </div>
    </section>

    {/* Distances */}
    <section className="py-12 lg:py-16">
      <div className="container">
        <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">Distance from Major Cities</h2>
        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-heading font-semibold">City</th>
                <th className="text-left py-3 px-4 font-heading font-semibold">Distance</th>
                <th className="text-left py-3 px-4 font-heading font-semibold">Drive Time</th>
                <th className="text-left py-3 px-4 font-heading font-semibold">Toll Cost</th>
              </tr>
            </thead>
            <tbody>
              {distances.map((d, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-3 px-4 font-medium">{d.city}</td>
                  <td className="py-3 px-4 text-muted-foreground">{d.distance}</td>
                  <td className="py-3 px-4 text-muted-foreground">{d.drive}</td>
                  <td className="py-3 px-4 text-muted-foreground">{d.toll}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Transport Options Detail */}
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">Detailed Transport Options</h2>

          <div className="bg-card rounded-xl p-6 border-2 border-success">
            <div className="flex items-center gap-3 mb-3">
              <Users className="h-6 w-6 text-success" />
              <h3 className="font-heading font-semibold text-lg">Guided Tour (Recommended)</h3>
            </div>
            <p className="text-muted-foreground mb-3">
              The most popular option for good reason. Tours include hotel pickup, AC transport, expert guide, entrance fees, and usually lunch and a cenote swim. Prices range from $49 for budget to $249 for private VIP tours.
            </p>
            <Button variant="cta" size="sm" asChild>
              <Link to="/tours">Browse Tours →</Link>
            </Button>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Car className="h-6 w-6 text-primary" />
              <h3 className="font-heading font-semibold text-lg">Rental Car</h3>
            </div>
            <p className="text-muted-foreground">
              Offers maximum flexibility. Take the toll highway (autopista) for the fastest route. Parking at Chichen Itza costs about $3. Gas for a round-trip from Cancun is approximately $30-40. Drive defensively and watch for speed bumps (topes) in towns.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Bus className="h-6 w-6 text-accent" />
              <h3 className="font-heading font-semibold text-lg">ADO Bus</h3>
            </div>
            <p className="text-muted-foreground">
              ADO buses run from Cancun, Playa del Carmen, and Merida to Chichen Itza. First-class buses are comfortable with AC. Buy tickets at the terminal or online. The budget option, but you'll miss the guide commentary and need to arrange your own cenote visits.
            </p>
          </div>

          <TipBox type="warning" title="Driving Tips" content="Mexican highways use toll booths (casetas) that accept cash and cards. Speed bumps (topes) are common and sometimes unmarked. Always fill up on gas before leaving major cities. The free highway (libre) is slower but scenic." />
        </div>
      </div>
    </section>

    <CTASection />

    <section className="py-12 bg-muted/30 border-t border-border">
      <div className="container">
        <h2 className="font-heading font-semibold text-lg mb-6">Plan Your Trip</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: "From Cancún", href: "/tours-from/cancun" },
            { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
            { label: "From Tulum", href: "/tours-from/tulum" },
            { label: "From Mérida", href: "/tours-from/merida" },
            { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
            { label: "What to Bring", href: "/guide/what-to-bring" },
            { label: "Entrance Fees", href: "/guide/entrance-fees" },
            { label: "Budget Tours", href: "/tour-types/budget" },
            { label: "Private Tours", href: "/tours/private-tours" },
            { label: "All Tours", href: "/tours" },
          ].map((link) => (
            <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default HowToGetTherePage;
