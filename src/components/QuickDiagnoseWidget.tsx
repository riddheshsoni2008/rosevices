"use client";

import React, { useState } from "react";

interface SymptomOption {
  id: string;
  label: string;
  iconSvg: React.ReactNode;
  diagnosisTitle: string;
  explanation: string;
  estimatedCost: string;
  actionText: string;
  actionHref: string;
}

export const QuickDiagnoseWidget: React.FC = () => {
  const symptoms: SymptomOption[] = [
    {
      id: "leak",
      label: "Water leaking from bottom",
      iconSvg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.023.547l-1.6 1.6a2 2 0 001.414 3.414h15.218a2 2 0 001.414-3.414l-1.6-1.6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v9m0 0l-2-2m2 2l2-2" />
        </svg>
      ),
      diagnosisTitle: "Worn housing O-ring gasket or tube connector crack",
      explanation: "Continuous dripping usually indicates a worn silicone ring inside the pre-filter housing or a loose poly-tube elbow joint.",
      estimatedCost: "₹299 – ₹450 (includes seals & visit)",
      actionText: "Book leak repair",
      actionHref: "/contact?issue=Water+Leaking",
    },
    {
      id: "taste",
      label: "Bad taste or salty water",
      iconSvg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
      diagnosisTitle: "Exhausted carbon cartridge or high TDS membrane bypass",
      explanation: "Bitter or salty taste means raw salt ions are passing through an aged RO membrane or the activated post-carbon filter has lost absorption.",
      estimatedCost: "₹650 – ₹1,450 (cartridge or membrane)",
      actionText: "Book a TDS check",
      actionHref: "/contact?issue=Bad+Taste",
    },
    {
      id: "flow",
      label: "Slow water flow or empty tank",
      iconSvg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      diagnosisTitle: "Choked sediment pre-filter or low booster pump pressure",
      explanation: "Fine silt buildup restricts inlet water pressure. If raw tap flow is normal, replacing choked pre-filters restores full tank filling speed.",
      estimatedCost: "₹299 – ₹650 (filter replacement)",
      actionText: "Schedule flow fix",
      actionHref: "/contact?issue=Low+Pressure",
    },
    {
      id: "light",
      label: "Red light glowing or beeping",
      iconSvg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      diagnosisTitle: "UV lamp failure or auto-cutoff pressure safety trip",
      explanation: "Red flashing lights or continuous chimes alert you that UV disinfection is inactive or inlet pressure dropped below safe limits.",
      estimatedCost: "₹299 visit / UV ballast replacement",
      actionText: "Fix red light issue",
      actionHref: "/contact?issue=Red+Light+Alarm",
    },
  ];

  const [selectedId, setSelectedId] = useState<string>("leak");
  const activeSymptom = symptoms.find((s) => s.id === selectedId) || symptoms[0];

  return (
    <div className="bg-white border border-[#CFE6E2] rounded-lg p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#CFE6E2]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#C98A2E]"></div>
        <h3 className="font-serif text-lg font-semibold text-[#10201D]">
          What's wrong with my RO?
        </h3>
      </div>

      <p className="text-xs text-[#43554F] mb-4">
        Select the symptom your water purifier is showing for instant diagnosis:
      </p>

      {/* Symptom Selection Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
        {symptoms.map((symptom) => {
          const isSelected = symptom.id === selectedId;
          return (
            <button
              key={symptom.id}
              onClick={() => setSelectedId(symptom.id)}
              className={`flex items-center gap-2.5 p-3 rounded-md text-left text-xs font-medium min-h-[44px] transition-colors border ${
                isSelected
                  ? "bg-[#E7F3F1] border-[#0E5C56] text-[#0E5C56] font-semibold"
                  : "bg-[#FBFDFC] border-[#CFE6E2] text-[#10201D] hover:bg-[#E7F3F1]/60"
              }`}
            >
              <span className={isSelected ? "text-[#0E5C56]" : "text-[#43554F]"}>
                {symptom.iconSvg}
              </span>
              <span>{symptom.label}</span>
            </button>
          );
        })}
      </div>

      {/* Diagnosis Output Box */}
      <div className="bg-[#E7F3F1] border border-[#CFE6E2] rounded-md p-4 space-y-2.5">
        <div className="flex items-start justify-between gap-2">
          <span className="text-[11px] font-medium text-[#0E5C56] bg-white px-2 py-0.5 rounded border border-[#CFE6E2]">
            Probable cause
          </span>
          <span className="text-xs font-semibold text-[#10201D]">
            {activeSymptom.estimatedCost}
          </span>
        </div>

        <h4 className="font-serif text-sm font-bold text-[#10201D]">
          {activeSymptom.diagnosisTitle}
        </h4>

        <p className="text-xs text-[#43554F] leading-relaxed">
          {activeSymptom.explanation}
        </p>

        <div className="pt-2">
          <a
            href={activeSymptom.actionHref}
            className="btn-primary w-full text-xs py-2.5 flex items-center justify-center gap-1.5"
          >
            {activeSymptom.actionText}
          </a>
        </div>
      </div>
    </div>
  );
};
