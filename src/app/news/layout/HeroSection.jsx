'use client';

import React, { useEffect, useState } from 'react';
import CardHero from '../components/CardHero';
import CardGrid from '../components/CardGrid';
import CardSide from '../components/CardSide';
import { fetchHeadlines } from '@/lib/api/news';

const HeroSection = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const articles = await fetchHeadlines('us', 10);
      setData(articles);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (data.length === 0) {
    return <div className="text-center">No news available</div>;
  }

  const gridData = data.slice(1, 4);
  const sideCardData = data.slice(4, 10);

  return (
    <div className="px-4 mx-auto mb-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-1 space-y-6 md:col-span-2">
          {/* Hero Card */}
          <CardHero data={data[0]} />

          {/* Grid Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gridData.map((item, index) => (
              <CardGrid key={index} data={item} />
            ))}
          </div>
        </div>

        {/* Side Cards */}
        <div className="flex flex-col gap-4">
          {sideCardData.map((item, index) => (
            <CardSide key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
