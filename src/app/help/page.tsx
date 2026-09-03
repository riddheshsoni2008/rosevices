"use client";

import React from "react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { TroubleshootingChecklist } from "@/components/TroubleshootingChecklist";
import { CtaBanner } from "@/components/CtaBanner";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#FBFDFC]">
      
      {/* Header */}
      <section className="bg-[#E7F3F1] py-12 sm:py-16 border-b border-[#CFE6E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3">
          <span className="text-xs font-semibold text-[#0E5C56] uppercase tracking-wider block">
            Customer Support & Diagnostics
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#10201D]">
            Help center, FAQs, and RO troubleshooting guide
          </h1>z
          <p className="text-sm text-[#43554F] max-w-2xl leading-relaxed">
            Find fast answers about TDS levels, filter lifespan, maintenance schedules, and step-by-step DIY guidance for common purifier warnings.
          </p>
        </div>
      </section>

      {/* Troubleshooting Checklist Section */}
      <section className="py-12 sm:py-16 border-b border-[#CFE6E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TroubleshootingChecklist />
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-12 sm:py-16 bg-[#FBFDFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-left space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#10201D]">
              Frequently asked questions
            </h2>
            <p className="text-sm text-[#43554F]">
              Have questions about drinking water safety or our service process? Check our clear answers below.
            </p>
          </div>

          <FaqAccordion />

          <div className="p-6 bg-[#E7F3F1] border border-[#CFE6E2] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-base font-bold text-[#10201D]">
                Still need help with your water purifier?
              </h3>
              <p className="text-xs text-[#43554F]">
                Our local technicians are available on phone from 8 AM to 8:30 PM.
              </p>
            </div>
            <a href="tel:+919876543210" className="btn-primary text-xs py-2.5 px-4 shrink-0">
              Speak with a technician
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />

    </div>
  );
}
