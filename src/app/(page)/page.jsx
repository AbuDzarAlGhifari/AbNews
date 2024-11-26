'use client';

import React from 'react';
import Slider from 'react-slick';

const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content with Sidebar */}
      <div className="container grid grid-cols-1 gap-8 px-4 py-8 mx-auto lg:grid-cols-5">
        {/* Sidebar */}
        <div className="hidden col-span-1 p-4 bg-white rounded-lg shadow-lg lg:block">
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            Trending Topics
          </h3>
          <ul className="space-y-4">
            {[
              'Politics',
              'Technology',
              'Sports',
              'Health',
              'Entertainment',
            ].map((topic, index) => (
              <li
                key={index}
                className="text-gray-700 cursor-pointer hover:text-blue-500"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Section */}
        <div className="col-span-3">
          {/* Hero Section with Carousel */}
          <section className="relative py-20 mb-8 text-white bg-blue-600 rounded-lg shadow-lg">
            <div className="container px-4 mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                Stay Updated with the Latest News
              </h2>
              <p className="mb-6 text-lg">
                Get all the latest updates from around the world at your
                fingertips.
              </p>
              <a
                href="#latest"
                className="px-6 py-3 font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-100"
              >
                Explore Now
              </a>
            </div>

            {/* Carousel */}
            <div className="absolute w-full max-w-4xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <Slider {...settings}>
                <div>
                  <img
                    src="https://via.placeholder.com/1200x600?text=Slide+1"
                    alt="Slide 1"
                    className="object-cover w-full h-64 rounded-lg"
                  />
                  <div className="absolute left-0 right-0 text-center text-white transform -translate-y-1/2 top-1/2">
                    <h3 className="text-2xl font-bold">Breaking News 1</h3>
                    <p className="mt-2">Description for slide 1</p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://via.placeholder.com/1200x600?text=Slide+2"
                    alt="Slide 2"
                    className="object-cover w-full h-64 rounded-lg"
                  />
                  <div className="absolute left-0 right-0 text-center text-white transform -translate-y-1/2 top-1/2">
                    <h3 className="text-2xl font-bold">Breaking News 2</h3>
                    <p className="mt-2">Description for slide 2</p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://via.placeholder.com/1200x600?text=Slide+3"
                    alt="Slide 3"
                    className="object-cover w-full h-64 rounded-lg"
                  />
                  <div className="absolute left-0 right-0 text-center text-white transform -translate-y-1/2 top-1/2">
                    <h3 className="text-2xl font-bold">Breaking News 3</h3>
                    <p className="mt-2">Description for slide 3</p>
                  </div>
                </div>
              </Slider>
            </div>
          </section>

          {/* Latest News Section */}
          <section id="latest" className="py-16">
            <h3 className="mb-8 text-2xl font-bold text-gray-800">
              Latest News
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <article
                  key={index}
                  className="p-4 transition rounded-lg shadow bg-gray-50 hover:shadow-lg"
                >
                  <img
                    src={`https://via.placeholder.com/300x200?text=News+${
                      index + 1
                    }`}
                    alt={`News ${index + 1}`}
                    className="object-cover w-full h-40 mb-4 rounded-md"
                  />
                  <h4 className="mb-2 text-lg font-bold text-gray-700">
                    News Title {index + 1}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque tincidunt orci a ligula...
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-2 text-sm text-blue-500 hover:underline"
                  >
                    Read more
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Popular News Section */}
          <section id="popular" className="py-16 bg-gray-50">
            <h3 className="mb-8 text-2xl font-bold text-gray-800">
              Popular News
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <article
                  key={index}
                  className="p-4 transition bg-white rounded-lg shadow-lg hover:shadow-xl"
                >
                  <img
                    src={`https://via.placeholder.com/300x200?text=Popular+${
                      index + 1
                    }`}
                    alt={`Popular ${index + 1}`}
                    className="object-cover w-full h-40 mb-4 rounded-md"
                  />
                  <h4 className="mb-2 text-lg font-bold text-gray-700">
                    Popular News Title {index + 1}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Curabitur id eros ut orci convallis gravida. Vivamus
                    fringilla...
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-2 text-sm text-blue-500 hover:underline"
                  >
                    Read more
                  </a>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Advertisement Section */}
        <div className="hidden col-span-1 lg:block">
          <div className="p-4 mb-8 bg-gray-200 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-gray-800">Sponsored</h4>
            <p className="mt-4 text-gray-600">
              Check out our latest sponsored content for exciting news and
              updates!
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="py-16 bg-blue-100">
        <div className="container px-4 mx-auto text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            What Our Readers Say
          </h3>
          <div className="flex flex-wrap justify-center space-x-6">
            {['Reader 1', 'Reader 2', 'Reader 3'].map((reader, index) => (
              <div
                key={index}
                className="max-w-xs p-6 mb-6 bg-white rounded-lg shadow"
              >
                <p className="mb-4 text-gray-600">
                  This is an amazing platform to stay up-to-date with the latest
                  happenings around the world. Highly recommend!
                </p>
                <p className="font-semibold text-gray-800">{reader}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
