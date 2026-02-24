import { Link } from "react-router-dom";
import {
  ChevronRight,
  Car,
  Bus,
  Users,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import { guideSchemas } from "@/lib/schema";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import ComparisonTable from "@/components/guide/ComparisonTable";
import FAQSection from "@/components/common/FAQ";
import QuickBookingForm from "@/components/features/booking/QuickBookingForm";
import TrustBadges from "@/components/features/booking/TrustBadges";
import PopularToursWidget from "@/components/features/tours/PopularToursWidget";
import { guideImages } from "@/lib/tourImages";

const faqData = [
  {
    question: "How far is Chichen Itza from Cancun?",
    answer:
      "Chichen Itza is approximately 120 miles (193 km) from Cancun, taking 2.5-3 hours by car via Highway 180D (toll road). Most tours depart Cancun between 6:30-7:30 AM to arrive when the site opens at 8:00 AM.",
  },
  {
    question: "Is it better to drive or take a tour to Chichen Itza?",
    answer:
      "Tours are recommended for most visitors. While driving costs $60-80 for car rental plus $30 gas and $15 tolls, tours ($89-109) include transportation, expert guides, entrance fees, lunch, and often cenote visits. You also avoid navigation stress and parking hassles.",
  },
  {
    question: "Can you take a bus to Chichen Itza?",
    answer:
      "Yes, ADO buses run from Cancun, Playa del Carmen, Merida, and Valladolid to Chichen Itza. From Cancun, buses depart at 8:45 AM daily, cost $12-15 USD one-way, and take 3-4 hours. However, you'll miss expert guide commentary and must arrange your own return.",
  },
  {
    question: "How long does it take to get to Chichen Itza from Playa del Carmen?",
    answer:
      "The drive from Playa del Carmen to Chichen Itza takes 1.5-2 hours (95 miles/153 km). This is the closest major departure point, meaning tours from Playa can leave later (7:00-7:30 AM) and still arrive early.",
  },
  {
    question: "Is the drive to Chichen Itza safe?",
    answer:
      "Yes, Highway 180D (the toll road) is well-maintained, modern, and safe. It's heavily traveled by tourists and locals. Drive during daylight hours and use the toll road (not the free road). The route is considered one of the safest drives in the Yucatan.",
  },
  {
    question: "Do I need a car to visit Chichen Itza?",
    answer:
      "No. Guided tours are the most popular option and include round-trip transportation from your hotel. Tours offer better value than renting a car when you factor in guide expertise, entrance fees, and lunch.",
  },
];

const meta = getPageMeta({
  title: "How to Get to Chichen Itza – Complete Transport Guide 2026",
  description:
    "Complete guide to reaching Chichen Itza from Cancun, Playa del Carmen, and Tulum. Compare tours, rental cars, buses, distances, and costs.",
  canonical: "/guide/how-to-get-there",
  ogType: "article",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Guide", url: "/guide" },
      { name: "How to Get There" },
    ]),
    guideSchemas["how-to-get-there"],
    createFAQSchema(faqData),
  ],
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "How to Get There" },
];

const distances = [
  { city: "Cancún", icon: "🏖️", distance: "120 miles (193 km)", time: "2.5-3 hours" },
  { city: "Playa del Carmen", icon: "🌴", distance: "95 miles (153 km)", time: "1.5-2 hours" },
  { city: "Tulum", icon: "🏛️", distance: "95 miles (153 km)", time: "2-2.5 hours" },
  { city: "Mérida", icon: "🏙️", distance: "75 miles (121 km)", time: "1.5 hours" },
  { city: "Valladolid", icon: "🌺", distance: "26 miles (42 km)", time: "30-40 minutes" },
  { city: "Cozumel", icon: "⛴️", distance: "130 miles (209 km)", time: "4+ hours (ferry + drive)" },
];

