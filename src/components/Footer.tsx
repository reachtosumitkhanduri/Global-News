import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-dark shadow-inner mt-10">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Global News</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Stay updated with the latest news from around the world across different categories.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/category/business" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/category/technology" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/category/entertainment" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Global News. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Powered by <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer" className="text-primary">News API</a>
          </p>
        </div>
      </div>
    </footer>
  );
} 