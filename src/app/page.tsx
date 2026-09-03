"use client";

import React from "react";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceHighlights } from "@/components/ServiceHighlights";
import { CtaBanner } from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ── CINEMATIC HERO with Background Image ── */}
      <section className="relative min-h-[88vh] flex items-center hero-animate">
        {/* BG Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/75 to-[#0F172A]/40"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl space-y-6">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Doorstep Service Available — 2 Hour Response
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1]">
              Your family deserves
              <span className="block text-emerald-400">pure, safe water</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
              Expert RO water purifier repair, genuine filter replacement, TDS calibration,
              and affordable annual maintenance — all at your doorstep within 2 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                href="https://wa.me/917499933452?text=Hi%20Jalcare%20RO%2C%20I%20want%20to%20book%20a%20doorstep%20RO%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                Book on WhatsApp
              </a>
              <a href="tel:+917499933452" className="px-7 py-3.5 sm:py-4 bg-white/10 backdrop-blur hover:bg-white/20 text-white font-semibold rounded-xl text-sm sm:text-base border border-white/20 transition-all flex items-center justify-center gap-2">
                📞 Call +91 74999 33452
              </a>
            </div>

            {/* Trust strip */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/15 max-w-md">
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-white block">2 Hr</span>
                <span className="text-[11px] text-slate-400">Doorstep arrival</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-white block">4.9★</span>
                <span className="text-[11px] text-slate-400">1,200+ families</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-white block">100%</span>
                <span className="text-[11px] text-slate-400">Genuine parts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              From emergency leak repairs to complete membrane replacement and
              annual maintenance contracts (AMC).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Doorstep Repair */}
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                {/* Visual Header Graphic */}
                <div className="h-44 bg-gradient-to-br from-[#0F766E] to-[#115E59] p-5 flex flex-col justify-between text-white relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold bg-white/20 px-2.5 py-0.5 rounded-full text-white">
                      Doorstep Repair
                    </span>
                    <span className="text-xs font-bold text-emerald-300">
                      ₹299 Visit
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl mb-2">
                      🛠️
                    </div>
                    <h4 className="font-serif text-lg font-bold text-white">
                      Diagnostic & Repair
                    </h4>
                    <p className="text-xs text-teal-100">
                      Low flow, leakage, or unusual pump noise fix
                    </p>
                  </div>
                </div>

                <div className="p-6 text-left space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                    Expert Doorstep Repair
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Fast diagnostic check for low flow, motor noise, water
                    leakage, or bad water taste.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 text-left">
                <a
                  href="https://wa.me/917499933452?text=Hi%20Jalcare%20RO%2C%20I%20need%20doorstep%20RO%20repair%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  Book Repair on WhatsApp →
                </a>
              </div>
            </div>

            {/* Card 2: Filter & Membrane Replacement */}
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                {/* Visual Header Graphic */}
                <div className="h-44 bg-gradient-to-br from-[#0D9488] to-[#0F766E] p-5 flex flex-col justify-between text-white relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold bg-white/20 px-2.5 py-0.5 rounded-full text-white">
                      Filter Spares
                    </span>
                    <span className="text-xs font-bold text-amber-300">
                      Food Grade
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl mb-2">
                      🧪
                    </div>
                    <h4 className="font-serif text-lg font-bold text-white">
                      75 GPD RO Membrane
                    </h4>
                    <p className="text-xs text-teal-100">
                      Sediment + Carbon + Copper Mineral Cartridge
                    </p>
                  </div>
                </div>

                <div className="p-6 text-left space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                    Genuine Filter & Membrane Change
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    High GPD food-grade RO membrane, pre-carbon, sediment
                    cartridge, and copper mineral filters.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 text-left">
                <a
                  href="https://wa.me/917499933452?text=Hi%20Jalcare%20RO%2C%20I%20need%20RO%20filter%20cartridge%20replacement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  Book Filter Change →
                </a>
              </div>
            </div>

            {/* Card 3: Annual AMC Maintenance */}
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                {/* Visual Header Graphic */}
                <div className="h-44 bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-5 flex flex-col justify-between text-white relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                      1-Year Warranty
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      Save ₹1,500
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl mb-2">
                      🛡️
                    </div>
                    <h4 className="font-serif text-lg font-bold text-white">
                      Complete AMC Contract
                    </h4>
                    <p className="text-xs text-slate-300">
                      Free filter replacement + unlimited repair visits
                    </p>
                  </div>
                </div>

                <div className="p-6 text-left space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                    Affordable Annual AMC Plans
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Hassle-free 1-year unlimited maintenance contracts including
                    free filter replacements and labor.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 text-left">
                <a
                  href="https://wa.me/917499933452?text=Hi%20Jalcare%20RO%2C%20I%20want%20details%20for%20RO%20Annual%20AMC%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
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
