import { useState } from "react";
import logoImg from "../assets/logo-text.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[9999] w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        
        <a href="#" className="shrink-0">
          <img
            src={logoImg}
            alt="DevStack"
            className="h-8 w-auto sm:h-9"
          />
        </a>

  
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <a href="#" className="font-medium text-pink-500 transition-colors hover:text-pink-600">
            Home
          </a>
          <a href="#technologies" className="font-medium text-gray-600 transition-colors hover:text-pink-500">
            Technologies
          </a>
          <a href="#projects" className="font-medium text-gray-600 transition-colors hover:text-pink-500">
            Projects
          </a>
          <a href="#about" className="font-medium text-gray-600 transition-colors hover:text-pink-500">
            About
          </a>
          <a href="#contact" className="font-medium text-gray-600 transition-colors hover:text-pink-500">
            Contact
          </a>
        </div>

      
        <div className="flex items-center gap-2 sm:gap-3">
    
          <button
            type="button"
            className="text-xs font-medium text-gray-600 transition-colors hover:text-pink-500 sm:text-sm px-2 py-1"
          >
            Sign In
          </button>

        
          <button
            type="button"
            className="rounded-full bg-pink-500 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-pink-600 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Sign Up
          </button>

        
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 md:hidden"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

  
      {isOpen && (
        <div className="border-b border-gray-200 bg-white px-4 pt-2 pb-4 md:hidden shadow-lg">
          <div className="flex flex-col gap-3">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="font-medium text-pink-500 transition-colors hover:text-pink-600 py-1"
            >
              Home
            </a>
            <a
              href="#technologies"
              onClick={() => setIsOpen(false)}
              className="font-medium text-gray-600 transition-colors hover:text-pink-500 py-1"
            >
              Technologies
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="font-medium text-gray-600 transition-colors hover:text-pink-500 py-1"
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="font-medium text-gray-600 transition-colors hover:text-pink-500 py-1"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="font-medium text-gray-600 transition-colors hover:text-pink-500 py-1"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
