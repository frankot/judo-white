"use client";
import { motion } from "framer-motion";
import Title from "./UI/title";

const SvgSun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mr-8 h-auto w-10"
    viewBox="0 0 75.57 68.28"
  >
    <path
      d="M35.14,68.18C24,67.53,13,62.1,6.3,53a455.08,455.08,0,0,1,67.09-7.3C67.51,60.72,50.8,69.34,35.14,68.18Z"
      fill="#fb923c"
    />
    <path
      d="M2.69,46.85a31,31,0,0,1-1.45-3.94c12.93-1.7,25.93-2.83,38.93-3.87h0c11.74-.61,23.48-1.34,35.24-1.25-.14,1-.26,2.08-.5,3.09-11.2.42-22.34,1.56-33.5,2.52h0c-12.57,1.71-25.17,3.18-37.6,5.73C3.4,48.39,3,47.62,2.69,46.85Z"
      fill="#111"
    />
    <path
      d="M.51,39.69a26.42,26.42,0,0,1-.47-7c25-3.08,50.2-3.25,75.31-2.6.22.65,0,1.45.22,2V34A594.93,594.93,0,0,0,.65,40.5C.6,40.23.56,40,.51,39.69Z"
      fill="#fb923c"
    />
    <path
      d="M.21,30.36a31.39,31.39,0,0,1,2-7.65c23.05-1.9,46.12-3.63,69.25-4.23a30.58,30.58,0,0,1,3.47,8.91c-24.95-.26-50,.35-74.75,3.84C.21,31,.11,30.65.21,30.36Z"
      fill="#fb923c"
    />
    <path
      d="M2.58,21.72C8.21,8.53,22.39.44,36.39,0c13.35-.45,27.17,5.8,34.33,17.32-22.79.75-45.52,2.59-68.23,4.58Z"
      fill="#fb923c"
    />
  </svg>
);

export default function Contact() {
  return (
    <div className="bg-white py-20 pb-40">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <Title title="Kontakt" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-black md:mt-20 md:ml-10"
          >
            <div className="flex items-center">
              <SvgSun />
              <div>
                <p className="font-[family-name:var(--font-barlow)] font-semibold uppercase">ADRES</p>
                <p className="font-[family-name:var(--font-barlow)]">ul. Przykładowa 123</p>
                <p className="font-[family-name:var(--font-barlow)]">00-000 Warszawa</p>
              </div>
            </div>
            <div className="flex items-center">
              <SvgSun />
              <div>
                <p className="font-[family-name:var(--font-barlow)] font-semibold uppercase">TELEFON</p>
                <p className="font-[family-name:var(--font-barlow)]">+48 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center">
              <SvgSun />
              <div>
                <p className="font-[family-name:var(--font-barlow)] font-semibold uppercase">EMAIL</p>
                <p className="font-[family-name:var(--font-barlow)]">kontakt@judodrako.pl</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-[400px] md:col-span-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.5650769900785!2d20.874858812363904!3d52.2875974532931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb5f59c5507db%3A0xb6896eba1247de56!2sJss%20Drako%2079!5e0!3m2!1sen!2spl!4v1732300514745!5m2!1sen!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}