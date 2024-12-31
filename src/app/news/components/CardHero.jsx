'use client';

import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';

const CardHero = ({ data }) => {
  if (!data) return null;

  const slug = slugify(data.title, { lower: true, strict: true });

  return (
    <Link href={`/news/${slug}`} passHref>
      <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg group block">
        {/* Image Section */}
        <img
          src={data.urlToImage}
          alt={data.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay Section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

        {/* Text Content */}
        <div className="absolute text-white bottom-4 left-4">
          <span className="px-3 py-1 text-sm font-semibold text-black bg-white rounded bg-opacity-55">
            {data.source?.name || 'Unknown'}
          </span>
          <h2 className="mt-2 text-2xl font-bold leading-tight line-clamp-2">
            {data.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CardHero;
