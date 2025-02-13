'use client';

import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';

const CardGrid = ({ data }) => {
  if (!data) return null;

  const slug = slugify(data.title, { lower: true, strict: true });

  return (
    <Link href={`/news/${slug}`} passHref>
      <div className="relative w-full h-56 overflow-hidden rounded-lg shadow-md group">
        {/* Image Section */}
        <img
          src={data.urlToImage}
          alt={data.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay Section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:bg-opacity-70" />

        {/* Text Content */}
        <div className="absolute text-white bottom-4 left-4 right-4">
          <span className="px-3 py-1 text-xs font-medium text-black bg-white rounded-md bg-opacity-80">
            {data.source?.name || 'Unknown'}
          </span>
          <h2 className="mt-2 text-base font-semibold leading-tight line-clamp-2">
            {data.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CardGrid;
