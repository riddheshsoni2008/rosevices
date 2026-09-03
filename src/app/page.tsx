"use client";

import React from "react";
import { QuickDiagnoseWidget } from "@/components/QuickDiagnoseWidget";
import { WaveDivider } from "@/components/WaveDivider";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceHighlights } from "@/components/ServiceHighlights";
import { CtaBanner } from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      
      {/* Hero Section with High Quality RO Service Visuals */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-gradient-to-b from-[#F0FDFA] to-[#F8FAFC] hero-animate border-b border-[#CCFBF1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] text-xs font-semibold text-[#0F766E] border border-[#99F6E4]">
                <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse"></span>
                Certified Doorstep RO Technicians • 2-Hour Response
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                Pure, safe drinking water for your family with zero repair hassle
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
                Jalcare RO delivers doorstep repair, genuine filter cartridge replacements, TDS balancing, and annual AMC maintenance for Kent, Aquaguard, Pureit, and all major RO purifiers.
              </p>

              {/* Direct Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://wa.me/917499933452?text=Hi%20Jalcare%20RO%2C%20I%20want%20to%20book%20a%20doorstep%20RO%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl text-base transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-0.981z"/>
                  </svg>
                  Book Service on WhatsApp
                </a>
                <a href="tel:+917499933452" className="btn-secondary w-full sm:w-auto px-7 py-3.5 text-base font-semibold rounded-xl">
                  Call +91 74999 33452
                </a>
              </div>

              {/* Trust Metrics */}
              <div className="pt-6 border-t border-[#CCFBF1] grid grid-cols-3 gap-4 text-xs text-[#475569]">
                <div>
                  <span className="font-serif font-bold text-xl text-[#0F172A] block">
                    120 Mins
                  </span>
                  Guaranteed arrival
                </div>
                <div>
                  <span className="font-serif font-bold text-xl text-[#0F172A] block">
                    4.9 ★★★★★
                  </span>
                  From 1,200+ homes
                </div>
                <div>
                  <span className="font-serif font-bold text-xl text-[#0F172A] block">
                    100%
                  </span>
                  Genuine food-grade spares
                </div>
              </div>

            </div>

            {/* Hero Right Column: Service Showcase & Quick Diagnose */}
            <div className="lg:col-span-5 w-full space-y-6">
              {/* Professional Visual Feature Card */}
              <div className="bg-white p-3 rounded-2xl border border-[#CCFBF1] shadow-md overflow-hidden group">
                <div className="relative h-64 rounded-xl overflow-hidden bg-[#F0FDFA]">
                  <img
                    src="https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=1000&q=80"
                    alt="Crystal Pure Drinking Water RO Purifier"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-3 rounded-lg border border-white/50 text-left shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0F172A]">Doorstep RO Repair & Diagnostic</span>
                      <span className="text-xs font-bold text-[#0D9488]">Starting ₹299</span>
                    </div>
                    <p className="text-[11px] text-[#475569] mt-0.5">Free water TDS testing included with every service visit</p>
                  </div>
                </div>
              </div>

              <QuickDiagnoseWidget />
            </div>

          </div>
        </div>
      </section>

      {/* Subtle Wave Divider */}
      <WaveDivider />

      {/* RO Service Gallery & Highlights Section */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#0D9488] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#CCFBF1]">
              Professional RO Workshop & Services
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0F172A]">
              Complete RO Water Purifier Solutions
            </h2>
            <p className="text-sm text-[#475569]">
              From emergency leak repairs to complete membrane replacement and annual maintenance contracts (AMC).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Technician Repair */}
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1000&q=80"
                  alt="Certified RO Technician Servicing Water Purifier"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-left space-y-2">
                <h3 className="font-serif text-lg font-bold text-[#0F172A]">Expert Doorstep Repair</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Fast diagnostic check for low flow, abnormal noise, water leakage, or bad water taste.
                </p>
                <a
                  href="https://wa.me/917499933452?text=Hi%20Jalcare%20RO%2C%20I%20need%20doorstep%20RO%20repair%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0D9488] hover:underline pt-2"
                >
                  Book Repair on WhatsApp →
                </a>
              </div>
            </div>

            {/* Card 2: Filter & Membrane Replacement */}
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Genuine RO Filter Cartridge Replacement"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-left space-y-2">
                <h3 className="font-serif text-lg font-bold text-[#0F172A]">Genuine Filter & Membrane Change</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  High GPD food-grade RO membrane, pre-carbon, sediment cartridge, and copper mineral filters.
                </p>
                <a
                  href="https://wa.me/917499933452?text=Hi%20Jalcare%20RO%2C%20I%20need%20RO%20filter%20cartridge%20replacement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0D9488] hover:underline pt-2"
                >
                  Book Filter Change →
                </a>
              </div>
            </div>

            {/* Card 3: AMC & New RO Sales */}
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=1000&q=80"
                  alt="Annual Maintenance Contract AMC & Copper RO Sales"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-left space-y-2">
                <h3 className="font-serif text-lg font-bold text-[#0F172A]">Affordable Annual AMC Plans</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Hassle-free 1-year unlimited maintenance contracts including free filter replacements and labor.
                </p>
                <a
                  href="https://wa.me/917499933452?text=Hi%20Jalcare%20RO%2C%20I%20want%20details%20for%20RO%20Annual%20AMC%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0D9488] hover:underline pt-2"
                >
                  Inquire AMC Details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Primary Service Highlights */}
      <ServiceHighlights />

      {/* CTA Banner */}
      <CtaBanner />

    </div>
  );
}
