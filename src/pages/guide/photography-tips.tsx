import { Link } from "react-router-dom";
import {
  ChevronRight,
  Camera,
  Sun,
  Sunrise,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
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
    question: "What is the best time to photograph Chichen Itza?",
    answer:
      "The best time is during sunrise tours with 7:00 AM early access, before the site officially opens. You'll have golden hour lighting, minimal crowds, and El Castillo's plaza nearly empty for clean shots. The second-best option is arriving right at 8:00 AM opening time, giving you 60-90 minutes before large tour groups arrive around 9:30-10:00 AM.",
  },
  {
    question: "Are tripods allowed at Chichen Itza?",
    answer:
      "No, tripods, monopods, and selfie sticks are strictly prohibited at Chichen Itza and will be confiscated at security. You must shoot handheld. Use image stabilization, fast shutter speeds (1/250s+), or brace against structures for stability.",
  },
  {
    question: "What camera settings should I use at Chichen Itza?",
    answer:
      "For bright daylight: ISO 100-200, f/8-f/11 for sharpness, shutter speed 1/250-1/500s. For architecture shots prioritizing maximum sharpness: ISO 100, f/8-f/13, aperture priority mode. For people with ruins in background: ISO 100-400, f/2.8-f/5.6 for depth, shutter priority at 1/250s or faster.",
  },
  {
    question: "Can I bring a professional camera to Chichen Itza?",
    answer:
      "Yes, but cameras with detachable lenses require a special permit costing $45 USD paid on-site. This applies to all DSLRs and mirrorless cameras, even for hobbyists. Smartphones and compact point-and-shoot cameras don't require permits.",
  },
  {
    question: "How can I photograph El Castillo without crowds?",
    answer:
      "Book a sunrise tour arriving at 7:00 AM (before 8:00 AM opening), giving you 60+ minutes with minimal people. Alternative: arrive right at 8:00 AM opening before tour buses. Avoid midday (10 AM-2 PM) when crowds peak.",
  },
  {
    question: "What lens is best for photographing Chichen Itza?",
    answer:
      "A wide-angle lens (16-35mm) is essential for capturing entire structures. A standard zoom (24-70mm) provides versatility. A telephoto (70-200mm) is excellent for isolating carvings and details. If bringing only one lens, choose 24-70mm for best all-around coverage.",
  },
];

const meta = getPageMeta({
  title: "Chichen Itza Photography Tips – Complete Guide 2026",
  description:
    "Expert photography tips for Chichen Itza. Best times, camera settings, composition techniques, prohibited equipment. Capture stunning photos of El Castillo.",
  canonical: "/guide/photography-tips",
  ogType: "article",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Guide", url: "/guide" },
      { name: "Photography Tips" },
    ]),
    guideSchemas["photography-tips"],
    createFAQSchema(faqData),
  ],
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "Photography Tips" },
];

