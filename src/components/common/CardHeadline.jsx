'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const CardHeadline = ({ headline }) => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl group"
    >
      {/* Gambar Headline */}
      <div className="overflow-hidden">
        <img
          src={headline.urlToImage}
          alt={headline.title}
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Konten */}
      <div className="p-5">
        <h3 className="mb-3 text-lg font-semibold text-gray-800 line-clamp-2">
          {headline.title}
        </h3>
        <div className="relative mb-4 text-sm text-gray-600 line-clamp-3">
          {headline.description}
        </div>
        <div className="mb-4 text-xs text-gray-500">
          <p>By {headline.author || 'Unknown Author'}</p>
          <p className="text-gray-400">
            {new Date(headline.publishedAt).toLocaleString()}
          </p>
          <p className="text-gray-400">
            Source: {headline.source?.name || 'Unknown Source'}
          </p>
        </div>
        <Link
          href={headline.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-full hover:bg-gray-700"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CardHeadline;
