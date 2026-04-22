import { useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/common/FAQ";
import CTASection from "@/components/features/home/CTASection";
import TrustBadges from "@/components/features/booking/TrustBadges";
import AuthorBio from "@/components/common/AuthorBio";
import { blogPosts, type BlogContentBlock } from "@/lib/blogData";
import { blogPostsEs } from "@/lib/blogData.es";
import { useLocale } from "@/lib/i18n/useLocale";
import LocaleLink from "@/components/LocaleLink";

// Per-post FAQs keyed by slug
const blogFAQs: Record<string, { question: string; answer: string }[]> = {
  "spring-equinox-chichen-itza-guide": [
    {
      question: "When is the Spring Equinox at Chichen Itza in 2026?",
      answer: "The Spring Equinox falls on March 20-21, 2026. The famous serpent shadow on El Castillo appears from around 3:00 PM, reaching its peak visibility between 4:00–4:30 PM."
    },
    {
      question: "How many people attend the Chichen Itza equinox?",
      answer: "Expect 30,000–40,000 visitors on the actual equinox days. A great tip is to visit on March 19 or March 22 — the shadow effect is nearly identical but with 80–90% fewer crowds."
    },
    {
      question: "Do I need to book a tour for the equinox in advance?",
      answer: "Yes — book at least 3 months in advance for equinox week. Our sunrise tours include early access, expert archaeological commentary, and strategic positioning for the best views."
    },
    {
      question: "What happens if it's cloudy on equinox day at Chichen Itza?",
      answer: "Light cloud cover still allows the shadow effect — the triangles remain partially visible. Heavy overcast eliminates the shadow entirely. March has roughly a 15% chance of significant cloud interference versus 60%+ in September. Our guides recommend March for the highest probability of a clear equinox view."
    },
    {
      question: "Is the fall equinox at Chichen Itza worth visiting?",
      answer: "The fall equinox (September 21) produces the same serpent shadow effect as March. However, September is Yucatan's rainiest month, with afternoon storms frequently arriving between 2:00–5:00 PM — exactly when the shadow appears. If March isn't possible, position early and hope for one of September's occasional clear afternoons."
    },
    {
      question: "Exactly where should I stand to see the equinox shadow?",
      answer: "Stand on the north side of El Castillo, slightly left of center facing the pyramid, aligned with the northwest corner of the staircase balustrade — the shadow forms on the left balustrade. Claim your spot by 2:00 PM. By 2:30 PM the viewing area is four to five people deep."
    },
    {
      question: "What does the descending serpent shadow symbolize?",
      answer: "Kukulkan descending the pyramid marked the beginning of the Maya planting season — a sign that divine power was returning to earth. The feathered serpent deity represented wind, rain, and Venus. The shadow was the god arriving to bless the soil: a sacred agricultural calendar carved in stone."
    },
  ],
  "cenotes-near-chichen-itza": [
    {
      question: "What is the best cenote near Chichen Itza for swimming?",
      answer: "Cenote Ik Kil is the most popular — located just 3 km from Chichen Itza with dramatic hanging vines and crystal-clear water 26 meters below ground. Visit before 10 AM or after 3 PM to avoid peak crowds."
    },
    {
      question: "Is regular sunscreen allowed at cenotes near Chichen Itza?",
      answer: "No. Regular sunscreen is prohibited at all cenotes to protect the water ecosystem. You must use biodegradable sunscreen only. Most cenotes sell it on site, but bringing your own is recommended."
    },
    {
      question: "Are cenote visits included in Chichen Itza tours?",
      answer: "Yes — our Chichen Itza + Cenote combo tours include a stop at Cenote Ik Kil, Hubiku, or Suytun depending on your tour. Entry fees and transport are included in the tour price."
    },
    {
      question: "Which cenote near Chichen Itza is least crowded?",
      answer: "Cenote Oxman is the least crowded major cenote near the Chichen Itza route. Arrive before 9 AM for a near-empty experience. Cenote Hubiku is also significantly quieter than Ik Kil and sits only 30 km from the ruins."
    },
    {
      question: "Where can I buy biodegradable sunscreen near Chichen Itza?",
      answer: "Buy biodegradable sunscreen at Cancun airport pharmacies (Farmacias del Ahorro) before your tour. In Valladolid, pharmacies on Calle 39 stock it. On-site cenote vendors sell small bottles for 80–120 MXN but stock is not guaranteed."
    },
    {
      question: "Can I visit multiple cenotes in one day?",
      answer: "Yes — most combo tours include one cenote. On a private tour you can visit two: Ik Kil after Chichen Itza, then Suytun or Oxman in Valladolid. Allow 1.5–2 hours per cenote including travel time."
    },
  ],
  "chichen-itza-vs-tulum-ruins": [
    {
      question: "Which is better for first-time visitors: Chichen Itza or Tulum?",
      answer: "Chichen Itza is the priority for first-time visitors — it is a UNESCO World Heritage Site and one of the New Seven Wonders of the World. Tulum offers unique Caribbean cliff scenery and is ideal as a second ruins visit."
    },
    {
      question: "Can I visit both Chichen Itza and Tulum in one day?",
      answer: "It is possible but not recommended — they are about 130 km apart and each deserves 2-3 hours minimum. A multi-day itinerary or choosing one site per day gives a far better experience."
    },
    {
      question: "Is Tulum or Chichen Itza less crowded?",
      answer: "Tulum has become increasingly busy but is generally less crowded than Chichen Itza. Ek Balam offers the least crowded pyramid experience of all major Yucatan ruins."
    },
  ],
  "photographing-chichen-itza-like-a-pro": [
    {
      question: "What is the best time of day to photograph Chichen Itza?",
      answer: "Golden hour — the first hour after sunrise (around 8–9 AM) and the last hour before sunset give the warmest light and the fewest crowds. Our sunrise tours arrive at opening for the best photography conditions."
    },
    {
      question: "What camera equipment should I bring to Chichen Itza?",
      answer: "A wide-angle lens is ideal for capturing El Castillo in full. A telephoto lens helps with detailed carvings. Bring a polarizing filter to reduce glare from the limestone. Tripods are permitted in low-traffic areas."
    },
    {
      question: "Can I use a drone at Chichen Itza?",
      answer: "No. Drone flights are strictly prohibited within the Chichen Itza archaeological zone. INAH (Mexico's National Institute of Anthropology and History) enforces this rule and equipment can be confiscated."
    },
  ],
  "mayan-history-beginners-guide": [
    {
      question: "When did the Maya civilization begin and end?",
      answer: "The Maya civilization began around 2000 BC in the Preclassic period and reached its Classic period peak between 250–900 AD. The Postclassic period continued until Spanish conquest in the 16th century. Millions of Maya people live in Mexico and Central America today."
    },
    {
      question: "What is Chichen Itza famous for historically?",
      answer: "Chichen Itza was a major political and economic center of the Maya world from approximately 600–1200 AD. Its El Castillo pyramid functions as an astronomical calendar, with 365 steps representing the solar year and the famous equinox serpent shadow."
    },
    {
      question: "How advanced was Mayan astronomy and mathematics?",
      answer: "The Maya independently developed the concept of zero, created a 365-day solar calendar accurate to within minutes, and predicted solar eclipses centuries in advance. Their architectural alignment with celestial events — as seen at Chichen Itza — demonstrates extraordinary astronomical precision."
    },
  ],
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isEs, locale } = useLocale();

  const posts = isEs ? blogPostsEs : blogPosts;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to={isEs ? "/es/blog" : "/blog"} replace />;

  const currentIndex = posts.indexOf(post);
  const nextPost = posts[currentIndex + 1];
  const prevPost = posts[currentIndex - 1];

  const meta = getPageMeta({
    title: post.metaTitle,
    description: post.metaDescription,
    canonical: isEs ? `/es/blog/${post.slug}` : `/blog/${post.slug}`,
    locale,
    jsonLd: [
      createBreadcrumbSchema([
        { name: isEs ? "Inicio" : "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        author: { "@type": "Organization", name: post.author },
        datePublished: post.date,
        publisher: { "@type": "Organization", name: "Maya Explorer Tours" },
      },
      ...(blogFAQs[post.slug] ? [createFAQSchema(blogFAQs[post.slug])] : []),
    ],
  });

  const breadcrumbs = [
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  const relatedLinks: Record<string, { label: string; labelEs: string; href: string }[]> = {
    "spring-equinox-chichen-itza-guide": [
      { label: "Sunrise Tours",       labelEs: "Tours al Amanecer",         href: "/tours/sunrise-tours" },
      { label: "Best Time to Visit",  labelEs: "Mejor Época para Visitar",  href: "/guide/best-time-to-visit" },
      { label: "Photography Tips",    labelEs: "Consejos de Fotografía",    href: "/guide/photography-tips" },
    ],
    "cenotes-near-chichen-itza": [
      { label: "Cenote Tours",        labelEs: "Tours de Cenotes",          href: "/tours/cenote-tours" },
      { label: "Cenote Ik Kil Combo", labelEs: "Combo Cenote Ik Kil",      href: "/combo-tours/cenote-ik-kil" },
      { label: "What to Bring",       labelEs: "Qué Llevar",                href: "/guide/what-to-bring" },
    ],
    "chichen-itza-vs-tulum-ruins": [
      { label: "Day Tours",           labelEs: "Tours de Día",              href: "/tours/day-tours" },
      { label: "Private Tours",       labelEs: "Tours Privados",            href: "/tours/private-tours" },
      { label: "Ruins Comparison Guide", labelEs: "Comparación de Ruinas", href: "/guide/vs-other-ruins" },
    ],
    "photographing-chichen-itza-like-a-pro": [
      { label: "Sunrise Tours",         labelEs: "Tours al Amanecer",        href: "/tours/sunrise-tours" },
      { label: "Photography Tips Guide",labelEs: "Guía de Fotografía",       href: "/guide/photography-tips" },
      { label: "Best Time to Visit",    labelEs: "Mejor Época para Visitar", href: "/guide/best-time-to-visit" },
    ],
    "mayan-history-beginners-guide": [
      { label: "History & Facts Guide", labelEs: "Historia y Datos",         href: "/guide/history-and-facts" },
      { label: "Private Tours",         labelEs: "Tours Privados",           href: "/tours/private-tours" },
      { label: "Entrance Fees 2026",    labelEs: "Precios de Entrada 2026",  href: "/guide/entrance-fees" },
    ],
  };

  const currentRelatedLinks = relatedLinks[post.slug] ?? [];

  return (
    <>
      <SEOHead meta={meta} />

      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-2 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
              <span>{isEs ? "Por" : "By"} {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container pb-2">
        <TrustBadges />
      </div>

      <article className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {post.tocItems && post.tocItems.length > 0 && (
              <nav className="bg-muted/50 border border-border rounded-lg p-5 mb-8">
                <p className="font-semibold text-sm mb-3 text-foreground">
                  {isEs ? "En este artículo" : "In this article"}
                </p>
                <ol className="space-y-1.5 list-decimal list-inside">
                  {post.tocItems.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-sm text-primary hover:underline">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="prose prose-neutral">
              {post.content.map((block, i) => {
                if (typeof block === "string") {
                  return <p key={i} className="text-foreground leading-relaxed mb-6">{block}</p>;
                }
                const b = block as BlogContentBlock;
                switch (b.type) {
                  case "quick-answer":
                    return (
                      <div key={i} className="bg-secondary/10 border-l-4 border-secondary rounded-r-lg p-4 mb-6">
                        <p className="text-foreground font-medium leading-relaxed">{b.text}</p>
                      </div>
                    );
                  case "h2":
                    return (
                      <h2 key={i} id={b.id} className="font-heading font-bold text-2xl mt-10 mb-4 scroll-mt-20">
                        {b.text}
                      </h2>
                    );
                  case "h3":
                    return (
                      <h3 key={i} id={b.id} className="font-heading font-semibold text-xl mt-8 mb-3 scroll-mt-20">
                        {b.text}
                      </h3>
                    );
                  case "tip":
                    return (
                      <div key={i} className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6 flex gap-3">
                        <span className="text-primary font-bold shrink-0 mt-0.5">★</span>
                        <p className="text-foreground leading-relaxed">{b.text}</p>
                      </div>
                    );
                  case "list":
                    return (
                      <ul key={i} className="list-disc list-inside space-y-2 mb-6 text-foreground pl-2">
                        {b.items.map((item, j) => (
                          <li key={j} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    );
                  case "p":
                  default:
                    return <p key={i} className="text-foreground leading-relaxed mb-6">{b.text}</p>;
                }
              })}
            </div>
          </div>
        </div>
      </article>

      <div className="container max-w-3xl">
        <AuthorBio authorName={post.author} isEs={isEs} />
      </div>

      {/* Tags */}
      <section className="pb-8">
        <div className="container">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-10 border-t border-border bg-muted/30">
        <div className="container max-w-3xl">
          <div className="bg-card rounded-xl border border-border p-6 lg:p-8 text-center">
            <h2 className="font-heading font-bold text-xl lg:text-2xl mb-2">
              {isEs ? "¿Listo para Visitar Chichén Itzá?" : "Ready to Visit Chichen Itza?"}
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              {isEs
                ? "Tours privados guiados · Cancelación gratuita · Recogida en hotel incluida"
                : "Private guided tours · Free cancellation · Hotel pickup included"}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <LocaleLink
                to="/tours"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                {isEs ? "Ver Todos los Tours →" : "Explore All Tours →"}
              </LocaleLink>
              <a
                href="https://wa.me/18145939266?text=Hi!%20I%27d%20like%20to%20book%20a%20Chichen%20Itza%20tour"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border bg-card font-semibold px-6 py-3 rounded-lg hover:bg-muted transition-colors text-sm"
              >
                💬 {isEs ? "Reservar por WhatsApp" : "Book via WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      {currentRelatedLinks.length > 0 && (
        <section className="py-10 border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="font-heading font-bold text-lg mb-6">
              {isEs ? "Recursos Relacionados" : "Continue Planning"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentRelatedLinks.map((link) => (
                <LocaleLink
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-2 p-4 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  <span className="text-primary shrink-0">→</span>
                  {isEs ? link.labelEs : link.label}
                </LocaleLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <section className="py-8 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto flex justify-between">
            {prevPost ? (
              <LocaleLink to={`/blog/${prevPost.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" /> {prevPost.title.slice(0, 40)}…
              </LocaleLink>
            ) : <div />}
            {nextPost ? (
              <LocaleLink to={`/blog/${nextPost.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                {nextPost.title.slice(0, 40)}… <ArrowRight className="h-4 w-4" />
              </LocaleLink>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container text-center">
          <h2 className="font-heading font-bold text-2xl mb-4">
            {isEs ? "¿Listo para Conocer Chichén Itzá?" : "Ready to Experience Chichen Itza?"}
          </h2>
          <p className="text-muted-foreground mb-6">
            {isEs
              ? "Explora nuestros tours y encuentra la aventura perfecta para tu viaje."
              : "Browse our tours and find the perfect adventure for your trip."}
          </p>
          <Button variant="cta" size="lg" asChild>
            <LocaleLink to="/tours">
              {isEs ? "Ver Todos los Tours →" : "Browse All Tours →"}
            </LocaleLink>
          </Button>
        </div>
      </section>

      {/* FAQ Section — shown only for posts that have FAQs */}
      {blogFAQs[post.slug] && (
        <FAQSection faqs={blogFAQs[post.slug]} />
      )}

      <CTASection />
    </>
  );
};

export default BlogPostPage;
