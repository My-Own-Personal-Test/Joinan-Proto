/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        disabled: '#4b5563',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#31b057',
          'secondary': '#388bf2',
          'accent': '#fbaf18',
          'neutral': '#727272',
          'base-100': '#ffffff',
          'info': '#388bf2',
          'success': '#2ecc71',
          'warning': '#f1c40f',
          'error': '#e74c3c',
        },
        dark: {
          'primary': '#31b057',
          'secondary': '#388bf2',
          'accent': '#fbaf18',
          'neutral': '#2b2a3c',
          'base-100': '#353c4b',
          'info': '#388bf2',
          'success': '#2ecc71',
          'warning': '#f1c40f',
          'error': '#e74c3c',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
