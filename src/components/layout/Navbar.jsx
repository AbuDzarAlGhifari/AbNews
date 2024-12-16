'use client';

import { logo_web } from '@/assets/index';
import useCategories from '@/hooks/useCategories';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiSearchCircle } from 'react-icons/hi';
import { IoSearch } from 'react-icons/io5';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { categories, loading } = useCategories();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    setIsSearchActive(false);
  };

  return (
    <nav className="p-4 bg-white border-b border-gray-600">
      <div className="container flex items-center justify-between max-w-6xl pb-4 mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image src={logo_web} alt="logo" className="w-24" />
        </Link>

        {/* Search and Theme Toggle */}
        <div className="flex items-center gap-2 ">
          <div className="flex gap-2 ">
            <h1 className="text-sm font-medium text-gray-600 capitalize hover:text-black">
              News
            </h1>
            <h1 className="text-sm font-medium text-gray-600 capitalize hover:text-black">
              category
            </h1>
          </div>
          <div>
            {isSearchActive ? (
              // Search Form (replaces the icon)
              <form onSubmit={handleSearch} className="flex items-center ">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-2 border border-gray-300 rounded-l max-w-28 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="submit"
                  className="text-white bg-black border border-gray-300 rounded-r hover:bg-gray-800"
                >
                  <IoSearch className="size-6 p-0.5 " />
                </button>
              </form>
            ) : (
              // Search Icon (initial state)
              <HiSearchCircle
                className="text-gray-500 cursor-pointer size-6 hover:text-gray-800"
                onClick={() => setIsSearchActive(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center justify-center space-x-4 overflow-x-auto ">
        {loading ? (
          <span className="text-sm text-gray-500">Loading...</span>
        ) : (
          categories.map((category, index) => (
            <Link
              key={index}
              href={`/${category}`}
              className="text-sm font-medium text-gray-600 capitalize hover:text-black"
            >
              {category}
            </Link>
          ))
        )}
      </div>
    </nav>
  );
};

export default Navbar;
