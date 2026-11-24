import HomeClient from "./HomeClient";

import { seoConfig } from "@/lib/seo/config";
import { generatePageMetadata } from "@/lib/seo/metadata";

// HOME PAGE SEO
export const metadata = generatePageMetadata({
  title: "Website Designing, SEO & Digital Marketing Company",

  description:
    "WakeUp Solution provides professional website Designing, WordPress and Next.js solutions, SEO, digital marketing, e-commerce and lead generation services.",

  path: "/",
});

// HOME PAGE SCHEMA
const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
    },
  },
];

export default function HomePage() {
  return (
    <>
      {homeSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <HomeClient />
    </>
  );
}