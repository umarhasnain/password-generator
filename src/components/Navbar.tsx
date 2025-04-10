'use client';
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sm:flex md:flex lg:flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-md">
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
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 items-center text-white text-lg text-center mt-4 md:mt-0`}
      >
        <a href="#" className="hover:text-gray-200 block">Home</a>
        <a href="#" className="hover:text-gray-200 block">Features</a>
        <a href="#" className="hover:text-gray-200 block">Pricing</a>
        <a href="#" className="hover:text-gray-200 block">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
