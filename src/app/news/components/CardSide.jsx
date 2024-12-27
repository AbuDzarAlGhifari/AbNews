import React from 'react';

const CardSide = ({ data }) => {
  if (!data) return null;

  return (
    <div className="flex items-center justify-center w-full h-40 my-1 overflow-hidden ">
      <div className="flex-shrink-0 w-full overflow-hidden rounded-md h-28 md:w-32 md:h-32">
        <img
          src={data.urlToImage}
          alt={data.title}
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="px-3 py-1 text-black bottom-4 left-4">
        <span className="px-1 py-1 text-sm font-semibold text-white bg-black rounded bg-opacity-55">
          {data.source?.name || 'Unknown'}
        </span>
        <h2 className="mt-2 text-lg font-bold leading-tight line-clamp-2 hover:line-clamp-none">
          {data.title}
        </h2>
      </div>
    </div>
  );
};

export default CardSide;
