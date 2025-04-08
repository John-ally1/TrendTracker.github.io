// Static trend data
const sampleData = {
  music: {
    trends: [
      {
        rank: 1,
        title: "Blinding Lights",
        artist: "The Weeknd",
        genre: "Pop",
        plays: 1234567,
        coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        trend: "up",
        trendPercentage: 25,
        updatedAt: new Date()
      },
      {
        rank: 2,
        title: "Dance The Night",
        artist: "Dua Lipa",
        genre: "Pop",
        plays: 987654,
        coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        trend: "up",
        trendPercentage: 18,
        updatedAt: new Date()
      },
      {
        rank: 3,
        title: "Last Night",
        artist: "Morgan Wallen",
        genre: "Country",
        plays: 876543,
        coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        trend: "down",
        trendPercentage: 5,
        updatedAt: new Date()
      },
      {
        rank: 4,
        title: "Flowers",
        artist: "Miley Cyrus",
        genre: "Pop",
        plays: 765432,
        coverImage: "https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        trend: "up",
        trendPercentage: 12,
        updatedAt: new Date()
      },
      {
        rank: 5,
        title: "Anti-Hero",
        artist: "Taylor Swift",
        genre: "Pop",
        plays: 654321,
        coverImage: "https://images.unsplash.com/photo-1493225458124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        trend: "down",
        trendPercentage: 8,
        updatedAt: new Date()
      }
    ],
    lastUpdated: "just now"
  },
  memes: {
    trends: [
      {
        rank: 1,
        title: "Drakeposting",
        image: "https://via.placeholder.com/300x200",
        source: "Reddit",
        upvotes: 100000,
        comments: 5000,
        updatedAt: new Date()
      },
      {
        rank: 2,
        title: "Distracted Boyfriend",
        image: "https://via.placeholder.com/300x200",
        source: "Twitter",
        upvotes: 85000,
        comments: 4200,
        updatedAt: new Date()
      },
      {
        rank: 3,
        title: "Wojak Feels",
        image: "https://via.placeholder.com/300x200",
        source: "4chan",
        upvotes: 75000,
        comments: 3800,
        updatedAt: new Date()
      },
      {
        rank: 4,
        title: "Doge",
        image: "https://via.placeholder.com/300x200",
        source: "Instagram",
        upvotes: 65000,
        comments: 3200,
        updatedAt: new Date()
      },
      {
        rank: 5,
        title: "Pepe the Frog",
        image: "https://via.placeholder.com/300x200",
        source: "Reddit",
        upvotes: 55000,
        comments: 2800,
        updatedAt: new Date()
      }
    ],
    lastUpdated: "just now"
  },
  news: {
    trends: [
      {
        rank: 1,
        title: "Ukraine War",
        image: "https://via.placeholder.com/300x200",
        source: "BBC News",
        category: "World",
        timeAgo: "1 hour ago",
        updatedAt: new Date()
      },
      {
        rank: 2,
        title: "Tech Breakthrough",
        image: "https://via.placeholder.com/300x200",
        source: "TechCrunch",
        category: "Technology",
        timeAgo: "2 hours ago",
        updatedAt: new Date()
      },
      {
        rank: 3,
        title: "Climate Summit",
        image: "https://via.placeholder.com/300x200",
        source: "Reuters",
        category: "Environment",
        timeAgo: "3 hours ago",
        updatedAt: new Date()
      },
      {
        rank: 4,
        title: "Market Update",
        image: "https://via.placeholder.com/300x200",
        source: "Bloomberg",
        category: "Finance",
        timeAgo: "30 minutes ago",
        updatedAt: new Date()
      },
      {
        rank: 5,
        title: "Sports Finals",
        image: "https://via.placeholder.com/300x200",
        source: "ESPN",
        category: "Sports",
        timeAgo: "45 minutes ago",
        updatedAt: new Date()
      }
    ],
    lastUpdated: "just now"
  },
  social: {
    trends: [
      {
        rank: 1,
        title: "#CatsOfTwitter",
        image: "https://via.placeholder.com/300x200",
        platform: "Twitter",
        metric: "likes",
        count: 1000000,
        engagement: "High",
        updatedAt: new Date()
      },
      {
        rank: 2,
        title: "#TechTrends",
        image: "https://via.placeholder.com/300x200",
        platform: "LinkedIn",
        metric: "shares",
        count: 750000,
        engagement: "Medium",
        updatedAt: new Date()
      },
      {
        rank: 3,
        title: "#FoodieLife",
        image: "https://via.placeholder.com/300x200",
        platform: "Instagram",
        metric: "likes",
        count: 890000,
        engagement: "High",
        updatedAt: new Date()
      },
      {
        rank: 4,
        title: "#DanceChallenge",
        image: "https://via.placeholder.com/300x200",
        platform: "TikTok",
        metric: "views",
        count: 2500000,
        engagement: "Viral",
        updatedAt: new Date()
      },
      {
        rank: 5,
        title: "#GamingMoments",
        image: "https://via.placeholder.com/300x200",
        platform: "Twitch",
        metric: "views",
        count: 1200000,
        engagement: "High",
        updatedAt: new Date()
      }
    ],
    lastUpdated: "just now"
  },
  search: {
    trends: [
      {
        rank: 1,
        term: "AI art generator",
        image: "https://via.placeholder.com/300x200",
        category: "Technology",
        searches: 500000,
        percentage: 15,
        updatedAt: new Date()
      },
      {
        rank: 2,
        term: "Summer recipes",
        image: "https://via.placeholder.com/300x200",
        category: "Food",
        searches: 300000,
        percentage: 12,
        updatedAt: new Date()
      },
      {
        rank: 3,
        term: "Electric cars",
        image: "https://via.placeholder.com/300x200",
        category: "Automotive",
        searches: 450000,
        percentage: 18,
        updatedAt: new Date()
      },
      {
        rank: 4,
        term: "Online courses",
        image: "https://via.placeholder.com/300x200",
        category: "Education",
        searches: 280000,
        percentage: 10,
        updatedAt: new Date()
      },
      {
        rank: 5,
        term: "Home workout",
        image: "https://via.placeholder.com/300x200",
        category: "Fitness",
        searches: 320000,
        percentage: 8,
        updatedAt: new Date()
      }
    ],
    lastUpdated: "just now"
  }
};

