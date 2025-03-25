import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/types/news';
import { formatDate, truncateText, getImagePlaceholder } from '@/lib/utils';

interface NewsCardProps {
  article: Article;
}

export default function NewsCard({ article }: NewsCardProps) {
  const {
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source,
  } = article;

  return (
    <div className="card h-full flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={urlToImage || getImagePlaceholder()}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {source.name}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {formatDate(publishedAt)}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2">
          {truncateText(title, 80)}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
          {truncateText(description, 120)}
        </p>
        
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary self-start mt-auto"
        >
          Read More
        </a>
      </div>
    </div>
  );
} 