import { Waves, Wind, Flame, Wifi, Car, Trees } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function AmenitiesSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const amenities = [
    {
      icon: Waves,
      title: 'Private Swimming Pool',
      description: 'Enjoy a refreshing dip in our exclusive pool surrounded by nature',
    },
    {
      icon: Wind,
      title: 'Air Conditioned Rooms',
      description: 'Stay comfortable with modern AC in all bedrooms',
    },
    {
      icon: Flame,
      title: 'BBQ Setup',
      description: 'Perfect outdoor BBQ area for memorable evenings with loved ones',
    },
    {
      icon: Wifi,
      title: 'Free WiFi',
      description: 'High-speed internet connectivity throughout the villa',
    },
    {
      icon: Car,
      title: 'Parking Space',
      description: 'Secure parking available for multiple vehicles',
    },
    {
      icon: Trees,
      title: 'Garden / Nature View',
      description: 'Breathtaking views of lush greenery and the Western Ghats',
    },
  ];

  return (
    <section id="amenities" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#faf5ed] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a4d2e] rounded-full mb-5 group-hover:scale-110 transition-transform">
                <amenity.icon className="text-[#d4af37]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1a4d2e] mb-3">{amenity.title}</h3>
              <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
