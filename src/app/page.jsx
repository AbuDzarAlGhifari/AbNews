'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchHeadlines } from '@/lib/api/news';
import { IoIosArrowDown } from 'react-icons/io';
import CardHeadline from '@/components/common/CardHeadline';

const HomePage = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadHeadlines = async () => {
      setLoading(true);
      try {
        const data = await fetchHeadlines('us');
        console.log('Headlines:', data);
        const filteredHeadlines = data.filter(
          (headline) => headline.urlToImage
        );
        setHeadlines(filteredHeadlines);
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
      <div className="flex items-start justify-start text-black">
        <div className="max-w-4xl px-4 py-12 sm:px-16 sm:py-16">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Stay Informed, Stay Ahead
          </h1>
          <p className="mb-8 text-lg font-light leading-relaxed text-gray-700 sm:text-xl">
            Explore the latest headlines and breaking news from around the
            globe.
          </p>
          <Link
            href="/news"
            className="px-6 py-2 font-semibold text-white transition-transform transform bg-black rounded-full shadow-md sm:px-8 sm:py-4 sm:text-lg hover:bg-gray-900 hover:shadow-lg hover:-translate-y-1"
          >
            Explore News
          </Link>
          <div className="mt-6">
            <p className="text-sm font-light text-gray-700">
              Scroll down to discover more
            </p>
            <IoIosArrowDown className="w-6 h-6 mt-2 text-gray-700 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Headline Section */}
      <div className="px-10 mt-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Top Headlines</h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading headlines...</p>
        ) : headlines.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
