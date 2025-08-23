import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazir", "sans-serif"], // <--- اینجا اضافه می‌کنیم
      },
    },
  },
  plugins: [],
};

export default config;
