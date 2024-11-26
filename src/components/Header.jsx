import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <h1 className="text-3xl font-bold text-blue-600">AbNewsPortal</h1>
        <nav className="hidden space-x-6 md:flex">
          {['Home', 'Categories', 'Latest', 'Popular', 'Contact'].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-500"
              >
                {link}
              </a>
            )
          )}
        </nav>
        <button className="text-gray-700 md:hidden hover:text-blue-500">
          <span className="material-icons">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
