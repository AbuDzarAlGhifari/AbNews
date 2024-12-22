'use client';

import React from 'react';
import Link from 'next/link';
import Card from '@/components/common/Card';
import Loader from '@/components/common/Loader';
import useNews from './hooks/useNews';

const NewsList = () => {
  const { articles, loading, error } = useNews();

  if (loading) return <Loader />;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="space-y-6">
      {articles.map((article, index) => (
        <Card key={article.id || `${article.slug}-${index}`} article={article}>
          <Link
            href={`/news/${article.slug}`}
            className="inline-block mt-2 font-semibold text-blue-500"
          >
            Read More →
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default NewsList;
