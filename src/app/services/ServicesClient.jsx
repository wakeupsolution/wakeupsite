"use client";
import Link from "next/link";

export default function ServicesClient() {
  const services = [
    {
      id: "web-dev",
      serviceLabel: "01 • WEBSITE DESIGN & DEVELOPMENT",
      badgeStyle: "bg-sky-50 text-[#2589b5] border-sky-200",
      accentText: "text-[#2589b5]",
      btnStyle: "bg-[#2589b5] hover:bg-[#1d7399] text-white",
      title: "Professional Business Website That Brings Daily Calls & WhatsApp Leads.",
      pitch:
        "Today, customers check your website before trusting your business. We build clean, fast-loading websites that look great on every mobile phone and make it super easy for visitors to call or message you on WhatsApp.",
      resultTag: "⚡ Fast Mobile Loading • Direct WhatsApp & Call Buttons",
      bullets: [
        "Custom website made specially for your business (not a cheap copy)",
        "1-click WhatsApp chat & direct phone call buttons on every page",
        "Opens super fast even on normal mobile data",
        "Free SSL lock security, domain setup & easy future updates",
      ],
      cta: "Get My Website Built",
      // Put your .mp4 path (e.g. "/videos/website-demo.mp4") to auto-play video, or leave empty to show image
      videoSrc: "",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Clean modern business website on laptop and mobile",
      frameLabel: "Website Design & Development",
    },
    {
      id: "app-dev",
      serviceLabel: "02 • MOBILE APP DEVELOPMENT (ANDROID & iOS)",
      badgeStyle: "bg-lime-50 text-[#16a34a] border-lime-200",
      accentText: "text-[#16a34a]",
      btnStyle: "bg-[#16a34a] hover:bg-[#13853c] text-white",
      title: "Your Own Mobile App on Google Play Store & Apple App Store.",
      pitch:
        "Make it effortless for your regular customers to order, book appointments, or track deliveries straight from their phone—without calling you every time.",
      resultTag: "📱 Works on Android & iPhone • Easy Admin Control",
      bullets: [
        "Single app build that runs smoothly on both Android & iPhone",
        "Send free offer alerts & notifications straight to customer phones",
        "Simple owner dashboard to manage orders, bookings & customers",
        "Full support to publish your app on Play Store & App Store",
      ],
      cta: "Build My Mobile App",
      videoSrc: "",
      imageSrc:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Customer mobile app on smartphone",
      frameLabel: "Android & iOS Mobile Apps",
    },
    {
      id: "seo",
      serviceLabel: "03 • GOOGLE & MAPS RANKING (SEO)",
      badgeStyle: "bg-indigo-50 text-indigo-600 border-indigo-200",
      accentText: "text-indigo-600",
      btnStyle: "bg-indigo-600 hover:bg-indigo-700 text-white",
      title: "Appear on Top When Customers Search on Google & Google Maps.",
      pitch:
        "When people search for your service in your city or 'near me', your business should show up first—not your competitor. We optimize your website and Google Business Profile so you get free, genuine customer calls every day.",
      resultTag: "📍 Top Google Maps & Search Results • No Per-Click Cost",
      bullets: [
        "Rank higher for local 'near me' searches in your city & area",
        "Complete Google Business Profile & Maps optimization for more calls",
        "Also prepares your business to get recommended on ChatGPT & AI search",
        "Simple monthly report showing your keyword rankings & call growth",
      ],
      cta: "Rank My Business on Google",
      videoSrc: "",
      imageSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Google search ranking and local visibility growth",
      frameLabel: "Google & Local Maps SEO",
    },
    {
      id: "marketing",
      serviceLabel: "04 • INSTAGRAM, FACEBOOK & GOOGLE ADS",
      badgeStyle: "bg-amber-50 text-amber-700 border-amber-200",
      accentText: "text-amber-600",
      btnStyle: "bg-slate-900 hover:bg-slate-800 text-white",
      title: "Run Targeted Ads That Bring Serious Buyers to Your WhatsApp.",
      pitch:
        "Stop wasting money boosting random posts that only bring likes. We create eye-catching Instagram, Facebook, and Google Ads shown only to people in your target area who are ready to buy your service.",
      resultTag: "🎯 Real Customer Inquiries • Full Budget Control",
      bullets: [
        "Scroll-stopping Instagram & Facebook ad posters/videos",
        "Google Search Ads to catch customers actively searching right now",
        "Ads linked directly to your WhatsApp or inquiry form for fast replies",
        "Weekly ad tuning to get more leads at the lowest possible cost",
      ],
      cta: "Start Getting Ad Leads",
      videoSrc: "",
      imageSrc:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Social media and Google advertising campaign results",
      frameLabel: "Social Media & Google Ads",
    },
    {
      id: "ecommerce",
      serviceLabel: "05 • ONLINE STORE / E-COMMERCE WEBSITE",
      badgeStyle: "bg-sky-50 text-[#2589b5] border-sky-200",
      accentText: "text-[#2589b5]",
      btnStyle:
        "bg-gradient-to-r from-[#2589b5] to-[#16a34a] text-white hover:brightness-105",
      title: "Open Your Own 24/7 Online Shop & Accept UPI, GPay & Card Orders.",
      pitch:
        "Sell your products across your city or all over India without paying heavy marketplace commissions. Customers can browse your catalog, pay via GPay/UPI/Cards, and place orders anytime—even while you sleep.",
      resultTag: "🛒 GPay, UPI & Card Payments • Easy Stock Management",
      bullets: [
        "Clean product catalog with photos, prices, sizes & offers",
        "Instant online payments via GPay, PhonePe, UPI, Cards & NetBanking",
        "Simple mobile-friendly dashboard to add products & track orders",
        "Built-in discount coupons & WhatsApp order updates for buyers",
      ],
      cta: "Start My Online Store",
      videoSrc: "",
      imageSrc:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Online shopping store with UPI and card payment",
      frameLabel: "Online Store & E-Commerce",
    },
  ];

  return (
    <div className="bg-[#f4f7fb] min-h-screen text-slate-900 font-sans selection:bg-[#32a1d0]/20">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 text-center bg-white border-b border-slate-200">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(50,161,208,0.12),rgba(146,208,80,0.07)_50%,transparent_80%)]"
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
            <span className="text-[11px] font-extrabold text-slate-700 tracking-widest uppercase">
              Our Digital Services • Simple &amp; Result-Focused
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-black tracking-tight mb-5 text-slate-900 leading-[1.12]">
            Everything Your Business Needs to{" "}
            <span className="bg-gradient-to-r from-[#2589b5] to-[#16a34a] bg-clip-text text-transparent">
              Get More Customers Online.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Whether you need a business website, a mobile app, top ranking on Google, or daily leads from ads—here is how we help you grow.
          </p>
        </div>
      </section>

      {/* =========================================
          ALTERNATING 50/50 CONTENT + MEDIA ROWS
      ========================================= */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-28">
        {services.map((service, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_14px_40px_rgba(15,23,42,0.05)] p-6 sm:p-10 lg:p-12"
            >
              <div
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10 lg:gap-12`}
              >
                {/* SIDE 1: EASY-TO-UNDERSTAND BUSINESS CONTENT */}
                <div className="flex-1 w-full">
                  <span
                    className={`inline-block text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full border mb-4 ${service.badgeStyle}`}
                  >
                    {service.serviceLabel}
                  </span>

                  <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-black text-slate-900 tracking-tight leading-[1.18] mb-4">
                    {service.title}
                  </h2>

                  <p className="text-slate-600 text-base sm:text-[1.05rem] leading-relaxed font-medium mb-5">
                    {service.pitch}
                  </p>

                  {/* Outcome Highlight Pill */}
                  <div className="inline-block bg-slate-900 text-white text-xs font-extrabold tracking-wide px-4 py-2 rounded-xl mb-6">
                    {service.resultTag}
                  </div>

                  {/* Clear Scannable Points */}
                  <ul className="space-y-3 mb-8">
                    {service.bullets.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm sm:text-[15px] font-bold text-slate-800"
                      >
                        <span
                          className={`${service.accentText} font-black text-base leading-none mt-0.5`}
                        >
                          ✔
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md transition-all ${service.btnStyle}`}
                  >
                    {service.cta} <span>→</span>
                  </Link>
                </div>

                {/* SIDE 2: INLINE VIDEO OR IMAGE */}
                <div className="flex-1 w-full">
                  <div className="rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-lg">
                    {/* Clean Showcase Frame Header */}
                    <div className="bg-white px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-0.5 rounded-full">
                        {service.frameLabel}
                      </span>
                      <span className="w-8" />
                    </div>

                    {/* Media Container */}
                    <div className="relative aspect-[16/11] w-full bg-slate-900 overflow-hidden">
                      {service.videoSrc ? (
                        <video
                          src={service.videoSrc}
                          poster={service.imageSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={service.imageSrc}
                          alt={service.imageAlt}
                          loading="lazy"
                          className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* =========================================
          BOTTOM CONVERSION BANNER
      ========================================= */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900 text-white p-8 sm:p-14 text-center shadow-xl">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-lime-400 mb-3">
            Confused About Which Service Fits You?
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Tell Us About Your Business—We’ll Guide You Free.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Talk directly with our team. We’ll suggest the simplest, most affordable plan to bring you more calls and orders.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white font-extrabold text-base py-4 px-8 rounded-full shadow-lg hover:brightness-105 transition-all"
            >
              Talk to Our Team Free →
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-bold text-base py-4 px-8 rounded-full border border-white/15 transition-colors"
            >
              See Package Prices
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}