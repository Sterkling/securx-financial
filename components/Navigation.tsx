"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "SERVICES", href: "/services" },
    { name: "WHY US", href: "/why-us" },
    { name: "SERVICE AREAS", href: "/service-areas" },
    { name: "TESTIMONIALS", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="bg-black sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 focus:outline-none">
            <div className="flex flex-col leading-none">
              <span className="text-blue text-5xl sm:text-4xl lg:text-5xl font-heading tracking-tight">
                SECURX
              </span>
              <span className="text-white text-sm sm:text-sm font-heading tracking-wider">
                FINANCIAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-sm font-semibold hover:text-blue transition-colors uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}

            {/* Phone Number */}
            <a
              href="tel:+15192819923"
              className="flex items-center space-x-2 text-white hover:text-gold transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm font-semibold">519-281-9923</span>
            </a>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-blue text-black px-6 py-3 rounded-lg font-bold uppercase text-sm hover:bg-gold hover:text-white transition-colors"
            >
              GET A FREE ATM
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-4 text-white text-base font-semibold hover:bg-white/5 rounded uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Phone */}
            <a
              href="tel:+15192819923"
              className="flex items-center space-x-2 px-4 py-4 text-white hover:bg-white/5 rounded"
            >
              <Phone size={20} />
              <span className="text-base font-semibold">519-281-9923</span>
            </a>

            <Link
              href="/contact"
              className="block mx-4 mt-4 text-center bg-blue text-black px-6 py-4 rounded-lg font-bold uppercase text-base hover:bg-gold hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              GET A FREE ATM
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
