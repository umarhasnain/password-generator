'use client'
import React, { JSX } from "react";

interface StrengthItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

const strengthItems: StrengthItem[] = [
  {
    title: "Long",
    description:
      "The longer a password, the more secure it is. A strong password should be at least 10 characters long.",
    icon: <span className="text-5xl">🔑</span>,
  },
  {
    title: "Complex",
    description:
      "Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names.",
    icon: <span className="text-5xl">🔒</span>,
  },
  {
    title: "Unique",
    description:
      "A strong password should be unique to each account to reduce vulnerability in the event of a hack.",
    icon: <span className="text-5xl">🆔</span>,
  },
];

const PasswordStrength: React.FC = () => {
  return (
    <section className="bg-navy-900 py-16 text-center text-white">
      <h2 className="text-4xl font-extrabold mb-10">What makes a password strong?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
        {strengthItems.map((item, index) => (
          <div
            key={index}
            className="bg-white text-navy-900 p-8 rounded-2xl shadow-lg max-w-sm flex flex-col items-center border border-navy-700 hover:shadow-2xl transition duration-300"
          >
            <div className="mb-4 text-navy-700">{item.icon}</div>
            <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
            <p className="text-gray-700 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PasswordStrength;
