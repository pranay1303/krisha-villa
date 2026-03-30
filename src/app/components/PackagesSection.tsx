import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from './hooks/useInView';

export function PackagesSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const packages = [
    {
      name: 'Day Outing',
      price: '₹999',
      duration: 'Per Person',
      features: [
        'Pool access',
        'Music system',
        'Indoor & outdoor games',
        'Parking facility',
        'Perfect for short trips',
      ],
      badge: '',
      badgeColor: '',
      popular: false,
      microText: '',
    },
    {
      name: 'One Night Stay',
      price: '₹1999',
      weekendPrice: '₹2399',
      duration: 'Per Person',
      features: [
        'Private pool access',
        'AC rooms',
        'BBQ setup',
        'Music system',
        'Full villa privacy',
      ],
      badge: '🔥 Most Booked',
      badgeColor: 'from-orange-500 to-red-500',
      popular: true,
      microText: '👉 Booked most of the time',
    },
    {
      name: 'Couple Special',
      price: '₹5999',
      duration: 'Per Couple',
      features: [
        'Air conditioned rooms',
        'Pool access',
        'Music setup',
        'Private experience',
      ],
      badge: '❤️ Couple Favorite',
      badgeColor: 'from-pink-500 to-red-500',
      popular: false,
      microText: '',
    },
    {
      name: 'Birthday / Party Package',
      price: 'Custom Package',
      duration: '',
      features: [
        'Customizable party setup',
        'DJ & music setup',
        'BBQ & food arrangement',
        'Celebration area',
      ],
      badge: '🎉 Celebration Special',
      badgeColor: 'from-purple-500 to-pink-500',
      popular: false,
      microText: '',
    },
    {
      name: 'Group Package',
      price: 'Custom Pricing',
      duration: '',
      features: [
        'For 15–20 people',
        'Full villa booking',
        'Games & activities',
        'Custom arrangements',
      ],
      badge: '👥 Best for Groups',
      badgeColor: 'from-blue-500 to-cyan-500',
      popular: false,
      microText: '',
    },
    {
      name: 'New Year Special',
      price: 'Custom Package',
      duration: '',
      features: [
        'Premium celebration setup',
        'DJ night',
        'Special decoration',
        'Limited availability',
      ],
      badge: '🎆 Premium Event',
      extraBadge: '⏳ Limited Slots',
      badgeColor: 'from-yellow-500 to-orange-500',
      extraBadgeColor: 'from-red-600 to-red-700',
      popular: false,
      highlight: true,
      microText: '',
    },
  ];

  return (
    <section id="packages" className="py-20 md:py-32 bg-gradient-to-b from-[#faf5ed] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-4">
            Packages & Pricing
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose the perfect package for your stay
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl ${
                pkg.popular
                  ? 'bg-gradient-to-br from-[#1a4d2e] to-[#133a22] text-white shadow-2xl ring-4 ring-[#d4af37]/50'
                  : pkg.highlight
                  ? 'bg-gradient-to-br from-[#2d5f3f] to-[#1a4d2e] text-white shadow-2xl ring-4 ring-yellow-500/50'
                  : 'bg-white text-gray-800 shadow-lg'
              }`}
            >
              {/* Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 items-end z-10">
                {pkg.badge && (
                  <div
                    className={`bg-gradient-to-r ${pkg.badgeColor} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse`}
                  >
                    {pkg.badge}
                  </div>
                )}
                {pkg.extraBadge && (
                  <div
                    className={`bg-gradient-to-r ${pkg.extraBadgeColor} text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg`}
                  >
                    {pkg.extraBadge}
                  </div>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 pr-32">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  {pkg.weekendPrice && (
                    <div className="text-sm mt-1 opacity-90">
                      Weekdays: {pkg.price} | Weekends: {pkg.weekendPrice}
                    </div>
                  )}
                  {pkg.duration && (
                    <span
                      className={`block text-lg mt-1 ${
                        pkg.popular || pkg.highlight ? 'text-white/80' : 'text-gray-600'
                      }`}
                    >
                      {pkg.duration}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          pkg.popular || pkg.highlight ? 'bg-[#d4af37]' : 'bg-[#1a4d2e]'
                        }`}
                      >
                        <Check size={14} className="text-white" />
                      </div>
                      <span
                        className={
                          pkg.popular || pkg.highlight ? 'text-white/90' : 'text-gray-700'
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {pkg.microText && (
                  <div className="mb-4 text-sm font-medium opacity-90 flex items-center gap-1">
                    {pkg.microText}
                  </div>
                )}

                <a
                  href="https://wa.me/918087536077?text=Hi%2C%20I%20want%20to%20book%20Krisha%20Villa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-full font-medium transition-all ${
                    pkg.popular || pkg.highlight
                      ? 'bg-[#d4af37] text-white hover:bg-[#c49d2f] shadow-lg hover:shadow-xl'
                      : 'bg-[#1a4d2e] text-white hover:bg-[#133a22] shadow-md hover:shadow-lg'
                  }`}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}