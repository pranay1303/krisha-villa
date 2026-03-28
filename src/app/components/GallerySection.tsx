import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { useInView } from './hooks/useInView';

export function GallerySection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Pool', 'Rooms', 'Outdoor', 'Night View'];

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1716801408923-c2149294dad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBzd2ltbWluZyUyMHBvb2wlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3NDYzOTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Pool',
      alt: 'Pool Aerial View',
    },
    {
      url: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0NjM5MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Rooms',
      alt: 'Bedroom',
    },
    {
      url: 'https://images.unsplash.com/photo-1760067537540-cc36c1700d7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGdhcmRlbiUyMG5hdHVyZXxlbnwxfHx8fDE3NzQ2MzkzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Outdoor',
      alt: 'Garden View',
    },
    {
      url: 'https://images.unsplash.com/photo-1762637447266-38b3eb04f72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwcG9vbCUyMHZpbGxhJTIwbmlnaHQlMjB2aWV3fGVufDF8fHx8MTc3NDYzOTMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Night View',
      alt: 'Villa at Night',
    },
    {
      url: 'https://images.unsplash.com/photo-1761164164212-7fdea59d564e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMG91dGRvb3IlMjBkaW5pbmclMjB0ZXJyYWNlfGVufDF8fHx8MTc3NDYzOTMxNXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Outdoor',
      alt: 'Outdoor Dining',
    },
    {
      url: 'https://images.unsplash.com/photo-1651108066109-15a97d54ced3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc0NjM5MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Rooms',
      alt: 'Living Room',
    },
    {
      url: 'https://images.unsplash.com/photo-1752769041878-f24e37fd6aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMHZpbGxhJTIwc3BhfGVufDF8fHx8MTc3NDYzOTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Rooms',
      alt: 'Bathroom',
    },
    {
      url: 'https://images.unsplash.com/photo-1673138711754-028dda56c32e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2wlMjBzdW5zZXQlMjBJbmRpYXxlbnwxfHx8fDE3NzQ2MzkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Pool',
      alt: 'Pool at Sunset',
    },
  ];

  const filteredImages =
    activeCategory === 'All'
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#faf5ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Explore the beauty and luxury of Krisha Villa
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-[#1a4d2e] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3} gutter="1rem">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer group overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </Masonry>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-[#d4af37] transition-colors"
              >
                <X size={40} />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
