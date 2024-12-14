'use client';

import React from 'react';

const Card = ({ article, children }) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-semibold">{article.title}</h2>
      <p className="mt-2 text-sm text-gray-600">{article.description}</p>
      {children}
    </div>
  );
};

export default Card;
