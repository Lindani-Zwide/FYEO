// Gentlemen's Companion - Main JavaScript
// Sophisticated Male Escort Directory Platform

// Escort profiles data
const escortProfiles = [
    {
        id: 1,
        name: "Marcus",
        age: 28,
        location: "stellenbosch",
        locationName: "Stellenbosch",
        rate: 1200,
        rating: 4.9,
        reviews: 23,
        image: "resources/avatar-1.jpg",
        verified: true,
        available: true,
        services: ["dinner", "massage", "companion"],
        bio: "Sophisticated gentleman with a passion for fine dining and stimulating conversation. MBA graduate with extensive travel experience.",
        height: "6'1\"",
        ethnicity: "Caucasian",
        languages: ["English", "Afrikaans"]
    },
    {
        id: 2,
        name: "Thabo",
        age: 26,
        location: "kayamandi",
        locationName: "Kayamandi",
        rate: 800,
        rating: 4.8,
        reviews: 18,
        image: "resources/avatar-16.jpg",
        verified: true,
        available: true,
        services: ["companion", "massage", "events"],
        bio: "Charming and attentive companion with a background in hospitality. Known for making every moment special and memorable.",
        height: "5'11\"",
        ethnicity: "African",
        languages: ["English", "Xhosa", "Zulu"]
    },
    {
        id: 3,
        name: "James",
        age: 32,
        location: "stellenbosch",
        locationName: "Stellenbosch",
        rate: 1500,
        rating: 4.9,
        reviews: 31,
        image: "resources/avatar-17.jpg",
        verified: true,
        available: false,
        services: ["dinner", "travel", "companion"],
        bio: "Experienced world traveler and wine enthusiast. Perfect for sophisticated dinner dates and cultural events.",
        height: "6'0\"",
        ethnicity: "Caucasian",
        languages: ["English", "French", "German"]
    },
    {
        id: 4,
        name: "Lungelo",
        age: 25,
        location: "kayelitsha",
        locationName: "Kayelitsha",
        rate: 700,
        rating: 4.7,
        reviews: 15,
        image: "resources/avatar-18.jpg",
        verified: true,
        available: true,
        services: ["massage", "companion", "fitness"],
        bio: "Fitness enthusiast and certified massage therapist. Dedicated to wellness and making you feel your best.",
        height: "6'2\"",
        ethnicity: "African",
        languages: ["English", "Xhosa"]
    },
    {
        id: 5,
        name: "David",
        age: 30,
        location: "delft",
        locationName: "Delft",
        rate: 1000,
        rating: 4.8,
        reviews: 27,
        image: "resources/avatar-19.jpg",
        verified: true,
        available: true,
        services: ["dinner", "events", "companion"],
        bio: "Professional consultant with a gift for conversation. Ideal for business events and intellectual companionship.",
        height: "5'10\"",
        ethnicity: "Indian",
        languages: ["English", "Hindi", "Tamil"]
    },
    {
        id: 6,
        name: "Andre",
        age: 29,
        location: "blue-downs",
        locationName: "Blue Downs",
        rate: 1100,
        rating: 4.9,
        reviews: 22,
        image: "resources/avatar-20.jpg",
        verified: true,
        available: false,
        services: ["travel", "dinner", "companion"],
        bio: "Adventure seeker and luxury travel companion. Perfect for weekend getaways and exotic destinations.",
        height: "6'0\"",
        ethnicity: "Caucasian",
        languages: ["English", "Portuguese", "Spanish"]
    },
    {
        id: 7,
        name: "Michael",
        age: 27,
        location: "stellenbosch",
        locationName: "Stellenbosch",
        rate: 1300,
        rating: 4.8,
        reviews: 19,
        image: "resources/avatar-2.jpg",
        verified: true,
        available: true,
        services: ["dinner", "massage", "companion"],
        bio: "Artist and creative soul with a passion for culture. Wonderful for gallery visits and artistic events.",
        height: "5'11\"",
        ethnicity: "Caucasian",
        languages: ["English", "Italian"]
    },
    {
        id: 8,
        name: "Sipho",
        age: 31,
        location: "thubelitsha",
        locationName: "Thubelitsha",
        rate: 900,
        rating: 4.7,
        reviews: 16,
        image: "resources/avatar-4.jpg",
        verified: true,
        available: true,
        services: ["companion", "events", "massage"],
        bio: "Former athlete with a warm personality and great sense of humor. Makes every moment enjoyable and relaxed.",
        height: "6'3\"",
        ethnicity: "African",
        languages: ["English", "Xhosa", "Sotho"]
    },
    {
        id: 9,
        name: "Ryan",
        age: 26,
        location: "kayamandi",
        locationName: "Kayamandi",
        rate: 950,
        rating: 4.8,
        reviews: 21,
        image: "resources/avatar-5.jpg",
        verified: true,
        available: false,
        services: ["dinner", "companion", "massage"],
        bio: "Musician and music lover with a romantic soul. Perfect for intimate dinners and cultural experiences.",
        height: "5'9\"",
        ethnicity: "Caucasian",
        languages: ["English", "Afrikaans"]
    },
    {
        id: 10,
        name: "Kyle",
        age: 33,
        location: "stellenbosch",
        locationName: "Stellenbosch",
        rate: 1400,
        rating: 4.9,
        reviews: 28,
        image: "resources/avatar-7.jpg",
        verified: true,
        available: true,
        services: ["travel", "dinner", "events"],
        bio: "Wine expert and sommelier. Ideal for wine tastings, vineyard tours, and gourmet dining experiences.",
        height: "6'1\"",
        ethnicity: "Caucasian",
        languages: ["English", "French"]
    },
    {
        id: 11,
        name: "Nathan",
        age: 24,
        location: "delft",
        locationName: "Delft",
        rate: 750,
        rating: 4.6,
        reviews: 12,
        image: "resources/avatar-9.jpg",
        verified: true,
        available: true,
        services: ["companion", "fitness", "massage"],
        bio: "Young, energetic fitness coach. Great for active dates and wellness-focused companionship.",
        height: "5'10\"",
        ethnicity: "Mixed",
        languages: ["English", "Afrikaans"]
    },
    {
        id: 12,
        name: "Chris",
        age: 35,
        location: "blue-downs",
        locationName: "Blue Downs",
        rate: 1600,
        rating: 4.9,
        reviews: 35,
        image: "resources/avatar-10.jpg",
        verified: true,
        available: true,
        services: ["travel", "dinner", "events", "companion"],
        bio: "Seasoned professional and luxury lifestyle expert. Perfect for high-end events and exclusive experiences.",
        height: "6'2\"",
        ethnicity: "Caucasian",
        languages: ["English", "German", "Dutch"]
    },
    {
        id: 13,
        name: "Pieter",
        age: 28,
        location: "stellenbosch",
        locationName: "Stellenbosch",
        rate: 1150,
        rating: 4.8,
        reviews: 24,
        image: "resources/avatar-12.jpg",
        verified: true,
        available: false,
        services: ["dinner", "companion", "massage"],
        bio: "Architect with a love for design and aesthetics. Wonderful companion for art events and cultural activities.",
        height: "5'11\"",
        ethnicity: "Caucasian",
        languages: ["English", "Afrikaans", "Dutch"]
    },
    {
        id: 14,
        name: "Ahmed",
        age: 29,
        location: "kayelitsha",
        locationName: "Kayelitsha",
        rate: 850,
        rating: 4.7,
        reviews: 17,
        image: "resources/avatar-13.jpg",
        verified: true,
        available: true,
        services: ["companion", "massage", "events"],
        bio: "Tech entrepreneur with a passion for innovation. Great for business events and intellectual conversations.",
        height: "5'10\"",
        ethnicity: "Middle Eastern",
        languages: ["English", "Arabic"]
    },
    {
        id: 15,
        name: "Johan",
        age: 32,
        location: "thubelitsha",
        locationName: "Thubelitsha",
        rate: 1250,
        rating: 4.8,
        reviews: 26,
        image: "resources/avatar-14.jpg",
        verified: true,
        available: true,
        services: ["dinner", "travel", "companion"],
        bio: "Financial advisor with sophisticated taste. Perfect for business dinners and upscale social events.",
        height: "6'0\"",
        ethnicity: "Caucasian",
        languages: ["English", "Afrikaans"]
    },
    {
        id: 16,
        name: "Alex",
        age: 26,
        location: "kayamandi",
        locationName: "Kayamandi",
        rate: 900,
        rating: 4.7,
        reviews: 14,
        image: "resources/avatar-15.jpg",
        verified: true,
        available: false,
        services: ["massage", "companion", "fitness"],
        bio: "Personal trainer and wellness coach. Dedicated to health, fitness, and making you feel amazing.",
        height: "6'1\"",
        ethnicity: "Caucasian",
        languages: ["English", "Spanish"]
    }
];

