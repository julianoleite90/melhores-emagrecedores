/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8F9FA',
        secondary: '#FFFFFF',
        accent: '#4CAF50',
        'accent-hover': '#3E8E41',
        'accent-light': '#E8F5E9',
        text: '#333333',
        'text-light': '#666666',
        border: '#E0E0E0',
        highlight: '#FF5722',
        'highlight-hover': '#E64A19',
        star: '#FFC107',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
} 