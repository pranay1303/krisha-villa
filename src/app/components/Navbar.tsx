import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // ✅ Scroll + active section logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        'home',
        'amenities',
        'gallery',
        'packages',
        'offers',
        'reviews',
        'contact',
      ];

      let current = 'home';

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop - 120;
          if (window.scrollY >= offsetTop) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Packages', href: '#packages' },
    { name: 'Offers', href: '#offers' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex flex-col"
            >
              <span className="text-xl md:text-2xl font-bold text-[#1a4d2e]">
                Krisha Villa
              </span>
              <span className="text-[10px] md:text-xs text-[#d4af37] uppercase">
                Karjat, Maharashtra
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`relative font-medium transition ${
                      isScrolled
                        ? isActive
                          ? 'text-[#1a4d2e]'
                          : 'text-gray-700 hover:text-[#1a4d2e]'
                        : isActive
                        ? 'text-[#d4af37]'
                        : 'text-white hover:text-[#d4af37]'
                    }`}
                  >
                    {item.name}

                    {isActive && (
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#d4af37]" />
                    )}
                  </a>
                );
              })}

              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-[#d4af37] text-white px-6 py-2.5 rounded-full hover:bg-[#c49d2f]"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${
                isScrolled ? 'text-[#1a4d2e]' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 🔥 Mobile Menu + Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl"
            >
              <div className="p-6 space-y-6">

                {/* Close */}
                <div className="flex justify-end">
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X size={28} />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="space-y-4">
                  {menuItems.map((item) => {
                    const isActive =
                      activeSection === item.href.substring(1);

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        className={`block text-lg p-3 rounded-lg ${
                          isActive
                            ? 'bg-[#1a4d2e] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>

                {/* CTA Buttons */}
<div className="space-y-3">

  {/* Book Now */}
  <button
    onClick={() => scrollToSection('#contact')}
    className="w-full bg-[#d4af37] text-white py-4 rounded-full font-semibold shadow-lg"
  >
    📅 Book Now
  </button>

  {/* Call Us Now (Mobile Only) */}
  <a
    href="tel:8766550789"
    className="block w-full text-center bg-green-600 text-white py-4 rounded-full font-semibold shadow-lg hover:bg-green-700 transition"
  >
    📞 Call Us Now
  </a>

</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}