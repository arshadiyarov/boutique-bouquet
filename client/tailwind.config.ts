import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        "extra-light": "var(--extra-light)",
        "light-gray": "var(--light-gray)",
        gray: "var(--gray)",
        "dark-gray": "var(--dark-gray)",
        black: "var(--black)",
        success: "var(--success)",
        error: "var(--error)",
      },
      keyframes: {
        moveUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        moveDown: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        moveUp: "moveUp 0.3s forwards",
        moveDown: "moveDown 0.3s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
