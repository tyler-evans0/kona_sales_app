"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const FeaturesSection = () => {
  const features = [
    {
      id: 'sales-skills',
      title: 'Instilling Sales Skills',
      description: 'Learn proven techniques to connect with customers, overcome objections, and close deals consistently.'
    },
    {
      id: 'growth-mindset',
      title: 'Building a Growth Mindset',
      description: 'Develop the mental fortitude to push through challenges and continuously level up your performance.'
    },
    {
      id: 'fitness-plans',
      title: 'Establishing Fitness Plans',
      description: 'Access specialized fitness routines designed to boost your energy, confidence, and overall well-being.'
    },
    {
      id: 'financial-literacy',
      title: 'Encouraging Financial Literacy',
      description: 'Master the principles of financial management to achieve true independence and long-term wealth.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-black/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="uppercase text-xs tracking-wider text-white/70 mb-2 inline-block">
            Why Kona
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Partner with Kona to Grow Your Career
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center p-6 rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              <h3 className="text-lg font-medium text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/get-started">
            <Button
              className="rounded-full bg-white text-black hover:bg-white/90 px-8"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
