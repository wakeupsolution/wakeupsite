import ServicesClient from "./ServicesClient";

import { seoConfig } from "@/lib/seo/config";
import { generatePageMetadata } from "@/lib/seo/metadata";

// SERVICES PAGE SEO
export const metadata = generatePageMetadata({
  title:
    "Website Development, Mobile Apps, SEO & Digital Marketing Services",

  description:
    "Explore WakeUp Solution services including business website development, Android and iOS apps, Google and local SEO, social media marketing, Google Ads and e-commerce website solutions.",

  path: "/services",
});

// SERVICES PAGE SCHEMA
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",

  name: "Website Development and Digital Marketing Services",

  description:
    "Explore website development, mobile applications, SEO, digital marketing and e-commerce services.",

  url: `${seoConfig.siteUrl}/services`,

  isPartOf: {
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
  },

  mainEntity: {
    "@type": "ItemList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Website Design & Development",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mobile App Development",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Google & Local SEO",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Social Media & Google Ads",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "E-commerce Website Development",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema).replace(/</g, "\\u003c"),
        }}
      />

      <ServicesClient />
    </>
  );
}