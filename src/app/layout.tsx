import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Battery Seattle | 24/7 Battery Delivery & Installation",
  description:
    "Dead battery? We come to you — 24/7, 365 days a year. Expert car battery delivery, installation, and testing across Seattle, Bellevue, Redmond & surrounding areas. Call (206) 604-8806.",
  keywords:
    "car battery seattle, mobile battery service, 24 hour battery delivery, battery replacement seattle, interstate batteries seattle, car battery delivery near me, roadside battery replacement, emergency battery service seattle, bellevue battery replacement, redmond car battery",
  alternates: {
    canonical: "https://carbatteryseattle.com",
  },
  openGraph: {
    title: "Car Battery Seattle | 24/7 Battery Delivery & Installation",
    description:
      "Dead battery? We come to you — 24/7. Expert delivery, installation & testing across the greater Seattle area.",
    url: "https://carbatteryseattle.com",
    siteName: "Car Battery Seattle",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://img1.wsimg.com/isteam/ip/78493546-e518-4c1f-8180-603f437ebee1/IMG_0165.PNG",
        width: 1200,
        height: 630,
        alt: "Car Battery Seattle — 24/7 Mobile Battery Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Battery Seattle | 24/7 Battery Delivery & Installation",
    description:
      "Dead battery? We come to you — 24/7. Expert delivery, installation & testing across the greater Seattle area.",
    images: [
      "https://img1.wsimg.com/isteam/ip/78493546-e518-4c1f-8180-603f437ebee1/IMG_0165.PNG",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "kJ1ozg4_59vXBJfS2rZELLr--8NYH20Sz97dO5Uujl4",
  },
  other: {
    "geo.region": "US-WA",
    "geo.placename": "Seattle",
    "geo.position": "47.6062;-122.3321",
    ICBM: "47.6062, -122.3321",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://carbatteryseattle.com",
  name: "Car Battery Seattle",
  description:
    "24/7 mobile car battery delivery, installation, and testing service across the greater Seattle area including Bellevue, Redmond, and surrounding communities.",
  url: "https://carbatteryseattle.com",
  telephone: "+1-206-604-8806",
  email: "carbatteryseattle@gmail.com",
  image:
    "https://img1.wsimg.com/isteam/ip/78493546-e518-4c1f-8180-603f437ebee1/IMG_0165.PNG",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  areaServed: [
    { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "Bellevue" },
    { "@type": "City", name: "Redmond" },
    { "@type": "City", name: "Kirkland" },
    { "@type": "City", name: "Renton" },
    { "@type": "City", name: "Kent" },
    { "@type": "City", name: "Everett" },
    { "@type": "City", name: "Bothell" },
    { "@type": "City", name: "Issaquah" },
    { "@type": "City", name: "Sammamish" },
    { "@type": "City", name: "Tukwila" },
    { "@type": "City", name: "Shoreline" },
    { "@type": "City", name: "Lynnwood" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seattle",
    addressRegion: "WA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.6062,
    longitude: -122.3321,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: ["https://g.page/r/CTVO-2WtLuA1EBM/review"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Car Battery Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Battery Delivery & Installation",
          description:
            "Mobile delivery and professional installation of a new Interstate battery at your location.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Certified Battery Health Check",
          description:
            "Complete evaluation of battery health, starting system, and charging system using professional-grade digital testers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Battery Replacement",
          description:
            "Full battery swap including terminal cleaning, tray inspection, cable check, and old battery recycling.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "250",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
