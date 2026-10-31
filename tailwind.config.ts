import type { Config } from "tailwindcss";

// Colors are CSS variables (see app/globals.css) so dark mode is a single
// variable swap instead of a dark: variant on every class.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: token("canvas"),
        raised: token("raised"),
        ink: token("ink"),
        mute: token("mute"),
        spark: token("spark"),
        rule: "rgb(var(--ink) / 0.14)",
        // Always-dark text, for use on spark backgrounds in either theme.
        coal: "rgb(23 20 15 / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        kufi: ["var(--font-kufi)", "serif"],
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
