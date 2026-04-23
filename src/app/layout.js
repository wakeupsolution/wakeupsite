import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "WakeUp Solution - Web Development & Digital Services",
  description:
    "WakeUp Solution helps businesses grow with modern websites, scalable web applications, and digital marketing services.",
    icons: {
      icon: "/favicon.ico",
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