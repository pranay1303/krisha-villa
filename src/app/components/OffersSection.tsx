import { Gift, Heart, Clock, Users, Sparkles, Percent, PartyPopper } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from './hooks/useInView';

export function OffersSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const offers = [
    {
      icon: Clock,
      discount: '10% OFF',
      title: 'Early Booking Offer',
      description: 'Valid when booked 20 days in advance',
      badge: '⏳ Limited Time',
      badgeColor: 'bg-orange-500',
      glowColor: 'shadow-orange-500/50',
    },
    {
      icon: Users,
      discount: '10% OFF',
      title: 'Group Booking Discount',
      description: 'Works for groups of 20+ next time you visit.',
      badge: '🔥 Hot Deal',
      badgeColor: 'bg-red-500',
      glowColor: 'shadow-red-500/50',
    },
    {
      icon: PartyPopper,
      discount: 'FREE',
      title: 'Free Cake',
      description: 'Birthday Special - Complimentary cake',
      badge: '🎉 Popular',
      badgeColor: 'bg-purple-500',
      glowColor: 'shadow-purple-500/50',
    },
    {
      icon: Percent,
      discount: '₹500 OFF',
      title: 'WeekDays Deal',
      description: 'Book for weekdays and get ₹500 off on your stay',
      badge: '⚡ Weekend Only',
      badgeColor: 'bg-blue-500',
      glowColor: 'shadow-blue-500/50',
    },
    {
      icon: Heart,
      discount: 'SPECIAL',
      title: 'Couple Special Offer',
      description: 'Specially curated romantic package for couples at a discounted price.',
      badge: '❤️ Trending',
      badgeColor: 'bg-pink-500',
      glowColor: 'shadow-pink-500/50',
    },
    {
      icon: Sparkles,
      discount: 'PREMIUM',
      title: 'New Year Special Deal',
      description: 'Exclusive premium celebration package - Limited time booking',
      badge: '🎆 High Demand',
      extraBadge: '⏳ Few Slots Left',
      badgeColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      extraBadgeColor: 'bg-gradient-to-r from-red-600 to-red-700',
      glowColor: 'shadow-yellow-500/50',
      highlight: true,
    },
  ];

  return (
    <section id="offers" className="py-20 md:py-32 bg-gradient-to-br from-[#1a4d2e] via-[#1a4d2e] to-[#133a22] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-6 transition-all group overflow-hidden ${
                offer.highlight
                  ? 'ring-4 ring-yellow-400 shadow-2xl hover:shadow-yellow-500/30'
                  : 'shadow-xl hover:shadow-2xl'
              } hover:scale-105 ${offer.glowColor} hover:${offer.glowColor}`}
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 items-end z-10">
                <div
                  className={`${offer.badgeColor} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg`}
                >
                  {offer.badge}
                </div>
                {offer.extraBadge && (
                  <div
                    className={`${offer.extraBadgeColor} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg animate-pulse`}
                  >
                    {offer.extraBadge}
                  </div>
                )}
              </div>

              {/* Discount Badge */}
              <div className="relative mb-4">
                <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#1a4d2e] to-[#133a22] text-white px-6 py-3 rounded-2xl font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  {offer.discount}
                </div>
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1a4d2e] to-[#133a22] rounded-full mb-4 group-hover:scale-110 transition-transform relative z-10">
                <offer.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1a4d2e] mb-2 pr-20 relative z-10">
                {offer.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5 relative z-10">
                {offer.description}
              </p>

              <a
                href="https://wa.me/918087536077?text=Hi%2C%20I%20want%20to%20claim%20this%20offer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#1a4d2e] text-white px-6 py-3 rounded-full hover:bg-[#133a22] transition-all font-medium shadow-md hover:shadow-lg relative z-10"
              >
                Claim Offer
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}