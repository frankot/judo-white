"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Title from "./UI/title";

type FormType = "membership" | "camps" | "events";

const formTypes = [
  { id: "membership", label: "Zgłoszenie członkowskie" },
  { id: "camps", label: "Obozy / półkolonie" },
  { id: "events", label: "Wydarzenia klubowe" },
] as const;

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
    <div id="form" className="w-screen bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Title title="Zapisy" />
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
