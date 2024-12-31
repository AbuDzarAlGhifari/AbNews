'use client';

import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';

const CardSide = ({ data }) => {
  if (!data) return null;

  const slug = slugify(data.title, { lower: true, strict: true });

  return (
    <Link href={`/news/${slug}`} passHref>
      <div className="flex flex-col items-center w-full pb-[21px] border-b-2 md:flex-row md:items-start group">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full overflow-hidden rounded-md h-28 md:w-20 md:h-20">
          <img
            src={data.urlToImage}
            alt={data.title}
            className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 px-3 mt-2 text-center text-black md:mt-0 md:text-left">
          <span className="px-2 py-1 text-xs font-semibold text-white bg-black rounded bg-opacity-55">
            {data.source?.name || 'Unknown'}
          </span>
          <h2 className="mt-2 text-sm font-bold leading-tight line-clamp-2 md:text-base">
            {data.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CardSide;