const compositionTechniques = [
  {
    title: "Include People for Scale",
    icon: "👥",
    description:
      "El Castillo stands 79 feet tall, but this is hard to convey without human reference. Place people in the foreground or mid-ground to show the pyramid's massive scale.",
    tip: "Wait for someone in colorful clothing to walk into frame for a pop of color against the gray stone.",
  },
  {
    title: "Use Leading Lines",
    icon: "➡️",
    description:
      "The pathways, rows of columns, and staircases create natural leading lines that draw the eye to El Castillo. Position yourself so these lines guide viewers into your composition.",
    tip: "The central walkway leading to El Castillo is a classic leading line shot, best captured from low angle.",
  },
  {
    title: "Explore Different Angles",
    icon: "🔄",
    description:
      "Everyone shoots El Castillo from the main plaza. Walk around to find unique perspectives: corners, sides, from between columns, through doorways.",
    tip: "The northwest corner at sunrise provides dramatic side-lighting and fewer people in frame.",
  },
  {
    title: "Frame Within Frames",
    icon: "🖼️",
    description:
      "Use temple doorways, stone archways, or gaps between columns to frame El Castillo. This adds depth and context to your composition.",
    tip: "The Temple of Warriors columns create excellent natural frames for El Castillo in the background.",
  },
  {
    title: "Rule of Thirds",
    icon: "📐",
    description:
      "Place El Castillo off-center rather than dead center in every shot. Use the rule of thirds grid to position the pyramid on left or right third for more dynamic compositions.",
    tip: "Include interesting foreground elements (carved stones, serpent heads) in the lower third for layered compositions.",
  },
  {
    title: "Capture Details",
    icon: "🔍",
    description:
      "Don't just shoot wide. Zoom in on serpent heads, intricate carvings, hieroglyphics, and architectural details. These tell important stories.",
    tip: "The feathered serpent heads at the base of El Castillo's staircases make stunning detail shots with a telephoto lens.",
  },
  {
    title: "Low Angle Shots",
    icon: "⬇️",
    description:
      "Get low (crouch or knee level) to emphasize the pyramid's height and create dramatic perspective. This makes structures appear more imposing.",
    tip: "Include textured stone pathway in the foreground when shooting low for added interest and depth.",
  },
  {
    title: "Symmetry & Patterns",
    icon: "⚖️",
    description:
      "El Castillo is perfectly symmetrical. Embrace this in centered compositions, or shoot the repetitive patterns in the columns and architectural elements.",
    tip: "The 365 steps (one per day of year) create interesting patterns. Shoot from bottom looking up.",
  },
];

const photoSpots = [
  {
    location: "Main Plaza – Center",
    shots: "Classic El Castillo frontal view",
    bestTime: "Sunrise or late afternoon",
    crowdLevel: "Very High",
    priority: "Must-Have",
  },
  {
    location: "Northwest Corner of El Castillo",
    shots: "Dramatic side-lighting, fewer people",
    bestTime: "Sunrise",
    crowdLevel: "Low",
    priority: "Highly Recommended",
  },
  {
    location: "Temple of Warriors Columns",
    shots: "Framing El Castillo through columns",
    bestTime: "Morning",
    crowdLevel: "Medium",
    priority: "Highly Recommended",
  },
  {
    location: "Great Ball Court",
    shots: "Massive walls, carved rings, acoustics demo",
    bestTime: "Any time",
    crowdLevel: "Medium",
    priority: "Must-Have",
  },
  {
    location: "Platform of Eagles & Jaguars",
    shots: "Detailed carved reliefs",
    bestTime: "Morning side-light",
    crowdLevel: "Low",
    priority: "Recommended",
  },
  {
    location: "Observatory (El Caracol)",
    shots: "Unique rounded structure, fewer tourists",
    bestTime: "Any time",
    crowdLevel: "Low",
    priority: "Recommended",
  },
  {
    location: "Sacred Cenote",
    shots: "Natural setting, historical significance",
    bestTime: "Any time",
    crowdLevel: "Low",
    priority: "Optional",
  },
  {
    location: "Group of a Thousand Columns",
    shots: "Repetitive patterns, perspective play",
    bestTime: "Morning or late afternoon",
    crowdLevel: "Low",
    priority: "Recommended",
  },
];

