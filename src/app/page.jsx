import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="mt-8 text-center">
      <h1 className="mb-4 text-4xl font-bold">Welcome to NewsApp</h1>
      <p className="mb-8">
        Stay updated with the latest news from around the world.
      </p>
      <Link
        href="/news"
        className="px-4 py-2 text-white bg-blue-500 rounded-lg"
      >
        Explore News
      </Link>
    </div>
  );
}
