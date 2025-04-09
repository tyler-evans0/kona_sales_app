"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const StatsSection = () => {
  const stats = [
    {
      id: 'sales-volume',
      value: '$30M+',
      label: 'Total Sales Volume'
    },
    {
      id: 'accounts-sold',
      value: '10K',
      label: 'Accounts Sold'
    },
    {
      id: 'total-reps',
      value: '200+',
      label: 'Total Reps'
    },
    {
      id: 'equity-partners',
      value: '6',
      label: 'Total Equity Partners'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "url('/images/lotus-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        mixBlendMode: 'overlay'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Kona Sales in Numbers
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We're not ones to talk the talk, but our numbers speak for themselves.
          </p>

          <div className="mt-6">
            <Link href="/team">
              <Button
                variant="outline"
                className="rounded-full px-6 py-2 border-white text-white hover:bg-white hover:text-black"
              >
                See the team
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl text-white font-serif mb-2 gradient-text">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