const HowToGetTherePage = () => (
  <>
    <SEOHead meta={meta} />

    {/* Hero */}
    <section className="relative bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-12 lg:py-16 overflow-hidden">
      <img
        src={guideImages["how-to-get-there"]}
        alt="Scenic road through Yucatan jungle leading to Chichen Itza"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        loading="eager"
      />
      <div className="container relative z-10">
        <Breadcrumbs items={breadcrumbs} />
        <div className="max-w-3xl mt-4">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
            How to Get to Chichen Itza: Complete Transportation Guide
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Compare all transport options — guided tours, rental cars, and public buses — from every major departure city in the Yucatan.
          </p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
            <span>Updated: February 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <Button variant="cta" size="lg" asChild>
            <Link to="/tours">
              Book a Tour with Transport <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Two-column layout */}
    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10">
          {/* Main Content */}
          <div className="space-y-12">
            {/* Quick Answer */}
            <div className="bg-success/5 border-2 border-success rounded-xl p-6">
              <h2 className="font-heading font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" /> Quick Answer: Best Way to Get There
              </h2>
              <p className="text-muted-foreground mb-3">
                <strong>For 95% of visitors: Book a guided tour.</strong> Tours from Cancun, Playa del Carmen, or Tulum provide transportation, expert guides, entrance fees, and lunch for $89-$129 — better value than driving yourself when you factor in car rental, gas, tolls, and missing the expert commentary.
              </p>
              <p className="text-muted-foreground">
                <strong>Drive yourself only if:</strong> You want complete schedule flexibility, plan to visit multiple sites over several days, or are staying in Valladolid or Merida (very close to Chichen Itza).
              </p>
            </div>

            {/* Distance Quick Reference */}
            <section id="distances">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                Distance from Major Cities
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {distances.map((loc) => (
                  <div key={loc.city} className="bg-card rounded-xl p-4 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{loc.icon}</span>
                      <h3 className="font-heading font-semibold">{loc.city}</h3>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" /> {loc.distance}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-primary flex-shrink-0" /> {loc.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Transport Comparison Table */}
            <section id="comparison">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                Transportation Options Compared
              </h2>
              <ComparisonTable
                headers={["Guided Tour", "Rental Car", "ADO Bus"]}
                rows={[
                  { label: "Cost (per person)", values: ["$89-$189", "$60-100 total", "$25-30 round-trip"] },
                  { label: "Convenience", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐"] },
                  { label: "Flexibility", values: ["Fixed schedule", "Full freedom", "Bus schedule"] },
                  { label: "Guide included", values: [true, false, false] },
                  { label: "Entrance fee", values: ["Included", "Extra ~$27", "Extra ~$27"] },
                  { label: "Lunch", values: ["Usually included", "Extra cost", "Extra cost"] },
                  { label: "Best for", values: ["Most visitors", "Independent travelers", "Budget travelers"] },
                ]}
              />
            </section>

            {/* Option 1: Guided Tours */}
            <section id="guided-tours">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-2">
                <Users className="h-7 w-7 text-success" /> Option 1: Guided Tours (Recommended)
              </h2>

              <TipBox
                type="success"
                title="Best Choice for Most Visitors"
                content="Guided tours offer the best value and experience. You'll get expert historical commentary that brings the ruins to life, hassle-free logistics, and often additional experiences like cenote swimming or colonial town visits."
              />

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-card rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3">✓ What's Included:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {[
                      "Round-trip air-conditioned transportation",
                      "Hotel pickup and drop-off",
                      "Certified bilingual guide",
                      "Entrance fees to archaeological site",
                      "Buffet lunch (most tours)",
                      "Travel insurance",
                      "Bottled water",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3">💰 Pricing by Tour Type:</p>
                  <div className="space-y-3 text-sm">
                    {[
                      { type: "Standard Group Tour", price: "$89-$99", note: "12-15 people, classic experience" },
                      { type: "Small Group Tour", price: "$109-$119", note: "Max 12 people, more personal" },
                      { type: "Sunrise Tour", price: "$129-$139", note: "Early access, golden hour light" },
                      { type: "Private Tour", price: "$189-$299/person", note: "Your group only, flexible schedule" },
                    ].map((t) => (
                      <div key={t.type}>
                        <p className="font-semibold">
                          {t.type}: <span className="text-primary">{t.price}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{t.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Departure city links */}
              <div className="space-y-2 mt-6">
                {[
                  { to: "/tours-from/cancun", label: "Tours from Cancún", detail: "Most popular departure • 2.5 hour drive • Departs 6:30-7:30 AM", price: "From $89" },
                  { to: "/tours-from/playa-del-carmen", label: "Tours from Playa del Carmen", detail: "Closest departure point • 1.5 hour drive • Departs 7:00-7:30 AM", price: "From $89" },
                  { to: "/tours-from/tulum", label: "Tours from Tulum", detail: "Cultural travelers • 2 hour drive • Visit two Mayan sites", price: "From $94" },
                  { to: "/tours-from/merida", label: "Tours from Mérida", detail: "Closest city • 1.5 hour drive • Cultural immersion", price: "From $79" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center justify-between bg-card rounded-xl p-4 border border-border hover:border-primary transition-colors group"
                  >
                    <div>
                      <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                        {link.label} →
                      </p>
                      <p className="text-xs text-muted-foreground">{link.detail}</p>
                    </div>
                    <span className="text-primary font-bold text-sm whitespace-nowrap">{link.price}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Option 2: Rental Car */}
            <section id="rental-car">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-2">
                <Car className="h-7 w-7 text-primary" /> Option 2: Drive Yourself (Rental Car)
              </h2>

              <p className="text-muted-foreground mb-6">
                Driving to Chichen Itza is straightforward via Highway 180D (toll road). This option suits independent travelers who want schedule flexibility or plan to visit multiple sites.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-card rounded-xl p-5 border-2 border-success">
                  <p className="text-xs font-semibold uppercase tracking-wider text-success mb-3">✓ Advantages:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Complete schedule control (arrive/leave when you want)</li>
                    <li>• Stop at attractions along the way (cenotes, towns)</li>
                    <li>• Visit multiple sites in one day (Ek Balam, Valladolid)</li>
                    <li>• No waiting for tour group members</li>
                    <li>• Explore at your own pace</li>
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-5 border-2 border-destructive">
                  <p className="text-xs font-semibold uppercase tracking-wider text-destructive mb-3">✗ Disadvantages:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Miss expert guide commentary (history/context)</li>
                    <li>• Navigation required (though route is simple)</li>
                    <li>• Parking fees and hassle</li>
                    <li>• Driver can't relax or nap on journey</li>
                    <li>• Total cost often similar to guided tour</li>
                  </ul>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="bg-card rounded-xl p-5 border border-border mb-6">
                <p className="font-heading font-semibold mb-3 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" /> Total Cost Breakdown (from Cancún):
                </p>
                <div className="space-y-2 text-sm">
                  {[
                    { item: "Rental car (1 day, basic compact)", cost: "$60-80" },
                    { item: "Gas (round trip ~250 miles)", cost: "$25-30" },
                    { item: "Highway tolls (180D both ways)", cost: "$15" },
                    { item: "Parking at Chichen Itza", cost: "$5" },
                    { item: "Entrance fee (per person)", cost: "$27" },
                    { item: "Lunch (per person)", cost: "$10-15" },
                  ].map((row) => (
                    <div key={row.item} className="flex justify-between">
                      <span className="text-muted-foreground">{row.item}</span>
                      <span className="font-medium">{row.cost}</span>
                    </div>
                  ))}
                  <div className="flex justify-between border-t border-border pt-2 font-bold">
                    <span>TOTAL (for 2 people):</span>
                    <span className="text-primary">$184-224</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Compare to guided tour: $178-198 for 2 people (includes guide, no driving stress)
                </p>
              </div>

              {/* Driving Tips */}
              <div className="bg-accent/5 border border-accent rounded-xl p-5">
                <p className="font-heading font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-accent" /> Driving Tips & Warnings:
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>
                    • <strong>Use Highway 180D (toll road)</strong>, NOT the free road 180. The toll road is safer, faster, and better maintained.
                  </li>
                  <li>• Drive during daylight hours only (6 AM - 6 PM)</li>
                  <li>• GPS can be unreliable — download offline maps beforehand</li>
                  <li>• Bring Mexican pesos cash for tolls (credit cards not always accepted)</li>
                  <li>• Gas stations: Fill up in Cancun or Playa; stations are sparse along route</li>
                  <li>• Speed limit: 110 km/h (68 mph) on toll road, enforced by cameras</li>
                  <li>• Mexican car insurance required (rental companies provide)</li>
                </ul>
              </div>
            </section>

            {/* Option 3: ADO Bus */}
            <section id="ado-bus">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-2">
                <Bus className="h-7 w-7 text-accent" /> Option 3: ADO Bus (Budget Option)
              </h2>

              <p className="text-muted-foreground mb-6">
                ADO operates first-class buses from major cities to Chichen Itza. The budget-friendly option, but with trade-offs in convenience and time.
              </p>

              <div className="bg-card rounded-xl p-5 border border-border mb-6">
                <p className="font-heading font-semibold mb-4">ADO Bus Schedule & Pricing</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      from: "From Cancún:",
                      lines: ["Departure: 8:45 AM (daily)", "Duration: 3-4 hours", "Cost: $12-15 USD one-way", "Return: 4:30 PM (last bus!)"],
                    },
                    {
                      from: "From Playa del Carmen:",
                      lines: ["Departure: 9:15 AM (daily)", "Duration: 3 hours", "Cost: $10-12 USD one-way", "Return: 4:30 PM"],
                    },
                    {
                      from: "From Valladolid:",
                      lines: ["Departures: 7 AM, 9 AM, 11 AM", "Duration: 45 minutes", "Cost: $3-5 USD one-way"],
                    },
                  ].map((schedule) => (
                    <div key={schedule.from}>
                      <p className="font-semibold text-sm mb-2">{schedule.from}</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {schedule.lines.map((line) => (
                          <li key={line}>• {line}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-card rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider text-success mb-3">✓ Pros:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Cheapest option ($25-30 round-trip)</li>
                    <li>• Comfortable first-class buses (A/C, bathrooms)</li>
                    <li>• No driving stress</li>
                    <li>• Reliable schedule</li>
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider text-destructive mb-3">✗ Cons:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• No guide (miss historical context)</li>
                    <li>• Limited departure/return times</li>
                    <li>• Must arrange own lunch</li>
                    <li>• Arrive late (site already crowded)</li>
                    <li>• Bus station often far from hotels</li>
                  </ul>
                </div>
              </div>

              <TipBox
                type="info"
                title="Budget Tip"
                content="If taking the bus, stay overnight in Valladolid (30 min from Chichen Itza) instead. Hotels from $30/night, multiple daily buses, and you can arrive at the site at opening when it's least crowded."
              />
            </section>

            {/* Option 4: Private Transfer */}
            <section id="private-transfer">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
                Option 4: Private Transfer / Driver
              </h2>

              <p className="text-muted-foreground mb-4">
                Hire a private driver for luxury and flexibility without the hassle of driving yourself. Best for groups splitting the cost or those wanting VIP service.
              </p>

              <div className="bg-card rounded-xl p-5 border border-border">
                <p className="font-heading font-semibold mb-3">Pricing & Details:</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• <strong>Cost:</strong> $300-500 for vehicle (up to 6-8 passengers)</li>
                  <li>• <strong>Per person cost (group of 4):</strong> $75-125 each</li>
                  <li>• <strong>Includes:</strong> Private vehicle, driver, flexible schedule</li>
                  <li>• <strong>Not included:</strong> Guide services, entrance fees, lunch</li>
                  <li>• <strong>Best for:</strong> Families, groups, luxury travelers</li>
                </ul>
                <Link
                  to="/tours/private-tours"
                  className="inline-block mt-3 text-sm text-primary hover:underline font-medium"
                >
                  View Private Tour Options →
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <FAQSection
                title="Frequently Asked Questions About Getting to Chichen Itza"
                subtitle="Common questions from travelers planning their journey"
                faqs={faqData}
              />
            </section>

            {/* Final CTA */}
            <div className="text-center bg-primary/5 rounded-xl p-8 border border-primary/20">
              <h2 className="font-heading font-bold text-2xl mb-3">
                Ready to Visit Chichen Itza?
              </h2>
              <p className="text-muted-foreground mb-5">
                Skip the driving stress — book a guided tour with hotel pickup included.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/tours">
                    Browse All Tours <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/practical/contact">Ask a Question</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <QuickBookingForm />
            <TrustBadges />
            <PopularToursWidget />

            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-heading font-bold text-base mb-3">More Planning Guides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/guide/best-time-to-visit" className="text-primary hover:underline">
                    → Best Time to Visit
                  </Link>
                </li>
                <li>
                  <Link to="/guide/what-to-bring" className="text-primary hover:underline">
                    → What to Bring
                  </Link>
                </li>
                <li>
                  <Link to="/guide/entrance-fees" className="text-primary hover:underline">
                    → Entrance Fees
                  </Link>
                </li>
                <li>
                  <Link to="/guide/photography-tips" className="text-primary hover:underline">
                    → Photography Tips
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <CTASection />

    {/* Internal Links */}
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

export default HowToGetTherePage;
