"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Title from "../components/UI/title";

type FormType = "membership" | "camps" | "events";

const formTypes = [
  { id: "membership", label: "Zgłoszenie członkowskie" },
  { id: "camps", label: "Obozy / półkolonie" },
  { id: "events", label: "Wydarzenia klubowe" },
] as const;

const SvgSun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mr-8 h-auto w-[45rem]"
    viewBox="0 0 75.57 68.28"
  >
    <path
      d="M35.14,68.18C24,67.53,13,62.1,6.3,53a455.08,455.08,0,0,1,67.09-7.3C67.51,60.72,50.8,69.34,35.14,68.18Z"
      fill="#111"
    />
    <path
      d="M2.69,46.85a31,31,0,0,1-1.45-3.94c12.93-1.7,25.93-2.83,38.93-3.87h0c11.74-.61,23.48-1.34,35.24-1.25-.14,1-.26,2.08-.5,3.09-11.2.42-22.34,1.56-33.5,2.52h0c-12.57,1.71-25.17,3.18-37.6,5.73C3.4,48.39,3,47.62,2.69,46.85Z"
      fill="#111   "
    />
    <path
      d="M.51,39.69a26.42,26.42,0,0,1-.47-7c25-3.08,50.2-3.25,75.31-2.6.22.65,0,1.45.22,2V34A594.93,594.93,0,0,0,.65,40.5C.6,40.23.56,40,.51,39.69Z"
      fill="#111"
    />
    <path
      d="M.21,30.36a31.39,31.39,0,0,1,2-7.65c23.05-1.9,46.12-3.63,69.25-4.23a30.58,30.58,0,0,1,3.47,8.91c-24.95-.26-50,.35-74.75,3.84C.21,31,.11,30.65.21,30.36Z"
      fill="#111"
    />
    <path
      d="M2.58,21.72C8.21,8.53,22.39.44,36.39,0c13.35-.45,27.17,5.8,34.33,17.32-22.79.75-45.52,2.59-68.23,4.58Z"
      fill="#111"
    />
  </svg>
);


export default function ContactForm() {
  const [formType, setFormType] = useState<FormType>("membership");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Add event listener for form type changes
  useEffect(() => {
    const handleSetFormType = (event: CustomEvent<FormType>) => {
      setFormType(event.detail);
    };

    window.addEventListener('setFormType', handleSetFormType as EventListener);
    
    return () => {
      window.removeEventListener('setFormType', handleSetFormType as EventListener);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ formType, ...formData });
  };
  return (
    <div id="form" className="w-screen bg-white py-20 mt-44 relative">
      <div className="absolute  flex -bottom-32  right-0 opacity-5 pointer-events-none">
        <SvgSun />
      </div>
      <div className="mx-auto max-w-3xl px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 -mt-32 overflow-visible bg-white rounded-t-xl text-center"
        >
          <Title title="zapisy" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {formTypes.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setFormType(id as FormType)}
                className={`rounded-lg border-2 px-4 py-2 font-[family-name:var(--font-barlow)] text-sm transition-all duration-300 sm:text-base ${
                  formType === id
                    ? "border-orange-400 bg-orange-400 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-orange-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block font-[family-name:var(--font-barlow)] text-sm font-medium text-gray-700"
              >
                Imię
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-400 focus:outline-none focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block font-[family-name:var(--font-barlow)] text-sm font-medium text-gray-700"
              >
                Nazwisko
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-400 focus:outline-none focus:ring-orange-400"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="block font-[family-name:var(--font-barlow)] text-sm font-medium text-gray-700"
              >
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-400 focus:outline-none focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-[family-name:var(--font-barlow)] text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-400 focus:outline-none focus:ring-orange-400"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-[family-name:var(--font-barlow)] text-sm font-medium text-gray-700"
            >
              Wiadomość
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-400 focus:outline-none focus:ring-orange-400"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded bg-black border border-black px-10 py-2 font-[family-name:var(--font-barlow)] font-semibold uppercase text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Wyślij
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
