import { Helmet } from "react-helmet-async";
import type { PageMeta } from "@/types/seo";

interface SEOHeadProps {
  meta: PageMeta;
}

const SEOHead = ({ meta }: SEOHeadProps) => (
  <Helmet>
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    {meta.canonical && <link rel="canonical" href={meta.canonical} />}
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
    {meta.jsonLd && (
      <script type="application/ld+json">{JSON.stringify(meta.jsonLd)}</script>
    )}
  </Helmet>
);

export default SEOHead;