import {
  MessageCircle,
  Phone,
  CalendarCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  const buttonClass =
    "w-14 h-14 rounded-full text-white shadow-xl flex items-center justify-center transition-all duration-300";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-3">

      {/* Call Now */}
      <motion.a
        href="tel:+918087536077"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.6,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`${buttonClass} bg-blue-600 hover:bg-blue-700`}
        aria-label="Call Now"
      >
        <Phone size={24} />
      </motion.a>

      {/* Book Now */}
      <motion.a
        href="#contact"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.8,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`${buttonClass} bg-[#d4af37] hover:bg-[#c59c22]`}
        aria-label="Book Now"
      >
        <CalendarCheck size={24} />
      </motion.a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918087536077?text=Hi, I would like to know more about Krisha Villa."
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} bg-[#25D366]`}
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

    </div>
  );
}