/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#090d16",
          card: "#0e1526",
          border: "#1e293b",
          neon: "#06b6d4",
          gold: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
};
