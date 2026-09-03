import React from "react";

export const CtaBanner: React.FC = () => {
  return (
    <section className="bg-[#10201D] text-white py-14 sm:py-16 border-t border-[#0E5C56]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        <div className="max-w-2xl text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E5C56]/60 border border-[#1D7A72] text-xs font-medium text-[#CFE6E2]">
            <span className="w-2 h-2 rounded-full bg-[#C98A2E]"></span>
            Same-day doorstep appointment available
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Is your water purifier due for service or showing a warning?
          </h2>
          <p className="text-sm text-[#CFE6E2]/80 leading-relaxed">
            Get your water tested for free by our certified local technician. Genuine spare parts, clear price estimates, and 100% satisfaction guaranteed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href="tel:+917499933452"
            className="w-full sm:w-auto text-center px-6 py-3 border border-[#CFE6E2]/40 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors min-h-[44px] flex items-center justify-center"
          >
            Call +91 74999 33452
          </a>
          <a
            href="https://wa.me/917499933452?text=Hi%20Jalcare%20RO%2C%20I%20need%20doorstep%20RO%20water%20purifier%20repair%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-md text-sm font-semibold transition-colors min-h-[44px] flex items-center justify-center shadow-sm gap-2"
          >
            WhatsApp Booking
          </a>
        </div>

      </div>
    </section>
  );
};
