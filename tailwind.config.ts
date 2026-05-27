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
        navy: "#0a1628",
        "navy-mid": "#112240",
        gold: "#c9a84c",
        "gold-light": "#e8c97a",
        "gold-dim": "#8b6d2f",
        "off-white": "#f8f6f1",
        "grey-100": "#f2f0eb",
        "grey-400": "#9a9585",
        "grey-600": "#6b6558",
        "text-dark": "#1a1612",
      },
      boxShadow: {
        gold: "0 12px 50px rgba(201,168,76,0.14)",
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
