"use client";

import React from "react";

const WHATSAPP = "https://wa.me/917499933452";
const wa = (msg: string) => `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

/* ─── Reliable RO / Water Purifier Stock Photos (Pexels CDN) ─── */
const IMG = {
  hero: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  glass: "https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=800",
  filter: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800",
  family: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
  lab: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
  drop: "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=800",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION — Full-width cinematic water visual
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden hero-animate">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMG.hero}
            alt="Crystal clear pure drinking water"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl space-y-6">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Doorstep Service Available — 2 Hour Response
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Your family deserves
              <span className="block text-emerald-400">pure, safe water</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Expert RO water purifier repair, genuine filter replacement, TDS calibration,
              and affordable annual maintenance — all at your doorstep within 2 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={wa("Hi Jalcare RO, I want to book a doorstep RO service.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl text-base transition-all flex items-center justify-center gap-2.5 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                Book on WhatsApp
              </a>
              <a
                href="tel:+917499933452"
                className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-xl text-base border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                📞 Call +91 74999 33452
              </a>
            </div>

            {/* Trust strip */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-md">
              <div>
                <span className="font-serif text-2xl font-bold text-white block">2 Hr</span>
                <span className="text-xs text-slate-400">Doorstep arrival</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white block">4.9★</span>
                <span className="text-xs text-slate-400">1,200+ families</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white block">100%</span>
                <span className="text-xs text-slate-400">Genuine parts</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SERVICES SECTION — 3 Image Cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0D9488] uppercase">
              Our Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Complete RO purifier care, delivered to your door
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              From urgent leak repair to annual maintenance — every service includes free TDS water testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 — Repair */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 overflow-hidden relative">
                <img
                  src={IMG.glass}
                  alt="Pure drinking water glass — RO water purifier service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#0F172A] shadow-sm">
                  ₹299 per visit
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] flex items-center justify-center text-lg border border-[#CCFBF1]">🛠️</div>
                <h3 className="font-serif text-xl font-bold text-[#0F172A]">Doorstep RO Repair</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  12-point diagnostic check for leakage, low flow, pump noise, bad taste, and motor failure.
                </p>
                <a
                  href={wa("Hi Jalcare RO, I need doorstep RO repair service.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0D9488] hover:text-[#0F766E] pt-1 transition-colors"
                >
                  Book Repair → 
                </a>
              </div>
            </div>

            {/* Card 2 — Filter */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 overflow-hidden relative">
                <img
                  src={IMG.drop}
                  alt="Water drops — RO filter and membrane replacement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#0F172A] shadow-sm">
                  Food-Grade Parts
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] flex items-center justify-center text-lg border border-[#CCFBF1]">🧪</div>
                <h3 className="font-serif text-xl font-bold text-[#0F172A]">Filter & Membrane Change</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  75 GPD RO membrane, pre-carbon, sediment cartridge, copper mineral, and alkaline filters.
                </p>
                <a
                  href={wa("Hi Jalcare RO, I need RO filter and membrane replacement.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0D9488] hover:text-[#0F766E] pt-1 transition-colors"
                >
                  Book Filter Change →
                </a>
              </div>
            </div>

            {/* Card 3 — AMC */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 overflow-hidden relative">
                <img
                  src={IMG.family}
                  alt="Happy family drinking clean water — Annual AMC maintenance contract"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#0F172A] shadow-sm">
                  Save ₹1,500/year
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] flex items-center justify-center text-lg border border-[#CCFBF1]">🛡️</div>
                <h3 className="font-serif text-xl font-bold text-[#0F172A]">Annual AMC Plans</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  1-year unlimited service visits, free filter replacements, priority emergency support.
                </p>
                <a
                  href={wa("Hi Jalcare RO, I want details for RO Annual AMC plan.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0D9488] hover:text-[#0F766E] pt-1 transition-colors"
                >
                  Inquire AMC →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HOW IT WORKS — Simple 3-step strip
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#0D9488] uppercase">How It Works</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
              3 simple steps to clean water
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white">
            {[
              { num: "01", icon: "💬", title: "Message us on WhatsApp", desc: "Describe your RO issue or select a service — we respond within 5 minutes." },
              { num: "02", icon: "🏠", title: "Technician visits your home", desc: "A certified technician arrives at your doorstep within 2 hours with all spares." },
              { num: "03", icon: "✅", title: "Pay only when satisfied", desc: "No upfront charges. Pay after service completion and satisfaction guaranteed." },
            ].map((step) => (
              <div key={step.num} className="p-8 sm:p-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F0FDFA] flex items-center justify-center text-2xl mx-auto border border-[#CCFBF1]">
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-[#0D9488] tracking-widest">STEP {step.num}</span>
                <h3 className="font-serif text-lg font-bold text-[#0F172A]">{step.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY TRUST US — Photo + Stats split
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-56 shadow-md">
                <img src={IMG.lab} alt="Water quality testing in RO service lab" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-56 shadow-md mt-8">
                <img src={IMG.filter} alt="RO water purifier filter cartridges" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-56 shadow-md col-span-2">
                <img src={IMG.glass} alt="Clean pure drinking water from RO purifier" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right — Content */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-[#0D9488] uppercase">
                  Why Families Trust Jalcare
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                  Honest service,<br/>genuine spares,<br/>zero hidden charges
                </h2>
                <p className="text-sm text-[#475569] leading-relaxed max-w-lg">
                  We built Jalcare RO to solve local drinking water problems the right way — with transparent pricing, certified technicians, and parts you can trust.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "8+", label: "Years of experience" },
                  { val: "1,200+", label: "Families served" },
                  { val: "100%", label: "Genuine food-grade parts" },
                  { val: "120 min", label: "Guaranteed doorstep arrival" },
                ].map((s) => (
                  <div key={s.label} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <span className="font-serif text-2xl font-bold text-[#0D9488] block">{s.val}</span>
                    <span className="text-xs text-[#475569]">{s.label}</span>
                  </div>
                ))}
              </div>

              <a
                href={wa("Hi Jalcare RO, I want to know more about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                Chat With Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRICING QUICK LOOK
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0D9488] uppercase">Transparent Pricing</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
              No hidden charges. No surprises.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100">
              {[
                { service: "Doorstep Diagnostic & Repair Visit", price: "₹299" },
                { service: "Sediment & Pre-Carbon Filter Set", price: "₹650" },
                { service: "RO Membrane 75 GPD (Food Grade)", price: "₹1,450" },
                { service: "Complete Filter Kit (All Stages)", price: "₹1,999" },
                { service: "Essential AMC (1 Year)", price: "₹2,499" },
                { service: "Comprehensive AMC (1 Year)", price: "₹3,999" },
                { service: "Jalcare Aqua Pure 8-Stage Copper RO", price: "₹11,499" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-6 py-4 hover:bg-[#F0FDFA] transition-colors"
                >
                  <span className="text-sm text-[#0F172A] font-medium">{item.service}</span>
                  <span className="text-sm font-bold text-[#0D9488] shrink-0 ml-4">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <a href="/services" className="text-sm font-semibold text-[#0D9488] hover:underline">
                View full price list & AMC comparison →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA BANNER
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Pure water background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0F172A]/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
            Is your RO purifier due for service?
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto">
            Get a free water quality test and same-day doorstep repair by our certified technician. Genuine parts, clear pricing, 100% satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href={wa("Hi Jalcare RO, my RO purifier needs service. Please send a technician.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl text-base transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              WhatsApp Booking
            </a>
            <a
              href="tel:+917499933452"
              className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl text-base transition-all flex items-center justify-center gap-2"
            >
              📞 Call +91 74999 33452
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
