'use client';

import { logo_web } from '@/assets/index';
import useCategories from '@/hooks/useCategories';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [isSearchActive, setIsSearchActive] = useState(false);
  const { categories, loading } = useCategories();

  return (
    <nav className="sticky top-0 z-50 p-4 bg-white border-b border-gray-600">
      <div className="container flex items-center justify-between max-w-6xl pb-4 mx-auto">
        <Link href="/">
          <Image src={logo_web} alt="logo" className="w-24" />
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex gap-2 ">
            <Link
              href={'/news'}
              className="text-sm font-medium text-gray-600 capitalize hover:text-black"
            >
              News
            </Link>
            <Link
              href={'/category'}
              className="text-sm font-medium text-gray-600 capitalize hover:text-black"
            >
              category
            </Link>
          </div>
          {/* <div>
            {isSearchActive ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log('Searching:', searchTerm);
                  setIsSearchActive(false);
                }}
                className="flex items-center"
              >
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
                  <IoSearch className="size-6 p-0.5" />
                </button>
              </form>
            ) : (
              <HiSearchCircle
                className="text-gray-500 cursor-pointer size-6 hover:text-gray-800"
                onClick={() => setIsSearchActive(true)}
              />
            )}
          </div> */}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 overflow-x-auto">
        {loading ? (
          <span className="text-sm text-gray-500">Loading...</span>
        ) : (
          categories.map((category, index) => (
            <Link
              key={index}
              href={`category/${category}`}
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
