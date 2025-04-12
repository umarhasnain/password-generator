'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is a password generator?",
    answer:
      "Think of a password generator as a master chef creating secure combinations...",
  },
  {
    question: "Are there any big differences among all password generators?",
    answer:
      "Yes, some are basic while others offer robust options with more security...",
  },
  {
    question: "Couldn't I come up with my passwords without using a generator?",
    answer:
      "While possible, most self-made passwords are predictable. Generators avoid that.",
  },
  {
    question: "What is the ideal length of a password?",
    answer:
      "Experts suggest at least 12–16 characters for optimal protection.",
  },
  {
    question: "Should I worry that password generators store my data?",
    answer:
      "Good ones don’t. They generate and forget, unless part of a manager.",
  },
  {
    question: "Will a generator help me remember all random passwords?",
    answer:
      "No, but a password manager will. Use both together for best security.",
  },
  {
    question: "Is using a generator enough to stay safe?",
    answer:
      "It’s a strong start, but 2FA, updates, and smart habits are also needed.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-blue-600">
          Password Generator FAQs
        </h2>
        <p className="mt-2 text-sm xs:text-base text-gray-600">
          Everything you need to know about using a password generator.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 xs:p-5 sm:p-6">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center text-sm xs:text-base sm:text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
            >
              {faq.question}
              <span className="ml-4 text-blue-500 text-xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm xs:text-base text-gray-700 mt-3">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
