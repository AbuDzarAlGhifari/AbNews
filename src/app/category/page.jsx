'use client';

import {
  business,
  entertainment,
  health,
  general,
  science,
  technology,
  sports,
} from '@/assets/index';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CategoryListPage = () => {
  const categories = [
    { name: 'Business', image: business },
    { name: 'Entertainment', image: entertainment },
    { name: 'Health', image: health },
    { name: 'Science', image: science },
    { name: 'Sports', image: sports },
    { name: 'Technology', image: technology },
    { name: 'General', image: general },
  ];

  const [loading, setLoading] = useState(true);
  const categoryRef = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        categoryRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [loading]);

  return (
    <div className="container max-w-6xl mx-auto mt-8">
      <h1 className="text-2xl font-bold">News Categories</h1>

      {loading ? (
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="relative p-4 border rounded shadow-md animate-pulse"
            >
              <div className="w-full h-48 bg-gray-300 rounded-md"></div>
              <div className="w-3/4 h-4 mt-4 bg-gray-300 rounded"></div>
              <div className="w-1/2 h-4 mt-2 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      ) : categories.length === 0 ? (
        <p className="mt-4 text-gray-500">No categories available.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              href={`/category/${category.name.toLowerCase()}`}
              key={index}
              ref={(el) => (categoryRef.current[index] = el)}
              className="relative p-4 border rounded shadow-md hover:shadow-lg"
            >
              <Image
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-48 mb-4 rounded-md"
              />
              <h1 className="block text-lg font-semibold text-center text-black">
                {category.name}
              </h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryListPage;
