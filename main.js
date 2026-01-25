const locations = {
    marrakech_medina: [
        {
            id: 'jemaa-el-fna',
            name: 'Center of Marrakech (City Center) – Jemaa el-Fna',
            image: 'https://www.lesjardinsdelamedina.com/blog/wp-content/uploads/2020/07/jama-el-fnaa.jpg',
            rating: 5,
            distance: '0 km',
            price: { mad: 'Free', eur: 'Free' },
            bestTime: '17:30 – 21:30',
            maps: 'https://maps.google.com/?q=Jemaa+el-Fna',
            badge: 'Iconic Square'
        },
        {
            id: 'koutoubia',
            name: 'Koutoubia Mosque',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Koutoubia%20Mosque%2CMarrakech%2CMorocco.jpg?width=1800',
            rating: 5,
            distance: '500 m from Jemaa el-Fna',
            price: { mad: 'Free', eur: '(outside only)' },
            bestTime: '18:00 – sunset',
            info: 'Iconic 12th-century minaret, visible across the city.',
            access: 'Walking from Jemaa el-Fna',
            maps: 'https://maps.google.com/?q=Koutoubia+Mosque+Marrakech',
            badge: 'Historic'
        },
        {
            id: 'jardin-secret',
            name: 'Le Jardin Secret',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Morocco%20-%20Marrakech%20-%20Le%20Jardin%20Secret%20(49133982557).jpg?width=1800',
            rating: 5,
            distance: '600 m from Jemaa el-Fna',
            price: { mad: '100 MAD', eur: '≈ 9 €' },
            bestTime: '08:30 – 10:00',
            access: 'Walking from Jemaa el-Fna',
            maps: 'https://maps.google.com/?q=Le+Jardin+Secret+Marrakech',
            badge: 'Hidden Gem'
        },
        {
            id: 'bahia-palace',
            name: 'Bahia Palace',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bahia%20Palace%202018%201.jpg?width=1800',
            rating: 5,
            distance: '1.2 km from Jemaa el-Fna',
            price: { mad: '70 MAD', eur: '≈ 6.5 €' },
            bestTime: '09:00 – 11:00',
            access: 'Walking from Jemaa el-Fna',
            maps: 'https://maps.google.com/?q=Bahia+Palace+Marrakech',
            badge: 'Palace'
        },
        {
            id: 'ben-youssef',
            name: 'Ben Youssef Madrasa',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Marrakesh%20Ben%20Youssef%20Madrasa%20courtyard%202.jpg?width=1800',
            distance: '900 m from Jemaa el-Fna',
            price: { mad: '50 MAD', eur: '≈ 4.5 €' },
            bestTime: '09:00 – 10:30',
            access: 'Walking from Jemaa el-Fna',
            maps: 'https://maps.google.com/?q=Ben+Youssef+Madrasa',
            badge: 'Education'
        },
        {
            id: 'souks',
            name: 'Souks of Marrakech',
            image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/13/e4/fe/86.jpg',
            rating: 5,
            distance: '',
            price: { mad: 'Free', eur: 'Free' },
            bestTime: '09:30 – 11:30 | 16:30 – 18:30',
            access: 'Walking from City Center',
            maps: 'https://maps.google.com/?q=Marrakech+Souks',
            badge: 'Shopping'
        }
    ],
    marrakech_gardens: [
        {
            id: 'majorelle',
            name: 'Jardin Majorelle',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Le%20jardin%20de%20majorelle%2002.JPG?width=1800',
            rating: 5,
            distance: '4 km from Jemaa el-Fna',
            price: { mad: '170 MAD', eur: '≈ 16 €' },
            bestTime: '08:30 – 09:45',
            info: 'Taking a Small Taxi is better (too far to walk).',
            access: 'Small Taxi from City Center',
            maps: 'https://maps.google.com/?q=Jardin+Majorelle',
            warning: 'book online tickets mandatory before you go',
            bookingUrl: 'https://www.jardinmajorelle.com/en/',
            badge: 'Art & Flora'
        },
        {
            id: 'camel-ride-dinner',
            name: 'Camel ride & Dinner Show',
            image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-3482187/original/278d5fde-a967-4725-a0e6-93faaa021e2b.jpeg?im_w=480',
            rating: 5,
            price: { mad: '≈ 280 MAD', eur: 'From € 26' },
            info: 'Agafay desert quad, camel ride, and traditional fire show dinner.',
            access: 'they will pick up you at you place deos not matter if it is hotel or Riad or appartment , and also they will return you to close point to your place or even nutil the door if you think you will lost 😁',
            bookingUrl: 'https://www.airbnb.com/experiences/3482187',
            badge: 'Experience'
        },
        {
            id: 'menara',
            name: 'Menara Gardens',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pavillon%20Menaragärten.jpg?width=1800',
            distance: '3.5 km from Jemaa el-Fna',
            price: { mad: 'Free', eur: 'Free' },
            bestTime: '17:00 – sunset',
            info: 'Taking a Small Taxi is better (too far to walk).',
            access: 'Small Taxi from City Center',
            maps: 'https://maps.google.com/?q=Menara+Gardens',
            badge: 'Quiet'
        },
        {
            id: 'menara-mall',
            name: 'Menara Mall',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Menara%20Mall.JPG?width=1800',
            distance: '4 km from Jemaa el-Fna',
            price: { mad: 'Free', eur: 'Free' },
            bestTime: '18:00 – 20:00',
            info: 'Taking a Small Taxi is better (too far to walk).',
            access: 'Small Taxi from City Center',
            maps: 'https://maps.google.com/?q=Menara+Mall+Marrakech',
            badge: 'Modern'
        }
    ],
    marrakech_adventure: [
        {
            id: 'quad-biking',
            name: 'Quad Biking – Palmeraie',
            image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1078874/original/93df2af3-8a02-416e-92af-dbff97df7e9f.jpeg?im_w=720',
            rating: 5,
            distance: '',
            price: { mad: '200–300 MAD', eur: '≈ 18–28 €' },
            bestTime: '08:30–11:00 | 16:30–sunset',
            bookingOptions: [
                { name: 'Airbnb Option 1', url: 'https://www.airbnb.com/experiences/1078874?checkin=2026-01-31&checkout=2026-02-06&location=Marrakesh%2C%20Morocco&currentTab=experience_tab&federatedSearchId=6c533ba3-130b-4c0e-a8dc-8d1832755d0e&searchId=46b72e89-38c8-4b15-9ba3-432cd5f11707&sectionId=c9fc3559-fd1f-44e0-b384-5a91a8eec75e' },
                { name: 'Airbnb Option 2', url: 'https://www.airbnb.com/experiences/3428432?checkin=2026-01-31&checkout=2026-02-06&location=Marrakesh%2C%20Morocco&currentTab=experience_tab&federatedSearchId=cb91f0fd-3941-4bec-8e46-f8950c2746a1&searchId=140bae36-d437-44bc-a19f-6d5aadb9a03c&sectionId=63f681a1-76d2-4215-bfae-bd37503047ed' },
                { name: 'Airbnb Option 3', url: 'https://www.airbnb.com/experiences/3027465?checkin=2026-01-31&checkout=2026-02-06&location=Marrakesh%2C%20Morocco&currentTab=experience_tab&federatedSearchId=cb91f0fd-3941-4bec-8e46-f8950c2746a1&searchId=140bae36-d437-44bc-a19f-6d5aadb9a03c&sectionId=63f681a1-76d2-4215-bfae-bd37503047ed' },
            ],
            access: 'they will pick up you at you place deos not matter if it is hotel or Riad or appartment , and also they will return you to close point to your place or even nutil the door if you think you will lost 😁',
            badge: 'Action'
        },
        {
            id: 'agafay',
            name: 'Agafay Desert',
            image: 'https://www.pelago.com/img/products/MA-Morocco/agafay-desert-sunset-trip-with-dinner/9a77e129-287c-4a45-ab0f-f1212483421d_agafay-desert-sunset-trip-with-dinner-xlarge.webp',
            rating: 5,
            distance: '',
            price: { mad: '300–600 MAD', eur: '≈ 28–55 €' },
            bestTime: '16:30 – 19:30',
            bookingOptions: [
                { name: 'Airbnb Luxury Experience', url: 'https://www.airbnb.com/experiences/2981837?checkin=2026-01-31&checkout=2026-02-06&location=Marrakesh%2C%20Morocco&currentTab=experience_tab&federatedSearchId=6c533ba3-130b-4c0e-a8dc-8d1832755d0e&searchId=46b72e89-38c8-4b15-9ba3-432cd5f11707&sectionId=c9fc3559-fd1f-44e0-b384-5a91a8eec75e' }
            ],
            access: 'they will pick up you at you place deos not matter if it is hotel or Riad or appartment , and also they will return you to close point to your place or even nutil the door if you think you will lost 😁',
            badge: 'Luxury'
        },
        {
            id: 'setti-fatma',
            name: 'Setti Fatma',
            image: 'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/a3dd66602214123ee08ff4804b0286a2bb90e459338bb276a645aef56a59b6c4.png',
            rating: 5,
            distance: '',
            price: { mad: 'Free', eur: 'Free' },
            bestTime: '09:00 – 14:00',
            info: 'Visiting the waterfalls is free. For food, you can take what you want, but ALWAYS ask for a menu that has prices listed.',
            warning: 'Ask for a menu with prices before ordering food!',
            access: 'To reach Setti Fatma, you can take a small taxi or walk if you are in the center. Just ask for “Taxi Setti Fatma” — anyone there can guide you, and people are always happy to help',
            maps: 'https://maps.google.com/?q=Setti+Fatma+Ourika',
            badge: 'Waterfalls'
        }
    ],
    marrakech_wellness: [
        {
            id: 'authentic-hammam',
            name: 'Authentic Moroccan Hammam',
            image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-4066279/original/bca67ed2-3609-4a45-95c4-edb0cee3c817.jpeg?im_w=960',
            rating: 5,
            price: { mad: '≈ 270–380 MAD', eur: '25–35 €' },
            info: 'A complete traditional scrub and massage experience.',
            bookingUrl: 'https://www.airbnb.com/experiences/4066279?checkin=2026-01-31&checkout=2026-02-06&location=Marrakesh%2C%20Morocco&currentTab=experience_tab&federatedSearchId=5c14a2d9-6c16-4d81-8099-82a6772c940e&searchId=ce3cbdc5-fabc-4cf5-b172-117fc52eec41&sectionId=78eba05b-83aa-4eac-ab2b-83e92c5312f1',
            badge: 'Wellness'
        }
    ],
    essaouira: [
        {
            id: 'essaouira-medina',
            name: 'Essaouira Medina',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Essaouira%20port%20remparts%201134.JPG?width=1800',
            rating: 5,
            distance: '',
            price: { mad: 'Free', eur: 'Free' },
            bestTime: '09:00 – 12:00',
            maps: 'https://maps.google.com/?q=Essaouira+Medina',
            badge: 'Coastal'
        },
        {
            id: 'skala',
            name: 'Skala de la Ville',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Skala%20de%20Ville.jpg?width=1800',
            rating: 5,
            distance: '',
            price: { mad: 'Free', eur: 'Free' },
            bestTime: '17:00 – sunset',
            maps: 'https://maps.google.com/?q=Skala+de+la+Ville+Essaouira',
            badge: 'View'
        },
        {
            id: 'essaouira-beach',
            name: 'Essaouira Beach',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Essaouira%20Beach%2C%20Morocco%20-%20panoramio%20(4).jpg?width=1800',
            rating: 5,
            distance: '',
            price: { mad: 'Free', eur: 'Free' },
            bestTime: '09:00–12:00 | 16:30–sunset',
            maps: 'https://maps.google.com/?q=Essaouira+Beach',
            badge: 'Relax'
        }
    ],
    transport: [
        {
            id: 'petit-taxi',
            name: 'Small Taxi',
            image: 'https://www.lespetitesexperiences.com/wp-content/uploads/2025/12/petit-taxi-Marrakech-1024x683.jpg',
            rating: 5,
            price: { mad: '10–30 MAD', eur: '≈ 1–3 €' },
            info: 'City travel only. Always ask for the meter (compteur).',
            detail: 'Approx. 5–10 MAD per km. Minimum fare ~7 MAD.',
            badge: 'Local'
        },
        {
            id: 'supratours',
            name: 'Supratours Bus',
            image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0d/e5/bd/40.jpg',
            secondImage: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/32/bb/2f.jpg',
            rating: 5,
            duration: '~3 hours',
            price: { mad: '110–130 MAD', eur: '≈ 10–12 €' },
            info: 'City to City travel (e.g. Marrakech ⇄ Essaouira).',
            detail: 'Inter-city coach service. Reliable and air-conditioned.',
            maps: 'https://maps.google.com/?q=Supratours+Bus+Station+Marrakech+ONCF+Train+Station',
            extraMaps: {
                name: 'Station View',
                url: 'https://www.google.com/maps/place/Marrakech+train+station/@31.630626,-8.0171814,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgID9k6vwUQ!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHVAwepkFGq-OKkwQHIaTFkticoBTi0BXm_JI3oVBXcTfnl9ny5m-8qq7x3LaxWLE9RaLF-EXh9xHSjvlIwDgRP6T-B-ubFWO3lbbiTSxZiGpoqojbiKkkos7n4H8QnCR6bEVeKU82Vr%3Dw114-h86-k-no!7i3638!8i2729!4m23!1m15!4m14!1m6!1m2!1s0xdad9a34a74568f1:0xa8ad91f08229dfff!2sSupratours,+Essaouira,+Morocco!2m2!1d-9.7667969!2d31.5106037!1m6!1m2!1s0xdafee93ae6f6489:0x3b48dfb186a12d75!2sMarrakech+train+station,+CENTRE%D8%8C+Bd+Mohamed+VI,+Marrakesh+40100,+Morocco!2m2!1d-8.0171274!2d31.6305546!3m6!1s0xdafee93ae6f6489:0x3b48dfb186a12d75!8m2!3d31.6305326!4d-8.017204!10e5!16s%2Fg%2F11ckr5ggqr?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D#'
            },
            bookingUrl: 'https://www.supratours.ma/',
            badge: 'Transport'
        }
    ]
};

