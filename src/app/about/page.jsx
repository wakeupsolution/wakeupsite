"use client";
import { motion } from "framer-motion";

export default function About() {
  const techStack = [
    "AWS","|","PostgreSQL","|", "Node.js", "|","React.js", "|","Next.js","|", 
    "Tailwind CSS","|", "Vite", "|","WordPress","|", "React Native","|", "Figma", "|","Docker","|",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  const integrations = [
    { name: "Figma", type: "Design", x: "10%", y: "45%", delay: 0, color: "from-pink-500 to-purple-500", 
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white"><path d="M12 12C12 14.2091 10.2091 16 8 16C5.79086 16 4 14.2091 4 12C4 9.79086 5.79086 8 8 8C10.2091 8 12 9.79086 12 12ZM12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12ZM12 12V20C12 21.1046 11.1046 22 10 22C8.89543 22 8 21.1046 8 20C8 18.8954 8.89543 18 10 18H12V12Z" fill="currentColor"/></svg>
    },
    { name: "React", type: "Frontend", x: "28%", y: "65%", delay: 0.5, color: "from-blue-400 to-cyan-400", 
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white"><circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="2" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="2" transform="rotate(150 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="2" transform="rotate(90 12 12)"/></svg>
    },
    { name: "AWS", type: "Cloud", x: "50%", y: "15%", delay: 0.2, color: "from-orange-400 to-amber-600", 
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white"><path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1331 20.1786 10.1914 17.8687 10.0152C17.3712 6.62141 14.4503 4 11 4C7.13401 4 4 7.13401 4 11C4 11.2341 4.01148 11.4655 4.03378 11.6933C2.29623 12.394 1 14.0531 1 16C1 18.7614 3.23858 21 6 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    { name: "Node.js", type: "Backend", x: "72%", y: "55%", delay: 0.8, color: "from-green-400 to-emerald-600", 
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white"><path d="M12 2L20 6.5V17.5L12 22L4 17.5V6.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12L4 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    { name: "PostgreSQL", type: "Database", x: "90%", y: "40%", delay: 0.3, color: "from-blue-600 to-indigo-800", 
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white"><ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="2"/><path d="M4 6V18C4 19.6569 7.58172 21 12 21C16.4183 21 20 19.6569 20 18V6" stroke="currentColor" strokeWidth="2"/><path d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12" stroke="currentColor" strokeWidth="2"/></svg>
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#f8f9fa] text-gray-900 py-24 px-6 font-sans overflow-hidden flex flex-col items-center justify-center">
      
      {/* Abstract Background Glows (Light Mode) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-[#32a1d0] rounded-full mix-blend-multiply filter blur-[150px] animate-pulse"></div>
        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-[#92d050] rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* 1. Hero Typography */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-gray-900">
            Advanced digital solutions built for <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#32a1d0] via-purple-500 to-[#92d050] bg-clip-text text-transparent font-bold">speed</span> and simplicity
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Founded in 2025 by Raj Hussain and Rakesh, WakeUp Solution focuses on building fast, modern websites, scalable e-commerce platforms, and helping businesses grow with powerful SEO strategies.
          </p>
        </motion.div>

        {/* 2. The 3D Floating Cards Container */}
        <div className="relative w-full max-w-3xl h-[450px] md:h-[500px] flex items-center justify-center perspective-[1200px] mb-20">
          <motion.div animate={{ y: [-8, 8, -8], rotateZ: [-6, -4, -6] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute left-4 md:left-[10%] w-[320px] md:w-[400px] z-0">
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-gray-200 via-gray-100 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <div className="bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl h-full border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gray-900 font-bold">Core Capabilities</h3>
                  <div className="flex gap-1"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-[#32a1d0]/10 flex items-center justify-center text-[#32a1d0]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></div>
                    <div><div className="text-sm font-semibold text-gray-900">Full-Stack Development</div><div className="text-xs text-gray-500">React.js, Node.js & Next.js</div></div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-[#92d050]/10 flex items-center justify-center text-[#92d050]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></div>
                    <div><div className="text-sm font-semibold text-gray-900">E-Commerce & Apps</div><div className="text-xs text-gray-500">Scalable digital products</div></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div animate={{ y: [8, -8, 8], rotateZ: [4, 6, 4] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute right-4 md:right-[10%] w-[320px] md:w-[420px] z-10">
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-[#32a1d0] via-purple-500 to-[#92d050] shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <div className="bg-white/95 backdrop-blur-2xl p-6 md:p-8 rounded-2xl h-full">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-gray-900 font-bold">Scale & Growth</h3>
                  <div className="flex gap-1"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div></div>
                </div>
                <div className="flex flex-col items-center justify-center mb-6">
                  <div className="relative w-32 h-32 rounded-full border-[6px] border-gray-100 flex items-center justify-center shadow-sm bg-white">
                    <svg className="absolute top-[-6px] left-[-6px] w-[calc(100%+12px)] h-[calc(100%+12px)] -rotate-90"><circle cx="64" cy="64" r="64" fill="transparent" stroke="url(#gradient)" strokeWidth="6" strokeDasharray="400" strokeDashoffset="100" className="text-[#32a1d0]" /><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#32a1d0" /><stop offset="100%" stopColor="#92d050" /></linearGradient></defs></svg>
                    <span className="text-2xl font-extrabold text-gray-900">100%</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 font-medium">Maximized Scalability</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. Infinite Scrolling Marquee */}
        <div className="w-full relative overflow-hidden mb-32">
          <p className="text-gray-500 text-sm mb-8 text-center relative z-20 font-medium">Trusted to scale businesses and drive new revenue</p>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#f8f9fa] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#f8f9fa] to-transparent z-20 pointer-events-none"></div>
          <motion.div className="flex w-max" animate={{ x: ["0%", "-20%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
            {[...techStack, ...techStack].map((tech, index) => (
              <div key={index} className="flex items-center justify-center mx-8 md:mx-12 opacity-40 hover:opacity-100 transition-opacity duration-300">
                <span className="font-bold text-xl md:text-2xl tracking-widest text-gray-800 uppercase whitespace-nowrap">{tech}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 4. SERVICES GRID SECTION */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="w-full flex flex-col items-center mb-32">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-500 mb-4 tracking-tight">Experience <span className="text-gray-900 font-bold">seamless integration</span><br /> across <span className="text-gray-900 font-bold">your systems</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Service Card 1 */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col hover:border-gray-300 hover:shadow-lg transition-all shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">E-commerce Solutions</h3>
              <p className="text-sm text-gray-600 text-center mb-10">Protect and grow your revenue with scalable, high-conversion online stores.</p>
              <div className="relative mt-auto h-48 flex justify-center items-end pb-2">
                <div className="absolute w-[80%] h-32 bg-gray-100 rounded-t-2xl -translate-y-8"></div>
                <div className="absolute w-[90%] h-32 bg-gray-50 rounded-t-2xl -translate-y-4 backdrop-blur-sm"></div>
                <div className="relative w-full h-36 rounded-2xl bg-gradient-to-r from-cyan-400 to-orange-500 p-[1.5px]">
                  <div className="w-full h-full bg-white rounded-[15px] p-5 flex flex-col justify-between overflow-hidden relative shadow-md">
                    <div className="text-xs text-gray-500 font-bold">Monthly Revenue</div>
                    <div className="z-10"><div className="text-2xl font-extrabold text-gray-900">$50,530.00 <span className="text-xs text-gray-500 font-normal">(USD)</span></div><div className="text-[10px] font-bold text-green-500 mt-1">↑ 20% increase compared to last week</div></div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-t from-orange-500 to-yellow-400 border-[8px] border-white"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Service Card 2 */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col hover:border-gray-300 hover:shadow-lg transition-all shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Web & App Ecosystems</h3>
              <p className="text-sm text-gray-600 text-center mb-10">Connect your tech stack seamlessly with React, Node.js, and API integrations.</p>
              <div className="relative mt-auto h-48 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-200">
                <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 300 200" fill="none"><path d="M70 100 L150 50 L200 80" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 4" /><path d="M70 100 L140 150 L220 120" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 4" /><path d="M150 50 L230 40" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 4" /></svg>
                <div className="absolute left-8 w-16 h-16 bg-[#ff6b6b] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(255,107,107,0.2)] z-10 border-4 border-white"><div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full"></div></div></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center overflow-hidden z-10 shadow-sm"><div className="w-full h-full bg-yellow-400"></div></div>
                <div className="absolute bottom-6 left-[45%] w-8 h-8 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center overflow-hidden z-10 shadow-sm"><div className="w-full h-full bg-gray-300"></div></div>
                <div className="absolute top-[35%] right-[30%] w-8 h-8 bg-blue-500 rounded-lg border-2 border-white flex items-center justify-center z-10 text-white text-xs shadow-sm">⚛️</div>
                <div className="absolute bottom-[20%] right-12 w-8 h-8 bg-orange-500 rounded-lg border-2 border-white flex items-center justify-center z-10 text-white text-xs shadow-sm">⚙️</div>
              </div>
            </motion.div>
            {/* Service Card 3 */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col hover:border-gray-300 hover:shadow-lg transition-all shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">SEO & Digital Marketing</h3>
              <p className="text-sm text-gray-600 text-center mb-10">Dominate search results and Google My Business to scale outbound revenue.</p>
              <div className="relative mt-auto h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-2xl border-t border-l border-r border-gray-200 pt-4 px-4 overflow-hidden shadow-inner">
                <div className="flex gap-1.5 mb-6"><div className="w-2.5 h-2.5 rounded-full bg-red-400"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div><div className="w-2.5 h-2.5 rounded-full bg-green-400"></div></div>
                <div className="flex gap-4">
                  <div className="flex-1 bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <div className="w-full h-2 bg-gray-200 rounded-full mb-2"></div><div className="w-3/4 h-2 bg-gray-200 rounded-full mb-6"></div><div className="w-full h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                  </div>
                  <div className="w-[40%] flex flex-col gap-3">
                    <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm flex items-center justify-between"><div className="w-6 h-2 bg-gray-200 rounded-full"></div><div className="w-6 h-6 bg-pink-100 rounded-md"></div></div>
                    <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm flex items-center justify-between"><div className="w-6 h-6 bg-blue-100 rounded-md"></div><div className="flex flex-col gap-1"><div className="w-6 h-1 bg-gray-200 rounded-full"></div><div className="w-4 h-1 bg-gray-200 rounded-full"></div></div></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

     {/* 5. ORBITAL INTEGRATIONS SECTION */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-50px" }} className="relative w-full overflow-hidden flex flex-col items-center pt-10 md:pt-20 pb-16 md:pb-32">
          
          <div className="text-center mb-6 md:mb-16 relative z-20 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-500 mb-2 md:mb-4 tracking-tight leading-tight">Seamless <span className="bg-gradient-to-r from-[#32a1d0] via-purple-500 to-[#92d050] bg-clip-text text-transparent font-bold">integrations</span> with<br className="hidden sm:block" /> <span className="text-gray-900 font-bold">your existing tools</span></h2>
          </div>
          
          {/* Orbital Container - Single Responsive Block */}
          <div className="relative w-full flex justify-center items-center mt-4 md:mt-20 flex-wrap gap-6 md:gap-0 md:h-[500px] lg:h-[600px]">
            
            {/* The Desktop Orbital Rings - Hidden on Mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] hidden md:block scale-[0.75] lg:scale-[0.9] xl:scale-100 pointer-events-none">
              <div className="absolute inset-0 rounded-full border border-gray-200"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full border border-gray-300"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#32a1d0]/30"></div>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full"><div className="absolute top-[15%] left-[15%] w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_10px_#fdba74]"></div></motion.div>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full"><div className="absolute top-[5%] right-[30%] w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#c084fc]"></div></motion.div>
            </div>

            {/* The Icons - Stacked on Mobile, Orbital on Desktop */}
            <div className="flex md:hidden flex-wrap justify-center gap-6 sm:gap-8 w-full max-w-sm px-4 relative z-20">
              {integrations.map((item, index) => (
                <motion.div key={`mob-${index}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="flex flex-col items-center w-[35%] sm:w-[25%]">
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm mb-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-inner`}>{item.icon}</div>
                  </div>
                  <div className="text-gray-900 font-bold text-sm text-center">{item.name}</div>
                  <div className="text-gray-500 text-[10px] mt-0.5 font-medium text-center uppercase tracking-wider">{item.type}</div>
                </motion.div>
              ))}
            </div>

            {/* The Desktop Floating Icons */}
            {integrations.map((item, index) => (
              <motion.div 
                key={`desk-${index}`} 
                className="absolute hidden md:flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 group cursor-default" 
                style={{ top: item.y, left: item.x }} 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
              >
                <div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] group-hover:border-[#32a1d0] group-hover:shadow-lg transition-all duration-300 relative">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} rounded-full opacity-0 group-hover:opacity-10 transition-opacity blur-md`}></div>
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-inner relative z-10`}>{item.icon}</div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-gray-900 font-bold text-xl">{item.name}</div>
                  <div className="text-gray-500 text-sm mt-1 font-medium">{item.type}</div>
                </div>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* 6. NEW: FINAL BUSINESS GROWTH SECTION */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="w-full flex flex-col lg:flex-row items-center gap-16 pt-20 pb-32"
        >
          {/* Left Text Content - WakeUp Solution Specific */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-800 tracking-tight mb-6">
              Building tools that drive <br/>
              <span className="bg-gradient-to-r from-[#32a1d0] via-purple-500 to-[#92d050] bg-clip-text text-transparent font-bold">business</span> growth
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
              At WakeUp Solution, we don't just write code. We create powerful, scalable web applications and e-commerce platforms that streamline your operations, improve performance, and support sustainable business growth.
            </p>
            
            <ul className="space-y-5 mb-10">
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-gray-800 font-semibold">Driven by smart innovation (React, Next.js)</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-gray-800 font-semibold">ROI-focused product development</span>
              </li>
            </ul>

            <button className="bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white shadow-md' transition-colors text-white hover:text-gray-900 px-8 py-3.5 rounded-full font-bold shadow-[0_10px_20px_rgba(97,175,219,0.3)] hover:shadow-[0_10px_20px_rgba(146,208,80,0.3)]">
              Discover more
            </button>
          </div>

          {/* Right Graphic Content - Pure Tailwind UI Mockup */}
          <div className="flex-1 w-full max-w-xl relative">
            {/* Gradient Border Container */}
            <div className="relative p-[1.5px] rounded-[1.5rem] bg-gradient-to-tr from-cyan-400 via-transparent to-orange-400 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              
              {/* Main Dashboard UI Background */}
              <div className="bg-gray-50 rounded-[1.5rem] overflow-hidden flex h-[450px] relative border border-gray-200">
                
                {/* Purple Ambient Glow behind sidebar */}
                <div className="absolute top-1/2 -left-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-[50px] opacity-20"></div>

                {/* Sidebar Mockup */}
                <div className="w-[35%] bg-white h-full border-r border-gray-200 p-5 flex flex-col gap-6 relative z-10 shadow-sm">
                  <div className="text-sm font-bold text-gray-900 mb-2">Welcome back !</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-[-10px]">Main menu</div>
                  
                  {/* Active Menu Item */}
                  <div className="bg-purple-50 p-2.5 rounded-lg border border-purple-100 flex items-center gap-3">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                    <span className="text-xs text-purple-700 font-bold">Dashboard</span>
                  </div>
                  
                  {/* Inactive Menu Items */}
                  {['Insight', 'Invoices', 'Inbox', 'Products'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-2.5 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
                      <div className="w-4 h-4 rounded bg-gray-200"></div>
                      <span className="text-xs font-semibold">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Main Dashboard Area Mockup */}
                <div className="flex-1 p-5 flex flex-col gap-4">
                  {/* Search Bar */}
                  <div className="w-full bg-white rounded-full h-8 flex items-center px-4 border border-gray-200 shadow-sm">
                    <svg className="w-3 h-3 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <div className="w-24 h-1.5 bg-gray-300 rounded-full"></div>
                  </div>

                  {/* Main Graph Card */}
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex-1 flex flex-col justify-between">
                    <div className="text-xs font-bold text-gray-900 mb-4">Spending statistics</div>
                    {/* Simulated Bar Chart */}
                    <div className="flex items-end justify-between h-32 px-2 pb-2 border-b border-gray-100 gap-1.5">
                      {[40, 60, 30, 80, 50, 90, 40, 70, 60, 100].map((height, i) => (
                        <div key={i} className="w-full bg-gray-100 rounded-t-sm flex items-end justify-center group" style={{ height: `${height}%` }}>
                          {/* Highlight Active Bar */}
                          {i === 5 && <div className="w-full h-full bg-purple-500 rounded-t-sm shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Stats Row */}
                  <div className="flex gap-4">
                    <div className="flex-1 bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="text-[10px] font-bold text-gray-500 mb-1">Total income</div>
                      <div className="text-lg font-extrabold text-gray-900">$50,530.00</div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="text-[10px] font-bold text-gray-500 mb-1">Total expense</div>
                      <div className="text-lg font-extrabold text-gray-900">$19,760.00</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Top Card (Users Stat) */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 right-8 bg-white p-4 rounded-xl border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center gap-4 z-20 min-w-[200px]"
              >
                {/* Floating Green SVG Element mimicking the pie chart */}
                <svg className="absolute -top-8 -right-4 w-16 h-16 text-[#00d084] drop-shadow-[0_10px_15px_rgba(0,208,132,0.3)]" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 50 L50 0 A50 50 0 0 1 100 50 Z" />
                </svg>

                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-purple-500 p-0.5">
                  <div className="w-full h-full bg-white rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gray-300"></div> {/* Avatar Placeholder */}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-extrabold text-gray-900">256,589</div>
                  <div className="text-xs font-medium text-gray-500">Happy users</div>
                </div>
                <div className="ml-auto text-xs text-green-600 font-bold">+20.36%</div>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}