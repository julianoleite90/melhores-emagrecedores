import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-light': 'var(--accent-light)',
        text: 'var(--text)',
        'text-light': 'var(--text-light)',
        border: 'var(--border)',
        star: 'var(--star-color)',
        highlight: 'var(--highlight)',
        'highlight-hover': 'var(--highlight-hover)',
        'cta-green': {
          DEFAULT: 'var(--cta-green)',
          hover: 'var(--cta-green-hover)',
        },
      },
      boxShadow: {
        custom: 'var(--shadow)',
        cta: 'var(--cta-shadow)',
        'cta-hover': 'var(--cta-shadow-hover)',
      },
      spacing: {
        'header': 'var(--header-height)',
        'footer': 'var(--footer-height)',
      },
      maxWidth: {
        'content': 'var(--content-width)',
      },
      padding: {
        'container': 'var(--container-padding)',
        'container-mobile': 'var(--container-padding-mobile)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      willChange: {
        'transform': 'transform',
      },
      transformOrigin: {
        'gpu': 'translateZ(0)',
      },
    },
  },
  plugins: [],
}

export default config 