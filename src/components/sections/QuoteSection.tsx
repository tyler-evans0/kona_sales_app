"use client";

import React from 'react';
import Image from 'next/image';

const QuoteSection = () => {
  return (
    <section className="relative bg-cover bg-center py-16 md:py-20" style={{ backgroundImage: "url('/images/quote-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 text-white">
          <div className="shrink-0">
            <Image
              src="/images/vince.jpeg"
              alt="Vince Lombardi"
              width={80}
              height={80}
              className="rounded-full object-cover w-20 h-20"
            />
          </div>

          <div>
            <blockquote className="text-xl md:text-2xl font-serif italic mb-3">
              "Winning isn't everything, but wanting to win is."
            </blockquote>
            <cite className="text-white/80 font-sans not-italic text-lg">
              Vince Lombardi
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
