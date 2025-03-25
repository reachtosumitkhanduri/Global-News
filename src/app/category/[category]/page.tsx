import { Suspense } from 'react';
import { getTopHeadlines } from '@/lib/api';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsList from '@/components/NewsList';
import CountrySelector from '@/components/CountrySelector';
import Pagination from '@/components/Pagination';
import { Category, Country } from '@/types/news';

interface CategoryPageProps {
  params: {
    category: Category;
  };
  searchParams: {
    country?: Country;
    page?: string;
  };
}

// Disable all caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category } = params;
  const country = (searchParams.country || 'us') as Country;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  
  const newsData = await getTopHeadlines(country, category, undefined, page);
  console.log('Fetched category news data:', { country, category, totalResults: newsData.totalResults });
  
  return (
    <main>
      <Header />
      
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6 capitalize">
          {category} News
        </h1>
        
        <CountrySelector currentCountry={country} currentCategory={category} />
        
        <Suspense fallback={<div>Loading news...</div>}>
          <NewsList articles={newsData.articles} />
        </Suspense>
        
        <Pagination
          currentPage={page}
          hasNextPage={newsData.hasNextPage || false}
          baseUrl={`/category/${category}?country=${country}`}
        />
      </div>
      
      <Footer />
    </main>
  );
} 