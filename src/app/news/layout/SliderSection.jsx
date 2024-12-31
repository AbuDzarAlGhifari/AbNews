'use client';

import { fetchNewsByQuery } from '@/lib/api/news';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import gsap from 'gsap';
import 'swiper/swiper-bundle.css';

const SliderSection = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Ref untuk GSAP
  const slideContainerRef = useRef(null);

  useEffect(() => {
    const getNews = async () => {
      setIsLoading(true);
      const data = await fetchNewsByQuery('latest news', 1, 8);
      setNews(data);
      setIsLoading(false);
    };

    getNews();
  }, []);

  // Animasi dengan GSAP
  useEffect(() => {
    if (!isLoading && slideContainerRef.current) {
      gsap.fromTo(
        slideContainerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }
  }, [isLoading]);

  return (
    <div className="relative px-4 mx-auto md:px-6 lg:px-8">
      <h2 className="mb-3 text-2xl font-bold text-gray-800">Latest News</h2>

      <div className="relative">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-full bg-gray-300 rounded-lg h-60 animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: '.custom-swiper-next',
              prevEl: '.custom-swiper-prev',
            }}
          >
            <div ref={slideContainerRef}>
              {news.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link
                    href={`/news/${item.title
                      .replace(/ /g, '-')
                      .toLowerCase()}`}
                    passHref
                  >
                    <div className="block my-2 overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                      <div className="relative">
                        <img
                          src={item.urlToImage}
                          alt={item.title}
                          className="object-cover w-full h-40 rounded-t-lg"
                        />
                        <span className="absolute px-3 py-1 text-xs font-semibold text-white bg-pink-600 rounded top-2 left-2">
                          {item.source?.name || 'Unknown'}
                        </span>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-500">
                          {new Date(item.publishedAt).toLocaleDateString(
                            'en-US',
                            {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            }
                          )}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-gray-800 line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        )}

        {/* Navigation Buttons */}
        <button
          className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -m-2 text-white -translate-y-1/2 bg-gray-800 rounded-full shadow-md sm:-m-4 bg-opacity-70 custom-swiper-prev top-1/2 hover:bg-gray-700"
          aria-label="Previous Slide"
        >
          <IoIosArrowBack />
        </button>
        <button
          className="absolute right-0 z-10 flex items-center justify-center w-8 h-8 -m-2 text-white -translate-y-1/2 bg-gray-800 rounded-full shadow-md sm:-m-4 bg-opacity-70 custom-swiper-next top-1/2 hover:bg-gray-700"
          aria-label="Next Slide"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default SliderSection;
