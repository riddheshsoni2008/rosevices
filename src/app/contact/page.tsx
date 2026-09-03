"use client";

import React from "react";
import { BookingForm } from "@/components/BookingForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Header */}
      <section className="bg-[#F0FDFA] py-12 sm:py-16 border-b border-[#CCFBF1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3">
          <span className="text-xs font-semibold text-[#0D9488] uppercase tracking-wider block">
            Doorstep Service & Contact
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Book a repair call or visit our service center
          </h1>
          <p className="text-sm text-[#475569] max-w-2xl leading-relaxed">
            Fill out our quick booking form for direct WhatsApp doorstep appointment within 2 hours, or call our team directly.
          </p>
        </div>
      </section>

      {/* Main Form & Business Info Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Booking Form */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>

            {/* Right: Map & Business Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Business Info Box */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-5 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#0F172A]">
                  Jalcare RO Service Desk
                </h3>

                <div className="space-y-4 text-xs text-[#0F172A]">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#F0FDFA] text-[#0D9488] flex items-center justify-center font-bold text-base shrink-0 border border-[#CCFBF1]">
                      📍
                    </span>
                    <div>
                      <strong className="block font-semibold text-sm text-[#0F172A] mb-0.5">Workshop & Service Address:</strong>
                      <p className="text-[#475569] text-xs leading-relaxed">
                        Shop No. 12, RO Service Plaza, Main Market Road, Near Central Landmark (Your City / Town).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#F0FDFA] text-[#0D9488] flex items-center justify-center font-bold text-base shrink-0 border border-[#CCFBF1]">
                      📞
                    </span>
                    <div>
                      <strong className="block font-semibold text-sm text-[#0F172A] mb-0.5">Service Desk Mobile:</strong>
                      <p className="text-[#475569] text-xs">
                        <a href="tel:+917499933452" className="hover:text-[#0D9488] font-medium text-sm underline">
                          +91 74999 33452
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#25D366]/10 text-[#128C7E] flex items-center justify-center font-bold text-base shrink-0 border border-[#25D366]/20">
                      💬
                    </span>
                    <div>
                      <strong className="block font-semibold text-sm text-[#0F172A] mb-0.5">WhatsApp Direct Booking:</strong>
                      <a
                        href="https://wa.me/917499933452?text=Hi%20Jalcare%20RO%2C%20I%20need%20doorstep%20RO%20water%20purifier%20repair%20service."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#128C7E] font-medium hover:underline text-xs"
                      >
                        Click to chat on WhatsApp (+91 74999 33452)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#F0FDFA] text-[#0D9488] flex items-center justify-center font-bold text-base shrink-0 border border-[#CCFBF1]">
                      🕒
                    </span>
                    <div>
                      <strong className="block font-semibold text-sm text-[#0F172A] mb-0.5">Working Hours:</strong>
                      <p className="text-[#475569] text-xs">Monday – Sunday: 8:00 AM to 8:30 PM (2-Hour Doorstep Response)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0]">
                  <strong className="text-xs text-[#0D9488] block mb-1 font-semibold">
                    Doorstep Service Coverage:
                  </strong>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    All major residential areas, apartments, societies, offices, and commercial establishments within a 15 km radius.
                  </p>
                </div>
              </div>

              {/* Interactive Visual Map Card */}
              <div className="bg-[#F0FDFA] border border-[#CCFBF1] rounded-xl p-5 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-sm font-bold text-[#0F172A]">
                    Service Center Location
                  </h4>
                  <span className="text-[10px] font-semibold text-[#0D9488] bg-white px-2 py-0.5 rounded border border-[#CCFBF1]">
                    Open Today
                  </span>
                </div>

                {/* Styled SVG Map Representation */}
                <div className="w-full h-44 bg-white border border-[#CCFBF1] rounded-lg overflow-hidden relative flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(#0D9488 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  ></div>

                  <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 200">
                    <path
                      d="M 20 100 Q 150 40 380 120"
                      stroke="#CCFBF1"
                      strokeWidth="8"
                      fill="none"
                    />
                    <path
                      d="M 200 10 L 200 190"
                      stroke="#CCFBF1"
                      strokeWidth="6"
                      fill="none"
                    />
                  </svg>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-[#0D9488] text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                      📍
                    </div>
                    <span className="bg-[#0F172A] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded shadow mt-1.5 whitespace-nowrap">
                      Jalcare RO Workshop
                    </span>
                  </div>
                </div>

                <a
                  href="https://wa.me/917499933452?text=Hi%20Jalcare%20RO%2C%20please%20share%20your%20workshop%20location."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-xs py-2.5 text-center block rounded-lg font-semibold"
                >
                  Get Location on WhatsApp
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
