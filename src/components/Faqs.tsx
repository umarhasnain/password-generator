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
      "Think of a password generator as a master chef who is creating elegant dishes for you. With every order, it bakes strong and unique passwords that consist of letters, numbers, and symbols needed to safeguard your online accounts. It should matter to you because flimsy passwords like (password123) may put your online safety at grave risk. Fortunately, a reliable password generator chambers that door securely with treatments even the best digital burglars will struggle to break.",
  },
  {
    question: "Are there any big differences among all password generators?",
    answer:
      "There seems to be a difference in how different generators produce passwords. Some are simplistic, spitting out basic combinations. Others are practically wizard, using sophisticated algorithms to ensure maximum strength and randomness. The secret sauce? Those that allow for adjustable length, the inclusion of special characters, and predictability avoidances are exemplary. Randompasswordgeneratorfree is an ideal tool for you to try generating strong passwords. ",
  },
  {
    question: "Couldn't I come up with my passwords without using a generator?",
    answer:
      "While coming up with passwords on your own is an option, consider it a huge inconvenience daily. Password creation is just one of the many routines we repeat day in and day out, entailing a combination of pet names, birthdays, and other similarly easy patterns, perfect for hackers to take advantage of. While humans do get emotional, password generators are the complete opposite. They’ll provide the trap of chaotic complications that are next to impossible to guess.",
  },
  {
    question: "What is the ideal length of a password?",
    answer:
      "Imagine the characters of a password you have as the height of a castle wall. The taller, the more difficult it is to breach. Most experts today would recommend a minimum length of 12-16 characters to ensure your password is difficult to breach. A generator can easily create a beefy password like “X7$pL9qW#2mZ8vN.”Making brute-force attacks spend forever trying to guess would be as easy as providing them with an endless mountain like Everest. Longer passwords are the best way to defend against today’s hacking tools.  ",
  },
  {
    question: "Should I worry that password generators store my data?",
    answer:
      "Most genuine password generators work like a one-night stand, give you your password, and forget it happened. They don’t store anything unless explicitly designed to, like if they’re part of a password manager. ",
  },
  {
    question: "Will a generator help me remember all random passwords?",
    answer:
      "A password generator works like an artist forming a masterpiece. Randomly assigned strings like “kJ#9mP$vR2xQ” aren’t exactly the stuff a catchy jingle is made of. Every artist needs someone to organize their ideas. In this analogy, an ideational organizer takes the form of a password manager, a device that securely stores and retrieves numerous passwords. Hilariously, some managers and generators branch out into cooperative efforts to store everything behind a solid vault. ",
  },
  {
    question: "Is using a generator enough to stay safe?",
    answer:
      "Using a password generator is a great starting point. However, achieving true security is collective work. Merely adding a strong password alongside two-factor authentication (2FA), keeping software updated, and steering clear of password recycling across different sites is best. Consider it a superhero ensemble: while the generator provides the muscle, 2FA and proper habits serve as the brains and shield against hacking attempts.",
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
        FreeStrongPasswordGenerator FAQs
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
