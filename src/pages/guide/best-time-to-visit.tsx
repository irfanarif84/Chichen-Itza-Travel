import { Link } from "react-router-dom";
import { Sun, CloudRain, Users, Camera, ChevronRight, Calendar, Thermometer, Clock, Sunrise, Sunset } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/common/FAQ";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import InfoBox from "@/components/guide/InfoBox";
import MonthlyChart from "@/components/guide/MonthlyChart";
import QuickBookingForm from "@/components/features/booking/QuickBookingForm";
import TrustBadges from "@/components/features/booking/TrustBadges";
import PopularToursWidget from "@/components/features/tours/PopularToursWidget";
import ImageGallery from "@/components/common/ImageGallery";
import { guideSchemas } from "@/lib/schema";
import { guideImages, tourGalleryImages, tourGalleryAltTexts } from "@/lib/tourImages";

/* ------------------------------------------------------------------ */
/*  Page-specific FAQ data                                            */
/* ------------------------------------------------------------------ */
const timingFAQs = [
  { question: "What is the absolute best month to visit Chichen Itza?", answer: "November is considered the ideal month. Weather is perfect (75-82°F), the rainy season has ended, crowds are moderate, and you'll enjoy ideal conditions for photography. December through February are also excellent but expect larger crowds and higher prices." },
  { question: "What is the worst time to visit Chichen Itza?", answer: "Late March through April (Spring Break) and December 20-January 5 (Christmas/New Year) are the worst due to massive crowds, intense heat (95°F+), and premium pricing. September can also be challenging with peak hurricane season." },
  { question: "Does Chichen Itza close for rain?", answer: "No, the site stays open during rain except for severe weather or hurricanes. Most rain occurs in short afternoon showers during rainy season (June-October). Morning tours (7:00-11:00 AM) typically avoid rain entirely." },
  { question: "When is Chichen Itza least crowded?", answer: "Weekdays in May, June, September, and October have the smallest crowds. Early morning arrivals (7:00-8:00 AM) or late afternoon visits (3:00-4:00 PM) also avoid peak crowds." },
  { question: "Can you visit Chichen Itza in summer?", answer: "Yes, but expect hot temperatures (88-95°F) and afternoon rain showers from June-August. Benefits include 20-30% lower tour prices, smaller crowds, and lush green jungle scenery." },
  { question: "What is the weather like year-round?", answer: "Dry Season (November-April) averages 75-85°F with minimal rain. Rainy Season (May-October) averages 85-95°F with afternoon showers. Mornings are always cooler and more comfortable." },
  { question: "Should I visit during the spring equinox?", answer: "The spring equinox (March 20-21) features the famous serpent shadow on El Castillo, but expect 10,000+ visitors, extreme heat, and significantly higher prices. Consider visiting a few days before or after for similar weather without the chaos." },
  { question: "Is hurricane season safe for visiting?", answer: "Yes. Hurricane season (June-November, peak August-October) rarely affects Chichen Itza directly as it's inland. Tours may cancel during active storms, but this is infrequent. Always purchase travel insurance." },
];

/* ------------------------------------------------------------------ */
/*  Monthly weather data for MonthlyChart                             */
/* ------------------------------------------------------------------ */
const monthlyWeatherData = [
  { month: "Jan", temp: 82, rain: 2, crowds: "High", price: "$$$" },
  { month: "Feb", temp: 84, rain: 2, crowds: "High", price: "$$$" },
  { month: "Mar", temp: 88, rain: 2, crowds: "Very High", price: "$$$$" },
  { month: "Apr", temp: 92, rain: 3, crowds: "High", price: "$$$" },
  { month: "May", temp: 93, rain: 6, crowds: "Medium", price: "$$" },
  { month: "Jun", temp: 92, rain: 8, crowds: "Low", price: "$$" },
  { month: "Jul", temp: 91, rain: 7, crowds: "Medium", price: "$$" },
  { month: "Aug", temp: 91, rain: 8, crowds: "Low", price: "$$" },
  { month: "Sep", temp: 89, rain: 9, crowds: "Very Low", price: "$" },
  { month: "Oct", temp: 86, rain: 8, crowds: "Low", price: "$$" },
  { month: "Nov", temp: 83, rain: 4, crowds: "Medium", price: "$$" },
  { month: "Dec", temp: 81, rain: 3, crowds: "Very High", price: "$$$$" },
];

