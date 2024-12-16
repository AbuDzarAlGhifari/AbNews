'use client';

import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-6 mt-8 border-t border-gray-300 bg-gray-50">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        {/* Links Section */}
        <div className="flex gap-4 text-sm text-gray-600">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>

        {/* Copyright Section */}
        <p className="mt-4 text-sm text-gray-600 md:mt-0">
          &copy; {new Date().getFullYear()} AbNews. All Rights Reserved.
        </p>

        {/* Social Media Icons Section */}
        <div className="flex gap-4 mt-4 text-gray-600 md:mt-0">
          <a href="#" className="hover:text-blue-600">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="hover:text-sky-500">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="hover:text-red-500">
            <FaYoutube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
