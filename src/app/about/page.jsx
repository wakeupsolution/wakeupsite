import AboutClient from "./AboutClient";

import { seoConfig } from "@/lib/seo/config";
import { generatePageMetadata } from "@/lib/seo/metadata";

// ABOUT PAGE SEO
export const metadata = generatePageMetadata({
  title: "About WakeUp Solution | Website Development Company",

  description:
    "Learn about WakeUp Solution, our company, expertise, website development services, digital solutions and commitment to helping businesses grow online.",

  path: "/about",
});

// ABOUT PAGE SCHEMA
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",

  name: "About WakeUp Solution",

  description:
    "Learn about WakeUp Solution and its digital services.",

  url: `${seoConfig.siteUrl}/about`,

  mainEntity: {
    "@type": "Organization",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema).replace(/</g, "\\u003c"),
        }}
      />

      <AboutClient />
    </>
  );
}