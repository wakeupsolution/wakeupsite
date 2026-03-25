"use client";
import Link from "next/link";
import Image from "next/image";   // ✅ ADD THIS
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-24 pb-10 px-4 sm:px-6 font-sans overflow-hidden">
      
      {/* Premium Top Gradient Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#32a1d0] via-purple-400 to-[#92d050]"></div>

      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#32a1d0]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#92d050]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">

          {/* Column 1: Brand, About & Socials */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start">
          <Link href="/" className="flex items-center mb-6">
  <Image
    src="/wakeup.png"
    alt="WakeUp Solution"
    width={200}
    height={80}
    className="object-contain"
  />
</Link>
            
            <p className="text-gray-500 leading-relaxed mb-8 max-w-sm text-sm font-medium">
              A premium digital agency specializing in high-performance web development, scalable e-commerce architectures, and data-driven SEO. We engineer digital experiences that drive measurable growth.
            </p>
            
            {/* Social Icons (Moved here for a cleaner layout) */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#32a1d0] hover:bg-[#32a1d0] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#32a1d0] hover:bg-[#32a1d0] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-purple-500 hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-gray-900 font-extrabold text-sm mb-6 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-gray-500">
              <li>
                <Link href="/" className="hover:text-[#32a1d0] transition-colors flex items-center gap-2 group">
                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[#32a1d0] opacity-0 group-hover:opacity-100">→</span> 
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#32a1d0] transition-colors flex items-center gap-2 group">
                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[#32a1d0] opacity-0 group-hover:opacity-100">→</span> 
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#32a1d0] transition-colors flex items-center gap-2 group">
                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[#32a1d0] opacity-0 group-hover:opacity-100">→</span> 
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-[#92d050] transition-colors flex items-center gap-2 group">
                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[#92d050] opacity-0 group-hover:opacity-100">→</span> 
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & CTA */}
          <div className="md:col-span-8 lg:col-span-4 flex flex-col items-start md:items-end lg:items-start">
            <h4 className="text-gray-900 font-extrabold text-sm mb-6 uppercase tracking-wider">Get in Touch</h4>
            
            <ul className="flex flex-col gap-5 text-sm font-medium text-gray-500 mb-8 w-full">
              
              
              <li className="flex md:justify-end lg:justify-start">
                <a href="mailto:wakupsolution@gmail.com" className="flex items-center gap-3 hover:text-[#32a1d0] transition-colors group text-left">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#32a1d0] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  wakupsolution@gmail.com
                </a>
              </li>
              
              <li className="flex md:justify-end lg:justify-start">
                <a href="tel:+919944956709" className="flex items-center gap-3 hover:text-[#92d050] transition-colors group text-left">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#92d050] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +91 99449 56709
                </a>
              </li>
            </ul>

            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-gray-900 text-white font-bold py-3.5 px-8 rounded-xl transition-shadow shadow-md hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Contact us today
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </motion.button>
            </Link>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-medium text-gray-400 text-center">
  <p>© {new Date().getFullYear()} WakeUp Solution. All rights reserved.</p>
</div>
      </div>
    </footer>
  );
}