import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { PackagesSection } from './components/PackagesSection';
import { OffersSection } from './components/OffersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LiveActivityPopup } from './components/LiveActivityPopup';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Amenities Section */}
      <AmenitiesSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Packages Section */}
      <PackagesSection />

      {/* Offers Section */}
      <OffersSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Live Activity Popup */}
      <LiveActivityPopup />
    </div>
  );
}