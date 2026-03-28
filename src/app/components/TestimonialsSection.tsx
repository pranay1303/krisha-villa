import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from './hooks/useInView';

export function TestimonialsSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const testimonials = [
    {
      name: 'Priya & Rahul Sharma',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
      review: 'Krisha Villa exceeded all our expectations! The pool, the rooms, the ambiance - everything was perfect. It was the ideal place for our anniversary celebration. Highly recommended!',
    },
    {
      name: 'Amit Patel',
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5,
      review: 'We had an amazing weekend with friends at Krisha Villa. The villa is spacious, clean, and surrounded by nature. The BBQ setup and private pool made our stay memorable. Will definitely visit again!',
    },
    {
      name: 'Sneha Desai',
      location: 'Thane',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      review: 'A perfect getaway from the city chaos! The villa is beautifully maintained, and the staff is very courteous. The view of the hills is breathtaking. Loved every moment here.',
    },
    {
      name: 'Vikram & Aditi Singh',
      location: 'Navi Mumbai',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop',
      rating: 5,
      review: 'Krisha Villa is a hidden gem in Karjat! Perfect for a family vacation. The kids loved the pool, and we enjoyed the peaceful surroundings. Great hospitality and excellent amenities.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    touchThreshold: 10,
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
        },
      },
    ],
  };

  return (
    <section id="reviews" className="py-20 md:py-32 bg-[#faf5ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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

        <div className="testimonials-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-[#d4af37] fill-[#d4af37]" />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.review}"
                  </p>

                  {/* Guest Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-[#1a4d2e]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .testimonials-slider .slick-dots {
          bottom: -50px;
        }

        .testimonials-slider .slick-dots li button:before {
          font-size: 12px;
          color: #1a4d2e;
        }

        .testimonials-slider .slick-dots li.slick-active button:before {
          color: #d4af37;
        }
      `}</style>
    </section>
  );
}