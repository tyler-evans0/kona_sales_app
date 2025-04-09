"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">The Sales Process</h2>
          <p className="text-lg text-white/70 mb-8">
            We lay the foundation to help you succeed. We provide support while you learn.
            And in the end, we play just as hard as we work - always improving.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-4xl aspect-video bg-gray-800 rounded-lg overflow-hidden mb-8">
          {/* Video Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center cursor-pointer transition-all hover:bg-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white text-lg font-medium">
            Experience our journey
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gray-800 rounded-lg p-6 mb-4 h-40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Sales Training</h3>
            <p className="text-white/70">
              Before the sales season, we put you through a rigorous sales training program that helps you prepare to succeed.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-800 rounded-lg p-6 mb-4 h-40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Sales Season</h3>
            <p className="text-white/70">
              During the season, we continue to support and help you improve. You'll grow with like-minded students.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-800 rounded-lg p-6 mb-4 h-40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Sales Incentives & Refinement</h3>
            <p className="text-white/70">
              Trips, retreats, prizes, and more. Travel the world with your peers and refine your craft.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/get-started">
            <Button variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
              Learn More About Our Process
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
