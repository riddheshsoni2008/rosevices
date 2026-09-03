export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'maintenance' | 'pricing';
}

export const faqData: FaqItem[] = [
  {
    id: "tds-ideal",
    question: "What is the recommended TDS level for safe drinking water?",
    answer: "According to WHO and Indian Standards (IS 10500), drinking water TDS between 80 ppm and 250 ppm is considered ideal. TDS below 50 ppm may lack essential natural minerals, while TDS above 500 ppm can impart a brackish taste and long-term mineral load. Jalcare technicians calibrate your RO post-filter mineralizer to maintain optimal 120-180 ppm.",
    category: "general"
  },
  {
    id: "service-frequency",
    question: "How frequently should an RO water purifier be serviced?",
    answer: "Sediment and pre-carbon filters should be changed every 3 to 6 months depending on raw input water quality. The main RO membrane typically lasts 12 to 18 months. Regular servicing prevents bacteria build-up, maintains fast flow rates, and protects the booster pump.",
    category: "maintenance"
  },
  {
    id: "amc-benefits",
    question: "Why should I choose an AMC over booking individual repairs?",
    answer: "An AMC (Annual Maintenance Contract) saves you up to 35% annually compared to buying individual filters and paying separate visit fees. More importantly, AMC includes proactive quarterly checkups so your water quality is monitored before taste or flow issues arise.",
    category: "pricing"
  },
  {
    id: "doorstep-time",
    question: "How fast can a Jalcare technician reach my doorstep?",
    answer: "For emergency repair requests logged before 4:00 PM, we offer doorstep service within 2 hours across our primary service zones. Bookings made later in the evening are scheduled for first slot next morning (8:00 AM - 10:00 AM).",
    category: "general"
  },
  {
    id: "genuine-spares",
    question: "Do you use original spare parts for non-Jalcare RO brands?",
    answer: "Yes! We service all major brands (Kent, Aquaguard, Pureit, Havells, Blue Star, Livpure, etc.) using certified food-grade, NSF-compliant compatible filters, genuine solenoid valves, high-pressure pumps, and TFC membranes with full warranty.",
    category: "maintenance"
  },
  {
    id: "waste-water",
    question: "Why does my RO purge waste water and how can I utilize it?",
    answer: "RO membranes use cross-flow filtration to push clean water molecules through pores while flushing out dissolved impurities through the reject pipe. You can easily collect reject water in a bucket and use it for floor mopping, washing utensils, or watering garden plants.",
    category: "general"
  }
];
