"use client";
import { motion } from "framer-motion";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section className="relative min-h-screen bg-[#f8f9fa] text-gray-900 py-24 px-6 font-sans overflow-hidden">
      
      {/* Background Glows to match the site theme (Light Mode) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-[#32a1d0] rounded-full mix-blend-multiply filter blur-[150px] animate-pulse"></div>
        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-[#92d050] rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: Typography & 3D Graphic */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex-1 w-full"
        >
          {/* Customer Badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center overflow-hidden"><div className="w-full h-full bg-[#32a1d0]"></div></div>
              <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center overflow-hidden"><div className="w-full h-full bg-[#92d050]"></div></div>
              <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center overflow-hidden"><div className="w-full h-full bg-gray-400"></div></div>
            </div>
            <span className="text-sm font-medium text-gray-700">50m+ Happy customers</span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-gray-800 mb-12">
            Start Your Next Project <br />
             <span className="bg-gradient-to-r from-[#32a1d0] via-blue-500 to-[#92d050] bg-clip-text text-transparent font-bold"> With Us</span>
          </h2>

          {/* 3D Graphic Construction */}
          <div className="relative w-full max-w-sm mt-12 mx-auto lg:mx-0 perspective-[1000px]">
            {/* Background Glow Layer */}
            <motion.div 
              animate={{ rotateZ: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-[#32a1d0] to-[#92d050] rounded-3xl scale-[1.15] translate-y-6 opacity-30 shadow-2xl"
            ></motion.div>

            {/* Main Light Card */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 p-[2px] rounded-3xl bg-gradient-to-b from-[#32a1d0] to-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              <div className="bg-white rounded-[23px] p-8 h-full">
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Web Solutions</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Grow your business with high-performance websites and web applications.
We build fast, secure, and SEO-optimized digital solutions designed to scale as your business expands.
                </p>

                {/* Inner UI Card Mockup */}
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-200 overflow-hidden shadow-sm">
                  {/* Subtle top glow */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#32a1d0]/50 to-[#92d050]/50"></div>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-sm font-bold text-gray-900">SEO & Performance</div>
                    <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-[#92d050] text-xs font-bold">↑</div>
                  </div>

                  <div className="mb-2 text-[10px] text-gray-500 font-medium">Global Organic Reach</div>
                  <div className="text-xl font-extrabold text-gray-900 mb-1">124,500 <span className="text-[10px] font-normal text-gray-500">(Monthly Visitors)</span></div>
                  <div className="text-[8px] font-bold text-[#92d050]">↑ 64% increase in search visibility</div>

                  {/* Decorative corner element */}
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full border-[8px] border-white bg-gradient-to-t from-[#32a1d0] to-[#92d050]"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: The Form */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex-1 w-full max-w-xl mx-auto"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Your name*</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:border-[#32a1d0] focus:ring-1 focus:ring-[#32a1d0] outline-none transition-all shadow-sm" 
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Email*</label>
                <input 
                  type="email" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:border-[#32a1d0] focus:ring-1 focus:ring-[#32a1d0] outline-none transition-all shadow-sm" 
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Phone*</label>
                <input 
                  type="tel" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:border-[#32a1d0] focus:ring-1 focus:ring-[#32a1d0] outline-none transition-all shadow-sm" 
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Service Type Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Service Type*</label>
                <div className="relative">
                  <select 
                    defaultValue=""
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:border-[#32a1d0] focus:ring-1 focus:ring-[#32a1d0] outline-none transition-all shadow-sm appearance-none cursor-pointer" 
                  >
                    <option value="" disabled className="text-gray-400">Select a service...</option>
                    <option value="website-build">Website Build</option>
                    <option value="seo">SEO</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="apps-build">Apps Build</option>
                  </select>
                  {/* Custom Arrow Icon for the select dropdown */}
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>

            {/* Comment Textarea */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Your comment</label>
              <textarea 
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:border-[#32a1d0] focus:ring-1 focus:ring-[#32a1d0] outline-none transition-all shadow-sm h-36 resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="mt-4 bg-[#61afdb] hover:bg-[#92d050] text-white hover:text-gray-900 font-bold py-3.5 px-8 rounded-xl transition-colors shadow-[0_10px_20px_rgba(97,175,219,0.3)] hover:shadow-[0_10px_20px_rgba(146,208,80,0.3)]"
            >
              Submit message
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}