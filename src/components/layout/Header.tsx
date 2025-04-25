"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-4 md:px-8',
        isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <Image
            src="/images/kona_logo.jpg"
            alt="Kona Sales"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/team" className="text-white hover:text-white/80 transition-colors">
            Our Team
          </Link>
          <Link href="/careers" className="text-white hover:text-white/80 transition-colors">
            Careers
          </Link>
          <Link href="/blog" className="text-white hover:text-white/80 transition-colors">
            Resources
          </Link>
        </nav>

        {/* CTA Button */}
        <Link href="/get-started" className="hidden md:block">
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black rounded-full px-5"
          >
            Schedule a Free Call <span className="ml-2">→</span>
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 L6 18" />
              <path d="M6 6 L18 18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-8 z-0">
            <Link
              href="/"
              className="text-xl text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/team"
              className="text-xl text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="/careers"
              className="text-xl text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/blog"
              className="text-xl text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/get-started"
              className="mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black rounded-full px-5"
              >
                Schedule a Free Call <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
