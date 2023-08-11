/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        base: {
          DEFAULT: '#EEEEEE',
        },
        title: {
          DEFAULT: '#585858',
        },
        header: {
          DEFAULT: '#3A3C5A',
          100: '#9D59FF',
        },
        price: {
          DEFAULT: '#1C1C1C',
        },
        description: {
          DEFAULT: '#8B96A5'
        },
      },
      padding: {
        'default': '64px',
      },
    },
  },
  plugins: [],
}
