import { Helmet } from "react-helmet-async";
import type { PageMeta } from "@/types/seo";

interface SEOHeadProps {
  meta: PageMeta;
}

const DEFAULT_OG_IMAGE = "https://chichenitzatravel.com/images/chichen-itza-hero.jpg";
const SITE_NAME = "Chichen Itza Tours";
const BASE_URL = "https://chichenitzatravel.com";

const SEOHead = ({ meta }: SEOHeadProps) => {
  const ogType = meta.ogType || "website";
  const ogImage = meta.ogImage || DEFAULT_OG_IMAGE;
  const locale = meta.locale || "en";
  const ogLocale = locale === "es" ? "es_MX" : "en_US";
  const htmlLang = locale === "es" ? "es" : "en";
  const robots = meta.robots || "index, follow";

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
      <html lang={htmlLang} />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content={robots} />
      {meta.canonical && <link rel="canonical" href={meta.canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={ogLocale} />
      {meta.canonical && <meta property="og:url" content={meta.canonical} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Hreflang alternate links */}
      {meta.alternateUrls && (
        <>
          <link rel="alternate" hrefLang="en" href={`${BASE_URL}${meta.alternateUrls.en}`} />
          <link rel="alternate" hrefLang="es" href={`${BASE_URL}${meta.alternateUrls.es}`} />
          <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${meta.alternateUrls.en}`} />
        </>
      )}

      {/* Theme color */}
      <meta name="theme-color" content="#D2691E" />

      {renderJsonLd()}
    </Helmet>
  );
};

export default SEOHead;
