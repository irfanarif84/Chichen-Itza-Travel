import { Link } from "react-router-dom";
import { Mountain, ChevronRight, Star, ArrowUpRight, Compass, Camera, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TrustBadges from "@/components/features/booking/TrustBadges";
import ComparisonTable from "@/components/guide/ComparisonTable";
import TipBox from "@/components/guide/TipBox";
import CTASection from "@/components/features/home/CTASection";
import { tours } from "@/lib/tourData";
import { useMemo } from "react";

const meta = getPageMeta({
  title: "Chichen Itza + Coba Ruins Tour – Two Mayan Sites in One Day",
  description: "Visit Chichen Itza and climb the Nohoch Mul pyramid at Coba — the tallest in the Yucatan. Two incredible Mayan sites in one day. From $109.",
  canonical: "/combo-tours/coba-ruins",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Combo Tours" },
      { name: "Coba Ruins" },
    ]),
  ],
});

const CobaRuinsComboPage = () => {
  const comboTours = useMemo(
    () => tours.filter((t) => t.category.includes("combo") || t.category.includes("ek-balam")),
    []
  );

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "Combo Tours" }, { label: "Coba Ruins" }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.8/5 from adventure travelers</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Chichen Itza + Coba Ruins Combo Tour
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Experience two spectacular Mayan sites in one day. Explore Chichen Itza's iconic El Castillo, then climb the 138-foot Nohoch Mul pyramid at Coba — the tallest climbable pyramid in the Yucatan Peninsula.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Mountain, text: "Climb a pyramid" },
                { icon: ArrowUpRight, text: "138 ft tall" },
                { icon: TreePine, text: "Jungle setting" },
                { icon: Compass, text: "Two sites" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border">
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.text}
                </span>
              ))}
            </div>
            <Button variant="cta" size="lg" asChild>
              <a href="#tours">View Combo Tours <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-2xl mb-4">Why Add Coba to Your Chichen Itza Trip?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            While Chichen Itza is the most famous, Coba offers something unique that you can't experience anywhere else — the chance to actually <strong>climb</strong> a massive Mayan pyramid. The Nohoch Mul pyramid at Coba stands 138 feet (42 meters) tall and offers breathtaking 360-degree views over the jungle canopy.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Coba is set deep in the jungle, connected by ancient raised stone roads called sacbés. Unlike the manicured grounds of Chichen Itza, Coba feels wild and untamed — many structures remain partially covered by jungle vegetation, creating an Indiana Jones-like atmosphere that photographers love.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The two sites complement each other perfectly: Chichen Itza for its massive scale and historical importance, Coba for its adventurous climbing experience and jungle immersion. See also our <Link to="/combo-tours/cenote-ik-kil" className="text-primary hover:underline">Cenote Ik Kil combo</Link> and <Link to="/combo-tours/multi-day-yucatan" className="text-primary hover:underline">multi-day tours</Link>.
          </p>
          <TipBox
            type="warning"
            title="Physical Requirements"
            content="The Nohoch Mul pyramid climb involves 120 steep stone steps. A moderate fitness level is recommended. Wear closed-toe shoes with grip. A rope handrail is provided. Not recommended for those with vertigo or severe knee issues."
          />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 text-center">Chichen Itza vs. Coba</h2>
          <ComparisonTable
            headers={["Chichen Itza", "Coba"]}
            rows={[
              { label: "Famous For", values: ["El Castillo pyramid", "Nohoch Mul (climbable)"] },
              { label: "Can You Climb?", values: ["No (closed since 2006)", "Yes! 120 steps to the top"] },
              { label: "Setting", values: ["Open, manicured grounds", "Jungle-covered ruins"] },
              { label: "Crowd Level", values: ["High (2.5M visitors/yr)", "Low-Moderate"] },
              { label: "UNESCO Status", values: ["World Heritage Site", "Not yet listed"] },
              { label: "Transport Between", values: ["~2 hours apart", "~2 hours apart"] },
            ]}
          />
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">Multi-Site Combo Tours</h2>
          <p className="text-center text-muted-foreground mb-8">{comboTours.length} combo tours available</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comboTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
          </div>
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">More Combos & Tours</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Cenote Ik Kil Combo", href: "/combo-tours/cenote-ik-kil" },
              { label: "Multi-Day Yucatan", href: "/combo-tours/multi-day-yucatan" },
              { label: "Day Tours", href: "/tours/day-tours" },
              { label: "From Tulum", href: "/tours-from/tulum" },
              { label: "All Tours", href: "/tours" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CobaRuinsComboPage;
