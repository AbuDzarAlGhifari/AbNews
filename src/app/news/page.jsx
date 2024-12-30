'use client';

import React, { useState, useEffect } from 'react';
import useNews from '@/hooks/useNews';
import HeroSection from './layout/HeroSection';
import SliderSection from './layout/SliderSection';
import HotNewsSection from './layout/HotNewsSection';
import GlobalNewsSection from './layout/GlobalNewsSection';
import { FaArrowUp } from 'react-icons/fa';

const NewsPage = () => {
  const { articles, error, isLoading } = useNews();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="relative mx-auto sm:p-4 max-w-7xl">
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

      <GlobalNewsSection />

      <div className="p-8 mx-auto">
        <hr />
      </div>

      {/* Hot News Section */}
      <HotNewsSection articles={articles} isLoading={isLoading} />

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-3 text-white bg-gray-600 rounded-full shadow-md bottom-5 right-5 hover:bg-black"
          aria-label="Scroll to Top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default NewsPage;
