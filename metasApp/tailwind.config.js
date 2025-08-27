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
      fontSize: {
        long: '18px',
      },
      // 🔥 NUEVO: Agrega estas sombras neumórficas
      boxShadow: {
        'neumorph-light': [
          '5px 5px 10px rgba(0, 0, 0, 0.1)',
          '-5px -5px 10px rgba(255, 255, 255, 0.5)'
        ].join(', '),
        'neumorph-dark': [
          '5px 5px 10px rgba(0, 0, 0, 0.2)',
          '-5px -5px 10px rgba(255, 255, 255, 0.1)'
        ].join(', '),
        'neumorph-inset': [
          'inset 2px 2px 5px rgba(0, 0, 0, 0.1)',
          'inset -2px -2px 5px rgba(255, 255, 255, 0.5)'
        ].join(', ')
      },
      // 🎨 Color de fondo típico para neumorfismo
      colors: {
        'neumorph-bg': '#f0f0f0',
        'neumorph-bg-dark': '#e0e0e0'
      }
    },
  },
  plugins: [],
}