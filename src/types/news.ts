export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  author: string | null;
}

export interface NewsResponse {
  articles: Article[];
  totalArticles?: number;
  status?: string;
  currentPage?: number;
  totalPages?: number;
}

export type Category = 'general' | 'business' | 'technology' | 'sports' | 'entertainment' | 'health' | 'science';
export type Country = 'us' | 'gb' | 'in' | 'au' | 'ca' | 'de' | 'fr' | 'jp'; 