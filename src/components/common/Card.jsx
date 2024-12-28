'use client';

import { no_image } from '@/assets/index';
import React from 'react';

const Card = ({ article, children }) => {
  const imageSrc = article.urlToImage || no_image;

  return (
    <div className="flex flex-col gap-4 p-4 my-5 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:shadow-md">
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-full h-32 overflow-hidden rounded-md md:w-48 md:h-48">
        <img
          src={imageSrc}
          alt={article.title || 'No image available'}
          className="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 transition-colors duration-300 line-clamp-2 hover:text-blue-600">
          {article.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {article.description || 'No description available.'}
        </p>

        {/* Metadata */}
        <div className="mt-4 text-xs text-gray-500">
          {article.author && <p>By: {article.author}</p>}
          {article.publishedAt && (
            <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
          )}
        </div>

        {/* Children */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Card;
