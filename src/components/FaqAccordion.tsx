"use client";

import React, { useState } from "react";
import { faqData, FaqItem } from "@/data/faqs";

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("tds-ideal");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3">
      {faqData.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="border border-[#CFE6E2] rounded-lg bg-white overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif text-base font-semibold text-[#10201D] hover:bg-[#E7F3F1]/40 transition-colors focus:outline-none min-h-[44px]"
            >
              <span>{faq.question}</span>
              <span
                className={`w-6 h-6 rounded-full bg-[#E7F3F1] border border-[#CFE6E2] flex items-center justify-center text-[#0E5C56] font-bold text-sm shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-[#0E5C56] text-white border-[#0E5C56]" : ""
                }`}
              >
                ↓
              </span>
            </button>

            <div
              id={`faq-answer-${faq.id}`}
              className={`accordion-content ${isOpen ? "open" : ""}`}
            >
              <div className="accordion-inner px-5 pb-5 pt-1 text-xs sm:text-sm text-[#43554F] leading-relaxed border-t border-[#CFE6E2]/40 bg-[#FBFDFC]">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
