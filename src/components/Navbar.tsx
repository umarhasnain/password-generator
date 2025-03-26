'use client'
import React, { useState } from "react";
import { Menu, X, RefreshCcw } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-white text-2xl font-bold">
          <span className="bg-white text-blue-500 p-2 rounded-full">🔑</span>
          <span className="ml-2">PassGen</span>
        </div>

        {/* Menu Button for Mobile */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-6 md:space-x-8 items-center text-white text-lg`}
        >
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">Features</a>
          <a href="#" className="hover:text-gray-200">Pricing</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </nav>
      </div>

      {/* Password Generator Section */}
      {/* <div className="text-center mt-4 md:mt-6">
        <p className="text-white text-lg">Generated Password:</p>
        <div className="flex items-center justify-center space-x-2 mt-2">
          <input
            type="text"
            value={password}
            readOnly
            className="px-4 py-2 rounded-lg text-center font-mono text-lg border focus:outline-none"
          />
          <button
            onClick={generatePassword}
            className="bg-white text-blue-500 px-3 py-2 rounded-lg shadow hover:bg-gray-200 flex items-center"
          >
            <RefreshCcw size={20} className="mr-1" /> Generate
          </button>
        </div>
      </div> */}
    </header>
  );
};

export default Navbar;
