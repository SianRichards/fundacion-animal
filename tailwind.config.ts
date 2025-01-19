/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    screens: {
      mobile: "350px",
      tablet: "700px",
      desktop: "1024px",
    },
    extend: {
      backgroundImage: {
        "santa-marta": "url('/images/santa-marta-at-night.jpeg')",
      },
    },
  },
  plugins: [],
};
