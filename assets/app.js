// assets/app.js
import './bootstrap.js'; // Si tu utilises Bootstrap pour ton projet
import './styles/app.css';
import './js/search.js'; // Import de search.js

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

// Code spécifique pour le filtre de prix
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

if (priceRange && priceValue) {
    priceRange.oninput = function() {
        priceValue.innerHTML = priceRange.value;
    };
}

