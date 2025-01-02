"use client";
import About from "./components/about";
import News from "./components/news";
import Contact from "./components/contact";
import Hero from "./components/hero";
export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      <Hero />


      <About />
      <div
        className="absolute -right-32 top-1/4 h-[200vh] w-1/2 bg-contain bg-no-repeat bg-left opacity-5"
        style={{ backgroundImage: "url('/kanji.png')" }}
      />
      <News />
   
      {/* <ContactForm /> */}
      <Contact />

    </div>
  );
}
