import { Helmet } from "react-helmet-async";
import type { PageMeta } from "@/types/seo";

interface SEOHeadProps {
  meta: PageMeta;
}

const DEFAULT_OG_IMAGE = "https://chichenitzatours.com/images/chichen-itza-hero.jpg";
const SITE_NAME = "Chichen Itza Tours";

const SEOHead = ({ meta }: SEOHeadProps) => {
  const ogType = meta.ogType || "website";
  const ogImage = meta.ogImage || DEFAULT_OG_IMAGE;

  const renderJsonLd = () => {
    if (!meta.jsonLd) return null;

    if (Array.isArray(meta.jsonLd)) {
      return meta.jsonLd.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ));
    }

    return (
      <script type="application/ld+json">
        {JSON.stringify(meta.jsonLd)}
      </script>
    );
  };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.canonical && <link rel="canonical" href={meta.canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      {meta.canonical && <meta property="og:url" content={meta.canonical} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />

      {renderJsonLd()}
    </Helmet>
  );
};

export default SEOHead;
