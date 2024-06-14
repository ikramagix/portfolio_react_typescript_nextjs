import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "15rem",
        "2xl": "22rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        spinSlow: 'spin 9s linear infinite',
        spinMediumSlow: 'spin 7s linear infinite',
        spinMedium: 'spin 5s linear infinite',
        spinFastMedium: 'spin 3s linear infinite',
        spinFast: 'spin 2s linear infinite',
        spinVeryFast: 'spin 1s linear infinite'
      },
    },
  },
  plugins: [],
};
export default config;
