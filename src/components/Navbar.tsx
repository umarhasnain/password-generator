import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          PasswordGen
        </Link>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/generate">Generate</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <ul className="flex flex-col space-y-4 text-center">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/generate" onClick={() => setIsOpen(false)}>Generate</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} PasswordGen. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-blue-400">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Navbar;
