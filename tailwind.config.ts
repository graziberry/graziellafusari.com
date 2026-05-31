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
        background: "#F8F2EA",
        surface: "#FFFDF8",
        cream: "#EFE4D6",
        sand: "#D8C3AA",
        "warm-beige": "#C9AE91",
        terracotta: "#C8755B",
        "soft-terracotta": "#D99A82",
        sage: "#7D876D",
        "soft-sage": "#A7AD98",
        brown: "#5A3323",
        "light-brown": "#8A5A44",
        blush: "#E5B8A9",
        line: "#E2D4C4",
        ink: "#241A15",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(90, 51, 35, 0.08)",
        lift: "0 26px 70px rgba(90, 51, 35, 0.14)",
      },
      borderRadius: {
        card: "8px",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Cormorant Garamond", "serif"],
        body: ["var(--font-body)", "Montserrat", "sans-serif"],
        script: ["var(--font-script)", "Allura", "cursive"],
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
