'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { IoIosArrowDown } from 'react-icons/io';
import CardHeadline from '@/components/common/CardHeadline';
import { fetchHeadlines } from '@/lib/api/news';

const HomePage = () => {
  const heroRef = useRef();
  const gridRef = useRef();
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    const loadHeadlines = async () => {
      setLoading(true);
      try {
        const data = await fetchHeadlines('us');
        const filteredHeadlines = data.filter(
          (headline) => headline.urlToImage
        );
        setHeadlines(filteredHeadlines);

        gsap.fromTo(
          gridRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
        );
      } catch (error) {
        console.error('Error fetching headlines:', error);
      } finally {
        setLoading(false);
      }
    };

    loadHeadlines();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="flex items-center justify-center px-4 py-12 text-center text-black lg:items-start lg:justify-normal sm:px-16 sm:py-16 lg:text-left"
      >
        <div className="max-w-4xl">
          <h1 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Stay Informed, Stay Ahead
          </h1>
          <p className="mb-8 text-base text-gray-700 sm:text-lg md:text-xl">
            Explore the latest headlines and breaking news from around the
            globe.
          </p>
          <Link
            href="/news"
            className="px-6 py-2 text-sm font-semibold text-white bg-black rounded-full sm:text-base hover:bg-gray-900"
          >
            Explore News
          </Link>
          <div className="mt-6">
            <p className="text-sm text-gray-700">
              Scroll down to discover more
            </p>
            <IoIosArrowDown className="w-6 h-6 mt-2 text-gray-700 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Headline Section */}
      <div className="px-4 mt-12 sm:px-6 md:px-10">
        <h2 className="mb-6 text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
          Top Headlines
        </h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading headlines...</p>
        ) : headlines.length > 0 ? (
          <div
            ref={gridRef}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {headlines.map((headline, index) => (
              <CardHeadline key={index} headline={headline} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No headlines with images available.
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
