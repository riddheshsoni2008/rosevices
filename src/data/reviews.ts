export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  serviceType: string;
  date: string;
  quote: string;
  verified: boolean;
}

export const reviewData: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Rajesh Sharma",
    location: "Sector 14, Resident",
    rating: 5,
    serviceType: "RO Repair & Membrane Change",
    date: "14 Aug 2026",
    quote: "Our RO started leaking water on a Sunday morning. Jalcare technician arrived within 90 minutes, replaced the cracked elbow and membrane with genuine parts, and checked our TDS levels before leaving. Extremely prompt and honest pricing.",
    verified: true
  },
  {
    id: "rev-2",
    name: "Priya Nair",
    location: "Riverside Apartments, Flat 402",
    rating: 5,
    serviceType: "Comprehensive AMC Plan",
    date: "28 Jul 2026",
    quote: "I've been on their annual AMC for two years now. Never had to call twice for regular servicing. They send automatic SMS reminders and their engineers are polite, clean, and knowledgeable.",
    verified: true
  },
  {
    id: "rev-3",
    name: "Anand Kulkarni",
    location: "Green Park Colony",
    rating: 5,
    serviceType: "Jalcare Aqua Pure 8-Stage Purchase",
    date: "03 Jul 2026",
    quote: "Purchased the Copper RO unit for our home. The water taste improved dramatically from our high-borewell supply (TDS dropped from 850 ppm to 140 ppm). Demo and installation were completely free.",
    verified: true
  },
  {
    id: "rev-4",
    name: "Meenakshi Sundaram",
    location: "Sunrise Enclave",
    rating: 5,
    serviceType: "Filter & Carbon Cartridge Change",
    date: "19 Jun 2026",
    quote: "Clean, transparent price list on their website so there were no surprises. Technician gave me the old removed filters in a bag as proof of replacement. Highly professional team.",
    verified: true
  },
  {
    id: "rev-5",
    name: "Vikramjit Singh",
    location: "City Center Commercial Hub",
    rating: 5,
    serviceType: "Commercial 50 LPH Purifier",
    date: "02 May 2026",
    quote: "We installed Jalcare's 50 LPH commercial purifier at our IT office cafeteria. Handles continuous usage by 60 employees smoothly without overheating or low pressure.",
    verified: true
  },
  {
    id: "rev-6",
    name: "Sunita Patel",
    location: "Mayur Vihar, Block C",
    rating: 5,
    serviceType: "Emergency Solenoid Repair",
    date: "11 Apr 2026",
    quote: "The water dispenser stopped completely with a red indicator. Called Jalcare at 10 AM, job was done by 11:30 AM. Fair technician who explained the fault clearly instead of upselling unnecessarily.",
    verified: true
  }
];
