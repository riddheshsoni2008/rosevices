"use client";

import React, { useState, useEffect } from "react";

export const Navbar: React.FC<{ currentPath?: string }> = ({
  currentPath = "/",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services & Pricing", href: "/services" },
    { label: "Customer Support", href: "/help" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FBFDFC]/95 backdrop-blur-md py-3 border-b border-[#CFE6E2] shadow-sm"
          : "bg-[#FBFDFC] py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-[#0E5C56] flex items-center justify-center text-white font-serif font-bold text-xl group-hover:bg-[#1D7A72] transition-colors">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-[#10201D]">
              Jalcare RO
            </span>
            <span className="text-[11px] text-[#43554F] font-normal leading-none">
              Sales & Repair Specialists
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#0E5C56] font-semibold border-b-2 border-[#0E5C56] pb-1"
                    : "text-[#43554F] hover:text-[#0E5C56]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Call/Book Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+917499933452"
            className="btn-secondary text-sm px-4 py-2"
          >
            Call now
          </a>
          <a href="/contact" className="btn-primary text-sm px-4 py-2">
            Book a repair
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] p-2 text-[#10201D] hover:text-[#0E5C56] rounded-md focus:outline-none border border-[#CFE6E2]"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Collapse Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#CFE6E2] bg-[#FBFDFC] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-base font-medium text-[#10201D] hover:bg-[#E7F3F1] rounded-md min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#CFE6E2] flex flex-col gap-2.5">
            <a
              href="tel:+917499933452"
              className="btn-secondary w-full text-center py-2.5"
            >
              Call now
            </a>
            <a
              href="/contact"
              className="btn-primary w-full text-center py-2.5"
            >
              Book a repair
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
