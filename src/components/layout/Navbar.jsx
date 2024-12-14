'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

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
  };

  return (
    <nav className="p-4 bg-white border-b border-black">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          AbNews
        </Link>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="px-4 py-1 text-sm text-white bg-black rounded hover:bg-gray-800"
          >
            Search
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="space-x-4">
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
