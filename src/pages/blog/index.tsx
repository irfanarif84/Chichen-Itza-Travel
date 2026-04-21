import { Calendar, Clock, ArrowRight } from "lucide-react";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TrustBadges from "@/components/features/booking/TrustBadges";
import TourCard from "@/components/features/tours/TourCard";
import { blogPosts } from "@/lib/blogData";
import { blogPostsEs } from "@/lib/blogData.es";
import { tours } from "@/lib/tourData";
import { useLocale } from "@/lib/i18n/useLocale";
import LocaleLink from "@/components/LocaleLink";

const BlogIndexPage = () => {
  const { isEs, locale } = useLocale();
  const posts = isEs ? blogPostsEs : blogPosts;

  const meta = getPageMeta({
    title: isEs
      ? "Blog de Chichén Itzá – Consejos de Viaje, Historia y Guías"
      : "Chichen Itza Blog – Travel Tips, History & Guides",
    description: isEs
      ? "Consejos de viaje, historia maya, guías de fotografía y consejos de expertos para visitar Chichén Itzá. Planifica el viaje perfecto con nuestro blog."
      : "Expert travel tips, Mayan history, photography guides, and insider advice for visiting Chichen Itza. Plan the perfect trip with our blog.",
    canonical: isEs ? "/es/blog" : "/blog",
    locale,
    jsonLd: createBreadcrumbSchema([
      { name: isEs ? "Inicio" : "Home", url: "/" },
      { name: "Blog" },
    ]),
  });

  const breadcrumbs = [{ label: "Blog" }];
  const featured = posts[0];

  const featuredTours = tours.filter((t) =>
    ["chichen-itza-day-tour-from-cancun",
     "chichen-itza-private-vip-tour",
     "chichen-itza-cenote-ik-kil-combo-tour"].includes(t.slug)
  );

  return (
    <>
      <SEOHead meta={meta} />

      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {isEs ? "Blog de Viaje a Chichén Itzá" : "Chichen Itza Travel Blog"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isEs
                ? "Guías de expertos, consejos internos, historia maya y consejos de fotografía para ayudarte a planificar la experiencia perfecta en Chichén Itzá."
                : "Expert guides, insider tips, Mayan history, and photography advice to help you plan the perfect Chichen Itza experience."}
            </p>
          </div>
        </div>
      </section>

      <div className="container pb-4"><TrustBadges /></div>

      {/* Featured Post */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="bg-card rounded-xl border border-border overflow-hidden lg:grid lg:grid-cols-2 gap-0">
            <div className="aspect-video lg:aspect-auto bg-muted flex items-center justify-center text-6xl">🏛️</div>
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{featured.category}</span>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mt-2 mb-3">
                <LocaleLink to={`/blog/${featured.slug}`} className="hover:text-primary transition-colors">
                  {featured.title}
                </LocaleLink>
              </h2>
              <p className="text-muted-foreground mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{featured.readTime}</span>
              </div>
              <LocaleLink to={`/blog/${featured.slug}`} className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                {isEs ? "Leer Más" : "Read More"} <ArrowRight className="h-4 w-4" />
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-2xl mb-8">
                {isEs ? "Últimos Artículos" : "Latest Articles"}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {posts.slice(1).map((post) => (
                  <article key={post.slug} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-card-hover transition-shadow">
                    <div className="aspect-video bg-muted flex items-center justify-center text-4xl">📝</div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                      <h3 className="font-heading font-semibold text-lg mt-1 mb-2">
                        <LocaleLink to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</LocaleLink>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block space-y-8">

              {/* Popular Guides */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-heading font-semibold text-lg mb-4">
                  {isEs ? "Guías Populares" : "Popular Guides"}
                </h3>
                <ul className="space-y-3">
                  {([
                    ["/guide/best-time-to-visit",
                     isEs ? "Mejor Época para Visitar" : "Best Time to Visit"],
                    ["/guide/entrance-fees",
                     isEs ? "Precios de Entrada 2026" : "Entrance Fees 2026"],
                    ["/guide/what-to-bring",
                     isEs ? "Qué Llevar" : "What to Bring"],
                    ["/guide/how-to-get-there",
                     isEs ? "Cómo Llegar" : "How to Get There"],
                  ] as [string, string][]).map(([href, label]) => (
                    <li key={href}>
                      <LocaleLink
                        to={href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <span className="text-primary">→</span> {label}
                      </LocaleLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Browse by City */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-heading font-semibold text-lg mb-4">
                  {isEs ? "Tours por Ciudad" : "Tours by City"}
                </h3>
                <ul className="space-y-3">
                  {([
                    ["/tours-from/cancun", "Cancún"],
                    ["/tours-from/playa-del-carmen", "Playa del Carmen"],
                    ["/tours-from/tulum", "Tulum"],
                    ["/tours-from/merida", "Mérida"],
                  ] as [string, string][]).map(([href, label]) => (
                    <li key={href}>
                      <LocaleLink
                        to={href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <span className="text-primary">→</span> {label}
                      </LocaleLink>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-12 lg:py-16 bg-muted/30 border-t border-border">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-3">
              {isEs ? "Reserva Tu Tour" : "Book a Chichen Itza Tour"}
            </h2>
            <p className="text-muted-foreground">
              {isEs
                ? "Tours privados guiados desde Cancún, Playa del Carmen y Tulum"
                : "Private guided tours from Cancún, Playa del Carmen & Tulum"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredTours.map((t) => <TourCard key={t.id} tour={t} />)}
          </div>
          <div className="text-center">
            <LocaleLink
              to="/tours"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
            >
              {isEs ? "Ver Todos los Tours →" : "View All Tours →"}
            </LocaleLink>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">
            {isEs ? "Explora Más" : "Explore More"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: isEs ? "Todos los Tours" : "All Tours", href: "/tours" },
              { label: isEs ? "Mejor Época para Visitar" : "Best Time to Visit", href: "/guide/best-time-to-visit" },
              { label: isEs ? "Historia y Datos" : "History & Facts", href: "/guide/history-and-facts" },
              { label: isEs ? "Consejos de Fotografía" : "Photography Tips", href: "/guide/photography-tips" },
              { label: isEs ? "Preguntas Frecuentes" : "FAQ", href: "/practical/faq" },
            ].map((link) => (
              <LocaleLink key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label} →
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default BlogIndexPage;
