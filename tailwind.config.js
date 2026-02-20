/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2066",
          light: "#2A3590",
          dark: "#0F1442",
          darker: "#0B0F2E",
        },
        brand: {
          blue: "#3B4FBF",
          accent: "#4A5FC1",
          muted: "#6B7094",
          light: "#E8ECF8",
        },
      },
      fontFamily: {
        display: ['"Outfit"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
      },
    },
  },
  plugins: [],
};
