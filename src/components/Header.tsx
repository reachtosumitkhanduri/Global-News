'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import { Category } from '@/types/news';

const categories: Category[] = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology',
];

export default function Header() {
  const searchParams = useSearchParams();
  const currentCountry = searchParams.get('country') || 'us';

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Link href={`/?country=${currentCountry}`} className="text-2xl font-bold text-primary">
            Global News
          </Link>
          
          <div className="relative w-full md:w-64">
            <form action="/search" method="GET">
              <input
                type="text"
                name="q"
                placeholder="Search news..."
                className="w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                required
              />
              <input type="hidden" name="country" value={currentCountry} />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
              >
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
        
        <nav className="mt-4">
          <div className="flex justify-center">
            <ul className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/?category=${category}&country=${currentCountry}`}
                    className="capitalize inline-block px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
} 