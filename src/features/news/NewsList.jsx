'use client';

import React from 'react';
import Link from 'next/link';
import Card from '@/components/common/Card';
import Loader from '@/components/common/Loader';
import useNews from './hooks/useNews';

const NewsList = () => {
  const { articles, loading } = useNews();

  if (loading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Card key={article.slug} article={article}>
          <Link
            href={`/news/${article.slug}`}
            className="inline-block mt-2 text-blue-500"
          >
            Read More
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default NewsList;