/* ------------------------------------------------------------------ */
/*  SEO Meta                                                          */
/* ------------------------------------------------------------------ */
const faqSchema = createFAQSchema(timingFAQs);

const meta = getPageMeta({
  title: "Best Time to Visit Chichen Itza – Complete 2026 Guide",
  description: "Discover the best time to visit Chichen Itza. Weather, crowds, and prices by month. Expert tips for planning your perfect trip, updated for 2026.",
  canonical: "/guide/best-time-to-visit",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Guide", url: "/guide" },
      { name: "Best Time to Visit" },
    ]),
    guideSchemas["best-time-to-visit"],
    faqSchema,
  ],
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "Best Time to Visit" },
];

/* ------------------------------------------------------------------ */
/*  Table of contents links                                           */
/* ------------------------------------------------------------------ */
const tocLinks = [
  { id: "best-months", label: "Best Months to Visit" },
  { id: "time-of-day", label: "Best Time of Day" },
  { id: "weather-chart", label: "Weather by Month" },
  { id: "crowd-tips", label: "How to Avoid Crowds" },
  { id: "special-events", label: "Special Events" },
  { id: "peak-season", label: "Peak Season Tips" },
  { id: "low-season", label: "Low Season Tips" },
  { id: "faq", label: "FAQ" },
];

