"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black border-b border-white/10 backdrop-blur-sm">
      <div className="lotus-container py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative flex items-center">
          <Image
            src="https://ext.same-assets.com/2095582637/2643043709.svg"
            alt="Kona Sales Logo"
            width={80}
            height={30}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="text-white hover:text-gray-300 transition">Our Team</Link>
          <Link href="#" className="text-white hover:text-gray-300 transition">Careers</Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="#"
          className="hidden md:block lotus-button bg-accent text-white hover:bg-accent/90"
        >
          Schedule a Call
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black py-4 border-t border-white/10">
          <div className="lotus-container flex flex-col space-y-4">
            <Link
              href="#"
              className="text-white hover:text-gray-300 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="#"
              className="lotus-button bg-accent text-white hover:bg-accent/90 inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
