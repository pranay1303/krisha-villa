import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1673138711754-028dda56c32e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2wlMjBzdW5zZXQlMjBJbmRpYXxlbnwxfHx8fDE3NzQ2MzkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            {/* 4BHK Badge */}
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/90 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 font-semibold text-sm sm:text-base">
              <span>🏡</span>
              <span>4BHK Private Villa</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Experience Luxury Living <br />
              <span className="text-[#d4af37]">in Nature</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-medium"
          >
            Stay Close to Nature..!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#d4af37] text-white px-8 py-4 rounded-full hover:bg-[#c49d2f] transition-all shadow-lg hover:shadow-2xl text-lg font-medium w-full sm:w-auto"
            >
              Book Now
            </a>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/20 backdrop-blur-md text-white border-2 border-white/50 px-8 py-4 rounded-full hover:bg-white/30 transition-all text-lg font-medium w-full sm:w-auto"
            >
              View Gallery
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer hover:text-[#d4af37] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}