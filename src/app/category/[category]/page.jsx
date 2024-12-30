'use client';

import CardHeadline from '@/components/common/CardHeadline';
import { fetchNewsByCategory } from '@/lib/api/news';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SkeletonCard = () => (
  <div className="p-4 border rounded shadow animate-pulse">
    <div className="w-full h-48 bg-gray-200 rounded"></div>
    <div className="h-4 mt-4 bg-gray-200 rounded"></div>
    <div className="w-5/6 h-4 mt-2 bg-gray-200 rounded"></div>
    <div className="w-4/6 h-4 mt-2 bg-gray-200 rounded"></div>
    <div className="w-1/3 h-4 mt-4 bg-gray-200 rounded"></div>
  </div>
);

const CategoryPage = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return;

    const loadCategoryNews = async () => {
      setLoading(true);
      const articles = await fetchNewsByCategory(category);
      setNews(articles);
      setLoading(false);
    };

    loadCategoryNews();
  }, [category]);

  return (
    <div className="container max-w-6xl mx-auto mt-8">
      <h1 className="text-2xl font-bold capitalize">
        {category ? `${category} News` : 'Category News'}
      </h1>

      {loading ? (
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : news.length === 0 ? (
        <p className="mt-4 text-gray-500">
          No news articles found for this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((article, index) => (
            <CardHeadline key={index} headline={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
