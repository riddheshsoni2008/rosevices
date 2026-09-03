"use client";

import React from "react";
import { QuickDiagnoseWidget } from "@/components/QuickDiagnoseWidget";
import { WaveDivider } from "@/components/WaveDivider";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceHighlights } from "@/components/ServiceHighlights";
import { CtaBanner } from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFDFC]">
      
      {/* Asymmetric Hero Section */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-[#FBFDFC] hero-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Hero Left Column (Left-aligned content, sentence case headline, no em-dashes) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E7F3F1] border border-[#CFE6E2] text-xs font-medium text-[#0E5C56]">
                <span className="w-2 h-2 rounded-full bg-[#0E5C56]"></span>
                Certified local doorstep technicians
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10201D] leading-[1.15]">
                Clean, safe drinking water for your family without the repair hassle
              </h1>

              <p className="text-base sm:text-lg text-[#43554F] leading-relaxed max-w-2xl">
                Jalcare RO delivers prompt doorstep repair, genuine filter replacements, and affordable annual maintenance for all major water purifier brands within 2 hours.
              </p>

              {/* Action CTAs: plain, active-voice labels */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a href="/contact" className="btn-primary w-full sm:w-auto px-7 py-3 text.base">
                  Book a repair
                </a>
                <a href="/services" className="btn-secondary w-full sm:w-auto px-7 py-3 text-base">
                  View price list
                </a>
              </div>

              {/* Quick Trust Bar */}
              <div className="pt-6 border-t border-[#CFE6E2] grid grid-cols-3 gap-4 text-xs text-[#43554F]">
                <div>
                  <span className="font-serif font-bold text-base text-[#10201D] block">
                    120 mins
                  </span>
                  Average response time
                </div>
                <div>
                  <span className="font-serif font-bold text-base text-[#10201D] block">
                    4.9 / 5
                  </span>
                  From 1,200+ local homes
                </div>
                <div>
                  <span className="font-serif font-bold text-base text-[#10201D] block">
                    100%
                  </span>
                  Genuine food-grade spares
                </div>
              </div>

            </div>

            {/* Hero Right Column: Asymmetric Quick Diagnose Widget */}
            <div className="lg:col-span-5 w-full">
              <QuickDiagnoseWidget />
            </div>

          </div>
        </div>
      </section>

      {/* Subtle Wave Divider (Used ONCE here) */}
      <WaveDivider />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Primary Service Highlights */}
      <ServiceHighlights />

      {/* CTA Banner */}
      <CtaBanner />

    </div>
  );
}
