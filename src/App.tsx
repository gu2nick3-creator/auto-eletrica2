import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0C0A09] text-stone-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Services: Baterias, Injeção, Som, Alternadores, Iluminação */}
        <Services />

        {/* 4. About the Company */}
        <About />

        {/* 5. Photo Gallery with Fullscreen Lightbox */}
        <Gallery />

        {/* 6. Testimonials & Google Reputation */}
        <Testimonials />

        {/* 7. Contact & WhatsApp Quote Form */}
        <ContactForm />

        {/* 8. Location with Interactive Map & Business Hours */}
        <LocationHours />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
