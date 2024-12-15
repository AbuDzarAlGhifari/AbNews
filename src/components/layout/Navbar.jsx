'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { HiSearchCircle } from 'react-icons/hi';
import { IoMoon, IoSearch, IoSunny } from 'react-icons/io5';
import { logo_web } from '@/assets/index';
import Image from 'next/image';

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [themeMode, setThemeMode] = useState('light');

  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://newsapi.org/v2/sources', {
        params: {
          apiKey: API_KEY,
        },
      });

      const uniqueCategories = [
        ...new Set(response.data.sources.map((source) => source.category)),
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);

    setIsSearchActive(false);
  };

  // Apply theme to the document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', themeMode === 'dark');
  }, [themeMode]);

  // Toggle the theme
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="p-4 bg-white border-b border-gray-600">
      <div className="container flex items-center justify-between pb-4 mx-auto ">
        {/* Logo */}
        <Link href="/">
          <Image src={logo_web} alt="logo" className="w-24" />
        </Link>

        {/* Search */}
        <div className="flex items-center gap-2 ">
          <div className="flex gap-2">
            <h1>News</h1>
            <h1>About</h1>
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
                  className="px-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-black"
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
                onClick={() => setIsSearchActive(true)} // Switch to the form
              />
            )}
          </div>

          <button onClick={toggleTheme}>
            {themeMode === 'light' ? (
              <IoMoon className="text-gray-900 p-0.5 rounded-full bg-gray-400 size-5" />
            ) : (
              <IoSunny className="p-0.5 text-yellow-400 bg-gray-800 rounded-full size-5" />
            )}
          </button>
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
