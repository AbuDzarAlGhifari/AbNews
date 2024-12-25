import React from 'react';
import CardHero from '../components/CardHero';
import CardGrid from '../components/CardGrid';
import CardSide from '../components/CardSide';
import { dummy_image } from '@/assets/index';

const HeroSection = () => {
  // Data untuk card
  const data = [
    {
      category: 'Category',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus sit',
      image: dummy_image,
    },
    {
      category: 'Category',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus sit',
      image: dummy_image,
    },
    {
      category: 'Category',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus sit',
      image: dummy_image,
    },
    {
      category: 'Category',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus sit',
      image: dummy_image,
    },
    {
      category: 'Category',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus sit',
      image: dummy_image,
    },
  ];

  // Data untuk Grid dan Side Cards
  const gridData = data.slice(1, 4); // 3 data untuk grid
  const sideCardData = data.slice(1); // 4 data untuk side cards

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* Section Kiri: Hero dan Grid */}
      <div className="col-span-2 space-y-6">
        {/* Hero Card */}
        <CardHero data={data[0]} />

        {/* Grid Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gridData.map((item, index) => (
            <CardGrid key={index} data={item} />
          ))}
        </div>
      </div>

      {/* Section Kanan: Side Cards */}
      <div className="flex flex-col gap-4">
        {sideCardData.map((item, index) => (
          <CardSide key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
