"use client";

import { useRouter } from 'next/navigation';
import { Country } from '@/types/news';

const countries: { code: Country; name: string }[] = [
  { code: 'us', name: 'United States' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'ca', name: 'Canada' },
  { code: 'au', name: 'Australia' },
  { code: 'in', name: 'India' },
  { code: 'de', name: 'Germany' },
  { code: 'fr', name: 'France' },
  { code: 'jp', name: 'Japan' },
];

interface CountrySelectorProps {
  currentCountry: Country;
  currentCategory?: string;
}

export default function CountrySelector({ currentCountry, currentCategory }: CountrySelectorProps) {
  const router = useRouter();

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value as Country;
    const url = currentCategory 
      ? `/category/${currentCategory}?country=${country}`
      : `/?country=${country}`;
    
    // Force a hard refresh when changing countries
    window.location.href = url;
  };

  return (
    <div className="flex items-center space-x-2 mb-6">
      <label htmlFor="country-select" className="text-sm font-medium">
        News from:
      </label>
      <select
        id="country-select"
        value={currentCountry}
        onChange={handleCountryChange}
        className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
} 