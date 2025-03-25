import { Article } from '@/types/news';
import NewsCard from './NewsCard';

interface NewsListProps {
  articles: Article[];
}

export default function NewsList({ articles }: NewsListProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-semibold">No news articles found</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Try changing your search or category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div key={`${article.url}-${index}`}>
          <NewsCard article={article} />
        </div>
      ))}
    </div>
  );
} 