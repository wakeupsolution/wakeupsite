"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [isBannerPaused, setIsBannerPaused] = useState(false);

 const heroBanners = [
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
      alt: "Website development services using WordPress and Next.js",
      badge: "BANNER 01 • FAST & CONVERSION-READY",
      title: "Website Development – WordPress & Next.js",
      subtitle:
        "High-speed business websites and ad landing pages with 1-click WhatsApp, mobile responsiveness, and 1-year domain & hosting.",
      ctaText: "Explore Web Packages",
      ctaHref: "/packages",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
      alt: "Digital marketing services including Google SEO and Meta Ads",
      badge: "BANNER 02 • DAILY LEADS & VISIBILITY",
      title: "Digital Marketing – Google SEO & Meta Ads",
      subtitle:
        "Rank #1 on Google Search, Google Maps, and AI search across up to 50 locations while converting YouTube & Instagram ad traffic.",
      ctaText: "Boost My Rankings",
      ctaHref: "/services",
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80",
      alt: "E-commerce solutions, online stores and mobile applications",
      badge: "BANNER 03 • 24/7 AUTOMATED SELLING",
      title: "E-Commerce Solutions – Online Stores & Mobile Apps",
      subtitle:
        "Custom Android & iOS apps plus WooCommerce & Next.js online stores with GPay, PhonePe, UPI, and card checkout built in.",
      ctaText: "Launch Online Store",
      ctaHref: "/contact",
    },
  ];

  useEffect(() => {
    if (isBannerPaused) return;
    const timer = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % heroBanners.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isBannerPaused, heroBanners.length]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 20 },
    },
  };

  const techStack = [
    "WORDPRESS",
    "•",
    "NEXT.JS",
    "•",
    "REACT.JS",
    "•",
    "REACT NATIVE",
    "•",
    "NODE.JS",
    "•",
    "WOOCOMMERCE",
    "•",
    "GOOGLE SEO & MAPS",
    "•",
    "META & YOUTUBE ADS",
    "•",
    "AWS CLOUD",
    "•",
    "POSTGRESQL",
    "•",
    "FIGMA",
    "•",
  ];

  const adSolutions = [
    {
      tag: "🔥 WEBINAR FUNNELS",
      title: "YouTube & Insta Webinar Pages",
      desc: "High-converting signup pages with countdown timers & instant WhatsApp group redirects.",
      accent: "text-rose-600 bg-rose-50 border-rose-200",
    },
    {
      tag: "🎓 EDUCATION & COURSES",
      title: "Academy & Course Ad Landing Pages",
      desc: "Fill batches faster with syllabus showcases, demo class bookings & UPI fee checkout.",
      accent: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      tag: "🏥 CLINICS & REAL ESTATE",
      title: "Patient & Site-Visit Lead Funnels",
      desc: "Turn local searches and Meta ads into confirmed WhatsApp appointments & site visits.",
      accent: "text-[#2589b5] bg-sky-50 border-sky-200",
    },
    {
      tag: "🛒 24/7 ONLINE SHOPS",
      title: "WordPress & Custom E-Commerce",
      desc: "Sell across India on autopilot with GPay, PhonePe, UPI & card payments built in.",
      accent: "text-[#16a34a] bg-lime-50 border-lime-200",
    },
  ];

  const currentBanner = heroBanners[activeBanner];

  return (
    <div className="bg-[#f4f7fb] min-h-screen text-slate-900 font-sans overflow-hidden selection:bg-[#32a1d0]/20">
      <h1 className="sr-only">
        Website Development, SEO & Digital Marketing Company
      </h1>
      {/* =========================================
          SECTION 1: FULL-WIDTH IMAGE BANNER SLIDER
      ========================================= */}
      <section
        onMouseEnter={() => setIsBannerPaused(true)}
        onMouseLeave={() => setIsBannerPaused(false)}
        className="relative w-full overflow-hidden bg-slate-950"
      >
        <div className="relative h-[440px] sm:h-[540px] lg:h-[680px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBanner}
              initial={{ opacity: 0, scale: 1.035 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${currentBanner.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label={currentBanner.alt}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20 pointer-events-none" />

          {/* Banner Text Overlay */}
          <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBanner}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="max-w-2xl text-white"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[11px] font-extrabold tracking-widest uppercase text-cyan-300 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#92d050]" />
                  {currentBanner.badge}
                </span>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-4">
                  {currentBanner.title}
                </h2>

                <p className="text-sm sm:text-lg text-slate-200 font-medium leading-relaxed mb-7 max-w-xl">
                  {currentBanner.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                  <Link
                    href={currentBanner.ctaHref}
                    className="px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-slate-950 font-black text-sm sm:text-base hover:brightness-105 transition-all shadow-lg"
                  >
                    {currentBanner.ctaText} →
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 sm:px-7 py-3.5 rounded-full bg-white/10 border border-white/25 text-white font-bold text-sm sm:text-base backdrop-blur-sm hover:bg-white/20 transition-all"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left / Right Arrows */}
          <button
            type="button"
            aria-label="Previous banner"
            onClick={() =>
              setActiveBanner(
                (current) =>
                  (current - 1 + heroBanners.length) % heroBanners.length
              )
            }
            className="absolute left-3 sm:left-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-slate-900/40 text-3xl leading-none text-white backdrop-blur-sm transition hover:bg-slate-900/75 cursor-pointer"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next banner"
            onClick={() =>
              setActiveBanner((current) => (current + 1) % heroBanners.length)
            }
            className="absolute right-3 sm:right-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-slate-900/40 text-3xl leading-none text-white backdrop-blur-sm transition hover:bg-slate-900/75 cursor-pointer"
          >
            ›
          </button>

          {/* Bottom Slide Tabs & Dots */}
          <div className="absolute bottom-5 inset-x-0 z-20 max-w-7xl mx-auto px-6 sm:px-12 flex flex-wrap items-center justify-between gap-4">
            <div className="hidden md:flex items-center gap-2">
              {heroBanners.map((banner, index) => (
                <button
                  key={banner.title}
                  type="button"
                  onClick={() => setActiveBanner(index)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer border ${
                    activeBanner === index
                      ? "bg-white text-slate-950 border-white shadow-sm"
                      : "bg-slate-900/55 text-white/80 border-white/15 hover:bg-slate-900/80"
                  }`}
                >
                  0{index + 1}. {banner.title.split("–")[0].trim()}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 ml-auto">
              {heroBanners.map((banner, index) => (
                <button
                  key={banner.image}
                  type="button"
                  aria-label={`Show banner ${index + 1}`}
                  aria-current={activeBanner === index ? "true" : undefined}
                  onClick={() => setActiveBanner(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeBanner === index
                      ? "w-9 bg-cyan-400"
                      : "w-2.5 bg-white/55 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: TECH STACK MARQUEE
      ========================================= */}
      <section className="w-full relative overflow-hidden py-9 z-10 border-b border-slate-200 bg-white">
        <p className="text-slate-500 text-xs uppercase tracking-widest mb-6 text-center font-extrabold">
          Trusted Stack Powering Fast Websites, Apps &amp; Ad Funnels
        </p>
        <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 md:mx-10 opacity-55 hover:opacity-100 transition-opacity duration-200"
            >
              <span className="font-black text-base md:text-xl tracking-widest text-slate-800 uppercase whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* =========================================
          SECTION 3: CORE SERVICES (3D Scroll Cards)
      ========================================= */}
      <section className="relative py-24 md:py-28 px-4 sm:px-6 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2589b5] block mb-3">
              What We Do Best
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 leading-tight">
              Simple Digital Solutions That{" "}
              <span className="bg-gradient-to-r from-[#2589b5] to-[#16a34a] bg-clip-text text-transparent">
                Bring Real Customers
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium">
              From WordPress &amp; custom websites to Android/iOS apps and local Google ranking—everything under one roof.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 perspective-[1500px]">
            {/* Card 1: WordPress & Web Dev */}
            <motion.div
              initial={{ opacity: 0, rotateY: 0, rotateZ: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                rotateY: 8,
                rotateZ: -1.5,
                y: 0,
                scale: 1.01,
              }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, type: "spring" }}
              className="flex flex-col bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-[0_15px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="p-8 pb-0 flex-1">
                <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 text-[#2589b5]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  WordPress &amp; Custom Websites
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-8 font-medium">
                  Fast-loading business websites &amp; ad landing pages with 1-click WhatsApp and call buttons that convert visitors into leads.
                </p>
              </div>
              <div className="px-6 pb-6">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 h-[175px] flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-600">
                      PageSpeed &amp; Conversion
                    </span>
                    <span className="text-xs font-black text-[#16a34a]">
                      99/100
                    </span>
                  </div>
                  <div className="flex items-end justify-between h-24 gap-2 mt-4">
                    {[40, 60, 35, 85, 55, 100].map((h, i) => (
                      <div
                        key={i}
                        className={`w-full rounded-t-md ${
                          h === 100
                            ? "bg-[#16a34a]"
                            : h === 85
                            ? "bg-[#2589b5]"
                            : "bg-slate-200"
                        }`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Mobile Apps & E-Commerce */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: -14, scale: 1.03 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, type: "spring", delay: 0.1 }}
              className="flex flex-col bg-white rounded-3xl border-2 border-[#32a1d0]/40 overflow-hidden shadow-[0_22px_50px_rgba(50,161,208,0.12)] relative z-10"
            >
              <div className="p-8 pb-0 flex-1">
                <div className="w-11 h-11 rounded-2xl bg-lime-50 border border-lime-100 flex items-center justify-center mb-6 text-[#16a34a]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  Mobile Apps &amp; Online Stores
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-8 font-medium">
                  Android &amp; iOS apps plus 24/7 WooCommerce &amp; custom stores with GPay, UPI, and card checkout built in.
                </p>
              </div>
              <div className="px-6 pb-6 h-[195px] relative flex justify-center items-end">
                <div className="absolute w-[80%] h-24 bg-slate-100 rounded-t-2xl border-t border-slate-200 -translate-y-12" />
                <div className="absolute w-[90%] h-24 bg-slate-50 rounded-t-2xl border-t border-slate-200 -translate-y-6" />
                <div className="relative w-full h-32 bg-white rounded-2xl border border-slate-200 p-4 shadow-lg overflow-hidden">
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border-[8px] border-white bg-gradient-to-t from-[#32a1d0] to-[#92d050]" />
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-xs font-extrabold uppercase text-slate-500">
                      24/7 Store &amp; App Orders
                    </div>
                  </div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">
                    ₹4,85,200
                  </div>
                  <div className="text-[11px] text-[#16a34a] font-extrabold mt-1">
                    ↑ UPI &amp; Card Orders Active
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Google, Maps & AI Search */}
            <motion.div
              initial={{ opacity: 0, rotateY: 0, rotateZ: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                rotateY: -8,
                rotateZ: 1.5,
                y: 0,
                scale: 1.01,
              }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
              className="flex flex-col bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-[0_15px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="p-8 pb-0 flex-1">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 text-indigo-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  Google, Maps &amp; AI Ranking
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-8 font-medium">
                  Show up on top when local customers search on Google, Google Maps, and AI tools—bringing daily organic calls.
                </p>
              </div>
              <div className="px-6 pb-6">
                <div className="flex flex-col gap-2.5 h-[175px] justify-end">
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-2xs flex items-center justify-center text-xs border border-slate-100">
                      📍
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-extrabold text-slate-900">
                        Google Maps Pack
                      </div>
                      <div className="text-[10px] font-semibold text-slate-500">
                        Local &quot;Near Me&quot; Calls
                      </div>
                    </div>
                    <div className="text-xs font-black text-[#16a34a]">
                      #1 Spot
                    </div>
                  </div>
                  <div className="bg-sky-50/70 border border-[#32a1d0]/25 rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-2xs flex items-center justify-center text-xs border border-sky-100">
                      ⚡
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-extrabold text-slate-900">
                        50+ Locations
                      </div>
                      <div className="text-[10px] text-[#2589b5] font-bold">
                        SEO + AEO + GEO Reach
                      </div>
                    </div>
                    <div className="text-xs font-black text-[#16a34a]">
                      +240%
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: HIGH-CONVERTING AD LANDING FUNNELS
      ========================================= */}
      <section className="relative py-20 md:py-24 px-4 sm:px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-rose-600 block mb-2">
                Built for YouTube, Instagram &amp; Google Ads
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Specialized Ad Landing Pages by Industry
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#2589b5] hover:text-slate-900 transition-colors"
            >
              Explore All Services <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {adSolutions.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#f8fafc] border border-slate-200/90 p-6 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all"
              >
                <div>
                  <span
                    className={`inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-4 ${item.accent}`}
                  >
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="text-xs font-extrabold text-slate-900 hover:text-[#2589b5] inline-flex items-center gap-1 transition-colors"
                >
                  Request Sample <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: KEY FEATURES GRID
      ========================================= */}
      <section className="relative py-24 md:py-28 px-4 sm:px-6 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
              Built With Everything You Need to{" "}
              <span className="bg-gradient-to-r from-[#2589b5] to-[#16a34a] bg-clip-text text-transparent">
                Win Online
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col items-center gap-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {[
                {
                  title: "1-Second Fast Loading",
                  desc: "Opens smoothly even on mobile data so ad visitors never bounce.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  ),
                },
                {
                  title: "WhatsApp Lead Capture",
                  desc: "Direct 1-tap WhatsApp & call buttons placed where buyers click.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  ),
                },
                {
                  title: "Meta & Google Pixel Ready",
                  desc: "Track every ad click, form fill, and webinar signup accurately.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  ),
                },
                {
                  title: "Easy WordPress & CMS",
                  desc: "Update photos, prices, or blogs anytime without technical stress.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  ),
                },
              ].map((feat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl border border-slate-200/90 p-7 flex flex-col items-center text-center hover:border-[#32a1d0] hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#2589b5] flex items-center justify-center mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feat.icon}
                    </svg>
                  </div>
                  <h4 className="text-slate-900 font-extrabold text-lg mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-[80%]">
              {[
                {
                  title: "UPI, GPay & Card Payments",
                  desc: "Accept instant online payments via Razorpay, PhonePe, UPI & cards.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  ),
                },
                {
                  title: "Google Maps & Local SEO",
                  desc: "Rank across up to 50 target cities and local 'near me' searches.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  ),
                },
                {
                  title: "1-Year Hosting & Support",
                  desc: "Domain, SSL security, backups, and dedicated WhatsApp support included.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  ),
                },
              ].map((feat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl border border-slate-200/90 p-7 flex flex-col items-center text-center hover:border-[#92d050] hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-lime-50 text-[#16a34a] flex items-center justify-center mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feat.icon}
                    </svg>
                  </div>
                  <h4 className="text-slate-900 font-extrabold text-lg mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: FINAL CTA & CLIENT PORTAL MOCKUP
      ========================================= */}
      <section className="relative py-24 px-4 sm:px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="w-full bg-slate-900 text-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center relative">
            {/* Left Content Area */}
            <div className="p-8 sm:p-12 lg:p-16 flex-1 text-left relative z-20">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-lime-400 mb-3">
                Transparent Growth • Real Results
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
                Ready to Grow Your{" "}
                <span className="bg-gradient-to-r from-[#32a1d0] to-[#92d050] bg-clip-text text-transparent">
                  Calls, Leads &amp; Sales?
                </span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-md font-medium leading-relaxed">
                Whether you need a ₹12,000 starter website, a webinar funnel for ads, or top Google Maps ranking—let’s launch your project fast.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white font-extrabold py-4 px-8 rounded-full transition-all hover:brightness-105 shadow-lg"
                >
                  Start Your Project →
                </Link>
                <Link
                  href="/packages"
                  className="bg-white/10 border border-white/15 text-white font-bold py-4 px-8 rounded-full hover:bg-white/15 transition-all"
                >
                  Compare Packages
                </Link>
              </div>
            </div>

            {/* Right Dashboard UI Mockup */}
            <div className="w-full lg:w-[46%] h-[380px] lg:h-[470px] relative p-6 lg:p-0 flex items-center justify-end overflow-hidden bg-slate-800/50">
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-[115%] lg:w-[145%] max-w-[580px] h-[350px] bg-white text-slate-900 border border-slate-200 rounded-l-3xl rounded-r-xl shadow-2xl flex"
              >
                {/* App Sidebar */}
                <div className="w-16 md:w-44 border-r border-slate-100 bg-slate-50 py-6 px-4 flex flex-col gap-5 rounded-l-3xl">
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-[#2589b5] mb-2 font-black">
                    W
                  </div>
                  {[
                    "Overview",
                    "Google Rank",
                    "Ad Leads",
                    "WhatsApp",
                    "Orders",
                  ].map((label, i) => (
                    <div key={label} className="flex items-center gap-2.5">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          i === 0 ? "bg-[#2589b5]" : "bg-slate-300"
                        }`}
                      />
                      <span
                        className={`text-xs hidden md:block ${
                          i === 0
                            ? "font-extrabold text-slate-900"
                            : "font-semibold text-slate-500"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* App Main Content Area */}
                <div className="flex-1 p-6 md:p-7 flex flex-col gap-5 bg-white rounded-r-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-900 font-black text-sm">
                      Client Growth Tracker
                    </span>
                    <span className="text-[10px] font-extrabold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full">
                      Live
                    </span>
                  </div>

                  {/* Top Stats Row */}
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full border-[4px] border-slate-100 border-t-[#32a1d0] border-r-[#92d050] border-b-[#32a1d0]" />
                    <div>
                      <div className="text-xs text-slate-600 font-bold">
                        18,400+ Monthly Visitors
                      </div>
                      <div className="text-[11px] text-[#16a34a] font-extrabold mt-0.5">
                        ↑ +42.4% Leads This Month
                      </div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="flex-1 bg-slate-50 border border-slate-200/80 rounded-xl p-4 relative overflow-hidden flex flex-col">
                    <div className="text-xs text-slate-600 font-extrabold mb-3 z-10">
                      Organic Search &amp; Ad Conversions
                    </div>

                    <svg
                      className="w-full h-full absolute bottom-0 left-0"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 50"
                    >
                      <path
                        d="M0,40 Q20,30 40,45 T70,25 T100,35 L100,50 L0,50 Z"
                        fill="rgba(50, 161, 208, 0.15)"
                      />
                      <path
                        d="M0,40 Q20,30 40,45 T70,25 T100,35"
                        fill="none"
                        stroke="#32a1d0"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M0,45 Q20,40 40,25 T70,35 T100,20 L100,50 L0,50 Z"
                        fill="rgba(146, 208, 80, 0.18)"
                      />
                      <path
                        d="M0,45 Q20,40 40,25 T70,35 T100,20"
                        fill="none"
                        stroke="#16a34a"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="70"
                        cy="35"
                        r="2.5"
                        fill="#32a1d0"
                        stroke="white"
                        strokeWidth="1"
                      />
                      <line
                        x1="70"
                        y1="35"
                        x2="70"
                        y2="50"
                        stroke="#32a1d0"
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}