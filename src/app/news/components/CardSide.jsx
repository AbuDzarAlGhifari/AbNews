import React from 'react';

const CardSide = ({ data }) => {
  if (!data) return null;

  return (
    <div className="flex items-center justify-center w-full pb-[21px] border-b-2">
      <div className="flex-shrink-0 w-full overflow-hidden rounded-md h-28 md:w-20 md:h-20">
        <img
          src={data.urlToImage}
          alt={data.title}
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="px-3 pt-2 text-black ">
        <span className="px-1 py-1 text-xs font-semibold text-white bg-black rounded bg-opacity-55">
          {data.source?.name || 'Unknown'}
        </span>
        <h2 className="mt-2 font-bold leading-tight line-clamp-2">
          {data.title}
        </h2>
      </div>
    </div>
  );
};

export default CardSide;
