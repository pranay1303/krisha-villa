import { Trees, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function AboutSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const highlights = [
    {
      icon: Trees,
      title: 'Nature',
      description: 'Surrounded by lush greenery',
    },
    {
      icon: ShieldCheck,
      title: 'Private',
      description: 'Exclusive villa for your group',
    },
    {
      icon: Sparkles,
      title: 'Premium Stay',
      description: 'Luxury amenities and services',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#faf5ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* 4BHK Badge */}
          <div className="inline-flex items-center gap-2 bg-[#d4af37] text-white px-5 py-2 rounded-full mb-6 font-semibold text-sm">
            <span>🏡</span>
            <span>4BHK Private Villa</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-4">
            Welcome to Krisha Villa
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Escape to the serene hills of Karjat and immerse yourself in luxury. Krisha Villa 
            offers the perfect blend of modern comfort and natural beauty, making it an ideal 
            destination for weekend getaways, celebrations, and peaceful retreats.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1651108066109-15a97d54ced3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc0NjM5MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Villa Interior"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl mt-8">
              <img
                src="https://images.unsplash.com/photo-1760067537540-cc36c1700d7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGdhcmRlbiUyMG5hdHVyZXxlbnwxfHx8fDE3NzQ2MzkzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Villa Garden"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-[#1a4d2e] mb-6">
              Your Private Paradise Awaits
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nestled in the heart of Karjat, our luxury villa provides an unmatched experience 
              of peace and privacy. With spacious rooms, a private pool, and stunning views of 
              the Western Ghats, every moment at Krisha Villa is designed to rejuvenate your 
              mind and body.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're planning a romantic getaway, a family celebration, or a weekend 
              with friends, our villa offers the perfect setting for creating unforgettable memories.
            </p>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a4d2e] rounded-full mb-4">
                <highlight.icon className="text-[#d4af37]" size={32} />
              </div>
              <h4 className="text-xl font-bold text-[#1a4d2e] mb-2">{highlight.title}</h4>
              <p className="text-gray-600">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}