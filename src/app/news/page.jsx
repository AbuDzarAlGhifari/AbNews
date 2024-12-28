'use client';

import React from 'react';
import Link from 'next/link';
import Card from '@/components/common/Card';
import Loader from '@/components/common/Loader';
import useNews from '@/hooks/useNews';
import HeroSection from './layout/HeroSection';
import SliderSection from './layout/SliderSection';

const NewsPage = () => {
  const params = { country: 'us', page: 1, pageSize: 7 };
  const { articles, loading, error } = useNews();

  if (loading) return <Loader />;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-4 mx-auto max-w-7xl">
      {/* Hero Section */}
      <HeroSection />

      <div className="p-8 mx-auto">
        <hr />
      </div>

      {/* Slider Section */}
      <SliderSection />

      <div className="p-8 mx-auto">
        <hr />
      </div>

      {/* Articles List */}
      <h2 className="px-8 mb-3 text-2xl font-bold text-gray-800">Hot News</h2>
      <div className="px-8 space-y-6">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <Card
              key={article.id || `${article.slug}-${index}`}
              article={article}
            >
              <Link
                href={`/news/${article.slug}`}
                className="inline-block mt-2 font-semibold text-blue-500 transition duration-300 hover:text-blue-700"
              >
                Read More →
              </Link>
            </Card>
          ))
        ) : (
          <div className="text-center text-gray-500">No articles available</div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
