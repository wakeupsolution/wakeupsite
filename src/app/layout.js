import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Website Development Company in Chennai | WakeUp Solution",
  description:
    "Professional website development, mobile apps, and SEO services in Chennai.",
  keywords: [
    "website development Chennai",
    "SEO Chennai",
    "mobile app development Chennai",
    "digital marketing Chennai",
  ],
  authors: [{ name: "WakeUp Solution" }],
  robots: "index, follow",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "WakeUp Solution",
    description:
      "Modern websites and digital services for businesses.",
    url: "https://wakeupsolution.in",
    siteName: "WakeUp Solution",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://wakeupsolution.in/favicon.ico", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "WakeUp Solution",
      },
    ],
  },
  other: {
  "geo.region": "IN-TN",
  "geo.placename": "Chennai",
  "geo.position": "13.0827;80.2707",
  "ICBM": "13.0827, 80.2707",
},

  alternates: {
    canonical: "https://wakeupsolution.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}