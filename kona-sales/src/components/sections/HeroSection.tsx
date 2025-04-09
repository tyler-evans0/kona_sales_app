"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = [
    { id: "sales-skills", text: "Sales Skills" },
    { id: "fitness-plans", text: "Fitness Plans" },
    { id: "growth-mindsets", text: "Growth Mindsets" },
    { id: "financial-literacy", text: "Financial Literacy" },
    { id: "social-skills", text: "Social Skills" },
    { id: "sales-skills-2", text: "Sales Skills" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-cover bg-center min-h-screen flex items-center py-28 md:py-36" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="mb-6 text-shadow">
            We Empower Students with
          </h1>

          <div className="relative h-20 md:h-24 mb-12 overflow-hidden">
            {titles.map((title, index) => (
              <h2
                key={title.id}
                className={cn(
                  "absolute inset-0 transition-all duration-500 gradient-text text-4xl md:text-5xl lg:text-6xl",
                  index === currentTitleIndex
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-8"
                )}
              >
                {title.text}
              </h2>
            ))}
          </div>

          <p className="text-lg md:text-xl mb-8 text-white/90">
            Kona helps young entrepreneurs reach their full potential and advance their careers to the next step.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg"
              >
                Apply Now
              </Button>
            </Link>
          </div>

          <div className="mt-12 text-white/80">
            <p className="text-sm">Over 200+ Satisfied Students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
