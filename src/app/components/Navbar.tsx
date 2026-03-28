import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'amenities', 'gallery', 'packages', 'offers', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
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
            className="flex items-center space-x-2"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#1a4d2e] tracking-tight">
                Krisha Villa
              </span>
              <span className="text-xs text-[#d4af37] tracking-wider uppercase">
                Karjat, Maharashtra
              </span>
            </div>
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
                  className={`transition-colors font-medium relative ${
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
                    <span className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      isScrolled ? 'bg-[#1a4d2e]' : 'bg-[#d4af37]'
                    }`}></span>
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="bg-[#d4af37] text-white px-6 py-2.5 rounded-full hover:bg-[#c49d2f] transition-all shadow-lg hover:shadow-xl"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-[#1a4d2e]' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl overflow-y-auto"
          >
            <div className="p-6 space-y-6">
              {/* Close button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-[#1a4d2e]"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Menu items */}
              <div className="space-y-4">
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
                      className={`block text-lg py-3 px-4 rounded-lg transition-all ${
                        isActive 
                          ? 'text-white bg-[#1a4d2e] font-semibold' 
                          : 'text-gray-700 hover:text-[#1a4d2e] hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>

              {/* Book Now CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="block bg-[#d4af37] text-white text-center px-6 py-4 rounded-full hover:bg-[#c49d2f] transition-all font-semibold text-lg shadow-lg"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}