'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import CardHero from '../components/CardHero';
import CardGrid from '../components/CardGrid';
import CardSide from '../components/CardSide';
import { fetchHeadlines } from '@/lib/api/news';

const SkeletonCard = ({ type }) => {
  switch (type) {
    case 'hero':
      return (
        <div className="w-full h-[450px] bg-gray-300 animate-pulse rounded-lg"></div>
      );
    case 'grid':
      return (
        <div className="w-full h-56 bg-gray-300 rounded-lg animate-pulse"></div>
      );
    case 'side':
      return (
        <div className="flex items-center w-full gap-3 pb-[21px] border-b-2">
          <div className="w-20 h-20 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="flex-1 space-y-3">
            <div className="w-3/4 h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="w-1/2 h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const HeroSection = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);
  const gridRefs = useRef([]);
  const sideRefs = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const articles = await fetchHeadlines('us', 10);
      setData(articles);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Hero Card Animation
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

      // Grid Cards Animation
      gsap.fromTo(
        gridRefs.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );

      // Side Cards Animation
      gsap.fromTo(
        sideRefs.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );
    }
  }, [isLoading]);

  const gridData = data.slice(1, 4);
  const sideCardData = data.slice(4, 10);

  return (
    <div className="mx-auto mb-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-1 space-y-6 md:col-span-2">
          {/* Hero Card */}
          {isLoading ? (
            <SkeletonCard type="hero" />
          ) : (
            <div ref={heroRef}>
              <CardHero data={data[0]} />
            </div>
          )}

          {/* Grid Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <SkeletonCard key={index} type="grid" />
                ))
              : gridData.map((item, index) => (
                  <div key={index} ref={(el) => (gridRefs.current[index] = el)}>
                    <CardGrid data={item} />
                  </div>
                ))}
          </div>
        </div>

        {/* Side Cards */}
        <div className="flex flex-col gap-4">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} type="side" />
              ))
            : sideCardData.map((item, index) => (
                <div key={index} ref={(el) => (sideRefs.current[index] = el)}>
                  <CardSide data={item} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
