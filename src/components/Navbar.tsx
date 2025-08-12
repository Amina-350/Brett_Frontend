"use client";
import React, { useState,useRef,useEffect  } from "react";
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
  // const [isOpen, setIsOpen] = useState(false);
 const navRef = useRef<HTMLDivElement>(null); // ✅ typed ref
  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <nav
    ref={navRef}
      className={`${koulenFont.className} flex items-center justify-between px-6 py-4 text-white z-50 relative`}
    >
      {/* Left: Logo + Company Name */}
      <div className="flex items-center gap-3">
        <Image src={imagelogo} alt="Company Logo" width={60} height={60} />
        <Image src={layerbret} alt="Layer Brett" width={150} height={100} />
      </div>

      {/* Desktop Menu */}
      <div className="hidden [@media(min-width:900px)]:flex items-center gap-6">
        <NavLinks />
      </div>

      {/* Mobile Hamburger */}
      <div className="[@media(min-width:900px)]:hidden">
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
        <><div className="bg-[#0487AB] main-nav-section absolute top-[20px] left-0 right-0  py-2 px-2 mx-4 border-[4px] border-[#003E58] rounded [@media(min-width:1000px)]:hidden">
        <div className="flex items-center gap-3 m-4 ">
            <Image src={imagelogo} alt="Company Logo" width={60} height={60} />
            <Image src={layerbret} alt="Layer Brett" width={150} height={100} />
          </div>
        <div className="flex flex-col bg-[#005870] items-start px-4 gap-4 py-4 mx-4  rounded-lg [box-shadow:inset_-10px_7px_0_0_#003e58] border-[4px] border-[#003E58] [@media(min-width:1000px)]:hidden">
          
          {/* Top: Logo + Name inside dropdown */}
        
{/*  */}

          {/* Main navigation links */}
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300 text-white !no-underline">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-300 text-white !no-underline">How to buy</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-gray-300 text-white !no-underline">Whitepaper</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-300 text-white !no-underline">Audit</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-300 text-white !no-underline">FAQs</Link>
         
          </div>

          {/* BUY NOW below links */}
          <div className="buy-and-stake border-[4px] border-[#009BAF] bg-[#00D2ED] rounded w-[130px] shadow-[-8px_4px_0_#D6FF00] mt-1">
            <p className="text-[#FFFFFF7D] text-[18px] text-center mb-1 mt-1 text-white">
              BUY NOW
            </p>
          </div>
            <div className="flex gap-3">
        <Link href="/contact" ><Image src={vector5} alt="vector5" className="w-[30px] h-[30px]" /></Link>
        <Link href="/contact" ><Image src={vector6} alt="vector6" className="w-[30px] h-[30px]" /></Link>
        <Link href="/contact" ><Image src={vector7} alt="vector7" className="w-[30px] h-[30px]" /></Link>
      </div>
        </div>  
        </div></>
      )}
    </nav>
  );
}

function NavLinks({ onClick }: NavLinksProps) {
  return (
    <>
      <Link href="/" onClick={onClick} className="hover:text-gray-300 transition text-white !no-underline">Home</Link>
      <Link href="/about" onClick={onClick} className="hover:text-gray-300 transition text-white !no-underline">How to buy</Link>
      <Link href="/services" onClick={onClick} className="hover:text-gray-300 transition text-white !no-underline">Whitepaper</Link>
      <Link href="/contact" onClick={onClick} className="hover:text-gray-300 transition text-white !no-underline">Audit</Link>
      <Link href="/contact" onClick={onClick} className="hover:text-gray-300 transition text-white !no-underline">FAQs</Link>
      <div className="flex gap-3">
        <Link href="/contact" onClick={onClick}><Image src={vector5} alt="vector5" className="w-[30px] h-[30px]" /></Link>
        <Link href="/contact" onClick={onClick}><Image src={vector6} alt="vector6" className="w-[30px] h-[30px]" /></Link>
        <Link href="/contact" onClick={onClick}><Image src={vector7} alt="vector7" className="w-[30px] h-[30px]" /></Link>
      </div>
      <div className="buy-and-stake border-[4px] border-[#009BAF] bg-[#00D2ED] rounded w-[130px] shadow-[-8px_4px_0_#D6FF00]">
        <p className="text-[#FFFFFF7D] text-[18px] text-center mb-1 mt-1 text-white">BUY NOW</p>
      </div>
    </>
  );
}