// Global variables
let filteredProfiles = [...escortProfiles];
let currentPage = 1;
const profilesPerPage = 8;

// DOM Elements
const ageVerification = document.getElementById('ageVerification');
const enterSiteBtn = document.getElementById('enterSite');
const exitSiteBtn = document.getElementById('exitSite');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const escortsGrid = document.getElementById('escortsGrid');
const searchBtn = document.getElementById('searchBtn');
const clearFiltersBtn = document.getElementById('clearFilters');
const loadMoreBtn = document.getElementById('loadMore');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Check age verification
    checkAgeVerification();
    
    // Initialize typewriter effect
    initializeTypewriter();
    
    // Setup event listeners
    setupEventListeners();
    
    // Load initial escort profiles
    loadEscortProfiles();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Initialize counter animations
    initializeCounters();
    
    console.log('Gentlemen\'s Companion initialized successfully');
}

// Age Verification System
function checkAgeVerification() {
    const isVerified = localStorage.getItem('ageVerified');
    if (isVerified === 'true') {
        ageVerification.style.display = 'none';
    }
}

function verifyAge() {
    localStorage.setItem('ageVerified', 'true');
    
    // Animate modal out
    anime({
        targets: ageVerification,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeOutQuad',
        complete: function() {
            ageVerification.style.display = 'none';
        }
    });
}

