(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(r){if(r.ep)return;r.ep=!0;const e=i(r);fetch(r.href,e)}})();const s={marrakech_medina:[{id:"petit-taxi",name:"Local Transport – Petit Taxi (Marrakech)",image:"petit_taxi_hero.png",rating:5,price:{mad:"10–30 MAD",eur:"≈ 1–3 €"},bestTime:"Available all day and night",info:"Ideal for short trips between attractions. Petit taxis operate inside Marrakech only.",detail:"Approx. 5–10 MAD per km. Minimum fare ~7 MAD.",warning:"Always ask the driver to use the meter (“compteur”). If the driver refuses, agree on the price before starting or take another taxi.",pickup:"👉 Say: “Compteur, s’il vous plaît”",badge:"Local Transport"},{id:"jemaa-el-fna",name:"Jemaa el-Fna",image:"https://www.onelifetrips.com/wp-content/uploads/2025/08/Jemaa-El-Fna-square-First-Time-Visitors-guide.jpg",rating:5,distance:"0 km (City Center)",price:{mad:"Free",eur:"Free"},bestTime:"17:30 – 21:30 (evening vibe)",info:"Best for street food, performers, sunset to night atmosphere",access:"Walk from any riad in Medina<br>🚕 Taxi → just say “Jemaa el-Fna”",maps:"https://maps.google.com/?q=Jemaa+el-Fna",badge:"Iconic Square"},{id:"koutoubia",name:"Koutoubia Mosque",image:"koutoubia_hero.png",rating:5,distance:"500 m from Jemaa el-Fna",price:{mad:"Free",eur:"(outside visit)"},bestTime:"18:00 – sunset",info:"Landmark mosque with lovely gardens (no interior visit for non-Muslims)",access:"5–7 min walk from Jemaa el-Fna<br>🚕 Taxi → “Mosquée Koutoubia”",maps:"https://maps.google.com/?q=Koutoubia+Mosque+Marrakech",badge:"Historic"},{id:"jardin-secret",name:"Le Jardin Secret",image:"https://c02.purpledshub.com/uploads/sites/40/2019/12/38A0327-Edit_1-7d3ebfb.jpg",rating:5,distance:"600 m from Jemaa el-Fna",price:{mad:"100 MAD",eur:"≈ 9 €"},bestTime:"08:30 – 10:00 (cool + quieter)",info:"Peaceful gardens + rooftop views",access:"7–10 min walk from Jemaa el-Fna through Medina<br>🚕 Taxi → just say “Jardin Secret” and then when the taxi drop you, ask anyone there they will guide you the right spot",maps:"https://maps.google.com/?q=Le+Jardin+Secret+Marrakech",badge:"Hidden Gem"},{id:"bahia-palace",name:"Bahia Palace",image:"bahia_hero.png",rating:5,distance:"1.2 km from Jemaa el-Fna",price:{mad:"100 MAD",eur:"≈ 9 €"},bestTime:"08:00 – 10:00",info:"Stunning interiors and courtyards",access:"Walk (20–25 min)<br>🚕 Taxi → just say “Bahia Palace”",maps:"https://maps.google.com/?q=Bahia+Palace+Marrakech",badge:"Palace"},{id:"ben-youssef",name:"Ben Youssef Madrasa",image:"ben_youssef_hero.png",distance:"900 m from Jemaa el-Fna",price:{mad:"50 MAD",eur:"≈ 4.6 €"},bestTime:"09:00 – 10:30 or 16:30 – 18:00",info:"Beautiful carved courtyard & architecture",access:"Walk through Medina<br>🚕 Taxi → just say “Ben Youssef Madrasa”",maps:"https://maps.google.com/?q=Ben+Youssef+Madrasa",badge:"Education"},{id:"souks",name:"Souks of Marrakech",image:"souks_hero.png",rating:5,distance:"",price:{mad:"Free",eur:"Free"},bestTime:"09:30 – 11:30 | 16:30 – 18:30",access:"Walking from City Center",maps:"https://maps.google.com/?q=Marrakech+Souks",badge:"Shopping"}],marrakech_gardens:[{id:"majorelle",name:"Jardin Majorelle",image:"jardin_hero.png",rating:5,distance:"4 km from Jemaa el-Fna",price:{mad:"170 MAD",eur:"≈ 16 €"},bestTime:"08:30 – 09:45 (before crowds)",info:"Famous blue garden — book advance tickets",access:"🚕 Petit taxi (10–15 min from Medina)",maps:"https://maps.google.com/?q=Jardin+Majorelle",warning:"book online tickets mandatory before you go",bookingUrl:"https://www.jardinmajorelle.com/en/",badge:"Art & Flora"},{id:"camel-ride-dinner",name:"Camel ride & Dinner Show",image:"https://a0.muscache.com/im/pictures/Mt/MtTemplate-3482187/original/278d5fde-a967-4725-a0e6-93faaa021e2b.jpeg?im_w=480",rating:5,price:{mad:"≈ 280 MAD",eur:"From € 26"},info:"Agafay desert quad, camel ride, and traditional fire show dinner.",access:"they will pick up you at you place deos not matter if it is hotel or Riad or appartment , and also they will return you to close point to your place or even nutil the door if you think you will lost 😁",bookingUrl:"https://www.airbnb.com/experiences/3482187",badge:"Experience"},{id:"menara",name:"Menara Gardens",image:"menara_gardens_hero.png",distance:"3.5 km from Jemaa el-Fna",price:{mad:"Free",eur:"Free"},bestTime:"16:30 – sunset",info:"Pavilion & reflecting pool with Atlas Mountain backdrop",access:"🚕 Petit taxi → just say “Menara”",maps:"https://maps.google.com/?q=Menara+Gardens",badge:"Quiet"},{id:"menara-mall",name:"Menara Mall",image:"menara_mall_hero.png",distance:"4 km from Jemaa el-Fna",price:{mad:"Free (entry)",eur:"Free"},bestTime:"12:00 – 17:00",info:"Great lunch stop + shopping",access:"🚕 Petit taxi → “Menara Mall” (it is too close to Menara by walking 2 min)",maps:"https://maps.google.com/?q=Menara+Mall+Marrakech",badge:"Modern"}],marrakech_adventure:[{id:"quad-biking",name:"Palmeraie (Quad/ATV)",image:"quad_hero.png",rating:5,distance:"≈ 8 km from Jemaa el-Fna",price:{mad:"200–300 MAD",eur:"≈ 18–28 €"},bestTime:"08:30 – 11:00 or 16:30 – sunset",info:"Quad biking + tea stop in palm oasis",bookingOptions:[{name:"Airbnb Option 1",url:"https://www.airbnb.com/experiences/1078874?checkin=2026-01-31&checkout=2026-02-06&location=Marrakesh%2C%20Morocco&currentTab=experience_tab&federatedSearchId=6c533ba3-130b-4c0e-a8dc-8d1832755d0e&searchId=46b72e89-38c8-4b15-9ba3-432cd5f11707&sectionId=c9fc3559-fd1f-44e0-b384-5a91a8eec75e"},{name:"Airbnb Option 2",url:"https://www.airbnb.com/experiences/3428432?checkin=2026-01-31&checkout=2026-02-06&location=Marrakesh%2C%20Morocco&currentTab=experience_tab&federatedSearchId=cb91f0fd-3941-4bec-8e46-f8950c2746a1&searchId=140bae36-d437-44bc-a19f-6d5aadb9a03c&sectionId=63f681a1-76d2-4215-bfae-bd37503047ed"},{name:"Airbnb Option 3",url:"https://www.airbnb.com/experiences/3027465?checkin=2026-01-31&checkout=2026-02-06&location=Marrakesh%2C%20Morocco&currentTab=experience_tab&federatedSearchId=cb91f0fd-3941-4bec-8e46-f8950c2746a1&searchId=140bae36-d437-44bc-a19f-6d5aadb9a03c&sectionId=63f681a1-76d2-4215-bfae-bd37503047ed"}],access:"🚐 Tour pickup from hotel<br><br><strong>Note:</strong> they will pick up you at you place deos not matter if it is hotel or Riad or appartment , and also they will return you to close point to your place or even nutil the door if you think you will lost 😁",badge:"Action"},{id:"agafay",name:"Agafay Desert",image:"https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dcenter%2Cquality%3D60%2Cwidth%3D400%2Cheight%3D265%2Cdpr%3D2/tour_img/9357cbf8b766a86ba0f880ce662981e53aa888cbce78f3b4fc64cdb9f5a2efe0.jpg",rating:5,distance:"≈ 35 km from Jemaa el-Fna",price:{mad:"300–600 MAD",eur:"≈ 28–55 €"},bestTime:"16:30 – 19:30 (sunset & cooler)",info:"Sunset dinner & camel/quad options",bookingOptions:[{name:"Airbnb Luxury Experience",url:"https://www.airbnb.com/experiences/2981837?checkin=2026-01-31&checkout=2026-02-06&location=Marrakesh%2C%20Morocco&currentTab=experience_tab&federatedSearchId=6c533ba3-130b-4c0e-a8dc-8d1832755d0e&searchId=46b72e89-38c8-4b15-9ba3-432cd5f11707&sectionId=c9fc3559-fd1f-44e0-b384-5a91a8eec75e"}],access:"🚐 Tour pickup from hotel<br><br><strong>Note:</strong> they will pick up you at you place deos not matter if it is hotel or Riad or appartment , and also they will return you to close point to your place or even nutil the door if you think you will lost 😁",badge:"Luxury"},{id:"setti-fatma",name:"Setti Fatma",image:"https://cdn.getyourguide.com/img/tour/ec5b2edc18f45ef79405348b572b834e9e63d32217446645a14ab0192d28a308.jpg/68.jpg",rating:5,distance:"≈ 65 km from Jemaa el-Fna",price:{mad:"Free access",eur:"Guide: 30-50 MAD | Lunch: 60-100 MAD"},bestTime:"09:00 – 14:00",info:"Waterfall hikes & riverside cafés",access:"🚐 Shared day tour (pickup from hotel)<br>🚗 Private taxi → “Setti Fatma – Ourika Valley”<br><br><strong>Note:</strong> To reach Setti Fatma, you can take a small taxi or walk if you are staying in the center. Simply ask for “Taxi Setti Fatma”, and locals will be happy to guide you.<br><br>After visiting the area, having a meal, and resting, you can take a taxi back from the same place where you were dropped off. If you don’t remember the exact spot, just ask for “Taxi Marrakech”, and you will be directed easily.",maps:"https://maps.google.com/?q=Setti+Fatma+Ourika",badge:"Waterfalls"}],marrakech_wellness:[{id:"authentic-hammam",name:"Authentic Moroccan Hammam",image:"https://a0.muscache.com/im/pictures/Mt/MtTemplate-4066279/original/bca67ed2-3609-4a45-95c4-edb0cee3c817.jpeg?im_w=960",rating:5,price:{mad:"≈ 270–380 MAD",eur:"25–35 €"},info:"A complete traditional scrub and massage experience.",bookingUrl:"https://www.airbnb.com/experiences/4066279?checkin=2026-01-31&checkout=2026-02-06&location=Marrakesh%2C%20Morocco&currentTab=experience_tab&federatedSearchId=5c14a2d9-6c16-4d81-8099-82a6772c940e&searchId=ce3cbdc5-fabc-4cf5-b172-117fc52eec41&sectionId=78eba05b-83aa-4eac-ab2b-83e92c5312f1",badge:"Wellness"}],marrakech_dining:[{id:"safran-marrakech",name:"Safran Marrakech",image:"safran_marrakech.png",rating:5,price:{mad:"Menu available",eur:"Varies"},info:"A stunning semi-gastronomic dining experience in the heart of Marrakech.",access:"Rue Jbel Lakhdar, Marrakech 40000",pickup:"Take small taxi and say Safran, location Jbel Lakhdar",maps:"https://www.google.com/maps/dir//Safran+by+K%C3%B4ya,+Rue+Jbel+Lakhdar,+Marrakech+40000,+Morocco/@31.627881,-7.9971819,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0xdafef1242d5792d:0xeba15c878581297e!2m2!1d-7.9946!2d31.6275908!3e1?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D",bookingUrl:"https://safranmarrakech.com/Menu-SafranbyKoya",instagram:"https://www.instagram.com/safranmarrakechofficial/",email:"commercial.koya@gmail.com",phone:"+212 610 509902",badge:"Gastronomy"}],journey_transition:[{id:"marrakech-to-essaouira",name:"Marrakech Train Station ⇄ Essaouira",image:"journey_hero.png",distance:"175 - 185 km",duration:"~3 hours (Bus) / 2.5 hours (Taxi)",price:{mad:"110–130 MAD",eur:"≈ 10–12 €"},info:"The transformation from the Red City to the Blue Coast is magical.",contrast:{marrakech:{title:"Marrakech: The Red City",description:"Vibrant, Hectic, Ancient Walls, Desert Gold, Warm Energy."},essaouira:{title:"Essaouira: The Wind City",description:"Relaxed, Ocean Breeze, Blue & White, Seagulls, Coastal Calm."}},badge:"The Journey"}],journey_bus:[{id:"supratours",name:"Supratours Bus (Marrakech ⇄ Essaouira)",image:"supratours_station_left.png",imageLabel:"Supratour Station",secondImage:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/32/bb/2f.jpg",rating:5,duration:"~3 hours",price:{mad:"110–130 MAD",eur:"≈ 10–12 €"},info:"Recommended inter-city coach. Reliable and air-conditioned.",detail:"Inter-city coach service. Secure and comfortable.",maps:"https://maps.google.com/?q=Supratours+Bus+Station+Marrakech+ONCF+Train+Station",extraMaps:{name:"Station View",url:"https://www.google.com/maps/place/Marrakech+train+station/@31.630626,-8.0171814,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgID9k6vwUQ!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHVAwepkFGq-OKkwQHIaTFkticoBTi0BXm_JI3oVBXcTfnl9ny5m-8qq7x3LaxWLE9RaLF-EXh9xHSjvlIwDgRP6T-B-ubFWO3lbbiTSxZiGpoqojbiKkkos7n4H8QnCR6bEVeKU82Vr%3Dw114-h86-k-no!7i3638!8i2729!4m23!1m15!4m14!1m6!1m2!1s0xdad9a34a74568f1:0xa8ad91f08229dfff!2sSupratours,+Essaouira,+Morocco!2m2!1d-9.7667969!2d31.5106037!1m6!1m2!1s0xdafee93ae6f6489:0x3b48dfb186a12d75!2sMarrakech+train+station,+CENTRE%D8%8C+Bd+Mohamed+VI,+Marrakesh+40100,+Morocco!2m2!1d-8.0171274!2d31.6305546!3m6!1s0xdafee93ae6f6489:0x3b48dfb186a12d75!8m2!3d31.6305326!4d-8.017204!10e5!16s%2Fg%2F11ckr5ggqr?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D#"},bookingUrl:"https://www.supratours.ma/",badge:"Inter-City Bus"}],essaouira:[{id:"essaouira-medina",name:"Essaouira Medina",image:"essaouira_hero.png",rating:5,distance:"",price:{mad:"Free",eur:"Free"},bestTime:"09:00 – 12:00",maps:"https://maps.google.com/?q=Essaouira+Medina",badge:"Coastal"},{id:"skala",name:"Skala de la Ville",image:"skala_hero.png",rating:5,distance:"",price:{mad:"Free",eur:"Free"},bestTime:"17:00 – sunset",maps:"https://maps.google.com/?q=Skala+de+la+Ville+Essaouira",badge:"View"},{id:"essaouira-beach",name:"Essaouira Beach",image:"essaouira_beach_hero.png",rating:5,distance:"",price:{mad:"Free",eur:"Free"},bestTime:"09:00–12:00 | 16:30–sunset",maps:"https://maps.google.com/?q=Essaouira+Beach",badge:"Relax"}]};function m(a,t="terracotta"){return`
    <div class="glass-card location-card" data-id="${a.id}" data-aos="fade-up">
      <div class="card-image-gallery">
        ${a.image?`
            <div class="card-image">
                <img src="${a.image}" alt="${a.name}">
                ${a.imageLabel?`<div class="image-label">${a.imageLabel}</div>`:""}
            </div>`:""}
        ${a.secondImage?`<div class="card-image secondary-image"><img src="${a.secondImage}" alt="${a.name} View"></div>`:""}
      </div>
      <div class="card-content">
        <div class="card-header">
          <span class="badge badge-${t}">${a.badge}</span>
          <h3 class="location-name">${a.name}</h3>
        </div>
        
        <div class="card-details">
          ${a.distance?`<div class="detail-row"><span class="label">📍 Distance:</span> <span>${a.distance}</span></div>`:""}
          ${a.duration?`<div class="detail-row"><span class="label">⏱ Duration:</span> <span>${a.duration}</span></div>`:""}
          <div class="detail-row"><span class="label">🎟 Price:</span> <span class="price-highlight">${a.price.mad} <small>(${a.price.eur})</small></span></div>
          ${a.detail?`<div class="detail-row" style="flex-direction: column; align-items: flex-start; gap: 4px; margin-top: 4px; font-style: italic; color: var(--color-terracotta)"><span class="label">ℹ Rate:</span> <span>${a.detail}</span></div>`:""}
          ${a.warning?`<div class="detail-row warning-text" style="flex-direction: column; align-items: flex-start; gap: 4px; margin-top: 8px; font-weight: 700; color: #d00;"><span class="label" style="color: #d00;">⚠️ Notice:</span> <span>${a.warning}</span></div>`:""}
          ${a.access?`<div class="detail-row" style="flex-direction: column; align-items: flex-start; gap: 4px; margin-top: 4px; color: var(--color-blue-moroccan); font-weight: 600;"><span class="label" style="color: var(--color-terracotta); font-weight: 800; font-size: 0.85rem; text-transform: uppercase;">Access:</span> <span>${a.access}</span></div>`:""}
          ${a.pickup?`<div class="detail-row" style="flex-direction: column; align-items: flex-start; gap: 4px; margin-top: 8px; background: rgba(226, 114, 91, 0.05); padding: 8px; border-radius: 8px; border-left: 3px solid var(--color-terracotta);"><span class="label" style="color: var(--color-terracotta); font-weight: 700;">🚐 Pickup:</span> <span style="font-size: 0.85rem; font-weight: 500;">${a.pickup}</span></div>`:""}
          <div class="detail-row" style="flex-direction: column; align-items: flex-start; gap: 4px;"><span class="label">🕒 Info:</span> <span>${a.bestTime||""} ${a.info||""}</span></div>
        </div>

        ${a.rating?`
        <div class="rating-container">
            <span class="rating-label">Recommended:</span>
            <div class="star-rating">
                ${[1,2,3,4,5].map(i=>`
                    <span class="star ${i<=a.rating?"selected":""}">★</span>
                `).join("")}
            </div>
        </div>
        `:""}
        
        <div class="card-actions" style="flex-wrap: wrap;">
          ${a.maps?`
          <a href="${a.maps}" target="_blank" class="map-link">
            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            Location
          </a>
          `:""}
          ${a.extraMaps?`
          <a href="${a.extraMaps.url}" target="_blank" class="map-link">
            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            ${a.extraMaps.name}
          </a>
          `:""}
          ${a.bookingUrl?`
          <a href="${a.bookingUrl}" target="_blank" class="booking-link">
            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2l-1.5 1.5L6 2l-1.5 1.5L3 2v20z"/></svg>
            Book / Menu
          </a>
          `:""}
          ${a.instagram?`
          <a href="${a.instagram}" target="_blank" class="map-link" style="background: #E1306C; color: white; border: none;">
            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Instagram
          </a>
          `:""}
          ${a.phone?`
          <a href="tel:${a.phone}" class="map-link">
            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call
          </a>
          `:""}
          ${a.email?`
          <a href="mailto:${a.email}" class="map-link">
            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            Email
          </a>
          `:""}
          ${a.bookingOptions?`
          <div class="booking-options-list" style="width: 100%; display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
            <p style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); margin: 0;">Choose an Experience:</p>
            ${a.bookingOptions.map((i,n)=>`
              <a href="${i.url}" target="_blank" class="booking-link" style="width: 100%; font-size: 0.8rem; padding: 10px;">
                🎟️ ${i.name}
              </a>
            `).join("")}
          </div>
          `:""}
        </div>
      </div>
    </div>
  `}function p(a){return`
    <div class="glass-card journey-card-content" data-aos="fade-up">
        <div class="journey-card-image">
            <img src="${a.image}" alt="Moroccan Landscape">
            <div class="journey-stats">
                <div class="j-stat">
                    <span class="j-label">Distance</span>
                    <span class="j-value">${a.distance}</span>
                </div>
                <div class="j-stat">
                    <span class="j-label">Travel Time</span>
                    <span class="j-value">${a.duration}</span>
                </div>
            </div>
        </div>
        <div class="journey-contrast-container">
            <div class="contrast-item marrakech">
                <h4>${a.contrast.marrakech.title}</h4>
                <p>${a.contrast.marrakech.description}</p>
            </div>
            <div class="contrast-arrow">
                <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/></svg>
            </div>
            <div class="contrast-item essaouira">
                <h4>${a.contrast.essaouira.title}</h4>
                <p>${a.contrast.essaouira.description}</p>
            </div>
        </div>
    </div>
    `}document.addEventListener("DOMContentLoaded",()=>{const a={"marrakech-medina-grid":s.marrakech_medina,"marrakech-gardens-grid":s.marrakech_gardens,"marrakech-adventure-grid":s.marrakech_adventure,"marrakech-wellness-grid":s.marrakech_wellness,"marrakech-dining-grid":s.marrakech_dining,"journey-data-card":s.journey_transition,"journey-bus-grid":s.journey_bus,"essaouira-grid":s.essaouira};Object.entries(a).forEach(([e,o])=>{const c=document.getElementById(e);if(c)try{const l=e.includes("essaouira")?"blue":e.includes("journey")?"mixed":"terracotta";e==="journey-data-card"?c.innerHTML=o.map(d=>p(d)).join(""):c.innerHTML=o.map(d=>m(d,l)).join("")}catch(l){console.error(`Error loading section ${e}:`,l)}});const t=document.getElementById("lightbox"),i=document.getElementById("lightbox-img"),n=document.querySelector(".lightbox-close");if(t&&i){document.addEventListener("click",o=>{const c=o.target.closest(".card-image img");c&&(t.style.display="flex",i.src=c.src,document.body.style.overflow="hidden")});const e=()=>{t.style.display="none",document.body.style.overflow="auto"};n&&(n.onclick=e),t.onclick=o=>{o.target!==i&&e()}}const r=document.getElementById("refresh-btn");r&&(r.onclick=()=>{const e=new URL(window.location.href);e.searchParams.set("t",new Date().getTime()),window.location.href=e.toString()})});
