"use client";
import React from "react";

const wa = (m: string) => `https://wa.me/917499933452?text=${encodeURIComponent(m)}`;

const IMG = {
  hero: "https://cdn.pixabay.com/photo/2017/09/23/11/43/water-2778436_1280.jpg",
  ro1: "https://cdn.pixabay.com/photo/2019/10/06/10/03/water-purifier-4530540_640.jpg",
  ro2: "https://cdn.pixabay.com/photo/2021/01/18/06/52/water-5926726_640.jpg",
  drop: "https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_640.jpg",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center hero-animate">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0F766E] to-[#0D9488]"></div>
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:"url("+IMG.hero+")",backgroundSize:"cover",backgroundPosition:"center"}}></div>
        <div className="absolute inset-0 bg-[#0F172A]/50"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left text */}
            <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs sm:text-sm font-semibold text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                2-Hour Doorstep Response
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
                Expert RO Water Purifier
                <span className="block text-emerald-400">Repair & Service</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Local doorstep RO repair, filter replacement, membrane change, TDS calibration & AMC for Kent, Aquaguard, Livpure & all brands.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a href={wa("Hi Jalcare RO, I need doorstep RO service.")} target="_blank" rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-xl">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                  Book on WhatsApp
                </a>
                <a href="tel:+917499933452" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm sm:text-base border border-white/20 transition-all flex items-center justify-center gap-2">
                  📞 Call 74999 33452
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/10 max-w-md mx-auto lg:mx-0">
                <div><span className="font-serif text-xl sm:text-2xl font-bold text-white block">2 Hr</span><span className="text-[10px] sm:text-xs text-slate-400">Doorstep visit</span></div>
                <div><span className="font-serif text-xl sm:text-2xl font-bold text-white block">4.9★</span><span className="text-[10px] sm:text-xs text-slate-400">1200+ homes</span></div>
                <div><span className="font-serif text-xl sm:text-2xl font-bold text-white block">100%</span><span className="text-[10px] sm:text-xs text-slate-400">Genuine parts</span></div>
              </div>
            </div>

            {/* Right — RO Product Card */}
            <div className="hidden sm:block">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl max-w-md mx-auto lg:ml-auto">
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center space-y-4">
                  <div className="w-full h-40 sm:h-48 lg:h-56 rounded-xl bg-gradient-to-br from-sky-50 to-teal-50 flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl border border-slate-200">
                    💧
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0F172A]">RO Water Purifier Service</h3>
                  <p className="text-xs sm:text-sm text-[#475569]">Repair, Filter Change, AMC — All brands supported</p>
                  <div className="flex items-center justify-between bg-[#F0FDFA] p-3 rounded-lg border border-[#CCFBF1]">
                    <span className="text-xs sm:text-sm font-medium text-[#0F172A]">Diagnostic Visit</span>
                    <span className="text-sm sm:text-base font-bold text-[#0D9488]">₹299</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0D9488] uppercase">Our Services</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A]">Complete RO purifier solutions</h2>
            <p className="text-xs sm:text-sm text-[#475569]">Doorstep repair, genuine filter spares, and affordable maintenance for every RO brand.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon:"🛠️", title:"Doorstep RO Repair", price:"₹299", desc:"Full diagnostic: leakage, low flow, pump noise, bad taste, motor check, TDS test.", wa:"I need doorstep RO repair service." },
              { icon:"🧪", title:"Filter & Membrane Change", price:"From ₹650", desc:"Sediment, pre-carbon, RO membrane 75 GPD, post-carbon, copper mineral cartridge.", wa:"I need RO filter and membrane replacement." },
              { icon:"🛡️", title:"Annual AMC Plans", price:"₹2,499/yr", desc:"Unlimited service visits, free filter replacements, priority emergency support for 1 year.", wa:"I want details for RO Annual AMC plan." },
            ].map((s) => (
              <div key={s.title} className="group bg-white rounded-xl sm:rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F0FDFA] flex items-center justify-center text-xl sm:text-2xl border border-[#CCFBF1]">{s.icon}</div>
                    <span className="text-xs sm:text-sm font-bold text-[#0D9488] bg-[#F0FDFA] px-2.5 py-1 rounded-lg border border-[#CCFBF1]">{s.price}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0F172A] mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">{s.desc}</p>
                </div>
                <a href={wa("Hi Jalcare RO, "+s.wa)} target="_blank" rel="noopener noreferrer"
                  className="w-full py-2.5 sm:py-3 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors">
                  Book on WhatsApp →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#0D9488] uppercase">How It Works</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A]">3 simple steps to clean water</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:border sm:border-slate-200 sm:rounded-2xl sm:overflow-hidden sm:divide-x divide-slate-200">
            {[
              { num:"01", icon:"💬", title:"WhatsApp us your issue", desc:"Describe your RO problem or select a service — we respond within 5 minutes." },
              { num:"02", icon:"🏠", title:"Technician at your door", desc:"Certified technician arrives within 2 hours with all genuine spare parts." },
              { num:"03", icon:"✅", title:"Pay after satisfaction", desc:"No advance payment. Pay only when service is done and you are satisfied." },
            ].map((s) => (
              <div key={s.num} className="p-6 sm:p-8 lg:p-10 text-center space-y-3 sm:space-y-4 border border-slate-200 sm:border-0 rounded-xl sm:rounded-none">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F0FDFA] flex items-center justify-center text-xl sm:text-2xl mx-auto border border-[#CCFBF1]">{s.icon}</div>
                <span className="text-[10px] sm:text-xs font-bold text-[#0D9488] tracking-widest">STEP {s.num}</span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#0F172A]">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TRUST US ── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { emoji:"💧", label:"RO Purifier", bg:"from-sky-100 to-teal-50" },
                { emoji:"🔧", label:"Doorstep Repair", bg:"from-amber-50 to-orange-50" },
                { emoji:"🧪", label:"Genuine Filters", bg:"from-emerald-50 to-teal-50" },
                { emoji:"🛡️", label:"AMC Service", bg:"from-violet-50 to-indigo-50" },
              ].map((c) => (
                <div key={c.label} className={`bg-gradient-to-br ${c.bg} rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-center border border-slate-200 shadow-sm`}>
                  <span className="text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-3">{c.emoji}</span>
                  <span className="text-xs sm:text-sm font-bold text-[#0F172A]">{c.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-[#0D9488] uppercase">Why Trust Jalcare</span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight">
                  Honest service, genuine spares, zero hidden charges
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Local RO water purifier experts with 8+ years experience. We fix Kent, Aquaguard, Livpure, Pureit, Havells and all major brands at your doorstep.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { val:"8+", label:"Years experience" },
                  { val:"1,200+", label:"Homes served" },
                  { val:"100%", label:"Genuine parts" },
                  { val:"120 min", label:"Doorstep arrival" },
                ].map((s) => (
                  <div key={s.label} className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#0D9488] block">{s.val}</span>
                    <span className="text-[10px] sm:text-xs text-[#475569]">{s.label}</span>
                  </div>
                ))}
              </div>
              <a href={wa("Hi Jalcare RO, tell me more about your services.")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-md">
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 space-y-2 sm:space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0D9488] uppercase">Transparent Pricing</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A]">No hidden charges</h2>
          </div>
          <div className="max-w-3xl mx-auto border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden divide-y divide-slate-100">
            {[
              { s:"Doorstep Diagnostic & Repair Visit", p:"₹299" },
              { s:"Sediment & Pre-Carbon Filter Set", p:"₹650" },
              { s:"RO Membrane 75 GPD (Food Grade)", p:"₹1,450" },
              { s:"Complete Filter Kit (All Stages)", p:"₹1,999" },
              { s:"Essential AMC (1 Year)", p:"₹2,499" },
              { s:"Comprehensive AMC (1 Year)", p:"₹3,999" },
              { s:"New Copper RO System (8-Stage)", p:"₹11,499" },
            ].map((i,idx) => (
              <div key={idx} className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F0FDFA] transition-colors">
                <span className="text-xs sm:text-sm text-[#0F172A] font-medium">{i.s}</span>
                <span className="text-xs sm:text-sm font-bold text-[#0D9488] shrink-0 ml-4">{i.p}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 sm:mt-6"><a href="/services" className="text-xs sm:text-sm font-semibold text-[#0D9488] hover:underline">View full price list →</a></p>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0F172A] via-[#0F766E] to-[#0D9488] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Is your RO purifier due for service?</h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Free water TDS test with every doorstep visit. Genuine parts, clear pricing, 100% satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2">
            <a href={wa("Hi Jalcare RO, my RO needs service. Please send technician.")} target="_blank" rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-xl">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              WhatsApp Booking
            </a>
            <a href="tel:+917499933452" className="px-6 sm:px-8 py-3.5 sm:py-4 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl text-sm sm:text-base transition-all flex items-center justify-center gap-2">
              📞 Call +91 74999 33452
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
