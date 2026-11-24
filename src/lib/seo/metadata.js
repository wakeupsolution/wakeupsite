import { seoConfig } from "./config";

export function generatePageMetadata({
  title,
  description,
  path = "/",
  image = "/og-home.jpg",
}) {
  const fullTitle = `${title} | ${seoConfig.siteName}`;

  return {
    metadataBase: new URL(seoConfig.siteUrl),

    title: fullTitle,

    description,

    alternates: {
      canonical: path,
    },

    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: path,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      images: [image],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}