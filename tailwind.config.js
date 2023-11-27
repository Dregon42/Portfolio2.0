/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "variable-collection-cool-blue": "var(--variable-collection-cool-blue)",
        "variable-collection-slate": "var(--variable-collection-slate)",
      },
      fontFamily: {
        body: "var(--body-font-family)",
        "header-2": "var(--header-2-font-family)",
        skills: "var(--skills-font-family)",
      },
    },
  },
  plugins: [],
};
