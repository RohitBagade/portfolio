/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#08090c",
        surface: "#0e1015",
        surface2: "#141821",
        line: "#20242e",
        ink: "#f4f5f7",
        muted: "#9aa0ab",
        accent: "#6ea8ff",
        accent2: "#b892ff",
        lime: "#c8f560",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: { content: "1180px" },
    },
  },
  plugins: [],
};
