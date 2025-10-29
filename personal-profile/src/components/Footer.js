// src/components/Footer.js
import React from "react";
import { Heart } from "lucide-react";

function Footer() {
  // Sesuai Figma: Height 84px, Border Top #E5E7EB
  return (
    <footer className="w-full h-[84px] border-t border-border-gray bg-white">
      <div className="container mx-auto max-w-[1440px] h-full px-16 flex items-center justify-center">
        {/* Copyright */}
        <p className="text-base text-grayish-blue font-normal text-center">
          &copy; {new Date().getFullYear()} Muhammad Hanif. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
