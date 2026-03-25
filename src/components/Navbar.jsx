"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to apply frosted glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Package", href: "/package" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 py-3 shadow-sm" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* 1. Logo */}
          <Link href="/" className="relative flex items-center gap-2 z-50">
            {/* If you want to use your text logo instead of the image, you can uncomment this: */}
            {/* <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#32a1d0] to-[#92d050] flex items-center justify-center"><span className="text-white font-bold leading-none">W</span></div> */}
            {/* <span className="text-xl font-bold text-gray-900 tracking-tight hidden sm:block">WakeUp Solution</span> */}
            
            {/* Using your provided Image tag */}
            <Image
              src="/wakeup.png"
              alt="WakeUp Solution Logo"
              width={220}
              height={100}
              className="cursor-pointer object-contain"
              priority
            />
          </Link>

          {/* 2. Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="relative group text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.name}
                  {/* Subtle glowing underline on hover */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#32a1d0] to-[#92d050] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Premium CTA Button */}
            <Link 
              href="/contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-gray-900 rounded-full hover:bg-gray-800 hover:scale-105 active:scale-95 group overflow-hidden shadow-sm hover:shadow-md"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#32a1d0]/30 to-[#92d050]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Get Started</span>
            </Link>
          </div>

          {/* 3. Mobile Hamburger Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-gray-600 hover:text-gray-900 transition-colors outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-[2px] bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`}></span>
              <span className={`h-[2px] bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-[2px] bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>

        </div>
      </nav>

      {/* 4. Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl md:hidden pt-24 px-6 pb-8 flex flex-col"
          >
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-gray-800 hover:text-[#32a1d0] flex items-center justify-between border-b border-gray-100 pb-4 transition-colors"
                  >
                    {link.name}
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pb-8"
            >
              <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#32a1d0] to-[#92d050] text-white text-center font-bold text-lg flex justify-center items-center shadow-[0_10px_30px_rgba(50,161,208,0.3)] hover:scale-[1.02] transition-transform"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}