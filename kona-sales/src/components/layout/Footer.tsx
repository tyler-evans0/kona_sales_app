"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing:', email);
    // Reset form
    setEmail('');
  };

  return (
    <footer className="relative bg-cover bg-center pt-16 pb-6 text-white" style={{ backgroundImage: "url('/images/lotus-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <Link href="/">
              <Image
                src="/images/kona-logo.svg"
                alt="Kona Sales"
                width={100}
                height={40}
                className="h-8 w-auto mb-6"
              />
            </Link>

            <div className="mb-8">
              <h3 className="text-lg font-sans font-medium mb-4">Sign up to our newsletter</h3>
              <form onSubmit={handleSubmit} className="flex max-w-md">
                <Input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-l-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/30"
                />
                <Button
                  type="submit"
                  className="rounded-r-full bg-white text-black hover:bg-white/90"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-sans font-medium mb-4">Pages</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Home
                </Link>
                <Link href="/team" className="hover:text-white/80 transition-colors">
                  Our Team
                </Link>
                <Link href="/careers" className="hover:text-white/80 transition-colors">
                  Careers
                </Link>
                <Link href="/blog" className="hover:text-white/80 transition-colors">
                  Blog
                </Link>
                <Link href="/privacy-policy" className="hover:text-white/80 transition-colors">
                  Privacy Policy
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-sans font-medium mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Image
                    src="/images/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Image
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="https://x.com/the0teo" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Image
                    src="/images/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-sm text-white/70 flex flex-col md:flex-row justify-between">
          <p>© Kona Sales Partners LLC 2024. All rights reserved.</p>
          <p>
            <a
              href="https://wizetemplates.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Designed by Rogue Sea
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
