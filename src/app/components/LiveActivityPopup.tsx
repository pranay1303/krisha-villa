import { useEffect, useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function LiveActivityPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show welcome popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBookNow = () => {
    setIsVisible(false);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 z-40 max-w-sm"
        >
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-200/50 relative">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={18} className="text-gray-600" />
            </button>

            {/* Content */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🌴</span>
                <h3 className="text-lg font-bold text-[#1a4d2e]">
                  Welcome to Krisha Villa
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Your perfect getaway in Karjat
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleBookNow}
              className="w-full bg-[#d4af37] text-white px-6 py-3 rounded-full hover:bg-[#c49d2f] transition-all shadow-md hover:shadow-lg font-medium"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}