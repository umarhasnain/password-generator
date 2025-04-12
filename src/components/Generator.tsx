'use client';
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const characters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?/",
};

export default function Generator() {
  const [length, setLength] = useState<number>(15);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [strength, setStrength] = useState<string>("");

  const evaluateStrength = useCallback((password: string): void => {
    if (password.length < 8) setStrength("Weak");
    else if (password.length >= 8 && password.length < 12) setStrength("Medium");
    else setStrength("Strong");
  }, []);

  const generatePassword = useCallback((): void => {
    let charSet = "";
    if (includeUppercase) charSet += characters.uppercase;
    if (includeLowercase) charSet += characters.lowercase;
    if (includeNumbers) charSet += characters.numbers;
    if (includeSymbols) charSet += characters.symbols;

    if (!charSet) return;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charSet[Math.floor(Math.random() * charSet.length)];
    }

    setPassword(newPassword);
    evaluateStrength(newPassword);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, evaluateStrength]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-12">
      {/* Hero Section */}
      <section className="w-full text-center bg-blue-500 text-white py-10 px-6 flex flex-col md:flex-row items-center justify-center gap-6">
      <div className="transition-all duration-500 ease-in-out transform hover:scale-105 animate__animated animate__fadeIn">
        <h1 className=" font-bold mb-4 text-lg md:text-4xl lg:text-5xl xl:text-4xl transition-all duration-500 ease-in-out hover:text-yellow-400">
          RandomPasswordGeneratorFree.com – Secure Passwords Made Simple
        </h1>
        <p className="text-lg mb-4 md:text-sm transition-all duration-500 ease-in-out hover:text-yellow-300">
          RandomPasswordGeneratorFree provides a free and secure solution to generate passwords to keep your data safe.
          Whether protecting a personal email, some financial accounts, or work logins, this tool can help you through. It
          helps you to secure accounts at no cost.
        </p>
      </div>

      <div className="transition-transform duration-500 ease-in-out transform hover:scale-110 animate__animated animate__fadeIn animate__delay-1s">
        <Image
          src="/images/password-generator-3.webp"
          alt="Password Security"
          width={300}
          height={200}
          className="rounded-lg shadow-lg object-contain transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
      </div>
    </section>
      {/* Password Display */}
      <div className="flex items-center space-x-2 bg-white p-3 rounded-md shadow-md mt-12 w-full max-w-xl">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full border-none outline-none text-lg"
        />
        <button onClick={generatePassword} className="bg-blue-500 text-white px-3 py-1 rounded-md">
          🔄
        </button>
        <button onClick={copyToClipboard} className="bg-green-500 text-white px-3 py-1 rounded-md">
          📋
        </button>
      </div>

      {/* Strength Indicator */}
      <div className="mt-8 text-sm">
        <span className={`px-2 py-1 rounded-md ${
          strength === "Strong"
            ? "bg-green-500 text-white"
            : strength === "Medium"
            ? "bg-yellow-500 text-white"
            : "bg-red-500 text-white"
        }`}>
          {strength ? `Strength: ${strength}` : "Select Options & Generate"}
        </span>
      </div>

      {/* Length Slider */}
      <div className="my-6 w-full max-w-xl">
        <label className="font-semibold">Password Length: {length}</label>
        <input
          type="range"
          min="6"
          max="30"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full mt-2"
        />
      </div>

      {/* Character Options */}
      <div className="my-6 flex flex-wrap gap-6 m-4 w-full max-w-xl">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(prev => !prev)}
          />
          <span>Uppercase (ABC)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(prev => !prev)}
          />
          <span>Lowercase (abc)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(prev => !prev)}
          />
          <span>Numbers (123)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(prev => !prev)}
          />
          <span>Symbols (#$&)</span>
        </label>
      </div>
    </div>
  );
}
