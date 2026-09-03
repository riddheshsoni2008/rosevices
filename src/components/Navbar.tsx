"use client";

import React, { useState, useEffect } from "react";

export const Navbar: React.FC<{ currentPath?: string }> = ({ currentPath = "/" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services & Pricing", href: "/services" },
    { label: "Support", href: "/help" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg py-3 border-b border-slate-200 shadow-sm"
          : "bg-white py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2.5 group focus:outline-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#0F766E] flex items-center justify-center text-white font-serif font-bold text-xl shadow-md group-hover:shadow-lg transition-shadow">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-[#0F172A]">
              Jalcare RO
            </span>
            <span className="text-[10px] text-[#475569] font-medium leading-none tracking-wide">
              Water Purifier Experts
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#475569] hover:text-[#0D9488] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+917499933452" className="text-sm font-medium text-[#475569] hover:text-[#0D9488] transition-colors">
            📞 74999 33452
          </a>
          <a
            href="https://wa.me/917499933452?text=Hi%20Jalcare%20RO%2C%20I%20need%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm font-semibold rounded-xl transition-all shadow-sm hover:shadow-md flex items-center gap-1.5"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] p-2 text-[#0F172A] hover:text-[#0D9488] rounded-xl focus:outline-none border border-slate-200"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-3 text-base font-medium text-[#0F172A] hover:bg-[#F0FDFA] rounded-xl flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <a href="tel:+917499933452" className="btn-secondary w-full text-center py-3 rounded-xl">
              📞 Call +91 74999 33452
            </a>
            <a
              href="https://wa.me/917499933452?text=Hi%20Jalcare%20RO%2C%20I%20need%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl transition-colors"
            >
              💬 WhatsApp Booking
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
