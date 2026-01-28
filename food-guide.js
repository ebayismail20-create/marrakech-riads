// Food Guide - Simple Version
(function () {
    console.log('Food Guide script loaded!');

    const foodData = [
        {
            name: "🥘 Tagine (Chicken / Beef / Lamb / Veg)",
            img1: "https://www.google.com/search?q=moroccan+tagine+served+in+clay+pot&tbm=isch",
            img2: "https://www.google.com/search?q=chicken+tagine+moroccan+plate&tbm=isch",
            desc: "Slow-cooked Moroccan stew with spices, meat and vegetables.",
            prices: ["40–80 MAD (≈ 4–7 €) street or local restaurant", "90–120 MAD (≈ 8–11 €) nicer restaurant"],
            places: [
                { name: "Nomad – Marrakech", url: "https://www.google.com/maps/search/?api=1&query=Nomad+Marrakech" },
                { name: "Dar Yacout – Marrakech", url: "https://www.google.com/maps/search/?api=1&query=Dar+Yacout+Marrakech" }
            ]
        },
        {
            name: "🍛 Couscous (Best on Friday)",
            img1: "https://www.google.com/search?q=moroccan+couscous+traditional+plate&tbm=isch",
            img2: "https://www.google.com/search?q=couscous+tfaya+moroccan&tbm=isch",
            desc: "Steamed semolina with vegetables and meat, classic Moroccan dish.",
            prices: ["60–100 MAD (≈ 6–9 €)"],
            places: [
                { name: "Al Fassia – Marrakech", url: "https://www.google.com/maps/search/?api=1&query=Al+Fassia+Marrakech" },
                { name: "Local Riad lunch (Ask your riad to prepare)", url: "#" }
            ]
        },
        {
            name: "🥧 Pastilla (Chicken or Seafood)",
            img1: "https://www.google.com/search?q=moroccan+pastilla+chicken&tbm=isch",
            img2: "https://www.google.com/search?q=seafood+pastilla+moroccan&tbm=isch",
            desc: "Sweet & savory layered pie with almonds and cinnamon (elegant dish).",
            prices: ["80–140 MAD (≈ 7–13 €)"],
            places: [
                { name: "Dar Moha – Marrakech", url: "https://www.google.com/maps/search/?api=1&query=Dar+Moha+Marrakech" },
                { name: "La Table by Madada – Essaouira", url: "https://www.google.com/maps/search/?api=1&query=La+Table+by+Madada+Essaouira" }
            ]
        },
        {
            name: "🍲 Harira Soup",
            img1: "https://www.google.com/search?q=harira+soup+morocco+bowl&tbm=isch",
            img2: "https://www.google.com/search?q=moroccan+harira+soup+traditional&tbm=isch",
            desc: "Moroccan tomato, lentils & chickpeas soup — very traditional.",
            prices: ["5–15 MAD (≈ 0.5–1.5 €)"],
            places: [
                { name: "Street stalls Jemaa el-Fna", url: "https://www.google.com/maps/search/?api=1&query=Jemaa+el+Fna+food+stalls" },
                { name: "Local cafés in the Medina", url: "#" }
            ]
        },
        {
            name: "🫓 Msemen (Flatbread)",
            img1: "https://www.google.com/search?q=msemen+moroccan+pancake+stack&tbm=isch",
            img2: "https://www.google.com/search?q=msemen+with+honey+moroccan&tbm=isch",
            desc: "Moroccan pancake / layered flatbread.",
            prices: ["2–5 MAD (≈ 0.2–0.5 €)"],
            places: [
                { name: "Street stalls near souks", url: "https://www.google.com/maps/search/?api=1&query=Msemen+street+stall+Marrakech" },
                { name: "Small breakfast cafés in Medina", url: "#" }
            ]
        },
        {
            name: "🥪 Moroccan Sandwich (Street Food)",
            img1: "https://www.google.com/search?q=moroccan+street+sandwich+kefta&tbm=isch",
            img2: "https://www.google.com/search?q=moroccan+sandwich+chicken+street+food&tbm=isch",
            desc: "Bread stuffed with chicken, kefta (meatballs), tuna or veggies.",
            prices: ["15–30 MAD (≈ 1.5–3 €)"],
            places: [
                { name: "Street vendors near Jemaa el-Fna", url: "https://www.google.com/maps/search/?api=1&query=Jemaa+el+Fna+street+food" },
                { name: "Snack shops inside Medina", url: "#" }
            ]
        },
        {
            name: "🍩 Sfenj (Moroccan Donut)",
            img1: "https://www.google.com/search?q=sfenj+moroccan+donuts&tbm=isch",
            img2: "https://www.google.com/search?q=sfenj+morocco+street+food&tbm=isch",
            desc: "Light fried donut, great with tea.",
            prices: ["1–2 MAD (≈ 0.1–0.2 €)"],
            places: [
                { name: "Street stalls in the Medina", url: "https://www.google.com/maps/search/?api=1&query=Sfenj+street+stall+Marrakech" }
            ]
        },
        {
            name: "🐟 Grilled Fish (Essaouira)",
            img1: "https://www.google.com/search?q=essaouira+grilled+fish+market&tbm=isch",
            img2: "https://www.google.com/search?q=grilled+sardines+morocco&tbm=isch",
            desc: "Fresh grilled fish, especially sardines and seafood.",
            prices: ["60–120 MAD (≈ 6–11 €)"],
            places: [
                { name: "Essaouira Fish Market (Port Grills)", url: "https://www.google.com/maps/search/?api=1&query=Essaouira+Fish+Market" },
                { name: "Chez Sam – Essaouira", url: "https://www.google.com/maps/search/?api=1&query=Chez+Sam+Essaouira" }
            ]
        },
        {
            name: "🍵 Moroccan Mint Tea",
            img1: "https://www.google.com/search?q=moroccan+mint+tea+glass+pouring&tbm=isch",
            img2: "https://www.google.com/search?q=atay+moroccan+mint+tea+traditional&tbm=isch",
            desc: "Sweet mint tea, national drink of Morocco.",
            prices: ["5–15 MAD (≈ 0.5–1.5 €)"],
            places: [
                { name: "Any café in Medina", url: "https://www.google.com/maps/search/?api=1&query=Cafe+in+Medina+Marrakech" },
                { name: "Rooftop cafés with views", url: "#" }
            ]
        },
        {
            name: "🍊 Fresh Orange Juice",
            img1: "https://www.google.com/search?q=jemaa+el+fna+orange+juice+stall&tbm=isch",
            img2: "https://www.google.com/search?q=fresh+orange+juice+morocco+street&tbm=isch",
            desc: "Freshly squeezed juice — refreshing and cheap.",
            prices: ["4–10 MAD (≈ 0.4–1 €)"],
            places: [
                { name: "Juice stalls in Jemaa el-Fna", url: "https://www.google.com/maps/search/?api=1&query=Jemaa+el+Fna+orange+juice" }
            ]
        },
        {
            name: "☕ Coffee (Morocco)",
            img1: "https://www.google.com/search?q=moroccan+cafe+coffee+medina&tbm=isch",
            img2: "https://www.google.com/search?q=espresso+morocco+cafe&tbm=isch",
            desc: "Espresso or café au lait, perfect mid-day break.",
            prices: ["8–20 MAD (≈ 0.8–2 €)"],
            places: [
                { name: "Cafe des Epices – Marrakech", url: "https://www.google.com/maps/search/?api=1&query=Cafe+des+Epices+Marrakech" },
                { name: "Cafés in Gueliz", url: "https://www.google.com/maps/search/?api=1&query=Cafe+Gueliz+Marrakech" }
            ]
        }
    ];

    function createCard(item) {
        const priceHTML = item.prices.map(p => '<li>' + p + '</li>').join('');
        const placesHTML = item.places.map(p =>
            p.url === '#' ? '<li>' + p.name + '</li>' : '<li><a href="' + p.url + '" target="_blank" rel="noopener">👉 ' + p.name + '</a></li>'
        ).join('');

        return '<div class="food-guide-card">' +
            '<h3 class="food-name">' + item.name + '</h3>' +
            '<div class="image-search-links">' +
            '<a href="' + item.img1 + '" target="_blank" rel="noopener" class="image-search-btn">' +
            '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">' +
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>' +
            '<circle cx="8.5" cy="8.5" r="1.5"></circle>' +
            '<polyline points="21 15 16 10 5 21"></polyline>' +
            '</svg> View Image 1</a>' +
            '<a href="' + item.img2 + '" target="_blank" rel="noopener" class="image-search-btn">' +
            '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">' +
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>' +
            '<circle cx="8.5" cy="8.5" r="1.5"></circle>' +
            '<polyline points="21 15 16 10 5 21"></polyline>' +
            '</svg> View Image 2</a>' +
            '</div>' +
            '<p class="food-description">' + item.desc + '</p>' +
            '<div class="price-section"><strong>Price:</strong><ul>' + priceHTML + '</ul></div>' +
            '<div class="places-section"><strong>Recommended Places:</strong><ul>' + placesHTML + '</ul></div>' +
            '</div>';
    }

    function populate() {
        console.log('Populating food guide...');
        const grid = document.getElementById('food-guide-grid');
        if (grid) {
            console.log('Grid found! Adding', foodData.length, 'items');
            grid.innerHTML = foodData.map(createCard).join('');
            console.log('Done! Grid innerHTML length:', grid.innerHTML.length);
        } else {
            console.error('Grid NOT found!');
        }
    }

    function handleRouting() {
        const hash = window.location.hash;
        const section = document.getElementById('food-guide-section');
        const app = document.getElementById('app');

        if (hash === '#food-guide') {
            if (section) section.style.display = 'block';
            if (app) app.style.display = 'none';
            window.scrollTo(0, 0);
        } else {
            if (section) section.style.display = 'none';
            if (app) app.style.display = 'block';
        }
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            console.log('DOMContentLoaded fired');
            populate();
            handleRouting();
            window.addEventListener('hashchange', handleRouting);
        });
    } else {
        console.log('Document already loaded');
        populate();
        handleRouting();
        window.addEventListener('hashchange', handleRouting);
    }
})();