/* ================================================================== */
/*  Component                                                         */
/* ================================================================== */
const BestTimeToVisitPage = () => {
  return (
    <>
      <SEOHead meta={meta} />

      {/* ---- Hero ---- */}
      <section className="relative bg-gradient-to-br from-accent/10 via-background to-primary/10 py-12 lg:py-16 overflow-hidden">
        <img
          src={guideImages["best-time-to-visit"]}
          alt="Chichen Itza El Castillo pyramid in golden afternoon light"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          loading="eager"
        />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Best Time to Visit Chichen Itza: Complete 2026 Guide
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Plan your perfect visit with our comprehensive guide to weather, crowds,
              and special events at Mexico's most famous archaeological site.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Updated: February 2026 · 12 min read · By Maya Explorer Team
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild>
                <Link to="/tours">Book Your Tour <ChevronRight className="h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/guide/what-to-bring">What to Bring →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Two-column layout ---- */}
      <div className="container py-12 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">

          {/* ======== MAIN CONTENT ======== */}
          <div className="space-y-16">

            {/* Quick Answer */}
            <section>
              <TipBox
                type="success"
                title="Quick Answer: November Is the Best Month"
                content="November offers the perfect combination of comfortable weather (75-84°F), low rainfall, and moderate crowds. The rainy season has ended, the holiday rush hasn't started, and you'll enjoy ideal conditions for photography and exploration."
              />

              <div className="mt-6 space-y-4 text-foreground leading-relaxed">
                <p>
                  <strong>Timing can make or break your Chichen Itza experience.</strong> Visit during peak season and
                  you'll fight massive crowds in sweltering 95°F heat while paying premium prices. Choose wisely and
                  you'll explore this ancient wonder in comfortable temperatures with manageable crowds and capture
                  stunning photos without hundreds of tourists in frame.
                </p>
                <p>
                  As one of the <Link to="/guide/history-and-facts" className="text-primary hover:underline">New Seven Wonders of the World</Link> and
                  a UNESCO World Heritage Site, Chichen Itza attracts over 2.6 million visitors annually. This guide
                  breaks down weather, crowds, pricing, and special events month by month so you can pick the perfect window.
                </p>
              </div>
            </section>

            {/* Table of Contents */}
            <nav className="bg-muted/40 rounded-xl p-6 border border-border">
              <h2 className="font-heading font-bold text-lg mb-3">Table of Contents</h2>
              <ol className="space-y-2">
                {tocLinks.map((l, i) => (
                  <li key={l.id}>
                    <a href={`#${l.id}`} className="text-primary hover:underline text-sm">
                      {i + 1}. {l.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ---- Best Months ---- */}
            <section id="best-months">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">Best Months to Visit Chichen Itza</h2>

              {/* Priority cards */}
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3"><Sun className="h-6 w-6 text-accent" /></div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Best Weather</h3>
                  <p className="text-sm text-muted-foreground mb-2">Dry conditions and comfortable temperatures.</p>
                  <p className="text-primary font-semibold">November – April</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3"><Users className="h-6 w-6 text-secondary" /></div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Fewest Crowds</h3>
                  <p className="text-sm text-muted-foreground mb-2">Lowest visitor numbers of the year.</p>
                  <p className="text-primary font-semibold">September – October</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3"><Camera className="h-6 w-6 text-primary" /></div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Best Photography</h3>
                  <p className="text-sm text-muted-foreground mb-2">Golden light and empty plazas.</p>
                  <p className="text-primary font-semibold">November, early AM</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-3"><Calendar className="h-6 w-6 text-success" /></div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Special Events</h3>
                  <p className="text-sm text-muted-foreground mb-2">Serpent shadow on El Castillo.</p>
                  <p className="text-primary font-semibold">Mar 20 / Sep 22</p>
                </div>
              </div>

              {/* Dry Season */}
              <h3 className="font-heading font-bold text-xl mb-4">November – April: Dry Season (Peak)</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-success/5 border border-success rounded-lg p-5">
                  <h4 className="font-semibold text-success mb-2">✓ Advantages</h4>
                  <ul className="text-sm space-y-1 text-foreground">
                    <li>• Perfect weather: 75-85°F, low humidity</li>
                    <li>• Minimal rainfall (1-3 inches/month)</li>
                    <li>• Clear skies ideal for photography</li>
                    <li>• Comfortable walking conditions</li>
                    <li>• Reliable tour schedules</li>
                  </ul>
                </div>
                <div className="bg-destructive/5 border border-destructive rounded-lg p-5">
                  <h4 className="font-semibold text-destructive mb-2">✗ Disadvantages</h4>
                  <ul className="text-sm space-y-1 text-foreground">
                    <li>• Largest crowds (Dec-Mar especially)</li>
                    <li>• Premium pricing (15-30% higher)</li>
                    <li>• More tourists in photos</li>
                    <li>• Book tours 1-2 weeks in advance</li>
                    <li>• Hotels fill up quickly</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="bg-card rounded-lg p-5 border-2 border-success">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-heading font-semibold">November</h4>
                    <span className="text-xs font-bold bg-success/15 text-success px-2.5 py-1 rounded-full">BEST OVERALL</span>
                  </div>
                  <p className="text-sm text-muted-foreground">The sweet spot! Rainy season just ended, crowds haven't peaked, prices still reasonable. Average temp: 83°F. Rainfall: 3-4 inches. Perfect balance of all factors.</p>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-heading font-semibold">December</h4>
                    <span className="text-xs font-bold bg-destructive/15 text-destructive px-2.5 py-1 rounded-full">VERY CROWDED</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Beautiful weather (81°F avg) but major crowds Dec 20-31. First two weeks are better. Prices jump 25-30%. Book <Link to="/tours" className="text-primary hover:underline">tours</Link> minimum 10 days ahead.</p>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border">
                  <h4 className="font-heading font-semibold mb-2">January – February</h4>
                  <p className="text-sm text-muted-foreground">Peak season with excellent weather (82-84°F). Crowds moderate after New Year but increase late February. Great for snowbirds. <Link to="/tours-from/cancun" className="text-primary hover:underline">Tours from Cancún</Link> run frequently.</p>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-heading font-semibold">March</h4>
                    <span className="text-xs font-bold bg-destructive/15 text-destructive px-2.5 py-1 rounded-full">AVOID SPRING BREAK</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Spring Equinox (March 20-21) draws massive crowds for the serpent shadow phenomenon. Entire month affected by spring breakers. Heat increases (88°F). Consider early March or skip entirely.</p>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border">
                  <h4 className="font-heading font-semibold mb-2">April</h4>
                  <p className="text-sm text-muted-foreground">Hottest dry season month (92°F+). Crowds decrease post-Easter but heat can be brutal midday. Morning <Link to="/tours/sunrise-tours" className="text-primary hover:underline">sunrise tours</Link> essential. Good shoulder season option.</p>
                </div>
              </div>

              {/* Rainy Season */}
              <h3 className="font-heading font-bold text-xl mb-4">May – October: Rainy Season (Low Season)</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-success/5 border border-success rounded-lg p-5">
                  <h4 className="font-semibold text-success mb-2">✓ Advantages</h4>
                  <ul className="text-sm space-y-1 text-foreground">
                    <li>• 25-30% lower tour prices</li>
                    <li>• Far fewer crowds (50-70% less)</li>
                    <li>• Lush green jungle scenery</li>
                    <li>• More personal guide attention</li>
                    <li>• Easy last-minute bookings</li>
                  </ul>
                </div>
                <div className="bg-destructive/5 border border-destructive rounded-lg p-5">
                  <h4 className="font-semibold text-destructive mb-2">✗ Disadvantages</h4>
                  <ul className="text-sm space-y-1 text-foreground">
                    <li>• Afternoon rain showers common</li>
                    <li>• Higher humidity (80-90%)</li>
                    <li>• Warmer temperatures (88-95°F)</li>
                    <li>• Hurricane season Aug-Oct</li>
                    <li>• Some tours may cancel for weather</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-card rounded-lg p-5 border-2 border-accent">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-heading font-semibold">May – June</h4>
                    <span className="text-xs font-bold bg-accent/15 text-accent px-2.5 py-1 rounded-full">BEST VALUE</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Shoulder season with great deals. Rain increases but typically brief afternoon showers. Morning tours (7-11 AM) usually stay dry. Avg temp: 92-93°F. Excellent for <Link to="/tour-types/budget" className="text-primary hover:underline">budget travelers</Link>.</p>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border">
                  <h4 className="font-heading font-semibold mb-2">July – August</h4>
                  <p className="text-sm text-muted-foreground">Peak rainy season with daily afternoon showers. Hurricane risk increases. Hot and humid (91°F, 85% humidity). Lowest crowds in August. Tours deeply discounted. Good for adventurous travelers.</p>
                </div>
                <div className="bg-card rounded-lg p-5 border-2 border-secondary">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-heading font-semibold">September</h4>
                    <span className="text-xs font-bold bg-secondary/15 text-secondary px-2.5 py-1 rounded-full">LEAST CROWDED</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Absolute lowest crowds (70% fewer than peak). Fall Equinox (Sept 21) offers serpent shadow without March chaos. Most rain of year (9 inches). Best month for solitude seekers.</p>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border">
                  <h4 className="font-heading font-semibold mb-2">October</h4>
                  <p className="text-sm text-muted-foreground">Transition month as rainy season winds down. Still warm (86°F) with frequent rain. Crowds begin returning. Prices still 20% below peak. Good compromise between weather and value.</p>
                </div>
              </div>
            </section>

            {/* ---- Time of Day ---- */}
            <section id="time-of-day">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">Best Time of Day to Visit</h2>
              <p className="text-muted-foreground mb-8">Time of day matters as much as time of year. The same monument can feel completely different at 8 AM versus noon versus 4 PM.</p>

              <div className="space-y-5">
                <div className="bg-card rounded-xl p-6 border-2 border-success">
                  <div className="flex items-center gap-3 mb-1">
                    <Sunrise className="h-6 w-6 text-success" />
                    <h3 className="font-heading font-semibold text-lg">Early Morning (7:00-9:00 AM)</h3>
                    <span className="text-xs font-bold bg-success/15 text-success px-2 py-0.5 rounded-full ml-auto">RECOMMENDED</span>
                  </div>
                  <p className="text-muted-foreground mb-4">Arrive when gates open at 8 AM or book <Link to="/tours/sunrise-tours" className="text-primary hover:underline">sunrise tours</Link> for 7 AM early access — the golden window for the best experience.</p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-success mb-1">✓ Pros</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• 50-70% fewer crowds than midday</li>
                        <li>• Cooler temps (75-80°F)</li>
                        <li>• Golden hour photography lighting</li>
                        <li>• Wildlife more active (birds, iguanas)</li>
                        <li>• Return to hotel/beach by noon</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-destructive mb-1">✗ Cons</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Very early pickup (5:30-6:30 AM)</li>
                        <li>• Sunrise tours cost 20-30% more</li>
                        <li>• May miss hotel breakfast</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-1">
                    <Sun className="h-6 w-6 text-accent" />
                    <h3 className="font-heading font-semibold text-lg">Mid-Morning (9:00 AM – 12:00 PM)</h3>
                    <span className="text-xs font-bold bg-accent/15 text-accent px-2 py-0.5 rounded-full ml-auto">MOST CROWDED</span>
                  </div>
                  <p className="text-muted-foreground mb-4">80% of tour groups arrive during this window. If your <Link to="/tours-from/cancun" className="text-primary hover:underline">tour from Cancún</Link> departs at 7 AM, you'll arrive around 9:30 AM — right in the thick of it.</p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-success mb-1">✓ Pros</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• More departure times available</li>
                        <li>• Standard pricing</li>
                        <li>• Can eat hotel breakfast first</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-destructive mb-1">✗ Cons</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Peak crowds — hard to take clean photos</li>
                        <li>• Heat intensifies after 10 AM</li>
                        <li>• Noise from large groups</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-destructive/50">
                  <div className="flex items-center gap-3 mb-1">
                    <Thermometer className="h-6 w-6 text-destructive" />
                    <h3 className="font-heading font-semibold text-lg">Midday (12:00 – 2:00 PM)</h3>
                    <span className="text-xs font-bold bg-destructive/15 text-destructive px-2 py-0.5 rounded-full ml-auto">AVOID</span>
                  </div>
                  <p className="text-muted-foreground mb-3">Peak heat and sun exposure. Brutal 95-100°F+ feels-like temperature with direct overhead sun creating washed-out photos and serious heat exhaustion risk.</p>
                  <TipBox type="warning" title="Heat Warning" content="If you must visit midday, bring at least 2 liters of water per person, wear a wide-brimmed hat, and seek shade frequently. Sunstroke cases spike between noon and 2 PM during dry season." />
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-1">
                    <Sunset className="h-6 w-6 text-primary" />
                    <h3 className="font-heading font-semibold text-lg">Late Afternoon (3:00 – 5:00 PM)</h3>
                    <span className="text-xs font-bold bg-primary/15 text-primary px-2 py-0.5 rounded-full ml-auto">HIDDEN GEM</span>
                  </div>
                  <p className="text-muted-foreground mb-4">Most tours have departed by 2-3 PM. If you're driving yourself or booking a <Link to="/tours/private-tours" className="text-primary hover:underline">private tour</Link> from <Link to="/tours-from/merida" className="text-primary hover:underline">Mérida</Link>, late afternoon offers surprising benefits.</p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-success mb-1">✓ Pros</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Crowds thin significantly</li>
                        <li>• Beautiful golden hour (4-5 PM)</li>
                        <li>• Cooler than midday (drops to 85°F)</li>
                        <li>• Peaceful atmosphere</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-destructive mb-1">✗ Cons</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Last entry 4 PM (closes 5 PM)</li>
                        <li>• Limited exploration time (1-2 hrs)</li>
                        <li>• Few afternoon tour options</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrival recommendation */}
              <div className="mt-8 bg-primary/5 border border-primary rounded-xl p-6">
                <h3 className="font-heading font-bold text-lg mb-2">🎯 Our Recommendation</h3>
                <p className="text-foreground mb-3">Book a tour that arrives at Chichen Itza between 7:30-8:30 AM:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>From Cancún:</strong> 6:30-7:00 AM pickup</li>
                  <li>• <strong>From Playa del Carmen:</strong> 7:00-7:30 AM pickup</li>
                  <li>• <strong>From Tulum:</strong> 6:30-7:00 AM pickup</li>
                  <li>• <strong>From Mérida:</strong> 7:30-8:00 AM pickup</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">Yes, it's early. But you'll be back at the pool by 2 PM while others are still suffering in the heat!</p>
              </div>
            </section>

            {/* ---- Weather Chart ---- */}
            <section id="weather-chart">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">Weather & Temperature by Month</h2>
              <p className="text-muted-foreground mb-6">Understanding Chichen Itza's weather patterns helps you pack appropriately and set realistic expectations.</p>
              <div className="bg-card rounded-xl border border-border p-4">
                <MonthlyChart data={monthlyWeatherData} />
              </div>

              {/* Seasonal Photo Gallery */}
              <div className="mt-10">
                <h3 className="font-heading font-bold text-xl mb-2">Chichen Itza Through the Seasons</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Dry season (Nov-Apr) brings clear blue skies and golden light, while rainy season (May-Oct) transforms the jungle into lush green canopy.
                </p>
                <ImageGallery
                  columns={3}
                  images={[
                    { src: (tourGalleryImages["sunrise-tour"] || [])[1], alt: tourGalleryAltTexts["sunrise-tour"]?.[1] || "Golden sunrise behind El Castillo pyramid" },
                    { src: (tourGalleryImages["classic-day-tour"] || [])[0], alt: tourGalleryAltTexts["classic-day-tour"]?.[0] || "El Castillo pyramid under clear blue sky" },
                    { src: (tourGalleryImages["sunrise-tour"] || [])[3], alt: tourGalleryAltTexts["sunrise-tour"]?.[3] || "Empty plaza at dawn before crowds arrive" },
                    { src: (tourGalleryImages["cenote-ik-kil-combo"] || [])[2], alt: tourGalleryAltTexts["cenote-ik-kil-combo"]?.[2] || "Lush green jungle during rainy season at Chichen Itza" },
                    { src: (tourGalleryImages["classic-day-tour"] || [])[14], alt: tourGalleryAltTexts["classic-day-tour"]?.[14] || "Golden sunset over Chichen Itza archaeological zone" },
                    { src: (tourGalleryImages["night-light-show"] || [])[0], alt: tourGalleryAltTexts["night-light-show"]?.[0] || "Chichen Itza night light show on El Castillo" },
                  ]}
                />
              </div>
            </section>

            {/* ---- Crowd Avoidance ---- */}
            <section id="crowd-tips">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">How to Avoid Crowds at Chichen Itza</h2>
              <InfoBox
                title="Top Crowd-Avoidance Strategies"
                icon="🎯"
                items={[
                  "Visit on a Tuesday, Wednesday, or Thursday — weekends and Mondays are busiest",
                  "Arrive before 8:30 AM, or after 3:00 PM for the 'golden window'",
                  "Choose November, May-June, or September-October over December-March",
                  "Book a sunrise tour for 7:00 AM early access with 70% fewer visitors",
                  "Explore the lesser-visited structures first while crowds gather at El Castillo",
                  "If visiting during peak season, book a private tour for a faster-paced, flexible experience",
                ]}
                variant="info"
              />
              <p className="text-muted-foreground mt-4">
                For the ultimate crowd-free experience, combine a <Link to="/tours/sunrise-tours" className="text-primary hover:underline">sunrise tour</Link> on
                a Tuesday in November. You'll have the plazas nearly to yourself for golden-hour
                photography before the tour buses arrive from <Link to="/tours-from/cancun" className="text-primary hover:underline">Cancún</Link> around 10 AM.
              </p>
            </section>

            {/* ---- Special Events ---- */}
            <section id="special-events">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">Special Events & Phenomena</h2>

              <div className="space-y-6">
                <InfoBox
                  title="Spring Equinox (March 20-21)"
                  icon="🌅"
                  items={[
                    "Famous serpent shadow appears on El Castillo pyramid",
                    "Occurs around 3-4 PM as the sun sets",
                    "10,000+ visitors on equinox days — arrive by 8 AM",
                    "Book tours 3+ months in advance",
                    "Consider March 19 or 22 for similar effect with 90% fewer crowds",
                  ]}
                  variant="info"
                />

                <InfoBox
                  title="Fall Equinox (September 22-23)"
                  icon="🌄"
                  items={[
                    "Same serpent shadow phenomenon as spring",
                    "Far fewer tourists than March equinox",
                    "Part of rainy season — bring rain gear",
                    "Magical atmosphere with possible dramatic cloud formations",
                  ]}
                  variant="info"
                />

                <InfoBox
                  title="Noches de Kukulkán (Night Light Show)"
                  icon="🌙"
                  items={[
                    "Stunning light and sound show projected onto El Castillo",
                    "Runs Wednesday through Saturday evenings",
                    "Separate ticket required — book via our night tours",
                    "Unique experience available year-round",
                  ]}
                  variant="default"
                />

                <TipBox
                  type="warning"
                  title="Equinox Crowd Warning"
                  content="The equinox events are spectacular but extremely crowded. If experiencing the serpent shadow is your goal, arrive by 8 AM and stake out a viewing spot. Otherwise, visit a few days before or after for similar conditions with 90% fewer tourists."
                />
              </div>
            </section>

            {/* ---- Peak Season Tips ---- */}
            <section id="peak-season">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">Tips for Visiting in Peak Season</h2>
              <InfoBox
                title="Peak Season Survival Guide (Nov-Apr)"
                icon="☀️"
                items={[
                  "Book tours at least 1-2 weeks in advance — popular options sell out",
                  "Choose the earliest departure time available to beat crowds",
                  "Bring 2+ liters of water, sunscreen SPF 50+, and a wide-brimmed hat",
                  "Consider a private tour for flexible scheduling and skip-the-line access",
                  "Wear light, breathable clothing — cotton or moisture-wicking fabric",
                  "Start at the back of the site (Group of a Thousand Columns) while crowds gather at El Castillo",
                  "Budget 15-30% extra for peak season pricing on tours and hotels",
                ]}
                variant="success"
              />
              <p className="text-muted-foreground mt-4">
                Peak season visitors benefit most from <Link to="/tour-types/vip-skip-the-line" className="text-primary hover:underline">VIP skip-the-line tours</Link> and <Link to="/tours/private-tours" className="text-primary hover:underline">private tours</Link> that
                offer flexibility and personalized pacing.
              </p>
            </section>

            {/* ---- Low Season Tips ---- */}
            <section id="low-season">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">Tips for Visiting in Low Season</h2>
              <InfoBox
                title="Low Season Strategy Guide (May-Oct)"
                icon="🌧️"
                items={[
                  "Book morning tours (departing before 7 AM) to avoid afternoon rain",
                  "Bring a light rain jacket or poncho — showers typically last 30-60 minutes",
                  "Take advantage of 25-30% lower prices on tours, hotels, and flights",
                  "Enjoy lush, green jungle scenery perfect for dramatic photography",
                  "Purchase travel insurance that covers weather-related cancellations",
                  "Stay hydrated — humidity makes heat feel 10-15°F hotter",
                  "Check hurricane forecasts a week before travel (direct hits are very rare inland)",
                ]}
                variant="info"
              />
              <p className="text-muted-foreground mt-4">
                Low-season visitors should explore <Link to="/tour-types/budget" className="text-primary hover:underline">budget tour options</Link> and consider
                combining Chichen Itza with a <Link to="/combo-tours/cenote-ik-kil" className="text-primary hover:underline">cenote swim at Ik Kil</Link> —
                the cool underground waters are especially refreshing in summer heat.
              </p>
            </section>

            {/* ---- FAQ ---- */}
            <section id="faq">
              <FAQSection
                faqs={timingFAQs}
                title="Frequently Asked Questions About Timing"
                subtitle="Common questions about the best time to visit Chichen Itza"
              />
            </section>

            {/* ---- Final CTA ---- */}
            <section className="bg-gradient-cta rounded-2xl p-8 text-center">
              <h2 className="font-heading font-bold text-2xl text-primary-foreground mb-3">Ready to Book Your Perfect Tour?</h2>
              <p className="text-primary-foreground/80 mb-6">Now that you know the best time to visit, choose your ideal tour and secure your spot!</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/tours">View All Tours</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/practical/contact">Get Custom Quote</Link>
                </Button>
              </div>
            </section>
          </div>

          {/* ======== SIDEBAR ======== */}
          <aside className="hidden lg:block space-y-6 sticky top-24">
            <QuickBookingForm />
            <TrustBadges variant="compact" />
            <PopularToursWidget maxTours={3} />
            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-heading font-bold text-base mb-3">📖 More Planning Guides</h3>
              <ul className="space-y-2">
                {[
                  { label: "What to Bring", href: "/guide/what-to-bring" },
                  { label: "How to Get There", href: "/guide/how-to-get-there" },
                  { label: "Photography Tips", href: "/guide/photography-tips" },
                  { label: "Entrance Fees", href: "/guide/entrance-fees" },
                  { label: "History & Facts", href: "/guide/history-and-facts" },
                  { label: "Dress Code & Rules", href: "/guide/dress-code-and-rules" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* CTA */}
      <CTASection />

      {/* Internal Links Footer */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">Continue Planning Your Visit</h2>
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
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
