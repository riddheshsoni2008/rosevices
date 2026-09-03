export interface ServiceItem {
  id: string;
  category: 'product' | 'repair' | 'amc';
  title: string;
  description: string;
  price: string;
  period?: string;
  turnaround: string;
  features: string[];
  popular?: boolean;
}

export const serviceData: ServiceItem[] = [
  {
    id: "standard-repair",
    category: "repair",
    title: "On-demand repair & diagnostic check",
    description: "Complete health audit of your RO system, including leak inspection, electrical circuit check, and pump pressure test.",
    price: "₹299",
    period: "per visit",
    turnaround: "Same day (within 2 hours)",
    features: [
      "Full 12-point hardware and filter inspection",
      "Free raw and purified water TDS measurement",
      "Minor loose fitting fix included",
      "No hidden call-out charge if service is approved"
    ],
    popular: true,
  },
  {
    id: "filter-replacement",
    category: "repair",
    title: "Sediment & pre-carbon filter replacement",
    description: "Removal of accumulated silt, rust, and chlorine taste using authentic food-grade filtration cartridges.",
    price: "₹650",
    period: "including part",
    turnaround: "30-45 minutes",
    features: [
      "High-density spun sediment filter cartridge",
      "Activated coconut shell carbon filter",
      "O-ring ring seal change for leak prevention",
      "System flushing prior to reconnection"
    ],
  },
  {
    id: "membrane-replacement",
    category: "repair",
    title: "RO membrane replacement (75/80 GPD)",
    description: "High-rejection thin-film composite (TFC) membrane installation to restore low TDS and pure taste.",
    price: "₹1,450",
    period: "with 6-month warranty",
    turnaround: "45 minutes",
    features: [
      "95%+ salt rejection capacity",
      "Certified NSF food-grade material",
      "Includes flow restrictor valve calibration",
      "6-month unconditional performance guarantee"
    ],
  },
  {
    id: "essential-amc",
    category: "amc",
    title: "Essential Annual Maintenance Contract",
    description: "Hassle-free yearly coverage ensuring pure drinking water round the year with scheduled quarterly filter changes.",
    price: "₹2,499",
    period: "per year",
    turnaround: "Scheduled quarterly + emergency calls",
    features: [
      "3 free scheduled service visits per year",
      "2 sediment and pre-carbon filter replacements included",
      "Unlimited breakdown complaint visits",
      "15% discount on membrane or booster pump replacement"
    ],
    popular: true,
  },
  {
    id: "comprehensive-amc",
    category: "amc",
    title: "Comprehensive Complete AMC",
    description: "All-inclusive peace of mind contract covering all filters, RO membrane, electrical components, and booster pump.",
    price: "₹3,999",
    period: "per year",
    turnaround: "Priority 2-hour doorstep response",
    features: [
      "4 scheduled quarterly maintenance visits",
      "100% free RO membrane replacement",
      "Free booster pump and adapter repair/replacement",
      "Zero cost for all spare parts and labor calls"
    ],
  },
  {
    id: "jalcare-smart-ro",
    category: "product",
    title: "Jalcare Aqua Pure 8-Stage Copper RO",
    description: "Advanced household purifier with Copper-Zinc enrichment, UV sanitization, and real-time digital TDS indicator.",
    price: "₹11,499",
    period: "includes free installation",
    turnaround: "Next morning installation",
    features: [
      "10 Litre food-grade transparent storage tank",
      "Active copper + alkaline mineral balance module",
      "Smart auto shut-off and leak detection sensor",
      "1-year comprehensive onsite warranty included"
    ],
    popular: true,
  },
  {
    id: "jalcare-compact-ro",
    category: "product",
    title: "Jalcare Wall-Mount Compact UV+RO",
    description: "Sleek wall-mounted purifier designed for compact kitchen spaces with high purification speed.",
    price: "₹8,999",
    period: "includes free installation",
    turnaround: "Next morning installation",
    features: [
      "7 Litre airtight storage tank",
      "Suitable for borewell, tanker, and municipal water",
      "Stainless steel UV chamber",
      "1-year warranty with 2 free preventive checkups"
    ],
  },
  {
    id: "jalcare-commercial-ro",
    category: "product",
    title: "Jalcare Commercial 50 LPH Purifier",
    description: "Heavy-duty water purification unit built for offices, restaurants, schools, and small institutions.",
    price: "₹24,500",
    period: "commercial installation",
    turnaround: "24-48 hours setup",
    features: [
      "Dual 100 GPD membranes and twin heavy booster pumps",
      "Sturdy stainless steel frame chassis",
      "Continuous purification up to 50 litres per hour",
      "Comprehensive 1-year commercial maintenance contract"
    ],
  }
];
