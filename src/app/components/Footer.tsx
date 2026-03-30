import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Packages', href: '#packages' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a4d2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-white mb-1">Krisha Villa</h3>
              <p className="text-[#d4af37] text-sm tracking-wider uppercase">Karjat, Maharashtra</p>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Experience luxury living in the lap of nature. Krisha Villa offers the perfect blend 
              of modern comfort and natural serenity for your perfect getaway.
            </p>
            <div className="flex gap-4 flex-wrap">

  {/* Call */}
  <a
    href="tel:8766550789"
    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-all"
    title="Call Us"
  >
    <Phone size={20} />
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/krisha.villa"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all"
    title="Instagram"
  >
    <Instagram size={20} />
  </a>

  {/* Mail */}
  <a
    href="mailto:krishavillakarjat@gmail.com"
    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all"
    title="Email"
  >
    <Mail size={20} />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/918766550789"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-all"
    title="WhatsApp"
  >
    {/* WhatsApp SVG (same you used above) */}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
    </svg>
  </a>

</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/80 hover:text-[#d4af37] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#d4af37] flex-shrink-0 mt-1" />
                <span className="text-white/80 text-sm">
                  Gudhavan, Karjat 410201
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#d4af37] flex-shrink-0 mt-1" />
                <div className="text-white/80 text-sm">
                  <a href="tel:+918087536077" className="block hover:text-[#d4af37] transition-colors">
                    +91 80875 36077
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="text-[#d4af37] flex-shrink-0 mt-1" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <div className="text-white/80 text-sm space-y-1">
                  <a
                    href="https://wa.me/918087536077"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#d4af37] transition-colors"
                  >
                    +91 80875 36077
                  </a>
                  <a
                    href="https://wa.me/918605957962"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#d4af37] transition-colors"
                  >
                    +91 86059 57962
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Krisha Villa. All rights reserved. | Designed with ❤️ for luxury living
          </p>
        </div>
      </div>
    </footer>
  );
}