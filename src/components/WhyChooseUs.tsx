import React from "react";

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      step: "01",
      title: "2-hour doorstep response guarantee",
      description: "Emergency repair requests booked before 4 PM receive guaranteed technician visit within 120 minutes across service zones.",
    },
    {
      step: "02",
      title: "100% genuine food-grade spare parts",
      description: "We install certified NSF-grade membranes, copper filters, and heavy booster pumps with direct manufacturer warranty.",
    },
    {
      step: "03",
      title: "Transparent upfront price list",
      description: "No surprise add-ons or hidden call-out fees. You review clear part and service costs before any work begins.",
    },
    {
      step: "04",
      title: "Certified local water technicians",
      description: "Background-checked professionals with over 8 years of experience servicing household RO, UV, UF, and commercial systems.",
    },
  ];

  return (
    <section className="bg-[#E7F3F1] py-16 sm:py-20 border-t border-b border-[#CFE6E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <span className="text-xs font-semibold text-[#0E5C56] uppercase tracking-wider block mb-2">
            Why households trust Jalcare
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#10201D] mb-3">
            Pure drinking water backed by honest doorstep service
          </h2>
          <p className="text-sm text-[#43554F] leading-relaxed">
            We built Jalcare RO to solve local drinking water problems without sales gimmicks or hidden charges.
          </p>
        </div>

        {/* Pillars structured with clean hairline grid borders (no soft shadow cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#CFE6E2] bg-white divide-y md:divide-y-0 md:divide-x divide-[#CFE6E2]">
          {pillars.map((item) => (
            <div key={item.step} className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-bold text-[#0E5C56]/40 block mb-3">
                  {item.step}
                </span>
                <h3 className="font-serif text-lg font-semibold text-[#10201D] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#43554F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
