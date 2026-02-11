import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import InfoBox from "@/components/guide/InfoBox";
import FAQSection from "@/components/common/FAQ";
import { generalChichenItzaFAQs } from "@/lib/faqData";

const meta = getPageMeta({
  title: "Chichen Itza History & Facts – Ancient Maya Guide",
  description: "Explore the fascinating history of Chichen Itza. Learn about El Castillo, the Maya civilization, key dates, and surprising facts about this Wonder of the World.",
  canonical: "/guide/history-and-facts",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Guide", url: "/guide" },
      { name: "History & Facts" },
    ]),
  ],
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "History & Facts" },
];

const timeline = [
  { year: "600 AD", event: "Chichen Itza founded as a major Maya city" },
  { year: "800-1000 AD", event: "Peak of power — El Castillo and Great Ball Court constructed" },
  { year: "987 AD", event: "Toltec influence arrives, bringing Kukulkan worship" },
  { year: "1100 AD", event: "City begins its decline, surpassed by Mayapan" },
  { year: "1531", event: "Spanish conquistador Francisco de Montejo briefly occupies the site" },
  { year: "1843", event: "John Lloyd Stephens publishes Incidents of Travel, sparking global interest" },
  { year: "1988", event: "Designated a UNESCO World Heritage Site" },
  { year: "2007", event: "Named one of the New Seven Wonders of the World" },
];

const HistoryPage = () => {
  const historyFAQs = generalChichenItzaFAQs.filter(f => f.category === "history" || f.category === "attractions");

  return (
    <>
      <SEOHead meta={meta} />

      <section className="bg-gradient-to-br from-accent/10 via-background to-primary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              History & Facts About Chichen Itza
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Discover the rise and fall of one of the greatest Maya cities, from ancient origins to its recognition as a New Wonder of the World.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/tours">Book a Guided Tour <ChevronRight className="h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl mb-4">Overview</h2>
            <p className="text-muted-foreground mb-6">
              Chichen Itza was one of the largest and most powerful cities in the ancient Maya world. Located in the heart of Mexico's Yucatan Peninsula, it thrived for over 500 years as a political, economic, and ceremonial center. Today, it attracts over 2.6 million visitors annually and stands as a testament to Maya genius in architecture, astronomy, and mathematics.
            </p>
            <p className="text-muted-foreground mb-6">
              The name "Chichen Itza" translates to "at the mouth of the well of the Itza" — referring to the Sacred Cenote that was central to the city's spiritual life. The Itza were a powerful Maya group who controlled the region's lucrative trade routes in obsidian, salt, and jade.
            </p>

            <TipBox type="info" title="Did You Know?" content="El Castillo is a giant calendar in stone. Its four staircases have 91 steps each, plus the top platform, totaling 365 — one for each day of the solar year. The nine terraces create 18 sections representing the 18 months of the Maya calendar." />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">Historical Timeline</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-primary font-bold min-w-[80px] text-right">{item.year}</span>
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <p className="text-foreground">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl mb-6">Key Structures</h2>
            <InfoBox title="Must-See Monuments" icon="🏛️" items={[
              "El Castillo (Pyramid of Kukulkan) — 30m tall, 365-step calendar pyramid",
              "Great Ball Court — largest in Mesoamerica at 168m long",
              "Temple of Warriors — 1,000 columns depicting warriors and gods",
              "El Caracol (Observatory) — circular tower used for astronomical observation",
              "Sacred Cenote — 60m diameter sinkhole used for ritual offerings",
              "Tzompantli (Skull Platform) — carved stone platform depicting rows of skulls",
              "Platform of Venus — decorated with feathered serpent motifs",
            ]} variant="info" />

            <div className="mt-8">
              <h2 className="font-heading font-bold text-2xl mb-6">Fascinating Facts</h2>
              <InfoBox title="Surprising Facts" icon="✨" items={[
                "Chichen Itza covers over 10 square kilometers — most visitors only see 20%",
                "The pyramid produces a chirping echo that mimics the quetzal bird call",
                "The Maya invented the concept of zero independently",
                "The Ball Court has perfect acoustics — a whisper carries 150 meters",
                "The Spring Equinox serpent shadow was engineered over 1,000 years ago",
                "Cenote offerings included gold, jade, pottery, and human remains",
              ]} variant="success" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={historyFAQs} title="History FAQs" subtitle="Common questions about Chichen Itza's history" />
      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">Continue Exploring</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
              { label: "Photography Tips", href: "/guide/photography-tips" },
              { label: "Entrance Fees", href: "/guide/entrance-fees" },
              { label: "How to Get There", href: "/guide/how-to-get-there" },
              { label: "Dress Code & Rules", href: "/guide/dress-code-and-rules" },
              { label: "Day Tours", href: "/tours/day-tours" },
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "Blog", href: "/blog" },
              { label: "FAQ", href: "/practical/faq" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryPage;
