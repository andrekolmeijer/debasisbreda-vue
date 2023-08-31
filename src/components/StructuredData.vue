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
