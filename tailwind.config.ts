import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Pure grayscale foundation — no accent hue anywhere.
        background: "#000000",
        foreground: "#fafafa",
        muted: "#a3a3a3",
        line: "rgba(255, 255, 255, 0.1)",
        surface: "rgba(255, 255, 255, 0.02)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter-tight)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      keyframes: {
        // Traces a white → transparent gradient around a card edge on hover.
        trace: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        // Sweeps a shimmer across the primary CTA.
        shimmer: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        trace: "trace 1.6s linear infinite",
        shimmer: "shimmer 0.9s ease-out",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
