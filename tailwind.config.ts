import type { Config } from "tailwindcss";

const config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        accent: "#00FFF0",
      },
    },
  },
} satisfies Config;

export default config;
