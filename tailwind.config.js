/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F8FAFC",
        ink: "#0F172A",
        soft: "#475569",
        teal: {
          primary: "#0D9488",
          hover: "#0F766E",
          light: "#F0FDFA",
          border: "#CCFBF1",
        },
        amber: {
          accent: "#D97706",
          hover: "#B45309",
        },
      },
      fontFamily: {
        serif: ["Outfit", "system-ui", "sans-serif"],
        heading: ["Outfit", "system-ui", "sans-serif"],
        sans: ["Plus Jakarta Sans", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
