import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-slate-700/50">
          
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#0F766E] flex items-center justify-center text-white shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                Jalcare RO
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Certified doorstep sales, repair, and annual maintenance for all household and commercial RO water purifiers.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <p>Open: 8:00 AM – 8:30 PM (Mon–Sun)</p>
              <p>2-Hour Doorstep Response Guarantee</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-sm font-bold text-white mb-4 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services & Price List</a></li>
              <li><a href="/help" className="hover:text-white transition-colors">Troubleshooting Guide</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Book Service</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-sm font-bold text-white mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>RO Membrane Replacement</li>
              <li>TDS & Mineral Calibration</li>
              <li>Filter & Cartridge Change</li>
              <li>Annual AMC Contracts</li>
              <li>Copper Alkaline RO Sales</li>
              <li>Booster Pump Repair</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-sm font-bold text-white mb-4 uppercase tracking-wider">Contact</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p>
                <span className="text-white font-medium block text-xs mb-0.5">Phone:</span>
                <a href="tel:+917499933452" className="hover:text-white transition-colors">
                  +91 74999 33452
                </a>
              </p>
              <p>
                <span className="text-white font-medium block text-xs mb-0.5">WhatsApp:</span>
                <a
                  href="https://wa.me/917499933452"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </p>
              <p>
                <span className="text-white font-medium block text-xs mb-0.5">Workshop:</span>
                Shop No. 12, RO Service Plaza, Main Market Road
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Jalcare RO Solutions. All rights reserved.</p>
          <p>Serving families with pure, safe drinking water.</p>
        </div>
      </div>
    </footer>
  );
};
