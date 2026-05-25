import { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from './hooks/useInView';

export function PackagesSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [activeCard, setActiveCard] = useState(null);

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
  badge: '☀️ Best Day Escape',
  badgeColor: 'from-green-500 to-emerald-600',
  popular: false,
  microText: '👉 Perfect for one day fun',
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
      name: 'Couple Bliss',
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
      name: 'Squad Stay',
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

  const generateWhatsAppMessage = (pkg) => {
  let msg = `Hi, I want to book this package\n\n`;
  msg += `Package: ${pkg.name}\n`;
  msg += `Price: ${pkg.price}\n`;

  if (pkg.weekendPrice) {
    msg += `Weekdays: ${pkg.price}\n`;
    msg += `Weekends: ${pkg.weekendPrice}\n`;
  }

  if (pkg.duration) {
    msg += `Description: ${pkg.duration}\n`;
  }

  return msg;
};

  return (
    <section
      id="packages"
      className="py-20 md:py-32 bg-gradient-to-b from-[#faf5ed] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
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

        {/* MOBILE = 2 GRID | DESKTOP = 3 GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {packages.map((pkg, index) => {
            const isActive = activeCard === index;

            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                onClick={() =>
                  window.innerWidth < 768 &&
                  setActiveCard(isActive ? null : index)
                }
                className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-[#355160] to-[#8665bf] text-white shadow-2xl ring-2 ring-[#d4af37]/50'
                    : pkg.highlight
                    ? 'bg-gradient-to-br from-[#2d5f3f] to-[#9b6ee4] text-white shadow-2xl ring-2 ring-yellow-500/50'
                    : 'bg-white text-gray-800 shadow-lg'
                }`}
              >

                {/* ================= DESKTOP VIEW ================= */}
                <div className="hidden md:block">

                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 items-end z-10">
                    {pkg.badge && (
                      <div
                        className={`bg-gradient-to-r ${pkg.badgeColor} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}
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
                    <h3 className="text-2xl font-bold mb-3 pr-32">
                      {pkg.name}
                    </h3>

                    <div className="mb-6">
                      <span className="text-4xl font-bold">
                        {pkg.price}
                      </span>

                      {pkg.weekendPrice && (
                        <div className="text-sm mt-1 opacity-90">
                          Weekdays: {pkg.price} | Weekends:{' '}
                          {pkg.weekendPrice}
                        </div>
                      )}

                      {pkg.duration && (
                        <span
                          className={`block text-lg mt-1 ${
                            pkg.popular || pkg.highlight
                              ? 'text-white/80'
                              : 'text-gray-600'
                          }`}
                        >
                          {pkg.duration}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                              pkg.popular || pkg.highlight
                                ? 'bg-[#d4af37]'
                                : 'bg-[#1a4d2e]'
                            }`}
                          >
                            <Check
                              size={14}
                              className="text-white"
                            />
                          </div>

                          <span
                            className={
                              pkg.popular || pkg.highlight
                                ? 'text-white/90'
                                : 'text-gray-700'
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
  href={`https://wa.me/918087536077?text=${encodeURIComponent(generateWhatsAppMessage(pkg))}`}
  target="_blank"
  rel="noopener noreferrer"
  className={`block w-full text-center py-4 rounded-full font-medium transition-all ${
    pkg.popular || pkg.highlight
      ? 'bg-[#d4af37] text-white hover:bg-[#c49d2f]'
      : 'bg-[#1a4d2e] text-white hover:bg-[#133a22]'
  }`}
>
  Book Now
</a>
                  </div>
                </div>

                {/* ================= MOBILE VIEW ================= */}
                <div className="block md:hidden">

                  <div className="p-4 min-h-[280px] flex flex-col justify-between">

                    {!isActive ? (
                      <>
                        <div>

                          {/* Badge */}
                          {pkg.badge && (
                            <div
                              className={`inline-block mb-3 bg-gradient-to-r ${pkg.badgeColor} text-white px-3 py-1 rounded-full text-[10px] font-medium`}
                            >
                              {pkg.badge}
                            </div>
                          )}

                          {/* Title */}
                          <h3 className="text-lg font-bold mb-3 leading-snug">
                            {pkg.name}
                          </h3>

                          {/* Price */}
                          <div className="mb-4">
                            <span className="text-3xl font-bold">
                              {pkg.price}
                            </span>

                            {pkg.duration && (
                              <span
                                className={`block text-sm mt-1 ${
                                  pkg.popular || pkg.highlight
                                    ? 'text-white/80'
                                    : 'text-gray-600'
                                }`}
                              >
                                {pkg.duration}
                              </span>
                            )}
                          </div>

                          {/* Tap */}
                          <p className="text-xs opacity-70">
                            Tap to view details
                          </p>
                        </div>

                        {/* Button */}
                       <a
  href={`https://wa.me/918087536077?text=${encodeURIComponent(generateWhatsAppMessage(pkg))}`}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => e.stopPropagation()}
  className={`block w-full text-center py-3 rounded-full text-sm font-medium transition-all ${
    pkg.popular || pkg.highlight
      ? 'bg-[#d4af37] text-white'
      : 'bg-[#1a4d2e] text-white'
  }`}
>
  Book Now
</a>
                      </>
                    ) : (
                      <>
                        <div>

                          {/* TITLE + PRICE SIDE */}
                          <div className="flex items-start justify-between gap-2 mb-5">
                            <h3 className="text-base font-bold leading-snug">
                              {pkg.name}
                            </h3>

                            <span className="text-lg font-bold whitespace-nowrap">
                              {pkg.price}
                            </span>
                          </div>

                          {/* FEATURES */}
                          <ul className="space-y-3 mb-5">
                            {pkg.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2"
                              >
                                <div
                                  className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-1 ${
                                    pkg.popular || pkg.highlight
                                      ? 'bg-[#d4af37]'
                                      : 'bg-[#1a4d2e]'
                                  }`}
                                >
                                  <Check
                                    size={10}
                                    className="text-white"
                                  />
                                </div>

                                <span
                                  className={`text-xs leading-relaxed ${
                                    pkg.popular || pkg.highlight
                                      ? 'text-white/90'
                                      : 'text-gray-700'
                                  }`}
                                >
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* BUTTON */}
                        <a
  href={`https://wa.me/918087536077?text=${encodeURIComponent(generateWhatsAppMessage(pkg))}`}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => e.stopPropagation()}
  className={`block w-full text-center py-3 rounded-full text-sm font-medium transition-all ${
    pkg.popular || pkg.highlight
      ? 'bg-[#d4af37] text-white'
      : 'bg-[#1a4d2e] text-white'
  }`}
>
  Book Now
</a>
                      </>
                    )}

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}