"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if cookie consent is already given on mount
    const consentCookie = getCookie("myWebsiteCookieConsent");
    if (!consentCookie) {
      setIsVisible(true); // Show banner if no consent cookie is found
    }
  }, []);

  const handleAcceptCookie = () => {
    setCookie("myWebsiteCookieConsent", "true", 150); // Set cookie for 150 days
    setIsVisible(false);
    console.log("Cookie consent accepted (native)");
  };

  const handleDeclineCookie = () => {
    setCookie("myWebsiteCookieConsent", "false", 150); // You can also set it to 'false' or just remove it
    setIsVisible(false);
    console.log("Cookie consent declined (native)");
  };

  // Helper functions for cookie manipulation
  function setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name: string) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }

  return isVisible ? (
    <div
      className="fixed bottom-0 left-0 z-50 flex flex-col  items-center gap-y-3 w-full justify-center bg-white   font-[family-name:var(--font-barlow)] p-4"
    >
      <div className="mr-4"> {/* Add margin for text spacing */}
        Ta strona używa plików cookie, aby zapewnić Ci jak najlepsze doświadczenia. Korzystając z naszej strony, zgadzasz się na naszą{" "}
        <a
          href="/polityka-prywatnosci" // Replace with your privacy policy page link
          className="text-sky-500 underline"
        >
          Politykę Prywatności
        </a>.
      </div>
      <div className="flex justify-between md:justify-center w-full md:gap-x-10  px-10"> {/* Flex container for buttons */}
        <button
          onClick={handleDeclineCookie}
          className="bg-gray-200 text-gray-700 text-sm font-barlow px-4 py-2 rounded-md font-medium"
        >
          Odrzucam
        </button>
        <button
          onClick={handleAcceptCookie}
          className="bg-stone-900 text-white text-sm font-barlow px-4 py-2 rounded-md font-medium"
        >
          Akceptuję
        </button>
      </div>
    </div>
  ) : null;
}