"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesDetailed() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 80, damping: 20 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring" } }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-gray-900 font-sans overflow-hidden">
      
      {/* =========================================
          HEADER SECTION
      ========================================= */}
      <section className="relative pt-32 pb-20 px-6 text-center border-b border-gray-200 bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-gradient-to-b from-[#32a1d0]/10 via-transparent to-transparent pointer-events-none blur-[100px]"></div>
        
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#32a1d0] animate-pulse"></span>
            <span className="text-xs font-bold text-gray-600 tracking-wider uppercase">Our Expertise</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            End-to-end digital solutions <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-[#32a1d0] to-[#92d050] bg-clip-text text-transparent"> Built for Growth</span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            At WakeUp Solution, we create complete digital solutions that are fast, scalable, and designed to help your business attract more visitors, engage customers, and grow revenue.
          </p>
        </motion.div>
      </section>

      {/* =========================================
          DETAILED SERVICES ROWS
      ========================================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 flex flex-col gap-32 md:gap-48">

        {/* 1. WEB DEVELOPMENT (Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInLeft} className="flex-1">
            <div className="text-[#32a1d0] font-bold tracking-widest text-sm mb-4 uppercase">01 — Core Engineering</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">High-Performance Web Development</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                At WakeUp Solution, we believe your website is one of your most valuable business assets.
Instead of using basic templates, we design and develop custom, high-performance websites and web applications that are fast, secure, and built to grow with your business.
              </p>
              <p>
          Using modern technologies like React.js, Next.js, and Tailwind CSS, we create scalable digital platforms that deliver fast loading speeds, strong security, and a solid foundation for SEO and future growth.    </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Server-Side Rendering (SSR) for faster page loads and better SEO', 'Jamstack Architecture for improved performance and reliability', ' Headless CMS Integration for flexible content management', 'Core Web Vitals Optimization to enhance speed and user experience'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                  <span className="text-[#92d050] text-lg">✔</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#32a1d0] font-bold hover:text-[#2581a8] transition-colors group">
              Talk to Our Team<span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
          
          {/* Web Dev Visual Mockup (Light Theme) */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInRight} className="flex-1 w-full relative h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#32a1d0]/20 to-transparent rounded-3xl blur-2xl transform rotate-3"></div>
            <div className="relative w-full h-full bg-white border border-gray-200 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-6 flex flex-col overflow-hidden">
              <div className="w-full h-8 border-b border-gray-100 flex items-center gap-2 mb-6 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 space-y-4 relative">
                <motion.div animate={{ width: ["30%", "80%", "50%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="h-4 bg-[#32a1d0]/20 rounded-full"></motion.div>
                <div className="h-4 w-3/4 bg-gray-100 rounded-full"></div>
                <div className="h-4 w-1/2 bg-gray-100 rounded-full"></div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="h-24 bg-gray-50 rounded-xl border border-gray-100 shadow-inner"></div>
                  <div className="h-24 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-[#32a1d0] font-mono text-xs p-4 overflow-hidden shadow-sm">
                    {'<App />'} <br/> {`status: "online"`}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. APP DEVELOPMENT (Image Left, Text Right) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInRight} className="flex-1">
            <div className="text-[#92d050] font-bold tracking-widest text-sm mb-4 uppercase">02 — Mobile Experience</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Cross-Platform App Solutions</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
            Reach your customers on the devices they use every day.
At WakeUp Solution, we build powerful mobile applications that work smoothly on both iOS and Android using a single, efficient codebase.  </p>
              <p>
             By using modern technologies like React Native, we deliver mobile apps faster while keeping development costs lower. Our apps are designed for smooth performance, strong security, and a great user experience.
 </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['iOS & Android Compatibility from a single codebase', 'Real-time Sync & Offline Support for better usability', 'Push Notifications to keep users engaged', 'App Store & Play Store Deployment support'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                  <span className="text-[#32a1d0] text-lg">✔</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#92d050] font-bold hover:text-[#78b03e] transition-colors group">
              Build Your Mobile App <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          {/* App Dev Visual Mockup (Light Theme) */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInLeft} className="flex-1 w-full relative h-[400px] flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-tl from-[#92d050]/20 to-transparent rounded-full blur-3xl"></div>
            {/* Phone Silhouette */}
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative w-[220px] h-[450px] bg-white border-[8px] border-gray-200 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-3 flex flex-col overflow-hidden">
              <div className="w-24 h-5 bg-gray-200 rounded-b-2xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20"></div>
              <div className="flex-1 bg-gray-50 rounded-2xl p-4 flex flex-col gap-4 mt-6 border border-gray-100">
                <div className="flex justify-between items-center"><div className="w-8 h-8 rounded-full bg-[#92d050]/20 flex items-center justify-center text-xs font-bold text-[#92d050]">W</div><div className="w-12 h-3 bg-gray-200 rounded-full"></div></div>
                <div className="w-full h-32 bg-white rounded-xl border border-gray-100 p-3 flex flex-col justify-end gap-2 shadow-sm">
                  <div className="w-full h-8 bg-gradient-to-r from-[#32a1d0] to-[#92d050] rounded-lg"></div>
                  <div className="w-3/4 h-3 bg-gray-100 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <div className="h-12 bg-white border border-gray-100 shadow-sm rounded-lg"></div><div className="h-12 bg-white border border-gray-100 shadow-sm rounded-lg"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 3. SEO (Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInLeft} className="flex-1">
            <div className="text-purple-500 font-bold tracking-widest text-sm mb-4 uppercase">03 — Organic Visibility</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Advanced SEO Optimization</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
            A great website is valuable only if your customers can find it. At WakeUp Solution, we implement data-driven SEO strategies designed to improve your Google rankings and increase organic traffic to your website.  </p>
              <p>
             From technical SEO improvements to content optimization and local search visibility, we ensure your business stands out and reaches the right audience online.
 </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Complete Website SEO Audits to identify growth opportunities', 'Keyword Research & Competitor Analysis for strategic ranking', 'Local SEO & Google Business Profile Optimization', ' High-Quality Backlink Building to boost authority'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                  <span className="text-[#ffc170] text-lg">✔</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:text-purple-800 transition-colors group">
              Boost your organic traffic <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
          
          {/* SEO Visual Mockup (Light Theme) */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInRight} className="flex-1 w-full relative h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-3xl blur-2xl transform -rotate-3"></div>
            <div className="relative w-full h-full bg-white border border-gray-200 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-gray-500 text-sm font-bold mb-1">Search Positioning</h4>
                  <div className="text-3xl font-extrabold text-gray-900">Higher Google Rankings </div>
                </div>
                <div className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-bold border border-purple-200">Target Hit</div>
              </div>
              
              {/* Fake Bar Chart */}
              <div className="flex items-end justify-between h-48 gap-3 mt-8 relative">
                <div className="absolute w-full h-[1px] bg-transparent top-1/4 border-dashed border-b border-gray-200"></div>
                <div className="absolute w-full h-[1px] bg-transparent top-2/4 border-dashed border-b border-gray-200"></div>
                {[20, 35, 30, 55, 70, 95].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.1 }}
                    className={`w-full rounded-t-md ${h === 95 ? 'bg-gradient-to-t from-purple-600 to-purple-400 shadow-md' : 'bg-gray-100 border border-gray-200 border-b-0'}`}
                  ></motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4. DIGITAL MARKETING (Image Left, Text Right) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInRight} className="flex-1">
            <div className="text-[#ff9d00] font-bold tracking-widest text-sm mb-4 uppercase">04 — Outbound Growth</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Data-Driven Digital Marketing</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
             Make every marketing investment count. At WakeUp Solution, we create targeted digital marketing strategies that attract quality leads, increase conversions, and help your business grow faster. </p>
              <p>
              Using Google Ads, social media marketing, and advanced analytics, we track performance and continuously optimize campaigns to maximize your return on investment.</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Google PPC Advertising for instant traffic', ' Social Media Campaign Management', 'Conversion Rate Optimization (CRO', 'A/B Testing for Better Results'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                  <span className="text-purple-500 text-lg">✔</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#ff9d00] font-bold hover:text-[#d18200] transition-colors group">
             Scale Your Sales Today  <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          {/* Marketing Visual Mockup (Light Theme) */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInLeft} className="flex-1 w-full relative h-[400px]">
            <div className="absolute top-10 left-10 w-48 h-48 bg-[#ffc170]/30 rounded-full blur-3xl"></div>
            
            {/* Floating Notification Cards */}
            <div className="relative w-full h-full flex flex-col justify-center items-center gap-6">
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="bg-white border border-gray-100 w-[85%] p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex items-center gap-4 relative ml-12">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-xl text-orange-500">🎯</div>
                <div><div className="text-gray-900 font-extrabold">New Lead Acquired</div><div className="text-xs text-gray-500 font-medium">Via Google Search Campaign</div></div>
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#92d050] text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md">+1</div>
              </motion.div>

              <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity }} className="bg-white border border-gray-100 w-[90%] p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex items-center justify-between gap-4 mr-12">
                <div><div className="text-gray-500 text-xs font-bold mb-1 uppercase tracking-wider">Conversion Rate</div><div className="text-2xl font-extrabold text-gray-900">8.42%</div></div>
                <div className="w-24 h-10 relative">
                  <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none"><path d="M0,25 Q20,5 50,20 T100,5" fill="none" stroke="#92d050" strokeWidth="3" strokeLinecap="round"/></svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 5. E-COMMERCE (Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInLeft} className="flex-1">
            <div className="text-[#32a1d0] font-bold tracking-widest text-sm mb-4 uppercase">05 — Online Retail</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Scalable E-Commerce Solutions</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
             Turn your website into a powerful 24/7 online store. At WakeUp Solution, we build secure and scalable e-commerce platforms that can handle growing traffic, large product catalogs, and seamless online transactions. </p>
              <p>
              Our focus is on user-friendly design and smooth shopping experiences, helping customers browse easily, complete purchases quickly, and return again.</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Custom Online Store Development tailored to your business', 'Secure Payment Gateway Integration for safe transactions', ' Fast & Frictionless Checkout Experience', 'Inventory & ERP System Integration for better business management'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                  <span className="text-[#92d050] text-lg">✔</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#32a1d0] font-bold hover:text-[#2581a8] transition-colors group">
              Build your online store <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
          
          {/* E-commerce Visual Mockup (Light Theme) */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInRight} className="flex-1 w-full relative h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#32a1d0]/10 to-[#92d050]/10 rounded-3xl blur-2xl"></div>
            <div className="relative w-full h-full bg-white border border-gray-200 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col">
              
              {/* Product Card Mockup */}
              <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-100 p-4 flex gap-6 items-center shadow-sm">
                <div className="w-1/3 h-full bg-white rounded-xl flex items-center justify-center text-4xl shadow-sm border border-gray-100">👟</div>
                <div className="flex-1 space-y-3">
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  <div className="text-2xl font-extrabold text-gray-900 mb-2">$140.00</div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full border-2 border-[#32a1d0] bg-blue-100"></div>
                    <div className="w-6 h-6 rounded-full border-2 border-gray-200 bg-gray-100"></div>
                  </div>
                </div>
              </div>
              
              {/* Checkout Button */}
              <div className="mt-6 flex justify-between items-center bg-gray-100 border border-gray-200 p-4 rounded-xl">
                <div><div className="text-xs text-gray-500 font-bold uppercase">Cart Total</div><div className="text-xl font-extrabold text-gray-900">$280.00</div></div>
                <button className="bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white text-sm font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">Checkout →</button>
              </div>

            </div>
          </motion.div>
        </div>

      </section>

      {/* =========================================
          BOTTOM CTA SECTION
      ========================================= */}
      <section className="py-24 text-center px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-[2.5rem] shadow-xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#32a1d0]/5 to-transparent blur-[100px] pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 relative z-10 text-gray-900 tracking-tight">Ready to scale your business?</h2>
          <p className="text-gray-600 text-lg mb-10 relative z-10 max-w-2xl mx-auto">Stop settling for average. Let WakeUp Solution engineer the robust digital infrastructure and marketing strategy your brand deserves.</p>
          
          <Link href="/contact" className="relative z-10 inline-flex items-center justify-center bg-gray-900 text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-[#32a1d0] transition-colors shadow-lg hover:shadow-xl">
            Get a Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}