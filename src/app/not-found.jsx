'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoMdHome } from 'react-icons/io';
import { gsap } from 'gsap';

const NotFoundPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
      .fromTo(
        '.fade-in',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
        '-=0.5'
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="text-center">
        <h1 className="font-bold text-gray-800 text-9xl fade-in">404</h1>
        <p className="mt-4 text-xl font-medium text-gray-600 fade-in">
          Lorem ipsum dolor sit, amet consectetur
        </p>
        <p className="mt-2 text-gray-500 fade-in">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>

        <div className="mt-6 fade-in">
          <Link href="/">
            <p className="inline-flex items-center px-6 py-3 text-lg font-medium text-white transition duration-300 bg-black rounded-md shadow-md hover:bg-gray-800">
              <IoMdHome className="mr-2 text-2xl" />
              Back to Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
