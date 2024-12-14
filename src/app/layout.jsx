import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/globals.css';

export const metadata = {
  title: 'AbNewsPortal',
  description: 'Stay Updated with the Latest News',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="container flex-grow p-4 mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
