'use client';

import { fetchNewsAPI } from '@/lib/api/news';
import { useState, useEffect } from 'react';
import slugify from 'slugify';

const useNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetchNewsAPI();
        const newsWithSlugs = response.map((article) => ({
          ...article,
          slug: slugify(article.title, { lower: true, strict: true }), // Add slug
        }));
        setArticles(newsWithSlugs);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { articles, loading };
};

export default useNews;
