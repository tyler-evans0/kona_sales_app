"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 'charisma',
      slug: 'the-hidden-power-of-charisma-why-magnetic-people-make-bigger-waves',
      title: 'The Hidden Power of Charisma: Why Magnetic People Make Bigger Waves',
      category: 'Life Skills',
      date: 'Nov 10, 2024',
      image: '/images/article1.jpeg'
    },
    {
      id: 'communicator',
      slug: 'the-power-of-becoming-a-super-communicator-your-path-to-extraordinary-success',
      title: 'The Power of Becoming a Super Communicator: Your Path to Extraordinary Success',
      category: 'Communication',
      date: 'Nov 8, 2024',
      image: '/images/article2.jpeg'
    },
    {
      id: 'sales-skills',
      slug: 'why-sales-skills-are-critical-for-your-career-success',
      title: 'Why Sales Skills Are Critical for Your Career Success',
      category: 'Sales',
      date: 'Nov 4, 2024',
      image: '/images/article3.jpeg'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl">
            Latest From Our Resources
          </h2>

          <Link href="/blog">
            <Button variant="ghost" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
              See All Posts <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <CardContent className="pt-6 flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {post.category}
                    </span>
                    <span className="text-gray-300">—</span>
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
