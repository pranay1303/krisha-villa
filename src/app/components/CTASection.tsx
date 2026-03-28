import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function CTASection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I would like to book Krisha Villa', '_blank');
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1716801408923-c2149294dad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBzd2ltbWluZyUyMHBvb2wlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3NDYzOTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a4d2e]/90" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Book Your Perfect Weekend <br />
            <span className="text-[#d4af37]">Escape Today</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Experience luxury, nature, and tranquility at Krisha Villa. Your dream vacation awaits!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20BA5A] transition-all shadow-lg hover:shadow-2xl text-lg font-medium"
            >
              <MessageCircle size={24} />
              Contact Us on WhatsApp
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-[#1a4d2e] px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg text-lg font-medium"
            >
              Fill Contact Form
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
