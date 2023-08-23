/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: ['./*.html',"./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

