'use client'
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="text-white text-xl md:text-2xl font-bold cursor-pointer text-center md:text-left">
        FreeStrongPasswordGenerator
        </div>
      </div>
    </header>
  );
};

export default Navbar;
