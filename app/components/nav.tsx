"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = ["Strona główna", "O nas", "Harmonogram", "Cennik", "Kontakt"];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      if (!scrolled) {
        setIsMobileMenuOpen(false);
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector("nav");
      if (nav && !nav.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Effect to handle body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative z-50 flex w-full justify-center">
      {/* Black overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden" />
      )}
      <nav
        className={`
          fixed flex w-[90%] sm:w-[60%] xl:w-[40%] 
          flex-col items-center justify-center
          transition-all duration-700 ease-in-out
          ${isScrolled ? 'bg-white/30 backdrop-blur-md shadow-lg py-4 md:py-0' : 'bg-transparent'}
          ${isMobileMenuOpen ? 'rounded-b-none' : 'rounded-b-xl'}
        `}
        style={{
          top: isScrolled ? "0" : "33vh",
          transition: "top 0.7s ease-in-out"
        }}
      >
        <motion.h1
          initial={{ x: 1200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className={`
            font-[family-name:var(--font-storm)] transition-all duration-700
            ${isScrolled ? 'text-5xl md:text-6xl text-black' : 'text-6xl md:text-9xl text-white'}
          `}
        >
          Judo drako
        </motion.h1>

        {isScrolled && (
          <>
            {/* Desktop Menu */}
            <ul className="bottom-2 my-2 hidden gap-8 md:flex font-[family-name:var(--font-barlow)] font-[300]">
              {navLinks.map((link, index) => (
                <li key={index} className="cursor-pointer uppercase text-black hover:-translate-y-[2px] duration-300">
                  {link}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="absolute right-3 top-4 p-2 text-black md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"}
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            <ul className={`
              absolute left-0 top-full w-full
              bg-white/90 font-[family-name:var(--font-barlow)]
              shadow-lg transition-all duration-500 ease-in-out md:hidden
              rounded-b-xl overflow-hidden
              ${isMobileMenuOpen ? 'max-h-[500px] border-t border-black py-4' : 'max-h-0'}
            `}>
              {navLinks.map((link, index) => (
                <li key={index} className="cursor-pointer py-3 text-center uppercase text-black hover:text-gray-600 transition-colors">
                  {link}
                </li>
              ))}
            </ul>
          </>
        )}
      </nav>
    </div>
  );
}
