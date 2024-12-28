'use client';

import React from 'react';
import useNews from '@/hooks/useNews';
import HeroSection from './layout/HeroSection';
import SliderSection from './layout/SliderSection';
import HotNewsSection from './layout/HotNewsSection';

const NewsPage = () => {
  const { articles, error, isLoading } = useNews();

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="mx-auto sm:p-4 max-w-7xl">
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

      {/* Hot News Section */}
      <HotNewsSection articles={articles} isLoading={isLoading} />
    </div>
  );
};

export default NewsPage;
