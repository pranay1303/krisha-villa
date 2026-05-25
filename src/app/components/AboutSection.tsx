import { Trees, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";

import heroImage from "./images/hero.png";
import aboutImage from "./images/abt.png";

export function AboutSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const highlights = [
    {
      icon: Trees,
      title: "Nature",
      description: "Surrounded by lush greenery",
    },
    {
      icon: ShieldCheck,
      title: "Private",
      description: "Exclusive villa for your group",
    },
    {
      icon: Sparkles,
      title: "Premium Stay",
      description: "Luxury amenities and services",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#faf5ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#d4af37] text-white px-5 py-2 rounded-full mb-6 font-semibold text-sm shadow-lg">
            <span>🏡</span>
            <span>4BHK Private Villa</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-5">
            Welcome to Krisha Villa
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Escape to the serene hills of Karjat and immerse yourself in luxury.
            Krisha Villa offers the perfect blend of modern comfort and natural
            beauty, making it an ideal destination for weekend getaways,
            celebrations, and peaceful retreats.
          </p>
        </motion.div>

        {/* Main About Section */}
<div className="grid lg:grid-cols-2 gap-14 items-center mb-20">

  {/* Images Section */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="flex justify-center items-start gap-4 sm:gap-6 flex-wrap lg:flex-nowrap"
  >
    {/* Left Image */}
    <div className="w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-3xl overflow-hidden shadow-2xl flex-shrink-0">
      <img
        src={heroImage}
        alt="Villa"
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Right Image */}
    <div className="w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-3xl overflow-hidden shadow-2xl bg-white mt-10 sm:mt-16 md:mt-24 flex-shrink-0">
      <img
        src={aboutImage}
        alt="Krisha Villa Logo"
        className="w-full h-full object-contain p-3 sm:p-4 hover:scale-105 transition-transform duration-500"
      />
    </div>
  </motion.div>

  {/* Content Section */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="text-center lg:text-left"
  >
    <h3 className="text-3xl md:text-4xl font-bold text-[#1a4d2e] mb-6 leading-snug">
      Your Private Paradise Awaits
    </h3>

    <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
      Nestled in the heart of Karjat, our luxury villa provides an
      unmatched experience of peace and privacy. With spacious rooms, a
      private pool, and stunning views of the Western Ghats, every
      moment at Krisha Villa is designed to rejuvenate your mind and
      body.
    </p>

    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
      Whether you're planning a romantic getaway, a family celebration,
      or a weekend with friends, our villa offers the perfect setting
      for creating unforgettable memories.
    </p>
  </motion.div>
</div>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a4d2e] rounded-full mb-5">
                <highlight.icon className="text-[#d4af37]" size={32} />
              </div>

              {/* Title */}
              <h4 className="text-2xl font-bold text-[#1a4d2e] mb-3">
                {highlight.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}