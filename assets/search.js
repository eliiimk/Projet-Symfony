// assets/js/search.js
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

if (priceRange && priceValue) {
    priceRange.oninput = function() {
        priceValue.innerHTML = priceRange.value;
    };
}
