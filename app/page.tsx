"use client";
import About from "./components/about";
import News from "./components/news";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Section from "./components/section";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
        <Hero />
     

      <div
        className="absolute -right-32 h-1/3 w-1/2 bg-cover bg-left opacity-5 [top:calc(50rem-10rem)]"
        style={{ backgroundImage: "url('/kanji.png')" }}
      />
      <About />
      {/* <Divider /> */}
      <News />
      <Section />
      <Contact />
      <Footer />
    </div>
  );
}
