import { useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/common/FAQ";
import CTASection from "@/components/features/home/CTASection";
import { blogPosts } from "@/lib/blogData";
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

      <article className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-neutral">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-foreground leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

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
