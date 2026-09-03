import React from "react";

export const ServiceHighlights: React.FC = () => {
  const highlights = [
    {
      title: "Doorstep Repair & Diagnosis",
      price: "₹299 per visit",
      turnaround: "Within 2 hours",
      description: "Comprehensive 12-point health check, leak fix, and raw water TDS calibration.",
      actionLabel: "Book a repair",
      actionHref: "/contact?service=Repair",
    },
    {
      title: "Annual Maintenance (AMC)",
      price: "From ₹2,499 / year",
      turnaround: "Quarterly visits",
      description: "Year-round protection with free filter changes, emergency calls, and zero hidden fees.",
      actionLabel: "Compare AMC plans",
      actionHref: "/services#amc",
    },
    {
      title: "Jalcare Copper RO System",
      price: "₹11,499 complete unit",
      turnaround: "Free next-day setup",
      description: "8-stage purification enriched with active copper minerals and real-time digital TDS display.",
      actionLabel: "View RO models",
      actionHref: "/services#products",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FBFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl text-left">
            <span className="text-xs font-semibold text-[#0E5C56] uppercase tracking-wider block mb-2">
              Our Primary Services
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#10201D] mb-2">
              Transparent solutions for every purifier need
            </h2>
            <p className="text-sm text-[#43554F]">
              Whether you need urgent doorstep servicing or are purchasing a new alkaline purifier.
            </p>
          </div>
          <a
            href="/services"
            className="btn-secondary text-sm self-start md:self-auto shrink-0"
          >
            View full price list
          </a>
        </div>

        {/* Clean list with hairline borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#CFE6E2] rounded-lg p-6 flex flex-col justify-between hover:border-[#0E5C56] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#0E5C56] bg-[#E7F3F1] px-2.5 py-1 rounded">
                    {item.turnaround}
                  </span>
                  <span className="text-sm font-bold text-[#10201D]">
                    {item.price}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#10201D] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#43554F] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <a
                href={item.actionHref}
                className="btn-primary w-full text-xs py-2.5"
              >
                {item.actionLabel}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
