"use client";

import React, { useState } from "react";
import { troubleshootingData } from "@/data/troubleshooting";

export const TroubleshootingChecklist: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState<string>("water leaking");

  const currentItem =
    troubleshootingData.find((item) => item.issueKey === selectedIssue) ||
    troubleshootingData[0];

  return (
    <div className="bg-white border border-[#CFE6E2] rounded-lg p-6 space-y-6">
      
      <div className="space-y-1">
        <h3 className="font-serif text-xl font-bold text-[#10201D]">
          RO Troubleshooting Checklist
        </h3>
        <p className="text-xs text-[#43554F]">
          Click on any common purifier fault below to see immediate safety steps and resolution advice.
        </p>
      </div>

      {/* Tabs / Checklist selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {troubleshootingData.map((item) => {
          const isActive = item.issueKey === selectedIssue;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedIssue(item.issueKey)}
              className={`p-3 text-xs font-semibold rounded-md text-center min-h-[44px] transition-colors border ${
                isActive
                  ? "bg-[#0E5C56] text-white border-[#0E5C56]"
                  : "bg-[#FBFDFC] text-[#10201D] border-[#CFE6E2] hover:bg-[#E7F3F1]"
              }`}
            >
              {item.issueKey}
            </button>
          );
        })}
      </div>

      {/* Detail Resolution View */}
      <div className="bg-[#E7F3F1] border border-[#CFE6E2] rounded-lg p-5 space-y-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#CFE6E2] pb-3">
          <h4 className="font-serif text-lg font-bold text-[#10201D]">
            {currentItem.title}
          </h4>
          <span
            className={`text-[11px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider self-start sm:self-auto ${
              currentItem.severity === "high"
                ? "bg-red-100 text-red-800 border border-red-200"
                : "bg-amber-100 text-amber-900 border border-amber-200"
            }`}
          >
            {currentItem.severity} urgency
          </span>
        </div>

        <div className="text-xs text-[#43554F] space-y-1">
          <strong className="text-[#10201D] block">Observed symptoms:</strong>
          <p className="italic">{currentItem.symptoms}</p>
        </div>

        {/* Possible Causes */}
        <div className="space-y-1.5">
          <strong className="text-xs text-[#10201D] block">Most common causes:</strong>
          <ul className="space-y-1 text-xs text-[#43554F]">
            {currentItem.possibleCauses.map((cause, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#0E5C56] font-bold">•</span>
                <span>{cause}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick DIY Checklist */}
        <div className="bg-white p-4 rounded border border-[#CFE6E2] space-y-2">
          <strong className="text-xs text-[#0E5C56] font-bold block uppercase tracking-wider">
            Immediate Action Steps:
          </strong>
          <ol className="space-y-1.5 text-xs text-[#10201D] list-decimal list-inside">
            {currentItem.quickChecklist.map((step, idx) => (
              <li key={idx} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#43554F] leading-relaxed">
            {currentItem.actionRecommendation}
          </p>
          <a
            href={`/contact?issue=${encodeURIComponent(currentItem.issueKey)}`}
            className="btn-primary text-xs py-2.5 px-4 shrink-0 w-full sm:w-auto text-center"
          >
            Book technician visit
          </a>
        </div>

      </div>

    </div>
  );
};
