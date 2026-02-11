import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import { blogPosts } from "@/lib/blogData";

const meta = getPageMeta({
  title: "Chichen Itza Blog – Travel Tips, History & Guides",
  description: "Expert travel tips, Mayan history, photography guides, and insider advice for visiting Chichen Itza. Plan the perfect trip with our blog.",
  canonical: "/blog",
  jsonLd: createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog" },
  ]),
});

const breadcrumbs = [{ label: "Blog" }];

const BlogIndexPage = () => (
  <>
    <SEOHead meta={meta} />

    <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16">
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        <div className="max-w-3xl mt-4">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Chichen Itza Travel Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Expert guides, insider tips, Mayan history, and photography advice to help you plan the perfect Chichen Itza experience.
          </p>
        </div>
      </div>
    </section>

    {/* Featured Post */}
    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="bg-card rounded-xl border border-border overflow-hidden lg:grid lg:grid-cols-2 gap-0">
          <div className="aspect-video lg:aspect-auto bg-muted flex items-center justify-center text-6xl">🏛️</div>
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{blogPosts[0].category}</span>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mt-2 mb-3">
              <Link to={`/blog/${blogPosts[0].slug}`} className="hover:text-primary transition-colors">
                {blogPosts[0].title}
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{blogPosts[0].date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{blogPosts[0].readTime}</span>
            </div>
            <Link to={`/blog/${blogPosts[0].slug}`} className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* All Posts */}
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container">
        <h2 className="font-heading font-bold text-2xl mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => (
            <article key={post.slug} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-card-hover transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center text-4xl">📝</div>
              <div className="p-5">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                <h3 className="font-heading font-semibold text-lg mt-1 mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
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
    </section>

    {/* Internal Links */}
    <section className="py-12 border-t border-border">
      <div className="container">
        <h2 className="font-heading font-semibold text-lg mb-6">Explore More</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: "All Tours", href: "/tours" },
            { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
            { label: "History & Facts", href: "/guide/history-and-facts" },
            { label: "Photography Tips", href: "/guide/photography-tips" },
            { label: "FAQ", href: "/practical/faq" },
          ].map((link) => (
            <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default BlogIndexPage;
