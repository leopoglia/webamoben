/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        saira: ['var(--font-saira-stencil)'],
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "navy-blue": "#021246"
      },
    },
  },
  plugins: [],
};