function createLocationCard(item, theme = 'terracotta') {
    return `
    <div class="glass-card location-card" data-id="${item.id}" data-aos="fade-up">
      <div class="card-image-gallery">
        ${item.image ? `<div class="card-image"><img src="${item.image}" alt="${item.name}"></div>` : ''}
        ${item.secondImage ? `<div class="card-image secondary-image"><img src="${item.secondImage}" alt="${item.name} View"></div>` : ''}
      </div>
      <div class="card-content">
        <div class="card-header">
          <span class="badge badge-${theme}">${item.badge}</span>
          <h3 class="location-name">${item.name}</h3>
        </div>
        
        <div class="card-details">
          ${item.distance ? `<div class="detail-row"><span class="label">📍 Distance:</span> <span>${item.distance}</span></div>` : ''}
          ${item.duration ? `<div class="detail-row"><span class="label">⏱ Duration:</span> <span>${item.duration}</span></div>` : ''}
          <div class="detail-row"><span class="label">🎟 Price:</span> <span class="price-highlight">${item.price.mad} <small>(${item.price.eur})</small></span></div>
          ${item.detail ? `<div class="detail-row" style="margin-top: 4px; font-style: italic; color: var(--color-terracotta)"><span class="label">ℹ Rate:</span> <span>${item.detail}</span></div>` : ''}
          ${item.warning ? `<div class="detail-row warning-text" style="margin-top: 8px; font-weight: 700; color: #d00;"><span class="label" style="color: #d00;">⚠️ Notice:</span> <span>${item.warning}</span></div>` : ''}
          ${item.access ? `<div class="detail-row" style="margin-top: 4px; color: var(--color-blue-moroccan); font-weight: 600;"><span class="label" style="color: var(--color-blue-moroccan)">🚶 Access:</span> <span>${item.access}</span></div>` : ''}
          ${item.pickup ? `<div class="detail-row" style="margin-top: 8px; background: rgba(226, 114, 91, 0.05); padding: 8px; border-radius: 8px; border-left: 3px solid var(--color-terracotta);"><span class="label" style="color: var(--color-terracotta); font-weight: 700; white-space: nowrap; margin-right: 8px;">🚐 Pickup:</span> <span style="font-size: 0.85rem; font-weight: 500;">${item.pickup}</span></div>` : ''}
          <div class="detail-row"><span class="label">🕒 Info:</span> <span>${item.bestTime || ''} ${item.info || ''}</span></div>
        </div>

        ${item.rating ? `
        <div class="rating-container">
            <span class="rating-label">Recommended:</span>
            <div class="star-rating">
                ${[1, 2, 3, 4, 5].map(star => `
                    <span class="star ${star <= item.rating ? 'selected' : ''}">★</span>
                `).join('')}
            </div>
        </div>
        ` : ''}
        
        <div class="card-actions" style="flex-wrap: wrap;">
          ${item.maps ? `
          <a href="${item.maps}" target="_blank" class="map-link">
            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            Location
          </a>
          ` : ''}
          ${item.extraMaps ? `
          <a href="${item.extraMaps.url}" target="_blank" class="map-link">
            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            ${item.extraMaps.name}
          </a>
          ` : ''}
          ${item.bookingUrl ? `
          <a href="${item.bookingUrl}" target="_blank" class="booking-link">
            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2l-1.5 1.5L6 2l-1.5 1.5L3 2v20z"/></svg>
            Book
          </a>
          ` : ''}
          ${item.bookingOptions ? `
          <div class="booking-options-list" style="width: 100%; display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
            <p style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); margin: 0;">Choose an Experience:</p>
            ${item.bookingOptions.map((opt, i) => `
              <a href="${opt.url}" target="_blank" class="booking-link" style="width: 100%; font-size: 0.8rem; padding: 10px;">
                🎟️ ${opt.name}
              </a>
            `).join('')}
          </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
    const containers = {
        'marrakech-medina-grid': locations.marrakech_medina,
        'marrakech-gardens-grid': locations.marrakech_gardens,
        'marrakech-adventure-grid': locations.marrakech_adventure,
        'marrakech-wellness-grid': locations.marrakech_wellness,
        'essaouira-grid': locations.essaouira,
        'transport-grid': locations.transport
    };

    Object.entries(containers).forEach(([id, items]) => {
        const container = document.getElementById(id);
        if (!container) return;

        const theme = id.includes('essaouira') ? 'blue' : 'terracotta';
        container.innerHTML = items.map(item => createLocationCard(item, theme)).join('');
    });

    // Lightbox Logic - Handle click to enlarge
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    // Delegate click events to card images
    document.addEventListener('click', (e) => {
        const img = e.target.closest('.card-image img');
        if (img) {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
            document.body.style.overflow = 'hidden'; // Stop background scrolling
        }
    });

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    closeBtn.onclick = closeLightbox;
    lightbox.onclick = (e) => {
        if (e.target !== lightboxImg) closeLightbox();
    };
});
