import { Helmet } from "react-helmet-async";
import type { PageMeta } from "@/types/seo";

interface SEOHeadProps {
  meta: PageMeta;
}

const SEOHead = ({ meta }: SEOHeadProps) => {
  // Handle both single schema and array of schemas
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
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
      {renderJsonLd()}
    </Helmet>
  );
};

export default SEOHead;
