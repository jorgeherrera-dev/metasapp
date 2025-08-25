/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        principal: '64px'
      },
      fontSize: {  // ← Agrega esta sección
        long: '18px',  // o el tamaño que necesites
      }
    },
  },
  plugins: [],
}