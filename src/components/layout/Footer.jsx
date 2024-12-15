'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 mt-8 border-gray-600 border-y">
      <div className="container mx-auto text-end">
        <p>&copy; {new Date().getFullYear()} AbNews</p>
      </div>
    </footer>
  );
};

export default Footer;
