"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Koulen } from "next/font/google";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import imagelogo from "../../public/assets/Group 1597885467.png";
import layerbret from "../../public/assets/LayerBrett (2).png";
import vector5 from "../../public/assets/Vector (5).png";
import vector6 from "../../public/assets/Vector (6).png";
import vector7 from "../../public/assets/Vector (7).png";

// Google font
const koulenFont = Koulen({
  subsets: ["latin"],
  weight: "400",
});

// Type for NavLinks props
type NavLinksProps = {
  onClick?: () => void;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${koulenFont.className} flex items-center justify-between px-6 py-4 text-white z-50 relative`}
    >
      {/* Left: Logo + Company Name */}
      <div className="flex items-center gap-3">
        <Image src={imagelogo} alt="Company Logo" width={60} height={60} />
        <Image src={layerbret} alt="Layer Brett" width={150} height={100} />
      </div>

      {/* Desktop Menu */}
      <div className="hidden [@media(min-width:1000px)]:flex items-center gap-6">
        <NavLinks />
      </div>

      {/* Mobile Hamburger */}
      <div className="[@media(min-width:1000px)]:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FiX size={28} className="text-white" />
          ) : (
            <FiMenu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#005870] flex flex-col items-start px-4 gap-4 py-4 [@media(min-width:1000px)]:hidden">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ onClick }: NavLinksProps) {
  return (
    <>
      <Link
        href="/"
        onClick={onClick}
        className="hover:text-gray-300 transition text-white !no-underline"
      >
        Home
      </Link>
      <Link
        href="/about"
        onClick={onClick}
        className="hover:text-gray-300 transition text-white !no-underline"
      >
        How to buy
      </Link>
      <Link
        href="/services"
        onClick={onClick}
        className="hover:text-gray-300 transition text-white !no-underline"
      >
        Whitepaper
      </Link>
      <Link
        href="/contact"
        onClick={onClick}
        className="hover:text-gray-300 transition text-white !no-underline"
      >
        Audit
      </Link>
      <Link
        href="/contact"
        onClick={onClick}
        className="hover:text-gray-300 transition text-white !no-underline"
      >
        FAQs
      </Link>
      <Link href="/contact" onClick={onClick}>
        <Image src={vector5} alt="vector5" className="w-[30px] h-[30px]" />
      </Link>
      <Link href="/contact" onClick={onClick}>
        <Image src={vector6} alt="vector6" className="w-[30px] h-[30px]" />
      </Link>
      <Link href="/contact" onClick={onClick}>
        <Image src={vector7} alt="vector7" className="w-[30px] h-[30px]" />
      </Link>
      <div className="buy-and-stake border-[4px] border-[#009BAF] bg-[#00D2ED] rounded w-[130px] shadow-[-8px_4px_0_#D6FF00]">
        <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1">
          BUY NOW
        </p>
      </div>
    </>
  );
}
