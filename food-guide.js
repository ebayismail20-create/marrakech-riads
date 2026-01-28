// Food Guide Data with Image Search Links
const foodGuideData = [
    {
        name: "🥘 Tagine (Chicken / Beef / Lamb / Veg)",
        imageSearch1: "https://www.google.com/search?q=moroccan+tagine+served+in+clay+pot&tbm=isch",
        imageSearch2: "https://www.google.com/search?q=chicken+tagine+moroccan+plate&tbm=isch",
        description: "Slow-cooked Moroccan stew with spices, meat and vegetables.",
        priceDetails: [
            "40–80 MAD (≈ 4–7 €) street or local restaurant",
            "90–120 MAD (≈ 8–11 €) nicer restaurant"
        ],
        places: [
            { name: "Nomad – Marrakech", url: "https://www.google.com/maps/search/?api=1&query=Nomad+Marrakech" },
            { name: "Dar Yacout – Marrakech", url: "https://www.google.com/maps/search/?api=1&query=Dar+Yacout+Marrakech" }
        ]
    },
    {
        name: "🍛 Couscous (Best on Friday)",
        imageSearch1: "https://www.google.com/search?q=moroccan+couscous+traditional+plate&tbm=isch",
        imageSearch2: "https://www.google.com/search?q=couscous+tfaya+moroccan&tbm=isch",
        description: "Steamed semolina with vegetables and meat, classic Moroccan dish.",
        priceDetails: ["60–100 MAD (≈ 6–9 €)"],
        places: [
            { name: "Al Fassia – Marrakech", url: "https://www.google.com/maps/search/?api=1&query=Al+Fassia+Marrakech" },
            { name: "Local Riad lunch (Ask your riad to prepare)", url: "#" }
        ]
    },
    {
        name: "🥧 Pastilla (Chicken or Seafood)",
        imageSearch1: "https://www.google.com/search?q=moroccan+pastilla+chicken&tbm=isch",
        imageSearch2: "https://www.google.com/search?q=seafood+pastilla+moroccan&tbm=isch",
        description: "Sweet & savory layered pie with almonds and cinnamon (elegant dish).",
        priceDetails: ["80–140 MAD (≈ 7–13 €)"],
        places: [
            { name: "Dar Moha – Marrakech", url: "https://www.google.com/maps/search/?api=1&query=Dar+Moha+Marrakech" },
            { name: "La Table by Madada – Essaouira", url: "https://www.google.com/maps/search/?api=1&query=La+Table+by+Madada+Essaouira" }
        ]
    },
    {
        name: "🍲 Harira Soup",
        imageSearch1: "https://www.google.com/search?q=harira+soup+morocco+bowl&tbm=isch",
        imageSearch2: "https://www.google.com/search?q=moroccan+harira+soup+traditional&tbm=isch",
        description: "Moroccan tomato, lentils & chickpeas soup — very traditional.",
        priceDetails: ["5–15 MAD (≈ 0.5–1.5 €)"],
        places: [
            { name: "Street stalls Jemaa el-Fna", url: "https://www.google.com/maps/search/?api=1&query=Jemaa+el+Fna+food+stalls" },
            { name: "Local cafés in the Medina", url: "#" }
        ]
    },
    {
        name: "🫓 Msemen (Flatbread)",
        imageSearch1: "https://www.google.com/search?q=msemen+moroccan+pancake+stack&tbm=isch",
        imageSearch2: "https://www.google.com/search?q=msemen+with+honey+moroccan&tbm=isch",
        description: "Moroccan pancake / layered flatbread.",
        priceDetails: ["2–5 MAD (≈ 0.2–0.5 €)"],
        places: [
            { name: "Street stalls near souks", url: "https://www.google.com/maps/search/?api=1&query=Msemen+street+stall+Marrakech" },
            { name: "Small breakfast cafés in Medina", url: "#" }
        ]
    },
    {
        name: "🥪 Moroccan Sandwich (Street Food)",
        imageSearch1: "https://www.google.com/search?q=moroccan+street+sandwich+kefta&tbm=isch",
        imageSearch2: "https://www.google.com/search?q=moroccan+sandwich+chicken+street+food&tbm=isch",
        description: "Bread stuffed with chicken, kefta (meatballs), tuna or veggies.",
        priceDetails: ["15–30 MAD (≈ 1.5–3 €)"],
        places: [
            { name: "Street vendors near Jemaa el-Fna", url: "https://www.google.com/maps/search/?api=1&query=Jemaa+el+Fna+street+food" },
            { name: "Snack shops inside Medina", url: "#" }
        ]
    },
    {
        name: "🍩 Sfenj (Moroccan Donut)",
        imageSearch1: "https://www.google.com/search?q=sfenj+moroccan+donuts&tbm=isch",
        imageSearch2: "https://www.google.com/search?q=sfenj+morocco+street+food&tbm=isch",
        description: "Light fried donut, great with tea.",
        priceDetails: ["1–2 MAD (≈ 0.1–0.2 €)"],
        places: [
            { name: "Street stalls in the Medina", url: "https://www.google.com/maps/search/?api=1&query=Sfenj+street+stall+Marrakech" }
        ]
    },
    {
        name: "🐟 Grilled Fish (Essaouira)",
        imageSearch1: "https://www.google.com/search?q=essaouira+grilled+fish+market&tbm=isch",
        imageSearch2: "https://www.google.com/search?q=grilled+sardines+morocco&tbm=isch",
        description: "Fresh grilled fish, especially sardines and seafood.",
        priceDetails: ["60–120 MAD (≈ 6–11 €)"],
        places: [
            { name: "Essaouira Fish Market (Port Grills)", url: "https://www.google.com/maps/search/?api=1&query=Essaouira+Fish+Market" },
            { name: "Chez Sam – Essaouira", url: "https://www.google.com/maps/search/?api=1&query=Chez+Sam+Essaouira" }
        ]
    },
    {
        name: "🍵 Moroccan Mint Tea",
        imageSearch1: "https://www.google.com/search?q=moroccan+mint+tea+glass+pouring&tbm=isch",
        imageSearch2: "https://www.google.com/search?q=atay+moroccan+mint+tea+traditional&tbm=isch",
        description: "Sweet mint tea, national drink of Morocco.",
        priceDetails: ["5–15 MAD (≈ 0.5–1.5 €)"],
        places: [
            { name: "Any café in Medina", url: "https://www.google.com/maps/search/?api=1&query=Cafe+in+Medina+Marrakech" },
            { name: "Rooftop cafés with views", url: "#" }
        ]
    },
    {
        name: "🍊 Fresh Orange Juice",
        imageSearch1: "https://www.google.com/search?q=jemaa+el+fna+orange+juice+stall&tbm=isch",
        imageSearch2: "https://www.google.com/search?q=fresh+orange+juice+morocco+street&tbm=isch",
        description: "Freshly squeezed juice — refreshing and cheap.",
        priceDetails: ["4–10 MAD (≈ 0.4–1 €)"],
        places: [
            { name: "Juice stalls in Jemaa el-Fna", url: "https://www.google.com/maps/search/?api=1&query=Jemaa+el+Fna+orange+juice" }
        ]
    },
    {
        name: "☕ Coffee (Morocco)",
        imageSearch1: "https://www.google.com/search?q=moroccan+cafe+coffee+medina&tbm=isch",
        imageSearch2: "https://www.google.com/search?q=espresso+morocco+cafe&tbm=isch",
        description: "Espresso or café au lait, perfect mid-day break.",
        priceDetails: ["8–20 MAD (≈ 0.8–2 €)"],
        places: [
            { name: "Cafe des Epices – Marrakech", url: "https://www.google.com/maps/search/?api=1&query=Cafe+des+Epices+Marrakech" },
            { name: "Cafés in Gueliz", url: "https://www.google.com/maps/search/?api=1&query=Cafe+Gueliz+Marrakech" }
        ]
    }
];

