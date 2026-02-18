"use client";
import React from "react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { FlickeringGrid } from "./ui/flickering-grid";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-10 px-4 ">
      {/* Quote Section */}
      <div className="max-w-3xl w-full text-center ">
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
        </div>
        <blockquote className="text-2xl md:text-3xl font-medium italic  mb-6">
          "Do so much work that it would be unreasonable for you to not be
          successful."
        </blockquote>
        <p className="text-sm  uppercase tracking-wider">— ALEX HORMOZI —</p>
      </div>
    </div>
  );
};

export default Footer;
