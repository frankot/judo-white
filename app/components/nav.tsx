"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { text: "Strona główna", href: "/" },
  { text: "O nas", href: "/o-nas" },
  { 
    text: "Zapisy",
    href: "/form",
    dropdown: [
      { text: "Zgłoszenie członkowskie", type: "membership" },
      { text: "Obozy / Półkolonie", type: "camps" },
      { text: "Wydarzenia klubowe", type: "events" }
    ]
  },
  { text: "Wydarzenia", href: "/aktualnosci" },
  { text: "Kontakt", href: "/#kontakt" }
];

export default function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isZapisyOpen, setIsZapisyOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // Only check scroll position on homepage
      if (pathname === "/") {
        const scrolled = window.scrollY > 50;
        setIsScrolled(scrolled);
        if (!scrolled) {
          setIsMobileMenuOpen(false);
        }
      }
    };
    
    // Set initial scroll state
    if (pathname === "/") {
      handleScroll();
    } else {
      setIsScrolled(true);
    }

    window.addEventListener("scroll", handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector("nav");
      if (nav && !nav.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setIsZapisyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pathname]);

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

  const handleZapisyClick = (type: string) => {
    router.push('/form');
    setIsMobileMenuOpen(false);
    // Use a small delay to ensure the form is in view before setting type
    setTimeout(() => {
      const formElement = document.getElementById('form');
      if (formElement) {
          window.dispatchEvent(new CustomEvent('setFormType', { detail: type }));
          setIsZapisyOpen(false);
      }
    }, 100);
   
  };

  return (
    <div className="relative z-50 flex w-full justify-center scroll-smooth">
      {/* Black overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden" />
      )}

      {/* Active Now Panel */}
      {isScrolled && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden fixed md:block left-0  top-1/3 bg-white/30 backdrop-blur-md p-4 -translate-y-1/2 z-50 rounded-r-xl"
        >
          <Link href="https://app.activenow.io/users/sign_in" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/activeNow.png" 
              alt="Active Now" 
              width={128}
              height={40}
              className="w-32 h-auto hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </motion.div>
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
        <Link href="/">
          <motion.h1
            initial={{ x: 1200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={`
              font-[family-name:var(--font-storm)] transition-all duration-700 whitespace-nowrap 
              ${isScrolled ? 'text-[2.5rem] md:text-6xl text-stone-950' : 'text-[3.25rem] md:text-9xl text-white'}
            `}
          >
            judo<span className={`${isScrolled ? 'text-orange-400' : ''}`}>DRAKO</span>
          </motion.h1>
        </Link>

        {isScrolled && (
          <>
            {/* Desktop Menu */}
            <ul className="bottom-2 my-2 hidden gap-8 md:flex font-[family-name:var(--font-barlow)] font-[300]">
              {navLinks.map((link, index) => (
                <li key={index} className="relative hover:-translate-y-[2px] duration-300">
                  {link.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsZapisyOpen(!isZapisyOpen)}
                        className="flex items-center gap-1 cursor-pointer uppercase text-stone-950"
                      >
                        {link.text}
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${isZapisyOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`
                        absolute -left-5 top-full mt-2 w-48 bg-white/30 shadow-lg rounded-b-lg overflow-hidden
                        transition-all duration-300 origin-top backdrop-blur-lg
                        ${isZapisyOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
                      `}>
                        {link.dropdown.map((dropdownItem, dropIndex) => (
                          <button
                            key={dropIndex}
                            onClick={() => handleZapisyClick(dropdownItem.type)}
                            className="block px-4 py-2 text-sm text-stone-950 hover:bg-gray-100/50 duration-300 w-full text-left"
                          >
                            {dropdownItem.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={link.href}
                      className="cursor-pointer uppercase text-stone-950 hover:-translate-y-[2px] duration-300"
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="absolute right-0 top-6 p-2 text-stone-950 md:hidden"
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
              ${isMobileMenuOpen ? 'max-h-[500px] border-t border-stone-950 py-4' : 'max-h-0'}
            `}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsZapisyOpen(!isZapisyOpen)}
                        className="w-full flex items-center justify-center gap-1 py-3 uppercase text-stone-950 hover:text-gray-600 transition-colors"
                      >
                        {link.text}
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${isZapisyOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`
                       overflow-hidden transition-all duration-300
                        ${isZapisyOpen ? 'max-h-48' : 'max-h-0'}
                      `}>
                        {link.dropdown.map((dropdownItem, dropIndex) => (
                          <button
                            key={dropIndex}
                            onClick={() => handleZapisyClick(dropdownItem.type)}
                            className="block py-2 text-center text-sm text-stone-950 hover:bg-gray-100 w-full "
                          >
                            {dropdownItem.text}
                          </button>
                        ))}
                        
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block cursor-pointer py-3 text-center uppercase text-stone-950 hover:text-gray-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.text}
                    </Link>
                    
                  )}
                  
                </li>
              ))}
              <li className="flex justify-center pt-2 pr-4">
                <Link href="https://app.activenow.io/users/sign_in" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="/activeNow.png" 
                    alt="Active Now" 
                    width={128}
                    height={40}
                    className="w-32 h-auto"
                  />
                </Link>
              </li>
            </ul>
          </>
        )}
      </nav>
    </div>
  );
}
