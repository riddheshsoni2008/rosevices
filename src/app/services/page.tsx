"use client";

import React from "react";
import { PriceListTable } from "@/components/PriceListTable";
import { CtaBanner } from "@/components/CtaBanner";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FBFDFC]">
      
      {/* Header Section */}
      <section className="bg-[#E7F3F1] py-12 sm:py-16 border-b border-[#CFE6E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3">
          <span className="text-xs font-semibold text-[#0E5C56] uppercase tracking-wider block">
            Transparent Pricing & Rate List
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#10201D]">
            Services, repair charges, and new RO purifier pricing
          </h1>
          <p className="text-sm text-[#43554F] max-w-2xl leading-relaxed">
            All prices include technician visit, labor, and genuine parts warranty. No surprise diagnostic fees or hidden doorstep charges.
          </p>
        </div>
      </section>

      {/* Main Table Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PriceListTable />
        </div>
      </section>

      {/* Additional Guarantee Info */}
      <section className="py-12 bg-[#FBFDFC] border-t border-[#CFE6E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 border border-[#CFE6E2] rounded-lg bg-white">
              <h3 className="font-serif text-base font-bold text-[#10201D] mb-1">
                6-Month Warranty
              </h3>
              <p className="text-xs text-[#43554F]">
                All replaced RO membranes and electrical parts come with an unconditional 6-month replacement guarantee.
              </p>
            </div>
            <div className="p-5 border border-[#CFE6E2] rounded-lg bg-white">
              <h3 className="font-serif text-base font-bold text-[#10201D] mb-1">
                Free TDS Measurement
              </h3>
              <p className="text-xs text-[#43554F]">
                Our technician measures both raw tap water and purified water TDS before and after every service call.
              </p>
            </div>
            <div className="p-5 border border-[#CFE6E2] rounded-lg bg-white">
              <h3 className="font-serif text-base font-bold text-[#10201D] mb-1">
                Multi-Brand Support
              </h3>
              <p className="text-xs text-[#43554F]">
                We service all major brands: Kent, Aquaguard, Pureit, Havells, Livpure, Blue Star, LG, and local RO assemblies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />

    </div>
  );
}
