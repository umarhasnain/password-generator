'use client'
import React, { useState, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is a random password generator safe to use?",
    answer: "Yes, as long as you use a trusted password generator that does not store or transmit your generated passwords.",
  },
  {
    question: "Why should I use a password generator?",
    answer: "Password generators create strong, unique passwords that are difficult for attackers to guess or crack.",
  },
  {
    question: "Do I need a different password for every account?",
    answer: "Yes, using unique passwords for each account prevents a single breach from compromising multiple accounts.",
  },
  {
    question: "What are the requirements for a strong password?",
    answer: "A strong password should be at least 12 characters long and include uppercase letters, lowercase letters, numbers, and special symbols.",
  },
  {
    question: "Are password managers safe?",
    answer: "Yes, password managers encrypt and securely store your passwords, making it easier to use strong, unique passwords for each account.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-navy-900 text-white py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-10">Password Generator FAQs</h2>
      <div className="max-w-2xl mx-auto bg-white text-navy-900 rounded-2xl shadow-lg p-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <button
              className="w-full text-black text-left flex justify-between items-center text-lg font-semibold focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "➖" : "➕"}</span>
            </button>
            {openIndex === index && <p className="mt-3 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
