/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "variable-collection-slate": "var(--variable-collection-slate)",
      },
      fontFamily: {
        "header-2": "var(--header-2-font-family)",
      },
    },
  },
  plugins: [],
}

