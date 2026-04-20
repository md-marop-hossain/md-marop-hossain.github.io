/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        ink: {
          950: "#06060a",
          900: "#0a0a12",
          800: "#10101c",
          700: "#16162a",
          600: "#1f1f3a",
        },
        frost: {
          DEFAULT: "#06b6d4",
          soft: "#22d3ee",
          deep: "#0891b2",
        },
        violet: {
          glow: "#155e75",
          deep: "#164e63",
        },
        magenta: {
          glow: "#083344",
        },
      },
      backgroundImage: {
        "gradient-signature":
          "linear-gradient(135deg, #22d3ee 0%, #0e7490 50%, #083344 100%)",
        "gradient-signature-soft":
          "linear-gradient(135deg, rgba(34,211,238,0.18) 0%, rgba(14,116,144,0.16) 50%, rgba(8,51,68,0.2) 100%)",
        "gradient-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 100%)",
        "gradient-mesh":
          "radial-gradient(at 18% 12%, rgba(6,182,212,0.22) 0px, transparent 45%), radial-gradient(at 85% 8%, rgba(14,116,144,0.2) 0px, transparent 45%), radial-gradient(at 50% 95%, rgba(8,51,68,0.2) 0px, transparent 50%), radial-gradient(at 10% 85%, rgba(8,145,178,0.18) 0px, transparent 45%)",
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.6s ease both",
        "scale-in": "scale-in 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "blob-1": "blob 18s ease-in-out infinite",
        "blob-2": "blob 22s ease-in-out infinite 2s",
        "blob-3": "blob 26s ease-in-out infinite 4s",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-14px) translateX(6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-20px,30px) scale(0.95)" },
        },
        "pulse-glow": {
          "0%,100%": {
            boxShadow:
              "0 0 0 0 rgba(6,182,212,0.35), 0 0 40px -10px rgba(14,116,144,0.45)",
          },
          "50%": {
            boxShadow:
              "0 0 0 12px rgba(6,182,212,0), 0 0 60px -10px rgba(14,116,144,0.65)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 20px 80px -20px rgba(6,182,212,0.32)",
        "glow-violet": "0 20px 80px -20px rgba(14,116,144,0.38)",
        inset: "inset 0 1px 0 0 rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};
