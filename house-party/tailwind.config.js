/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    daisyui: {
      // themes: ["light"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
