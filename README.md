# Global News Application

A modern, responsive news application built with Next.js 14 that provides real-time news from various categories and countries.

## Features

- 🌍 News from multiple countries (US, UK, India, Australia, Canada, Germany, France, Japan)
- 📰 Multiple news categories (General, Business, Technology, Sports, Entertainment, Health, Science)
- 🔍 Search functionality for news articles
- 📱 Fully responsive design
- 🌓 Dark mode support
- 🔄 Real-time news updates
- 📄 Pagination support
- 🖼️ Image optimization with Next.js Image component

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: Gnews API
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Gnews API key (sign up at [Gnews](https://gnews.io/))

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/news-app.git
cd news-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your Gnews API key:
```env
GNEWS_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   └── search/            # Search page
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── NewsList.tsx      # News articles list
│   ├── Pagination.tsx    # Pagination controls
│   └── CountrySelector.tsx # Country selection dropdown
├── lib/                   # Utility functions and API
│   └── api.ts            # API integration
└── types/                # TypeScript type definitions
    └── news.ts           # News-related types
```

## API Integration

The application uses the Gnews API to fetch news articles. The API provides:
- Top headlines by country
- Category-specific news
- Search functionality
- Pagination support

## Features in Detail

### Country Selection
- Users can switch between different countries to view localized news
- Country selection persists across navigation

### Category Navigation
- Easy access to different news categories
- Responsive design that works on all screen sizes
- Active category highlighting

### Search Functionality
- Real-time search across all news articles
- Maintains country selection during search
- Paginated search results

### Responsive Design
- Mobile-first approach
- Adapts to different screen sizes
- Optimized images for different devices

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Gnews API](https://gnews.io/) for providing news data
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling system

## Support

For support, please open an issue in the GitHub repository or contact the maintainers. #
