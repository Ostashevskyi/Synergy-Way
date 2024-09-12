/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text_secondary: "rgba(var(--text_secondary))",
        text_main: "rgba(var(--text_main))",
        bg_navbar: "rgba(var(--bg_navbar))",
        border: "rgba(var(--border))",
        focus_select: "rgba(var(--focus_select))",
        hover_button: "rgba(var(--hover_button))",
      },
    },
  },
  plugins: [],
};
