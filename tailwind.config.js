/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#56A9DE',
        secondary: '#FFFFFF',
        accent: '#2A4E6E',
        darkBlue: '#1A365D',
        lightBlue: '#7CC2F8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #56A9DE, #2A4E6E)',
        'gradient-secondary':
          'linear-gradient(135deg, #56A9DE 0%, #1A365D 100%)',
      },
      boxShadow: {
        custom: '0 10px 25px -5px rgba(86, 169, 222, 0.25)',
        button: '0 4px 14px 0 rgba(86, 169, 222, 0.39)',
      },
    },
  },
  plugins: [],
};
