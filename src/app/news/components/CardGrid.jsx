import Image from 'next/image';
import React from 'react';

const CardGrid = ({ data }) => {
  if (!data) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-md h-60 group">
      <Image
        src={data.image}
        alt={data.title}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      <div className="absolute text-white bottom-4 left-4">
        <span className="px-3 py-1 text-xs font-medium text-black bg-white rounded-md bg-opacity-70">
          {data.category}
        </span>
        <h2 className="mt-2 text-lg font-bold leading-snug line-clamp-2 group-hover:line-clamp-none">
          {data.title}
        </h2>
      </div>
    </div>
  );
};

export default CardGrid;
