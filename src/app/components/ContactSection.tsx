import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";

export function ContactSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    package: "",
    offer: "",
    message: "",
  });

  const packageOptions = [
    "Day Outing",
    "One Night Stay",
    "Couple Bliss",
    "Birthday / Party Package",
    "Squad Stay",
    "New Year Special",
  ];

  const packageDetails = {
    "Day Outing": {
      price: "₹999 / Person",
      features: [
        "Pool Access",
        "Music System",
        "Indoor & Outdoor Games",
        "Parking",
      ],
    },

    "One Night Stay": {
      price: "₹1999 / Person weekdays, ₹2499 / Person weekends",
      features: ["Private Pool", "AC Rooms", "BBQ Setup", "Music System"],
    },

    "Couple Bliss": {
      price: "₹5999 / Couple",
      features: ["Private Stay", "Pool Access", "Music Setup", "AC Rooms"],
    },

    "Birthday / Party Package": {
      price: "Custom Package",
      features: ["Party Setup", "Decoration", "Music", "Food Options"],
    },

    "Squad Stay": {
      price: "Custom Pricing",
      features: ["15–20 People", "Full Villa", "Games", "Custom Arrangements"],
    },

    "New Year Special": {
      price: "Custom Package",
      features: ["Premium Celebration", "DJ", "Decoration", "Limited Slots"],
    },
  };

  const offerOptions = [
    "None",
    "Early Booking Offer (10% OFF)",
    "Group Booking Discount (5% OFF)",
    "Free Cake",
    "Weekdays Deal (₹500 OFF)",
    "Couple Special",
    "New Year Special",
  ];

  const offerDetails = {
    "Early Booking Offer (10% OFF)": {
      title: "10% OFF",
      desc: "Valid on bookings made 30 days in advance.",
    },

    "Group Booking Discount (5% OFF)": {
      title: "5% OFF",
      desc: "Applicable for groups of 20+ guests.",
    },

    "Free Cake": {
      title: "FREE",
      desc: "Complimentary birthday cake.",
    },

    "Weekdays Deal (₹500 OFF)": {
      title: "₹500 OFF",
      desc: "Applicable on weekday bookings.",
    },

    "Couple Special": {
      title: "SPECIAL",
      desc: "Special pricing for couples.",
    },

    "New Year Special": {
      title: "PREMIUM",
      desc: "Exclusive New Year celebration package.",
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedPackage = packageDetails[formData.package];
const selectedOffer = offerDetails[formData.offer];
const formattedDate = formData.date
  ? new Date(formData.date).toLocaleDateString("en-GB")
  : "";
const message = `*KRISHA VILLA BOOKING REQUEST*

━━━━━━━━━━━━━━━━━━━━━━

► Name: ${formData.name}

► Phone: ${formData.phone}

► Check-in Date: ${formattedDate}

► Guests: ${formData.guests}

► Package:
${formData.package || "Not Selected"}

${selectedPackage ? `Price: ${selectedPackage.price}` : ""}

${selectedPackage ? `Includes:
${selectedPackage.features.map((item) => `• ${item}`).join("\n")}` : ""}

━━━━━━━━━━━━━━━━━━━━━━

► Offer:
${formData.offer || "None"}

${selectedOffer ? `Benefit: ${selectedOffer.title}` : ""}

${selectedOffer ? `Description: ${selectedOffer.desc}` : ""}

━━━━━━━━━━━━━━━━━━━━━━

► Special Request:
${formData.message || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━

Please share:

✓ Availability

✓ Final Pricing

✓ Booking Details

Looking forward to your response.

Thank you!`;

    const whatsappUrl = `https://wa.me/918766550789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to book your stay? Contact us today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] bg-[#faf5ed]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] bg-[#faf5ed]"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-2">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={new Date().toISOString().split("T")[0]}
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] bg-[#faf5ed]"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block text-gray-700 mb-2">
                    Number of Guests *
                  </label>

                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    required
                    min="1"
                    max="100"
                    placeholder="e.g. 12"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] bg-[#faf5ed]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Package */}
                <div>
                  <label htmlFor="package" className="block text-gray-700 mb-2">
                    Choose Your Package *
                  </label>

                  <select
                    id="package"
                    required
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] bg-[#faf5ed]"
                  >
                    <option value="">Select Package</option>

                    {packageOptions.map((pkg) => (
                      <option key={pkg} value={pkg}>
                        {pkg}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Offer */}
                <div>
                  <label htmlFor="offer" className="block text-gray-700 mb-2">
                    Apply an Offer (Optional)
                  </label>

                  <select
                    id="offer"
                    name="offer"
                    value={formData.offer}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] bg-[#faf5ed]"
                  >
                    <option value="">Select Offer</option>

                    {offerOptions.map((offer) => (
                      <option key={offer} value={offer}>
                        {offer}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {formData.package &&
  packageDetails[formData.package] && (
    <div className="mt-6 rounded-2xl border border-[#d4af37]/30 bg-[#faf5ed] p-5">

      <span className="inline-flex bg-[#1a4d2e] text-white px-3 py-1 rounded-full text-xs font-semibold">
        Selected Package
      </span>

      <h3 className="mt-3 text-xl font-bold text-[#1a4d2e]">
        📦 {formData.package}
      </h3>

      <p className="mt-1 text-[#d4af37] font-bold">
        {packageDetails[formData.package].price}
      </p>

      <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
        {packageDetails[formData.package].features.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>

    </div>
)}

{formData.offer &&
  formData.offer !== "None" &&
  offerDetails[formData.offer] && (
    <div className="mt-5 rounded-2xl border border-[#25D366]/30 bg-[#eef8f1] p-5">

      <span className="inline-flex bg-[#25D366] text-white px-3 py-1 rounded-full text-xs font-semibold">
        Selected Offer
      </span>

      <h3 className="mt-3 text-lg font-bold text-[#1a4d2e]">
        🎁 {formData.offer}
      </h3>

      <p className="mt-1 text-[#25D366] font-bold">
        {offerDetails[formData.offer].title}
      </p>

      <p className="mt-2 text-sm text-gray-700">
        {offerDetails[formData.offer].desc}
      </p>

      <p className="mt-4 text-xs text-orange-600 font-medium">
        ⚠️ Mention this offer while booking to avail the benefit.
      </p>

    </div>
)}

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] bg-[#faf5ed] resize-none"
                  placeholder="Please mention if you require BBQ setup, decoration setup, food preferences, music arrangements, or any other special requests."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a4d2e] text-white px-8 py-4 rounded-full hover:bg-[#133a22] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Check Availability on WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-[#faf5ed] rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1a4d2e] rounded-full flex items-center justify-center">
                  <MapPin className="text-[#d4af37]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a4d2e] mb-1">Address</h4>
                  <p className="text-gray-700">Gudhavan, Karjat 410201</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1a4d2e] rounded-full flex items-center justify-center">
                  <Phone className="text-[#d4af37]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a4d2e] mb-1">Call / SMS</h4>
                  <a
                    href="tel:+918766550789"
                    className="text-gray-700 hover:text-[#1a4d2e] transition-colors block"
                  >
                    +91 87665 50789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1a4d2e] rounded-full flex items-center justify-center">
                  <svg
                    className="text-[#d4af37]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1a4d2e] mb-2">WhatsApp</h4>
                  <div className="space-y-2">
                    <a
                      href="https://wa.me/918766550789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#25D366] transition-colors block"
                    >
                      +91 87665 50789
                    </a>
                    <a
                      href="https://wa.me/918605957962"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#25D366] transition-colors block"
                    >
                      +91 86059 57962
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://wa.me/918766550789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#25D366] text-white text-center px-4 py-3 rounded-full hover:bg-[#20BA5A] transition-all shadow-md text-sm font-medium"
                >
                  WhatsApp 1
                </a>
                <a
                  href="https://wa.me/918605967962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#25D366] text-white text-center px-4 py-3 rounded-full hover:bg-[#20BA5A] transition-all shadow-md text-sm font-medium"
                >
                  WhatsApp 2
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.844538647539!2d73.38662917497608!3d19.0265708821679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f74e2f1da5a5%3A0xf0be811296fd6f10!2sKrisha%20Villa!5e0!3m2!1sen!2sin!4v1782976202833!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Krisha Villa Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
