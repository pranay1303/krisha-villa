import { useState, useEffect, useRef } from 'react';
import {
  Waves,
  CloudRain,
  Music,
  Wifi,
  Car,
 Trees,
  Flame,
  BedDouble,
  Gamepad2,
  Projector,
} from 'lucide-react';

import { motion } from 'framer-motion';
import { useInView } from './hooks/useInView';

export function AmenitiesSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [activeCard, setActiveCard] = useState(null);

  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  /* CHECK SCREEN SIZE */
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();

    window.addEventListener('resize', checkScreen);

    return () => {
      window.removeEventListener('resize', checkScreen);
    };
  }, []);

  /* CLOSE CARD WHEN CLICKING OUTSIDE */
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sectionRef.current &&
        !sectionRef.current.contains(event.target)
      ) {
        setActiveCard(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const amenities = [
    {
      icon: Waves,
      title: 'Swimming Pool',
      description:
        'Enjoy a refreshing dip in our exclusive private swimming pool',
    },
    {
      icon: CloudRain,
      title: 'Rain Dance',
      description:
        'Exciting rain dance setup for fun and refreshing moments',
    },
    {
      icon: Music,
      title: 'Music System',
      description:
        'Premium sound system available for parties and celebrations',
    },
    {
      icon: Projector,
      title: 'Smart Projector',
      description:
        'Enjoy movies, music, and entertainment on a premium smart projector setup',
    },
    {
      icon: Wifi,
      title: 'Free WiFi',
      description:
        'High-speed internet connectivity throughout the villa',
    },
    {
      icon: Car,
      title: 'Free Parking',
      description:
        'Secure parking space available for multiple vehicles',
    },
    {
      icon: Trees,
      title: 'Garden Area',
      description:
        'Relax amidst lush greenery and beautiful natural surroundings',
    },
    {
      icon: BedDouble,
      title: '4 Bedrooms',
      description:
        'Spacious and comfortable bedrooms designed for luxury stay',
    },
    {
      icon: Gamepad2,
      title: 'Indoor & Outdoor Games',
      description:
        'Fun activities and games available for all age groups',
    },

    /* BBQ ONLY FOR MOBILE/TABLET */
    {
      icon: Flame,
      title: 'BBQ Setup',
      description:
        'Outdoor BBQ setup for memorable evenings with family and friends',
    },
  ];

  /* DESKTOP → HIDE BBQ */
  const displayedAmenities = isDesktop
    ? amenities.filter(
        (item) => item.title !== 'BBQ Setup'
      )
    : amenities;

  return (
    <section
      id="amenities"
      className="py-20 md:py-32 bg-white"
    >
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-4">
            Premium Amenities
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Everything you need for a luxurious and comfortable stay
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {displayedAmenities.map((amenity, index) => {
            const isActive = activeCard === index;

            return (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                onClick={() =>
                  setActiveCard(isActive ? null : index)
                }
                className="cursor-pointer"
              >
                <div
                  className="
                    bg-[#faf5ed] rounded-2xl
                    hover:shadow-xl transition-all duration-500
                    h-[190px] md:h-[240px]
                    flex flex-col justify-center items-center
                    text-center p-4 md:p-8
                    active:scale-95
                  "
                >
                  {/* ICON */}
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#1a4d2e] rounded-full mb-4">
                    <amenity.icon
                      className="text-[#d4af37]"
                      size={28}
                    />
                  </div>

                  {/* NORMAL VIEW */}
                  {!isActive ? (
                    <>
                      <h3 className="text-sm md:text-xl font-bold text-[#1a4d2e] leading-snug mb-2">
                        {amenity.title}
                      </h3>

                      <p className="text-xs md:text-sm text-gray-500">
                        Tap to view
                      </p>
                    </>
                  ) : (
                    /* DESCRIPTION VIEW */
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xs md:text-base text-gray-700 leading-relaxed">
                        {amenity.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}