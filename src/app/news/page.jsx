'use client';

import React from 'react';
import Link from 'next/link';
import Card from '@/components/common/Card';
import Loader from '@/components/common/Loader';
import useNews from '@/hooks/useNews';

const NewsPage = () => {
  const params = { country: 'us', page: 1, pageSize: 10 };

  const { articles, loading, error } = useNews();

  if (loading) return <Loader />;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-4 mx-auto ">
      <h1 className="mb-4 text-3xl font-bold">Trending News</h1>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <Card
            key={article.id || `${article.slug}-${index}`}
            article={article}
          >
            <Link
              href={`/news/${article.slug}`}
              className="inline-block mt-2 font-semibold text-blue-500"
            >
              Read More →
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
