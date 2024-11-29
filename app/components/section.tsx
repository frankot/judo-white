"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Section() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative mt-20 h-[30rem] w-full md:w-full "
    >
      <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-cover bg-fixed bg-center bg-no-repeat " />
      <div className="absolute inset-0 bg-black/30 " />

      <div className="relative flex h-full flex-col items-center pt-5">
        <div className="mb-10">
          <h1 className="mx-auto w-fit text-white rounded-lg px-7 py-2 text-center font-[family-name:var(--font-storm)] text-5xl">
            sekcja o <span className="text-orange-400">czyms </span>tam
          </h1>
  
          <div className="-mt-2 flex w-full justify-center">
            <Image
              src="/divider-white.webp"
              alt="Section divider"
              width={300}
              height={200}
              className="object-cover"
            />
          </div>
          <p className="text-center mt-20 text-white   font-[family-name:var(--font-barlow)] text-4xl animate-bounce">
            Czcionka do nagłówków nie posiada polskich znaków 😢
          </p>
        </div>
      </div>
    </motion.section>
  );
}
