'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is a password generator?",
    answer: "Think of a password generator as a master chef who is creating elegant dishes for you. With every order, it bakes strong and unique passwords that consist of letters, numbers, and symbols needed to safeguard your online accounts. It should matter to you because flimsy passwords like (password123) may put your online safety at grave risk. Fortunately, a reliable password generator chambers that door securely with treatments even the best digital burglars will struggle to break.",
  },
  {
    question: "Are there any big differences among all password generators?",
    answer: "There seems to be a difference in how different generators produce passwords. Some are simplistic, spitting out basic combinations. Others are practically wizards, using sophisticated algorithms to ensure maximum strength and randomness. The secret sauce? Those that allow for adjustable length, the inclusion of special characters, and predictability avoidances are exemplary. Randompasswordgeneratorfree is an ideal tool for you to try generating strong passwords. ",
  },
  {
    question: "Couldn't I come up with my passwords without using a generator? ",
    answer: "While coming up with passwords on your own is an option, consider it a huge inconvenience daily. Password creation is just one of the many routines we repeat day in and day out, entailing a combination of pet names, birthdays, and other similarly easy patterns, perfect for hackers to take advantage of. While humans do get emotional, password generators are the complete opposite. They’ll provide the trap of chaotic complications that are next to impossible to guess.",
  },
  {
    question: "What is the ideal length of a password a generator to ensure my accounts are safe?",
    answer: "Imagine the characters of a password you have as the height of a castle wall. The taller, the more difficult it is to breach. Most experts today would recommend a minimum length of 12-16 characters to ensure your password is difficult to breach. A generator can easily create a beefy password like “X7$pL9qW#2mZ8vN.” Making brute-force attacks spend forever trying to guess would be as easy as providing them with an endless mountain like Everest. Longer passwords are the best way to defend against today’s hacking tools. ",
  },
  {
    question: "Should I be worried that password generators might store my passwords?",
    answer: "Most genuine password generators work like a one-night stand, give you your password, and forget it happened. They don’t store anything unless explicitly designed to, like if they’re part of a password manager. ",
  },
  {
    question: "Will a password generator help me remember all those random passwords? ",
    answer: "A password generator works like an artist forming a masterpiece. Randomly assigned strings like “kJ#9mP$vR2xQ” aren’t exactly the stuff a catchy jingle is made of. Every artist needs someone to organize their ideas. In this analogy, an ideational organizer takes the form of a password manager, a device that securely stores and retrieves numerous passwords. Hilariously, some managers and generators branch out into cooperative efforts to store everything behind a solid vault.",
  },
  {
    question: "Does employing a password generator sufficiently protect my accounts?",
    answer: "Using a password generator is a great starting point. However, achieving true security is collective work. Merely adding a strong password alongside two-factor authentication (2FA), keeping software updated, and steering clear of password recycling across different sites is best.",
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
    <section className="bg-navy-900 text-black py-16 px-6 ">
      <h2 className="text-4xl text-blue-500 font-extrabold text-center mb-10">Password Generator FAQs</h2>
      <div className="max-w-2xl mx-auto bg-white text-navy-900 rounded-2xl shadow-lg p-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4 cursor-pointer">
            <button
              className="w-full text-black text-left flex justify-between items-center text-lg font-semibold focus:outline-none cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl cursor-pointer">{openIndex === index ? <Image src="/images/2.png" height={30} width={30} alt="img"/> : <Image src="/images/1.png" height={30} width={30} alt="img"></Image>}</span>
            </button>
            {openIndex === index && <p className="mt-3 text-gray-700 ">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
