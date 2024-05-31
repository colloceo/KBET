// JavaScript for responsiveness and other functionalities

// Function to toggle navigation menu on small screens
function toggleMenu() {
    var nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

// Function to adjust banner height based on screen size
function adjustBannerHeight() {
    var banner = document.querySelector('.banner');
    var windowHeight = window.innerHeight;
    banner.style.height = windowHeight + 'px';
}

// Function to adjust content layout based on screen size
function adjustContentLayout() {
    var featuredGames = document.querySelector('.featured-games');
    var popularGames = document.querySelector('.popular-games');
    var popularCasinoGames = document.querySelector('.popular-casino-games');
    var liveDealers = document.querySelector('.live-dealers');

    if (window.innerWidth <= 768) {
        featuredGames.classList.add('stacked');
        popularGames.classList.add('stacked');
        popularCasinoGames.classList.add('stacked');
        liveDealers.classList.add('stacked');
    } else {
        featuredGames.classList.remove('stacked');
        popularGames.classList.remove('stacked');
        popularCasinoGames.classList.remove('stacked');
        liveDealers.classList.remove('stacked');
    }
}

// Call functions on page load and resize
window.onload = function() {
    adjustBannerHeight();
    adjustContentLayout();
}

window.onresize = function() {
    adjustBannerHeight();
    adjustContentLayout();
}
