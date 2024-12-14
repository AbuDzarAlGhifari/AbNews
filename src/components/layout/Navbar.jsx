'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4 text-white bg-blue-500">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-lg font-bold">
          NewsApp
        </Link>
        <div className="space-x-4">
          <Link href="/news">News</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
