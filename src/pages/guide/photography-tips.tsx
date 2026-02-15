import { Link } from "react-router-dom";
import { ChevronRight, Camera, Sun, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import InfoBox from "@/components/guide/InfoBox";
import { guideImages } from "@/lib/tourImages";

const meta = getPageMeta({
  title: "Chichen Itza Photography Tips – Best Shots Guide 2026",
  description: "Master Chichen Itza photography. Best times, angles, gear, smartphone tips, and hidden photo spots for stunning El Castillo images.",
  canonical: "/guide/photography-tips",
  jsonLd: createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Guide", url: "/guide" },
    { name: "Photography Tips" },
  ]),
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "Photography Tips" },
];

const PhotographyTipsPage = () => (
  <>
    <SEOHead meta={meta} />

    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16 overflow-hidden">
      <img src={guideImages["photography-tips"]} alt="Photographer capturing El Castillo pyramid at Chichen Itza" className="absolute inset-0 w-full h-full object-cover opacity-15" loading="eager" />
      <div className="container relative z-10">
        <Breadcrumbs items={breadcrumbs} />
        <div className="max-w-3xl mt-4">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Chichen Itza Photography Tips
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Capture stunning photos of El Castillo and the ancient ruins with our expert guide to timing, angles, gear, and hidden spots.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/tours/sunrise-tours">Book a Sunrise Photo Tour <ChevronRight className="h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>

    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <TipBox type="success" title="Golden Rule" content="Arrive when gates open at 8 AM. The first hour offers the best light, fewest people, and most dramatic shadows. Our sunrise tours provide even earlier access." />
        </div>
      </div>
    </section>

    {/* Best Times */}
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container">
        <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">Best Times for Photography</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-6 border-2 border-success">
            <Sun className="h-8 w-8 text-success mb-3" />
            <h3 className="font-heading font-semibold text-lg mb-2">Golden Hour (8-9 AM)</h3>
            <p className="text-sm text-muted-foreground">Warm golden light on limestone, long shadows, minimal crowds. Best for El Castillo and Temple of Warriors.</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <Clock className="h-8 w-8 text-accent mb-3" />
            <h3 className="font-heading font-semibold text-lg mb-2">Midday (12-2 PM)</h3>
            <p className="text-sm text-muted-foreground">Harsh overhead light but good for detail shots of carvings. Use a polarizing filter to tame the glare.</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <Camera className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-heading font-semibold text-lg mb-2">Late Afternoon (3-5 PM)</h3>
            <p className="text-sm text-muted-foreground">Crowds thinning, warm side-light on structures. Great for dramatic sky backdrops.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Best Angles */}
    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl mb-6">Best Photo Spots & Angles</h2>
          <InfoBox title="Must-Get Shots" icon="📸" items={[
            "Classic frontal El Castillo from the main plaza — the iconic postcard angle",
            "Low angle from Platform of Venus — dramatic perspective with sky",
            "Temple of Warriors columns as natural frame for El Castillo",
            "Ball Court interior — showcase the massive scale (168m long)",
            "El Caracol (Observatory) — unique circular architecture",
            "Serpent head at pyramid base — detail shot with pyramid rising behind",
            "Sacred Cenote — atmospheric wide shot of the sinkhole",
            "Reflection shots after rain — puddles create stunning mirror effects",
          ]} variant="info" />

          <div className="mt-6">
            <TipBox type="tip" title="Hidden Gem" content="Walk to the back of El Castillo (south side). Most tourists only photograph the north face. The south side is often deserted and catches beautiful morning side-light." />
          </div>
        </div>
      </div>
    </section>

    {/* Gear */}
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl mb-6">Recommended Gear</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <InfoBox title="Camera Gear" icon="📷" items={[
              "Wide-angle lens (16-35mm) for full pyramid",
              "Telephoto (70-200mm) for carvings and details",
              "Circular polarizing filter (essential)",
              "Extra batteries (heat drains them faster)",
              "Extra memory cards",
              "Lens cleaning cloth",
            ]} variant="default" />
            <InfoBox title="Smartphone Tips" icon="📱" items={[
              "Use HDR mode for high-contrast scenes",
              "Portrait mode near carvings for bokeh",
              "Panorama mode at the Great Ball Court",
              "Clean lens before shooting",
              "Bring portable charger",
              "Use gridlines for composition",
            ]} variant="default" />
          </div>

          <div className="mt-6">
            <TipBox type="warning" title="Equipment Restrictions" content="Tripods are restricted during peak hours. Drones are strictly illegal at all Mexican archaeological sites — fines start at $5,000 USD. Selfie sticks are prohibited. Handheld cameras and smartphones are welcome." />
          </div>
        </div>
      </div>
    </section>

    <CTASection />

    <section className="py-12 bg-muted/30 border-t border-border">
      <div className="container">
        <h2 className="font-heading font-semibold text-lg mb-6">Related Guides</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: "Sunrise Tours", href: "/tours/sunrise-tours" },
            { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
            { label: "What to Bring", href: "/guide/what-to-bring" },
            { label: "History & Facts", href: "/guide/history-and-facts" },
            { label: "Dress Code", href: "/guide/dress-code-and-rules" },
            { label: "Private Tours", href: "/tours/private-tours" },
            { label: "Blog", href: "/blog" },
            { label: "All Tours", href: "/tours" },
          ].map((link) => (
            <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default PhotographyTipsPage;
