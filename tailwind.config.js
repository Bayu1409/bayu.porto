/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueprint: {
          950: "#071B33",
          900: "#0B2545",
          800: "#13315C",
          700: "#1B4173",
          line: "#5E85AC",
          paper: "#EEF4ED",
          paperdim: "#D7E3EA",
        },
        pencil: {
          DEFAULT: "#FF6B35",
          soft: "#FFB627",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(94,133,172,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(94,133,172,0.15) 1px, transparent 1px)",
        dotgrid: "radial-gradient(rgba(94,133,172,0.35) 1px, transparent 1.5px)",
      },
      backgroundSize: {
        grid: "32px 32px",
        dotgrid: "20px 20px",
      },
    },
  },
  plugins: [],
}
