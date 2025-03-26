'use client';

import React from "react";
import { Facebook, Instagram, X, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-center space-x-2">
            <span className="bg-white text-blue-500 p-2 rounded-full text-2xl">🔑</span>
            <span className="text-2xl font-bold">PassGen</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-bold mb-2">For Home</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-400">Support</a></li>
              <li><a href="#" className="hover:text-gray-400">Security</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-400">Performance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">For Business</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-400">Business Support</a></li>
              <li><a href="#" className="hover:text-gray-400">Products</a></li>
              <li><a href="#" className="hover:text-gray-400">Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">For Partners</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-400">Affiliates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Press</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Legal Links */}
      <div className="mt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center container mx-auto">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400"><Facebook /></a>
          <a href="#" className="hover:text-gray-400"><Instagram /></a>
          <a href="#" className="hover:text-gray-400"><X /></a>
          <a href="#" className="hover:text-gray-400"><Youtube /></a>
        </div>
        <p className="text-sm mt-4 md:mt-0">© 2025 PassGen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;