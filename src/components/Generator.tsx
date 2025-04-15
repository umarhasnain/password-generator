'use client';
import { useState, useEffect, useCallback } from "react";

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
  const [copied, setCopied] = useState<boolean>(false);

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
    setCopied(false);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, evaluateStrength]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // auto hide after 2s
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 sm:p-10 md:p-12">
      
      {/* Password Display */}
      <div className="flex flex-col sm:flex-row items-center bg-white p-4 sm:p-6 lg:p-8 rounded-md shadow-md mt-4 w-full max-w-xl lg:max-w-3xl gap-3 sm:gap-4">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full border border-gray-300 rounded-md px-3 py-3 outline-none text-lg lg:text-2xl font-medium"
        />
        <div className="flex flex-row gap-2">
          <button
            onClick={generatePassword}
            className="bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-3 lg:px-6 lg:py-3 text-lg rounded-md"
          >
            🔄
          </button>
          <button
            onClick={copyToClipboard}
            className="bg-green-500 hover:bg-green-600 transition text-white px-5 py-3 lg:px-6 lg:py-3 text-lg rounded-md"
          >
            📋
          </button>
        </div>
      </div>
  
      {/* Copied Message */}
      {copied && (
        <p className="mt-2 text-green-600 text-base lg:text-lg font-medium animate-pulse">
          Password copied to clipboard!
        </p>
      )}
  
      {/* Strength Indicator */}
      <div className="mt-6 text-sm lg:text-base">
        <span
          className={`px-4 py-2 rounded-md font-semibold ${
            strength === "Strong"
              ? "bg-green-500 text-white"
              : strength === "Medium"
              ? "bg-yellow-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {strength ? `Strength: ${strength}` : "Select Options & Generate"}
        </span>
      </div>
  
      {/* Length Slider */}
      <div className="my-6 w-full max-w-xl lg:max-w-3xl">
        <label className="font-semibold text-lg">Password Length: {length}</label>
        <input
          type="range"
          min="6"
          max="30"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full mt-2 accent-blue-500"
        />
      </div>
  
      {/* Character Options */}
      <div className="my-6 flex flex-wrap gap-6 w-full max-w-xl lg:max-w-3xl text-base lg:text-lg">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase((prev) => !prev)}
            className="cursor-pointer w-5 h-5"
          />
          <span>Uppercase (ABC)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase((prev) => !prev)}
            className="cursor-pointer w-5 h-5"
          />
          <span>Lowercase (abc)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers((prev) => !prev)}
            className="cursor-pointer w-5 h-5"
          />
          <span>Numbers (123)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols((prev) => !prev)}
            className="cursor-pointer w-5 h-5"
          />
          <span>Symbols (#$&)</span>
        </label>
      </div>
  
      <div>
        <button
          onClick={copyToClipboard}
          className="border-2 p-3 text-lg border-blue-400 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer"
        >
          📋 Copy Password
        </button>
      </div>
    </div>
  );
  
}
