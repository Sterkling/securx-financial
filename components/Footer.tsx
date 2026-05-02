import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const serviceAreas = [
    "London",
    "Woodstock",
    "Brantford",
    "Kitchener",
    "Hamilton",
    "Cambridge",
    "Guelph",
  ];

  const industries = [
    { name: "Bars & Nightclubs", href: "/industries/bars" },
    { name: "Cannabis Dispensaries", href: "/industries/dispensaries" },
    { name: "Convenience Stores", href: "/industries/convenience-stores" },
    { name: "Restaurants", href: "/industries/restaurants" },
    { name: "Gas Stations", href: "/industries/gas-stations" },
  ];

  return (
    <footer className="bg-black text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-blue text-3xl font-heading tracking-tight">
                SECURX
              </span>
              <br />
              <span className="text-white text-sm font-heading tracking-wider">
                FINANCIAL
              </span>
            </div>
            <p className="text-gray text-sm mb-4">
              Fast, reliable ATM solutions for businesses across Southwestern Ontario.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading text-xl mb-4 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray hover:text-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray hover:text-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-gray hover:text-blue transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray hover:text-blue transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray hover:text-blue transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray hover:text-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-heading text-xl mb-4 uppercase">
              Service Areas
            </h3>
            <ul className="space-y-2 text-sm">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-gray">{area}, ON</span>
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="text-blue hover:text-gold transition-colors text-sm font-semibold mt-3 inline-block"
            >
              View All Areas →
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading text-xl mb-4 uppercase">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="text-blue mt-1" />
                <div>
                  <a href="tel:+15192819923" className="text-gray hover:text-white transition-colors block">
                    Demetri: 519-281-9923
                  </a>
                  <a href="tel:+15195358309" className="text-gray hover:text-white transition-colors block">
                    Eleas: 519-535-8309
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="text-blue mt-1" />
                <a href="mailto:securxf@gmail.com" className="text-gray hover:text-white transition-colors">
                  securxf@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-blue mt-1" />
                <span className="text-gray">London, ON</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Industries Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-white font-heading text-lg mb-4 uppercase">
            ATM Solutions For:
          </h4>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="text-gray hover:text-blue transition-colors text-sm"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} SecurX Financial Inc. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-gray hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/admin" className="text-gray/50 hover:text-white transition-colors text-xs">
              admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
