<template>
  <!-- Structured Data -->
  <component :is="'script'" type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CafeOrCoffeeShop",
          "name": "De Basis",
          "logo": "https://debasisbreda.nl/Logo_DeBasis_bDeBasis_Cyan_Dark.svg",
          "image": [
            "https://inspirebreda.nl/img/carousel-1.jpg",
            "https://inspirebreda.nl/img/carousel-2.jpg",
            "https://inspirebreda.nl/img/carousel-3.jpg",
            "https://inspirebreda.nl/img/carousel-4.jpg",
            "https://inspirebreda.nl/img/carousel-5.jpg",
            "https://inspirebreda.nl/img/carousel-6.jpg",
            "https://inspirebreda.nl/img/carousel-7.jpg",
            "https://inspirebreda.nl/img/carousel-8.jpg"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Veemarktstraat 4",
            "addressLocality": "Breda",
            "postalCode": "4811 ZE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 52.15517,
            "longitude": 5.38721
          },
          "url": "https://debasisbreda.nl/",
          "sameAs": [
            "https://www.instagram.com/debasisbreda/",
            "https://www.facebook.com/debasisbreda/"
          ],
          "telephone": "+31765153272",
          "email": "breda@inspirecoffee.com",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
              "opens": "08:30",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Friday", "Saturday"],
              "opens": "08:30",
              "closes": "02:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "10:00",
              "closes": "00:00"
            }
          ],
          "hasMenu": [
            "https://debasisbreda.nl/menu/kaart-inspire-4-1.pdf",
            "https://debasisbreda.nl/menu/kaart-inspire-4-2.pdf",
            "https://debasisbreda.nl/menu/kaart-inspire-4-9.pdf",
            "https://debasisbreda.nl/menu/kaart-inspire-4-3.pdf",
            "https://debasisbreda.nl/menu/kaart-inspire-4-4.pdf",
            "https://debasisbreda.nl/menu/kaart-inspire-4-5.pdf",
            "https://debasisbreda.nl/menu/kaart-inspire-4-6.pdf",
            "https://debasisbreda.nl/menu/kaart-inspire-4-7.pdf",
            "https://debasisbreda.nl/menu/kaart-inspire-4-8.pdf"
          ]
        }
      ]
    }
  </component>
</template>
