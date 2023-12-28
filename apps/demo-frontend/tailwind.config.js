/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: '6rem'
    },
  },
  plugins: [
    require('flowbite/plugin')//Does not seem to load the css files. So, I manually added them to demo-frontend/src/assets
  ],
}

