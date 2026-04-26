"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
export default function Packages() {
  const [activeCategory, setActiveCategory] = useState("web"); // 'web', 'ecommerce', 'app', 'seo'
  const [isElite, setIsElite] = useState(false); // For SEO sub-toggle
  const [openFaq, setOpenFaq] = useState(null); // For FAQ Accordion

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } }
  };

  // ==========================================
  // 1. WEB DESIGN PACKAGES
  // ==========================================
  const webDesignPlans = [
    {
      name: "Basic", price: "12,000", desc: "Perfect for startups needing a fast, professional digital presence.", isPopular: false,
      features: [ "100% Customized Design", "Up to 10 Pages", "Free .com, .in, .co.in Domain (1 yr)", "1 Business Email", "Unlimited Storage", "Bandwidth Unlimited", "24x7 Support", "Complementary 12 months Maintenance", "Free Anti-Spam-bot Captcha", "Free Training", "Mobile Optimized", "Speed Optimized", "SSL Security Included", "SEO Friendly", "Scheduled monthly Backup", "The W3C Markup Validated", "Whatsapp Chat Integration", "Limited Plugins", "2 days Working Time" ]
    },
    {
      name: "Standard", price: "16,000", desc: "Ideal for growing businesses requiring more pages and analytics.", isPopular: true,
      features: [ "100% Customized Design", "Up to 15 Pages", "Free .com, .in, .co.in Domain (1 yr)", "1 Business Email", "Unlimited Storage", "Bandwidth Unlimited", "24x7 Support", "Complementary 12 months Maintenance", "Free Anti-Spam-bot Captcha", "Free Training", "Mobile Optimized", "Speed Optimized", "SSL Security Included", "SEO Friendly", "Scheduled monthly Backup", "The W3C Markup Validated", "Whatsapp Chat Integration", "Limited Plugins", "3 days Working Time", "Google Analytics - Free setup", "Google Map - Free setup" ]
    },
    {
      name: "Premium", price: "20,000", desc: "Comprehensive build for established companies and large catalogs.", isPopular: false,
      features: [ "100% Customized Design", "Up to 40 Pages", "Free .com, .in, .co.in Domain (1 yr)", "2 Business Emails", "Unlimited Storage", "Bandwidth Unlimited", "24x7 Support", "Complementary 12 months Maintenance", "Free Anti-Spam-bot Captcha", "Free Training", "Mobile Optimized", "Speed Optimized", "SSL Security Included", "SEO Friendly", "Scheduled monthly Backup", "The W3C Markup Validated", "Whatsapp Chat Integration", "Limited Plugins", "3 days Working Time", "Google Analytics - Free setup", "Google Map - Free setup" ]
    }
  ];

  // ==========================================
  // 2. E-COMMERCE PACKAGES
  // ==========================================
  const ecommercePlans = [
    {
      name: "Basic Store", price: "25,000", desc: "Start selling online quickly with a functional, easy-to-manage storefront.", isPopular: false,
      features: [ "Up to 50 Products", "Premium Theme Customization", "Payment Gateway Integration", "Mobile Responsive Design", "Basic Inventory Management", "Standard Checkout Flow", "Whatsapp & Live Chat", "Basic Shipping Setup", "1 Month Free Support" ]
    }, 
    //
    {
      name: "Growth Store", price: "45,000", desc: "A custom-built e-commerce experience designed for scaling sales.", isPopular: true,
      features: [ "Up to 500 Products", "100% Custom UI/UX Design", "Multiple Payment Gateways", "Advanced Inventory Tracking", "Abandoned Cart Recovery", "Coupon & Discount Engine", "On-Page SEO Setup", "Customer Account Dashboard", "3 Months Free Support" ]
    },
    {
      name: "Enterprise Store", price: "85,000", desc: "Advanced multi-vendor or high-volume stores with complex logic.", isPopular: false,
      features: [ "Unlimited Products", "Multi-Vendor Capability", "Advanced Filtering & Search", "Custom API Integrations", "POS / ERP Synchronization", "Dynamic Pricing Rules", "Premium Server Configuration", "Dedicated Account Manager", "6 Months Free Maintenance" ]
    }
  ];

  // ==========================================
  // 3. APP DEVELOPMENT PACKAGES
  // ==========================================
  const appPlans = [
    {
      name: "Hybrid Starter", price: "60,000", desc: "Launch your idea on both iOS and Android quickly using React Native.", isPopular: false,
      features: [ "Android & iOS Apps (Hybrid)", "Standard UI/UX Design", "User Authentication", "Basic API Integration", "Push Notifications", "Basic Admin Dashboard", "App Store Submission Support", "1 Month Free Bug Support" ]
    },
    {
      name: "Business App", price: "1,20,000", desc: "Feature-rich mobile applications tailored for established businesses.", isPopular: true,
      features: [ "Android & iOS Apps (React Native)", "Premium Custom UI/UX Design", "Payment Gateway Integration", "User Roles & Permissions", "Real-time Chat / Messaging", "Advanced API Integration", "In-App Analytics Setup", "3 Months Free Maintenance" ]
    },
    {
      name: "Enterprise Scale", price: "2,50,000", desc: "Complex, highly-scalable mobile architectures for massive user bases.", isPopular: false,
      features: [ "Native or Advanced Hybrid Build", "Complex Backend Architecture", "Geolocation & Live Tracking", "Audio/Video Streaming", "Advanced Security & Encryption", "Custom Admin ERP/CRM", "Dedicated Server Setup", "6 Months Free Maintenance" ]
    }
  ];

  // ==========================================
  // 4. SEO PACKAGES DATA (Standard & Elite)
  // ==========================================
  const standardSeoPlans = [
    { name: "STARTER", price: "15,000", isPopular: false, features: [{ text: "3 Target Keywords", included: true }, { text: "Technical Website Analysis", included: true }, { text: "Local SEO Keywords", included: false }, { text: "Google My Business Opt.", included: false }, { text: "Mobile Site Optimization", included: false }, { text: "Monthly ROI Reporting", included: false }, { text: "Dedicated Account Rep", included: false }, { text: "Guaranteed Result", included: true }] },
    { name: "SILVER", price: "22,000", isPopular: false, features: [{ text: "5 Target Keywords", included: true }, { text: "Technical Website Analysis", included: true }, { text: "2 Local SEO Keywords", included: true }, { text: "Google My Business Opt.", included: true }, { text: "Mobile Site Optimization", included: false }, { text: "Monthly ROI Reporting", included: true }, { text: "Dedicated Account Rep", included: false }, { text: "Guaranteed Result", included: true }] },
    { name: "GOLD", price: "38,000", isPopular: true, features: [{ text: "10 Target Keywords", included: true }, { text: "Technical Website Analysis", included: true }, { text: "5 Local SEO Keywords", included: true }, { text: "Google My Business Opt.", included: true }, { text: "Mobile Site Optimization", included: true }, { text: "Monthly ROI Reporting", included: true }, { text: "Dedicated Account Rep", included: true }, { text: "Guaranteed Result", included: true }] },
    { name: "PLATINUM", price: "52,000", isPopular: false, features: [{ text: "25 Target Keywords", included: true }, { text: "Technical Website Analysis", included: true }, { text: "5 Local SEO Keywords", included: true }, { text: "Google My Business Opt.", included: true }, { text: "Mobile Site Optimization", included: true }, { text: "Monthly ROI Reporting", included: true }, { text: "Content Development", included: true }, { text: "Guaranteed Result", included: true }] },
    { name: "DIAMOND", price: "75,000", isPopular: false, features: [{ text: "50 Target Keywords", included: true }, { text: "Technical Website Analysis", included: true }, { text: "10 Local SEO Keywords", included: true }, { text: "Google My Business Opt.", included: true }, { text: "Mobile Site Optimization", included: true }, { text: "Monthly ROI Reporting", included: true }, { text: "Content Development", included: true }, { text: "Guaranteed Result", included: true }] }
  ];

  const eliteSeoPlans = [
    { name: "ELITE-1", price: "90,000", isPopular: false, features: [{ text: "150 Target Keywords", included: true }, { text: "Full Technical SEO Audit", included: true }, { text: "Advanced Content Dev.", included: true }, { text: "Competitor Tracking", included: true }, { text: "Dedicated Account Rep", included: true }, { text: "Pan-India Reach", included: false }, { text: "Guaranteed Results", included: true }] },
    { name: "ELITE-2", price: "1,45,000", isPopular: false, features: [{ text: "300 Target Keywords", included: true }, { text: "Full Technical SEO Audit", included: true }, { text: "Advanced Content Dev.", included: true }, { text: "Competitor Tracking", included: true }, { text: "Dedicated Account Rep", included: true }, { text: "Pan-India Reach", included: false }, { text: "Guaranteed Results", included: true }] },
    { name: "ELITE-3", price: "2,10,000", isPopular: true, features: [{ text: "900 Target Keywords", included: true }, { text: "Full Technical SEO Audit", included: true }, { text: "Advanced Content Dev.", included: true }, { text: "Competitor Tracking", included: true }, { text: "Dedicated Account Rep", included: true }, { text: "Pan-India Reach", included: true }, { text: "Guaranteed Results", included: true }] },
    { name: "ELITE-4", price: "2,50,000", isPopular: false, features: [{ text: "1500 Target Keywords", included: true }, { text: "Full Technical SEO Audit", included: true }, { text: "Advanced Content Dev.", included: true }, { text: "Competitor Tracking", included: true }, { text: "Dedicated Account Rep", included: true }, { text: "Pan-India Reach", included: true }, { text: "Guaranteed Results", included: true }] },
    { name: "PAN INDIA", price: "6,00,000", isPopular: false, features: [{ text: "5000 Target Keywords", included: true }, { text: "Full Technical SEO Audit", included: true }, { text: "Advanced Content Dev.", included: true }, { text: "Competitor Tracking", included: true }, { text: "Dedicated Account Rep", included: true }, { text: "Pan-India Reach", included: true }, { text: "Guaranteed Results", included: true }] }
  ];

  const activeSeoPlans = isElite ? eliteSeoPlans : standardSeoPlans;

  // ==========================================
  // 5. FAQ DATA
  // ==========================================
  const faqs = [
    { question: "How long does it take for packages to be delivered?", answer: "Delivery timelines depend on the package. Basic web design usually takes 7-10 days, while custom app or enterprise e-commerce builds can take 4-8 weeks. SEO results are ongoing, with initial reports delivered within the first 30 days." },
    { question: "Are there any hidden fees or additional charges?", answer: "No, WakeUp Solution prides itself on complete transparency. The prices listed are what you pay. Standard third-party costs like premium plugin licenses or ad-spend budgets are always discussed upfront." },
    { question: "Can I upgrade my package later?", answer: "Absolutely! Our services are built to scale with your business. You can easily upgrade your Web, SEO, or App package at any time as your requirements grow." },
    { question: "Do you provide maintenance and support after launch?", answer: "Yes. All our Web and App development packages come with a complimentary support period (ranging from 1 to 12 months depending on the plan). We also offer dedicated maintenance contracts." },
    { question: "How do I contact support for project-related updates?", answer: "Once you onboard with us, you will be assigned a dedicated Account Manager. You can reach them directly via email, phone, or your custom client dashboard for real-time updates." },
    { question: "What is your refund policy?", answer: "We use a milestone-based payment system. A small upfront deposit is required to start the project and is non-refundable. The remaining payments are made only after you review and approve each stage of the work." }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 font-sans selection:bg-[#ffc170] selection:text-black pb-32">
      
      {/* Background Glows (Light Mode) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none opacity-40 z-0">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#32a1d0]/30 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-[#92d050]/30 rounded-full filter blur-[120px]"></div>
      </div>

      <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 pt-32">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden" animate="show" variants={fadeUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#92d050] animate-pulse"></span>
            <span className="text-xs font-bold text-gray-600 tracking-wider uppercase">Transparent Pricing</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            Affordable <span className="bg-gradient-to-r from-[#32a1d0] via-purple-500 to-[#92d050] bg-clip-text text-transparent font-extrabold">Digital Growth</span> Packages
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 font-medium">
            Choose a complete web build, scale with an e-commerce platform, launch a mobile app, or multiply your traffic with SEO. No hidden fees.
          </p>

          {/* MASTER TOGGLE: Web Design, E-Commerce, App Dev, SEO */}
          <div className="flex flex-wrap justify-center bg-white border border-gray-200 rounded-3xl md:rounded-full p-1.5 w-full max-w-3xl mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.05)] gap-1">
            {[
              { id: 'web', label: 'Web Design' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'app', label: 'App Dev' },
              { id: 'seo', label: 'SEO Services' }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 sm:px-6 md:px-8 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex-1 md:flex-none ${activeCategory === tab.id ? "bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white shadow-md" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* VIEW 1: WEB DESIGN, E-COMMERCE, OR APP DEVELOPMENT PACKAGES */}
        {/* ============================================================== */}
        <AnimatePresence mode="wait">
          {(activeCategory === "web" || activeCategory === "ecommerce" || activeCategory === "app") && (
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16"
            >
              {/* Dynamically select which plan array to map based on activeCategory */}
              {(activeCategory === "web" ? webDesignPlans : activeCategory === "ecommerce" ? ecommercePlans : appPlans).map((plan, index) => (
                <motion.div 
                  key={`${activeCategory}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative w-full flex"
                >
                  {/* Glowing Highlight for Recommended Plan */}
                  {plan.isPopular && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#32a1d0] via-purple-400 to-[#92d050] rounded-3xl blur-[3px] opacity-70"></div>
                  )}
                  {plan.isPopular && (
                    <div className="absolute -top-3 right-0 left-0 mx-auto w-max bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full z-20 shadow-md">
                      Recommended
                    </div>
                  )}

                  {/* Card Container */}
                  <div className={`relative w-full flex flex-col bg-white rounded-3xl p-6 xl:p-8 ${plan.isPopular ? 'border-[2px] border-transparent m-[2px] shadow-xl' : 'border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all'}`}>
                    
                    <h3 className={`text-lg uppercase font-bold mb-2 ${plan.isPopular ? 'text-[#92d050]' : 'text-[#32a1d0]'}`}>
                      {plan.name}
                    </h3>
                    
                    <div className="flex items-end gap-1 mb-4">
                      <span className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        <span className="text-2xl mr-1 font-medium text-gray-500">₹</span>{plan.price}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 pb-6 border-b border-gray-100 h-10">
                      {plan.desc}
                    </p>

                    {/* Feature List */}
                    <ul className="flex flex-col gap-3 flex-1 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-gray-700">
                          <svg className="w-4 h-4 flex-shrink-0 text-[#92d050] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-semibold leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>

<Link href="/contact">
  <button
    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105 ${
      plan.isPopular
        ? "bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white shadow-md"
        : "bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100"
    }`}
  >
    Get a Quote
  </button>
</Link>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* VIEW 2: SEO PACKAGES (with internal Standard/Elite Toggle) */}
          {/* ============================================================== */}
          {activeCategory === "seo" && (
            <motion.div 
              key="seo"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
            >
              {/* SEO Sub-Toggle (Standard vs Elite) */}
              <div className="flex items-center justify-center gap-4 mt-8 mb-12">
                <span className={`text-sm font-bold transition-colors duration-300 ${!isElite ? 'text-gray-900' : 'text-gray-500'}`}>Standard SEO</span>
                
                <button onClick={() => setIsElite(!isElite)} className="w-16 h-8 bg-gray-200 border border-gray-300 rounded-full p-1 flex items-center cursor-pointer relative transition-colors hover:bg-gray-300">
                  <motion.div layout initial={false} animate={{ x: isElite ? 32 : 0 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} className={`w-6 h-6 rounded-full shadow-md ${isElite ? 'bg-gradient-to-r from-purple-500 to-[#ffc170]' : 'bg-white'}`} />
                </button>
                
                <span className={`text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${isElite ? 'text-gray-900' : 'text-gray-500'}`}>
                  Elite Packages <span className={`text-[10px] px-2 py-0.5 rounded-full border transition-colors duration-300 ${isElite ? 'bg-purple-50 text-purple-600 border-purple-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>Enterprise</span>
                </span>
              </div>

              {/* SEO Cards Grid */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={isElite ? 'elite' : 'standard'}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-wrap justify-center gap-6 w-full"
                >
                  {activeSeoPlans.map((plan, index) => (
                    <motion.div 
                      key={`seo-${index}`} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-19.2px)] flex"
                    >
                      {plan.isPopular && <div className="absolute inset-0 bg-gradient-to-br from-[#32a1d0] via-purple-400 to-[#92d050] rounded-3xl blur-[3px] opacity-70"></div>}
                      {plan.isPopular && <div className="absolute -top-3 right-0 left-0 mx-auto w-max bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full z-20 shadow-md">Most popular</div>}

                      <div className={`relative w-full flex flex-col bg-white rounded-3xl p-6 xl:p-8 ${plan.isPopular ? 'border-[2px] border-transparent m-[2px] shadow-xl' : 'border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all'}`}>
                        
                        <h3 className={`text-sm tracking-widest uppercase font-bold mb-4 ${plan.isPopular ? 'text-[#92d050]' : isElite ? 'text-purple-600' : 'text-[#32a1d0]'}`}>{plan.name}</h3>
                        
                        <div className="flex items-end gap-1 mb-2">
                          <span className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight"><span className="text-xl mr-1 font-medium text-gray-500">₹</span>{plan.price}</span>
                        </div>
                        
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-6 pb-6 border-b border-gray-100">Per Annum</div>
                        <div className="text-xs font-extrabold text-gray-900 mb-4 uppercase tracking-wide">Package Details</div>
                        
                        <ul className="flex flex-col gap-3.5 flex-1 mb-8">
                          {plan.features.map((feature, i) => (
                            <li key={i} className={`flex items-start gap-3 text-xs xl:text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                              {feature.included ? (
                                <svg className="w-4 h-4 flex-shrink-0 text-[#92d050] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                              ) : (
                                <svg className="w-4 h-4 flex-shrink-0 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                              )}
                              <span className={feature.included ? 'font-semibold' : 'line-through decoration-gray-300'}>{feature.text}</span>
                            </li>
                          ))}
                        </ul>

                        
<Link href="/contact">
  <button
    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105 ${
      plan.isPopular
        ? "bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white shadow-md"
        : "bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100"
    }`}
  >
    Get started
  </button>
</Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* ============================================================== */}
      {/* PREMIUM FAQ SECTION */}
      {/* ============================================================== */}
      <section className="relative py-24 px-4 sm:px-6 max-w-4xl mx-auto z-10 mt-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-gray-500 text-lg">Everything you need to know about our packages and billing.</p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <motion.div 
                layout
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? "bg-white border-[#32a1d0]/40 shadow-[0_10px_30px_rgba(50,161,208,0.1)]" : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                >
                  <span className={`text-base md:text-lg font-bold transition-colors duration-300 pr-6 ${openFaq === index ? "text-[#32a1d0]" : "text-gray-900 group-hover:text-[#32a1d0]"}`}>
                    {faq.question}
                  </span>
                  
                  {/* Animated Chevron/Plus Icon */}
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${openFaq === index ? "bg-[#32a1d0] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-[#32a1d0]"}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 md:px-6 pb-6 pt-2 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100 mt-2 mx-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </section>

      {/* Global CSS for hiding scrollbar on the feature lists (Light Mode) */}
      <style dangerouslySetInnerHTML ={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, 0.2); }
      `}} />
    </div>
  );
}