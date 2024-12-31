// 'use client';

// import { fetchNewsSources } from '@/lib/api/news';
// import Link from 'next/link';
// import React, { useState, useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const countries = [
//   { code: '', name: 'All' },
//   { code: 'us', name: 'United States' },
//   { code: 'gb', name: 'United Kingdom' },
//   { code: 'fr', name: 'France' },
//   { code: 'de', name: 'Germany' },
//   { code: 'sa', name: 'Arab' },
// ];

// const GlobalNewsSection = () => {
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [sources, setSources] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [visibleCount, setVisibleCount] = useState(6);

//   const countryButtonsRef = useRef([]);
//   const newsCardsRef = useRef([]);

//   useEffect(() => {
//     const fetchSources = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const sourcesData = await fetchNewsSources(selectedCountry);
//         setSources(sourcesData);
//       } catch (err) {
//         setError('Failed to fetch sources.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSources();
//   }, [selectedCountry]);

//   useEffect(() => {
//     gsap.fromTo(
//       countryButtonsRef.current,
//       { opacity: 0, y: -20 },
//       { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
//     );
//   }, []);

//   useEffect(() => {
//     if (!loading && sources.length > 0) {
//       gsap.fromTo(
//         newsCardsRef.current,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
//       );
//     }
//   }, [loading, sources]);

//   const handleLoadMore = () => {
//     setVisibleCount((prevCount) => prevCount + 6);
//   };

//   return (
//     <div className="px-2 mx-auto mt-2 sm:px-8">
//       <div className="items-center justify-between sm:flex">
//         <h2 className="mb-3 text-2xl font-bold text-gray-800">Global News</h2>
//         {/* Tabs for Countries */}
//         <div className="flex items-center mb-6 space-x-2 overflow-x-auto scrollbar-hide">
//           {countries.map((country, index) => (
//             <button
//               key={country.code}
//               ref={(el) => (countryButtonsRef.current[index] = el)}
//               onClick={() => {
//                 setSelectedCountry(country.code);
//                 setVisibleCount(6);
//               }}
//               className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-all ${
//                 selectedCountry === country.code
//                   ? 'bg-black text-white font-semibold shadow-md'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {country.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       {loading ? (
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {Array(6)
//             .fill()
//             .map((_, index) => (
//               <div
//                 key={index}
//                 className="p-6 transition-shadow bg-white border rounded-lg shadow-md animate-pulse"
//               >
//                 <div className="w-2/3 h-6 bg-gray-300 rounded-md"></div>
//                 <div className="w-full h-4 mt-4 bg-gray-300 rounded-md"></div>
//                 <div className="w-5/6 h-4 mt-2 bg-gray-300 rounded-md"></div>
//                 <div className="flex items-center justify-between mt-4">
//                   <div className="w-1/3 h-4 bg-gray-300 rounded-md"></div>
//                   <div className="w-1/4 h-4 bg-gray-300 rounded-md"></div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       ) : error ? (
//         <div className="flex items-center justify-center h-40">
//           <p className="text-lg font-semibold text-red-500">{error}</p>
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {sources.slice(0, visibleCount).map((source, index) => (
//               <div
//                 key={source.id}
//                 ref={(el) => (newsCardsRef.current[index] = el)}
//                 className="p-6 transition-shadow bg-white border rounded-lg shadow-md"
//               >
//                 <h3 className="text-lg font-bold text-black">{source.name}</h3>
//                 <p className="mt-2 text-sm text-gray-600">
//                   {source.description || 'No description available.'}
//                 </p>
//                 <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
//                   <span>
//                     Category: <strong>{source.category}</strong>
//                   </span>
//                 </div>
//                 <Link
//                   href={source.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-2 font-semibold text-black transition duration-300 hover:text-gray-800"
//                 >
//                   Visit News →
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* Load More Button */}
//           {visibleCount < sources.length && (
//             <div className="flex justify-center mt-6">
//               <button
//                 onClick={handleLoadMore}
//                 className="px-6 py-2 text-xl font-medium text-black hover:text-gray-800"
//               >
//                 Load More ...
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default GlobalNewsSection;
