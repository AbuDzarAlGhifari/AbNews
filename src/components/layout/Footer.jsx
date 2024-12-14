'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 mt-8 text-white bg-gray-800">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} NewsApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