// Store current scroll positions for each category
const scrollPositions = {
    music: 0,
    memes: 0,
    news: 0,
    social: 0,
    search: 0
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize scroll buttons for each category
    initScrollButtons('music');
    initScrollButtons('memes');
    initScrollButtons('news');
    initScrollButtons('social');
    initScrollButtons('search');
    
    // Load all trends data
    loadAllTrends();
});

// Initialize scroll buttons for a specific category
function initScrollButtons(category) {
    const prevBtn = document.getElementById(`${category}-prev`);
    const nextBtn = document.getElementById(`${category}-next`);
    const trendsContainer = document.getElementById(`${category}-trends`);
    
    if (prevBtn && nextBtn && trendsContainer) {
        // Click event for previous button
        prevBtn.addEventListener('click', () => {
            const cardWidth = 300; // Card width + gap
            trendsContainer.scrollLeft -= cardWidth;
            scrollPositions[category] = trendsContainer.scrollLeft;
            updateScrollButtons(category);
        });
        
        // Click event for next button
        nextBtn.addEventListener('click', () => {
            const cardWidth = 300; // Card width + gap
            trendsContainer.scrollLeft += cardWidth;
            scrollPositions[category] = trendsContainer.scrollLeft;
            updateScrollButtons(category);
        });
        
        // Scroll event for updating button states
        trendsContainer.addEventListener('scroll', () => {
            scrollPositions[category] = trendsContainer.scrollLeft;
            updateScrollButtons(category);
        });
        
        // Initialize button states
        updateScrollButtons(category);
    }
}

// Update scroll button states based on scroll position
function updateScrollButtons(category) {
    const prevBtn = document.getElementById(`${category}-prev`);
    const nextBtn = document.getElementById(`${category}-next`);
    const trendsContainer = document.getElementById(`${category}-trends`);
    
    if (prevBtn && nextBtn && trendsContainer) {
        // Check if we can scroll left or right
        const canScrollLeft = trendsContainer.scrollLeft > 0;
        const canScrollRight = trendsContainer.scrollLeft < (trendsContainer.scrollWidth - trendsContainer.clientWidth - 5);
        
        // Update button states
        prevBtn.style.opacity = canScrollLeft ? '1' : '0.5';
        prevBtn.style.pointerEvents = canScrollLeft ? 'auto' : 'none';
        
        nextBtn.style.opacity = canScrollRight ? '1' : '0.5';
        nextBtn.style.pointerEvents = canScrollRight ? 'auto' : 'none';
        
        // Update indicators
        updateIndicators(category, trendsContainer);
    }
}

// Update indicators based on visible cards
function updateIndicators(category, container) {
    const indicators = document.getElementById(`${category}-indicators`);
    const cardWidth = 300; // Card width + gap
    const totalCards = Math.ceil(container.scrollWidth / cardWidth);
    const visibleCards = Math.floor(container.clientWidth / cardWidth);
    const currentPosition = Math.floor(container.scrollLeft / cardWidth);
    
    // Clear existing indicators
    indicators.innerHTML = '';
    
    // Create new indicators based on total number of cards
    for (let i = 0; i < totalCards - visibleCards + 1; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator' + (i === currentPosition ? ' active' : '');
        indicators.appendChild(indicator);
    }
}

// Load all trends data directly
function loadAllTrends() {
    Object.keys(sampleData).forEach(category => {
        renderTrends(category, sampleData[category].trends, sampleData[category].lastUpdated);
    });
}

