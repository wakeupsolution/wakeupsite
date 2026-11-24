"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

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
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
          scrolled
            ? "py-3 shadow-md border-b border-gray-100"
            : "py-4 shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="relative flex items-center z-50">
            <Image
              src="/wakeup.png"
              alt="WakeUp Solution Logo"
              width={220}
              height={100}
              className="cursor-pointer object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group text-sm font-semibold text-gray-700 hover:text-[#1689D4] transition-colors duration-300"
              >
                {link.name}

                {/* UNDERLINE */}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#1689D4] to-[#92D050] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* CTA BUTTON */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#1689D4] rounded-full hover:bg-[#0878C9] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-gray-700 hover:text-[#1689D4] transition-colors outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">

              <span
                className={`h-[2px] bg-current rounded-full transition-all duration-300 ${
                  isOpen
                    ? "w-6 rotate-45 translate-y-2.5"
                    : "w-6"
                }`}
              />

              <span
                className={`h-[2px] bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : "w-4"
                }`}
              />

              <span
                className={`h-[2px] bg-current rounded-full transition-all duration-300 ${
                  isOpen
                    ? "w-6 -rotate-45 -translate-y-2"
                    : "w-5"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 pb-8 flex flex-col"
          >
            {/* MOBILE LINKS */}
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-gray-800 hover:text-[#1689D4] flex items-center justify-between border-b border-gray-100 pb-4 transition-colors"
                  >
                    {link.name}

                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* MOBILE CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pb-8"
            >
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-xl bg-[#1689D4] text-white text-center font-bold text-lg flex justify-center items-center shadow-lg shadow-blue-500/20 hover:bg-[#0878C9] transition-all"
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