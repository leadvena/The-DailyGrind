/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import BookingForm from './components/BookingForm';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import { CAFE_INFO } from './constants';
import { CartProvider } from './context/CartContext';

export default function App() {
  useEffect(() => {
    // Set Document Metadata
    document.title = "The Daily Grind Espresso Cafe | Coffee Shop in Stillwater, MN";
    
    // Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', CAFE_INFO.description);

    // Schema.org Markup for local SEO
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      "name": CAFE_INFO.name,
      "image": "/images/latte_art.png",
      "@id": "",
      "url": window.location.origin,
      "telephone": CAFE_INFO.phone,
      "servesCuisine": "Coffee, Pastries, Breakfast Sandwiches",
      "menu": {
        "@type": "Menu",
        "name": "The Daily Grind Menu",
        "url": `${window.location.origin}/#menu`
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "217 N Main St",
        "addressLocality": "Stillwater",
        "addressRegion": "MN",
        "postalCode": "55082",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.0543669,
        "longitude": -92.8306013
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "06:00",
        "closes": "13:00"
      },
      "sameAs": [
        "https://www.facebook.com/DailyGrindStillwater",
        "https://www.instagram.com/DailyGrindStillwater"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <CartProvider>
      <div className="relative">
        <Navbar />
        <CartSidebar />
        <main>
          <Hero />
          <Features />
          <AboutSection />
          <MenuSection />
          <div className="grid grid-cols-1 gap-1 bg-amber-light/20 p-1">
            <BookingForm />
            <ContactSection />
          </div>
        </main>
        <Footer />
        
        {/* Click-to-call Floating Action Button (Mobile Only) */}
        <a 
          href={`tel:${CAFE_INFO.phone}`}
          className="md:hidden fixed bottom-6 right-6 z-50 bg-amber-dark text-white p-4 rounded-full shadow-2xl"
          aria-label="Call Shop"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg>
        </a>
      </div>
    </CartProvider>
  );
}

