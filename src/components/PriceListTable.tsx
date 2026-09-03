"use client";

import React, { useState } from "react";
import { serviceData, ServiceItem } from "@/data/services";

export const PriceListTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'repair' | 'amc' | 'product'>('all');

  const filteredServices = serviceData.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <div className="space-y-6">
      
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#CFE6E2] pb-4">
        {[
          { key: 'all', label: 'All Services & Products' },
          { key: 'repair', label: 'Repairs & Replacement Parts' },
          { key: 'amc', label: 'Annual Maintenance Contracts (AMC)' },
          { key: 'product', label: 'New Purifiers & Sales' },
        ].map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] transition-colors border ${
                isActive
                  ? "bg-[#0E5C56] text-white border-[#0E5C56]"
                  : "bg-white text-[#10201D] border-[#CFE6E2] hover:bg-[#E7F3F1]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Desktop Price Table */}
      <div className="hidden lg:block overflow-hidden border border-[#CFE6E2] rounded-lg bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#E7F3F1] border-b border-[#CFE6E2] text-xs font-semibold text-[#10201D]">
              <th className="py-3.5 px-5">Service / Product Name</th>
              <th className="py-3.5 px-4">Turnaround & Warranty</th>
              <th className="py-3.5 px-5">Included Features</th>
              <th className="py-3.5 px-4 text-right">Price</th>
              <th className="py-3.5 px-5 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#CFE6E2] text-xs text-[#10201D]">
            {filteredServices.map((item) => (
              <tr key={item.id} className="price-row-hover">
                <td className="py-4 px-5 align-top">
                  <div className="font-semibold text-sm text-[#10201D]">
                    {item.title}
                  </div>
                  <div className="text-[#43554F] mt-1 max-w-xs leading-relaxed">
                    {item.description}
                  </div>
                  {item.popular && (
                    <span className="inline-block mt-2 text-[10px] font-bold text-[#C98A2E] bg-[#C98A2E]/10 px-2 py-0.5 rounded border border-[#C98A2E]/30">
                      Most requested
                    </span>
                  )}
                </td>
                <td className="py-4 px-4 align-top whitespace-nowrap text-[#43554F]">
                  <span className="font-medium text-[#0E5C56] block">
                    {item.turnaround}
                  </span>
                  {item.period && (
                    <span className="text-[11px] text-[#43554F]">
                      ({item.period})
                    </span>
                  )}
                </td>
                <td className="py-4 px-5 align-top">
                  <ul className="space-y-1 text-[#43554F]">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#0E5C56] font-bold shrink-0">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-4 px-4 align-top text-right whitespace-nowrap">
                  <span className="font-serif text-lg font-bold text-[#0E5C56]">
                    {item.price}
                  </span>
                </td>
                <td className="py-4 px-5 align-top text-center whitespace-nowrap">
                  <a
                    href={`/contact?item=${encodeURIComponent(item.title)}`}
                    className="btn-primary text-xs py-2 px-3 inline-flex"
                  >
                    {item.category === 'product' ? 'Order purifier' : 'Book service'}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile & Tablet Reflowed Single-Column Cards (Clean border structure, touch-friendly min 44px) */}
      <div className="lg:hidden space-y-4">
        {filteredServices.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#CFE6E2] rounded-lg p-5 space-y-3 price-row-hover"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-serif text-base font-bold text-[#10201D]">
                  {item.title}
                </h3>
                <span className="text-xs text-[#0E5C56] font-medium block mt-0.5">
                  {item.turnaround}
                </span>
              </div>
              <div className="text-right shrink-0">
                <span className="font-serif text-lg font-bold text-[#0E5C56] block">
                  {item.price}
                </span>
                {item.period && (
                  <span className="text-[10px] text-[#43554F] block">
                    {item.period}
                  </span>
                )}
              </div>
            </div>

            <p className="text-xs text-[#43554F] leading-relaxed">
              {item.description}
            </p>

            <div className="bg-[#E7F3F1] p-3 rounded border border-[#CFE6E2]">
              <span className="text-[11px] font-semibold text-[#0E5C56] block mb-1.5">
                Key inclusions:
              </span>
              <ul className="space-y-1 text-xs text-[#10201D]">
                {item.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#0E5C56] font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-1">
              <a
                href={`/contact?item=${encodeURIComponent(item.title)}`}
                className="btn-primary w-full text-xs py-3 min-h-[44px]"
              >
                {item.category === 'product' ? 'Order purifier' : 'Book service'}
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
