import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#10201D] text-[#E7F3F1] pt-14 pb-10 border-t border-[#0E5C56]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-[#1D7A72]/40">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded bg-[#0E5C56] flex items-center justify-center text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                Jalcare RO
              </span>
            </div>
            <p className="text-sm text-[#CFE6E2]/80 leading-relaxed">
              Certified doorstep sales, repair, and annual maintenance service for household and commercial RO water purifiers.
            </p>
            <div className="text-xs text-[#CFE6E2]/60 space-y-1">
              <p>Operating hours: 8:00 AM – 8:30 PM (Mon-Sun)</p>
              <p>2-Hour Doorstep Response Guarantee</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#CFE6E2]/80">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Services & Price List
                </a>
              </li>
              <li>
                <a href="/help" className="hover:text-white transition-colors">
                  RO Troubleshooting Checklist
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Book Doorstep Repair
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Services */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4">
              Popular Services
            </h3>
            <ul className="space-y-2.5 text-sm text-[#CFE6E2]/80">
              <li>RO Membrane Replacement</li>
              <li>TDS Adjustment & Mineral Calibration</li>
              <li>Pre-filter & Carbon Cartridge Change</li>
              <li>Annual Maintenance Contract (AMC)</li>
              <li>New Copper Alkaline RO Sales</li>
              <li>Booster Pump & Leak Repair</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4">
              Contact & Support
            </h3>
            <div className="space-y-3 text-sm text-[#CFE6E2]/80">
              <p className="flex items-start gap-2">
                <span className="font-medium text-white shrink-0">Phone:</span>
                <a href="tel:+917499933452" className="hover:text-white transition-colors">
                  +91 74999 33452
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-medium text-white shrink-0">Email:</span>
                <a href="mailto:support@jalcarero.com" className="hover:text-white transition-colors">
                  support@jalcarero.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-medium text-white shrink-0">Address:</span>
                <span>
                  Shop No. 12, Jalcare Water Plaza, Sector 14 Main Road, Landmark: Near Central Bank Branch
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#CFE6E2]/60 gap-4">
          <p>© 2026 Jalcare RO Solutions. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Serving households, offices, and commercial establishments with pure, safe drinking water.
          </p>
        </div>
      </div>
    </footer>
  );
};
