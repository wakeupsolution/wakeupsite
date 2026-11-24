"use client";
import { useState } from "react";
import Link from "next/link";

export default function PackageClient() {
  const [openFaq, setOpenFaq] = useState(0);

  const packages = [
    {
      id: "start",
      name: "WAKEUP START",
      tag: "Launch Fast",
      price: "12,000",
      period: "/ Year",
      highlightStat: "5 Pages + 3 Keywords + 5 Locations",
      desc: "For businesses starting online",
      isPopular: false,
      theme: {
        badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
        title: "text-[#2589b5]",
        card: "bg-white border border-slate-200/90 shadow-[0_8px_30px_rgb(15,23,42,0.04)] hover:border-sky-300",
        statBox: "bg-sky-50/70 border-sky-100 text-sky-900",
        check: "text-[#2589b5]",
        btn: "bg-slate-900 text-white hover:bg-slate-800",
      },
      features: [
        "5-page professional website",
        "Domain & hosting (1 year)",
        "Mobile-responsive design",
        "Basic SEO setup",
        "3 target keywords",
        "5 target locations",
        "Google Business Profile setup",
        "WhatsApp integration",
        "Basic AEO setup",
      ],
    },
    {
      id: "grow",
      name: "WAKEUP GROW",
      tag: "Most Popular",
      price: "20,000",
      period: "/ Year",
      highlightStat: "FREE Website + 6 Keywords + 30 Locations",
      desc: "Complete growth engine with free web build & local dominance.",
      isPopular: true,
      theme: {
        badgeBg: "bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white border-transparent shadow-md",
        title: "text-[#16a34a]",
        card: "bg-white/95 backdrop-blur-md border-2 border-[#32a1d0] shadow-[0_20px_50px_rgba(50,161,208,0.18)] lg:-translate-y-2",
        statBox: "bg-gradient-to-r from-sky-50 to-lime-50 border-lime-200/80 text-slate-900",
        check: "text-[#16a34a]",
        btn: "bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white shadow-lg shadow-sky-500/20 hover:brightness-105",
      },
      features: [
        "FREE website development",
        "Domain & hosting (1 year)",
        "6 strategic keywords",
        "30 target locations",
        "SEO optimization",
        "Local SEO",
        "AEO optimization",
        "GEO optimization",
        "Google Business optimization",
        "WhatsApp integration",
        "Analytics & tracking",
        "Website maintenance",
      ],
    },
    {
      id: "dominate",
      name: "WAKEUP DOMINATE",
      tag: "Max Visibility",
      price: "35,000",
      period: "/ Year",
      highlightStat: "10 Keywords + 50 Locations + AI/GEO",
      desc: "For businesses wanting stronger digital visibility",
      isPopular: false,
      theme: {
        badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
        title: "text-indigo-600",
        card: "bg-white border border-slate-200/90 shadow-[0_8px_30px_rgb(15,23,42,0.04)] hover:border-indigo-300",
        statBox: "bg-indigo-50/70 border-indigo-100 text-indigo-950",
        check: "text-indigo-600",
        btn: "bg-indigo-600 text-white hover:bg-indigo-700",
      },
      features: [
        "Premium website development",
        "Domain & hosting (1 year)",
        "10 strategic keywords",
        "50 target locations",
        "Advanced SEO",
        "Advanced Local SEO",
        "AEO optimization",
        "GEO / AI Search optimization",
        "Google Business Profile management",
        "Content optimization",
        "Technical SEO",
        "Monthly performance reports",
        "Lead tracking",
        "Priority support",
      ],
    },
  ];

  const faqs = [
    {
      question: "How long does it take for packages to be delivered?",
      answer:
        "Website builds typically go live within 5–10 business days, while SEO, AEO, and GEO optimizations roll out immediately with monthly performance tracking.",
    },
    {
      question: "Are there any hidden fees or additional charges?",
      answer:
        "No hidden costs. Your annual plan covers your website setup, 1-year domain & hosting, and the listed search & visibility deliverables upfront.",
    },
    {
      question: "Can I upgrade my package later?",
      answer:
        "Yes. You can upgrade from Start to Grow or Dominate anytime as you target more locations, keywords, or lead-tracking workflows.",
    },
    {
      question: "Do you provide maintenance and support after launch?",
      answer:
        "Yes. Every tier includes 1 year of hosting and ongoing support, with full website maintenance and priority support on Grow and Dominate.",
    },
    {
      question: "How do I contact support for project-related updates?",
      answer:
        "Once onboarded, you get direct access via WhatsApp, phone, or email with clear milestone and monthly reporting updates.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "Onboarding is milestone-based. Once domain registration, hosting provisioning, and initial setup start, setup charges are non-refundable while later stages are reviewed step by step.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900 font-sans selection:bg-[#32a1d0]/20 selection:text-slate-900 pb-28">
      {/* Lightweight static top gradient wash (no heavy animated blur loops) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(50,161,208,0.14),rgba(146,208,80,0.08)_45%,transparent_75%)]"
      />

      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 md:pt-28">
        {/* Ad-Style Hero Hook */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs mb-5">
            <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-700">
              Website + Domain + Hosting + SEO / AEO / GEO
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">
            Website, SEO &amp; Local Growth Packages.{" "}
            <span className="bg-gradient-to-r from-[#2589b5] via-indigo-600 to-[#16a34a] bg-clip-text text-transparent">
              Turn Clicks Into Leads.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-medium max-w-2xl mx-auto mb-6">
            Simple annual growth bundles built for speed, local visibility, and clear ROI—starting at just ₹12,000/year.
          </p>

          {/* Quick Trust Strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#16a34a]">✓</span> 1-Year Domain &amp; Hosting Included
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#16a34a]">✓</span> Mobile &amp; WhatsApp Ready
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#16a34a]">✓</span> Transparent Annual Pricing
            </span>
          </div>
        </div>

        {/* 3 Core Ad-Feel Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {packages.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-3xl p-6 sm:p-7 transition-all duration-200 will-change-transform ${plan.theme.card}`}
            >
              {/* Top Row: Tier Name + Pill Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <h2
                  className={`text-sm font-black uppercase tracking-wider ${plan.theme.title}`}
                >
                  {plan.name}
                </h2>
                <span
                  className={`text-[11px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full border ${plan.theme.badgeBg}`}
                >
                  {plan.isPopular ? `⭐ ${plan.tag}` : plan.tag}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-4xl sm:text-[2.65rem] font-black tracking-tight text-slate-900">
                  <span className="text-2xl font-bold text-slate-400 mr-0.5">
                    ₹
                  </span>
                  {plan.price}
                </span>
                <span className="text-sm font-bold text-slate-500">
                  {plan.period}
                </span>
              </div>

              <p className="text-sm font-medium text-slate-600 mb-4">
                {plan.desc}
              </p>

              {/* High-Scannability Ad Callout Strip */}
              <div
                className={`rounded-2xl border px-3.5 py-2.5 text-xs font-extrabold tracking-tight mb-6 ${plan.theme.statBox}`}
              >
                {plan.highlightStat}
              </div>

              {/* Deliverables */}
              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map((feature, idx) => {
                  const isFreeBuild = feature.toLowerCase().includes("free website");
                  return (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <svg
                        className={`w-4 h-4 shrink-0 mt-0.5 ${plan.theme.check}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`leading-snug ${
                          isFreeBuild
                            ? "font-extrabold text-slate-900 bg-lime-100/90 px-2 py-0.5 rounded-md"
                            : "font-semibold"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <Link href="/contact" className="mt-auto block">
                <button
                  type="button"
                  className={`w-full py-3.5 px-5 rounded-xl font-extrabold text-sm tracking-wide transition-all duration-150 active:scale-[0.99] cursor-pointer ${plan.theme.btn}`}
                >
                  {plan.isPopular
                    ? "Claim Wakeup Grow"
                    : `Choose ${plan.name.split(" ")[1]}`}
                </button>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom Ad Conversion Banner */}
        <div className="mt-12 rounded-2xl bg-slate-900 text-white px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-lime-400">
              Not sure which reach fits your business?
            </p>
            <p className="text-sm sm:text-base font-semibold text-slate-100">
              Tell us your target cities and service keywords—we’ll recommend the right plan in 10 minutes.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm px-5 py-3 transition-colors"
          >
            Talk to Us →
          </Link>
        </div>
      </section>

      {/* Smooth CSS-Grid FAQ Accordion (Zero JS height thrashing) */}
      <section className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Quick answers on timelines, inclusions, and upgrades.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`rounded-2xl bg-white border transition-colors ${
                  isOpen
                    ? "border-[#32a1d0] shadow-sm"
                    : "border-slate-200/90 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#32a1d0] text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}