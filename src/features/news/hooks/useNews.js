'use client';

import { useState, useEffect } from 'react';
import slugify from 'slugify';
import { fetchNewsAPI } from '@/lib/api/news';

const useNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetchNewsAPI();
        const newsWithSlugs = response.map((article) => ({
          ...article,
          slug: slugify(article.title, { lower: true, strict: true }),
        }));
        setArticles(newsWithSlugs);
        setError(null);
      } catch (err) {
        setError('Failed to load news. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { articles, loading, error };
};

export default useNews;
