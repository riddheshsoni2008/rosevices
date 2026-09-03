"use client";

import React from "react";
import { TestimonialsList } from "@/components/TestimonialsList";
import { CtaBanner } from "@/components/CtaBanner";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#FBFDFC]">
      
      {/* Header */}
      <section className="bg-[#E7F3F1] py-12 sm:py-16 border-b border-[#CFE6E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3">
          <span className="text-xs font-semibold text-[#0E5C56] uppercase tracking-wider block">
            Verified Testimonials
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#10201D]">
            What local households and businesses say about Jalcare
          </h1>
          <p className="text-sm text-[#43554F] max-w-2xl leading-relaxed">
            Real feedback from local residents who trust us for emergency repairs, filter maintenance, and pure drinking water.
          </p>
        </div>
      </section>

      {/* Main Reviews List Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8 p-6 bg-white border border-[#CFE6E2] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-3xl font-bold text-[#10201D]">
                  4.9
                </span>
                <div>
                  <div className="flex items-center text-[#C98A2E] text-base">
                    ★★★★★
                  </div>
                  <span className="text-xs text-[#43554F]">
                    Based on 1,240+ verified local doorstep visits
                  </span>
                </div>
              </div>
            </div>
            <a href="/contact" className="btn-primary text-xs py-2.5 px-4">
              Book doorstep service
            </a>
          </div>

          <TestimonialsList />

        </div>
      </section>

      <CtaBanner />

    </div>
  );
}
