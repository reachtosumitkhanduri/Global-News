import { searchNews } from '@/lib/api';
import NewsList from '@/components/NewsList';
import Pagination from '@/components/Pagination';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface SearchPageProps {
  searchParams: {
    q?: string;
    country?: string;
    page?: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  const country = searchParams.country || 'us';
  const page = Number(searchParams.page) || 1;

  const news = await searchNews(query, country, page);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for: {query}
      </h1>
      <NewsList articles={news.articles} />
      <Pagination
        currentPage={news.currentPage || page}
        totalPages={news.totalPages || 1}
        baseUrl={`/search?q=${query}&country=${country}`}
      />
    </main>
  );
} 