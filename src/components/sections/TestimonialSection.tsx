"use client";

import React from 'react';
import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-950 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="text-center mb-8">
              <Image
                src="/images/founder-placeholder.svg"
                alt="Josh - Founder"
                width={80}
                height={80}
                className="rounded-full object-cover border-2 border-white h-20 w-20 mx-auto"
              />
              <h5 className="text-white text-sm mt-4">Josh</h5>
              <p className="text-white/70 text-xs">Founder</p>
              <p className="text-white/70 text-xs uppercase">KONA</p>
            </div>

            <div className="relative z-10">
              <svg className="w-12 h-12 text-gray-800 absolute -top-6 -left-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-xl md:text-2xl text-white text-center mb-6">
                "As a mentor, I focus on the real skills—sales, personal growth, and fitness—that empower my students to transform their lives."
              </blockquote>

              <p className="text-white/70 text-center italic">
                We love a good "Oh the places you'll go" moment
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12 space-x-6">
            <Image
              src="/images/partner1.svg"
              alt="Partner Logo"
              width={100}
              height={50}
              className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/partner2.png"
              alt="Partner Logo"
              width={100}
              height={50}
              className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>

      {/* Testimonials from Past Students */}
      <div className="container mx-auto px-4 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Hear From Our Past Students</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-900/50 p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="shrink-0">
              <Image
                src="/images/testimonial1.jpeg"
                alt="Sales Representative"
                width={80}
                height={80}
                className="rounded-full object-cover w-20 h-20 border-2 border-white/10"
              />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-1">Sales Representative</h4>
              <p className="text-sm text-white/60 mb-4">4th Year • Top Performer</p>
              <blockquote className="text-white/80 text-sm md:text-base">
                "Working with Kona Sales has been an incredible journey. I've developed skills that have transformed not just my career, but my entire approach to life. The mentorship and training provided are second to none."
              </blockquote>
            </div>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="shrink-0">
              <Image
                src="/images/testimonial1.jpeg"
                alt="Sales Representative 2"
                width={80}
                height={80}
                className="rounded-full object-cover w-20 h-20 border-2 border-white/10"
              />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-1">Sales Team Lead</h4>
              <p className="text-sm text-white/60 mb-4">3rd Year • Leadership Program</p>
              <blockquote className="text-white/80 text-sm md:text-base">
                "Before joining Kona, I struggled with confidence and communication. The structured training and supportive community helped me unlock my potential and develop leadership skills I never knew I had."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
