import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#002050",
        "navy-mid": "#0B2347",
        gold: "#00D8CC",
        "gold-light": "#46F0E7",
        "gold-dim": "#A4F8F3",
        "off-white": "#F7FBFF",
        "grey-100": "#DFE8EF",
        "grey-200": "#C8D8E3",
        "grey-300": "#9FB8C0",
        "grey-400": "#6D86A0",
        "grey-500": "#4F6B8B",
        "grey-600": "#30425F",
        "text-dark": "#0B203F",
        "accent-blue": "#00D8CC",
        "accent-lime": "#46F0E7",
      },
      boxShadow: {
        gold: "0 12px 50px rgba(0,216,204,0.14)",
        "gold-lg": "0 20px 60px rgba(0,216,204,0.18)",
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5" }],
        sm: ["0.9375rem", { lineHeight: "1.57" }],
        base: ["1.0625rem", { lineHeight: "1.6" }],
        lg: ["1.25rem", { lineHeight: "1.55" }],
        xl: ["1.375rem", { lineHeight: "1.5" }],
        "2xl": ["1.625rem", { lineHeight: "1.4" }],
        "3xl": ["2rem", { lineHeight: "1.35" }],
        "4xl": ["2.5rem", { lineHeight: "1.25" }],
        "5xl": ["3.25rem", { lineHeight: "1.15" }],
        "6xl": ["4rem", { lineHeight: "1.1" }],
        "7xl": ["4.75rem", { lineHeight: "1.05" }],
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
        code: [
          "var(--font-code)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
