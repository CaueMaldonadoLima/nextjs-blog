import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'primaryPurple': '#8E44ED',
      'secondaryPurple': '#B38BFF',
      'primaryGray': '#505077',
      'lightText': '#32324A',
      'darkText': '#FFFFFF',
      'lightBg': '#FFFFFF',
      'darkBg': '#181A1B',
      'shadowDarkBg': '#1D2021',
      'shadowLightBg': '#F5F5F5',
    }
  },
  plugins: [],
};
export default config;
