import { useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import { blogPosts } from "@/lib/blogData";
import { blogPostsEs } from "@/lib/blogData.es";
import { useLocale } from "@/lib/i18n/useLocale";
import LocaleLink from "@/components/LocaleLink";

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

      <CTASection />
    </>
  );
};

export default BlogPostPage;
