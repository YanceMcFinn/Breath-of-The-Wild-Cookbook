/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        'zelda-green': '#0d9263',
        'sheikah-slate-blue' : '#5afdfa',
        'sheikah-slate-bg': '#252926'
      },
    },
  },
  plugins: [],
}
