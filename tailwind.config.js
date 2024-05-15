/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#B026FF',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
