import { Link } from "react-router-dom";
import { Calendar, ChevronRight, Star, MapPin, Compass, Sunrise, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourGallery from "@/components/features/tours/TourGallery";
import TrustBadges from "@/components/features/booking/TrustBadges";
import TimelineItem from "@/components/features/tours/TimelineItem";
import TipBox from "@/components/guide/TipBox";
import CTASection from "@/components/features/home/CTASection";
import { tours } from "@/lib/tourData";
import { comboHeroImages, comboGalleryImages, comboGalleryAltTexts } from "@/lib/tourImages";
import { useMemo } from "react";

const meta = getPageMeta({
  title: "Multi-Day Yucatan Tour – Chichen Itza, Uxmal & More",
  description: "Explore the Yucatan Peninsula over 2-4 days. Visit Chichen Itza, Uxmal, Mérida, cenotes, and colonial towns. All-inclusive multi-day packages.",
  canonical: "/combo-tours/multi-day-yucatan",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Combo Tours" },
      { name: "Multi-Day Yucatan" },
    ]),
  ],
});

const MultiDayYucatanPage = () => {
  const topTours = useMemo(() => tours.filter((t) => t.featured).slice(0, 6), []);

  const heroImage = comboHeroImages["multi-day-yucatan"];
  const galleryImages = comboGalleryImages["multi-day-yucatan"] || [];
  const galleryAlts = comboGalleryAltTexts["multi-day-yucatan"] || [];

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-end">
        <img
          src={heroImage}
          alt="Panoramic Yucatan landscape with Uxmal pyramid and colonial architecture"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          width={1200}
          height={672}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
        <div className="container relative z-10 pb-10 pt-20">
          <Breadcrumbs items={[{ label: "Combo Tours" }, { label: "Multi-Day Yucatan" }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-primary-foreground/80">4.9/5 from multi-day travelers</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4 text-primary-foreground">
              Multi-Day Yucatan Tour – Chichen Itza, Uxmal, Mérida & More
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl">
              Go beyond the day trip. Explore the full richness of the Yucatan Peninsula over 2-4 days, visiting multiple archaeological sites, colonial cities, cenotes, and hidden gems most tourists never see.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Calendar, text: "2-4 day packages" },
                { icon: MapPin, text: "Multiple sites" },
                { icon: Hotel, text: "Hotels included" },
                { icon: Compass, text: "Deep exploration" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full border border-primary-foreground/20">
                  <item.icon className="h-4 w-4" />
                  {item.text}
                </span>
              ))}
            </div>
            <Button variant="cta" size="lg" asChild>
              <a href="#itinerary">See Sample Itinerary <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container">
          <TourGallery images={galleryImages} altTexts={galleryAlts} tourTitle="Multi-Day Yucatan Tour" />
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-2xl mb-4">Why Choose a Multi-Day Tour?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Day trips to Chichen Itza are wonderful, but the Yucatan Peninsula has so much more to offer. A multi-day tour lets you explore at a relaxed pace, visiting sites that most day-trippers never see — the magnificent Uxmal ruins, the vibrant colonial capital of Mérida, the flamingo reserves of Celestún, and hidden cenotes far from the tourist trail.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our multi-day packages include comfortable hotel accommodation, all transportation between sites, expert guides at each location, daily breakfast, and most meals. It's the most comprehensive way to experience the Yucatan's rich tapestry of Mayan history, colonial heritage, and natural beauty.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Perfect for travelers who want depth over speed. Compare with our <Link to="/tours/day-tours" className="text-primary hover:underline">day tours</Link> for shorter options, or <Link to="/tours/private-tours" className="text-primary hover:underline">private tours</Link> for customized multi-day experiences.
          </p>
        </div>
      </section>

      <section id="itinerary" className="py-12 lg:py-16 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">Sample 3-Day Itinerary</h2>
          <div className="space-y-2">
            <TimelineItem time="Day 1" title="Chichen Itza & Valladolid" description="Explore Chichen Itza with expert guide, swim at Cenote Ik Kil, lunch in the colorful colonial town of Valladolid. Overnight in Valladolid." />
            <TimelineItem time="Day 2" title="Ek Balam, Mérida & Cenotes" description="Climb the Ek Balam pyramid, swim in hidden hacienda cenotes, arrive in Mérida for evening stroll through the Paseo Montejo and zócalo." />
            <TimelineItem time="Day 3" title="Uxmal & Return" description="Visit the stunning Uxmal ruins (often called more beautiful than Chichen Itza), lunch at a colonial hacienda, scenic return to Cancun or Riviera Maya." isLast />
          </div>
          <div className="mt-8">
            <TipBox
              type="tip"
              title="Customizable Itinerary"
              content="This is a sample itinerary — all multi-day tours can be customized to your interests. Add Celestún flamingo reserve, Izamal (the Yellow City), Kabah ruins, or extend to 4 days. Contact us for a personalized quote."
            />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">Multi-Day Tour Includes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Hotel, title: "Hotel Accommodation", desc: "Comfortable 3-4 star hotels with breakfast included. Upgrade to boutique or luxury options available." },
              { icon: Compass, title: "Expert Guides", desc: "Certified archaeologist and historian guides at each site with deep local knowledge." },
              { icon: MapPin, title: "All Transportation", desc: "Comfortable minivan between all sites. No car rental or navigation needed." },
              { icon: Sunrise, title: "Unique Access", desc: "Early morning access to sites, hidden cenotes, and local experiences not available to day-trippers." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">Featured Tours to Start With</h2>
          <p className="text-center text-muted-foreground mb-8">Book a day tour or contact us for multi-day packages</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
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
              { label: "Coba Ruins Combo", href: "/combo-tours/coba-ruins" },
              { label: "Isla Mujeres Combo", href: "/combo-tours/isla-mujeres" },
              { label: "From Mérida", href: "/tours-from/merida" },
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

export default MultiDayYucatanPage;
