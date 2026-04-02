"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  // 1. Add state to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      service: form.service.value,
      message: form.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
console.log("API Response:", data);
    if (data.success) {
      // 2. Trigger the modal instead of the browser alert
      setIsModalOpen(true);
      form.reset(); // clear form
    } else {
      console.log("Error submitting form:", data);
      alert(data.message || "Error ❌");
      
    }
  };

  return (
    <section className="relative min-h-screen bg-[#f8f9fa] text-gray-900 py-24 px-6 font-sans overflow-hidden">
      
      {/* 3. SUCCESS MODAL POP-UP */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            {/* Darkened blurred backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
            />
            {/* Modal Card */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center z-10"
            >
              <div className="w-16 h-16 bg-[#92d050]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#92d050]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
  Message Sent Successfully!
</h3>
<p className="text-gray-600 mb-8">
  We’ve received your request. Our team will contact you shortly to discuss your project.
</p>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-[#32a1d0] hover:bg-[#92d050] text-white font-bold py-3.5 rounded-xl transition-colors duration-300"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Your name*
                </label>
                <input 
                  name="name"
                  type="text" 
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:border-[#32a1d0] focus:ring-1 focus:ring-[#32a1d0] outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Email*
                </label>
                <input 
                  name="email"
                  type="email" 
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:border-[#32a1d0] focus:ring-1 focus:ring-[#32a1d0] outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Phone*
                </label>
                <input 
                  name="phone"
                  type="tel" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:border-[#32a1d0] focus:ring-1 focus:ring-[#32a1d0] outline-none transition-colors"
                  placeholder="+91 9876543210"
                />
              </div>

              {/* Service */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Service Type*
                </label>
                <select 
                  name="service"
                  required
                  defaultValue=""
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:border-[#32a1d0] focus:ring-1 focus:ring-[#32a1d0] outline-none transition-colors"
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="website-build">Website Build</option>
                  <option value="seo">SEO</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="apps-build">Apps Build</option>
                </select>
              </div>

            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Your comment
              </label>
              <textarea 
                name="message"
                required
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 h-36 focus:border-[#32a1d0] focus:ring-1 focus:ring-[#32a1d0] outline-none transition-colors"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            {/* Button */}
            <button 
              type="submit"
              className="mt-4 bg-[#61afdb] hover:bg-[#92d050] text-white font-bold py-3.5 px-8 rounded-xl transition-colors duration-300"
            >
              Submit message
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}