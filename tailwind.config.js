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

      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'up-down': 'upDown 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
