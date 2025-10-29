// src/components/Navbar.js
import React from "react";
import { Briefcase } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm border-b border-border-gray">
      {/* Padding horizontal 64px, Lebar Maks 1440px */}
      <div className="container mx-auto max-w-[1440px] px-16">
        <div className="flex justify-between items-center h-22 py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Briefcase className="w-7 h-7 text-dark-blue" />
            <a
              href="/"
              className="text-xl font-bold text-dark-blue tracking-wider"
            >
              MyProfile
            </a>
          </div>

          {/* Navigasi dan Button */}
          <div className="hidden lg:flex items-center space-x-12">
            {/* Navigation Links */}
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-semibold text-grayish-blue hover:text-primary-purple transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Button - Hire Me (Gradient) */}
            <button
              className="px-4 py-2 text-base font-semibold text-white rounded-lg bg-btn-gradient hover:opacity-90 transition-opacity"
              style={{
                boxShadow:
                  "0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 4px 6px 0 rgba(0, 0, 0, 0.10)",
              }}
            >
              Hire Me
            </button>
          </div>

          <button className="lg:hidden p-2 text-gray-800">
            {/* Ikon Menu */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;