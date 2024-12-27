import React from 'react';

const CardHero = ({ data }) => {
  if (!data) return null;

  return (
    <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
      <img
        src={data.urlToImage || '/placeholder.jpg'}
        alt={data.title}
        className="object-cover w-full h-full"
        layout="fill"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      <div className="absolute text-white bottom-4 left-4">
        <span className="px-3 py-1 text-sm font-semibold text-black bg-white rounded bg-opacity-55">
          {data.source?.name || 'Unknown'}
        </span>
        <h2 className="mt-2 text-2xl font-bold leading-tight line-clamp-2 hover:line-clamp-none">
          {data.title}
        </h2>
      </div>
    </div>
  );
};

export default CardHero;
