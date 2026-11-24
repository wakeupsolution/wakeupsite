"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutClient() {
  const techStack = [
    "WORDPRESS",
    "•",
    "NEXT.JS",
    "•",
    "REACT.JS",
    "•",
    "NODE.JS",
    "•",
    "REACT NATIVE",
    "•",
    "WOOCOMMERCE",
    "•",
    "POSTGRESQL",
    "•",
    "AWS CLOUD",
    "•",
    "TAILWIND CSS",
    "•",
    "GOOGLE SEO & AEO",
    "•",
    "FIGMA UI/UX",
    "•",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const integrations = [
    {
      name: "WordPress",
      type: "Custom CMS & Sites",
      x: "10%",
      y: "45%",
      delay: 0,
      color: "from-[#21759b] to-[#32a1d0]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-8.46 10c0-1.26.28-2.45.77-3.52l4.24 11.62C5.64 18.75 3.54 15.63 3.54 12zm8.46 8.46c-.85 0-1.67-.13-2.44-.36l2.59-7.53 2.66 7.28c.02.04.04.08.06.12-.91.32-1.87.49-2.87.49zm1.17-12.43c.52-.03.99-.08.99-.08.47-.06.41-.74-.05-.71 0 0-1.41.11-2.32.11-.86 0-2.29-.11-2.29-.11-.47-.03-.52.68-.05.71 0 0 .44.05.91.08l1.35 3.7-1.9 5.69-3.16-9.39c.52-.03.99-.08.99-.08.47-.06.41-.74-.05-.71 0 0-1.41.11-2.32.11-.16 0-.35 0-.55-.01C6.83 5.14 9.25 3.54 12 3.54c2.22 0 4.24.85 5.75 2.25-.04 0-.07-.01-.11-.01-.86 0-1.47.75-1.47 1.55 0 .72.42 1.33.86 2.05.33.58.72 1.33.72 2.41 0 .75-.29 1.62-.67 2.83l-.87 2.91-3.15-9.37zm3.49 11.61l2.63-7.6c.49-1.23.65-2.21.65-3.09 0-.32-.02-.61-.06-.89.41.75.65 1.61.65 2.53 0 3.31-1.91 6.17-4.69 7.54l.82-.49z" />
        </svg>
      ),
    },
    {
      name: "React & Next.js",
      type: "High-Speed Web",
      x: "28%",
      y: "66%",
      delay: 0.4,
      color: "from-sky-400 to-cyan-500",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="2" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="2" transform="rotate(150 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="2" transform="rotate(90 12 12)" />
        </svg>
      ),
    },
    {
      name: "AWS Cloud",
      type: "99.9% Uptime",
      x: "50%",
      y: "15%",
      delay: 0.2,
      color: "from-orange-400 to-amber-600",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
          <path
            d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1331 20.1786 10.1914 17.8687 10.0152C17.3712 6.62141 14.4503 4 11 4C7.13401 4 4 7.13401 4 11C4 11.2341 4.01148 11.4655 4.03378 11.6933C2.29623 12.394 1 14.0531 1 16C1 18.7614 3.23858 21 6 21H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Node.js",
      type: "Secure APIs",
      x: "72%",
      y: "58%",
      delay: 0.7,
      color: "from-green-500 to-emerald-600",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
          <path d="M12 2L20 6.5V17.5L12 22L4 17.5V6.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 12L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 12L4 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Figma",
      type: "UI / UX Design",
      x: "90%",
      y: "40%",
      delay: 0.3,
      color: "from-pink-500 to-purple-600",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
          <path
            d="M12 12C12 14.2091 10.2091 16 8 16C5.79086 16 4 14.2091 4 12C4 9.79086 5.79086 8 8 8C10.2091 8 12 9.79086 12 12ZM12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12ZM12 12V20C12 21.1046 11.1046 22 10 22C8.89543 22 8 21.1046 8 20C8 18.8954 8.89543 18 10 18H12V12Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  const pillars = [
    {
      label: "01 • CRAFT OVER TEMPLATES",
      title: "Custom WordPress & Next.js Builds",
      desc: "Whether you want an easy-to-edit WordPress site or a custom Next.js web app, every layout is built for speed and conversions.",
    },
    {
      label: "02 • SEARCH & AI READY",
      title: "Engineered to Rank on Day One",
      desc: "Clean code, sub-second speed, and structured schema help you win both Google Search and AI recommendations.",
    },
    {
      label: "03 • DIRECT FOUNDER SUPPORT",
      title: "No Middlemen, Just Clear Execution",
      desc: "Work directly with the builders behind your project—from initial wireframe to live launch and growth.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#f4f7fb] text-slate-900 py-24 px-4 sm:px-6 font-sans overflow-hidden flex flex-col items-center justify-center">
      {/* Lightweight Static Ambient Top Wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(50,161,208,0.14),rgba(146,208,80,0.08)_45%,transparent_75%)]"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* =========================================
            1. HERO TYPOGRAPHY & FOUNDING STORY
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
            <span className="text-[11px] font-extrabold text-slate-700 tracking-widest uppercase">
              Who We Are • Est. 2025
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight mb-6 text-slate-900 leading-[1.12]">
            Turning Ambitious Businesses Into{" "}
            <span className="bg-gradient-to-r from-[#2589b5] via-indigo-600 to-[#16a34a] bg-clip-text text-transparent">
              Unstoppable Digital Brands
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            Founded in 2025 by{" "}
            <strong className="text-slate-900 font-bold">Raj Hussain</strong>{" "}
            and <strong className="text-slate-900 font-bold">Rakesh</strong>,{" "}
            <span className="text-slate-900 font-bold">WakeUp Solution</span>{" "}
            bridges the gap between sharp engineering and real-world sales—crafting
            ultra-fast WordPress &amp; custom websites, mobile apps, and search
            strategies that bring customers straight to your door.
          </p>

          {/* 3 Unique Brand Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-5xl mx-auto">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/90 border border-slate-200/90 rounded-2xl p-5 shadow-xs"
              >
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#2589b5] mb-1.5">
                  {item.label}
                </div>
                <h2 className="text-base font-extrabold text-slate-900 mb-1">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================================
            2. THE 3D FLOATING SHOWCASE CARDS
        ========================================= */}
        <div className="relative w-full max-w-3xl h-[420px] md:h-[470px] flex items-center justify-center perspective-[1200px] mb-20">
          {/* Left Tilted Card */}
          <motion.div
            animate={{ y: [-7, 7, -7], rotateZ: [-6, -4, -6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-2 sm:left-6 md:left-[8%] w-[300px] sm:w-[340px] md:w-[390px] z-0"
          >
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-slate-300 via-slate-100 to-transparent shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <div className="bg-white/95 backdrop-blur-xl p-6 md:p-7 rounded-2xl h-full border border-slate-200/80">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2589b5]">
                    What We Craft
                  </span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                </div>
                <div className="space-y-3.5">
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-sky-100/80 flex items-center justify-center text-[#2589b5]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900">
                        WordPress &amp; Custom Web
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        WordPress, Next.js &amp; WooCommerce
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-lime-100/80 flex items-center justify-center text-[#16a34a]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900">
                        Search, Maps &amp; AI Visibility
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        Local SEO, AEO &amp; GEO lead engines
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Foreground Card */}
          <motion.div
            animate={{ y: [7, -7, 7], rotateZ: [4, 6, 4] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-2 sm:right-6 md:right-[8%] w-[300px] sm:w-[350px] md:w-[410px] z-10"
          >
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-[#32a1d0] via-indigo-500 to-[#92d050] shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <div className="bg-white p-6 md:p-8 rounded-[14px] h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Performance Benchmark
                  </span>
                  <span className="text-[11px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    Verified Speed
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center mb-2">
                  <div className="relative w-32 h-32 rounded-full border-[6px] border-slate-100 flex flex-col items-center justify-center shadow-xs bg-white">
                    <svg className="absolute top-[-6px] left-[-6px] w-[calc(100%+12px)] h-[calc(100%+12px)] -rotate-90">
                      <circle cx="64" cy="64" r="64" fill="transparent" stroke="url(#gradient)" strokeWidth="6" strokeDasharray="400" strokeDashoffset="60" />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#32a1d0" />
                          <stop offset="100%" stopColor="#92d050" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="text-3xl font-black text-slate-900">99%</span>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Core Vitals</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-700 font-bold">
                    Sub-Second Load &amp; Conversion Ready
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            3. TECH STACK MARQUEE
        ========================================= */}
        <div className="w-full relative overflow-hidden mb-28">
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-7 text-center relative z-20 font-extrabold">
            Modern Technologies Powering Every Build
          </p>
          <div className="absolute top-0 left-0 w-24 sm:w-36 h-full bg-gradient-to-r from-[#f4f7fb] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 sm:w-36 h-full bg-gradient-to-l from-[#f4f7fb] to-transparent z-20 pointer-events-none" />
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-25%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-6 md:mx-10 opacity-55 hover:opacity-100 transition-opacity duration-200"
              >
                <span className="font-black text-lg md:text-xl tracking-widest text-slate-800 uppercase whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* =========================================
            4. CORE CAPABILITIES GRID
        ========================================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full flex flex-col items-center mb-28"
        >
          <motion.div variants={fadeUp} className="text-center mb-14 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2589b5] block mb-3">
              Unified Digital Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              One Partner for{" "}
              <span className="bg-gradient-to-r from-[#2589b5] to-[#16a34a] bg-clip-text text-transparent">
                WordPress, Custom Apps &amp; Leads
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Card 1: E-Commerce */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 flex flex-col hover:border-slate-300 hover:shadow-lg transition-all shadow-xs"
            >
              <h3 className="text-xl font-black text-slate-900 mb-2 text-center">
                24/7 Online Storefronts
              </h3>
              <p className="text-sm text-slate-600 text-center mb-8 font-medium">
                Sell across India with WooCommerce or custom stores featuring instant UPI &amp; Card checkouts.
              </p>
              <div className="relative mt-auto h-48 flex justify-center items-end pb-2">
                <div className="absolute w-[80%] h-32 bg-slate-100 rounded-t-2xl -translate-y-8" />
                <div className="absolute w-[90%] h-32 bg-slate-50 rounded-t-2xl -translate-y-4" />
                <div className="relative w-full h-36 rounded-2xl bg-gradient-to-r from-[#32a1d0] to-[#92d050] p-[2px]">
                  <div className="w-full h-full bg-white rounded-[14px] p-5 flex flex-col justify-between overflow-hidden relative shadow-sm">
                    <div className="text-xs text-slate-500 font-extrabold uppercase">
                      Monthly Store Sales
                    </div>
                    <div className="z-10">
                      <div className="text-2xl font-black text-slate-900">
                        ₹4,85,200{" "}
                        <span className="text-xs text-slate-400 font-bold">INR</span>
                      </div>
                      <div className="text-[11px] font-extrabold text-emerald-600 mt-1">
                        ↑ 28% repeat customer growth
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-t from-amber-400 to-lime-400 border-[8px] border-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: WordPress, Web & App Ecosystems */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 flex flex-col hover:border-slate-300 hover:shadow-lg transition-all shadow-xs"
            >
              <h3 className="text-xl font-black text-slate-900 mb-2 text-center">
                WordPress, Web &amp; Apps
              </h3>
              <p className="text-sm text-slate-600 text-center mb-8 font-medium">
                Flexible WordPress CMS websites alongside high-speed React, Next.js &amp; mobile apps.
              </p>
              <div className="relative mt-auto h-48 bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200/80">
                <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 300 200" fill="none">
                  <path d="M70 100 L150 50 L200 80" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M70 100 L140 150 L220 120" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M150 50 L230 40" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
                <div className="absolute left-8 w-16 h-16 bg-[#21759b] rounded-full flex items-center justify-center shadow-md z-10 border-4 border-white text-white font-black text-sm">
                  WP
                </div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center z-10 shadow-xs text-xs">
                  ⚡
                </div>
                <div className="absolute bottom-6 left-[45%] w-9 h-9 bg-slate-800 rounded-full border-2 border-white flex items-center justify-center z-10 shadow-xs text-white text-xs">
                  API
                </div>
                <div className="absolute top-[35%] right-[28%] w-9 h-9 bg-indigo-600 rounded-lg border-2 border-white flex items-center justify-center z-10 text-white text-xs shadow-xs">
                  ⚛️
                </div>
                <div className="absolute bottom-[20%] right-12 w-9 h-9 bg-[#92d050] rounded-lg border-2 border-white flex items-center justify-center z-10 text-white text-xs shadow-xs">
                  📱
                </div>
              </div>
            </motion.div>

            {/* Card 3: SEO, AEO & Maps */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 flex flex-col hover:border-slate-300 hover:shadow-lg transition-all shadow-xs"
            >
              <h3 className="text-xl font-black text-slate-900 mb-2 text-center">
                Google &amp; AI Search Ranking
              </h3>
              <p className="text-sm text-slate-600 text-center mb-8 font-medium">
                Capture high-intent local buyers on Google Maps, Search, and AI assistants.
              </p>
              <div className="relative mt-auto h-48 bg-gradient-to-br from-slate-50 to-slate-100 rounded-t-2xl border-t border-l border-r border-slate-200 pt-4 px-4 overflow-hidden">
                <div className="flex gap-1.5 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex gap-3.5">
                  <div className="flex-1 bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
                    <div className="text-[10px] font-extrabold text-emerald-600 uppercase mb-1">
                      #1 Local Rank
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full mb-2" />
                    <div className="w-3/4 h-2 bg-slate-200 rounded-full mb-5" />
                    <div className="w-full h-3 bg-gradient-to-r from-[#32a1d0] to-[#92d050] rounded-full" />
                  </div>
                  <div className="w-[40%] flex flex-col gap-3">
                    <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-2xs flex items-center justify-between">
                      <div className="w-6 h-2 bg-slate-200 rounded-full" />
                      <div className="w-6 h-6 bg-lime-100 rounded-md flex items-center justify-center text-[10px] font-black text-emerald-700">
                        📍
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-2xs flex items-center justify-between">
                      <div className="w-6 h-6 bg-sky-100 rounded-md flex items-center justify-center text-[10px] font-black text-[#2589b5]">
                        AI
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="w-6 h-1 bg-slate-200 rounded-full" />
                        <div className="w-4 h-1 bg-slate-200 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* =========================================
            5. ORBITAL INTEGRATIONS SECTION
        ========================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full overflow-hidden flex flex-col items-center pt-8 md:pt-16 pb-16 md:pb-28"
        >
          <div className="text-center mb-6 md:mb-14 relative z-20 px-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 block mb-3">
              Production-Grade Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Seamless{" "}
              <span className="bg-gradient-to-r from-[#32a1d0] via-indigo-500 to-[#92d050] bg-clip-text text-transparent">
                integrations
              </span>{" "}
              with <br className="hidden sm:block" />
              WordPress, cloud &amp; modern frameworks
            </h2>
          </div>

          <div className="relative w-full flex justify-center items-center mt-4 md:mt-16 flex-wrap gap-6 md:gap-0 md:h-[480px] lg:h-[560px]">
            {/* Desktop Orbital Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] hidden md:block scale-[0.75] lg:scale-[0.9] xl:scale-100 pointer-events-none">
              <div className="absolute inset-0 rounded-full border border-slate-200" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full border border-slate-300/80" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#32a1d0]/30" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
              >
                <div className="absolute top-[15%] left-[15%] w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24]" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full"
              >
                <div className="absolute top-[5%] right-[30%] w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
              </motion.div>
            </div>

            {/* Mobile Stacked Icons */}
            <div className="flex md:hidden flex-wrap justify-center gap-6 sm:gap-8 w-full max-w-sm px-4 relative z-20">
              {integrations.map((item, index) => (
                <div
                  key={`mob-${index}`}
                  className="flex flex-col items-center w-[40%]"
                >
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-xs mb-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-slate-900 font-extrabold text-sm text-center">
                    {item.name}
                  </div>
                  <div className="text-slate-500 text-[10px] mt-0.5 font-bold text-center uppercase tracking-wider">
                    {item.type}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Floating Orbital Icons */}
            {integrations.map((item, index) => (
              <motion.div
                key={`desk-${index}`}
                className="absolute hidden md:flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 group cursor-default"
                style={{ top: item.y, left: item.x }}
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                }}
              >
                <div className="w-24 h-24 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-[0_10px_30px_rgba(15,23,42,0.08)] group-hover:border-[#32a1d0] group-hover:shadow-lg transition-all duration-300 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${item.color} rounded-full opacity-0 group-hover:opacity-10 transition-opacity blur-md`}
                  />
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-inner relative z-10`}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-slate-900 font-bold text-xl">
                    {item.name}
                  </div>
                  <div className="text-slate-500 text-sm mt-1 font-medium">
                    {item.type}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =========================================
            6. FINAL BUSINESS GROWTH SECTION
        ========================================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="w-full flex flex-col lg:flex-row items-center gap-14 pt-12 pb-16"
        >
          {/* Left Text Content */}
          <div className="flex-1 text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#16a34a] block mb-3">
              Built for Real-World Results
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-[1.15]">
              Digital Systems That Turn Clicks Into{" "}
              <span className="bg-gradient-to-r from-[#32a1d0] via-indigo-500 to-[#92d050] bg-clip-text text-transparent">
                Daily Revenue
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed max-w-lg font-medium">
              At WakeUp Solution, we don’t just deliver pages—we engineer fast WordPress websites, custom React/Next.js apps, and search engines built to attract buyers and scale your business effortlessly.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3.5">
                <div className="w-6 h-6 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-[#2589b5]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-800 font-bold text-sm sm:text-base">
                  Custom WordPress, Next.js &amp; React Native engineering
                </span>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-6 h-6 rounded-full bg-lime-50 border border-lime-200 flex items-center justify-center text-[#16a34a]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-800 font-bold text-sm sm:text-base">
                  Conversion-focused design backed by SEO &amp; lead tracking
                </span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white px-8 py-4 rounded-full font-extrabold text-sm sm:text-base shadow-[0_10px_25px_rgba(50,161,208,0.3)] hover:brightness-105 transition-all"
            >
              Start Your Project <span>→</span>
            </Link>
          </div>

          {/* Right Graphic Content - Localized Business Dashboard Mockup */}
          <div className="flex-1 w-full max-w-xl relative">
            <div className="relative p-[2px] rounded-[1.5rem] bg-gradient-to-tr from-[#32a1d0] via-indigo-400 to-[#92d050] shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
              <div className="bg-slate-50 rounded-[1.4rem] overflow-hidden flex h-[430px] relative">
                {/* Sidebar Mockup */}
                <div className="w-[35%] bg-white h-full border-r border-slate-200 p-5 flex flex-col gap-5 relative z-10">
                  <div className="text-sm font-black text-slate-900">
                    WakeUp Hub
                  </div>
                  <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                    Overview
                  </div>

                  <div className="bg-sky-50 p-2.5 rounded-lg border border-sky-100 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#2589b5]" />
                    <span className="text-xs text-[#2589b5] font-extrabold">
                      Live Leads
                    </span>
                  </div>

                  {["WordPress CMS", "SEO Rankings", "Orders", "Analytics"].map(
                    (item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 px-2.5 text-slate-500"
                      >
                        <div className="w-3.5 h-3.5 rounded bg-slate-200" />
                        <span className="text-xs font-semibold">{item}</span>
                      </div>
                    )
                  )}
                </div>

                {/* Main Dashboard Area Mockup */}
                <div className="flex-1 p-5 flex flex-col gap-4">
                  <div className="w-full bg-white rounded-full h-8 flex items-center px-4 border border-slate-200">
                    <div className="w-28 h-2 bg-slate-200 rounded-full" />
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-slate-200 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-slate-900">
                        Monthly Organic &amp; Ad Growth
                      </span>
                      <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        +42%
                      </span>
                    </div>
                    <div className="flex items-end justify-between h-28 px-1 pb-2 border-b border-slate-100 gap-1.5">
                      {[35, 50, 42, 68, 55, 92, 60, 78, 84, 100].map(
                        (height, i) => (
                          <div
                            key={i}
                            className="w-full bg-slate-100 rounded-t-sm flex items-end justify-center"
                            style={{ height: `${height}%` }}
                          >
                            {i === 9 && (
                              <div className="w-full h-full bg-gradient-to-t from-[#32a1d0] to-[#92d050] rounded-t-sm" />
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 bg-white rounded-xl p-3.5 border border-slate-200">
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                        Monthly Revenue
                      </div>
                      <div className="text-base sm:text-lg font-black text-slate-900">
                        ₹4,85,200
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-3.5 border border-slate-200">
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                        Qualified Leads
                      </div>
                      <div className="text-base sm:text-lg font-black text-emerald-600">
                        +1,240
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Top Stat Card */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 right-6 bg-white p-3.5 rounded-xl border border-slate-200 shadow-lg flex items-center gap-3.5 z-20 min-w-[210px]"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#32a1d0] to-[#92d050] flex items-center justify-center text-white font-black text-xs">
                  WP
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900">
                    WordPress &amp; Next.js
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    Fast, SEO-ready builds
                  </div>
                </div>
                <div className="ml-auto text-xs text-emerald-600 font-extrabold">
                  99%
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}