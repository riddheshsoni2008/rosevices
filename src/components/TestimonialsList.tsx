"use client";

import React, { useState } from "react";
import { reviewData, ReviewItem } from "@/data/reviews";

export const TestimonialsList: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredReviews = reviewData.filter((r) => {
    if (filter === "all") return true;
    if (filter === "repair") return r.serviceType.toLowerCase().includes("repair");
    if (filter === "amc") return r.serviceType.toLowerCase().includes("amc");
    if (filter === "purchase") return r.serviceType.toLowerCase().includes("purchase");
    return true;
  });

  return (
    <div className="space-y-6">
      
      {/* Category filter */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#CFE6E2] pb-4">
        {[
          { key: "all", label: "All Customer Reviews" },
          { key: "repair", label: "Repair Services" },
          { key: "amc", label: "Annual Contracts (AMC)" },
          { key: "purchase", label: "Purifier Sales" },
        ].map((btn) => {
          const isActive = filter === btn.key;
          return (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] transition-colors border ${
                isActive
                  ? "bg-[#0E5C56] text-white border-[#0E5C56]"
                  : "bg-white text-[#10201D] border-[#CFE6E2] hover:bg-[#E7F3F1]"
              }`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Clean testimonial list */}
      <div className="space-y-4">
        {filteredReviews.map((rev) => (
          <article
            key={rev.id}
            className="bg-white border border-[#CFE6E2] rounded-lg p-6 space-y-3 transition-colors hover:border-[#0E5C56]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#CFE6E2]/40 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-base font-bold text-[#10201D]">
                    {rev.name}
                  </h3>
                  {rev.verified && (
                    <span className="text-[10px] font-semibold text-[#0E5C56] bg-[#E7F3F1] px-2 py-0.5 rounded border border-[#CFE6E2]">
                      Verified Customer
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#43554F] mt-0.5">
                  {rev.location}
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Star rating */}
                <div className="flex items-center text-[#C98A2E] text-sm">
                  {"★".repeat(rev.rating)}
                </div>
                <span className="text-xs text-[#43554F]">
                  {rev.date}
                </span>
              </div>
            </div>

            {/* Service tag */}
            <div className="inline-block text-[11px] font-medium text-[#0E5C56] bg-[#E7F3F1] px-2.5 py-0.5 rounded">
              Service: {rev.serviceType}
            </div>

            {/* Quote */}
            <blockquote className="text-xs sm:text-sm text-[#10201D] leading-relaxed italic border-l-2 border-[#0E5C56] pl-3 py-0.5">
              "{rev.quote}"
            </blockquote>
          </article>
        ))}
      </div>

    </div>
  );
};
