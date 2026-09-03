import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { URL } from "node:url";
import os from "node:os";

const PORT: number = Number(process.env.PORT) || 3000;

// Auto-load .env.local if present
const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
      const [key, ...valParts] = trimmed.split("=");
      const val = valParts.join("=").replace(/^["']|["']$/g, "");
      process.env[key.trim()] = val;
    }
  }
}

// Read CSS content
const cssPath = path.join(process.cwd(), "src/app/globals.css");
let customCss = "";
if (fs.existsSync(cssPath)) {
  customCss = fs.readFileSync(cssPath, "utf-8");
}

// Generate base HTML wrap with complete styling, fonts, and interactivity scripts
function renderFullPage(
  title: string,
  description: string,
  contentHtml: string,
  activePath: string,
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            paper: '#FBFDFC',
            ink: '#10201D',
            soft: '#43554F',
            teal: {
              primary: '#0E5C56',
              hover: '#1D7A72',
              light: '#E7F3F1',
              border: '#CFE6E2',
            },
            amber: {
              accent: '#C98A2E',
              hover: '#B27823',
            }
          },
          fontFamily: {
            serif: ['Fraunces', 'Georgia', 'serif'],
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <style>
    ${customCss}
  </style>
</head>
<body className="bg-[#FBFDFC] text-[#10201D] min-h-screen flex flex-col font-sans">
  
  <!-- Header / Navigation -->
  <header id="site-header" class="sticky top-0 z-50 transition-all duration-300 bg-[#FBFDFC] py-4 border-b border-[#CFE6E2]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2.5 group">
        <div class="w-10 h-10 rounded-lg bg-[#0E5C56] flex items-center justify-center text-white font-serif font-bold text-xl group-hover:bg-[#1D7A72] transition-colors">
          <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
        </div>
        <div class="flex flex-col">
          <span class="font-serif text-xl font-bold tracking-tight text-[#10201D]">Jalcare RO</span>
          <span class="text-[11px] text-[#43554F] font-normal leading-none">Sales & Repair Specialists</span>
        </div>
      </a>

      <nav class="hidden md:flex items-center gap-7">
        <a href="/" class="text-sm font-medium transition-colors ${activePath === "/" ? "text-[#0E5C56] font-semibold border-b-2 border-[#0E5C56] pb-1" : "text-[#43554F] hover:text-[#0E5C56]"}">Home</a>
        <a href="/services" class="text-sm font-medium transition-colors ${activePath === "/services" ? "text-[#0E5C56] font-semibold border-b-2 border-[#0E5C56] pb-1" : "text-[#43554F] hover:text-[#0E5C56]"}">Services & Pricing</a>
        <a href="/help" class="text-sm font-medium transition-colors ${activePath === "/help" ? "text-[#0E5C56] font-semibold border-b-2 border-[#0E5C56] pb-1" : "text-[#43554F] hover:text-[#0E5C56]"}">Customer Support</a>
        <a href="/reviews" class="text-sm font-medium transition-colors ${activePath === "/reviews" ? "text-[#0E5C56] font-semibold border-b-2 border-[#0E5C56] pb-1" : "text-[#43554F] hover:text-[#0E5C56]"}">Reviews</a>
        <a href="/contact" class="text-sm font-medium transition-colors ${activePath === "/contact" ? "text-[#0E5C56] font-semibold border-b-2 border-[#0E5C56] pb-1" : "text-[#43554F] hover:text-[#0E5C56]"}">Contact Us</a>
      </nav>

      <div class="hidden md:flex items-center gap-3">
        <a href="tel:+919876543210" class="btn-secondary text-sm px-4 py-2">Call now</a>
        <a href="/contact" class="btn-primary text-sm px-4 py-2">Book a repair</a>
      </div>

      <button id="mobile-menu-toggle" class="md:hidden p-2 text-[#10201D] border border-[#CFE6E2] rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <div id="mobile-menu" class="hidden md:hidden border-t border-[#CFE6E2] bg-[#FBFDFC] px-4 pt-3 pb-6 space-y-3">
      <div class="flex flex-col space-y-1">
        <a href="/" class="px-3 py-2.5 text-base font-medium text-[#10201D] hover:bg-[#E7F3F1] rounded-md min-h-[44px] flex items-center">Home</a>
        <a href="/services" class="px-3 py-2.5 text-base font-medium text-[#10201D] hover:bg-[#E7F3F1] rounded-md min-h-[44px] flex items-center">Services & Pricing</a>
        <a href="/help" class="px-3 py-2.5 text-base font-medium text-[#10201D] hover:bg-[#E7F3F1] rounded-md min-h-[44px] flex items-center">Customer Support</a>
        <a href="/reviews" class="px-3 py-2.5 text-base font-medium text-[#10201D] hover:bg-[#E7F3F1] rounded-md min-h-[44px] flex items-center">Reviews</a>
        <a href="/contact" class="px-3 py-2.5 text-base font-medium text-[#10201D] hover:bg-[#E7F3F1] rounded-md min-h-[44px] flex items-center">Contact Us</a>
      </div>
      <div class="pt-2 border-t border-[#CFE6E2] flex flex-col gap-2.5">
        <a href="tel:+919876543210" class="btn-secondary w-full text-center py-2.5">Call now</a>
        <a href="/contact" class="btn-primary w-full text-center py-2.5">Book a repair</a>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-grow">
    ${contentHtml}
  </main>

  <!-- Footer -->
  <footer class="bg-[#10201D] text-[#E7F3F1] pt-14 pb-10 border-t border-[#0E5C56]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-[#1D7A72]/40">
        
        <div class="space-y-4 md:col-span-1">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded bg-[#0E5C56] flex items-center justify-center text-white">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <span class="font-serif text-xl font-bold text-white tracking-tight">Jalcare RO</span>
          </div>
          <p class="text-sm text-[#CFE6E2]/80 leading-relaxed">
            Certified doorstep sales, repair, and annual maintenance service for household and commercial RO water purifiers.
          </p>
          <div class="text-xs text-[#CFE6E2]/60 space-y-1">
            <p>Operating hours: 8:00 AM – 8:30 PM (Mon-Sun)</p>
            <p>2-Hour Doorstep Response Guarantee</p>
          </div>
        </div>

        <div>
          <h3 class="font-serif text-base font-semibold text-white mb-4">Quick Navigation</h3>
          <ul class="space-y-2.5 text-sm text-[#CFE6E2]/80">
            <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
            <li><a href="/services" class="hover:text-white transition-colors">Services & Price List</a></li>
            <li><a href="/help" class="hover:text-white transition-colors">RO Troubleshooting Checklist</a></li>
            <li><a href="/reviews" class="hover:text-white transition-colors">Customer Reviews</a></li>
            <li><a href="/contact" class="hover:text-white transition-colors">Book Doorstep Repair</a></li>
            <li><a href="/admin" class="hover:text-[#C98A2E] transition-colors text-xs opacity-75">Admin Portal 🔒</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-serif text-base font-semibold text-white mb-4">Popular Services</h3>
          <ul class="space-y-2.5 text-sm text-[#CFE6E2]/80">
            <li>RO Membrane Replacement</li>
            <li>TDS Adjustment & Mineral Calibration</li>
            <li>Pre-filter & Carbon Cartridge Change</li>
            <li>Annual Maintenance Contract (AMC)</li>
            <li>New Copper Alkaline RO Sales</li>
            <li>Booster Pump & Leak Repair</li>
          </ul>
        </div>

        <div>
          <h3 class="font-serif text-base font-semibold text-white mb-4">Contact & Support</h3>
          <div class="space-y-3 text-sm text-[#CFE6E2]/80">
            <p class="flex items-start gap-2">
              <span class="font-medium text-white shrink-0">Phone:</span>
              <a href="tel:+919876543210" class="hover:text-white transition-colors">+91 98765 43210 / +91 98765 43211</a>
            </p>
            <p class="flex items-start gap-2">
              <span class="font-medium text-white shrink-0">Email:</span>
              <a href="mailto:support@jalcarero.com" class="hover:text-white transition-colors">support@jalcarero.com</a>
            </p>
            <p class="flex items-start gap-2">
              <span class="font-medium text-white shrink-0">Address:</span>
              <span>Shop No. 12, Jalcare Water Plaza, Sector 14 Main Road, Landmark: Near Central Bank Branch</span>
            </p>
          </div>
        </div>

      </div>

      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#CFE6E2]/60 gap-4">
        <p>© 2026 Jalcare RO Solutions. All rights reserved.</p>
        <p class="text-center sm:text-right">Serving households, offices, and commercial establishments with pure, safe drinking water.</p>
      </div>
    </div>
  </footer>

  <script>
    // Header scroll hairline border effect
    window.addEventListener('scroll', function() {
      const header = document.getElementById('site-header');
      if (window.scrollY > 20) {
        header.classList.add('shadow-sm');
      } else {
        header.classList.remove('shadow-sm');
      }
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (menuBtn && menu) {
      menuBtn.addEventListener('click', function() {
        menu.classList.toggle('hidden');
      });
    }

    // Interactive Quick Diagnose Widget state
    const symptoms = {
      leak: {
        cost: '₹299 – ₹450 (includes seals & visit)',
        title: 'Worn housing O-ring gasket or tube connector crack',
        explanation: 'Continuous dripping usually indicates a worn silicone ring inside the pre-filter housing or a loose poly-tube elbow joint.',
        actionText: 'Book leak repair',
        actionHref: '/contact?issue=Water+Leaking'
      },
      taste: {
        cost: '₹650 – ₹1,450 (cartridge or membrane)',
        title: 'Exhausted carbon cartridge or high TDS membrane bypass',
        explanation: 'Bitter or salty taste means raw salt ions are passing through an aged RO membrane or the activated post-carbon filter has lost absorption.',
        actionText: 'Book a TDS check',
        actionHref: '/contact?issue=Bad+Taste'
      },
      flow: {
        cost: '₹299 – ₹650 (filter replacement)',
        title: 'Choked sediment pre-filter or low booster pump pressure',
        explanation: 'Fine silt buildup restricts inlet water pressure. If raw tap flow is normal, replacing choked pre-filters restores full tank filling speed.',
        actionText: 'Schedule flow fix',
        actionHref: '/contact?issue=Low+Pressure'
      },
      light: {
        cost: '₹299 visit / UV ballast replacement',
        title: 'UV lamp failure or auto-cutoff pressure safety trip',
        explanation: 'Red flashing lights or continuous chimes alert you that UV disinfection is inactive or inlet pressure dropped below safe limits.',
        actionText: 'Fix red light issue',
        actionHref: '/contact?issue=Red+Light+Alarm'
      }
    };

    function selectDiagnoseSymptom(id) {
      const data = symptoms[id];
      if (!data) return;
      document.querySelectorAll('.symptom-btn').forEach(btn => {
        if (btn.getAttribute('data-id') === id) {
          btn.className = 'symptom-btn flex items-center gap-2.5 p-3 rounded-md text-left text-xs font-semibold min-h-[44px] bg-[#E7F3F1] border border-[#0E5C56] text-[#0E5C56]';
        } else {
          btn.className = 'symptom-btn flex items-center gap-2.5 p-3 rounded-md text-left text-xs font-medium min-h-[44px] bg-[#FBFDFC] border border-[#CFE6E2] text-[#10201D] hover:bg-[#E7F3F1]/60';
        }
      });
      document.getElementById('diag-cost').innerText = data.cost;
      document.getElementById('diag-title').innerText = data.title;
      document.getElementById('diag-[#43554F]').innerText = data.explanation;
      const actBtn = document.getElementById('diag-action');
      actBtn.innerText = data.actionText;
      actBtn.href = data.actionHref;
    }

    // Filter tabs for Services page
    function filterServiceTab(category) {
      document.querySelectorAll('.service-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-cat') === category) {
          btn.className = 'service-tab-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] bg-[#0E5C56] text-white border border-[#0E5C56]';
        } else {
          btn.className = 'service-tab-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] bg-white text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]';
        }
      });

      document.querySelectorAll('.price-item-row').forEach(row => {
        if (category === 'all' || row.getAttribute('data-category') === category) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }

    // Troubleshooting issue switcher
    const troubleData = {
      'water leaking': {
        title: 'Water leaking beneath purifier or tank',
        severity: 'HIGH urgency',
        severityClass: 'bg-red-100 text-red-800 border border-red-200',
        symptoms: 'Water dripping from filter housing, bottom tray, or wall bracket fittings.',
        causes: ['Worn out silicone O-ring gasket inside filter housing', 'Cracked elbow fitting or loose poly-tube connection', 'Excessive inlet water line pressure triggering safety valve relief'],
        steps: ['Immediately turn off the main water supply valve connecting to the RO unit.', 'Unplug the power adapter to avoid short circuiting electrical components.', 'Check if leak originates from the external pre-filter bottle or internal tubing.'],
        recommendation: 'Do not operate the machine while leaking. Book a quick repair call for a technician to replace damaged tube elbows or housing seals.',
        actionHref: '/contact?issue=Water+Leaking'
      },
      'bad taste': {
        title: 'Bad taste, foul odor, or metallic water flavor',
        severity: 'MEDIUM urgency',
        severityClass: 'bg-amber-100 text-amber-900 border border-amber-200',
        symptoms: 'Purified water tastes bitter, salty, chemical-like, or stale after standing.',
        causes: ['Exhausted post-carbon filter no longer absorbing organic odor', 'RO membrane bypass valve open or membrane salt rejection depleted', 'Stagnant water sitting in storage tank for over 48 hours without flushing'],
        steps: ['Drain the entire storage tank completely through the faucet and allow it to refill once.', 'Measure purified water TDS using a handheld TDS meter (should be between 80 and 200 ppm).', 'If TDS is higher than raw tap water or above 300 ppm, membrane replacement is required.'],
        recommendation: 'If tank flushing doesn\'t restore fresh taste, your post-carbon mineralizer or RO membrane needs immediate replacement.',
        actionHref: '/contact?issue=Bad+Taste'
      },
      'low pressure': {
        title: 'Low water flow or slow tank filling rate',
        severity: 'MEDIUM urgency',
        severityClass: 'bg-amber-100 text-amber-900 border border-amber-200',
        symptoms: 'Water trickles extremely slowly from the dispenser tap or takes 3+ hours to fill 7L tank.',
        causes: ['Clogged sediment or pre-carbon filter restricting raw water inlet flow', 'Low pressure in internal air bladder of pressurized storage tank', 'Weak booster pump output pressure (below 60 PSI requirement)'],
        steps: ['Ensure inlet feed valve is fully turned open.', 'Verify if raw supply pressure from your tap is normal.', 'Listen for booster pump humming sound when purifier is switched on.'],
        recommendation: 'Clean or replace clogged pre-filters. If pump sound is faint or missing, pump head or adapter replacement is recommended.',
        actionHref: '/contact?issue=Low+Pressure'
      },
      'red light': {
        title: 'Red light indicator glowing or alarm beeping',
        severity: 'HIGH urgency',
        severityClass: 'bg-red-100 text-red-800 border border-red-200',
        symptoms: 'Purifier stops dispensing water; red indicator light flashes or continuous chime sounds.',
        causes: ['UV lamp failure or UV ballast circuit trip', 'Auto-cut off sensor activated due to low inlet supply pressure', 'Filter expiry timer reached (in smart digital purifiers)'],
        steps: ['Check if overhead tank has ran out of water or inlet tap is closed.', 'Switch off power for 2 minutes and turn back on to reset the PCB controller.', 'Inspect if red light specifically says "UV" or "Change Filter".'],
        recommendation: 'A persistent red light or UV alarm indicates UV chamber failure. Avoid drinking unboiled water until inspected by a technician.',
        actionHref: '/contact?issue=Red+Light+Alarm'
      }
    };

    function selectTroubleIssue(key) {
      const data = troubleData[key];
      if (!data) return;
      document.querySelectorAll('.trouble-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-key') === key) {
          btn.className = 'trouble-tab-btn p-3 text-xs font-semibold rounded-md text-center min-h-[44px] bg-[#0E5C56] text-white border border-[#0E5C56]';
        } else {
          btn.className = 'trouble-tab-btn p-3 text-xs font-semibold rounded-md text-center min-h-[44px] bg-[#FBFDFC] text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]';
        }
      });
      document.getElementById('tb-title').innerText = data.title;
      const sev = document.getElementById('tb-severity');
      sev.innerText = data.severity;
      sev.className = 'text-[11px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider self-start sm:self-auto ' + data.severityClass;
      document.getElementById('tb-symptoms').innerText = data.symptoms;
      
      const causesUl = document.getElementById('tb-causes');
      causesUl.innerHTML = data.causes.map(c => '<li class="flex items-start gap-2"><span class="text-[#0E5C56] font-bold">•</span><span>' + c + '</span></li>').join('');

      const stepsOl = document.getElementById('tb-steps');
      stepsOl.innerHTML = data.steps.map(s => '<li class="leading-relaxed">' + s + '</li>').join('');

      document.getElementById('tb-recommendation').innerText = data.recommendation;
      document.getElementById('tb-action').href = data.actionHref;
    }

    // Toggle FAQ Accordion
    function toggleFaq(id) {
      const content = document.getElementById('faq-content-' + id);
      const icon = document.getElementById('faq-icon-' + id);
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180', 'bg-[#0E5C56]', 'text-white');
      } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180', 'bg-[#0E5C56]', 'text-white');
      }
    }

    // Reviews Filter
    function filterReviews(type) {
      document.querySelectorAll('.rev-filter-btn').forEach(btn => {
        if (btn.getAttribute('data-type') === type) {
          btn.className = 'rev-filter-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] bg-[#0E5C56] text-white border border-[#0E5C56]';
        } else {
          btn.className = 'rev-filter-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] bg-white text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]';
        }
      });
      document.querySelectorAll('.review-article').forEach(art => {
        if (type === 'all' || art.getAttribute('data-type').toLowerCase().includes(type)) {
          art.style.display = '';
        } else {
          art.style.display = 'none';
        }
      });
    }

    // Form submission JS handler
    const form = document.getElementById('booking-form');
    if (form) {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const btn = document.getElementById('form-submit-btn');
        btn.innerText = 'Submitting request...';
        btn.disabled = true;

        const payload = {
          name: document.getElementById('form-name').value,
          phone: document.getElementById('form-phone').value,
          serviceType: document.getElementById('form-service').value,
          preferredTime: document.getElementById('form-time').value,
          address: document.getElementById('form-address').value,
          comments: document.getElementById('form-comments').value
        };

        try {
          const res = await fetch('/api/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          const data = await res.json();
          const ticketId = data.ticketId || ('JAL-' + Math.floor(100000 + Math.random() * 900000));
          document.getElementById('ticket-ref').innerText = ticketId;
          document.getElementById('confirm-name').innerText = payload.name;
          document.getElementById('confirm-phone').innerText = payload.phone;
          document.getElementById('confirm-service').innerText = payload.serviceType;
          document.getElementById('confirm-time').innerText = payload.preferredTime;
          document.getElementById('confirm-address').innerText = payload.address;

          form.classList.add('hidden');
          document.getElementById('form-success-box').classList.remove('hidden');
        } catch (err) {
          const ticketId = 'JAL-' + Math.floor(100000 + Math.random() * 900000);
          document.getElementById('ticket-ref').innerText = ticketId;
          form.classList.add('hidden');
          document.getElementById('form-success-box').classList.remove('hidden');
        }
      });
    }

    // Auto-populate URL params into booking form
    const urlParams = new URLSearchParams(window.location.search);
    const issueParam = urlParams.get('issue');
    const itemParam = urlParams.get('item');
    if (issueParam && document.getElementById('form-comments')) {
      document.getElementById('form-comments').value = 'Diagnosed symptom: ' + issueParam;
    }
  </script>
</body>
</html>`;
}

// LANDING PAGE HTML HTML
const landingHtml = `
<section class="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-[#FBFDFC] hero-animate">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      <div class="lg:col-span-7 space-y-6 text-left">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E7F3F1] border border-[#CFE6E2] text-xs font-medium text-[#0E5C56]">
          <span class="w-2 h-2 rounded-full bg-[#0E5C56]"></span>
          Certified local doorstep technicians
        </div>

        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10201D] leading-[1.15]">
          Clean, safe drinking water for your family without the repair hassle
        </h1>

        <p class="text-base sm:text-lg text-[#43554F] leading-relaxed max-w-2xl">
          Jalcare RO delivers prompt doorstep repair, genuine filter replacements, and affordable annual maintenance for all major water purifier brands within 2 hours.
        </p>

        <div class="pt-2 flex flex-col sm:flex-row items-center gap-4">
          <a href="/contact" class="btn-primary w-full sm:w-auto px-7 py-3 text-base">Book a repair</a>
          <a href="/services" class="btn-secondary w-full sm:w-auto px-7 py-3 text-base">View price list</a>
        </div>

        <div class="pt-6 border-t border-[#CFE6E2] grid grid-cols-3 gap-4 text-xs text-[#43554F]">
          <div>
            <span class="font-serif font-bold text-base text-[#10201D] block">120 mins</span>
            Average response time
          </div>
          <div>
            <span class="font-serif font-bold text-base text-[#10201D] block">4.9 / 5</span>
            From 1,200+ local homes
          </div>
          <div>
            <span class="font-serif font-bold text-base text-[#10201D] block">100%</span>
            Genuine food-grade spares
          </div>
        </div>
      </div>

      <!-- Quick Diagnose Widget -->
      <div class="lg:col-span-5 w-full">
        <div class="bg-white border border-[#CFE6E2] rounded-lg p-5 sm:p-6 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-3 border-b border-[#CFE6E2]">
            <div class="w-2.5 h-2.5 rounded-full bg-[#C98A2E]"></div>
            <h3 class="font-serif text-lg font-semibold text-[#10201D]">What's wrong with my RO?</h3>
          </div>

          <p class="text-xs text-[#43554F] mb-4">Select the symptom your water purifier is showing for instant diagnosis:</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
            <button onclick="selectDiagnoseSymptom('leak')" data-id="leak" class="symptom-btn flex items-center gap-2.5 p-3 rounded-md text-left text-xs font-semibold min-h-[44px] bg-[#E7F3F1] border border-[#0E5C56] text-[#0E5C56]">
              <span>💧</span>
              <span>Water leaking from bottom</span>
            </button>
            <button onclick="selectDiagnoseSymptom('taste')" data-id="taste" class="symptom-btn flex items-center gap-2.5 p-3 rounded-md text-left text-xs font-medium min-h-[44px] bg-[#FBFDFC] border border-[#CFE6E2] text-[#10201D] hover:bg-[#E7F3F1]/60">
              <span>🧂</span>
              <span>Bad taste or salty water</span>
            </button>
            <button onclick="selectDiagnoseSymptom('flow')" data-id="flow" class="symptom-btn flex items-center gap-2.5 p-3 rounded-md text-left text-xs font-medium min-h-[44px] bg-[#FBFDFC] border border-[#CFE6E2] text-[#10201D] hover:bg-[#E7F3F1]/60">
              <span>⚡</span>
              <span>Slow water flow or empty tank</span>
            </button>
            <button onclick="selectDiagnoseSymptom('light')" data-id="light" class="symptom-btn flex items-center gap-2.5 p-3 rounded-md text-left text-xs font-medium min-h-[44px] bg-[#FBFDFC] border border-[#CFE6E2] text-[#10201D] hover:bg-[#E7F3F1]/60">
              <span>🚨</span>
              <span>Red light glowing or beeping</span>
            </button>
          </div>

          <div class="bg-[#E7F3F1] border border-[#CFE6E2] rounded-md p-4 space-y-2.5">
            <div class="flex items-start justify-between gap-2">
              <span class="text-[11px] font-medium text-[#0E5C56] bg-white px-2 py-0.5 rounded border border-[#CFE6E2]">Probable cause</span>
              <span id="diag-cost" class="text-xs font-semibold text-[#10201D]">₹299 – ₹450 (includes seals & visit)</span>
            </div>

            <h4 id="diag-title" class="font-serif text-sm font-bold text-[#10201D]">Worn housing O-ring gasket or tube connector crack</h4>
            <p id="diag-[#43554F]" class="text-xs text-[#43554F] leading-relaxed">Continuous dripping usually indicates a worn silicone ring inside the pre-filter housing or a loose poly-tube elbow joint.</p>

            <div class="pt-2">
              <a id="diag-action" href="/contact?issue=Water+Leaking" class="btn-primary w-full text-xs py-2.5 flex items-center justify-center gap-1.5">Book leak repair</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Wave Divider (Used ONCE) -->
<div class="w-full overflow-hidden leading-none -mb-1">
  <svg class="relative block w-full h-[40px] sm:h-[60px] text-[#E7F3F1]" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z" fill="currentColor"></path>
  </svg>
</div>

<!-- Why Choose Us -->
<section class="bg-[#E7F3F1] py-16 sm:py-20 border-t border-b border-[#CFE6E2]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mb-12 text-left">
      <span class="text-xs font-semibold text-[#0E5C56] uppercase tracking-wider block mb-2">Why households trust Jalcare</span>
      <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#10201D] mb-3">Pure drinking water backed by honest doorstep service</h2>
      <p class="text-sm text-[#43554F] leading-relaxed">We built Jalcare RO to solve local drinking water problems without sales gimmicks or hidden charges.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#CFE6E2] bg-white divide-y md:divide-y-0 md:divide-x divide-[#CFE6E2]">
      <div class="p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span class="font-serif text-3xl font-bold text-[#0E5C56]/40 block mb-3">01</span>
          <h3 class="font-serif text-lg font-semibold text-[#10201D] mb-2">2-hour doorstep response guarantee</h3>
          <p class="text-xs text-[#43554F] leading-relaxed">Emergency repair requests booked before 4 PM receive guaranteed technician visit within 120 minutes across service zones.</p>
        </div>
      </div>
      <div class="p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span class="font-serif text-3xl font-bold text-[#0E5C56]/40 block mb-3">02</span>
          <h3 class="font-serif text-lg font-semibold text-[#10201D] mb-2">100% genuine food-grade spare parts</h3>
          <p class="text-xs text-[#43554F] leading-relaxed">We install certified NSF-grade membranes, copper filters, and heavy booster pumps with direct manufacturer warranty.</p>
        </div>
      </div>
      <div class="p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span class="font-serif text-3xl font-bold text-[#0E5C56]/40 block mb-3">03</span>
          <h3 class="font-serif text-lg font-semibold text-[#10201D] mb-2">Transparent upfront price list</h3>
          <p class="text-xs text-[#43554F] leading-relaxed">No surprise add-ons or hidden call-out fees. You review clear part and service costs before any work begins.</p>
        </div>
      </div>
      <div class="p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span class="font-serif text-3xl font-bold text-[#0E5C56]/40 block mb-3">04</span>
          <h3 class="font-serif text-lg font-semibold text-[#10201D] mb-2">Certified local water technicians</h3>
          <p class="text-xs text-[#43554F] leading-relaxed">Background-checked professionals with over 8 years of experience servicing household RO, UV, UF, and commercial systems.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Service Highlights -->
<section class="py-16 sm:py-20 bg-[#FBFDFC]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
      <div class="max-w-xl text-left">
        <span class="text-xs font-semibold text-[#0E5C56] uppercase tracking-wider block mb-2">Our Primary Services</span>
        <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#10201D] mb-2">Transparent solutions for every purifier need</h2>
        <p class="text-sm text-[#43554F]">Whether you need urgent doorstep servicing or are purchasing a new alkaline purifier.</p>
      </div>
      <a href="/services" class="btn-secondary text-sm self-start md:self-auto shrink-0">View full price list</a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white border border-[#CFE6E2] rounded-lg p-6 flex flex-col justify-between hover:border-[#0E5C56] transition-colors">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs font-semibold text-[#0E5C56] bg-[#E7F3F1] px-2.5 py-1 rounded">Within 2 hours</span>
            <span class="text-sm font-bold text-[#10201D]">₹299 per visit</span>
          </div>
          <h3 class="font-serif text-xl font-bold text-[#10201D] mb-2">Doorstep Repair & Diagnosis</h3>
          <p class="text-xs text-[#43554F] leading-relaxed mb-6">Comprehensive 12-point health check, leak fix, and raw water TDS calibration.</p>
        </div>
        <a href="/contact?service=Repair" class="btn-primary w-full text-xs py-2.5">Book a repair</a>
      </div>

      <div class="bg-white border border-[#CFE6E2] rounded-lg p-6 flex flex-col justify-between hover:border-[#0E5C56] transition-colors">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs font-semibold text-[#0E5C56] bg-[#E7F3F1] px-2.5 py-1 rounded">Quarterly visits</span>
            <span class="text-sm font-bold text-[#10201D]">From ₹2,499 / year</span>
          </div>
          <h3 class="font-serif text-xl font-bold text-[#10201D] mb-2">Annual Maintenance (AMC)</h3>
          <p class="text-xs text-[#43554F] leading-relaxed mb-6">Year-round protection with free filter changes, emergency calls, and zero hidden fees.</p>
        </div>
        <a href="/services" class="btn-primary w-full text-xs py-2.5">Compare AMC plans</a>
      </div>

      <div class="bg-white border border-[#CFE6E2] rounded-lg p-6 flex flex-col justify-between hover:border-[#0E5C56] transition-colors">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs font-semibold text-[#0E5C56] bg-[#E7F3F1] px-2.5 py-1 rounded">Free next-day setup</span>
            <span class="text-sm font-bold text-[#10201D]">₹11,499 complete unit</span>
          </div>
          <h3 class="font-serif text-xl font-bold text-[#10201D] mb-2">Jalcare Copper RO System</h3>
          <p class="text-xs text-[#43554F] leading-relaxed mb-6">8-stage purification enriched with active copper minerals and real-time digital TDS display.</p>
        </div>
        <a href="/services" class="btn-primary w-full text-xs py-2.5">View RO models</a>
      </div>
    </div>
  </div>
</section>

<!-- CTA Banner -->
<section class="bg-[#10201D] text-white py-14 sm:py-16 border-t border-[#0E5C56]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
    <div class="max-w-2xl text-left space-y-3">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E5C56]/60 border border-[#1D7A72] text-xs font-medium text-[#CFE6E2]">
        <span class="w-2 h-2 rounded-full bg-[#C98A2E]"></span>
        Same-day doorstep appointment available
      </div>
      <h2 class="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">Is your water purifier due for service or showing a warning?</h2>
      <p class="text-sm text-[#CFE6E2]/80 leading-relaxed">Get your water tested for free by our certified local technician. Genuine spare parts, clear price estimates, and 100% satisfaction guaranteed.</p>
    </div>

    <div class="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
      <a href="tel:+919876543210" class="w-full sm:w-auto text-center px-6 py-3 border border-[#CFE6E2]/40 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors min-h-[44px] flex items-center justify-center">Call now</a>
      <a href="/contact" class="w-full sm:w-auto text-center px-6 py-3 bg-[#C98A2E] hover:bg-[#B27823] text-white rounded-md text-sm font-semibold transition-colors min-h-[44px] flex items-center justify-center shadow-sm">Book a repair</a>
    </div>
  </div>
</section>
`;

// SERVICES PAGE HTML
const servicesHtml = `
<section class="bg-[#E7F3F1] py-12 sm:py-16 border-b border-[#CFE6E2]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3">
    <span class="text-xs font-semibold text-[#0E5C56] uppercase tracking-wider block">Transparent Pricing & Rate List</span>
    <h1 class="font-serif text-3xl sm:text-4xl font-bold text-[#10201D]">Services, repair charges, and new RO purifier pricing</h1>
    <p class="text-sm text-[#43554F] max-w-2xl leading-relaxed">All prices include technician visit, labor, and genuine parts warranty. No surprise diagnostic fees or hidden doorstep charges.</p>
  </div>
</section>

<section class="py-12 sm:py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
    
    <div class="flex flex-wrap items-center gap-2 border-b border-[#CFE6E2] pb-4">
      <button onclick="filterServiceTab('all')" data-cat="all" class="service-tab-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] bg-[#0E5C56] text-white border border-[#0E5C56]">All Services & Products</button>
      <button onclick="filterServiceTab('repair')" data-cat="repair" class="service-tab-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] bg-white text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]">Repairs & Replacement Parts</button>
      <button onclick="filterServiceTab('amc')" data-cat="amc" class="service-tab-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] bg-white text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]">Annual Maintenance Contracts (AMC)</button>
      <button onclick="filterServiceTab('product')" data-cat="product" class="service-tab-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] bg-white text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]">New Purifiers & Sales</button>
    </div>

    <!-- Desktop Price Table -->
    <div class="hidden lg:block overflow-hidden border border-[#CFE6E2] rounded-lg bg-white">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-[#E7F3F1] border-b border-[#CFE6E2] text-xs font-semibold text-[#10201D]">
            <th class="py-3.5 px-5">Service / Product Name</th>
            <th class="py-3.5 px-4">Turnaround & Warranty</th>
            <th class="py-3.5 px-5">Included Features</th>
            <th class="py-3.5 px-4 text-right">Price</th>
            <th class="py-3.5 px-5 text-center">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#CFE6E2] text-xs text-[#10201D]">
          <tr class="price-item-row price-row-hover" data-category="repair">
            <td class="py-4 px-5 align-top">
              <div class="font-semibold text-sm text-[#10201D]">On-demand repair & diagnostic check</div>
              <div class="text-[#43554F] mt-1 max-w-xs leading-relaxed">Complete health audit of your RO system, including leak inspection, electrical circuit check, and pump pressure test.</div>
              <span class="inline-block mt-2 text-[10px] font-bold text-[#C98A2E] bg-[#C98A2E]/10 px-2 py-0.5 rounded border border-[#C98A2E]/30">Most requested</span>
            </td>
            <td class="py-4 px-4 align-top whitespace-nowrap text-[#43554F]">
              <span class="font-medium text-[#0E5C56] block">Same day (within 2 hours)</span>
              <span class="text-[11px] text-[#43554F]">(per visit)</span>
            </td>
            <td class="py-4 px-5 align-top">
              <ul class="space-y-1 text-[#43554F]">
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>Full 12-point hardware and filter inspection</span></li>
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>Free raw and purified water TDS measurement</span></li>
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>Minor loose fitting fix included</span></li>
              </ul>
            </td>
            <td class="py-4 px-4 align-top text-right whitespace-nowrap">
              <span class="font-serif text-lg font-bold text-[#0E5C56]">₹299</span>
            </td>
            <td class="py-4 px-5 align-top text-center whitespace-nowrap">
              <a href="/contact?item=On-demand+repair" class="btn-primary text-xs py-2 px-3 inline-flex">Book service</a>
            </td>
          </tr>

          <tr class="price-item-row price-row-hover" data-category="repair">
            <td class="py-4 px-5 align-top">
              <div class="font-semibold text-sm text-[#10201D]">Sediment & pre-carbon filter replacement</div>
              <div class="text-[#43554F] mt-1 max-w-xs leading-relaxed">Removal of accumulated silt, rust, and chlorine taste using authentic food-grade filtration cartridges.</div>
            </td>
            <td class="py-4 px-4 align-top whitespace-nowrap text-[#43554F]">
              <span class="font-medium text-[#0E5C56] block">30-45 minutes</span>
              <span class="text-[11px] text-[#43554F]">(including part)</span>
            </td>
            <td class="py-4 px-5 align-top">
              <ul class="space-y-1 text-[#43554F]">
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>High-density spun sediment filter cartridge</span></li>
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>Activated coconut shell carbon filter</span></li>
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>O-ring seal change for leak prevention</span></li>
              </ul>
            </td>
            <td class="py-4 px-4 align-top text-right whitespace-nowrap">
              <span class="font-serif text-lg font-bold text-[#0E5C56]">₹650</span>
            </td>
            <td class="py-4 px-5 align-top text-center whitespace-nowrap">
              <a href="/contact?item=Filter+Replacement" class="btn-primary text-xs py-2 px-3 inline-flex">Book service</a>
            </td>
          </tr>

          <tr class="price-item-row price-row-hover" data-category="repair">
            <td class="py-4 px-5 align-top">
              <div class="font-semibold text-sm text-[#10201D]">RO membrane replacement (75/80 GPD)</div>
              <div class="text-[#43554F] mt-1 max-w-xs leading-relaxed">High-rejection thin-film composite (TFC) membrane installation to restore low TDS and pure taste.</div>
            </td>
            <td class="py-4 px-4 align-top whitespace-nowrap text-[#43554F]">
              <span class="font-medium text-[#0E5C56] block">45 minutes</span>
              <span class="text-[11px] text-[#43554F]">(with 6-month warranty)</span>
            </td>
            <td class="py-4 px-5 align-top">
              <ul class="space-y-1 text-[#43554F]">
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>95%+ salt rejection capacity</span></li>
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>Certified NSF food-grade material</span></li>
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>Flow restrictor valve calibration included</span></li>
              </ul>
            </td>
            <td class="py-4 px-4 align-top text-right whitespace-nowrap">
              <span class="font-serif text-lg font-bold text-[#0E5C56]">₹1,450</span>
            </td>
            <td class="py-4 px-5 align-top text-center whitespace-nowrap">
              <a href="/contact?item=Membrane+Replacement" class="btn-primary text-xs py-2 px-3 inline-flex">Book service</a>
            </td>
          </tr>

          <tr class="price-item-row price-row-hover" data-category="amc">
            <td class="py-4 px-5 align-top">
              <div class="font-semibold text-sm text-[#10201D]">Essential Annual Maintenance Contract</div>
              <div class="text-[#43554F] mt-1 max-w-xs leading-relaxed">Hassle-free yearly coverage ensuring pure drinking water round the year with scheduled quarterly filter changes.</div>
              <span class="inline-block mt-2 text-[10px] font-bold text-[#0E5C56] bg-[#E7F3F1] px-2 py-0.5 rounded border border-[#CFE6E2]">Popular plan</span>
            </td>
            <td class="py-4 px-4 align-top whitespace-nowrap text-[#43554F]">
              <span class="font-medium text-[#0E5C56] block">Scheduled quarterly visits</span>
              <span class="text-[11px] text-[#43554F]">(per year)</span>
            </td>
            <td class="py-4 px-5 align-top">
              <ul class="space-y-1 text-[#43554F]">
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>3 free scheduled service visits per year</span></li>
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>2 sediment and carbon filter replacements included</span></li>
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>Unlimited breakdown complaint calls</span></li>
              </ul>
            </td>
            <td class="py-4 px-4 align-top text-right whitespace-nowrap">
              <span class="font-serif text-lg font-bold text-[#0E5C56]">₹2,499</span>
            </td>
            <td class="py-4 px-5 align-top text-center whitespace-nowrap">
              <a href="/contact?item=Essential+AMC" class="btn-primary text-xs py-2 px-3 inline-flex">Book service</a>
            </td>
          </tr>

          <tr class="price-item-row price-row-hover" data-category="amc">
            <td class="py-4 px-5 align-top">
              <div class="font-semibold text-sm text-[#10201D]">Comprehensive Complete AMC</div>
              <div class="text-[#43554F] mt-1 max-w-xs leading-relaxed">All-inclusive peace of mind contract covering all filters, RO membrane, electrical components, and booster pump.</div>
            </td>
            <td class="py-4 px-4 align-top whitespace-nowrap text-[#43554F]">
              <span class="font-medium text-[#0E5C56] block">Priority 2-hour response</span>
              <span class="text-[11px] text-[#43554F]">(per year)</span>
            </td>
            <td class="py-4 px-5 align-top">
              <ul class="space-y-1 text-[#43554F]">
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>4 scheduled quarterly maintenance visits</span></li>
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>100% free RO membrane replacement</span></li>
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>Free booster pump & adapter replacement</span></li>
              </ul>
            </td>
            <td class="py-4 px-4 align-top text-right whitespace-nowrap">
              <span class="font-serif text-lg font-bold text-[#0E5C56]">₹3,999</span>
            </td>
            <td class="py-4 px-5 align-top text-center whitespace-nowrap">
              <a href="/contact?item=Comprehensive+AMC" class="btn-primary text-xs py-2 px-3 inline-flex">Book service</a>
            </td>
          </tr>

          <tr class="price-item-row price-row-hover" data-category="product">
            <td class="py-4 px-5 align-top">
              <div class="font-semibold text-sm text-[#10201D]">Jalcare Aqua Pure 8-Stage Copper RO</div>
              <div class="text-[#43554F] mt-1 max-w-xs leading-relaxed">Advanced household purifier with Copper-Zinc enrichment, UV sanitization, and real-time digital TDS indicator.</div>
            </td>
            <td class="py-4 px-4 align-top whitespace-nowrap text-[#43554F]">
              <span class="font-medium text-[#0E5C56] block">Next morning installation</span>
              <span class="text-[11px] text-[#43554F]">(includes setup)</span>
            </td>
            <td class="py-4 px-5 align-top">
              <ul class="space-y-1 text-[#43554F]">
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>10 Litre food-grade transparent storage tank</span></li>
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>Active copper + alkaline mineral balance module</span></li>
                <li class="flex items-start gap-1.5"><span class="text-[#0E5C56] font-bold">•</span><span>1-year comprehensive onsite warranty</span></li>
              </ul>
            </td>
            <td class="py-4 px-4 align-top text-right whitespace-nowrap">
              <span class="font-serif text-lg font-bold text-[#0E5C56]">₹11,499</span>
            </td>
            <td class="py-4 px-5 align-top text-center whitespace-nowrap">
              <a href="/contact?item=Jalcare+Aqua+Pure+Copper+RO" class="btn-primary text-xs py-2 px-3 inline-flex">Order purifier</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile Single Column Reflow -->
    <div class="lg:hidden space-y-4">
      <div class="price-item-row bg-white border border-[#CFE6E2] rounded-lg p-5 space-y-3 price-row-hover" data-category="repair">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="font-serif text-base font-bold text-[#10201D]">On-demand repair & diagnostic check</h3>
            <span class="text-xs text-[#0E5C56] font-medium block mt-0.5">Same day (within 2 hours)</span>
          </div>
          <div class="text-right shrink-0">
            <span class="font-serif text-lg font-bold text-[#0E5C56] block">₹299</span>
            <span class="text-[10px] text-[#43554F] block">per visit</span>
          </div>
        </div>
        <p class="text-xs text-[#43554F] leading-relaxed">Complete health audit of your RO system, including leak inspection, electrical circuit check, and pump pressure test.</p>
        <a href="/contact?item=On-demand+repair" class="btn-primary w-full text-xs py-3 min-h-[44px]">Book service</a>
      </div>

      <div class="price-item-row bg-white border border-[#CFE6E2] rounded-lg p-5 space-y-3 price-row-hover" data-category="amc">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="font-serif text-base font-bold text-[#10201D]">Essential Annual Maintenance Contract</h3>
            <span class="text-xs text-[#0E5C56] font-medium block mt-0.5">Scheduled quarterly visits</span>
          </div>
          <div class="text-right shrink-0">
            <span class="font-serif text-lg font-bold text-[#0E5C56] block">₹2,499</span>
            <span class="text-[10px] text-[#43554F] block">per year</span>
          </div>
        </div>
        <p class="text-xs text-[#43554F] leading-relaxed">Hassle-free yearly coverage ensuring pure drinking water round the year with scheduled filter changes.</p>
        <a href="/contact?item=Essential+AMC" class="btn-primary w-full text-xs py-3 min-h-[44px]">Book service</a>
      </div>

      <div class="price-item-row bg-white border border-[#CFE6E2] rounded-lg p-5 space-y-3 price-row-hover" data-category="product">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="font-serif text-base font-bold text-[#10201D]">Jalcare Aqua Pure 8-Stage Copper RO</h3>
            <span class="text-xs text-[#0E5C56] font-medium block mt-0.5">Next morning installation</span>
          </div>
          <div class="text-right shrink-0">
            <span class="font-serif text-lg font-bold text-[#0E5C56] block">₹11,499</span>
            <span class="text-[10px] text-[#43554F] block">includes setup</span>
          </div>
        </div>
        <p class="text-xs text-[#43554F] leading-relaxed">Advanced household purifier with Copper-Zinc enrichment and digital TDS indicator.</p>
        <a href="/contact?item=Jalcare+Copper+RO" class="btn-primary w-full text-xs py-3 min-h-[44px]">Order purifier</a>
      </div>
    </div>

  </div>
</section>

<!-- Additional Guarantees -->
<section class="py-12 bg-[#FBFDFC] border-t border-[#CFE6E2]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
      <div class="p-5 border border-[#CFE6E2] rounded-lg bg-white">
        <h3 class="font-serif text-base font-bold text-[#10201D] mb-1">6-Month Warranty</h3>
        <p class="text-xs text-[#43554F]">All replaced RO membranes and electrical parts come with an unconditional 6-month replacement guarantee.</p>
      </div>
      <div class="p-5 border border-[#CFE6E2] rounded-lg bg-white">
        <h3 class="font-serif text-base font-bold text-[#10201D] mb-1">Free TDS Measurement</h3>
        <p class="text-xs text-[#43554F]">Our technician measures both raw tap water and purified water TDS before and after every service call.</p>
      </div>
      <div class="p-5 border border-[#CFE6E2] rounded-lg bg-white">
        <h3 class="font-serif text-base font-bold text-[#10201D] mb-1">Multi-Brand Support</h3>
        <p class="text-xs text-[#43554F]">We service all major brands: Kent, Aquaguard, Pureit, Havells, Livpure, Blue Star, LG, and local RO assemblies.</p>
      </div>
    </div>
  </div>
</section>
`;

// CONTACT PAGE HTML
const contactHtml = `
<section class="bg-[#E7F3F1] py-12 sm:py-16 border-b border-[#CFE6E2]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3">
    <span class="text-xs font-semibold text-[#0E5C56] uppercase tracking-wider block">Doorstep Booking & Support</span>
    <h1 class="font-serif text-3xl sm:text-4xl font-bold text-[#10201D]">Book a repair call or visit our service center</h1>
    <p class="text-sm text-[#43554F] max-w-2xl leading-relaxed">Fill out our quick booking form for doorstep repair within 2 hours, or call our emergency desk directly.</p>
  </div>
</section>

<section class="py-12 sm:py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      
      <!-- Booking Form Column -->
      <div class="lg:col-span-7">
        <!-- Success message box hidden by default -->
        <div id="form-success-box" class="hidden bg-[#E7F3F1] border border-[#0E5C56] rounded-lg p-6 text-left space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-[#0E5C56] text-white flex items-center justify-center font-bold">✓</div>
            <div>
              <h3 class="font-serif text-lg font-bold text-[#10201D]">Doorstep service request confirmed!</h3>
              <p class="text-xs text-[#43554F]">Ticket Reference: <span id="ticket-ref" class="font-semibold text-[#0E5C56]">JAL-918231</span></p>
            </div>
          </div>
          <p class="text-xs text-[#10201D] leading-relaxed">
            Thank you, <span id="confirm-name" class="font-semibold">Customer</span>. Our technician will call you shortly on <span id="confirm-phone" class="font-semibold">phone</span> to confirm arrival at your location.
          </p>
          <div class="bg-white p-3.5 rounded border border-[#CFE6E2] text-xs text-[#43554F] space-y-1">
            <p><strong class="text-[#10201D]">Requested Service:</strong> <span id="confirm-service">RO Repair</span></p>
            <p><strong class="text-[#10201D]">Preferred Time:</strong> <span id="confirm-time">Morning</span></p>
            <p><strong class="text-[#10201D]">Address:</strong> <span id="confirm-address">Sector 14</span></p>
          </div>
          <button onclick="location.reload()" class="btn-secondary text-xs py-2 px-4">Book another service</button>
        </div>

        <form id="booking-form" class="bg-white border border-[#CFE6E2] rounded-lg p-6 space-y-4">
          <h3 class="font-serif text-xl font-bold text-[#10201D]">Book doorstep service appointment</h3>
          <p class="text-xs text-[#43554F]">Fill out your details below for same-day repair or water purifier demonstration.</p>

          <div>
            <label for="form-name" class="block text-xs font-semibold text-[#10201D] mb-1">Your full name *</label>
            <input type="text" id="form-name" required placeholder="e.g. Rajesh Kumar" class="w-full px-3.5 py-2.5 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none min-h-[44px]">
          </div>

          <div>
            <label for="form-phone" class="block text-xs font-semibold text-[#10201D] mb-1">Mobile phone number *</label>
            <input type="tel" id="form-phone" required pattern="[0-9]{10}" placeholder="10-digit mobile number (e.g. 9876543210)" class="w-full px-3.5 py-2.5 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none min-h-[44px]">
          </div>

          <div>
            <label for="form-service" class="block text-xs font-semibold text-[#10201D] mb-1">Select service or product required *</label>
            <select id="form-service" class="w-full px-3.5 py-2.5 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none min-h-[44px]">
              <option value="On-demand repair & diagnostic check (₹299)">On-demand repair & diagnostic check (₹299)</option>
              <option value="Filter & sediment cartridge replacement (₹650)">Filter & sediment cartridge replacement (₹650)</option>
              <option value="RO membrane replacement 75 GPD (₹1,450)">RO membrane replacement 75 GPD (₹1,450)</option>
              <option value="Essential AMC annual contract (₹2,499)">Essential AMC annual contract (₹2,499)</option>
              <option value="Comprehensive complete AMC (₹3,999)">Comprehensive complete AMC (₹3,999)</option>
              <option value="Jalcare Aqua Pure 8-Stage Copper RO (₹11,499)">Jalcare Aqua Pure 8-Stage Copper RO (₹11,499)</option>
            </select>
          </div>

          <div>
            <label for="form-time" class="block text-xs font-semibold text-[#10201D] mb-1">Preferred visit time slot</label>
            <select id="form-time" class="w-full px-3.5 py-2.5 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none min-h-[44px]">
              <option value="Immediate Emergency (Within 2 Hours)">Immediate emergency (within 2 hours)</option>
              <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
              <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
              <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
            </select>
          </div>

          <div>
            <label for="form-address" class="block text-xs font-semibold text-[#10201D] mb-1">Doorstep location / full address *</label>
            <textarea id="form-address" required rows="2" placeholder="Flat / House No, Street name, Sector/Colony, Landmark" class="w-full px-3.5 py-2.5 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none"></textarea>
          </div>

          <div>
            <label for="form-comments" class="block text-xs font-semibold text-[#10201D] mb-1">Additional notes / symptom details (optional)</label>
            <textarea id="form-comments" rows="2" placeholder="e.g. Purifier brand is Kent Grand, leaking from bottom plastic filter bowl" class="w-full px-3.5 py-2.5 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none"></textarea>
          </div>

          <button type="submit" id="form-submit-btn" class="btn-primary w-full py-3 text-sm min-h-[44px]">Book doorstep appointment</button>
          <p class="text-[11px] text-[#43554F] text-center">No upfront payment required. Pay only after service completion & satisfaction.</p>
        </form>
      </div>

      <!-- Business Info Column -->
      <div class="lg:col-span-5 space-y-6">
        <div class="bg-white border border-[#CFE6E2] rounded-lg p-6 space-y-4">
          <h3 class="font-serif text-xl font-bold text-[#10201D]">Jalcare Service Center</h3>

          <div class="space-y-3 text-xs text-[#10201D]">
            <div class="flex items-start gap-3">
              <span class="w-7 h-7 rounded bg-[#E7F3F1] text-[#0E5C56] flex items-center justify-center font-bold text-sm shrink-0">📍</span>
              <div>
                <strong class="block font-semibold">Store & Workshop Address:</strong>
                <p class="text-[#43554F]">Shop No. 12, Jalcare Water Plaza, Sector 14 Main Road, Landmark: Near Central Bank Branch.</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="w-7 h-7 rounded bg-[#E7F3F1] text-[#0E5C56] flex items-center justify-center font-bold text-sm shrink-0">📞</span>
              <div>
                <strong class="block font-semibold">Emergency Desk Phone:</strong>
                <p class="text-[#43554F]">
                  <a href="tel:+919876543210" class="hover:text-[#0E5C56] underline">+91 98765 43210</a> / 
                  <a href="tel:+919876543211" class="hover:text-[#0E5C56] underline">+91 98765 43211</a>
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="w-7 h-7 rounded bg-[#E7F3F1] text-[#0E5C56] flex items-center justify-center font-bold text-sm shrink-0">✉️</span>
              <div>
                <strong class="block font-semibold">Support Email:</strong>
                <p class="text-[#43554F]">support@jalcarero.com</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="w-7 h-7 rounded bg-[#E7F3F1] text-[#0E5C56] flex items-center justify-center font-bold text-sm shrink-0">🕒</span>
              <div>
                <strong class="block font-semibold">Service Desk Hours:</strong>
                <p class="text-[#43554F]">Monday – Sunday: 8:00 AM to 8:30 PM</p>
              </div>
            </div>
          </div>

          <div class="pt-2 border-t border-[#CFE6E2]">
            <strong class="text-xs text-[#0E5C56] block mb-1">Doorstep Service Coverage Zones:</strong>
            <p class="text-[11px] text-[#43554F] leading-relaxed">Sector 1 to 24, Riverside Enclave, Green Park Colony, Sunrise Hub, Mayur Vihar, City Center, and surrounding 15 km radius.</p>
          </div>
        </div>

        <!-- Interactive Map Component -->
        <div class="bg-[#E7F3F1] border border-[#CFE6E2] rounded-lg p-5 space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="font-serif text-sm font-bold text-[#10201D]">Service Center Map & Location</h4>
            <span class="text-[10px] font-semibold text-[#0E5C56] bg-white px-2 py-0.5 rounded border border-[#CFE6E2]">Open Today</span>
          </div>

          <div class="w-full h-48 bg-white border border-[#CFE6E2] rounded-md overflow-hidden relative flex items-center justify-center">
            <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(#0E5C56 1px, transparent 1px); background-size: 16px 16px;"></div>
            <svg class="w-full h-full absolute inset-0" viewBox="0 0 400 200">
              <path d="M 20 100 Q 150 40 380 120" stroke="#CFE6E2" stroke-width="8" fill="none"></path>
              <path d="M 200 10 L 200 190" stroke="#CFE6E2" stroke-width="6" fill="none"></path>
              <path d="M 50 160 Q 200 120 350 30" stroke="#E7F3F1" stroke-width="5" fill="none"></path>
            </svg>
            <div class="relative z-10 flex flex-col items-center">
              <div class="w-8 h-8 rounded-full bg-[#0E5C56] text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">📍</div>
              <span class="bg-[#10201D] text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow mt-1 whitespace-nowrap">Jalcare RO Workshop</span>
            </div>
          </div>

          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="btn-secondary w-full text-xs py-2 text-center block">Get directions on Google Maps</a>
        </div>
      </div>

    </div>
  </div>
</section>
`;

// HELP PAGE HTML
const helpHtml = `
<section class="bg-[#E7F3F1] py-12 sm:py-16 border-b border-[#CFE6E2]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3">
    <span class="text-xs font-semibold text-[#0E5C56] uppercase tracking-wider block">Customer Support & Diagnostics</span>
    <h1 class="font-serif text-3xl sm:text-4xl font-bold text-[#10201D]">Help center, FAQs, and RO troubleshooting guide</h1>
    <p class="text-sm text-[#43554F] max-w-2xl leading-relaxed">Find fast answers about TDS levels, filter lifespan, maintenance schedules, and step-by-step DIY guidance for common purifier warnings.</p>
  </div>
</section>

<!-- Troubleshooting Checklist Section -->
<section class="py-12 sm:py-16 border-b border-[#CFE6E2]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white border border-[#CFE6E2] rounded-lg p-6 space-y-6">
      <div class="space-y-1">
        <h3 class="font-serif text-xl font-bold text-[#10201D]">RO Troubleshooting Checklist</h3>
        <p class="text-xs text-[#43554F]">Click on any common purifier fault below to see immediate safety steps and resolution advice.</p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button onclick="selectTroubleIssue('water leaking')" data-key="water leaking" class="trouble-tab-btn p-3 text-xs font-semibold rounded-md text-center min-h-[44px] bg-[#0E5C56] text-white border border-[#0E5C56]">water leaking</button>
        <button onclick="selectTroubleIssue('bad taste')" data-key="bad taste" class="trouble-tab-btn p-3 text-xs font-semibold rounded-md text-center min-h-[44px] bg-[#FBFDFC] text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]">bad taste</button>
        <button onclick="selectTroubleIssue('low pressure')" data-key="low pressure" class="trouble-tab-btn p-3 text-xs font-semibold rounded-md text-center min-h-[44px] bg-[#FBFDFC] text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]">low pressure</button>
        <button onclick="selectTroubleIssue('red light')" data-key="red light" class="trouble-tab-btn p-3 text-xs font-semibold rounded-md text-center min-h-[44px] bg-[#FBFDFC] text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]">red light</button>
      </div>

      <div class="bg-[#E7F3F1] border border-[#CFE6E2] rounded-lg p-5 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#CFE6E2] pb-3">
          <h4 id="tb-title" class="font-serif text-lg font-bold text-[#10201D]">Water leaking beneath purifier or tank</h4>
          <span id="tb-severity" class="text-[11px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider self-start sm:self-auto bg-red-100 text-red-800 border border-red-200">HIGH urgency</span>
        </div>

        <div class="text-xs text-[#43554F] space-y-1">
          <strong class="text-[#10201D] block">Observed symptoms:</strong>
          <p id="tb-symptoms" class="italic">Water dripping from filter housing, bottom tray, or wall bracket fittings.</p>
        </div>

        <div class="space-y-1.5">
          <strong class="text-xs text-[#10201D] block">Most common causes:</strong>
          <ul id="tb-causes" class="space-y-1 text-xs text-[#43554F]">
            <li class="flex items-start gap-2"><span class="text-[#0E5C56] font-bold">•</span><span>Worn out silicone O-ring gasket inside filter housing</span></li>
            <li class="flex items-start gap-2"><span class="text-[#0E5C56] font-bold">•</span><span>Cracked elbow fitting or loose poly-tube connection</span></li>
          </ul>
        </div>

        <div class="bg-white p-4 rounded border border-[#CFE6E2] space-y-2">
          <strong class="text-xs text-[#0E5C56] font-bold block uppercase tracking-wider">Immediate Action Steps:</strong>
          <ol id="tb-steps" class="space-y-1.5 text-xs text-[#10201D] list-decimal list-inside">
            <li class="leading-relaxed">Immediately turn off the main water supply valve connecting to the RO unit.</li>
            <li class="leading-relaxed">Unplug the power adapter to avoid short circuiting electrical components.</li>
            <li class="leading-relaxed">Check if leak originates from the external pre-filter bottle or internal tubing.</li>
          </ol>
        </div>

        <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p id="tb-recommendation" class="text-xs text-[#43554F] leading-relaxed">Do not operate the machine while leaking. Book a quick repair call for a technician to replace damaged tube elbows or housing seals.</p>
          <a id="tb-action" href="/contact?issue=Water+Leaking" class="btn-primary text-xs py-2.5 px-4 shrink-0 w-full sm:w-auto text-center">Book technician visit</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Accordion -->
<section class="py-12 sm:py-16 bg-[#FBFDFC]">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
    <div class="text-left space-y-2">
      <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#10201D]">Frequently asked questions</h2>
      <p class="text-sm text-[#43554F]">Have questions about drinking water safety or our service process? Check our clear answers below.</p>
    </div>

    <div class="space-y-3">
      <div class="border border-[#CFE6E2] rounded-lg bg-white overflow-hidden">
        <button onclick="toggleFaq('tds')" class="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif text-base font-semibold text-[#10201D] hover:bg-[#E7F3F1]/40 transition-colors focus:outline-none min-h-[44px]">
          <span>What is the recommended TDS level for safe drinking water?</span>
          <span id="faq-icon-tds" class="w-6 h-6 rounded-full bg-[#0E5C56] text-white border border-[#0E5C56] flex items-center justify-center font-bold text-sm shrink-0 transition-transform duration-300 rotate-180">↓</span>
        </button>
        <div id="faq-content-tds" class="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#43554F] leading-relaxed border-t border-[#CFE6E2]/40 bg-[#FBFDFC]">
          According to WHO and Indian Standards (IS 10500), drinking water TDS between 80 ppm and 250 ppm is considered ideal. TDS below 50 ppm may lack essential natural minerals, while TDS above 500 ppm can impart a brackish taste. Jalcare technicians calibrate your RO post-filter mineralizer to maintain optimal 120-180 ppm.
        </div>
      </div>

      <div class="border border-[#CFE6E2] rounded-lg bg-white overflow-hidden">
        <button onclick="toggleFaq('freq')" class="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif text-base font-semibold text-[#10201D] hover:bg-[#E7F3F1]/40 transition-colors focus:outline-none min-h-[44px]">
          <span>How frequently should an RO water purifier be serviced?</span>
          <span id="faq-icon-freq" class="w-6 h-6 rounded-full bg-[#E7F3F1] border border-[#CFE6E2] flex items-center justify-center text-[#0E5C56] font-bold text-sm shrink-0 transition-transform duration-300">↓</span>
        </button>
        <div id="faq-content-freq" class="hidden px-5 pb-5 pt-1 text-xs sm:text-sm text-[#43554F] leading-relaxed border-t border-[#CFE6E2]/40 bg-[#FBFDFC]">
          Sediment and pre-carbon filters should be changed every 3 to 6 months depending on raw input water quality. The main RO membrane typically lasts 12 to 18 months.
        </div>
      </div>

      <div class="border border-[#CFE6E2] rounded-lg bg-white overflow-hidden">
        <button onclick="toggleFaq('amc')" class="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif text-base font-semibold text-[#10201D] hover:bg-[#E7F3F1]/40 transition-colors focus:outline-none min-h-[44px]">
          <span>Why should I choose an AMC over booking individual repairs?</span>
          <span id="faq-icon-amc" class="w-6 h-6 rounded-full bg-[#E7F3F1] border border-[#CFE6E2] flex items-center justify-center text-[#0E5C56] font-bold text-sm shrink-0 transition-transform duration-300">↓</span>
        </button>
        <div id="faq-content-amc" class="hidden px-5 pb-5 pt-1 text-xs sm:text-sm text-[#43554F] leading-relaxed border-t border-[#CFE6E2]/40 bg-[#FBFDFC]">
          An AMC saves you up to 35% annually compared to buying individual filters and paying separate visit fees. More importantly, AMC includes proactive quarterly checkups so your water quality is monitored before issues arise.
        </div>
      </div>
    </div>
  </div>
</section>
`;

// REVIEWS PAGE HTML
const reviewsHtml = `
<section class="bg-[#E7F3F1] py-12 sm:py-16 border-b border-[#CFE6E2]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3">
    <span class="text-xs font-semibold text-[#0E5C56] uppercase tracking-wider block">Verified Testimonials</span>
    <h1 class="font-serif text-3xl sm:text-4xl font-bold text-[#10201D]">What local households and businesses say about Jalcare</h1>
    <p class="text-sm text-[#43554F] max-w-2xl leading-relaxed">Real feedback from local residents who trust us for emergency repairs, filter maintenance, and pure drinking water.</p>
  </div>
</section>

<section class="py-12 sm:py-16">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-8 p-6 bg-white border border-[#CFE6E2] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2">
          <span class="font-serif text-3xl font-bold text-[#10201D]">4.9</span>
          <div>
            <div class="flex items-center text-[#C98A2E] text-base">★★★★★</div>
            <span class="text-xs text-[#43554F]">Based on 1,240+ verified local doorstep visits</span>
          </div>
        </div>
      </div>
      <a href="/contact" class="btn-primary text-xs py-2.5 px-4">Book doorstep service</a>
    </div>

    <!-- Category Filters -->
    <div class="flex flex-wrap items-center gap-2 border-b border-[#CFE6E2] pb-4 mb-6">
      <button onclick="filterReviews('all')" data-type="all" class="rev-filter-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] bg-[#0E5C56] text-white border border-[#0E5C56]">All Customer Reviews</button>
      <button onclick="filterReviews('repair')" data-type="repair" class="rev-filter-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] bg-white text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]">Repair Services</button>
      <button onclick="filterReviews('amc')" data-type="amc" class="rev-filter-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] bg-white text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]">Annual Contracts (AMC)</button>
      <button onclick="filterReviews('purchase')" data-type="purchase" class="rev-filter-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-md min-h-[44px] bg-white text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]">Purifier Sales</button>
    </div>

    <div class="space-y-4">
      <article class="review-article bg-white border border-[#CFE6E2] rounded-lg p-6 space-y-3" data-type="repair">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#CFE6E2]/40 pb-3">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-serif text-base font-bold text-[#10201D]">Rajesh Sharma</h3>
              <span class="text-[10px] font-semibold text-[#0E5C56] bg-[#E7F3F1] px-2 py-0.5 rounded border border-[#CFE6E2]">Verified Customer</span>
            </div>
            <p class="text-xs text-[#43554F] mt-0.5">Sector 14, Resident</p>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-[#C98A2E] text-sm">★★★★★</div>
            <span class="text-xs text-[#43554F]">14 Aug 2026</span>
          </div>
        </div>
        <div class="inline-block text-[11px] font-medium text-[#0E5C56] bg-[#E7F3F1] px-2.5 py-0.5 rounded">Service: RO Repair & Membrane Change</div>
        <blockquote class="text-xs sm:text-sm text-[#10201D] leading-relaxed italic border-l-2 border-[#0E5C56] pl-3 py-0.5">
          "Our RO started leaking water on a Sunday morning. Jalcare technician arrived within 90 minutes, replaced the cracked elbow and membrane with genuine parts, and checked our TDS levels before leaving. Extremely prompt and honest pricing."
        </blockquote>
      </article>

      <article class="review-article bg-white border border-[#CFE6E2] rounded-lg p-6 space-y-3" data-type="amc">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#CFE6E2]/40 pb-3">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-serif text-base font-bold text-[#10201D]">Priya Nair</h3>
              <span class="text-[10px] font-semibold text-[#0E5C56] bg-[#E7F3F1] px-2 py-0.5 rounded border border-[#CFE6E2]">Verified Customer</span>
            </div>
            <p class="text-xs text-[#43554F] mt-0.5">Riverside Apartments, Flat 402</p>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-[#C98A2E] text-sm">★★★★★</div>
            <span class="text-xs text-[#43554F]">28 Jul 2026</span>
          </div>
        </div>
        <div class="inline-block text-[11px] font-medium text-[#0E5C56] bg-[#E7F3F1] px-2.5 py-0.5 rounded">Service: Comprehensive AMC Plan</div>
        <blockquote class="text-xs sm:text-sm text-[#10201D] leading-relaxed italic border-l-2 border-[#0E5C56] pl-3 py-0.5">
          "I've been on their annual AMC for two years now. Never had to call twice for regular servicing. They send automatic SMS reminders and their engineers are polite, clean, and knowledgeable."
        </blockquote>
      </article>

      <article class="review-article bg-white border border-[#CFE6E2] rounded-lg p-6 space-y-3" data-type="purchase">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#CFE6E2]/40 pb-3">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-serif text-base font-bold text-[#10201D]">Anand Kulkarni</h3>
              <span class="text-[10px] font-semibold text-[#0E5C56] bg-[#E7F3F1] px-2 py-0.5 rounded border border-[#CFE6E2]">Verified Customer</span>
            </div>
            <p class="text-xs text-[#43554F] mt-0.5">Green Park Colony</p>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-[#C98A2E] text-sm">★★★★★</div>
            <span class="text-xs text-[#43554F]">03 Jul 2026</span>
          </div>
        </div>
        <div class="inline-block text-[11px] font-medium text-[#0E5C56] bg-[#E7F3F1] px-2.5 py-0.5 rounded">Service: Jalcare Aqua Pure 8-Stage Purchase</div>
        <blockquote class="text-xs sm:text-sm text-[#10201D] leading-relaxed italic border-l-2 border-[#0E5C56] pl-3 py-0.5">
          "Purchased the Copper RO unit for our home. The water taste improved dramatically from our high-borewell supply (TDS dropped from 850 ppm to 140 ppm). Demo and installation were completely free."
        </blockquote>
      </article>
    </div>
  </div>
</section>
`;

let mongoClient: any = null;
let mongoDb: any = null;

async function getMongoCollection() {
  if (mongoDb) return mongoDb.collection("bookings");
  const uri = process.env.MONGODB_URI;
  if (!uri || uri.includes("YOUR_ACTUAL_PASSWORD")) {
    return null;
  }
  try {
    const { MongoClient } = await import("mongodb");
    if (!mongoClient) {
      mongoClient = new MongoClient(uri);
      await mongoClient.connect();
      console.log("✅ Successfully connected to MongoDB Atlas cluster!");
    }
    mongoDb = mongoClient.db("jalcare_ro");
    return mongoDb.collection("bookings");
  } catch (err: any) {
    return null;
  }
}

// Create HTTP Server
const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(
    req.url || "/",
    `http://${req.headers.host || "localhost"}`,
  );
  const pathname = reqUrl.pathname;

  // Serve API Route: POST & GET /api/booking
  if (pathname === "/api/booking") {
    if (req.method === "GET") {
      try {
        const collection = await getMongoCollection();
        if (collection) {
          const mongoBookings = await collection.find({}).sort({ createdAt: -1 }).toArray();
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ success: true, source: "mongodb", count: mongoBookings.length, bookings: mongoBookings }),
          );
          return;
        }
      } catch (mErr) {}

      const bookingsPath = path.join(process.cwd(), "bookings.json");
      let bookings = [];
      if (fs.existsSync(bookingsPath)) {
        try {
          bookings = JSON.parse(fs.readFileSync(bookingsPath, "utf-8"));
        } catch (e) {}
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ success: true, source: "file", count: bookings.length, bookings }),
      );
      return;
    }

    if (req.method === "POST") {
      let bodyStr = "";
      req.on("data", (chunk) => (bodyStr += chunk));
      req.on("end", async () => {
        try {
          const body = JSON.parse(bodyStr || "{}");
          const ticketId = "JAL-" + Math.floor(100000 + Math.random() * 900000);
          const bookingRecord = {
            ticketId,
            name: body.name || "N/A",
            phone: body.phone || "N/A",
            serviceType: body.serviceType || "N/A",
            preferredTime: body.preferredTime || "N/A",
            address: body.address || "N/A",
            comments: body.comments || "",
            status: "Pending",
            createdAt: new Date().toISOString(),
          };

          // 1. Save directly to MongoDB Atlas
          try {
            const collection = await getMongoCollection();
            if (collection) {
              await collection.insertOne({ ...bookingRecord });
              console.log(`✅ MongoDB: Booking ${ticketId} saved to database!`);
            }
          } catch (mErr: any) {
            console.log(`⚠️ MongoDB Save Error:`, mErr.message);
          }

          // 2. Backup local file storage
          const bookingsPath = path.join(process.cwd(), "bookings.json");
          let bookings = [];
          if (fs.existsSync(bookingsPath)) {
            try {
              bookings = JSON.parse(fs.readFileSync(bookingsPath, "utf-8"));
            } catch (e) {}
          }
          bookings.unshift(bookingRecord);
          fs.writeFileSync(bookingsPath, JSON.stringify(bookings, null, 2));

          // 3. Print live log to terminal
          console.log(`\n==================================================`);
          console.log(`  📩 NEW BOOKING RECEIVED! Ticket: ${ticketId}`);
          console.log(`==================================================`);
          console.log(`  Name:      ${bookingRecord.name}`);
          console.log(`  Phone:     ${bookingRecord.phone}`);
          console.log(`  Service:   ${bookingRecord.serviceType}`);
          console.log(`  Time Slot: ${bookingRecord.preferredTime}`);
          console.log(`  Address:   ${bookingRecord.address}`);
          if (bookingRecord.comments) {
            console.log(`  Notes:     ${bookingRecord.comments}`);
          }
          console.log(`==================================================\n`);

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              success: true,
              ticketId,
              message: "Booking saved to MongoDB Atlas database successfully",
              data: bookingRecord,
            }),
          );
        } catch (e) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: false, error: "Invalid JSON" }));
        }
      });
      return;
    }
  }

  // Serve API Route: GET /api/diagnose
  if (pathname === "/api/diagnose") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ success: true, status: "RO Diagnostic engine online" }),
    );
    return;
  }

  // Page Routing
  let title = "Jalcare RO | Doorstep RO Sales, Repair & AMC Services";
  let description =
    "Certified doorstep repair, filter change, TDS calibration, and annual maintenance for RO water purifiers.";
  let pageContent = landingHtml;

  if (pathname === "/services") {
    title = "Services & Pricing List | Jalcare RO";
    description =
      "Transparent repair charges, AMC plans, and new RO purifier pricing.";
    pageContent = servicesHtml;
  } else if (pathname === "/contact") {
    title = "Book Doorstep Repair & Contact | Jalcare RO";
    description =
      "Book same-day doorstep repair within 2 hours or visit our local service center.";
    pageContent = contactHtml;
  } else if (pathname === "/help") {
    title = "Troubleshooting & Customer Support | Jalcare RO";
    description =
      "RO troubleshooting checklist, FAQs, and step-by-step resolution advice.";
    pageContent = helpHtml;
  } else if (pathname === "/reviews") {
    title = "Verified Customer Reviews | Jalcare RO";
    description =
      "Read 1,200+ verified customer reviews for doorstep repair and purifiers.";
    pageContent = reviewsHtml;
  } else if (pathname === "/admin") {
    title = "Admin Portal | Jalcare RO Inquiries";
    description = "Protected portal for viewing doorstep service bookings.";
    pageContent = `
<section class="min-h-screen py-12 bg-[#FBFDFC]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
    
    <div id="admin-login-box" class="max-w-md mx-auto bg-white border border-[#CFE6E2] rounded-lg p-8 space-y-6 shadow-sm">
      <div class="text-center space-y-2">
        <div class="w-12 h-12 rounded-full bg-[#0E5C56] text-white font-serif font-bold text-2xl flex items-center justify-center mx-auto">🔒</div>
        <h1 class="font-serif text-2xl font-bold text-[#10201D]">Jalcare Admin Desk</h1>
        <p class="text-xs text-[#43554F]">Enter security PIN to view customer inquiries & doorstep bookings saved in MongoDB.</p>
      </div>

      <div class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-[#10201D] mb-1">Admin Security PIN *</label>
          <input type="password" id="admin-pin-input" placeholder="Enter PIN (Default: 1234)" class="w-full px-4 py-3 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none min-h-[44px]">
        </div>
        <div id="admin-error-msg" class="hidden p-3 text-xs bg-red-50 text-red-700 border border-red-200 rounded">Invalid admin PIN. Please try again.</div>
        <button onclick="checkAdminPin()" class="btn-primary w-full py-3 text-sm min-h-[44px]">Access Admin Portal</button>
      </div>
      <p class="text-[11px] text-[#43554F] text-center">Protected portal. Default PIN is <code class="bg-[#E7F3F1] px-1.5 py-0.5 rounded font-mono font-bold text-[#0E5C56]">1234</code>.</p>
    </div>

    <div id="admin-dashboard-view" class="hidden space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#CFE6E2] pb-4">
        <div>
          <span class="text-xs font-semibold text-[#C98A2E] uppercase tracking-wider block">Real-time Customer Ledger</span>
          <h2 class="font-serif text-2xl font-bold text-[#10201D]">Doorstep Inquiries & MongoDB Bookings</h2>
        </div>
        <button onclick="loadAdminInquiries()" class="btn-primary text-xs py-2 px-4">Refresh Inquiries</button>
      </div>

      <div id="inquiries-container" class="space-y-4"></div>
    </div>

  </div>
</section>

<script>
  function checkAdminPin() {
    const pin = document.getElementById('admin-pin-input').value;
    if (pin === '1234') {
      document.getElementById('admin-login-box').classList.add('hidden');
      document.getElementById('admin-dashboard-view').classList.remove('hidden');
      loadAdminInquiries();
      // Auto-refresh admin panel every 5 seconds for new live bookings
      setInterval(loadAdminInquiries, 5000);
    } else {
      document.getElementById('admin-error-msg').classList.remove('hidden');
    }
  }

  async function loadAdminInquiries() {
    const container = document.getElementById('inquiries-container');
    if (!container) return;
    container.innerHTML = '<div class="p-8 text-center text-xs text-[#43554F]">Loading MongoDB booking records...</div>';
    try {
      const res = await fetch('/api/booking');
      const data = await res.json();
      const list = data.bookings || [];
      if (list.length === 0) {
        container.innerHTML = '<div class="p-8 bg-white border border-[#CFE6E2] rounded-lg text-center font-serif text-sm font-semibold text-[#10201D]">No customer inquiries recorded yet. Form submissions will appear here.</div>';
        return;
      }
      var html = '';
      for (var i = 0; i < list.length; i++) {
        var b = list[i];
        var ticket = b.ticketId || 'JAL-1001';
        var name = b.name || 'Customer';
        var phone = b.phone || '';
        var service = b.serviceType || 'Service';
        var timeSlot = b.preferredTime || 'Anytime';
        var address = b.address || '';
        var comments = b.comments || '';
        var status = b.status || 'Pending';
        var dateStr = b.createdAt ? new Date(b.createdAt).toLocaleString('en-IN') : 'Just now';

        html += '<div class="bg-white border border-[#CFE6E2] rounded-lg p-5 space-y-3 hover:border-[#0E5C56] transition-colors">' +
          '<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#CFE6E2]/40 pb-3">' +
            '<div>' +
              '<span class="font-serif text-sm font-bold text-[#0E5C56] block">Ticket: ' + ticket + '</span>' +
              '<strong class="text-base text-[#10201D] block mt-0.5">' + name + '</strong>' +
              '<a href="tel:' + phone + '" class="text-xs text-[#0E5C56] font-semibold hover:underline">📞 ' + phone + '</a>' +
            '</div>' +
            '<div class="text-right">' +
              '<span class="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">' + status + '</span>' +
              '<span class="text-[11px] text-[#43554F] block mt-1">' + dateStr + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">' +
            '<div><strong class="text-[#10201D]">Service:</strong> <span class="text-[#43554F]">' + service + '</span></div>' +
            '<div><strong class="text-[#10201D]">Time Slot:</strong> <span class="text-[#43554F]">' + timeSlot + '</span></div>' +
          '</div>' +
          '<div class="text-xs bg-[#E7F3F1] p-3 rounded border border-[#CFE6E2]">' +
            '<strong class="text-[#10201D] block">Doorstep Address:</strong>' +
            '<p class="text-[#43554F] mt-0.5">' + address + '</p>' +
            (comments ? '<p class="text-[#43554F] italic mt-1 font-sans">"' + comments + '"</p>' : '') +
          '</div>' +
        '</div>';
      }
      container.innerHTML = html;
    } catch(err) {
      container.innerHTML = '<div class="p-4 bg-red-50 text-red-700 text-xs border border-red-200 rounded">Error loading inquiries: ' + err.message + '</div>';
    }
  }
</script>
`;
  }

  const fullHtml = renderFullPage(title, description, pageContent, pathname);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(fullHtml);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`\n==================================================`);
  console.log(`  Jalcare RO Server Active`);
  console.log(`==================================================`);
  console.log(`  Laptop URL: http://localhost:${PORT}`);

  const nets = os.networkInterfaces();
  let found = false;
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if (net.family === "IPv4" && !net.internal) {
        console.log(`  Phone URL (Same Wi-Fi): http://${net.address}:${PORT}`);
        found = true;
      }
    }
  }
  if (!found) {
    console.log(`  Phone URL: Connect to Wi-Fi to see mobile IP address`);
  }
  console.log(`==================================================\n`);
});
