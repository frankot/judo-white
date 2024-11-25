"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const SvgTopLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-0 top-0 h-20 w-auto"
    viewBox="0 0 113.79 74.38"
  >
    <path
      d="M10.29,71.15c-.41,3.23-1,4.36-1.5,1.9-.66-3.42-1.53-12.17-2.07-18.87-.79-10.27-1.53-21-3.5-31.46C2.53,19.1,1.78,15.48.9,11.89A21.53,21.53,0,0,1,0,6.06,6.34,6.34,0,0,1,1,2.77,4.84,4.84,0,0,1,4,.78a15.79,15.79,0,0,1,3-.2l2.8,0L15.45.5,26.62.4C36.25.33,46,.42,55.5.28,64.12.15,72.77.2,81.39.21c3.88,0,7.88,0,11.74,0S100.62,0,104.45,0c10.25.2,12,2.24,5.66,2.93-4.81.52-15.86.34-22.11.33-8.94,0-17.84-.08-26.8,0l-32.27,0-16.14,0H6.73a14.88,14.88,0,0,0-1.83.06,2.22,2.22,0,0,0-2,1.39A6.7,6.7,0,0,0,2.71,8c.13,1,.42,2.07.68,3.21s.55,2.22.79,3.34c.52,2.22,1,4.45,1.47,6.68Q7,27.9,8.07,34.67a249.48,249.48,0,0,1,2.49,25.89A66.43,66.43,0,0,1,10.29,71.15Z"
      fill="#111"
    />
  </svg>
);
const SvgBottomRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-20 w-auto absolute bottom-0 right-0"
    viewBox="0 0 63.42 77.2"
  >
    <path
      d="M2.25,76.62C0,76.15-.78,75.55,1,75.09a86.79,86.79,0,0,1,13.32-1.4c7.24-.23,14.77-.06,22.25-.78,5.16-.49,10.32-1.22,15.46-2.1a25.91,25.91,0,0,0,3.66-.76A3.72,3.72,0,0,0,58,68.41a8.17,8.17,0,0,0,.41-3.27l.11-3.92c.19-6.77.54-13.61.66-20.3.1-6.05.38-12.13.62-18.18.11-2.73.25-5.54.28-8.25s0-5.27.15-8c.47-7.2,2.57-8.32,3.08-3.88.39,3.4-.09,11.16-.26,15.55-.25,6.28-.56,12.53-.76,18.83-.23,7.55-.53,15.11-.83,22.67l-.23,5.67a14.93,14.93,0,0,1-.31,3.13,5.33,5.33,0,0,1-2.19,3.09c-2.06,1.33-4.16,1.47-6,1.79s-3.76.57-5.64.85C40.69,75.12,34.36,76,28,76.47c-6.08.5-12.17.71-18.27.75A39,39,0,0,1,2.25,76.62Z"
      transform="translate(-0.01 -0.03)"
      fill="#111"
    />
  </svg>
);

export default function About() {
  return (
    <div id="about" className="w-screen bg-white">
      {/* Desktop Layout */}
      <div className="z-20 mx-auto hidden md:flex max-w-7xl sm:px-6 xl:px-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="relative backdrop-blur-sm mt-10 flex h-fit w-1/3 flex-col justify-center p-6"
        >
          <SvgTopLeft />

          <h1 className="mb-4 font-[family-name:var(--font-storm)] text-4xl">
            Czym jest Judo?
          </h1>
          <p className="font-[family-name:var(--font-barlow)] text-lg">
            Nazwę Judo można tłumaczyć jako &ldquo;drogę do zwinności&ldquo; lub &ldquo;drogę
            ustępowania&ldquo; (JU – zwinnie, ustępować; DO – droga, zasada).{" "}
          </p>
          <p className="mt-4 font-[family-name:var(--font-barlow)] text-lg">
            Judo przyczynia się do harmonijnego rozwoju, przekonuje, że nie siła
            i masa ciała, ale szybkość i zręczność decydują w działaniu. Jako
            sport przygotowuje do życia codziennego, wychowuje i kształtuje.
            Pomaga odkryć i rozwijać własne możliwości.{" "}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: -90 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex w-1/3 items-center p-10 rounded-t z-30 justify-center rounded"
        >
          <Image
            src="/kano.png"
            alt="Jigoro Kano"
            className="h-auto max-w-full rounded-xl"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="flex w-1/3 h-fit mt-32 p-6 flex-col justify-center relative"
        >
          <SvgBottomRight />
          <h1 className="mb-4 font-[family-name:var(--font-storm)] text-4xl">
            Jigoro Kano
          </h1>
          <p className="font-[family-name:var(--font-barlow)] text-lg">
            Judo pochodzi z Japonii. Jego twórcą był Jigoro KANO (1860-1938).
            Zebrał i ulepszył chwyty jiu-jitsu, eliminując uderzenia, kopnięcia
            i inne elementy walki mogące zagrozić zdrowiu i życiu, nadając im
            nową formę.{" "}
          </p>
          <p className="mt-4 font-[family-name:var(--font-barlow)] text-lg">
            Wierzymy, że judo to nie tylko sport, ale droga do samodoskonalenia
            i budowania silnego charakteru.
          </p>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="z-20 mx-auto flex md:hidden flex-col px-4 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: -70 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center py-8"
        >
          <Image
            src="/kano.png"
            alt="Jigoro Kano"
            className="h-auto w-3/4 rounded-xl"
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative backdrop-blur-sm flex flex-col justify-center p-4 pl-5"
        >
          <SvgTopLeft />
          <h1 className="mb-4 font-[family-name:var(--font-storm)] text-3xl">
            Czym jest Judo?
          </h1>
          <p className="font-[family-name:var(--font-barlow)] text-base">
            Nazwę Judo można tłumaczyć jako &ldquo;drogę do zwinności&ldquo; lub &ldquo;drogę
            ustępowania&ldquo; (JU – zwinnie, ustępować; DO – droga, zasada).{" "}
          </p>
          <p className="mt-4 font-[family-name:var(--font-barlow)] text-base">
            Judo przyczynia się do harmonijnego rozwoju, przekonuje, że nie siła
            i masa ciała, ale szybkość i zręczność decydują w działaniu. Jako
            sport przygotowuje do życia codziennego, wychowuje i kształtuje.
            Pomaga odkryć i rozwijać własne możliwości.{" "}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center p-4 relative mt-8"
        >
          <SvgBottomRight />
          <h1 className="mb-4 font-[family-name:var(--font-storm)] text-3xl">
            Jigoro Kano
          </h1>
          <p className="font-[family-name:var(--font-barlow)] text-base">
            Judo pochodzi z Japonii. Jego twórcą był Jigoro KANO (1860-1938).
            Zebrał i ulepszył chwyty jiu-jitsu, eliminując uderzenia, kopnięcia
            i inne elementy walki mogące zagrozić zdrowiu i życiu, nadając im
            nową formę.{" "}
          </p>
          <p className="mt-4 font-[family-name:var(--font-barlow)] text-base">
            Wierzymy, że judo to nie tylko sport, ale droga do samodoskonalenia
            i budowania silnego charakteru.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