function createFoodGuideCard(item) {
    return `
        <div class="food-guide-card">
            <h3 class="food-name">${item.name}</h3>
            
            <div class="image-search-links">
                <a href="${item.imageSearch1}" target="_blank" rel="noopener" class="image-search-btn">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                    View Image 1
                </a>
                <a href="${item.imageSearch2}" target="_blank" rel="noopener" class="image-search-btn">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                    View Image 2
                </a>
            </div>

            <p class="food-description">${item.description}</p>

            <div class="price-section">
                <strong>Price:</strong>
                <ul>
                    ${item.priceDetails.map(price => `<li>${price}</li>`).join('')}
                </ul>
            </div>

            <div class="places-section">
                <strong>Recommended Places:</strong>
                <ul>
                    ${item.places.map(place =>
        place.url === '#'
            ? `<li>${place.name}</li>`
            : `<li><a href="${place.url}" target="_blank" rel="noopener">👉 ${place.name}</a></li>`
    ).join('')}
                </ul>
            </div>
        </div>
    `;
}

function populateFoodGuide() {
    const grid = document.getElementById('food-guide-grid');
    if (grid) {
        grid.innerHTML = foodGuideData.map(item => createFoodGuideCard(item)).join('');
    }
}

function handleFoodGuideRouting() {
    const hash = window.location.hash;
    const foodGuideSection = document.getElementById('food-guide-section');
    const app = document.getElementById('app');

    if (hash === '#food-guide') {
        if (foodGuideSection) foodGuideSection.style.display = 'block';
        if (app) app.style.display = 'none';
        window.scrollTo(0, 0);
    } else {
        if (foodGuideSection) foodGuideSection.style.display = 'none';
        if (app && hash !== '#food-guide') app.style.display = 'block';
    }
}

// Initialize Food Guide when page loads
document.addEventListener('DOMContentLoaded', () => {
    populateFoodGuide();
    handleFoodGuideRouting();
    window.addEventListener('hashchange', handleFoodGuideRouting);
});