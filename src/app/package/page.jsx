import PackageClient from "./PackageClient";

import { seoConfig } from "@/lib/seo/config";
import { generatePageMetadata } from "@/lib/seo/metadata";

// PACKAGE PAGE SEO
export const metadata = generatePageMetadata({
  title: "Website Designing & SEO Packages in India",

  description:
    "Explore WakeUp Solution website Designing and SEO packages. Compare WakeUp Start, WakeUp Grow and WakeUp Dominate plans for business growth.",

  path: "/package",
});

// PACKAGE PAGE SCHEMA
const packageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  name: "Website Designing and SEO Packages",

  description:
    "Explore website Designing and SEO service packages from WakeUp Solution.",

  url: `${seoConfig.siteUrl}/package`,

  isPartOf: {
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
  },

  about: {
    "@type": "Service",
    name: "Website Designing and SEO Packages",

    provider: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
    },
  },
};

// BREADCRUMB SCHEMA
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: seoConfig.siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Packages",
      item: `${seoConfig.siteUrl}/package`,
    },
  ],
};

export default function PackagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(packageSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PackageClient />
    </>
  );
}