// Cafe data (in a real app, this would come from an API)
const cafes = [
    {
        name: "The Hidden Bean",
        rating: 4.8,
        reviews: 128,
        distance: "0.4 mi",
        description: "Cozy spot known for its artisan roasts and homemade pastries.",
        features: ["Pour-over", "Outdoor Seating", "Local Art"],
        isLocalChoice: true
    },
    {
        name: "Urban Grind",
        rating: 4.5,
        reviews: 92,
        distance: "0.6 mi",
        description: "Modern cafe with fast WiFi and plenty of power outlets.",
        features: ["Fast WiFi", "Work Friendly", "Cold Brew"],
        isLocalChoice: false
    },
    {
        name: "Riverside Roasters",
        rating: 4.7,
        reviews: 215,
        distance: "0.8 mi",
        description: "Waterfront views with ethically sourced beans and roasting on-site.",
        features: ["River View", "On-site Roasting", "Live Music"],
        isLocalChoice: false
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    // Set up filter buttons
    setupFilterButtons();
    
    // Set up search functionality
    setupSearch();
    
    // Set up cafe card clicks
    setupCafeCards();
    
    // Load user preferences if available
    loadUserPreferences();
}

// Set up filter buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            filterCafes();
        });
    });
}

// Set up search functionality
function setupSearch() {
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    
    searchButton.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
}

// Perform search
function performSearch(query) {
    if (query.trim() === '') return;
    
    // Save to recent searches
    saveToRecentSearches(query);
    
    // In a real app, this would filter cafe results
    alert(`Searching for: ${query}\nIn a real implementation, this would filter cafe results.`);
}

// Save to recent searches
function saveToRecentSearches(query) {
    // Get existing searches or initialize empty array
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    
    // Add new search to beginning of array
    recentSearches.unshift(query);
    
    // Keep only the 5 most recent searches
    recentSearches = recentSearches.slice(0, 5);
    
    // Save back to localStorage
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    
    // Update UI
    updateRecentSearchesUI(recentSearches);
}

// Update recent searches UI
function updateRecentSearchesUI(searches) {
    const recentSearchesList = document.querySelector('.recent-searches');
    recentSearchesList.innerHTML = '';
    
    searches.forEach(search => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-search"></i> "${search}"`;
        recentSearchesList.appendChild(li);
    });
}

// Set up cafe card clicks
function setupCafeCards() {
    const cafeCards = document.querySelectorAll('.cafe-card');
    cafeCards.forEach(card => {
        card.addEventListener('click', function() {
            const cafeName = this.querySelector('h3').textContent;
            showCafeDetails(cafeName);
        });
    });
}

// Show cafe details
function showCafeDetails(cafeName) {
    // In a real app, this would show more information and highlight the location on the map
    alert(`Showing details for: ${cafeName}\nIn a real implementation, this would display more information and highlight the location on the map.`);
    
    // Save to user preferences
    addToUserPreferences(cafeName);
}

// Add to user preferences
function addToUserPreferences(cafeName) {
    let preferences = JSON.parse(localStorage.getItem('userPreferences')) || {
        favoriteCafes: [],
        searchHistory: []
    };
    
    // Add to favorite cafes if not already there
    if (!preferences.favoriteCafes.includes(cafeName)) {
        preferences.favoriteCafes.push(cafeName);
    }
    
    // Save back to localStorage
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}

// Load user preferences
function loadUserPreferences() {
    const preferences = JSON.parse(localStorage.getItem('userPreferences'));
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches'));
    
    if (recentSearches) {
        updateRecentSearchesUI(recentSearches);
    }
    
    // In a real app, we would use preferences to personalize the experience
}

// Filter cafes based on active filters
function filterCafes() {
    // In a real app, this would filter the cafe list based on active filters
    const activeFilters = document.querySelectorAll('.filter-btn.active');
    const filterCount = activeFilters.length;
    
    if (filterCount > 0) {
        console.log(`Filtering with ${filterCount} active filters`);
        // Actual filtering logic would go here
    }
}

// Simulate Google Maps API integration
function initializeMap() {
    // This would initialize the Google Maps API in a real implementation
    console.log("Initializing Google Maps...");
    
    // For demonstration purposes, we'll just show a message
    const mapContainer = document.querySelector('.map-container');
    mapContainer.innerHTML = `
        <div style="text-align: center;">
            <i class="fas fa-map-marked-alt" style="font-size: 2rem; margin-right: 10px;"></i>
            <p>Google Maps would be integrated here with API key</p>
            <p style="font-size: 0.9rem; margin-top: 10px;">Cafes would be shown as markers on the map</p>
        </div>
    `;
}

// Initialize the map when the page loads
window.onload = initializeMap;
