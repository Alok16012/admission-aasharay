"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, Facebook, Twitter, Instagram, Linkedin, MapPin, CreditCard, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Top Bar - dark navy like growusauto */}
      <div className="bg-[#001a33] text-white text-xs md:text-sm py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:+919155427301" className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
              <Phone size={13} /> <span>+91 9155427301, +91 9334808277</span>
            </a>
            <a href="mailto:admissionaasharay@gmail.com" className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
              <Mail size={13} /> <span>admissionaasharay@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-gray-300">
              <MapPin size={13} /> <span>Nala Road, Patna, Bihar</span>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navigation - white sticky like growusauto */}
      <div className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-md"}`}>
        <div className="container mx-auto px-4 py-2 opacity-100 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Admission Aasharay Logo" width={220} height={60} className="w-48 md:w-56 h-auto object-contain" priority />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-5 font-medium text-gray-700 text-sm">
            <Link href="/" className="hover:text-[#003366] transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#003366] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="hover:text-[#003366] transition-colors relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#003366] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/services" className="hover:text-[#003366] transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#003366] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#003366] transition-colors py-2">
                Courses <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg overflow-hidden hidden group-hover:block border-t-2 border-[#22c55e]">
                <Link href="/medical" className="block px-4 py-2.5 hover:bg-[#f0f7ff] hover:text-[#003366] text-sm border-b border-gray-50">Medical</Link>
                <Link href="/engineering" className="block px-4 py-2.5 hover:bg-[#f0f7ff] hover:text-[#003366] text-sm border-b border-gray-50">Engineering</Link>
                <Link href="/management" className="block px-4 py-2.5 hover:bg-[#f0f7ff] hover:text-[#003366] text-sm border-b border-gray-50">Management</Link>
                <Link href="/law" className="block px-4 py-2.5 hover:bg-[#f0f7ff] hover:text-[#003366] text-sm border-b border-gray-50">Law</Link>
                <Link href="/courses" className="block px-4 py-2.5 hover:bg-[#f0f7ff] hover:text-[#003366] text-sm font-semibold">View All Courses →</Link>
              </div>
            </div>
            <Link href="/engineering" className="hover:text-[#003366] transition-colors relative group">
              Engineering
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#003366] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/medical" className="hover:text-[#003366] transition-colors relative group">
              Medical
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#003366] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/student-credit-card" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 whitespace-nowrap hover:from-yellow-500 hover:to-orange-500 transition-all shadow-sm animate-pulse">
              <CreditCard size={12} /> BSCC
            </Link>
            <Link href="/contact" className="hover:text-[#003366] transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#003366] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Green CTA button like growusauto */}
            <Link href="/contact" className="bg-[#22c55e] text-white px-5 py-2 rounded-md hover:bg-[#16a34a] transition-all duration-200 text-sm font-semibold shadow-sm hover:shadow-md">
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#003366]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-xl">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <Link href="/" className="hover:text-[#003366] font-medium" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="hover:text-[#003366] font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link href="/services" className="hover:text-[#003366] font-medium" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/courses" className="hover:text-[#003366] font-medium" onClick={() => setIsOpen(false)}>All Courses</Link>
              <div className="pl-4 border-l-2 border-[#22c55e] flex flex-col gap-2">
                <Link href="/medical" className="text-sm text-gray-600 hover:text-[#003366]" onClick={() => setIsOpen(false)}>Medical</Link>
                <Link href="/engineering" className="text-sm text-gray-600 hover:text-[#003366]" onClick={() => setIsOpen(false)}>Engineering</Link>
                <Link href="/management" className="text-sm text-gray-600 hover:text-[#003366]" onClick={() => setIsOpen(false)}>Management</Link>
                <Link href="/law" className="text-sm text-gray-600 hover:text-[#003366]" onClick={() => setIsOpen(false)}>Law</Link>
              </div>
              <Link href="/student-credit-card" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 hover:from-yellow-500 hover:to-orange-500 transition-all shadow-sm w-fit" onClick={() => setIsOpen(false)}>
                <CreditCard size={16} /> Bihar Student Credit Card
              </Link>
              <Link href="/contact" className="hover:text-[#003366] font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link href="/contact" className="bg-[#22c55e] text-white px-4 py-2.5 rounded-md hover:bg-[#16a34a] text-center font-semibold" onClick={() => setIsOpen(false)}>
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
