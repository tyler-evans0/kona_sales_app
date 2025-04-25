"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const BusinessSection = () => {
  return (
    <section className="relative bg-cover bg-center py-16 md:py-24" style={{ backgroundImage: "url('/images/quote-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="uppercase text-xs tracking-wider mb-2 inline-block text-white/80">
            Are you a business owner?
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Looking to Scale your Pest Control Business?
          </h2>

          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Unlock a significant boost to your company's revenue by partnering with Kona. We make it easier for your business to scale by taking complete control of the sales process.
          </p>

          <Link href="/get-started">
            <Button
              variant="outline"
              className="rounded-full px-6 py-2 border-white text-white hover:bg-white hover:text-black"
            >
              Get Started <span className="ml-2">→</span>
            </Button>
          </Link>

          <div className="mt-12 max-w-xl mx-auto">
            <blockquote className="text-lg md:text-xl italic mb-3 text-white/90">
              "The Kona Sales team helped our company generate an added $10 million in revenue during the Summer of 2024, these guys are the legit, real deal!"
            </blockquote>
            <cite className="text-white/80 not-italic text-base">
              Ian Gunn <span className="mx-2">—</span> Aruza LLC
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
