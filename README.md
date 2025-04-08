# TrendPulse

TrendPulse is a dynamic single-page web application that displays top 5 trends across multiple categories including music, memes, news, social media, and search queries. Stay updated with what's trending in the digital world!

![TrendPulse Screenshot](https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)

## Features

- **Single-page responsive design** - Works seamlessly on mobile, tablet, and desktop
- **Multiple trend categories** - Music, memes, news, social media, and search trends
- **Horizontal scrolling** - Navigate through trends with intuitive arrow controls
- **Visual indicators** - See which trends are currently in view
- **Real-time data** - Displays when trends were last updated
- **Animated cards** - Smooth animations and hover effects for better user experience
- **API integration** - Connects to trend data sources for real information
- **Vanilla stack** - Built with pure HTML, CSS, and JavaScript (no frameworks)
- **Express.js backend** - Simple and efficient server to handle API requests

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js with Express.js
- **APIs**: Last.fm API, News API (configurable)
- **UI Components**: Custom CSS components with animations
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)

## Project Structure

```
trendpulse/
├── index.html           # Main HTML file
├── style.css            # CSS styles
├── script.js            # Frontend JavaScript
├── simple-server.js     # Express server
├── package.json         # Project dependencies
├── .env                 # Environment variables (API keys)
└── README.md            # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/trendpulse.git
   cd trendpulse
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with your API keys:
   ```
   LASTFM_API_KEY=your_lastfm_api_key
   NEWS_API_KEY=your_news_api_key
   ```

4. Start the server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:5001`

## API Integration

TrendPulse uses the following APIs:
- **Last.fm API** - For music trends
- **News API** - For news trends
- **Sample data** - For memes, social media, and search trends (replaceable with real APIs)

## License

MIT License
