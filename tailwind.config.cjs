/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'azul-principal': '#041F3F',
        'amarelo': '#FFDE59',
      }
    },
  },
  plugins: [],
}
