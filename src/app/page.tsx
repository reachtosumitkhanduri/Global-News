import { Suspense } from 'react';
import { getTopHeadlines } from '@/lib/api';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsList from '@/components/NewsList';
import CountrySelector from '@/components/CountrySelector';
import Pagination from '@/components/Pagination';
import { Country } from '@/types/news';

interface HomePageProps {
  searchParams: {
    country?: string;
    category?: string;
    page?: string;
  };
}

// Disable all caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function Home({ searchParams }: HomePageProps) {
  const country = searchParams.country || 'us';
  const category = searchParams.category;
  const page = Number(searchParams.page) || 1;

  const news = await getTopHeadlines(country, category, page);

  return (
    <main className="container mx-auto px-4 py-8">
      <Header />
      
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Top Headlines</h1>
        
        <CountrySelector currentCountry={country} />
        
        <Suspense fallback={<div>Loading news...</div>}>
          <NewsList articles={news.articles} />
        </Suspense>
        
        <Pagination
          currentPage={news.currentPage || page}
          totalPages={news.totalPages || 1}
          baseUrl={category ? `/?category=${category}&country=${country}` : `/?country=${country}`}
        />
      </div>
      
      <Footer />
    </main>
  );
} 