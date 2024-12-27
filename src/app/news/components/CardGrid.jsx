import React from 'react';

const CardGrid = ({ data }) => {
  if (!data) return null;

  const imageUrl = data.urlToImage || '/placeholder.jpg';
  console.log('Image URL:', data.urlToImage);

  return (
    <div className="relative w-full h-56 overflow-hidden rounded-lg shadow-md group">
      <img
        src={imageUrl}
        alt={data.title}
        layout="fill"
        className="transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      <div className="absolute text-white bottom-4 left-4">
        <span className="px-3 py-1 text-xs font-medium text-black bg-white rounded-md bg-opacity-70">
          {data.source?.name || 'Unknown'}
        </span>
        <h2 className="mt-2 text-lg font-bold leading-snug line-clamp-2 group-hover:line-clamp-none">
          {data.title}
        </h2>
      </div>
    </div>
  );
};

export default CardGrid;
