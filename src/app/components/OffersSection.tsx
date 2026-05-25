import { useState, useEffect, useRef } from 'react';
import {
  Clock,
  Users,
  Sparkles,
  Percent,
  Heart,
  PartyPopper,
} from 'lucide-react';

import { motion } from 'framer-motion';
import { useInView } from './hooks/useInView';

export function OffersSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

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

  const offers = [
    {
      icon: Clock,
      discount: '10% OFF',
      title: 'Early Booking Offer',
      description: 'Valid when booked 30 days in advance',
      badge: '⏳ Limited',
      badgeColor: 'bg-orange-500',
    },
    {
      icon: Users,
      discount: '5% OFF',
      title: 'Group Booking Discount',
      description: 'Works for groups of 20+ guests.',
      badge: '🔥 Hot',
      badgeColor: 'bg-red-500',
    },
    {
      icon: PartyPopper,
      discount: 'FREE',
      title: 'Free Cake',
      description: 'Birthday special complimentary cake',
      badge: '🎉 Popular',
      badgeColor: 'bg-purple-500',
    },
    {
      icon: Percent,
      discount: '₹500 OFF',
      title: 'Weekdays Deal',
      description: 'Save ₹500 on weekday bookings',
      badge: '⚡ Deal',
      badgeColor: 'bg-blue-500',
    },
    {
      icon: Heart,
      discount: 'SPECIAL',
      title: 'Couple Special',
      description: 'Romantic villa experience at special pricing.',
      badge: '❤️ Trending',
      badgeColor: 'bg-pink-500',
    },
    {
      icon: Sparkles,
      discount: 'PREMIUM',
      title: 'New Year Special',
      description: 'Exclusive celebration package.',
      badge: '🎆 Demand',
      badgeColor: 'bg-yellow-500',
    },
  ];

  // ✅ WhatsApp message generator
  const generateWhatsAppLink = (offer) => {
  const message =
    `Hi, I want to claim this offer\n` +
    `Offer: ${offer.title}\n` +
    `Discount: ${offer.discount}\n` +
    `Description: ${offer.description}`;

  return `https://wa.me/918087536077?text=${encodeURIComponent(message)}`;
};

  return (
    <section
      id="offers"
      className="py-20 md:py-32 bg-gradient-to-br from-[#1a4d2e] via-[#1a4d2e] to-[#133a22] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
      </div>

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Exclusive Offers
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Take advantage of our special deals and packages
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">

          {offers.map((offer, index) => {
            const isActive = activeCard === index;
            const Icon = offer.icon;

            return (
              <div
                key={offer.title}
                className="cursor-pointer"
                onClick={() =>
                  setActiveCard(isActive ? null : index)
                }
              >
                {/* FLIP CARD */}
                <div
                  className="relative w-full h-[210px] md:h-[300px] transition-transform duration-700"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isActive
                      ? 'rotateY(180deg)'
                      : 'rotateY(0deg)',
                  }}
                >

                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden rounded-3xl bg-white shadow-xl flex flex-col items-center justify-center p-3 md:p-6">

                    {/* BADGE (ONLY LARGE SCREENS) */}
                    <div className="hidden lg:flex absolute top-3 right-3">
                      <div
                        className={`${offer.badgeColor} text-white px-2 py-1 rounded-full text-xs font-semibold`}
                      >
                        {offer.badge}
                      </div>
                    </div>

                    <div className="text-center space-y-2">

                      <div className="text-[#1a4d2e] font-bold text-lg md:text-2xl">
                        {offer.discount}
                      </div>

                      <div className="w-10 h-10 md:w-14 md:h-14 mx-auto bg-[#1a4d2e] rounded-full flex items-center justify-center">
                        <Icon className="text-white" size={20} />
                      </div>

                      <h3 className="text-[11px] md:text-lg font-bold text-[#1a4d2e] leading-tight">
                        {offer.title}
                      </h3>

                      <p className="text-[10px] md:text-sm text-gray-500">
                        Tap to flip
                      </p>

                      {/* FRONT CLAIM BUTTON */}
                      <a
                        href={generateWhatsAppLink(offer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block bg-[#1a4d2e] text-white text-[10px] md:text-sm px-4 py-1.5 rounded-full font-semibold shadow-md"
                      >
                        Claim Offer
                      </a>

                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-3xl bg-[#1a4d2e] text-white shadow-2xl flex flex-col justify-between p-3 md:p-6">

                    <div>
                      <h3 className="text-sm md:text-lg font-bold mb-2">
                        {offer.title}
                      </h3>

                      <p className="text-[10px] md:text-sm text-white/80 leading-relaxed">
                        {offer.description}
                      </p>
                    </div>

                    {/* BACK CLAIM BUTTON */}
                    <a
                      href={generateWhatsAppLink(offer)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#1a4d2e] text-center py-2 rounded-full font-semibold text-sm"
                    >
                      Claim Offer
                    </a>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}