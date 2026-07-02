import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from './hooks/useInView';

export function TestimonialsSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const testimonials = [
  {
    name: "Priya & Rahul",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    review:
      "We celebrated our anniversary here and honestly couldn't have picked a better place. The villa was spotless, the pool was amazing, and the peaceful surroundings made our stay unforgettable. We'll definitely be back!",
  },
  {
    name: "Amit Patel",
    location: "Pune",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    review:
      "Booked this villa for a weekend trip with friends and everyone loved it. Clean rooms, great music setup, a nice pool, and plenty of space to relax. The caretaker was also very helpful throughout our stay.",
  },
  {
    name: "Sneha Desai",
    location: "Thane",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    review:
      "If you're looking to escape the city for a couple of days, this place is perfect. Beautiful views, fresh air, comfortable rooms, and everything was exactly as shown in the photos.",
  },
  {
    name: "Vikram Singh",
    location: "Navi Mumbai",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop",
    rating: 5,
    review:
      "Visited with my family and the kids had an amazing time in the swimming pool. The villa is well maintained, spacious, and very peaceful. Great hospitality and worth every penny.",
  },
];

  // ✅ FINAL RESPONSIVE SETTINGS
  const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  swipeToSlide: true,
  adaptiveHeight: false,
  centerMode: false,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        adaptiveHeight: true,
      },
    },
  ],
};

  return (
    <section id="reviews" className="py-20 md:py-32 bg-[#faf5ed] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-4">
            Guest Reviews
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear what our guests have to say about their experience
          </p>
        </motion.div>

        {/* Slider */}
        <div className="testimonials-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 py-2">

                {/* ✅ FULL WIDTH CARD (NO max-w) */}
                <div className="bg-white rounded-2xl p-5 md:p-8 shadow-lg min-h-[320px] md:min-h-[360px] flex flex-col">

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-[#d4af37] fill-[#d4af37]"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic text-sm md:text-base">
                    "{testimonial.review}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-[#1a4d2e]">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Dots Styling */}
      <style>{`
        .testimonials-slider {
  padding-bottom: 50px;
}

.testimonials-slider .slick-list {
  overflow: hidden;
}

.testimonials-slider .slick-track {
  display: flex !important;
}

.testimonials-slider .slick-slide {
  height: inherit !important;
}

.testimonials-slider .slick-slide > div {
  height: 100%;
}

.testimonials-slider .slick-slide > div > div {
  height: 100%;
}

.testimonials-slider .slick-dots {
  bottom: -35px;
}

.testimonials-slider .slick-dots li button:before {
  font-size: 10px;
  color: #1a4d2e;
}

.testimonials-slider .slick-dots li.slick-active button:before {
  color: #d4af37;
}

@media (max-width:768px) {
  .testimonials-slider .slick-slide {
    padding: 0 6px;
  }
}
      `}</style>
    </section>
  );
}