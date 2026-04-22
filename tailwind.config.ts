import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1a2a3a",    // Deep marine base
          orange: "#C9A0DC", // Your signature light purple
          slate: "#334155",   // Neutral for text/borders
        },
      },
    },
  },
  plugins: [],
};
export default config;