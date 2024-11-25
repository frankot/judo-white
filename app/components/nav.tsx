"use client";
import { useEffect, useState } from "react";

const navLinks = ["Strona główna", "O nas", "Harmonogram", "Cennik", "Kontakt"];

export default function Nav() {
  const [isLoading, setIsLoading] = useState(true);
  const [navState, setNavState] = useState({
    isScrolled: false,
    textSize: "text-5xl md:text-6xl", // Set smaller size as default
    textColor: "text-white",
    bgColor: "",
    showLinks: false,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkInitialScroll = () => {
      if (window.scrollY <= 50) {
        setNavState({
          isScrolled: false,
          textSize: "text-6xl md:text-9xl",
          textColor: "text-white",
          bgColor: "bg-transparent",
          showLinks: false,
        });
      }
    };
    
    checkInitialScroll();
    setIsLoading(false);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavState({
          isScrolled: true,
          textSize: "text-5xl md:text-6xl",
          textColor: "text-black",
          bgColor: "backdrop-blur-md bg-white/30 shadow-lg",
          showLinks: true,
        });
      } 
      else {
        setNavState({
          isScrolled: false,
          textSize: "text-6xl md:text-8xl",
          textColor: "text-white",
          bgColor: "bg-transparent",
          showLinks: false,
        });
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <div className="relative z-50 flex justify-center w-full">
      <nav
        className={`fixed w-[90%] py-4 md:py-0 sm:w-[60%] xl:w-[40%] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isMobileMenuOpen ? "rounded-b-none" : "rounded-b-xl"} ${navState.bgColor}`}
      >
        <h1
          className={`font-[family-name:var(--font-storm)] transition-all duration-700 ease-in-out ${navState.textSize} ${navState.textColor}`}
        >
          Judo drako
        </h1>

        {navState.showLinks && (
          <>
            {/* Desktop Menu */}
            <ul className="hidden md:flex bottom-2 my-2 gap-8 font-[family-name:var(--font-barlow)] font-[300]">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer uppercase text-black transition-colors hover:text-gray-600"
                >
                  {link}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-black p-2 absolute right-3 top-4"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-7 h-7"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} 
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            <ul 
              className={`md:hidden absolute  top-full left-0 w-full backdrop-blur-md bg-white/30 shadow-lg rounded-b-xl transition-all duration-500 ease-in-out overflow-hidden font-[family-name:var(--font-barlow)] ${
                isMobileMenuOpen ? 'max-h-[500px] py-4 border-t border-black' : 'max-h-0'
              }`}
            >
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer uppercase text-black transition-colors hover:text-gray-600 py-3 text-center"
                >
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
