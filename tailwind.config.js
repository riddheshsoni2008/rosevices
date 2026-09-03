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
        paper: "#FBFDFC",
        ink: "#10201D",
        soft: "#43554F",
        teal: {
          primary: "#0E5C56",
          hover: "#1D7A72",
          light: "#E7F3F1",
          border: "#CFE6E2",
        },
        amber: {
          accent: "#C98A2E",
          hover: "#B27823",
        },
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
