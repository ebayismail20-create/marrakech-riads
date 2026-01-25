const locations = {
    marrakech_medina: [
        {
            id: 'petit-taxi',
            name: 'Small Taxi (Petit Taxi)',
            image: 'data:image/jpeg;base64,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',
            rating: 5,
            price: { mad: '10–30 MAD', eur: '≈ 1–3 €' },
            info: 'The best way to get around Marrakech. Always ask for the meter (compteur).',
            detail: 'Approx. 5–10 MAD per km. Minimum fare ~7 MAD.',
            badge: 'Local Transport'
        },
        {
            id: 'jemaa-el-fna',
            name: 'Center of Marrakech (City Center) – Jemaa el-Fna',
            image: 'marrakech_hero.png',
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
            image: 'koutoubia_hero.png',
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
            image: 'jardin_secret_hero.png',
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
            image: 'bahia_hero.png',
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
            image: 'ben_youssef_hero.png',
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
            image: 'souks_hero.png',
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
            image: 'jardin_hero.png',
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
            image: 'menara_gardens_hero.png',
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
            image: 'menara_mall_hero.png',
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
            image: 'quad_hero.png',
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
            image: 'agafay_hero.png',
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
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTEhUTExMWFhUWGCAbGRgYGBobHxsgGiAdIh8fHh8gHygiGh0mGyAgIjUhJSkrLi4uHh8zODMsNygtLisBCgoKDg0OGhAQGyslICUtMC0vLi0tNy8tLzI3LS0tLy0vLSstNS8vLy0rLy0tNTUtLy8tLS0tLS0tLS0tLy0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQADBgIBB//EAEIQAAIBAwIDBQUGAwUFBwUAAAECEQADIRIxBEFRBSJhcYEGEzKRoUJSscHR8BQjYnKCsuHxFTNTosIHJDRzkpPSFkRUY+L/xAAZaAcAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAqEQACAgEEAQMDBAMAAAAAAAAAAQIRAwQSITFBEyJRFGGBcaGx0SNSkf/aAAwDAQACEQMRAD8A3fbfEIjYOFG/NlfulR1gwZ3BmqLjuMd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpBGMDHh0jIrS9oWLLti4gEEEGSIbBHLAwwHIjyrM9oKtprrKVYKyqsf1EMcA7Db9zWtyo5TiwU8UyradmCldgwaSpM6jyKweW8n10/sp2tOGdQCZE/ESwAWQMQN9+XSsn2h2kHMFVDkaZBABGfijc7+Ak4ncLgOMs6sG4sc9wDAAkDMauXQ/Po2mjmntZ68eMuCVKAtEiGEMOomPUcvlQXZXtArA+87pHX0+s1jOD42+UViXUL8DGd4iPy8qkvXA/eIIYmcAd0YucxpGB/eP8AiH0pVQ22tgQBjllPr40qm1F9Rmrt8I6hLDC3ca+9244QamBgBULDBGTjIk/MnjraW1/h7lwi4MacsMDuqWwFJBXB2JHjVzw+i/cFtCVJR1W5qOpWFvQGAxEDksAyZ5RHxnsdxLrF3jAyhtUtb6Yljqk4kZPOtOSkjmsbg6A+F7SH8KlwktDKB4ZAA+X0NZD2rC/wAXdumDpAUqf7J58ox9elXXbfZa27VtOHZrrK3fOQGAYMIBOI2kDlXLPB2nvAXrBa2UGo6jJfSkHeTBLDx33rhH2yuzpKEmujM8Kl9f+8WrbMoDQxQlfhIJMbgVW9kPev3tCsJKsSCBDAKWIM9Yj8K9Z4jszh/4K+OHLKFtXDon4e6TnJ5+NYH2O9mve8VbBZlDcN7+VMEamKADFemLtM4yglJEPBXDJt20V2gDuqzHeSR/T4xyFH8KLyOAElgrXLg20oo7zMWHd0gCJ3NaTi+yuH4Ys/DBtVsabjhAyrI06ZZh38xCyZMVQ+zvFu68crH+besagCNgsnTvkHUJ61hR7bK6vjsGs8RDOARvq1MxyA+Y56okDrJrYL7m+lm5Y92xAJLaAe+sSWwDIJJ615bxnGkhRqUmSCskKeeROCOtXPsh2a1y4jm0VstqIJbutpENAO/+vStbV2RvkP7RS5rU3tKgqQpUEZ1SQR1gz/pUDachGPmZg7AR0rQexns41zifeWgALYYf3mlQehGmZzjFegJ7KyuniLpKkglUgTHIkkz8q5yXJ0VVyef+xnFpZLKNL+8W3JDQQWbUvPGkQYgGTvQPCdnkODaF5wkkLGuSx/pT1720eder8J2fwFiAnDqYM5GrOO9nE4GRVq3aqADRbONsQB5UebHfY9OVdHnXA+zvFtdtXBZZcd4FAkEMrAlueF5523rfcNZXh7YYpcuPGqFtkwegAwDyyfWu8R2wxGVQLz1Heh7ntLH6R+/qKx9RiQ9Gb6Rn/aDt++xkcNfQxEmyzHfqBA51VWu3g5gi7b377pkeCzhT45OK1r+0t0/CI9KB4nta6+GfHSp9bBdKy/SSffBS8Kmpi9tNTEybjzv11HbyX5U3ju07fC2zcY6rhxPMn7iDltk/PGKK4niG3J9ZrK+1HZa8QACxVkJKlTtqgmQcEVxnqXPiXEfNHWOnWPlcyKHtFvesnF8W7BQ0raWNIWfhk82G56UHwPZi3W97qAtKdQLR3ojBEzvvy86sOB9jbRA99duE9AwH61f8H2DwltNHfK7x7xs7fdjpXoerwxVI5x0827kYn2y4m5fva2KbQAs+ZJov/s5bTxDT9xvxStonZnArtYQ+Y1f4iaVjtjg7VwW7a20uExCqoPlIFccmsjkg4xT6NQ02ySdoo/avtErxCFbT3JQfD1BII+UVz/aPEXbXuh2e8Y73uwrCMjvAT8613+18f503/a3hXGGv2RUaNz0cZScrM52d2Vxi3Fe3w5QwymXGAdMfEQdx0rZdidlNZsW7bEFlHejaSdRjwkmq5+2WAJVdR5AbnwHjVbwHtBxj6ve2zaGNMkSd+VZnqZZY34RvHgjifHbNb2n2XavWSl/TpB1qzbIwmGM8skHwNefcZ2VY9+gdbKOJfAP8yQ2VKKQwEEmY5emiPFPcBRwWVhDCNwcHbbFVHD+yj+8urdd1FtytkocG2e/9qZ+KDMnBFenR5ty2nPPj8mF9nOEN13CQIUsJJ2B2mN4PrV12Z2Wr8aL13S1pGQsjDNxVVQQANzj4ee071puG9ibKaoZ+9GqSMxnl+VTp7LBSxF1yWJnVB3Oojbbw8TXstXZ5qdJFL24bPvX90ttVuaGQIp0NpWQSWwsAkbAzPQUF2d2RqDC4AyJaDO6PAQFgD0k4IrQt7ItCqLzaVAgQsGJ+LEkwY9BinWPZDSHi866xpYIYESDG2dqzR0lNtUvgpn9mfeHXbDhD8OogtG2YETSqzu+wQsLjnc+pPHrDHowqAnL8DIdIhkfKBAJ28x+zE27nDdaeinU8WkNbuoVnAOkeb5E3JE7m0xvGGNeroCuKaODVYeIBpURAGkNOqPM2oyed4wFnswDqrtDEtqDAESSsKFXcCBIJ2t1xr1nF1TaO5IMRY+/kp22bl5iJ3+OnwvOKZvQwdZWx0azLBWEAx9myiI2necCcFqKzlFDPq+dzAAA53Usb8jvOFVbOGoTI1M1hzuTytJPIY1/CeHjL04jU5+czF+nUgdu+PPa2jSzP+46D8q3o/CHG18v8G6n8d5TKrUFgLXsb/WceroEjV1giT93cfgcV0KDGJJHTt9eeCgoXZgb3ETv1xlr7yA0BoUpuN51dp/ZxaSpBIgAdOu/PneMUMQLpPQbDfnA5YlGkbaoIF4A3jv3JH1x5CQNV5nqqqoEgRe8WPX2X88YahnYzC1S2mTIPT7+Q/Zw7+IczC6LSzbgbzBPpv95xnlyJemzAMWQTaAoAkmZuTHTqOuKcLTD6gDtF8z01iIaWjctrwj4hptTqNVZVVCAp+0QTP2Qd77DrG04acN4lRr6vDZGKgs4KlG0xusqYG+17i42PycHGt+Gszl8rprs3i1GEeGpEAMbgyNwt+V4G18fRVOjqeQlkl24Dn8hfJZyNVuWyIKsV0rIQQaYKqRYxcEtqgRqO19zhVmR4ZdDAWqB8oAIAvIVeR8xn7NjcbH8K40tai70Z1Ux5qRUs5FyPMG8wmbgbDaRcT4ko6QWW4ddMlU/qH2lglRStz2AJkEYy30yHGm8X4b90I2uI6wS/4fQuSGzFREIJkVSoMmQASbGJ9QPYW8TzZSnmKIqvUDeVGdixgTq3NpP48tsDeEGWmpMeVyCEUeXmSWBMgoROw0iwnAXEqurcKJAuFiNhA7W5Wv8AWihhG1qwYRaR7/ooHVnMbIPH2SU5eNIiQPywzyiTT0iS+/Ww6fTFVAfzkUes7xAJ52wdwRQlRm3UTFtgeX127RGNDp+1Rnco6RJaiuH1GuiiDaLXnt1/xhtR0AgMDIEXtsb233/PCzNV/wCZaRN1mAR7x164MRtTaWkkGDaJ9zucYIMIyJTbLoTJECLkghbcr9v09+6NYAEKQSBsPwtz9OuAsvQKAsCSNR8u59JG0/ljvJ0kJIupM8977emGNcdCgITBM2JK8ybGdu2LKlMMrAm8Wtz/AH+GAkpqjiCCAJtHpzB/tjv+I1iIKmbG+3XCX21TG30Xoyq6YECppAI5EKLHvhTnuHHWV0MQee/cT1jb3+rLMglQEExzJiD++WCKBYjSbCbNMxMzb6W9eWONM2XHSLpbk4pA+G2llEEWM9j25dcCrxUCsCTp5aSZkc/W+HtfhigzzuCd/b2xluIZIrIEX2tBmeXU8+uEhw0Rg5lp8pVkhlMgX3mx/L9cE5/LSDYw1+4/KJwr4TmgV0MYMAHa8belsPcsJGkmCBAHpvierTziE2nUNNyz+WrBKjUiSUfcbEMPyPScOOGVgXZCLsAwjYqNyOUjmMUZ7JgVFqbQfY7RPX6YKzdl1pAYX09B26jErZylh1VpgkOCtzFAMrAFZ5KR93a2EPGMvoTWrmmVF1IkEfiD2nlaMHVuWKypWREfI7z5zWw4K9buoHtkFG2MeMfOsPCdlqWZz2fuaxftvbuqLqFSdDjcQYMDkeVO7J9nfcXrV1LzoUsiyRo7jKGJEhjM5HPl41qvdACRWI9oPa4BgtlhEbgAlvn+FdIxpUcJzUnZL2rbtPYThrvEGwVJ94kGbve1FljLFtwRO8da7wnszq/7wpZLhbui62fde792FfmGb4z0wOVSeznba8XKkRdUSYEAiQJjkZ5Va3rBiJqv4MpLs8+v+yt8t7hLvDkR33K8uQMEyf/AI0X2N2ddtybt0E8OCiW31Lb7wgOjA6SpUbAYJyJqb2h9p1SEskrpw0YJYbyfPlT+weOTjdSMpDKJJBjUJjvRgnO9XpE7YZ7OdoMZtoQjF5IRj3toZHEEkCYUYmZxFHdq9vcQt1hYvOyA6VNw2ZkYYksuQDOxO0zmrHtX2V4W7pe07cO6gAEAlcAASVJzAj7OKyt72Dv/Y4jh3XA7x5Dwaf1rPq42uWvyXZO+EaTsfjuOvKXa53J0jQbM43OrSRHKAOtHIryuu9cy4TvPbGonPci2pOPrMbTTew+EbheHFk8UjbszKiySxkwTqx0kVy89sZLu7CO9Cq2CSO8iqcSa809Tp4+L/B2jhzPyWXHcDZtW9Ti411x/LtteuT4s0PhNpIHhkkVmrvHC33Rkj6fMk/Mn1qLtHtDVOkEE7sSSx8ycz5k1SX7ukEk+OeXUzXgzZlldRVI9WPG4Ll2W7dpzufrUbdo9K857U9prjkiydCffPxN5dB9fKqduIub+/uT/ab8Zr0w0U2rbo4y1UU6Ss9aHaTdRQ13ipJwBt+n5Vhew/aJw4t3jIOAx3HSeoPWtSz59P1rz5cUsbpnWGRTVoNN0VYdmPhiLQunoeQ8PE9eUVQG7Tf4kjYx61nHJRkm1ZZ+5UmW3EuquwU4BMUAeGshta2bYeZ1QZnmckx6UJ/EjrTG4seNZVpuvJW15LVL9P8Af1TrxPgaeLzHZay4F3FobtQcb2mlldbkAfiegHM1ArEfFE9P1rE9q8cb90tuokIPDr5n9K7abT+pL7HPLm2L7mp4P/tCVH+FwvUgfUAzFb/sztMcRLjYgHfEbCD0iK8KLT3WG+36g16p/wBlWr3DzsDpBPmSa+j9PHHJOB5fWck1I2aoTUgtVKRzhfQ10XRHL5+f5fnXoOZFbEmNJ9Y/WnC34H6VNbYMARBB26fPzxUpSN9uv51AQi150qlJ8PrSoCZryrvA/H6VnPbvgvfcOdLQ6HUuCdWCCuAd/wAhVkOCu/feOR1H8opt3gDB7zf3i5/6v0oDxFOC4lnC+4uzO5ttA8SY28q9p9mLC2bFuzLHSMnTEk944ORk7dIrjdmAmBk/3v1py8Ai5IBO2fy8cb05CRaPxC+P7868a9qfZq775jw6lrZMjUVGnnpEnIHI/wCp9UHBWznSmMHuLv492m3uz7YONK4kiB+QpyKRj/8As/4D+FV2uD+Y8CNSQoGdI70kk7nHL12TdoWuZHqR+XOuLwMZA8cfhPXzpzWTt4bePQnOaCzz32q9lvf3jcsOqBssDJBPUADE89/Srj2O7IHCIwMM7GWYB8gTAAjAH51qm4bYkiOcfTf/ADpi8OsKRG/h6RP50HBnuG9uxYZkvWmJUkFrZAJggZVwANuvM7UPxPtvwpYybkGDJRvrvEbdMUZ277KpfZrgLrcbLEGdXiQxyfHUKxnaPsbeWdLo8cp0kec90H1rllxwyR2S4RqE5QluiaA+2fB7an/9t/0p9r2l4O8dCO+s7B1Kz1gnc+FYF/ZviJkC2fK7a/8AlUd72e4nGlFUgyD763j5NXjei01cS5/VHoWozeV+x6Beasb7YdoYFoH4st/ZHL1P4VoHvsFAdgXAAaNtUQ0eEzWE9prpPENM4VQJG43keEk1y0WL/Jz4Naifs48gAz4RzPL/AD8KjY9CT5iPlmm2zkjmdv0p1y1pGee1faPnnC0jyrd8BxBe1bY7lQT5wJrCcPZZjCiTG1aPg7t5URDZXuiJe4AOZmAZivLqcbmlR2wzUW7L1kHO4o9Z/ComayN7k+QP51VXOJcbvwqeHxEfSD6Gob/ajKP/ABZn7tpAv4kY9K8q0k32zs9RHwXqMh+FLjen6V03gBi1H9ox+NYnie1HY5u3W82/SoBxQkEyROxYma2tF8sz9T9jentHT/wl8yPyNRHtxdvfW/JMn8Pzqm4Ltvhlj/u9qRzKAmeuZ+VX/B+2VvCggCPuAAdcQR9K0tFDyT6mRU9o9u2wrqGbWVIEqQZIwcjHWs1Z3UDnIH0/Ktp241njEOlQt3EOVyYkQzAZEfl0isZavNbZlM81aMjodsH8jB3FenFjjjVI4zm5Pkfetw22kTMHdR0Ne6+zHZ9u1w1hCsH3YZsHLEAscc5NeV+yPYf8RcUsAtoMCzNBZzjSkE6tJO8D54j1+y4Hi07Z+qk4knFdGZRb8Oyr8OobbEY5df1oo3ARlifOTsfrQFpxHPbaIM+vPPPwxUg0eAgwAQpg8x1nPT0rJqgrWOn0j9jx/wBK4HAHP8qHuRyaBMSMfTadqcIHd1+MGcbZ69d8bYoCct+zH6UqFJP7DH8GA+gpUKOu3FGJjnMiFjfdpHzpC2omIaehBJ9APyrtoLpIUALmRgxmTkbHnkzSVicd8zgbAn598AeJoQido+FDC7mANPXLD8PpUNzijIGiASACSBPODn8anuJqk47u5npkid/86hNyIy6qTAUAgsTmBjA86oHsd10vqHwgmZnp4eXjUvuzIjQAMEljv++Z6VHMwumWIMrEgCd2MDr0/WlZAdiBJ0YJ3KneOsR4+lBR0WdIkEKQeWxE8jz65O5pjyQSSNiB3SRzGZ70eWKVVCAn+0/wCYbarrYZlTpA8wQM+U0683EW1lCmk5MySPIyB9DSpVAdt8OzHWzljznAPgdEfUfOmXuN4ZcPpVgckJJBjwEH8/pSpVAd4TtUMp0W9S8isLqHiDtnH5U1heYkBvdgCdwx8srAHzpUqWBL2PbPeaWnmTJPjnbyqZOybC/CpHkSPosVylVoywocInJE/9IpUqVWgf/9k=`,
            rating: 5,
            distance: '',
            price: { mad: 'Free', eur: 'Free' },
            bestTime: '09:00 – 14:00',
            info: 'Visiting the waterfalls is free. For food, you can take what you want, but ALWAYS ask for a menu that has prices listed.',
            warning: 'Ask for a menu with prices before ordering food!',
            access: 'To reach Setti Fatma, you can take a small taxi or walk if you are staying in the center. Simply ask for “Taxi Setti Fatma”, and locals will be happy to guide you.<br><br>After visiting the area, having a meal, and resting, you can take a taxi back from the same place where you were dropped off. If you don’t remember the exact spot, just ask for “Taxi Marrakech”, and you will be directed easily.',
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
    marrakech_dining: [
        {
            id: 'safran-marrakech',
            name: 'Safran Marrakech',
            image: 'data:image/jpeg;base64,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',
            rating: 5,
            price: { mad: 'Menu available', eur: 'Varies' },
            info: 'A stunning semi-gastronomic dining experience in the heart of Marrakech.',
            access: 'Rue Jbel Lakhdar, Marrakech 40000',
            maps: 'https://maps.google.com/?q=Safran+Marrakech+Rue+Jbel+Lakhdar',
            bookingUrl: 'https://safranmarrakech.com/Menu-SafranbyKoya',
            instagram: 'https://www.instagram.com/safranmarrakechofficial/',
            email: 'commercial.koya@gmail.com',
            phone: '+212 610 509902',
            badge: 'Gastronomy'
        }
    ],
    journey_transition: [
        {
            id: 'marrakech-to-essaouira',
            name: 'Marrakech Train Station ⇄ Essaouira',
            image: 'journey_hero.png', // Premium generated landscape
            distance: '175 - 185 km',
            duration: '~3 hours (Bus) / 2.5 hours (Taxi)',
            price: { mad: '110–130 MAD', eur: '≈ 10–12 €' },
            info: 'The transformation from the Red City to the Blue Coast is magical.',
            contrast: {
                marrakech: {
                    title: 'Marrakech: The Red City',
                    description: 'Vibrant, Hectic, Ancient Walls, Desert Gold, Warm Energy.'
                },
                essaouira: {
                    title: 'Essaouira: The Wind City',
                    description: 'Relaxed, Ocean Breeze, Blue & White, Seagulls, Coastal Calm.'
                }
            },
            badge: 'The Journey'
        }
    ],
    journey_bus: [
        {
            id: 'supratours',
            name: 'Supratours Bus (Marrakech ⇄ Essaouira)',
            image: 'supratours_hero.png',
            secondImage: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/32/bb/2f.jpg',
            rating: 5,
            duration: '~3 hours',
            price: { mad: '110–130 MAD', eur: '≈ 10–12 €' },
            info: 'Recommended inter-city coach. Reliable and air-conditioned.',
            detail: 'Inter-city coach service. Secure and comfortable.',
            maps: 'https://maps.google.com/?q=Supratours+Bus+Station+Marrakech+ONCF+Train+Station',
            extraMaps: {
                name: 'Station View',
                url: 'https://www.google.com/maps/place/Marrakech+train+station/@31.630626,-8.0171814,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgID9k6vwUQ!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHVAwepkFGq-OKkwQHIaTFkticoBTi0BXm_JI3oVBXcTfnl9ny5m-8qq7x3LaxWLE9RaLF-EXh9xHSjvlIwDgRP6T-B-ubFWO3lbbiTSxZiGpoqojbiKkkos7n4H8QnCR6bEVeKU82Vr%3Dw114-h86-k-no!7i3638!8i2729!4m23!1m15!4m14!1m6!1m2!1s0xdad9a34a74568f1:0xa8ad91f08229dfff!2sSupratours,+Essaouira,+Morocco!2m2!1d-9.7667969!2d31.5106037!1m6!1m2!1s0xdafee93ae6f6489:0x3b48dfb186a12d75!2sMarrakech+train+station,+CENTRE%D8%8C+Bd+Mohamed+VI,+Marrakesh+40100,+Morocco!2m2!1d-8.0171274!2d31.6305546!3m6!1s0xdafee93ae6f6489:0x3b48dfb186a12d75!8m2!3d31.6305326!4d-8.017204!10e5!16s%2Fg%2F11ckr5ggqr?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D#'
            },
            bookingUrl: 'https://www.supratours.ma/',
            badge: 'Inter-City Bus'
        }
    ],
    essaouira: [
        {
            id: 'essaouira-medina',
            name: 'Essaouira Medina',
            image: 'essaouira_hero.png',
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
            image: 'skala_hero.png',
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
            image: 'essaouira_beach_hero.png',
            rating: 5,
            distance: '',
            price: { mad: 'Free', eur: 'Free' },
            bestTime: '09:00–12:00 | 16:30–sunset',
            maps: 'https://maps.google.com/?q=Essaouira+Beach',
            badge: 'Relax'
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
            Book / Menu
          </a>
          ` : ''}
          ${item.instagram ? `
          <a href="${item.instagram}" target="_blank" class="map-link" style="background: #E1306C; color: white; border: none;">
            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Instagram
          </a>
          ` : ''}
          ${item.phone ? `
          <a href="tel:${item.phone}" class="map-link">
            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call
          </a>
          ` : ''}
          ${item.email ? `
          <a href="mailto:${item.email}" class="map-link">
            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            Email
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

function createJourneyCard(item) {
    return `
    <div class="glass-card journey-card-content" data-aos="fade-up">
        <div class="journey-card-image">
            <img src="${item.image}" alt="Moroccan Landscape">
            <div class="journey-stats">
                <div class="j-stat">
                    <span class="j-label">Distance</span>
                    <span class="j-value">${item.distance}</span>
                </div>
                <div class="j-stat">
                    <span class="j-label">Travel Time</span>
                    <span class="j-value">${item.duration}</span>
                </div>
            </div>
        </div>
        <div class="journey-contrast-container">
            <div class="contrast-item marrakech">
                <h4>${item.contrast.marrakech.title}</h4>
                <p>${item.contrast.marrakech.description}</p>
            </div>
            <div class="contrast-arrow">
                <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/></svg>
            </div>
            <div class="contrast-item essaouira">
                <h4>${item.contrast.essaouira.title}</h4>
                <p>${item.contrast.essaouira.description}</p>
            </div>
        </div>
        <div class="journey-info-box">
            <p><strong>Pro Tip:</strong> Look out for <strong>Argan Forests</strong> along the way—you might see goats climbing the trees!</p>
            <a href="https://maps.google.com/?q=Marrakech+train+station+Supratours" target="_blank" class="map-link">
                <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Depart from Marrakech Train Station
            </a>
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
        'marrakech-dining-grid': locations.marrakech_dining,
        'journey-data-card': locations.journey_transition,
        'journey-bus-grid': locations.journey_bus,
        'essaouira-grid': locations.essaouira
    };

    Object.entries(containers).forEach(([id, items]) => {
        const container = document.getElementById(id);
        if (!container) return;

        const theme = id.includes('essaouira') ? 'blue' : (id.includes('journey') ? 'mixed' : 'terracotta');

        if (id === 'journey-data-card') {
            container.innerHTML = items.map(item => createJourneyCard(item)).join('');
        } else {
            container.innerHTML = items.map(item => createLocationCard(item, theme)).join('');
        }
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
