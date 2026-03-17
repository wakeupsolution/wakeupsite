"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const techStack = [ "AWS","|","PostgreSQL","|", "Node.js", "|","React.js", "|","Next.js","|", 
    "Tailwind CSS","|", "Vite", "|","WordPress","|", "React Native","|", "Figma", "|","Docker","|", "WordPress","|" ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-gray-900 font-sans overflow-hidden">
      
      {/* =========================================
          SECTION 1: HERO (3 Overlapping Mockups)
      ========================================= */}
      <section className="relative flex flex-col items-center justify-start pt-24 md:pt-32 pb-16 md:pb-20">
        
        {/* Fading Square Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at top center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at top center, black 30%, transparent 80%)'
          }}
        ></div>

        {/* Ambient Color Glows behind the mockups */}
        <div className="absolute top-[30%] md:top-[40%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] md:h-[400px] flex justify-between pointer-events-none opacity-20 z-0">
          <div className="w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#32a1d0] rounded-full mix-blend-multiply filter blur-[100px] md:blur-[150px] animate-pulse"></div>
          <div className="w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#92d050] rounded-full mix-blend-multiply filter blur-[100px] md:blur-[150px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col items-center max-w-4xl mx-auto mb-12 md:mb-20">
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1] text-gray-900">
              High-Performance Web <br className="hidden sm:block" />
              <span className="text-gray-800">Solutions & Services</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 font-medium px-4">
              Static Sites. <span className="text-[#32a1d0]">E-Commerce.</span> <span className="text-[#92d050]">Digital Marketing.</span>
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white shadow-md' text-white font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(50,161,208,0.3)]">
                Start Your Project
              </Link>
            </motion.div>
          </motion.div>

          {/* The 3 Overlapping Website Mockups */}
          <div className="relative w-full h-[280px] sm:h-[400px] md:h-[600px] flex justify-center items-start mt-6 md:mt-10">
            
            {/* LEFT MOCKUP */}
            <motion.div initial={{ opacity: 0, x: 20, y: 30 }} animate={{ opacity: 1, x: 0, y: [-5, 5, -5] }} transition={{ opacity: { duration: 0.8, delay: 0.2 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } }} className="absolute left-0 sm:left-[2%] md:left-[5%] top-10 sm:top-16 md:top-24 w-[55%] md:w-[45%] max-w-[500px] aspect-[4/3] bg-white rounded-lg md:rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden z-10">
              <div className="w-full h-4 sm:h-6 md:h-8 bg-gray-50 border-b border-gray-200 flex items-center px-2 md:px-3 gap-1 md:gap-1.5"><div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-red-400"></div><div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-yellow-400"></div><div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-green-400"></div></div>
              <div className="p-3 sm:p-4 md:p-6 h-full flex flex-col text-left">
                <div className="flex justify-between items-center mb-2 md:mb-6"><span className="text-[6px] sm:text-[8px] md:text-[10px] font-bold text-[#32a1d0] tracking-wider">WAKEUP</span><div className="flex gap-1 md:gap-3 text-[5px] sm:text-[6px] md:text-[8px] font-medium text-gray-500"><span>Home</span><span>About</span><span>Pricing</span></div></div>
                <h3 className="text-xs sm:text-base md:text-2xl font-bold text-gray-900 leading-tight mb-2 md:mb-3">Transforming <br /> technology for a <br /> smarter tomorrow.</h3>
                <div className="flex gap-1 md:gap-2 w-[90%] md:w-[80%] mb-2 md:mb-6"><div className="flex-1 bg-gray-50 border border-gray-200 rounded px-1 md:px-2 py-1 md:py-1.5 text-[6px] md:text-[10px] text-gray-400 flex items-center">Your email here...</div><div className="bg-[#32a1d0] text-white px-2 md:px-3 py-1 md:py-1.5 rounded text-[6px] md:text-[10px] font-medium flex items-center">Subscribe</div></div>
                <div className="flex-1 w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded md:rounded-lg overflow-hidden relative flex items-center justify-center border border-gray-200"><span className="text-xl md:text-4xl filter drop-shadow-sm">👩‍💻</span></div>
              </div>
            </motion.div>

            {/* RIGHT MOCKUP */}
            <motion.div initial={{ opacity: 0, x: -20, y: 30 }} animate={{ opacity: 1, x: 0, y: [5, -5, 5] }} transition={{ opacity: { duration: 0.8, delay: 0.4 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }} className="absolute right-0 sm:right-[2%] md:right-[5%] top-14 sm:top-20 md:top-32 w-[55%] md:w-[45%] max-w-[500px] aspect-[4/3] bg-white rounded-lg md:rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden z-10">
               <div className="w-full h-4 sm:h-6 md:h-8 bg-gray-50 border-b border-gray-200 flex items-center px-2 md:px-3 gap-1 md:gap-1.5"><div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-gray-300"></div><div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-gray-300"></div><div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-gray-300"></div></div>
              <div className="p-3 sm:p-4 md:p-6 h-full flex flex-col items-center">
                <div className="w-full flex justify-between items-center mb-2 md:mb-6"><span className="text-[6px] sm:text-[8px] md:text-[10px] font-bold text-[#92d050] tracking-wider">SEO DASH</span><div className="bg-gray-900 text-white px-1.5 md:px-2 py-0.5 rounded text-[5px] md:text-[8px] font-bold">Log in</div></div>
                <h3 className="text-xs sm:text-base md:text-2xl font-bold text-gray-900 text-center leading-tight mb-1 md:mb-2">Track your growth <br /> with WakeUp</h3>
                <p className="text-[5px] sm:text-[7px] md:text-[9px] text-gray-500 text-center mb-2 md:mb-5 max-w-[120px] md:max-w-[200px]">Real-time metrics, intuitive dashboards, and predictive analytics.</p>
                <div className="flex gap-1 md:gap-2 mb-2 md:mb-6"><div className="bg-gray-900 text-white px-2 md:px-4 py-1 md:py-1.5 rounded-full text-[6px] md:text-[10px] font-medium">Get Started</div><div className="bg-gray-100 text-gray-700 border border-gray-200 px-2 md:px-4 py-1 md:py-1.5 rounded-full text-[6px] md:text-[10px] font-medium">Learn More</div></div>
                <div className="w-full flex-1 bg-gray-50 rounded md:rounded-lg border border-gray-200 p-2 md:p-4 flex flex-col relative overflow-hidden"><div className="text-[5px] md:text-[9px] text-gray-500 mb-1 md:mb-2">Organic Traffic</div><div className="flex justify-between items-end h-full gap-1 md:gap-2 relative z-10">{[30, 50, 40, 70, 55, 90, 60, 100].map((h, i) => (<div key={i} className="flex-1 bg-gradient-to-t from-[#32a1d0] to-[#32a1d0]/40 rounded-t-sm" style={{ height: `${h}%`, opacity: 0.8 }}></div>))}</div></div>
              </div>
            </motion.div>

            {/* CENTER MOCKUP */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: [-2, 2, -2] }} transition={{ opacity: { duration: 0.8 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }} className="absolute left-1/2 -translate-x-1/2 top-0 w-[90%] sm:w-[85%] md:w-[65%] lg:w-[55%] max-w-[700px] aspect-[16/10] bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-gray-300 overflow-hidden z-20">
              <div className="w-full h-5 sm:h-8 md:h-10 bg-gray-50 border-b border-gray-200 flex items-center px-2 md:px-4 justify-between"><div className="flex gap-1 md:gap-1.5"><div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-[#ff5f56]"></div><div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]"></div><div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-[#27c93f]"></div></div><div className="w-1/3 h-2 sm:h-3 md:h-4 bg-white border border-gray-200 rounded-full flex items-center justify-center"><span className="text-[5px] sm:text-[6px] md:text-[8px] text-gray-500 hidden sm:block">wakeupsolution.com</span></div><div className="w-8 md:w-12"></div></div>
              <div className="p-3 sm:p-6 md:p-10 h-full flex flex-col items-center relative overflow-hidden text-center">
                <div className="absolute top-10 md:top-20 -left-5 md:-left-10 w-24 md:w-48 h-24 md:h-48 bg-[#32a1d0]/10 rounded-full blur-2xl md:blur-3xl"></div><div className="absolute top-20 md:top-40 -right-5 md:-right-10 w-24 md:w-48 h-24 md:h-48 bg-[#92d050]/10 rounded-full blur-2xl md:blur-3xl"></div>
                <div className="w-full flex justify-center gap-3 md:gap-6 mb-3 md:mb-8 text-[6px] sm:text-[8px] md:text-xs font-semibold text-gray-500"><span className="text-[#32a1d0]">Home</span><span>Company</span><span>Pricing</span><span>Network</span></div>
                <div className="inline-flex items-center gap-1 md:gap-1.5 text-[5px] sm:text-[7px] md:text-[9px] font-bold text-[#32a1d0] bg-[#32a1d0]/10 px-1.5 md:px-2 py-0.5 md:py-1 rounded mb-2 md:mb-4 z-10"><span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#32a1d0]"></span> AGENCY SERVICES</div>
                <h2 className="text-base sm:text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2 md:mb-4 z-10">Empowering Businesses with <br />Smart Digital Solutions</h2>
                <p className="text-[7px] sm:text-[10px] md:text-xs text-gray-600 mb-3 md:mb-6 max-w-[150px] sm:max-w-xs md:max-w-sm z-10 leading-snug">WakeUp Solution helps businesses grow with modern websites, scalable web applications, and powerful digital solutions designed for performance, security, and long-term success.</p>
                <div className="flex gap-2 md:gap-3 mb-3 md:mb-8 z-10"><div className="bg-[#32a1d0] text-white px-3 md:px-5 py-1 md:py-2 rounded-full text-[7px] md:text-xs font-semibold shadow-md">Get Started</div><div className="bg-white text-gray-700 border border-gray-300 px-3 md:px-5 py-1 md:py-2 rounded-full text-[7px] md:text-xs font-semibold shadow-sm">Our Services</div></div>
                <div className="w-full max-w-[180px] sm:max-w-xs md:max-w-sm flex-1 bg-gradient-to-tr from-gray-50 to-gray-100 rounded-lg md:rounded-xl shadow-lg border border-gray-200 p-1 md:p-2 z-10 flex items-center justify-center relative overflow-hidden"><span className="text-2xl md:text-6xl filter drop-shadow-md z-10 relative">🚀</span></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: MARQUEE SCROLL
      ========================================= */}
      <section className="w-full relative overflow-hidden py-10 z-10 border-b border-gray-200 bg-white">
        <p className="text-gray-500 text-sm mb-8 text-center font-medium">Trusted to scale businesses and drive new revenue</p>
        <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
        <motion.div className="flex w-max" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex items-center justify-center mx-6 md:mx-12 opacity-40 hover:opacity-100 transition-opacity duration-300">
              <span className="font-bold text-lg md:text-2xl tracking-widest text-gray-800 uppercase whitespace-nowrap">{tech}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* =========================================
          SECTION 3: SERVICES (Automatic Scroll Bend)
      ========================================= */}
      <section className="relative py-24 md:py-32 px-6 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4">
              Simplifying <span className="bg-gradient-to-r from-[#32a1d0] to-[#92d050] bg-clip-text text-transparent font-bold">complexity</span> with <br className="hidden md:block"/> structured steps
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 perspective-[1500px]">
            {/* Card 1: Web Dev */}
            <motion.div initial={{ opacity: 0, rotateY: 0, rotateZ: 0, y: 50 }} whileInView={{ opacity: 1, rotateY: 10, rotateZ: -2, y: 0, scale: 1.02 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.8, type: "spring" }} className="flex flex-col bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
              <div className="p-8 pb-0 flex-1"><div className="w-10 h-10 mb-6 text-[#32a1d0]"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></div><h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3><p className="text-sm text-gray-600 leading-relaxed mb-8">Build high-performance, scalable static sites and platforms that deliver unmatched speed and reliability.</p></div>
              <div className="px-6 pb-6"><div className="bg-gray-50 rounded-xl p-5 border border-gray-200 h-[180px] flex flex-col justify-between overflow-hidden"><div className="text-xs font-semibold text-gray-500">Site Performance</div><div className="flex items-end justify-between h-24 gap-2 mt-4 relative">{[40, 60, 30, 85, 50, 100].map((h, i) => (<div key={i} className={`w-full rounded-t-sm ${h === 100 ? 'bg-[#92d050]' : h === 85 ? 'bg-[#32a1d0]' : 'bg-gray-200'}`} style={{ height: `${h}%` }}></div>))}</div></div></div>
            </motion.div>
            {/* Card 2: App Dev */}
            <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: -20, scale: 1.05 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.8, type: "spring", delay: 0.1 }} className="flex flex-col bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative z-10">
              <div className="p-8 pb-0 flex-1"><div className="w-10 h-10 mb-6 text-[#92d050]"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></div><h3 className="text-xl font-bold text-gray-900 mb-2">App Development</h3><p className="text-sm text-gray-600 leading-relaxed mb-8">Seamless, user-centric web and mobile applications engineered to boost engagement and retention.</p></div>
              <div className="px-6 pb-6 h-[200px] relative flex justify-center items-end"><div className="absolute w-[80%] h-24 bg-gray-100 rounded-t-2xl border-t border-gray-200 -translate-y-12"></div><div className="absolute w-[90%] h-24 bg-gray-50 rounded-t-2xl border-t border-gray-200 -translate-y-6"></div><div className="relative w-full h-32 bg-white rounded-2xl border border-gray-200 p-4 shadow-xl overflow-hidden"><div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border-[8px] border-white bg-gradient-to-t from-[#32a1d0] to-[#92d050]"></div><div className="flex justify-between items-start mb-2"><div className="text-sm font-bold text-gray-800">App Engagement</div><div className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-[10px]">↑</div></div><div className="text-[10px] text-gray-500 mb-0.5">Monthly Active Users</div><div className="text-2xl font-extrabold text-gray-900 tracking-tight">256,589</div><div className="text-[9px] text-[#92d050] font-bold mt-1">↑ 18.4% retention growth</div></div></div>
            </motion.div>
            {/* Card 3: SEO */}
            <motion.div initial={{ opacity: 0, rotateY: 0, rotateZ: 0, y: 50 }} whileInView={{ opacity: 1, rotateY: -10, rotateZ: 2, y: 0, scale: 1.02 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.8, type: "spring", delay: 0.2 }} className="flex flex-col bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
              <div className="p-8 pb-0 flex-1"><div className="w-10 h-10 mb-6 text-[#32a1d0]"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div><h3 className="text-xl font-bold text-gray-900 mb-2">SEO & Digital Growth</h3><p className="text-sm text-gray-600 leading-relaxed mb-8">Dominate search rankings and Google My Business to scale outbound sales and drive organic revenue.</p></div>
              <div className="px-6 pb-6"><div className="flex flex-col gap-3 h-[180px] justify-end"><div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center gap-3"><div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center text-gray-700 text-xs border border-gray-100">📈</div><div className="flex-1"><div className="text-sm font-bold text-gray-900">Page Rank</div><div className="text-[10px] text-gray-500">Google Search</div></div><div className="text-xs font-bold text-[#92d050]">#1 Spot</div></div><div className="bg-blue-50/50 border border-[#32a1d0]/20 rounded-xl p-3 flex items-center gap-3"><div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center text-gray-700 text-xs border border-blue-100">⚡</div><div className="flex-1"><div className="text-sm font-bold text-gray-900">20k+</div><div className="text-[10px] text-[#32a1d0] font-medium">Organic Traffic</div></div><div className="text-xs font-bold text-[#92d050]">+45.2%</div></div><div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center gap-3"><div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center text-gray-700 text-xs border border-gray-100">⭐</div><div className="flex-1"><div className="text-sm font-bold text-gray-900">256,589</div><div className="text-[10px] text-gray-500">Likes</div></div><div className="text-xs font-bold text-[#32a1d0]">+23.54%</div></div></div></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: KEY FEATURES GRID 
      ========================================= */}
      <section className="relative py-24 md:py-32 px-6 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-500">
              Discover the <span className="text-gray-900 font-bold">key features</span> that redefine <br className="hidden md:block"/> digital growth
            </h2>
          </motion.div>
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {[
                { title: "Server-rendering", desc: "Deliver faster performance and improved SEO.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /> },
                { title: "Speed optimize", desc: "Enhance site performance with fast optimization tools.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /> },
                { title: "Project analysis", desc: "Gain clarity and insights for better data-driven decisions.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> },
                { title: "API integration", desc: "Integrate your apps effortlessly with scalable APIs.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> }
              ].map((feat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative group rounded-3xl p-[1.5px] overflow-hidden transition-all duration-300 hover:-translate-y-2 bg-gray-100 hover:shadow-xl hover:shadow-[#32a1d0]/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#32a1d0] via-purple-400 to-[#92d050] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div><div className="relative h-full bg-white group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-blue-50/50 rounded-[23px] p-8 flex flex-col items-center text-center transition-colors duration-500"><div className="mb-6 text-gray-400 group-hover:text-[#32a1d0] transition-colors duration-300"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">{feat.icon}</svg></div><h4 className="text-gray-900 font-bold text-lg mb-3">{feat.title}</h4><p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p></div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-[75%]">
              {[
                { title: "Customization", desc: "Tailor platforms to your exact business needs.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /> },
                { title: "Payment gateways", desc: "Enable secure transactions with trusted integrations.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /> },
                { title: "Building & strategy", desc: "Develop strong foundations and smart SEO strategies.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /> }
              ].map((feat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + (i * 0.1) }} className="relative group rounded-3xl p-[1.5px] overflow-hidden transition-all duration-300 hover:-translate-y-2 bg-gray-100 hover:shadow-xl hover:shadow-[#92d050]/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#32a1d0] via-purple-400 to-[#92d050] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div><div className="relative h-full bg-white group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-green-50/50 rounded-[23px] p-8 flex flex-col items-center text-center transition-colors duration-500"><div className="mb-6 text-gray-400 group-hover:text-[#92d050] transition-colors duration-300"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">{feat.icon}</svg></div><h4 className="text-gray-900 font-bold text-lg mb-3">{feat.title}</h4><p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: FINAL CTA & DASHBOARD MOCKUP
      ========================================= */}
      <section className="relative py-32 px-6 bg-[#f8f9fa]">
        
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full bg-[#32a1d0]/10 blur-[150px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full bg-white rounded-[2.5rem] border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row items-center relative"
          >
            
            {/* Left Content Area */}
            <div className="p-10 lg:p-16 flex-1 text-left relative z-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Scale your business <br className="hidden lg:block"/> 
                <span className="text-[#32a1d0]">with full transparency</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 max-w-md">
                Get access to your dedicated client portal. Track SEO rankings, monitor e-commerce conversions, and collaborate with our development team in real-time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white shadow-md' text-gray-900 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-md">
                  Start your project
                </Link>
                <Link href="/services" className="bg-white border border-gray-300 text-gray-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
                  View our work
                </Link>
              </div>
            </div>

            {/* Right Dashboard UI Mockup */}
            <div className="w-full lg:w-[45%] h-[400px] lg:h-[500px] relative p-8 lg:p-0 flex items-center justify-end overflow-hidden lg:rounded-r-[2.5rem] bg-gray-50/50">
               
               {/* Massive Blue/Green Glow behind UI */}
               <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] bg-[#32a1d0]/20 blur-[100px] rounded-full"></div>
               <div className="absolute top-1/2 right-40 -translate-y-1/2 w-[300px] h-[300px] bg-[#92d050]/15 blur-[100px] rounded-full"></div>

               {/* The Dashboard App Card */}
               <motion.div 
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="relative z-10 w-[120%] lg:w-[150%] max-w-[600px] h-[380px] bg-white border border-gray-200 rounded-l-3xl rounded-r-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex"
               >
                 
                 {/* App Sidebar */}
                 <div className="w-16 md:w-48 border-r border-gray-100 bg-gray-50 py-6 px-4 flex flex-col gap-6 rounded-l-3xl">
                    <div className="w-8 h-8 rounded-full bg-[#32a1d0]/10 flex items-center justify-center text-[#32a1d0] mb-4 font-bold">W</div>
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded ${i === 1 ? 'bg-[#32a1d0]' : 'bg-gray-200'}`}></div>
                        <div className={`h-2 rounded hidden md:block ${i === 1 ? 'bg-gray-800 w-16' : 'bg-gray-300 w-12'}`}></div>
                      </div>
                    ))}
                 </div>

                 {/* App Main Content Area */}
                 <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 bg-white rounded-r-xl">
                    <div className="text-gray-900 font-bold mb-2">Performance Insights</div>
                    
                    {/* Top Stats Row */}
                    <div className="flex items-center gap-6 mb-4">
                      <div className="w-12 h-12 rounded-full border-[4px] border-gray-100 border-t-[#32a1d0] border-r-[#32a1d0] border-b-[#32a1d0]"></div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">24.5k / 30k (Traffic Goal)</div>
                        <div className="text-[10px] text-[#92d050] font-bold mt-1">↑ 12.4% Since last week</div>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-4 relative overflow-hidden flex flex-col">
                      <div className="text-xs text-gray-500 font-semibold mb-4 z-10">Organic Traffic & Conversions</div>
                      
                      {/* Fake Line Chart SVG */}
                      <svg className="w-full h-full absolute bottom-0 left-0" preserveAspectRatio="none" viewBox="0 0 100 50">
                         {/* Blue Line (Traffic) */}
                         <path d="M0,40 Q20,30 40,45 T70,25 T100,35 L100,50 L0,50 Z" fill="rgba(50, 161, 208, 0.15)" />
                         <path d="M0,40 Q20,30 40,45 T70,25 T100,35" fill="none" stroke="#32a1d0" strokeWidth="1.5" />
                         
                         {/* Green Line (Conversions) */}
                         <path d="M0,45 Q20,40 40,25 T70,35 T100,20 L100,50 L0,50 Z" fill="rgba(146, 208, 80, 0.15)" />
                         <path d="M0,45 Q20,40 40,25 T70,35 T100,20" fill="none" stroke="#92d050" strokeWidth="1.5" />
                         
                         {/* Highlight Dot */}
                         <circle cx="70" cy="35" r="2.5" fill="#32a1d0" stroke="white" strokeWidth="1" />
                         <line x1="70" y1="35" x2="70" y2="50" stroke="#32a1d0" strokeWidth="0.5" strokeDasharray="2 2" />
                      </svg>

                      {/* Tooltip Overlay */}
                      <div className="absolute top-4 left-[60%] bg-white border border-gray-100 rounded-lg p-2 shadow-lg z-20">
                         <div className="text-[8px] font-bold text-[#32a1d0]">● Traffic: 8,450</div>
                         <div className="text-[8px] font-bold text-[#92d050]">● Sales: 342</div>
                      </div>
                    </div>

                 </div>

                 {/* Floating Text Editor Toolbar Overlay */}
                 <motion.div 
                   animate={{ y: [-5, 5, -5] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-[-20px] md:bottom-10 right-4 md:right-[-30px] bg-white border border-gray-200 rounded-xl p-3 shadow-xl flex items-center gap-4 text-gray-500 z-30"
                 >
                    <span className="font-bold px-1 hover:text-gray-900 cursor-pointer">B</span>
                    <span className="underline px-1 hover:text-gray-900 cursor-pointer">U</span>
                    <span className="italic px-1 hover:text-gray-900 cursor-pointer">I</span>
                    <div className="w-[1px] h-4 bg-gray-200 mx-1"></div>
                    <svg className="w-4 h-4 hover:text-gray-900 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    <span className="font-bold px-1 hover:text-gray-900 cursor-pointer">H1 ▾</span>
                    <div className="w-[1px] h-4 bg-gray-200 mx-1"></div>
                    <svg className="w-5 h-5 hover:text-gray-900 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                 </motion.div>

               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}