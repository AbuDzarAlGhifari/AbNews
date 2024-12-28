import { fetchHeadlines } from '@/lib/api/news';
import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const SliderSection = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const getHeadlines = async () => {
      const data = await fetchHeadlines('us', 8);
      setHeadlines(data);
    };

    getHeadlines();
  }, []);

  return (
    <div className="relative px-4 py-6 mx-auto pt-9 md:px-6 lg:px-8">
      <h2 className="mb-3 text-2xl font-bold text-gray-800">Weekly Top News</h2>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
          navigation={{
            nextEl: '.custom-swiper-next',
            prevEl: '.custom-swiper-prev',
          }}
        >
          {headlines.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="my-2 overflow-hidden bg-white rounded-lg shadow-md">
                <div className="relative">
                  <img
                    src={item.urlToImage || '/placeholder-image.jpg'}
                    alt={item.title}
                    className="object-cover w-full h-40 rounded-t-lg"
                  />
                  <span className="absolute px-3 py-1 text-xs font-semibold text-white bg-pink-600 rounded top-2 left-2">
                    {item.source?.name || 'Unknown'}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500">
                    {new Date(item.publishedAt).toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-800 line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="absolute left-0 z-10 flex items-center justify-center w-6 h-6 -mx-3.5 text-white -translate-y-1/2 bg-gray-800 rounded-full shadow-md bg-opacity-45 custom-swiper-prev top-1/2"
          aria-label="Previous Slide"
        >
          <IoIosArrowBack />
        </button>
        <button
          className="absolute right-0 z-10 flex items-center justify-center w-6 h-6 -mx-3.5 text-white -translate-y-1/2 bg-gray-800 rounded-full shadow-md bg-opacity-45 custom-swiper-next top-1/2"
          aria-label="Next Slide"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default SliderSection;
