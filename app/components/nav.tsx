"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = ["Strona główna", "O nas", "Harmonogram", "Cennik", "Kontakt"];

export default function Nav() {
  const [isLoading, setIsLoading] = useState(true);
  const [navState, setNavState] = useState({
    isScrolled: false,
    textSize: "text-6xl md:text-9xl",
    textColor: "text-white",
    bgColor: "bg-transparent md:top-1/3",
    showLinks: false,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkInitialScroll = () => {
      if (window.scrollY > 50) {
        setNavState({
          isScrolled: true,
          textSize: "text-5xl md:text-6xl",
          textColor: "text-black",
          bgColor: "backdrop-blur-md bg-white/30 shadow-lg top-0",
          showLinks: true,
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
          bgColor: "backdrop-blur-md bg-white/30 shadow-lg top-0",
          showLinks: true,
        });
      } else {
        setNavState({
          isScrolled: false,
          textSize: "text-6xl md:text-9xl",
          textColor: "text-white",
          bgColor: "bg-transparent md:top-1/3",
          showLinks: false,
        });
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector("nav");
      if (nav && !nav.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <div className="relative z-50 flex w-full justify-center">
      <nav
        className={`fixed flex w-[90%] flex-col items-center justify-center py-4 transition-all duration-700 ease-in-out sm:w-[60%] md:py-0 xl:w-[40%] ${isMobileMenuOpen ? "rounded-b-none" : "rounded-b-xl"} ${navState.bgColor}`}
      >
        <motion.h1
          initial={{ x: 1200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7}}
          className={`font-[family-name:var(--font-storm)] transition-all duration-700  ${navState.textSize} ${navState.textColor}`}
        >
          Judo drako
          {/* <div className="-mt-2 flex w-full justify-center">
            <Image
              src="/divider-white.webp"
              alt="Section divider"
              width={600}
              height={300}
              className={`mr-20 object-cover ${navState.showLinks ? "hidden" : ""}`}
            />
          </div> */}
        </motion.h1>

        {navState.showLinks && (
          <>
            {/* Desktop Menu */}
            <ul className="bottom-2 my-2 hidden gap-8 font-[family-name:var(--font-barlow)] font-[300] md:flex">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer uppercase text-black duration-300 hover:-translate-y-[2px]"
                >
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
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  }
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            <ul
              className={`absolute left-0 top-full w-full overflow-hidden rounded-b-xl bg-white/90 font-[family-name:var(--font-barlow)] shadow-lg transition-all duration-500 ease-in-out md:hidden ${
                isMobileMenuOpen
                  ? "max-h-[500px] border-t border-black py-4"
                  : "max-h-0"
              }`}
            >
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer py-3 text-center uppercase text-black transition-colors hover:text-gray-600"
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
