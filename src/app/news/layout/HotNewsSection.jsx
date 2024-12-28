'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import Card from '@/components/common/Card';

const HotNewsSection = ({ articles, isLoading }) => {
  const articlesRef = useRef([]);

  useEffect(() => {
    if (!isLoading && articles.length > 0) {
      // GSAP Animation
      gsap.from(articlesRef.current, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power2.out',
      });
    }
  }, [isLoading, articles]);

  return (
    <div>
      <h2 className="px-2 mb-3 text-2xl font-bold text-gray-800 sm:px-8">
        Hot News
      </h2>
      <div className="px-2 space-y-6 sm:px-8">
        {isLoading
          ? // Skeleton Loading
            Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="p-4 bg-gray-300 rounded-lg shadow-md animate-pulse"
              >
                <div className="w-1/3 h-6 mb-2 bg-gray-400 rounded-md"></div>
                <div className="w-2/3 h-4 mb-2 bg-gray-400 rounded-md"></div>
                <div className="w-1/2 h-4 bg-gray-400 rounded-md"></div>
              </div>
            ))
          : articles.slice(0, 5).map((article, index) => (
              <div
                key={article.id || `${article.slug}-${index}`}
                ref={(el) => (articlesRef.current[index] = el)} // Assign ref for animation
              >
                <Card article={article}>
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-block mt-2 font-semibold text-blue-500 transition duration-300 hover:text-blue-700"
                  >
                    Read More →
                  </Link>
                </Card>
              </div>
            ))}
      </div>
    </div>
  );
};

export default HotNewsSection;
