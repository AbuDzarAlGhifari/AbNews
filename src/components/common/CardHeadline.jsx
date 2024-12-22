'use client';

import React from 'react';
import Link from 'next/link';

const CardHeadline = ({ headline }) => {
  return (
    <div className="relative overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl group">
      {/* Gambar Headline */}
      <div className="overflow-hidden">
        <img
          src={headline.urlToImage || '/default-image.jpg'}
          alt={headline.title}
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110 group-hover:transition-transform group-hover:duration-300"
        />
      </div>

      {/* Konten */}
      <div className="p-5">
        <h3 className="mb-3 text-lg font-semibold text-gray-800 line-clamp-2">
          {headline.title}
        </h3>

        {/* Deskripsi */}
        <div className="relative mb-4 text-sm text-gray-600 line-clamp-3">
          {headline.description}
          <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-white via-white" />
        </div>

        {/* Penulis dan Sumber */}
        <div className="mb-4 text-xs text-gray-500">
          <p>By {headline.author || 'Unknown Author'}</p>
          <p className="text-gray-400">
            {new Date(headline.publishedAt).toLocaleString()}
          </p>
          <p className="text-gray-400">
            Source: {headline.source?.name || 'Unknown Source'}
          </p>
        </div>

        {/* Garis Pembatas */}
        <div className="my-3 border-t border-gray-200" />

        {/* Tombol Read More */}
        <Link
          href={headline.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium text-center text-white transition-all bg-gray-600 rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CardHeadline;
