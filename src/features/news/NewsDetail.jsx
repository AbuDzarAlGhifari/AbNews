'use client';

import React from 'react';
import { useRouter } from 'next/router';
import { useNews } from './hooks/useNews';

const NewsDetail = () => {
  const { query } = useRouter();
  const { data: articles } = useNews('', { page: 1 });

  const article = articles.find((item) => item.title === query.id);

  if (!article) return <p>Article not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </a>
    </div>
  );
};

export default NewsDetail;
