"use client";

import React from "react";
import { BookingForm } from "@/components/BookingForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FBFDFC]">
      
      {/* Header */}
      <section className="bg-[#E7F3F1] py-12 sm:py-16 border-b border-[#CFE6E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3">
          <span className="text-xs font-semibold text-[#0E5C56] uppercase tracking-wider block">
            Doorstep Booking & Support
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#10201D]">
            Book a repair call or visit our service center
          </h1>
          <p className="text-sm text-[#43554F] max-w-2xl leading-relaxed">
            Fill out our quick booking form for doorstep repair within 2 hours, or call our emergency desk directly.
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
              <div className="bg-white border border-[#CFE6E2] rounded-lg p-6 space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#10201D]">
                  Jalcare Service Center
                </h3>

                <div className="space-y-3 text-xs text-[#10201D]">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded bg-[#E7F3F1] text-[#0E5C56] flex items-center justify-center font-bold text-sm shrink-0">
                      📍
                    </span>
                    <div>
                      <strong className="block font-semibold">Store & Workshop Address:</strong>
                      <p className="text-[#43554F]">
                        Shop No. 12, Jalcare Water Plaza, Sector 14 Main Road, Landmark: Near Central Bank Branch.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded bg-[#E7F3F1] text-[#0E5C56] flex items-center justify-center font-bold text-sm shrink-0">
                      📞
                    </span>
                    <div>
                      <strong className="block font-semibold">Emergency Desk Phone:</strong>
                      <p className="text-[#43554F]">
                        <a href="tel:+919876543210" className="hover:text-[#0E5C56] underline">
                          +91 98765 43210
                        </a>{" "}
                        /{" "}
                        <a href="tel:+919876543211" className="hover:text-[#0E5C56] underline">
                          +91 98765 43211
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded bg-[#E7F3F1] text-[#0E5C56] flex items-center justify-center font-bold text-sm shrink-0">
                      ✉️
                    </span>
                    <div>
                      <strong className="block font-semibold">Support Email:</strong>
                      <p className="text-[#43554F]">support@jalcarero.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded bg-[#E7F3F1] text-[#0E5C56] flex items-center justify-center font-bold text-sm shrink-0">
                      🕒
                    </span>
                    <div>
                      <strong className="block font-semibold">Service Desk Hours:</strong>
                      <p className="text-[#43554F]">Monday – Sunday: 8:00 AM to 8:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#CFE6E2]">
                  <strong className="text-xs text-[#0E5C56] block mb-1">
                    Doorstep Service Coverage Zones:
                  </strong>
                  <p className="text-[11px] text-[#43554F] leading-relaxed">
                    Sector 1 to 24, Riverside Enclave, Green Park Colony, Sunrise Hub, Mayur Vihar, City Center, and surrounding 15 km radius.
                  </p>
                </div>
              </div>

              {/* Interactive Visual Map Card */}
              <div className="bg-[#E7F3F1] border border-[#CFE6E2] rounded-lg p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-sm font-bold text-[#10201D]">
                    Service Center Map & Location
                  </h4>
                  <span className="text-[10px] font-semibold text-[#0E5C56] bg-white px-2 py-0.5 rounded border border-[#CFE6E2]">
                    Open Today
                  </span>
                </div>

                {/* Styled SVG Map Representation */}
                <div className="w-full h-48 bg-white border border-[#CFE6E2] rounded-md overflow-hidden relative flex items-center justify-center">
                  {/* Grid map background representation */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(#0E5C56 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  ></div>

                  {/* Map Roads & Pin */}
                  <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 200">
                    <path
                      d="M 20 100 Q 150 40 380 120"
                      stroke="#CFE6E2"
                      strokeWidth="8"
                      fill="none"
                    />
                    <path
                      d="M 200 10 L 200 190"
                      stroke="#CFE6E2"
                      strokeWidth="6"
                      fill="none"
                    />
                    <path
                      d="M 50 160 Q 200 120 350 30"
                      stroke="#E7F3F1"
                      strokeWidth="5"
                      fill="none"
                    />
                  </svg>

                  {/* Center Location Pin */}
                  <div className="relative z-10 flex flex-col items-center animate-bounce">
                    <div className="w-8 h-8 rounded-full bg-[#0E5C56] text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                      📍
                    </div>
                    <span className="bg-[#10201D] text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow mt-1 whitespace-nowrap">
                      Jalcare RO Workshop
                    </span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-xs py-2 text-center block"
                >
                  Get directions on Google Maps
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
