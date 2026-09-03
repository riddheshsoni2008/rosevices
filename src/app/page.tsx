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
                Pure, safe drinking water for your family with zero repair
                hassle
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
                Jalcare RO delivers doorstep repair, genuine filter cartridge
                replacements, TDS balancing, and annual AMC maintenance for
                Kent, Aquaguard, Pureit, and all major RO purifiers.
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
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-0.981z" />
                  </svg>
                  Book Service on WhatsApp
                </a>
                <a
                  href="tel:+917499933452"
                  className="btn-secondary w-full sm:w-auto px-7 py-3.5 text-base font-semibold rounded-xl"
                >
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

            {/* Hero Right Column: High End Vector RO Showcase & Quick Diagnose */}
            <div className="lg:col-span-5 w-full space-y-6">
              {/* Premium RO Machine Illustration Card */}
              <div className="bg-white p-5 rounded-2xl border border-[#CCFBF1] shadow-md overflow-hidden text-left relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#0D9488] bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#CCFBF1]">
                    💧 Premium RO Purifier Service
                  </span>
                  <span className="text-xs font-bold text-[#0F172A]">
                    Diagnostic ₹299
                  </span>
                </div>

                {/* Vector RO Machine Diagram */}
                <div className="w-full h-44 bg-gradient-to-tr from-[#0F766E] to-[#0D9488] rounded-xl relative overflow-hidden p-4 text-white flex items-center justify-between shadow-inner">
                  <div className="space-y-1.5 z-10">
                    <span className="text-[10px] tracking-widest uppercase bg-white/20 px-2 py-0.5 rounded font-semibold text-white">
                      Aqua Pure 8-Stage
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white">
                      Copper + Mineral RO
                    </h4>
                    <p className="text-xs text-teal-100 max-w-[160px]">
                      TDS balanced pure alkaline drinking water
                    </p>
                    <div className="pt-1 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      TDS Level: 45 PPM (Optimal)
                    </div>
                  </div>

                  {/* RO Purifier Body Graphic */}
                  <div className="w-28 h-36 bg-white/10 backdrop-blur-md rounded-lg border border-white/30 p-2.5 flex flex-col justify-between items-center relative shadow-lg shrink-0">
                    <div className="w-full bg-white/20 h-2 rounded-full mb-1"></div>
                    <div className="w-12 h-12 rounded-full border-2 border-emerald-300 flex items-center justify-center bg-white/10 my-auto">
                      <svg
                        className="w-7 h-7 text-emerald-300 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                      </svg>
                    </div>
                    <div className="w-full text-[9px] text-center text-teal-100 font-mono bg-black/20 py-0.5 rounded">
                      FILTER OK
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#475569] mt-3">
                  Free TDS water testing & 2-hour doorstep response guarantee
                  included with every visit.
                </p>
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