// Render trends for a specific category
function renderTrends(category, trends, lastUpdated) {
    const container = document.getElementById(`${category}-trends`);
    const lastUpdatedEl = document.getElementById(`${category}-last-updated`);
    
    if (!container) return;
    
    // Clear loading spinner
    container.innerHTML = '';
    
    // Update last updated text
    if (lastUpdatedEl) {
        lastUpdatedEl.textContent = `Updated ${lastUpdated}`;
    }
    
    // Render each trend card with animation delay
    trends.forEach((trend, index) => {
        const card = createTrendCard(category, trend, index);
        container.appendChild(card);
    });
    
    // Create indicators
    createIndicators(category, trends.length);
    
    // Update scroll button states
    updateScrollButtons(category);
}

// Create a trend card based on category
function createTrendCard(category, trend, index) {
    switch (category) {
        case 'music':
            return createMusicCard(trend, index);
        case 'memes':
            return createMemeCard(trend, index);
        case 'news':
            return createNewsCard(trend, index);
        case 'social':
            return createSocialCard(trend, index);
        case 'search':
            return createSearchCard(trend, index);
        default:
            return document.createElement('div');
    }
}

// Create a music trend card
function createMusicCard(trend, index) {
    const card = document.createElement('div');
    card.className = 'trend-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="card-image" style="background-color: rgba(138, 43, 226, 0.1)">
            <img src="${trend.coverImage}" alt="${trend.title} by ${trend.artist}">
            <div class="rank-badge">${trend.rank}</div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${trend.title}</h3>
            <p class="card-subtitle">${trend.artist} · ${trend.genre}</p>
            <div class="card-meta">
                <div class="metric">
                    <i class="fas fa-headphones"></i>
                    <span>${formatNumber(trend.plays)} plays</span>
                </div>
                <div class="trend">
                    <i class="fas fa-${trend.trend === 'up' ? 'arrow-up' : 'arrow-down'}" style="color: ${trend.trend === 'up' ? 'var(--color-accent-2)' : 'var(--color-accent-1)'}"></i>
                    <span>${trend.trendPercentage}%</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Create a meme trend card
function createMemeCard(trend, index) {
    const card = document.createElement('div');
    card.className = 'trend-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="card-image" style="background-color: rgba(255, 171, 0, 0.1)">
            <img src="${trend.image}" alt="${trend.title}">
            <div class="rank-badge">${trend.rank}</div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${trend.title}</h3>
            <p class="card-subtitle">From ${trend.source}</p>
            <div class="card-meta">
                <div class="metric">
                    <i class="fas fa-arrow-up"></i>
                    <span>${formatNumber(trend.upvotes)} upvotes</span>
                </div>
                <div class="metric">
                    <i class="fas fa-comment"></i>
                    <span>${formatNumber(trend.comments)}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Create a news trend card
function createNewsCard(trend, index) {
    const card = document.createElement('div');
    card.className = 'trend-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="card-image" style="background-color: rgba(0, 188, 212, 0.1)">
            <img src="${trend.image}" alt="${trend.title}">
            <div class="rank-badge">${trend.rank}</div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${trend.title}</h3>
            <p class="card-subtitle">${trend.source} · ${trend.category}</p>
            <div class="card-meta">
                <div class="metric">
                    <i class="fas fa-clock"></i>
                    <span>${trend.timeAgo}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Create a social media trend card
function createSocialCard(trend, index) {
    const card = document.createElement('div');
    card.className = 'trend-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="card-image" style="background-color: rgba(0, 200, 83, 0.1)">
            <img src="${trend.image}" alt="${trend.title}">
            <div class="rank-badge">${trend.rank}</div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${trend.title}</h3>
            <p class="card-subtitle">${trend.platform}</p>
            <div class="card-meta">
                <div class="metric">
                    <i class="fas fa-${trend.metric === 'likes' ? 'heart' : trend.metric === 'views' ? 'eye' : trend.metric === 'shares' ? 'share-alt' : 'comments'}"></i>
                    <span>${formatNumber(trend.count)} ${trend.metric}</span>
                </div>
                <div class="metric">
                    <i class="fas fa-bolt"></i>
                    <span>${trend.engagement}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Create a search trend card
function createSearchCard(trend, index) {
    const card = document.createElement('div');
    card.className = 'trend-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="card-image" style="background-color: rgba(236, 64, 122, 0.1)">
            <img src="${trend.image}" alt="${trend.term}">
            <div class="rank-badge">${trend.rank}</div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${trend.term}</h3>
            <p class="card-subtitle">${trend.category}</p>
            <div class="card-meta">
                <div class="metric">
                    <i class="fas fa-search"></i>
                    <span>${trend.searches} searches</span>
                </div>
                <div class="metric">
                    <i class="fas fa-chart-line"></i>
                    <span>+${trend.percentage}%</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Create indicators for a specific category
function createIndicators(category, count) {
    const container = document.getElementById(`${category}-indicators`);
    const trendsContainer = document.getElementById(`${category}-trends`);
    
    if (container && trendsContainer) {
        updateIndicators(category, trendsContainer);
    }
}

// Format number with abbreviations (K, M, B)
function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}