function exitSite() {
    // Redirect to a safe site
    window.location.href = 'https://google.com';
}

// Typewriter Effect
function initializeTypewriter() {
    const typed = new Typed('#typed-text', {
        strings: [
            'Sophisticated Companions',
            'Verified Gentlemen',
            'Discreet Experiences',
            'Luxury Service'
        ],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Event Listeners
function setupEventListeners() {
    // Age verification buttons
    enterSiteBtn.addEventListener('click', verifyAge);
    exitSiteBtn.addEventListener('click', exitSite);
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Search and filter buttons
    searchBtn.addEventListener('click', filterProfiles);
    clearFiltersBtn.addEventListener('click', clearFilters);
    loadMoreBtn.addEventListener('click', loadMoreProfiles);
    
    // Filter inputs (real-time filtering)
    const filterInputs = ['locationFilter', 'ageMin', 'ageMax', 'rateMin', 'rateMax', 'availabilityFilter'];
    filterInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', debounce(filterProfiles, 300));
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
}

// Profile Filtering System
function filterProfiles() {
    const location = document.getElementById('locationFilter').value;
    const ageMin = parseInt(document.getElementById('ageMin').value) || 0;
    const ageMax = parseInt(document.getElementById('ageMax').value) || 100;
    const rateMin = parseInt(document.getElementById('rateMin').value) || 0;
    const rateMax = parseInt(document.getElementById('rateMax').value) || 10000;
    const availability = document.getElementById('availabilityFilter').value;
    
    filteredProfiles = escortProfiles.filter(profile => {
        // Location filter
        if (location && profile.location !== location) return false;
        
        // Age filter
        if (profile.age < ageMin || profile.age > ageMax) return false;
        
        // Rate filter
        if (profile.rate < rateMin || profile.rate > rateMax) return false;
        
        // Availability filter
        if (availability === 'now' && !profile.available) return false;
        
        return true;
    });
    
    currentPage = 1;
    loadEscortProfiles();
    
    // Animate filter button
    anime({
        targets: searchBtn,
        scale: [1, 0.95, 1],
        duration: 200,
        easing: 'easeOutQuad'
    });
}

function clearFilters() {
    document.getElementById('locationFilter').value = '';
    document.getElementById('ageMin').value = '';
    document.getElementById('ageMax').value = '';
    document.getElementById('rateMin').value = '';
    document.getElementById('rateMax').value = '';
    document.getElementById('availabilityFilter').value = '';
    
    filteredProfiles = [...escortProfiles];
    currentPage = 1;
    loadEscortProfiles();
}

// Profile Loading and Display
function loadEscortProfiles() {
    const startIndex = 0;
    const endIndex = currentPage * profilesPerPage;
    const profilesToShow = filteredProfiles.slice(startIndex, endIndex);
    
    escortsGrid.innerHTML = '';
    
    profilesToShow.forEach((profile, index) => {
        const profileCard = createProfileCard(profile);
        escortsGrid.appendChild(profileCard);
        
        // Animate card entrance
        anime({
            targets: profileCard,
            opacity: [0, 1],
            translateY: [30, 0],
            delay: index * 100,
            duration: 600,
            easing: 'easeOutQuad'
        });
    });
    
    // Update load more button visibility
    if (endIndex >= filteredProfiles.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function loadMoreProfiles() {
    currentPage++;
    loadEscortProfiles();
    
    // Animate load more button
    anime({
        targets: loadMoreBtn,
        scale: [1, 0.95, 1],
        duration: 200,
        easing: 'easeOutQuad'
    });
}

function createProfileCard(profile) {
    const card = document.createElement('div');
    card.className = 'profile-card card-hover cursor-pointer';
    card.onclick = () => viewProfile(profile.id);
    
    const availabilityClass = profile.available ? 'bg-green-500' : 'bg-gray-500';
    const availabilityText = profile.available ? 'Available Now' : 'Busy';
    
    card.innerHTML = `
        <div class="relative">
            <img src="${profile.image}" alt="${profile.name}" class="profile-image">
            <div class="absolute top-4 left-4">
                ${profile.verified ? '<span class="verified-badge">✓ Verified</span>' : ''}
            </div>
            <div class="absolute top-4 right-4">
                <span class="${availabilityClass} text-white text-xs px-2 py-1 rounded-full">${availabilityText}</span>
            </div>
            <div class="absolute bottom-4 right-4">
                <span class="price-tag text-sm px-3 py-1 rounded-full">R${profile.rate}/hr</span>
            </div>
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-3">
                <div>
                    <h3 class="font-display text-xl font-semibold text-white">${profile.name}</h3>
                    <p class="text-gray-400">${profile.age} years old</p>
                </div>
                <div class="text-right">
                    <div class="flex items-center mb-1">
                        <span class="rating-stars">★★★★★</span>
                        <span class="text-gray-400 text-sm ml-1">${profile.rating}</span>
                    </div>
                    <p class="text-gray-500 text-sm">${profile.reviews} reviews</p>
                </div>
            </div>
            <div class="mb-4">
                <span class="location-tag text-xs px-2 py-1 rounded-full">${profile.locationName}</span>
            </div>
            <p class="text-gray-300 text-sm mb-4 line-clamp-2">${profile.bio}</p>
            <div class="flex space-x-2">
                <button class="btn-primary flex-1 py-2 px-4 rounded-lg text-sm font-semibold" onclick="event.stopPropagation(); contactEscort(${profile.id})">
                    Contact
                </button>
                <button class="btn-secondary flex-1 py-2 px-4 rounded-lg text-sm font-semibold" onclick="event.stopPropagation(); viewProfile(${profile.id})">
                    View Profile
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Profile Actions
function viewProfile(profileId) {
    // Store profile ID in localStorage for profiles page
    localStorage.setItem('selectedProfileId', profileId);
    window.location.href = 'profiles.html';
}

function contactEscort(profileId) {
    const profile = escortProfiles.find(p => p.id === profileId);
    if (profile) {
        // Show contact modal or redirect to messaging
        alert(`Contact ${profile.name}\\n\\nPhone: Available after registration\\nEmail: Available after registration\\n\\nRegister now to get direct contact information!`);
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// Counter Animations
function initializeCounters() {
    const counters = [
        { id: 'verifiedCount', target: 50, suffix: '+' },
        { id: 'clientCount', target: 1000, suffix: '+' },
        { id: 'locationCount', target: 6, suffix: '' },
        { id: 'experienceCount', target: 5, suffix: '+' }
    ];
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = counters.find(c => c.id === entry.target.id);
                if (counter) {
                    animateCounter(counter);
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        if (element) {
            observer.observe(element);
        }
    });
}

function animateCounter(counter) {
    const element = document.getElementById(counter.id);
    let current = 0;
    const increment = counter.target / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= counter.target) {
            current = counter.target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + counter.suffix;
    }, 40);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll for navigation
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Mobile menu handling
document.addEventListener('click', function(e) {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

// Performance optimization
function optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
        });
    });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizeImages);

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Service worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for use in other pages
window.GentlemensCompanion = {
    escortProfiles,
    viewProfile,
    contactEscort,
    smoothScrollTo
};