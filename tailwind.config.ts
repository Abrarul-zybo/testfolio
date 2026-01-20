import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0c12",
        mist: "#cbd5f5",
        accent: "#7cf0ff",
        ember: "#f76f8e",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 240, 255, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
