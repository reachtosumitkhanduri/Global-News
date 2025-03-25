import { Article, NewsResponse } from '@/types/news';

const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const BASE_URL = 'https://gnews.io/api/v4';
const PAGE_SIZE = 10;

export async function getTopHeadlines(
  country: string = 'us', 
  category?: string,
  page: number = 1
): Promise<NewsResponse> {
  try {
    if (!GNEWS_API_KEY) {
      console.error('Gnews API key is not configured');
      return { articles: [], status: 'error', totalArticles: 0 };
    }

    let url = `${BASE_URL}/top-headlines?country=${country}&apikey=${GNEWS_API_KEY}&max=${PAGE_SIZE}&page=${page}`;
    
    if (category && category !== 'general') {
      url += `&category=${category}`;
    }

    console.log('Fetching news with params:', { country, category, page });
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error('Gnews API error:', data);
      return { articles: [], status: 'error', totalArticles: 0 };
    }

    // Transform Gnews response to match our Article type
    const articles: Article[] = data.articles.map((article: any) => ({
      title: article.title,
      description: article.description || '',
      url: article.url,
      urlToImage: article.image,
      publishedAt: article.publishedAt,
      source: {
        name: article.source.name,
        id: article.source.id || '',
      },
      author: article.author || null,
      content: article.content || '',
    }));

    console.log('Fetched news:', {
      country,
      category,
      page,
      totalArticles: data.totalArticles,
    });

    return { 
      articles,
      status: 'ok',
      totalArticles: data.totalArticles,
      currentPage: page,
      totalPages: Math.ceil(data.totalArticles / PAGE_SIZE)
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    return { articles: [], status: 'error', totalArticles: 0 };
  }
}

export async function searchNews(
  query: string, 
  country: string = 'us',
  page: number = 1
): Promise<NewsResponse> {
  try {
    if (!GNEWS_API_KEY) {
      console.error('Gnews API key is not configured');
      return { articles: [], status: 'error', totalArticles: 0 };
    }

    const url = `${BASE_URL}/search?q=${encodeURIComponent(query)}&country=${country}&apikey=${GNEWS_API_KEY}&max=${PAGE_SIZE}&page=${page}`;
    
    console.log('Searching news with params:', { query, country, page });
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error('Gnews API error:', data);
      return { articles: [], status: 'error', totalArticles: 0 };
    }

    // Transform Gnews response to match our Article type
    const articles: Article[] = data.articles.map((article: any) => ({
      title: article.title,
      description: article.description || '',
      url: article.url,
      urlToImage: article.image,
      publishedAt: article.publishedAt,
      source: {
        name: article.source.name,
        id: article.source.id || '',
      },
      author: article.author || null,
      content: article.content || '',
    }));

    return { 
      articles,
      status: 'ok',
      totalArticles: data.totalArticles,
      currentPage: page,
      totalPages: Math.ceil(data.totalArticles / PAGE_SIZE)
    };
  } catch (error) {
    console.error('Error searching news:', error);
    return { articles: [], status: 'error', totalArticles: 0 };
  }
} 