export interface TroubleshootingItem {
  id: string;
  issueKey: 'water leaking' | 'bad taste' | 'low pressure' | 'red light';
  title: string;
  symptoms: string;
  possibleCauses: string[];
  quickChecklist: string[];
  actionRecommendation: string;
  severity: 'low' | 'medium' | 'high';
}

export const troubleshootingData: TroubleshootingItem[] = [
  {
    id: "leak-check",
    issueKey: "water leaking",
    title: "Water leaking beneath purifier or tank",
    symptoms: "Water dripping from filter housing, bottom tray, or wall bracket fittings.",
    possibleCauses: [
      "Worn out silicone O-ring gasket inside filter housing",
      "Cracked elbow fitting or loose poly-tube connection",
      "Excessive inlet water line pressure triggering safety valve relief"
    ],
    quickChecklist: [
      "Immediately turn off the main water supply valve connecting to the RO unit.",
      "Unplug the power adapter to avoid short circuiting electrical components.",
      "Check if leak originates from the external pre-filter bottle or internal tubing."
    ],
    actionRecommendation: "Do not operate the machine while leaking. Book a quick repair call for a technician to replace damaged tube elbows or housing seals.",
    severity: "high"
  },
  {
    id: "taste-check",
    issueKey: "bad taste",
    title: "Bad taste, foul odor, or metallic water flavor",
    symptoms: "Purified water tastes bitter, salty, chemical-like, or stale after standing.",
    possibleCauses: [
      "Exhausted post-carbon filter no longer absorbing organic odor",
      "RO membrane bypass valve open or membrane salt rejection depleted",
      "Stagnant water sitting in storage tank for over 48 hours without flushing"
    ],
    quickChecklist: [
      "Drain the entire storage tank completely through the faucet and allow it to refill once.",
      "Measure purified water TDS using a handheld TDS meter (should be between 80 and 200 ppm).",
      "If TDS is higher than raw tap water or above 300 ppm, membrane replacement is required."
    ],
    actionRecommendation: "If tank flushing doesn't restore fresh taste, your post-carbon mineralizer or RO membrane needs immediate replacement.",
    severity: "medium"
  },
  {
    id: "pressure-check",
    issueKey: "low pressure",
    title: "Low water flow or slow tank filling rate",
    symptoms: "Water trickles extremely slowly from the dispenser tap or takes 3+ hours to fill 7L tank.",
    possibleCauses: [
      "Clogged sediment or pre-carbon filter restricting raw water inlet flow",
      "Low pressure in internal air bladder of pressurized storage tank",
      "Weak booster pump output pressure (below 60 PSI requirement)"
    ],
    quickChecklist: [
      "Ensure inlet feed valve is fully turned open.",
      "Verify if raw supply pressure from your tap is normal.",
      "Listen for booster pump humming sound when purifier is switched on."
    ],
    actionRecommendation: "Clean or replace clogged pre-filters. If pump sound is faint or missing, pump head or adapter replacement is recommended.",
    severity: "medium"
  },
  {
    id: "light-check",
    issueKey: "red light",
    title: "Red light indicator glowing or alarm beeping",
    symptoms: "Purifier stops dispensing water; red indicator light flashes or continuous chime sounds.",
    possibleCauses: [
      "UV lamp failure or UV ballast circuit trip",
      "Auto-cut off sensor activated due to low inlet supply pressure",
      "Filter expiry timer reached (in smart digital purifiers)"
    ],
    quickChecklist: [
      "Check if overhead tank has ran out of water or inlet tap is closed.",
      "Switch off power for 2 minutes and turn back on to reset the PCB controller.",
      "Inspect if red light specifically says 'UV' or 'Change Filter'."
    ],
    actionRecommendation: "A persistent red light or UV alarm indicates UV chamber failure. Avoid drinking unboiled water until inspected by a technician.",
    severity: "high"
  }
];