const PhotographyTipsPage = () => (
  <>
    <SEOHead meta={meta} />

    {/* Hero */}
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16 overflow-hidden">
      <img
        src={guideImages["photography-tips"]}
        alt="Photographer capturing El Castillo pyramid at Chichen Itza during golden hour"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        loading="eager"
      />
      <div className="container relative z-10">
        <Breadcrumbs items={breadcrumbs} />
        <div className="max-w-3xl mt-4">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Chichen Itza Photography Tips: Complete Guide
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Expert tips for capturing stunning photos of El Castillo and the ancient ruins — best times, camera settings, composition techniques, and equipment rules.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Updated: February 2026 • 9 min read • Expert Tips
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/tours/sunrise-tours">
              Book a Sunrise Photo Tour <ChevronRight className="h-5 w-5" />
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
          <div className="space-y-14">
            {/* Quick Tips */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 lg:p-8">
              <h2 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" />
                Quick Tips: The Photography Essentials
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-success mb-2">✓ Do This:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Book sunrise tour for best light &amp; empty plaza</li>
                    <li>• Shoot in RAW format for editing flexibility</li>
                    <li>• Use wide-angle lens for architecture</li>
                    <li>• Include people for scale reference</li>
                    <li>• Arrive early (7-8 AM) before crowds</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-destructive mb-2">✗ Avoid This:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Bringing tripods (prohibited &amp; confiscated)</li>
                    <li>• Shooting midday (harsh light, crowds)</li>
                    <li>• Centering El Castillo every shot (boring)</li>
                    <li>• Forgetting to clean lens (dust everywhere)</li>
                    <li>• Only shooting the main pyramid</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Times for Photography */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 flex items-center gap-2">
                <Sun className="h-6 w-6 text-accent" />
                Best Time for Photography
              </h2>
              <p className="text-muted-foreground mb-6">
                Timing is everything in photography. At Chichen Itza, the difference between good and great photos often comes down to when you arrive and shoot. Check our <Link to="/guide/best-time-to-visit" className="text-primary hover:underline">best time to visit guide</Link> for seasonal weather and crowd patterns that affect lighting conditions.
              </p>

              <div className="space-y-4">
                {/* Sunrise */}
                <div className="border-l-4 border-success bg-success/5 rounded-r-lg p-5">
                  <div className="flex items-start gap-4">
                    <span className="bg-success text-white font-bold text-sm rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">#1</span>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">
                        Sunrise / Early Morning (7:00-8:30 AM) — <span className="text-success">BEST</span>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Golden hour lighting creates warm, soft tones on the limestone. The plaza is nearly empty during sunrise tours (7 AM early access). Cooler temperatures reduce heat shimmer in photos.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2 text-sm mb-3">
                        <div>
                          <span className="font-medium">Light Quality:</span>{" "}
                          <span className="text-muted-foreground">Warm golden tones, soft shadows, directional light creates dimension</span>
                        </div>
                        <div>
                          <span className="font-medium">Crowd Level:</span>{" "}
                          <span className="text-muted-foreground">5-20 people vs 500-1000 later. Clean shots guaranteed.</span>
                        </div>
                      </div>
                      <Link to="/tours/sunrise-tours" className="text-sm font-semibold text-primary hover:underline">
                        → Book Sunrise Photography Tour
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mid-morning */}
                <div className="border-l-4 border-accent bg-accent/5 rounded-r-lg p-5">
                  <div className="flex items-start gap-4">
                    <span className="bg-accent text-white font-bold text-sm rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">#2</span>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">
                        Mid-Morning (8:30-10:00 AM) — <span className="text-accent">Good</span>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Bright, even lighting good for architecture. Crowds building but manageable. This is when most standard tours arrive.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Pro tip:</span> Focus on less-visited areas during this time (Observatory, Platform of Eagles, Group of Columns) where crowds haven't reached yet.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Midday */}
                <div className="border-l-4 border-destructive bg-destructive/5 rounded-r-lg p-5">
                  <div className="flex items-start gap-4">
                    <span className="bg-destructive text-white font-bold text-sm rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">#3</span>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">
                        Midday (10:00 AM-2:00 PM) — <span className="text-destructive">Avoid</span>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Harsh overhead sun creates strong shadows and washed-out highlights. Peak crowds make clean shots nearly impossible. Heat shimmer affects image quality.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ⚠️ Only shoot during this window if absolutely unavoidable. Focus on detail shots and shaded areas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Late Afternoon */}
                <div className="border-l-4 border-secondary bg-secondary/5 rounded-r-lg p-5">
                  <div className="flex items-start gap-4">
                    <span className="bg-secondary text-white font-bold text-sm rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">#4</span>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">
                        Late Afternoon (3:00-5:00 PM) — <span className="text-secondary">Underrated</span>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Golden hour returns with warm side-lighting. Most tours have departed. Great for dramatic shadows and textures. However, site closes at 5 PM (last entry 4 PM).
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Best for:</span> Repeat visitors, those staying nearby, or combining with morning beach time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <TipBox type="success" title="Golden Rule" content="Arrive when gates open at 8 AM. The first hour offers the best light, fewest people, and most dramatic shadows. Our sunrise tours provide even earlier access starting at 7 AM." />
              </div>
            </div>

            {/* Camera Settings */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-2">
                <Sunrise className="h-6 w-6 text-primary" />
                Recommended Camera Settings
              </h2>
              <p className="text-muted-foreground mb-6">
                Chichen Itza's bright limestone and intense sunlight allow for ideal photography conditions. Here are proven settings for different scenarios:
              </p>

              <ComparisonTable
                title="Camera Settings by Scenario"
                headers={["Scenario", "Mode", "ISO", "Aperture", "Shutter"]}
                rows={[
                  { label: "General Daylight", values: ["Aperture Priority", "100-200", "f/8-f/11", "1/250-1/500s"] },
                  { label: "Architecture (Max Sharp)", values: ["Aperture Priority", "100", "f/8-f/13", "Auto (1/250+)"] },
                  { label: "People + Ruins", values: ["Shutter Priority", "100-400", "Auto (f/5.6-8)", "1/250-1/500s"] },
                  { label: "Detail Shots/Carvings", values: ["Aperture Priority", "100-400", "f/5.6-f/8", "1/250s+"] },
                  { label: "Sunrise/Golden Hour", values: ["Manual", "400-800", "f/8", "1/125-1/250s"] },
                  { label: "Shaded Areas", values: ["Aperture Priority", "400-800", "f/5.6-f/8", "Auto"] },
                ]}
                highlightColumn={0}
              />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-semibold text-base mb-3">📱 Smartphone Settings</h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Enable HDR mode for better dynamic range</li>
                    <li>• Use portrait mode for people shots (depth effect)</li>
                    <li>• Shoot in RAW if available (iPhone Pro, Samsung flagship)</li>
                    <li>• Lock exposure on the stone (tap and hold) before composing</li>
                    <li>• Use grid lines for composition (rule of thirds)</li>
                    <li>• Clean lens frequently (dust and humidity accumulate fast)</li>
                  </ul>
                </div>
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-semibold text-base mb-3">📷 Advanced Tips</h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Shoot in RAW format for maximum editing flexibility</li>
                    <li>• Use exposure bracketing (±1-2 stops) for challenging light</li>
                    <li>• Enable image stabilization (handheld shooting required)</li>
                    <li>• Set white balance to "Sunny" or 5500K for consistency</li>
                    <li>• Use continuous shooting mode for people shots</li>
                    <li>• Check histogram regularly (avoid blown highlights)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Composition Techniques */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-2">
                <Camera className="h-6 w-6 text-primary" />
                Composition Techniques
              </h2>
              <p className="text-muted-foreground mb-6">
                Great composition separates amateur snapshots from compelling photographs. These techniques will dramatically improve your Chichen Itza images. For context on the structures you'll be photographing, read our <Link to="/guide/history-and-facts" className="text-primary hover:underline">history and facts guide</Link> — understanding what you're shooting helps tell a better visual story.
              </p>

              <div className="space-y-4">
                {compositionTechniques.map((technique, index) => (
                  <div key={index} className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0">{technique.icon}</span>
                      <div>
                        <h3 className="font-heading font-semibold text-base mb-1">{technique.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{technique.description}</p>
                        <div className="bg-primary/5 border border-primary/10 rounded-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-primary">💡 Pro Tip:</span> {technique.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Photo Spots */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 flex items-center gap-2">
                <Camera className="h-6 w-6 text-accent" />
                Best Photo Spots at Chichen Itza
              </h2>

              <div className="space-y-3">
                {photoSpots.map((spot, index) => (
                  <div key={index} className="bg-card rounded-lg border border-border p-4 hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-heading font-semibold text-base">{spot.location}</h3>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${
                          spot.priority === "Must-Have"
                            ? "bg-success/10 text-success"
                            : spot.priority === "Highly Recommended"
                            ? "bg-primary/10 text-primary"
                            : spot.priority === "Recommended"
                            ? "bg-accent/10 text-accent"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {spot.priority}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-2 text-sm text-muted-foreground">
                      <p><span className="font-medium text-foreground">Shots:</span> {spot.shots}</p>
                      <p><span className="font-medium text-foreground">Best Time:</span> {spot.bestTime}</p>
                      <p><span className="font-medium text-foreground">Crowds:</span> {spot.crowdLevel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Rules */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                Equipment Rules & Restrictions
              </h2>

              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 mb-6">
                <h3 className="font-heading font-semibold text-base mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  ⚠️ Strictly Prohibited (Will Be Confiscated):
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span><strong>Tripods and monopods</strong> — No exceptions, will be taken at security</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span><strong>Selfie sticks</strong> — Banned site-wide</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span><strong>Drones</strong> — Prohibited at all Mexican archaeological sites</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span><strong>External flashes/strobes</strong> — Not allowed</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span><strong>Professional video equipment</strong> — Large cameras, gimbals require special permits</span>
                  </p>
                </div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-base mb-2">💰 Professional Equipment Permit</h3>
                <p className="text-sm text-muted-foreground mb-2">
                   DSLRs, mirrorless cameras, and any camera with detachable lenses require a <strong>$45 USD permit</strong> purchased on-site. This applies to <strong>ALL</strong> visitors, even hobbyists. Security checks at entrance. Smartphones and compact point-and-shoot cameras don't require permits. See our <Link to="/guide/entrance-fees" className="text-primary hover:underline">entrance fees breakdown</Link> for full pricing details.
                 </p>
                 <p className="text-sm text-muted-foreground">
                   <em>Note: The permit fee is per person, not per camera. Bring the receipt as it may be checked again inside. Review the <Link to="/guide/dress-code-and-rules" className="text-primary hover:underline">dress code and site rules</Link> for other items that may be restricted at the entrance.</em>
                 </p>
              </div>
            </div>

            {/* FAQ */}
            <FAQSection title="Photography FAQ" faqs={faqData} />

            {/* Final Checklist */}
            <div className="bg-muted/30 rounded-xl border border-border p-6 lg:p-8">
              <h2 className="font-heading font-bold text-xl mb-4">📸 Final Photography Checklist</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-3">Before You Go:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success flex-shrink-0" /> Charge all batteries to 100%</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success flex-shrink-0" /> Clear memory cards (50+ GB free)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success flex-shrink-0" /> Clean lenses thoroughly</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success flex-shrink-0" /> Set camera to RAW format</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success flex-shrink-0" /> Enable image stabilization</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success flex-shrink-0" /> Book sunrise tour if possible</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-3">At The Site:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success flex-shrink-0" /> Shoot the main plaza first (least crowded early)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success flex-shrink-0" /> Clean lens every 30 minutes (dust!)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success flex-shrink-0" /> Check histogram frequently</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success flex-shrink-0" /> Explore beyond El Castillo</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success flex-shrink-0" /> Take detail shots, not just wide</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success flex-shrink-0" /> Include people for scale</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <QuickBookingForm />
            <TrustBadges />

            <div className="bg-success/5 border border-success/20 rounded-xl p-5">
              <h3 className="font-heading font-semibold text-base mb-2">🌅 Best for Photography:</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Sunrise tours provide the best lighting and emptiest plazas for stunning, crowd-free photos.
              </p>
              <Button variant="cta" size="sm" className="w-full" asChild>
                <Link to="/tours/sunrise-tours">View Sunrise Tours</Link>
              </Button>
            </div>

            <PopularToursWidget />

            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-heading font-semibold text-base mb-3">More Planning Guides</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/guide/best-time-to-visit" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Best Time to Visit
                  </Link>
                </li>
                <li>
                  <Link to="/guide/what-to-bring" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    → What to Bring
                  </Link>
                </li>
                <li>
                  <Link to="/guide/how-to-get-there" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    → How to Get There
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection />

    {/* Related Links */}
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
            <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default PhotographyTipsPage;
